interface BitDisplayProps {
  bitEncoding: {
    full_encoding?: string;
    full_encoding_immediate?: string;
    full_encoding_register?: string;
    fields: {
      [key: string]: {
        description: string;
        bits: string;
        example?: string;
        value?: string;
      };
    };
  };
}

const COLORS = [
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-red-300",
  "bg-purple-300",
  "bg-orange-300",
  "bg-pink-300",
  "bg-teal-300",
  "bg-indigo-300",
  "bg-cyan-300",
  "bg-lime-300",
  "bg-amber-300",
];

export const BitDisplay = ({ bitEncoding }: BitDisplayProps) => {
  const { full_encoding, fields } = bitEncoding;

  const getBitRange = (bitRange: string) => {
    if (bitRange.includes("-")) {
      const [start, end] = bitRange.split("-").map(Number);
      return Array.from({ length: start - end + 1 }, (_, i) => start - i);
    } else {
      const bit = Number(bitRange);
      return [bit];
    }
  };

  // Inicializando o array de memória com '?' para todos os 32 bits
  const memoryArray: { bit: string; color: string; description: string }[] =
    Array(32).fill({
      bit: "0",
      color: "bg-gray-500",
      description: "Undefined field",
    });

  // Ordenando os campos com base no primeiro bit do intervalo para garantir a ordem correta
  const sortedFields = Object.keys(fields).sort((a, b) => {
    const [aStart] = getBitRange(fields[a].bits);
    const [bStart] = getBitRange(fields[b].bits);
    return bStart - aStart;
  });

  sortedFields.forEach((key, index) => {
    const field = fields[key];
    const color = COLORS[index % COLORS.length];

    const bitRange = getBitRange(field.bits);
    bitRange.forEach((bitIndex) => {
      memoryArray[bitIndex] = {
        bit: "?",
        color,
        description: field.description,
      };
    });

    if (field.value) {
      const bits = field.value.split("");
      bitRange.forEach((bitIndex, i) => {
        memoryArray[bitIndex].bit = bits[i] || "0";
      });
    }
  });

  // Processando full_encoding para detectar bits que não foram especificados nos fields
  if (full_encoding) {
    const encodingParts = full_encoding.split("|");
    let bitPosition = 31;

    encodingParts.forEach((part) => {
      if (part.includes("0") || part.includes("1")) {
        part.split("").forEach((bit) => {
          if (memoryArray[bitPosition].description === "Undefined field") {
            memoryArray[bitPosition] = {
              bit,
              color: "bg-gray-200", // Cor padrão para bits não especificados
              description: "Default encoding bit",
            };
          }
          bitPosition--;
        });
      } else {
        bitPosition -= part.length;
      }
    });
  }

  return (
    <div className="mt-4 flex flex-col items-center gap-6">
      <h2 className="text-xl font-semibold">Bit encoding</h2>
      <div className="grid-cols-32 grid grid-flow-col border-black">
        {memoryArray.reverse().map((bitInfo, index) => (
          <div className="flex flex-col items-center">
            <span
              key={index}
              className={`flex items-center justify-center border border-black p-3 text-sm text-black ${bitInfo.color}`}
            >
              {bitInfo.bit}
            </span>
            {31 - index}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        {sortedFields.map((key, index) => (
          <div
            key={index}
            className={`text-sm ${COLORS[index % COLORS.length]}`}
          >
            <strong>{key.toUpperCase()}:</strong> {fields[key].description}
          </div>
        ))}
      </div>
    </div>
  );
};
