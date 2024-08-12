"use client";

import { BitDisplay } from "@/components/bitDisplay/bitDisplay";
import InstructionSearch from "@/components/InstructionSearch/instructionSearch";
import { instructionsMock } from "@/fixtures/instructionsMock";
import { Instruction } from "@/models/Instruction";
import { useState } from "react";

const InstructionsPage = () => {
  const [selectedInstruction, setSelectedInstruction] = useState<Instruction>();
  const data = instructionsMock;
  return (
    <main className="flex h-full w-full flex-col gap-6 overflow-clip bg-white p-10">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-center text-xl font-bold text-black">
          DocumentARM
        </h1>
        <InstructionSearch
          instructions={data}
          onSearch={setSelectedInstruction}
        />
        {selectedInstruction ? (
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-base font-bold">{`${selectedInstruction.mnemonic} - ${selectedInstruction.name}`}</h1>
            <span className="text-black">
              {selectedInstruction.description}
            </span>
            <section>
              <h2 className="text-base font-bold">Syntax</h2>
              {selectedInstruction.syntax.map((item) => (
                <>
                  <h3>{`${item.format}`}</h3>
                  <h4>{`${item.explanation}`}</h4>
                </>
              ))}
            </section>
            <section>
              <h2 className="text-base font-bold">Examples</h2>
              {selectedInstruction.examples.map((example) => (
                <>
                  <h3>{`${example.code}`}</h3>
                  <h4>{`${example.description}`}</h4>
                </>
              ))}
            </section>
            <BitDisplay code={selectedInstruction.opcode} />
            <span className="flex flex-col gap-3">
              <h3>
                {`conditional: ${selectedInstruction.bit_encoding.conditional}`}
              </h3>
              <h3>{`opcode: ${selectedInstruction.bit_encoding.opcode}`}</h3>
              <h3>{`s flag: ${selectedInstruction.bit_encoding.S_flag}`}</h3>
              <h3>{`Rn: ${selectedInstruction.bit_encoding.Rn}`}</h3>
              <h3>{`Rd: ${selectedInstruction.bit_encoding.Rd}`}</h3>
              <h3>{`Rd: ${selectedInstruction.bit_encoding.operand2}`}</h3>
            </span>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default InstructionsPage;
