interface BitDisplayProps {
  code: string;
}

export const BitDisplay = ({ code }: BitDisplayProps) => {
  const memoryArray = code.split("");

  return (
    <div className="grid-cols-32 grid h-8 grid-flow-col border border-black">
      {memoryArray.map((bit) => (
        <span className="flex items-center justify-center border border-black text-sm text-black">
          {bit}
        </span>
      ))}
    </div>
  );
};
