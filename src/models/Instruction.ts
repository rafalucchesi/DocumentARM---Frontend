export interface Instruction {
  name: string;
  mnemonic: string;
  description: string;
  opcode: string;
  syntax: [
    {
      format: string;
      explanation: {
        Rd: string;
        Rn: string;
        operand2: string;
      };
    },
    {
      format: string;
      explanation: {
        S: string;
        Rd: string;
        Rn: string;
        Rm: string;
        shift: string;
      };
    },
  ];
  bit_encoding: {
    conditional: string;
    opcode: string;
    S_flag: string;
    Rn: string;
    Rd: string;
    operand2: string;
  };
  condition_flags: {
    N: string;
    Z: string;
    C: string;
    V: string;
  };
  examples: [
    {
      description: string;
      code: string;
    },
    {
      description: string;
      code: string;
    },
  ];
}
