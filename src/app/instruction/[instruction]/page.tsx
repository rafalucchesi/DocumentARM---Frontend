"use client";

import { useParams, useRouter } from "next/navigation";
import { instructionsMock } from "@/fixtures/instructionsMock";
import { BitDisplay } from "@/components/bitDisplay/bitDisplay";
import BackArrowIcon from "../../../../public/backArrow.svg";
import Image from "next/image";

const InstructionPage = () => {
  const router = useRouter();
  const params = useParams();
  const instruction = params.instruction;

  const selectedInstruction = instructionsMock.find(
    (inst) => inst.mnemonic === instruction,
  );

  if (!selectedInstruction) {
    return <p>Instruction not found.</p>;
  }

  return (
    <main className="flex h-full w-full flex-col gap-6 overflow-scroll bg-white p-10">
      <button
        className="mb-4 flex flex-row self-start rounded px-4 py-2 text-white"
        onClick={() => router.push("/instructions")}
      >
        <Image src={BackArrowIcon} alt="back arrow" width={36} height={36} />
      </button>
      <h1 className="text-center text-base font-bold">{`${selectedInstruction.mnemonic} - ${selectedInstruction.name}`}</h1>
      <span className="text-black">{selectedInstruction.description}</span>
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
                <p className="mt-1 font-mono">Example: {mode.example.code}</p>
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
            <h2 className="mt-4 text-xl font-semibold">Condition Flags</h2>
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
    </main>
  );
};

export default InstructionPage;
