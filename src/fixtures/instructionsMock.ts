import { Instruction } from "@/models/Instruction";

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

export const instructionsMock: Instruction[] = [
  {
    name: "Add",
    mnemonic: "ADD",
    description: "Adds two registers or a register and an immediate value.",
    opcode: "11100100000000001000000000000",
    syntax: [
      {
        format: "ADD {<Rd>,} <Rn>, <operand2>",
        explanation: {
          Rd: "Destination register where the result will be stored.",
          Rn: "First operand register. This register's value will be added to the second operand.",
          operand2:
            "Second operand, which can be a register or an immediate value.",
        },
      },
      {
        format: "ADD{S} <Rd>, <Rn>, <Rm>{, <shift>}",
        explanation: {
          S: "If present, the instruction updates the condition flags based on the result.",
          Rd: "Destination register where the result will be stored.",
          Rn: "First operand register.",
          Rm: "Second operand register.",
          shift:
            "Optional shift applied to the value in Rm before the addition.",
        },
      },
    ],
    bit_encoding: {
      conditional: "1110",
      opcode: "0100",
      S_flag: "0",
      Rn: "0000",
      Rd: "0001",
      operand2: "000000000000",
    },
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
    examples: [
      {
        description:
          "Add two registers and store the result in a third register",
        code: "ADD R0, R1, R2 // R0 = R1 + R2",
      },
      {
        description: "Add an immediate value to a register",
        code: "ADD R0, R0, #1 // R0 = R0 + 1",
      },
    ],
  },
];
