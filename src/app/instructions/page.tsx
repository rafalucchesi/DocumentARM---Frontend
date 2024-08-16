"use client";

import InstructionSearch from "@/components/InstructionSearch/instructionSearch";

const InstructionsPage = () => {
  return (
    <main className="flex h-full w-full flex-col gap-6 overflow-scroll bg-white p-10">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-center text-xl font-bold text-black">
          DocumentARM
        </h1>
        <InstructionSearch />
      </div>
    </main>
  );
};

export default InstructionsPage;
