import { instructionsList } from "@/fixtures/instructionsList";
import { instructionsMock } from "@/fixtures/instructionsMock";
import { Instruction } from "@/models/Instruction";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface SimplfiedInstruction {
  name: string;
  mnemonic: string;
}

interface InstructionSearchProps {
  onSearch: Dispatch<SetStateAction<Instruction | undefined>>;
}

const InstructionSearch = ({ onSearch }: InstructionSearchProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SimplfiedInstruction[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    console.log("value", value);
    setQuery(value);

    if (value.length > 0) {
      const filteredSuggestions = instructionsList.filter(
        (instruction) =>
          instruction.mnemonic.toLowerCase().includes(value.toLowerCase()) ||
          instruction.name.toLowerCase().includes(value.toLowerCase()),
      );
      console.log("filteredSuggestions", filteredSuggestions);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: SimplfiedInstruction) => {
    setQuery(suggestion.mnemonic);
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    const selected = instructionsList.find(
      (instruction) =>
        instruction.mnemonic.toLowerCase() === query.toLowerCase() ||
        instruction.name.toLowerCase() === query.toLowerCase(),
    );

    if (selected) {
      const completeInstruction = instructionsMock.find(
        (instruction) => instruction.mnemonic === selected.mnemonic,
      );
      onSearch(completeInstruction);
    } else {
      onSearch(undefined);
    }
  };

  return (
    <div className="relative">
      <div className="flex w-full content-center justify-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search by instruction code or name"
          className="w-[60%] rounded border border-gray-300 p-2 pr-10 text-black"
        />
        <button
          onClick={handleSearchClick}
          className="absolute right-[20%] top-1/2 -translate-y-1/2 transform rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          🔍
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute left-[20%] top-full mt-1 max-h-40 w-[60%] overflow-y-auto rounded border border-gray-300 bg-white text-black">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              <strong>{suggestion.mnemonic}</strong> - {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InstructionSearch;
