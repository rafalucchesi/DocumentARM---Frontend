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
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-red-200",
  "bg-purple-200",
  "bg-orange-200",
  "bg-pink-200",
  "bg-teal-200",
];

export const BitDisplay = ({ bitEncoding }: BitDisplayProps) => {
  const { full_encoding, fields } = bitEncoding;

  // Função para obter um intervalo de bits (ex: "31-28" -> [31, 30, 29, 28])
  const getBitRange = (bitRange: string) => {
    if (bitRange.includes("-")) {
      const [start, end] = bitRange.split("-").map(Number);
      return Array.from({ length: start - end + 1 }, (_, i) => start - i);
    } else {
      const bit = Number(bitRange);
      return [bit];
    }
  };

  // Montando o array de bits com suas respectivas cores e descrições
  const memoryArray: { bit: string; color: string; description: string }[] = [];

  Object.keys(fields).forEach((key, index) => {
    const field = fields[key];
    const color = COLORS[index % COLORS.length]; // Seleciona uma cor da paleta

    const bitRange = getBitRange(field.bits);
    bitRange.forEach((bitIndex) => {
      memoryArray[bitIndex] = {
        bit: "?",
        color,
        description: field.description,
      }; // Placeholder para bit (substituir por valor real se disponível)
    });

    // Caso tenha um valor definido no campo, preencher o array com esses bits
    if (field.value) {
      const bits = field.value.split(""); // Exemplo: "0100"
      bitRange.forEach((bitIndex, i) => {
        memoryArray[bitIndex].bit = bits[i] || "?";
      });
    }
  });

  return (
    <div className="flex flex-col items-center">
      <div className="grid-cols-32 grid h-8 grid-flow-col border border-black">
        {memoryArray.reverse().map((bitInfo, index) => (
          <span
            key={index}
            className={`flex items-center justify-center border border-black text-sm text-black ${bitInfo.color}`}
          >
            {bitInfo.bit}
          </span>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2">
        {Object.keys(fields).map((key, index) => (
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
