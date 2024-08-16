"use client";

import { BitDisplay } from "@/components/bitDisplay/bitDisplay";
import InstructionSearch from "@/components/InstructionSearch/instructionSearch";
import { Instruction } from "@/models/Instruction";
import { useState } from "react";

const InstructionsPage = () => {
  const [selectedInstruction, setSelectedInstruction] = useState<Instruction>();
  return (
    <main className="flex h-full w-full flex-col gap-6 overflow-scroll bg-white p-10">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-center text-xl font-bold text-black">
          DocumentARM
        </h1>
        <InstructionSearch onSearch={setSelectedInstruction} />
        {selectedInstruction ? (
          <div className="flex flex-col gap-3">
            <h1 className="text-center text-base font-bold">{`${selectedInstruction.mnemonic} - ${selectedInstruction.name}`}</h1>
            <span className="text-black">
              {selectedInstruction.description}
            </span>
            <section>
              {/* Sintaxe */}
              <h2 className="mt-4 text-xl font-semibold">Syntax</h2>
              {selectedInstruction.syntax.map((syntaxItem, index) => (
                <div key={index} className="mt-2 rounded border p-2">
                  <p className="font-mono">{syntaxItem.format}</p>
                  <ul className="mt-2">
                    {Object.entries(syntaxItem.explanation).map(
                      ([field, explanation]) => (
                        <li key={field}>
                          <strong>{field}:</strong> {explanation}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </section>
            <section>
              {/* Operand Modes */}
              {selectedInstruction.operand_modes.length > 0 && (
                <>
                  <h2 className="mt-4 text-xl font-semibold">Operand Modes</h2>
                  {selectedInstruction.operand_modes.map((mode, index) => (
                    <div key={index} className="mt-2 rounded border p-2">
                      <p className="font-semibold">{mode.mode}</p>
                      <p>{mode.description}</p>
                      <p className="mt-1 font-mono">
                        Example: {mode.example.code}
                      </p>
                      <p>{mode.example.description}</p>
                    </div>
                  ))}
                </>
              )}
            </section>
            <BitDisplay bitEncoding={selectedInstruction.bit_encoding} />
            <span className="flex flex-col gap-3">
              {selectedInstruction.condition_flags && (
                <>
                  <h2 className="mt-4 text-xl font-semibold">
                    Condition Flags
                  </h2>
                  <div className="mt-2 rounded border p-2">
                    <ul>
                      {Object.entries(selectedInstruction.condition_flags).map(
                        ([flag, description]) => (
                          <li key={flag}>
                            <strong>{flag}:</strong> {description}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </>
              )}
            </span>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default InstructionsPage;
