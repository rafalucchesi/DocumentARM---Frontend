import { Instruction } from "@/models/Instruction";

export const instructionsMock: Instruction[] = [
  {
    name: "Add",
    mnemonic: "ADD",
    description:
      "Adds two registers or a register and an immediate value, optionally updating condition flags.",
    opcode: "0100",
    syntax: [
      {
        format: "ADD <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. Its value is added to the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0100",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Adds the value of a register (Rm) to the value in the base register (Rn).",
        example: {
          description:
            "Add the values in R1 and R2, and store the result in R0",
          code: "ADD R0, R1, R2 // R0 = R1 + R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Adds an immediate value to the value in the base register (Rn).",
        example: {
          description:
            "Add the immediate value 5 to the value in R1, and store the result in R0",
          code: "ADD R0, R1, #5 // R0 = R1 + 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Adds the value in a register (Rm) shifted by a specified amount to the value in the base register (Rn).",
        example: {
          description:
            "Add the value in R2 shifted left by 2 to the value in R1, and store the result in R0",
          code: "ADD R0, R1, R2, LSL #2 // R0 = R1 + (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Add with Carry",
    mnemonic: "ADC",
    description:
      "Adds two registers or a register and an immediate value, including the carry flag, optionally updating condition flags.",
    opcode: "0101",
    syntax: [
      {
        format: "ADC <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. Its value is added to the second operand and the carry flag.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0101",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Adds the value of a register (Rm) and the carry flag to the value in the base register (Rn).",
        example: {
          description:
            "Add the values in R1, R2, and the carry flag, and store the result in R0",
          code: "ADC R0, R1, R2 // R0 = R1 + R2 + Carry",
        },
      },
      {
        mode: "Immediate",
        description:
          "Adds an immediate value and the carry flag to the value in the base register (Rn).",
        example: {
          description:
            "Add the immediate value 5 and the carry flag to the value in R1, and store the result in R0",
          code: "ADC R0, R1, #5 // R0 = R1 + 5 + Carry",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Adds the value in a register (Rm) shifted by a specified amount, and the carry flag to the value in the base register (Rn).",
        example: {
          description:
            "Add the value in R2 shifted left by 2, and the carry flag to the value in R1, and store the result in R0",
          code: "ADC R0, R1, R2, LSL #2 // R0 = R1 + (R2 << 2) + Carry",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Subtract",
    mnemonic: "SUB",
    description:
      "Subtracts a register or an immediate value from a register, optionally updating condition flags.",
    opcode: "0010",
    syntax: [
      {
        format: "SUB <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. The second operand is subtracted from this register.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0010",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Subtracts the value of a register (Rm) from the value in the base register (Rn).",
        example: {
          description:
            "Subtract the value in R2 from R1, and store the result in R0",
          code: "SUB R0, R1, R2 // R0 = R1 - R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Subtracts an immediate value from the value in the base register (Rn).",
        example: {
          description:
            "Subtract the immediate value 5 from the value in R1, and store the result in R0",
          code: "SUB R0, R1, #5 // R0 = R1 - 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Subtracts the value in a register (Rm) shifted by a specified amount from the value in the base register (Rn).",
        example: {
          description:
            "Subtract the value in R2 shifted left by 2 from the value in R1, and store the result in R0",
          code: "SUB R0, R1, R2, LSL #2 // R0 = R1 - (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Subtract with Carry",
    mnemonic: "SBC",
    description:
      "Subtracts a register or an immediate value and the carry flag from a register, optionally updating condition flags.",
    opcode: "0110",
    syntax: [
      {
        format: "SBC <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. The second operand and the carry flag are subtracted from this register.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0110",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Subtracts the value of a register (Rm) and the carry flag from the value in the base register (Rn).",
        example: {
          description:
            "Subtract the value in R2 and the carry flag from R1, and store the result in R0",
          code: "SBC R0, R1, R2 // R0 = R1 - R2 - Carry",
        },
      },
      {
        mode: "Immediate",
        description:
          "Subtracts an immediate value and the carry flag from the value in the base register (Rn).",
        example: {
          description:
            "Subtract the immediate value 5 and the carry flag from the value in R1, and store the result in R0",
          code: "SBC R0, R1, #5 // R0 = R1 - 5 - Carry",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Subtracts the value in a register (Rm) shifted by a specified amount and the carry flag from the value in the base register (Rn).",
        example: {
          description:
            "Subtract the value in R2 shifted left by 2 and the carry flag from the value in R1, and store the result in R0",
          code: "SBC R0, R1, R2, LSL #2 // R0 = R1 - (R2 << 2) - Carry",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Reverse Subtract",
    mnemonic: "RSB",
    description:
      "Subtracts a register or an immediate value from a register in reverse order, optionally updating condition flags.",
    opcode: "0011",
    syntax: [
      {
        format: "RSB <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. This register is subtracted from the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0011",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Subtracts the value in the base register (Rn) from the value of a register (Rm) in reverse order.",
        example: {
          description:
            "Subtract the value in R1 from R2 in reverse order, and store the result in R0",
          code: "RSB R0, R1, R2 // R0 = R2 - R1",
        },
      },
      {
        mode: "Immediate",
        description:
          "Subtracts the value in the base register (Rn) from an immediate value in reverse order.",
        example: {
          description:
            "Subtract the value in R1 from the immediate value 5 in reverse order, and store the result in R0",
          code: "RSB R0, R1, #5 // R0 = 5 - R1",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Subtracts the value in the base register (Rn) from a shifted register (Rm) in reverse order.",
        example: {
          description:
            "Subtract the value in R1 from R2 shifted left by 2 in reverse order, and store the result in R0",
          code: "RSB R0, R1, R2, LSL #2 // R0 = (R2 << 2) - R1",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Reverse Subtract with Carry",
    mnemonic: "RSC",
    description:
      "Subtracts a register or an immediate value and the carry flag from a register in reverse order, optionally updating condition flags.",
    opcode: "0111",
    syntax: [
      {
        format: "RSC <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. This register and the carry flag are subtracted from the second operand in reverse order.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0111",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Subtracts the value in the base register (Rn) and the carry flag from the value of a register (Rm) in reverse order.",
        example: {
          description:
            "Subtract the value in R1 and the carry flag from R2 in reverse order, and store the result in R0",
          code: "RSC R0, R1, R2 // R0 = R2 - R1 - Carry",
        },
      },
      {
        mode: "Immediate",
        description:
          "Subtracts the value in the base register (Rn) and the carry flag from an immediate value in reverse order.",
        example: {
          description:
            "Subtract the value in R1 and the carry flag from the immediate value 5 in reverse order, and store the result in R0",
          code: "RSC R0, R1, #5 // R0 = 5 - R1 - Carry",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Subtracts the value in the base register (Rn) and the carry flag from a shifted register (Rm) in reverse order.",
        example: {
          description:
            "Subtract the value in R1 and the carry flag from R2 shifted left by 2 in reverse order, and store the result in R0",
          code: "RSC R0, R1, R2, LSL #2 // R0 = (R2 << 2) - R1 - Carry",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Bitwise AND",
    mnemonic: "AND",
    description:
      "Performs a bitwise AND operation between two registers or a register and an immediate value, optionally updating condition flags.",
    opcode: "0000",
    syntax: [
      {
        format: "AND <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. Its value is ANDed with the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0000",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and the value of a register (Rm).",
        example: {
          description:
            "AND the values in R1 and R2, and store the result in R0",
          code: "AND R0, R1, R2 // R0 = R1 & R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and an immediate value.",
        example: {
          description:
            "AND the value in R1 with the immediate value 5, and store the result in R0",
          code: "AND R0, R1, #5 // R0 = R1 & 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and a shifted register (Rm).",
        example: {
          description:
            "AND the value in R1 with R2 shifted left by 2, and store the result in R0",
          code: "AND R0, R1, R2, LSL #2 // R0 = R1 & (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Bitwise OR",
    mnemonic: "ORR",
    description:
      "Performs a bitwise OR operation between two registers or a register and an immediate value, optionally updating condition flags.",
    opcode: "1100",
    syntax: [
      {
        format: "ORR <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. Its value is ORed with the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1100",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Performs a bitwise OR operation between the value in the base register (Rn) and the value of a register (Rm).",
        example: {
          description: "OR the values in R1 and R2, and store the result in R0",
          code: "ORR R0, R1, R2 // R0 = R1 | R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Performs a bitwise OR operation between the value in the base register (Rn) and an immediate value.",
        example: {
          description:
            "OR the value in R1 with the immediate value 5, and store the result in R0",
          code: "ORR R0, R1, #5 // R0 = R1 | 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Performs a bitwise OR operation between the value in the base register (Rn) and a shifted register (Rm).",
        example: {
          description:
            "OR the value in R1 with R2 shifted left by 2, and store the result in R0",
          code: "ORR R0, R1, R2, LSL #2 // R0 = R1 | (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Bitwise Exclusive OR",
    mnemonic: "EOR",
    description:
      "Performs a bitwise exclusive OR (XOR) operation between two registers or a register and an immediate value, optionally updating condition flags.",
    opcode: "0001",
    syntax: [
      {
        format: "EOR <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. Its value is XORed with the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "0001",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Performs a bitwise XOR operation between the value in the base register (Rn) and the value of a register (Rm).",
        example: {
          description:
            "XOR the values in R1 and R2, and store the result in R0",
          code: "EOR R0, R1, R2 // R0 = R1 ^ R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Performs a bitwise XOR operation between the value in the base register (Rn) and an immediate value.",
        example: {
          description:
            "XOR the value in R1 with the immediate value 5, and store the result in R0",
          code: "EOR R0, R1, #5 // R0 = R1 ^ 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Performs a bitwise XOR operation between the value in the base register (Rn) and a shifted register (Rm).",
        example: {
          description:
            "XOR the value in R1 with R2 shifted left by 2, and store the result in R0",
          code: "EOR R0, R1, R2, LSL #2 // R0 = R1 ^ (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Bitwise Clear",
    mnemonic: "BIC",
    description:
      "Performs a bitwise AND operation between a register and the complement of another register or an immediate value, optionally updating condition flags.",
    opcode: "1110",
    syntax: [
      {
        format: "BIC <Rd>, <Rn>, <operand2>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first operand register. Its value is ANDed with the bitwise complement of the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|Rn|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1110",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and the bitwise complement of the value of a register (Rm).",
        example: {
          description:
            "AND the value in R1 with the complement of the value in R2, and store the result in R0",
          code: "BIC R0, R1, R2 // R0 = R1 & ~R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and the complement of an immediate value.",
        example: {
          description:
            "AND the value in R1 with the complement of the immediate value 5, and store the result in R0",
          code: "BIC R0, R1, #5 // R0 = R1 & ~5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and the complement of a shifted register (Rm).",
        example: {
          description:
            "AND the value in R1 with the complement of R2 shifted left by 2, and store the result in R0",
          code: "BIC R0, R1, R2, LSL #2 // R0 = R1 & ~(R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Move",
    mnemonic: "MOV",
    description:
      "Moves an immediate value or a register value into a destination register, optionally updating condition flags.",
    opcode: "1101",
    syntax: [
      {
        format: "MOV <Rd>, <operand2>",
        explanation: {
          Rd: "The destination register where the value will be stored.",
          operand2:
            "The source operand, which can be an immediate value or a register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|S|0000|Rd|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1101",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        S: {
          description: "Set condition flags bit (1 bit)",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rd: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        operand2: {
          description:
            "Source operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Moves the value from a register (Rm) into the destination register (Rd).",
        example: {
          description: "Move the value in R2 to R0",
          code: "MOV R0, R2 // R0 = R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Moves an immediate value into the destination register (Rd).",
        example: {
          description: "Move the immediate value 5 into R0",
          code: "MOV R0, #5 // R0 = 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Moves a shifted value from a register (Rm) into the destination register (Rd).",
        example: {
          description: "Move the value in R2 shifted left by 2 into R0",
          code: "MOV R0, R2, LSL #2 // R0 = R2 << 2",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Test (Bitwise AND)",
    mnemonic: "TST",
    description:
      "Performs a bitwise AND operation between two registers or a register and an immediate value, updating the condition flags based on the result. The result is not written back to a register.",
    opcode: "1000",
    syntax: [
      {
        format: "TST <Rn>, <operand2>",
        explanation: {
          Rn: "The first operand register. Its value is ANDed with the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|1|Rn|0000|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1000",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and the value of a register (Rm), updating the condition flags.",
        example: {
          description:
            "Test (AND) the values in R1 and R2, updating the condition flags based on the result",
          code: "TST R1, R2 // Update flags based on R1 & R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and an immediate value, updating the condition flags.",
        example: {
          description:
            "Test (AND) the value in R1 with the immediate value 5, updating the condition flags based on the result",
          code: "TST R1, #5 // Update flags based on R1 & 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Performs a bitwise AND operation between the value in the base register (Rn) and a shifted register (Rm), updating the condition flags.",
        example: {
          description:
            "Test (AND) the value in R1 with R2 shifted left by 2, updating the condition flags based on the result",
          code: "TST R1, R2, LSL #2 // Update flags based on R1 & (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Test Equivalence (Bitwise XOR)",
    mnemonic: "TEQ",
    description:
      "Performs a bitwise exclusive OR (XOR) operation between two registers or a register and an immediate value, updating the condition flags based on the result. The result is not written back to a register.",
    opcode: "1001",
    syntax: [
      {
        format: "TEQ <Rn>, <operand2>",
        explanation: {
          Rn: "The first operand register. Its value is XORed with the second operand.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|1|Rn|0000|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1001",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Performs a bitwise XOR operation between the value in the base register (Rn) and the value of a register (Rm), updating the condition flags.",
        example: {
          description:
            "Test equivalence (XOR) the values in R1 and R2, updating the condition flags based on the result",
          code: "TEQ R1, R2 // Update flags based on R1 ^ R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Performs a bitwise XOR operation between the value in the base register (Rn) and an immediate value, updating the condition flags.",
        example: {
          description:
            "Test equivalence (XOR) the value in R1 with the immediate value 5, updating the condition flags based on the result",
          code: "TEQ R1, #5 // Update flags based on R1 ^ 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Performs a bitwise XOR operation between the value in the base register (Rn) and a shifted register (Rm), updating the condition flags.",
        example: {
          description:
            "Test equivalence (XOR) the value in R1 with R2 shifted left by 2, updating the condition flags based on the result",
          code: "TEQ R1, R2, LSL #2 // Update flags based on R1 ^ (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Compare (Subtract)",
    mnemonic: "CMP",
    description:
      "Subtracts an immediate value or a register value from a register, updating the condition flags based on the result. The result is not written back to a register.",
    opcode: "1010",
    syntax: [
      {
        format: "CMP <Rn>, <operand2>",
        explanation: {
          Rn: "The first operand register. The second operand is subtracted from this register.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|1|Rn|0000|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1010",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Subtracts the value of a register (Rm) from the value in the base register (Rn), updating the condition flags.",
        example: {
          description:
            "Compare the values in R1 and R2 (R1 - R2), updating the condition flags based on the result",
          code: "CMP R1, R2 // Update flags based on R1 - R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Subtracts an immediate value from the value in the base register (Rn), updating the condition flags.",
        example: {
          description:
            "Compare the value in R1 with the immediate value 5 (R1 - 5), updating the condition flags based on the result",
          code: "CMP R1, #5 // Update flags based on R1 - 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Subtracts the value in a shifted register (Rm) from the value in the base register (Rn), updating the condition flags.",
        example: {
          description:
            "Compare the value in R1 with R2 shifted left by 2 (R1 - (R2 << 2)), updating the condition flags based on the result",
          code: "CMP R1, R2, LSL #2 // Update flags based on R1 - (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Compare Negative (Add)",
    mnemonic: "CMN",
    description:
      "Adds an immediate value or a register value to a register, updating the condition flags based on the result. The result is not written back to a register.",
    opcode: "1011",
    syntax: [
      {
        format: "CMN <Rn>, <operand2>",
        explanation: {
          Rn: "The first operand register. The second operand is added to this register.",
          operand2:
            "The second operand, which can be a register, an immediate value, or a shifted register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00|I|opc|1|Rn|0000|operand2",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "24-21",
          value: "1011",
        },
        I: {
          description: "Immediate bit (1 bit)",
          bits: "25",
          example: "0 (Register operand), 1 (Immediate operand)",
        },
        Rn: {
          description: "First operand register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        operand2: {
          description:
            "Second operand which can be an immediate value or a register (12 bits)",
          bits: "11-0",
          example: "000000000001 (Immediate value 1) or shifted register",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Adds the value of a register (Rm) to the value in the base register (Rn), updating the condition flags.",
        example: {
          description:
            "Compare the negative of the values in R1 and R2 (R1 + R2), updating the condition flags based on the result",
          code: "CMN R1, R2 // Update flags based on R1 + R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Adds an immediate value to the value in the base register (Rn), updating the condition flags.",
        example: {
          description:
            "Compare the negative of the value in R1 with the immediate value 5 (R1 + 5), updating the condition flags based on the result",
          code: "CMN R1, #5 // Update flags based on R1 + 5",
        },
      },
      {
        mode: "Shifted Register",
        description:
          "Adds the value in a shifted register (Rm) to the value in the base register (Rn), updating the condition flags.",
        example: {
          description:
            "Compare the negative of the value in R1 with R2 shifted left by 2 (R1 + (R2 << 2)), updating the condition flags based on the result",
          code: "CMN R1, R2, LSL #2 // Update flags based on R1 + (R2 << 2)",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the operation resulted in a carry out.",
      V: "Set to 1 if the operation resulted in an overflow.",
    },
  },
  {
    name: "Load Register",
    mnemonic: "LDR",
    description: "Loads a value from memory into a register.",
    opcode: "0101",
    syntax: [
      {
        format: "LDR <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The destination register where the loaded value will be stored.",
          Rn: "The base register that holds the address from which the value will be loaded.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|010|P|U|0|W|L|Rn|Rt|imm12",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "27-24",
          value: "0101",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit)",
          bits: "20",
          value: "1 (Load)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm12: {
          description: "12-bit immediate value or offset (12 bits)",
          bits: "11-0",
          example: "000000000100 (Offset of 4)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads a value from memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Load a value from the address in R3 plus an immediate offset of 4 into R2",
          code: "LDR R2, [R3, #4] // R2 = [R3 + 4]",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads a value from memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the load operation, and then updates Rn with the new address.",
        example: {
          description:
            "Load a value from the address in R5 plus an immediate offset of 8 into R4 and update R5",
          code: "LDR R4, [R5, #8]! // R4 = [R5 + 8], R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads a value from memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Load a value from the address in R5 into R4, and then increment R5 by 8",
          code: "LDR R4, [R5], #8 // R4 = [R5], R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Loads a value from memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a value from the address in R7 plus the value in R8 into R6",
          code: "LDR R6, [R7, R8] // R6 = [R7 + R8]",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Loads a value from memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a value from the address in R10 plus R11 shifted left by 2 into R9",
          code: "LDR R9, [R10, R11, LSL #2] // R9 = [R10 + (R11 << 2)]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store Register",
    mnemonic: "STR",
    description: "Stores the value of a register into memory.",
    opcode: "0100",
    syntax: [
      {
        format: "STR <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The source register whose value will be stored into memory.",
          Rn: "The base register that holds the address where the value will be stored.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|010|P|U|0|W|L|Rn|Rt|imm12",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "27-24",
          value: "0100",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit)",
          bits: "20",
          value: "0 (Store)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Source register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm12: {
          description: "12-bit immediate value or offset (12 bits)",
          bits: "11-0",
          example: "000000000100 (Offset of 4)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Stores the value of a register into memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Store the value in R2 to the address in R3 plus an immediate offset of 4",
          code: "STR R2, [R3, #4] // [R3 + 4] = R2",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Stores the value of a register into memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the store operation, and then updates Rn with the new address.",
        example: {
          description:
            "Store the value in R4 to the address in R5 plus an immediate offset of 8 and update R5",
          code: "STR R4, [R5, #8]! // [R5 + 8] = R4, R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Stores the value of a register into memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Store the value in R4 to the address in R5, and then increment R5 by 8",
          code: "STR R4, [R5], #8 // [R5] = R4, R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Stores the value of a register into memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store the value in R6 to the address in R7 plus the value in R8",
          code: "STR R6, [R7, R8] // [R7 + R8] = R6",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Stores the value of a register into memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store the value in R9 to the address in R10 plus R11 shifted left by 2",
          code: "STR R9, [R10, R11, LSL #2] // [R10 + (R11 << 2)] = R9",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Register Byte",
    mnemonic: "LDRB",
    description:
      "Loads a byte from memory into the least significant byte of a register, zero-extending it to a 32-bit word.",
    opcode: "0101",
    syntax: [
      {
        format: "LDRB <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The destination register where the loaded byte will be stored (zero-extended to 32 bits).",
          Rn: "The base register that holds the address from which the byte will be loaded.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|010|P|U|1|W|L|Rn|Rt|imm12",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "27-24",
          value: "0101",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit)",
          bits: "20",
          value: "1 (Load)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm12: {
          description: "12-bit immediate value or offset (12 bits)",
          bits: "11-0",
          example: "000000000100 (Offset of 4)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads a byte from memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Load a byte from the address in R3 plus an immediate offset of 4 into R2",
          code: "LDRB R2, [R3, #4] // R2 = [R3 + 4]",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads a byte from memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the load operation, and then updates Rn with the new address.",
        example: {
          description:
            "Load a byte from the address in R5 plus an immediate offset of 8 into R4 and update R5",
          code: "LDRB R4, [R5, #8]! // R4 = [R5 + 8], R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads a byte from memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Load a byte from the address in R5 into R4, and then increment R5 by 8",
          code: "LDRB R4, [R5], #8 // R4 = [R5], R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Loads a byte from memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a byte from the address in R7 plus the value in R8 into R6",
          code: "LDRB R6, [R7, R8] // R6 = [R7 + R8]",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Loads a byte from memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a byte from the address in R10 plus R11 shifted left by 2 into R9",
          code: "LDRB R9, [R10, R11, LSL #2] // R9 = [R10 + (R11 << 2)]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store Register Byte",
    mnemonic: "STRB",
    description: "Stores the least significant byte of a register into memory.",
    opcode: "0100",
    syntax: [
      {
        format: "STRB <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The source register whose least significant byte will be stored into memory.",
          Rn: "The base register that holds the address where the byte will be stored.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|010|P|U|1|W|L|Rn|Rt|imm12",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "27-24",
          value: "0100",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit)",
          bits: "20",
          value: "0 (Store)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Source register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm12: {
          description: "12-bit immediate value or offset (12 bits)",
          bits: "11-0",
          example: "000000000100 (Offset of 4)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Stores the least significant byte of a register into memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Store the byte in R2 to the address in R3 plus an immediate offset of 4",
          code: "STRB R2, [R3, #4] // [R3 + 4] = R2[7:0]",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Stores the least significant byte of a register into memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the store operation, and then updates Rn with the new address.",
        example: {
          description:
            "Store the byte in R4 to the address in R5 plus an immediate offset of 8 and update R5",
          code: "STRB R4, [R5, #8]! // [R5 + 8] = R4[7:0], R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Stores the least significant byte of a register into memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Store the byte in R4 to the address in R5, and then increment R5 by 8",
          code: "STRB R4, [R5], #8 // [R5] = R4[7:0], R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Stores the least significant byte of a register into memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store the byte in R6 to the address in R7 plus the value in R8",
          code: "STRB R6, [R7, R8] // [R7 + R8] = R6[7:0]",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Stores the least significant byte of a register into memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store the byte in R9 to the address in R10 plus R11 shifted left by 2",
          code: "STRB R9, [R10, R11, LSL #2] // [R10 + (R11 << 2)] = R9[7:0]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Register Halfword",
    mnemonic: "LDRH",
    description:
      "Loads a halfword (16 bits) from memory into the lower half of a register, zero-extending it to a 32-bit word.",
    opcode: "0001",
    syntax: [
      {
        format: "LDRH <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The destination register where the loaded halfword will be stored (zero-extended to 32 bits).",
          Rn: "The base register that holds the address from which the halfword will be loaded.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|P|U|1|W|1|Rn|Rt|imm4H|1011|imm4L",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "22-21",
          value: "0001",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm4H: {
          description: "High 4 bits of the 8-bit immediate offset",
          bits: "11-8",
          example: "0001 (1 in high nibble)",
        },
        imm4L: {
          description: "Low 4 bits of the 8-bit immediate offset",
          bits: "3-0",
          example: "0010 (2 in low nibble)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads a halfword from memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Load a halfword from the address in R3 plus an immediate offset of 18 into R2",
          code: "LDRH R2, [R3, #18] // R2 = [R3 + 18]",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads a halfword from memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the load operation, and then updates Rn with the new address.",
        example: {
          description:
            "Load a halfword from the address in R5 plus an immediate offset of 8 into R4 and update R5",
          code: "LDRH R4, [R5, #8]! // R4 = [R5 + 8], R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads a halfword from memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Load a halfword from the address in R5 into R4, and then increment R5 by 8",
          code: "LDRH R4, [R5], #8 // R4 = [R5], R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Loads a halfword from memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a halfword from the address in R7 plus the value in R8 into R6",
          code: "LDRH R6, [R7, R8] // R6 = [R7 + R8]",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Loads a halfword from memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a halfword from the address in R10 plus R11 shifted left by 2 into R9",
          code: "LDRH R9, [R10, R11, LSL #2] // R9 = [R10 + (R11 << 2)]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store Register Halfword",
    mnemonic: "STRH",
    description:
      "Stores the lower halfword (16 bits) of a register into memory.",
    opcode: "0000",
    syntax: [
      {
        format: "STRH <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The source register whose lower halfword will be stored into memory.",
          Rn: "The base register that holds the address where the halfword will be stored.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|P|U|1|W|0|Rn|Rt|imm4H|1011|imm4L",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "22-21",
          value: "0000",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Source register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm4H: {
          description: "High 4 bits of the 8-bit immediate offset",
          bits: "11-8",
          example: "0001 (1 in high nibble)",
        },
        imm4L: {
          description: "Low 4 bits of the 8-bit immediate offset",
          bits: "3-0",
          example: "0010 (2 in low nibble)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Stores the lower halfword of a register into memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Store the halfword in R2 to the address in R3 plus an immediate offset of 18",
          code: "STRH R2, [R3, #18] // [R3 + 18] = R2[15:0]",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Stores the lower halfword of a register into memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the store operation, and then updates Rn with the new address.",
        example: {
          description:
            "Store the halfword in R4 to the address in R5 plus an immediate offset of 8 and update R5",
          code: "STRH R4, [R5, #8]! // [R5 + 8] = R4[15:0], R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Stores the lower halfword of a register into memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Store the halfword in R4 to the address in R5, and then increment R5 by 8",
          code: "STRH R4, [R5], #8 // [R5] = R4[15:0], R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Stores the lower halfword of a register into memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store the halfword in R6 to the address in R7 plus the value in R8",
          code: "STRH R6, [R7, R8] // [R7 + R8] = R6[15:0]",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Stores the lower halfword of a register into memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store the halfword in R9 to the address in R10 plus R11 shifted left by 2",
          code: "STRH R9, [R10, R11, LSL #2] // [R10 + (R11 << 2)] = R9[15:0]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Register Signed Byte",
    mnemonic: "LDRSB",
    description:
      "Loads a signed byte from memory into a register, sign-extending it to a 32-bit word.",
    opcode: "1101",
    syntax: [
      {
        format: "LDRSB <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The destination register where the loaded signed byte will be stored (sign-extended to 32 bits).",
          Rn: "The base register that holds the address from which the byte will be loaded.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|P|U|1|W|1|Rn|Rt|imm4H|1101|imm4L",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "22-21",
          value: "1101",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm4H: {
          description: "High 4 bits of the 8-bit immediate offset",
          bits: "11-8",
          example: "0001 (1 in high nibble)",
        },
        imm4L: {
          description: "Low 4 bits of the 8-bit immediate offset",
          bits: "3-0",
          example: "0010 (2 in low nibble)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads a signed byte from memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Load a signed byte from the address in R3 plus an immediate offset of 18 into R2",
          code: "LDRSB R2, [R3, #18] // R2 = sign_extend([R3 + 18])",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads a signed byte from memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the load operation, and then updates Rn with the new address.",
        example: {
          description:
            "Load a signed byte from the address in R5 plus an immediate offset of 8 into R4 and update R5",
          code: "LDRSB R4, [R5, #8]! // R4 = sign_extend([R5 + 8]), R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads a signed byte from memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Load a signed byte from the address in R5 into R4, and then increment R5 by 8",
          code: "LDRSB R4, [R5], #8 // R4 = sign_extend([R5]), R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Loads a signed byte from memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a signed byte from the address in R7 plus the value in R8 into R6",
          code: "LDRSB R6, [R7, R8] // R6 = sign_extend([R7 + R8])",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Loads a signed byte from memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a signed byte from the address in R10 plus R11 shifted left by 2 into R9",
          code: "LDRSB R9, [R10, R11, LSL #2] // R9 = sign_extend([R10 + (R11 << 2)])",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Register Signed Halfword",
    mnemonic: "LDRSH",
    description:
      "Loads a signed halfword (16 bits) from memory into a register, sign-extending it to a 32-bit word.",
    opcode: "1101",
    syntax: [
      {
        format: "LDRSH <Rt>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The destination register where the loaded signed halfword will be stored (sign-extended to 32 bits).",
          Rn: "The base register that holds the address from which the halfword will be loaded.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|P|U|1|W|1|Rn|Rt|imm4H|1111|imm4L",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "22-21",
          value: "1101",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "Destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm4H: {
          description: "High 4 bits of the 8-bit immediate offset",
          bits: "11-8",
          example: "0001 (1 in high nibble)",
        },
        imm4L: {
          description: "Low 4 bits of the 8-bit immediate offset",
          bits: "3-0",
          example: "0010 (2 in low nibble)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads a signed halfword from memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Load a signed halfword from the address in R3 plus an immediate offset of 18 into R2",
          code: "LDRSH R2, [R3, #18] // R2 = sign_extend([R3 + 18])",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads a signed halfword from memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the load operation, and then updates Rn with the new address.",
        example: {
          description:
            "Load a signed halfword from the address in R5 plus an immediate offset of 8 into R4 and update R5",
          code: "LDRSH R4, [R5, #8]! // R4 = sign_extend([R5 + 8]), R5 = R5 + 8",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads a signed halfword from memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Load a signed halfword from the address in R5 into R4, and then increment R5 by 8",
          code: "LDRSH R4, [R5], #8 // R4 = sign_extend([R5]), R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Loads a signed halfword from memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a signed halfword from the address in R7 plus the value in R8 into R6",
          code: "LDRSH R6, [R7, R8] // R6 = sign_extend([R7 + R8])",
        },
      },
      {
        mode: "Scaled Register Offset",
        description:
          "Loads a signed halfword from memory at an address calculated by adding or subtracting a shifted value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load a signed halfword from the address in R10 plus R11 shifted left by 2 into R9",
          code: "LDRSH R9, [R10, R11, LSL #2] // R9 = sign_extend([R10 + (R11 << 2)])",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Multiple",
    mnemonic: "LDM",
    description:
      "Loads multiple registers from memory, starting at an address specified by a base register.",
    opcode: "1000",
    syntax: [
      {
        format: "LDM <Rn>{!}, <register_list>",
        explanation: {
          Rn: "The base register that holds the starting address from which the values will be loaded.",
          register_list: "A list of registers to load from memory.",
          exclamation_mark:
            "Optional. If present, the base register (Rn) will be updated with the final address after the load.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|100|P|U|S|W|L|Rn|register_list",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "27-24",
          value: "1000",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "23",
          example: "0 (Post-indexed), 1 (Pre-indexed)",
        },
        U: {
          description: "Increment/Decrement bit (1 bit)",
          bits: "23",
          example:
            "0 (Decrement after each transfer), 1 (Increment after each transfer)",
        },
        S: {
          description: "PSR & force user mode bit (1 bit)",
          bits: "22",
          example: "0 (No change), 1 (Load user mode registers)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back), 1 (Write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit)",
          bits: "20",
          value: "1 (Load)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        register_list: {
          description: "Register list for the load operation (16 bits)",
          bits: "15-0",
          example: "0010 0100 1001 0000 (Load R4, R5, R8, R12)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Increment After (IA)",
        description:
          "Loads multiple registers, starting from the address in Rn, and increments the address after each load.",
        example: {
          description:
            "Load R0, R1, and R2 from consecutive memory locations starting at the address in R3",
          code: "LDMIA R3!, {R0, R1, R2} // Load R0 = [R3], R1 = [R3+4], R2 = [R3+8], R3 = R3 + 12",
        },
      },
      {
        mode: "Increment Before (IB)",
        description:
          "Increments the address in Rn before loading each register.",
        example: {
          description:
            "Load R4, R5, and R6 from consecutive memory locations starting at the address in R7 incremented by 4",
          code: "LDMIB R7!, {R4, R5, R6} // Load R4 = [R7+4], R5 = [R7+8], R6 = [R7+12], R7 = R7 + 12",
        },
      },
      {
        mode: "Decrement After (DA)",
        description:
          "Loads multiple registers, starting from the address in Rn, and decrements the address after each load.",
        example: {
          description:
            "Load R8, R9, and R10 from consecutive memory locations starting at the address in R11",
          code: "LDMDA R11!, {R8, R9, R10} // Load R8 = [R11], R9 = [R11-4], R10 = [R11-8], R11 = R11 - 12",
        },
      },
      {
        mode: "Decrement Before (DB)",
        description:
          "Decrements the address in Rn before loading each register.",
        example: {
          description:
            "Load R12, R13, and R14 from consecutive memory locations starting at the address in R15 decremented by 4",
          code: "LDMDB R15!, {R12, R13, R14} // Load R12 = [R15-4], R13 = [R15-8], R14 = [R15-12], R15 = R15 - 12",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store Multiple",
    mnemonic: "STM",
    description:
      "Stores multiple registers to memory, starting at an address specified by a base register.",
    opcode: "1000",
    syntax: [
      {
        format: "STM <Rn>{!}, <register_list>",
        explanation: {
          Rn: "The base register that holds the starting address where the values will be stored.",
          register_list: "A list of registers to store into memory.",
          exclamation_mark:
            "Optional. If present, the base register (Rn) will be updated with the final address after the store.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|100|P|U|S|W|L|Rn|register_list",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "27-24",
          value: "1000",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "23",
          example: "0 (Post-indexed), 1 (Pre-indexed)",
        },
        U: {
          description: "Increment/Decrement bit (1 bit)",
          bits: "23",
          example:
            "0 (Decrement after each transfer), 1 (Increment after each transfer)",
        },
        S: {
          description: "PSR & force user mode bit (1 bit)",
          bits: "22",
          example: "0 (No change), 1 (Store user mode registers)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back), 1 (Write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit)",
          bits: "20",
          value: "0 (Store)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        register_list: {
          description: "Register list for the store operation (16 bits)",
          bits: "15-0",
          example: "0010 0100 1001 0000 (Store R4, R5, R8, R12)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Increment After (IA)",
        description:
          "Stores multiple registers, starting from the address in Rn, and increments the address after each store.",
        example: {
          description:
            "Store R0, R1, and R2 to consecutive memory locations starting at the address in R3",
          code: "STMIA R3!, {R0, R1, R2} // Store [R3] = R0, [R3+4] = R1, [R3+8] = R2, R3 = R3 + 12",
        },
      },
      {
        mode: "Increment Before (IB)",
        description:
          "Increments the address in Rn before storing each register.",
        example: {
          description:
            "Store R4, R5, and R6 to consecutive memory locations starting at the address in R7 incremented by 4",
          code: "STMIB R7!, {R4, R5, R6} // Store [R7+4] = R4, [R7+8] = R5, [R7+12] = R6, R7 = R7 + 12",
        },
      },
      {
        mode: "Decrement After (DA)",
        description:
          "Stores multiple registers, starting from the address in Rn, and decrements the address after each store.",
        example: {
          description:
            "Store R8, R9, and R10 to consecutive memory locations starting at the address in R11",
          code: "STMDA R11!, {R8, R9, R10} // Store [R11] = R8, [R11-4] = R9, [R11-8] = R10, R11 = R11 - 12",
        },
      },
      {
        mode: "Decrement Before (DB)",
        description:
          "Decrements the address in Rn before storing each register.",
        example: {
          description:
            "Store R12, R13, and R14 to consecutive memory locations starting at the address in R15 decremented by 4",
          code: "STMDB R15!, {R12, R13, R14} // Store [R15-4] = R12, [R15-8] = R13, [R15-12] = R14, R15 = R15 - 12",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Register Dual",
    mnemonic: "LDRD",
    description:
      "Loads two consecutive registers from two consecutive memory locations.",
    opcode: "1100",
    syntax: [
      {
        format: "LDRD <Rt>, <Rt2>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The first destination register where the first value will be loaded.",
          Rt2: "The second destination register where the second value will be loaded.",
          Rn: "The base register that holds the address from which the values will be loaded.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|P|U|1|W|1|Rn|Rt|imm4H|1101|imm4L",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "22-21",
          value: "1100",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "First destination register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm4H: {
          description: "High 4 bits of the 8-bit immediate offset",
          bits: "11-8",
          example: "0001 (1 in high nibble)",
        },
        imm4L: {
          description: "Low 4 bits of the 8-bit immediate offset",
          bits: "3-0",
          example: "0010 (2 in low nibble)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads two consecutive registers from memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Load values from the address in R3 plus an immediate offset of 18 into R2 and R3",
          code: "LDRD R2, R3, [R3, #18] // R2 = [R3 + 18], R3 = [R3 + 22]",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads two consecutive registers from memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the load operation, and then updates Rn with the new address.",
        example: {
          description:
            "Load values from the address in R5 plus an immediate offset of 8 into R4 and R5, and update R5",
          code: "LDRD R4, R5, [R5, #8]! // R4 = [R5 + 8], R5 = [R5 + 12], R5 = R5 + 12",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads two consecutive registers from memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Load values from the address in R5 into R4 and R5, and then increment R5 by 8",
          code: "LDRD R4, R5, [R5], #8 // R4 = [R5], R5 = [R5 + 4], R5 = R5 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Loads two consecutive registers from memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Load values from the address in R7 plus the value in R8 into R6 and R7",
          code: "LDRD R6, R7, [R7, R8] // R6 = [R7 + R8], R7 = [R7 + R8 + 4]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store Register Dual",
    mnemonic: "STRD",
    description:
      "Stores two consecutive registers into two consecutive memory locations.",
    opcode: "1100",
    syntax: [
      {
        format: "STRD <Rt>, <Rt2>, [<Rn>{, <offset>}]",
        explanation: {
          Rt: "The first source register whose value will be stored.",
          Rt2: "The second source register whose value will be stored.",
          Rn: "The base register that holds the address where the values will be stored.",
          offset:
            "Optional offset added to the base address in Rn to calculate the final memory address.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|P|U|1|W|0|Rn|Rt|imm4H|1111|imm4L",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (4 bits)",
          bits: "22-21",
          value: "1100",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit)",
          bits: "24",
          example: "1 (Pre-indexed)",
        },
        U: {
          description: "Add/Subtract bit (1 bit)",
          bits: "23",
          example: "1 (Add offset)",
        },
        W: {
          description: "Write-back bit (1 bit)",
          bits: "21",
          example: "0 (No write-back)",
        },
        Rn: {
          description: "Base register (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rt: {
          description: "First source register (4 bits)",
          bits: "15-12",
          example: "0001 (R1)",
        },
        imm4H: {
          description: "High 4 bits of the 8-bit immediate offset",
          bits: "11-8",
          example: "0001 (1 in high nibble)",
        },
        imm4L: {
          description: "Low 4 bits of the 8-bit immediate offset",
          bits: "3-0",
          example: "0010 (2 in low nibble)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Stores two consecutive registers into memory at an address calculated by adding or subtracting an immediate value to the base register (Rn).",
        example: {
          description:
            "Store values from R2 and R3 to the address in R4 plus an immediate offset of 18",
          code: "STRD R2, R3, [R4, #18] // [R4 + 18] = R2, [R4 + 22] = R3",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Stores two consecutive registers into memory at an address calculated by adding or subtracting an immediate offset to the base register (Rn) before the store operation, and then updates Rn with the new address.",
        example: {
          description:
            "Store values from R5 and R6 to the address in R7 plus an immediate offset of 8 and update R7",
          code: "STRD R5, R6, [R7, #8]! // [R7 + 8] = R5, [R7 + 12] = R6, R7 = R7 + 12",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Stores two consecutive registers into memory at the address in the base register (Rn), and then adds or subtracts an immediate offset to update Rn.",
        example: {
          description:
            "Store values from R9 and R10 to the address in R8, and then increment R8 by 8",
          code: "STRD R9, R10, [R8], #8 // [R8] = R9, [R8 + 4] = R10, R8 = R8 + 8",
        },
      },
      {
        mode: "Register Offset",
        description:
          "Stores two consecutive registers into memory at an address calculated by adding or subtracting the value of another register (Rm) to the base register (Rn).",
        example: {
          description:
            "Store values from R11 and R12 to the address in R13 plus the value in R14",
          code: "STRD R11, R12, [R13, R14] // [R13 + R14] = R11, [R13 + R14 + 4] = R12",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Branch",
    mnemonic: "B",
    description:
      "Changes the flow of execution by jumping to a specified address. The address is calculated relative to the current program counter (PC).",
    opcode: "1010",
    syntax: [
      {
        format: "B <label>",
        explanation: {
          label:
            "The target address to branch to, specified as a label in the code or a relative offset.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|101|L|imm24",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (3 bits)",
          bits: "27-25",
          value: "101",
        },
        L: {
          description: "Link bit (1 bit), used for branching with link (BL)",
          bits: "24",
          example: "0 (No link, just branch)",
        },
        imm24: {
          description:
            "24-bit signed immediate value representing the offset from the current PC to the target address.",
          bits: "23-0",
          example: "000000000000000000000001 (offset of +1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Branches to an address calculated by adding a signed 24-bit offset to the current PC. The offset is scaled by 4 (the address is word-aligned).",
        example: {
          description:
            "Branch to a label that is 8 bytes (2 words) ahead of the current instruction",
          code: "B label // where label is PC + 8",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Branch with Link",
    mnemonic: "BL",
    description:
      "Changes the flow of execution by jumping to a specified address and storing the return address (the address of the next instruction) in the link register (LR). This is typically used for subroutine calls.",
    opcode: "1011",
    syntax: [
      {
        format: "BL <label>",
        explanation: {
          label:
            "The target address to branch to, specified as a label in the code or a relative offset.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|101|L|imm24",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (3 bits)",
          bits: "27-25",
          value: "101",
        },
        L: {
          description: "Link bit (1 bit), used for branching with link (BL)",
          bits: "24",
          value: "1 (Branch with link)",
        },
        imm24: {
          description:
            "24-bit signed immediate value representing the offset from the current PC to the target address.",
          bits: "23-0",
          example: "000000000000000000000001 (offset of +1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Branches to an address calculated by adding a signed 24-bit offset to the current PC, and stores the return address (current PC + 4) in the link register (LR). The offset is scaled by 4 (the address is word-aligned).",
        example: {
          description:
            "Branch to a label that is 8 bytes (2 words) ahead of the current instruction, and store the return address in LR",
          code: "BL label // where label is PC + 8",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Branch and Exchange",
    mnemonic: "BX",
    description:
      "Branches to an address specified in a register and optionally changes the instruction set state (ARM or Thumb).",
    opcode: "000100101111",
    syntax: [
      {
        format: "BX <Rm>",
        explanation: {
          Rm: "The register containing the address to branch to. The least significant bit (bit 0) of the address determines whether to switch to Thumb state (if set) or remain in ARM state (if cleared).",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000100101111111111110001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (12 bits)",
          bits: "27-16",
          value: "000100101111",
        },
        Rm: {
          description: "Register containing the target address (4 bits)",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Branches to the address contained in the specified register (Rm). If the least significant bit (bit 0) of the address is set, the processor switches to Thumb state; otherwise, it remains in ARM state.",
        example: {
          description:
            "Branch to the address in R1, potentially switching to Thumb mode",
          code: "BX R1",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Branch with Link and Exchange",
    mnemonic: "BLX",
    description:
      "Branches to an address and optionally changes the instruction set state (ARM or Thumb). The return address (the address of the next instruction) is stored in the link register (LR).",
    opcode: "1011",
    syntax: [
      {
        format: "BLX <label> or BLX <Rm>",
        explanation: {
          label:
            "The target address to branch to, specified as a label in the code (for immediate offset form).",
          Rm: "The register containing the address to branch to (for register form). The least significant bit (bit 0) of the address determines whether to switch to Thumb state (if set) or remain in ARM state (if cleared).",
        },
      },
    ],
    bit_encoding: {
      full_encoding_immediate: "cond|1011|L|imm24",
      full_encoding_register: "cond|000100101111111111101|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode_immediate: {
          description:
            "Opcode bits relevant to the immediate offset form of the instruction (3 bits)",
          bits: "27-25",
          value: "101",
        },
        opcode_register: {
          description:
            "Opcode bits relevant to the register form of the instruction (12 bits)",
          bits: "27-16",
          value: "000100101111",
        },
        L: {
          description: "Link bit (1 bit), used for branching with link (BLX)",
          bits: "24",
          value: "1 (Branch with link)",
        },
        imm24: {
          description:
            "24-bit signed immediate value representing the offset from the current PC to the target address (only used in the immediate offset form).",
          bits: "23-0",
          example: "000000000000000000000001 (offset of +1)",
        },
        Rm: {
          description:
            "Register containing the target address (only used in the register form).",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Branches to an address calculated by adding a signed 24-bit offset to the current PC, stores the return address (current PC + 4) in the link register (LR), and switches to Thumb state if the target address is in Thumb mode.",
        example: {
          description:
            "Branch to a label that is 8 bytes (2 words) ahead of the current instruction, store the return address in LR, and potentially switch to Thumb mode",
          code: "BLX label // where label is PC + 8",
        },
      },
      {
        mode: "Register",
        description:
          "Branches to the address contained in the specified register (Rm), stores the return address in the link register (LR), and switches to Thumb state if the target address is in Thumb mode.",
        example: {
          description:
            "Branch to the address in R1, store the return address in LR, and potentially switch to Thumb mode",
          code: "BLX R1",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Move to Register from Special Register",
    mnemonic: "MRS",
    description:
      "Transfers the contents of a special register (such as the Program Status Register) to a general-purpose register.",
    opcode: "00010",
    syntax: [
      {
        format: "MRS <Rd>, <special_reg>",
        explanation: {
          Rd: "The destination register where the contents of the special register will be stored.",
          special_reg:
            "The special register to transfer from, either CPSR or SPSR.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00010|0|R|0000|Rd|000000000000",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (5 bits)",
          bits: "27-23",
          value: "00010",
        },
        R: {
          description:
            "Specifies whether to transfer the contents of the SPSR or the CPSR (1 bit)",
          bits: "22",
          example: "0 (CPSR) or 1 (SPSR)",
        },
        Rd: {
          description:
            "Destination register where the contents of the special register will be transferred (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        suffix: {
          description: "Fixed bits (12 bits) set to zero.",
          bits: "11-0",
          value: "000000000000",
        },
      },
    },
    operand_modes: [
      {
        mode: "CPSR",
        description:
          "Transfers the contents of the Current Program Status Register (CPSR) to a general-purpose register.",
        example: {
          description: "Move the contents of the CPSR to R1",
          code: "MRS R1, CPSR",
        },
      },
      {
        mode: "SPSR",
        description:
          "Transfers the contents of the Saved Program Status Register (SPSR) to a general-purpose register. Only available in privileged modes.",
        example: {
          description: "Move the contents of the SPSR to R1",
          code: "MRS R1, SPSR",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Move to Special Register from Register",
    mnemonic: "MSR",
    description:
      "Transfers the contents of a general-purpose register or an immediate value to a special register (such as the CPSR or SPSR).",
    opcode: "00110",
    syntax: [
      {
        format: "MSR <special_reg>, <operand>",
        explanation: {
          special_reg:
            "The special register to be updated, either CPSR or SPSR.",
          operand:
            "The value to be moved to the special register, which can be a general-purpose register or an immediate value.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00110|R|mask|0000|operand",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Opcode bits relevant to the instruction (5 bits)",
          bits: "27-23",
          value: "00110",
        },
        R: {
          description:
            "Specifies whether the destination is the CPSR or SPSR (1 bit)",
          bits: "22",
          example: "0 (CPSR) or 1 (SPSR)",
        },
        mask: {
          description:
            "Field mask bits (4 bits) that determine which parts of the special register will be affected (control, extension, status, flags).",
          bits: "19-16",
          example: "1111 (Affects all fields)",
        },
        operand: {
          description:
            "The source register or immediate value whose value will be moved to the special register.",
          bits: "15-0",
          example: "0000000000000001 (Immediate value 1) or a register value",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Transfers the contents of a general-purpose register to the CPSR or SPSR.",
        example: {
          description:
            "Move the contents of R1 to the CPSR, affecting all fields.",
          code: "MSR CPSR_f, R1",
        },
      },
      {
        mode: "Immediate",
        description: "Transfers an immediate value to the CPSR or SPSR.",
        example: {
          description:
            "Move the immediate value #0x1F to the CPSR, affecting all fields.",
          code: "MSR CPSR_f, #0x1F",
        },
      },
    ],
    condition_flags: {
      N: "Can be affected if the appropriate mask bit is set.",
      Z: "Can be affected if the appropriate mask bit is set.",
      C: "Can be affected if the appropriate mask bit is set.",
      V: "Can be affected if the appropriate mask bit is set.",
    },
  },
  {
    name: "Multiply",
    mnemonic: "MUL",
    description:
      "Multiplies two registers and stores the least significant 32 bits of the result in a destination register.",
    syntax: [
      {
        format: "MUL <Rd>, <Rm>, <Rs>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000000|A|S|Rd|0000|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        A: {
          description: "Accumulate bit (1 bit); set to 0 for MUL.",
          bits: "21",
          value: "0",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); set to 1 to update the condition flags based on the result.",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rd: {
          description:
            "Destination register where the result will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rn: {
          description:
            "This field is not used for the MUL instruction and is typically set to 0000.",
          bits: "15-12",
          value: "0000",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0001 (R1)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs) and stores the least significant 32 bits of the result in the destination register (Rd).",
        example: {
          description:
            "Multiply the values in R2 and R3, storing the result in R1",
          code: "MUL R1, R2, R3",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Multiply Accumulate",
    mnemonic: "MLA",
    description:
      "Multiplies two registers, adds a third register to the result, and stores the least significant 32 bits of the result in a destination register.",
    syntax: [
      {
        format: "MLA <Rd>, <Rm>, <Rs>, <Rn>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
          Rn: "The register whose value is added to the product.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000000|A|S|Rd|Rn|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        A: {
          description: "Accumulate bit (1 bit); set to 1 for MLA.",
          bits: "21",
          value: "1",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); set to 1 to update the condition flags based on the result.",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        Rd: {
          description:
            "Destination register where the result will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rn: {
          description:
            "Third source register to be added to the product (4 bits)",
          bits: "15-12",
          example: "0011 (R3)",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0001 (R1)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs), adds the value in a third register (Rn), and stores the least significant 32 bits of the result in the destination register (Rd).",
        example: {
          description:
            "Multiply the values in R2 and R3, add R4, and store the result in R1",
          code: "MLA R1, R2, R3, R4",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Multiply and Subtract",
    mnemonic: "MLS",
    description:
      "Multiplies two registers, subtracts the result from a third register, and stores the least significant 32 bits of the result in a destination register.",
    syntax: [
      {
        format: "MLS <Rd>, <Rm>, <Rs>, <Rn>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
          Rn: "The register whose value is subtracted by the product.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000000|0|0|Rd|Rn|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        A: {
          description: "Accumulate bit (1 bit); always set to 0 for MLS.",
          bits: "21",
          value: "0",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); always set to 0 for MLS.",
          bits: "20",
          value: "0",
        },
        Rd: {
          description:
            "Destination register where the result will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rn: {
          description:
            "Third source register, whose value is subtracted by the product (4 bits)",
          bits: "15-12",
          example: "0011 (R3)",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0001 (R1)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs), subtracts the product from the value in a third register (Rn), and stores the least significant 32 bits of the result in the destination register (Rd).",
        example: {
          description:
            "Multiply the values in R2 and R3, subtract the product from R4, and store the result in R1",
          code: "MLS R1, R2, R3, R4",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Unsigned Multiply Long",
    mnemonic: "UMULL",
    description:
      "Multiplies two unsigned 32-bit values, producing a 64-bit result, and stores the result in two registers.",
    syntax: [
      {
        format: "UMULL <RdLo>, <RdHi>, <Rm>, <Rs>",
        explanation: {
          RdLo: "The destination register for the lower 32 bits of the result.",
          RdHi: "The destination register for the upper 32 bits of the result.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000010|U|S|RdHi|RdLo|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        U: {
          description: "Unsigned multiply bit, set to 1 for UMULL.",
          bits: "22",
          value: "1",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); set to 1 to update the condition flags based on the result.",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        RdHi: {
          description:
            "Destination register for the upper 32 bits of the result (4 bits)",
          bits: "19-16",
          example: "0001 (R1)",
        },
        RdLo: {
          description:
            "Destination register for the lower 32 bits of the result (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0010 (R2)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0011 (R3)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs), producing a 64-bit result, and stores the lower 32 bits in RdLo and the upper 32 bits in RdHi.",
        example: {
          description:
            "Multiply the values in R2 and R3, store the lower 32 bits in R0, and the upper 32 bits in R1",
          code: "UMULL R0, R1, R2, R3",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Unsigned Multiply-Accumulate Long",
    mnemonic: "UMLAL",
    description:
      "Multiplies two unsigned 32-bit values, adds the 64-bit result to a 64-bit value, and stores the result in two registers.",
    syntax: [
      {
        format: "UMLAL <RdLo>, <RdHi>, <Rm>, <Rs>",
        explanation: {
          RdLo: "The destination register for the lower 32 bits of the result.",
          RdHi: "The destination register for the upper 32 bits of the result.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000011|U|S|RdHi|RdLo|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        U: {
          description: "Unsigned multiply bit, set to 1 for UMLAL.",
          bits: "22",
          value: "1",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); set to 1 to update the condition flags based on the result.",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        RdHi: {
          description:
            "Destination register for the upper 32 bits of the result (4 bits)",
          bits: "19-16",
          example: "0001 (R1)",
        },
        RdLo: {
          description:
            "Destination register for the lower 32 bits of the result (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0010 (R2)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0011 (R3)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs), adds the 64-bit result to the value in RdLo and RdHi, and stores the result back in RdLo and RdHi.",
        example: {
          description:
            "Multiply the values in R2 and R3, add the 64-bit result to R0 and R1, and store the result back in R0 and R1",
          code: "UMLAL R0, R1, R2, R3",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Signed Multiply Long",
    mnemonic: "SMULL",
    description:
      "Multiplies two signed 32-bit values, producing a signed 64-bit result, and stores the result in two registers.",
    syntax: [
      {
        format: "SMULL <RdLo>, <RdHi>, <Rm>, <Rs>",
        explanation: {
          RdLo: "The destination register for the lower 32 bits of the result.",
          RdHi: "The destination register for the upper 32 bits of the result.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000011|0|S|RdHi|RdLo|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); set to 1 to update the condition flags based on the result.",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        RdHi: {
          description:
            "Destination register for the upper 32 bits of the result (4 bits)",
          bits: "19-16",
          example: "0001 (R1)",
        },
        RdLo: {
          description:
            "Destination register for the lower 32 bits of the result (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0010 (R2)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0011 (R3)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs), producing a 64-bit result, and stores the lower 32 bits in RdLo and the upper 32 bits in RdHi.",
        example: {
          description:
            "Multiply the values in R2 and R3, store the lower 32 bits in R0, and the upper 32 bits in R1",
          code: "SMULL R0, R1, R2, R3",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Signed Multiply-Accumulate Long",
    mnemonic: "SMLAL",
    description:
      "Multiplies two signed 32-bit values, adds the 64-bit result to a 64-bit value, and stores the result in two registers.",
    syntax: [
      {
        format: "SMLAL <RdLo>, <RdHi>, <Rm>, <Rs>",
        explanation: {
          RdLo: "The destination register for the lower 32 bits of the result.",
          RdHi: "The destination register for the upper 32 bits of the result.",
          Rm: "The first source register for the multiply operation.",
          Rs: "The second source register for the multiply operation.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000011|1|S|RdHi|RdLo|Rs|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        S: {
          description:
            "Set condition codes bit (1 bit); set to 1 to update the condition flags based on the result.",
          bits: "20",
          example: "0 (Do not update flags), 1 (Update flags)",
        },
        RdHi: {
          description:
            "Destination register for the upper 32 bits of the result (4 bits)",
          bits: "19-16",
          example: "0001 (R1)",
        },
        RdLo: {
          description:
            "Destination register for the lower 32 bits of the result (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        Rs: {
          description:
            "Second source register for the multiply operation (4 bits)",
          bits: "11-8",
          example: "0010 (R2)",
        },
        suffix: {
          description:
            "Fixed bits (4 bits) for the instruction, indicating the multiply operation.",
          bits: "7-4",
          value: "1001",
        },
        Rm: {
          description:
            "First source register for the multiply operation (4 bits)",
          bits: "3-0",
          example: "0011 (R3)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Multiplies the values in two registers (Rm and Rs), adds the 64-bit result to the value in RdLo and RdHi, and stores the result back in RdLo and RdHi.",
        example: {
          description:
            "Multiply the values in R2 and R3, add the 64-bit result to R0 and R1, and store the result back in R0 and R1",
          code: "SMLAL R0, R1, R2, R3",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Swap",
    mnemonic: "SWP",
    description:
      "Exchanges a word in memory with a word in a register. The value in the destination register is loaded from memory, and the value in the source register is stored into memory.",
    syntax: [
      {
        format: "SWP <Rd>, <Rm>, [<Rn>]",
        explanation: {
          Rd: "The destination register where the value from memory will be stored.",
          Rm: "The source register whose value will be stored into memory.",
          Rn: "The base register that holds the address of the memory location.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00010|0|B|Rn|Rd|0000|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        B: {
          description: "Byte/Word bit (1 bit); set to 0 for word, 1 for byte.",
          bits: "22",
          example: "0 (Word), 1 (Byte)",
        },
        Rn: {
          description:
            "Base register holding the address of the memory location (4 bits)",
          bits: "19-16",
          example: "0001 (R1)",
        },
        Rd: {
          description:
            "Destination register where the value from memory will be stored (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        suffix: {
          description: "Fixed bits (4 bits) for the instruction.",
          bits: "11-8",
          value: "1001",
        },
        Rm: {
          description:
            "Source register whose value will be stored into memory (4 bits)",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Word",
        description: "Exchanges a word in memory with a word in a register.",
        example: {
          description:
            "Swap the value in R2 with the value in memory at the address in R1, storing the memory value in R0.",
          code: "SWP R0, R2, [R1]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Swap Byte",
    mnemonic: "SWPB",
    description:
      "Exchanges a byte in memory with a byte in a register. The value in the destination register is loaded from memory, and the value in the source register is stored into memory.",
    syntax: [
      {
        format: "SWPB <Rd>, <Rm>, [<Rn>]",
        explanation: {
          Rd: "The destination register where the value from memory will be stored.",
          Rm: "The source register whose value will be stored into memory.",
          Rn: "The base register that holds the address of the memory location.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00010|0|1|Rn|Rd|0000|1001|Rm",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        B: {
          description: "Byte/Word bit (1 bit); set to 1 for SWPB.",
          bits: "22",
          value: "1",
        },
        Rn: {
          description:
            "Base register holding the address of the memory location (4 bits)",
          bits: "19-16",
          example: "0001 (R1)",
        },
        Rd: {
          description:
            "Destination register where the value from memory will be stored (4 bits)",
          bits: "15-12",
          example: "0000 (R0)",
        },
        suffix: {
          description: "Fixed bits (4 bits) for the instruction.",
          bits: "11-8",
          value: "1001",
        },
        Rm: {
          description:
            "Source register whose value will be stored into memory (4 bits)",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Byte",
        description: "Exchanges a byte in memory with a byte in a register.",
        example: {
          description:
            "Swap the byte in R2 with the byte in memory at the address in R1, storing the memory value in R0.",
          code: "SWPB R0, R2, [R1]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "No Operation",
    mnemonic: "NOP",
    description:
      "Performs no operation. It is often used as a placeholder to align code or for timing purposes.",
    syntax: [
      {
        format: "NOP",
        explanation: {
          NOP: "The NOP instruction does not have any operands.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|00110010000000000000000000000000",
      fields: {
        cond: {
          description: "Condition field (4 bits)",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Specific opcode pattern for NOP (24 bits)",
          bits: "27-4",
          value: "001100100000000000000000",
        },
        zeros: {
          description: "Fixed bits set to 0 (4 bits)",
          bits: "3-0",
          value: "0000",
        },
      },
    },
    operand_modes: [
      {
        mode: "No Operation",
        description:
          "The instruction does nothing and does not modify any registers or memory.",
        example: {
          description:
            "Execute a no operation, which can be used to create a delay or align instructions.",
          code: "NOP",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Count Leading Zeros",
    mnemonic: "CLZ",
    description:
      "Counts the number of leading zeros in the binary representation of a 32-bit value in a register and stores the result in a destination register.",
    syntax: [
      {
        format: "CLZ <Rd>, <Rm>",
        explanation: {
          Rd: "The destination register where the count of leading zeros will be stored.",
          Rm: "The source register whose value is used to count leading zeros.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|0001|0001|1001|Rd|0000|1111|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "First part of the opcode (4 bits) fixed for CLZ.",
          bits: "27-24",
          value: "0001",
        },
        opcode2: {
          description: "Second part of the opcode (4 bits) fixed for CLZ.",
          bits: "23-20",
          value: "1001",
        },
        Rd: {
          description:
            "Destination register where the result will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        fixed: {
          description:
            "Fixed bits for the instruction (4 bits), typically set to zero.",
          bits: "15-12",
          value: "0000",
        },
        opcode3: {
          description: "Third part of the opcode (4 bits) fixed for CLZ.",
          bits: "11-8",
          value: "1111",
        },
        Rm: {
          description:
            "Source register whose value is used to count leading zeros (4 bits)",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Counts the number of leading zeros in the value of a register and stores the count in a destination register.",
        example: {
          description:
            "Count the leading zeros in the value of R1 and store the result in R0.",
          code: "CLZ R0, R1",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Byte-Reverse Word",
    mnemonic: "REV",
    description:
      "Reverses the byte order in a 32-bit word, swapping the most significant byte with the least significant byte, and the other two bytes in between.",
    syntax: [
      {
        format: "REV <Rd>, <Rm>",
        explanation: {
          Rd: "The destination register where the reversed word will be stored.",
          Rm: "The source register containing the word to be reversed.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|0110|1011|1111|Rd|1111|0000|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "First part of the opcode (4 bits) fixed for REV.",
          bits: "27-24",
          value: "0110",
        },
        opcode2: {
          description: "Second part of the opcode (4 bits) fixed for REV.",
          bits: "23-20",
          value: "1011",
        },
        Rd: {
          description:
            "Destination register where the reversed word will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        fixed1: {
          description: "Fixed bits for the instruction (4 bits), set to 1111.",
          bits: "15-12",
          value: "1111",
        },
        fixed2: {
          description: "Fixed bits for the instruction (4 bits), set to 0000.",
          bits: "11-8",
          value: "0000",
        },
        Rm: {
          description:
            "Source register containing the word to be reversed (4 bits)",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Reverses the byte order in a 32-bit word from the source register and stores the result in the destination register.",
        example: {
          description:
            "Reverse the byte order in the value of R1 and store the result in R0.",
          code: "REV R0, R1",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Byte-Reverse Packed Halfword",
    mnemonic: "REV16",
    description:
      "Reverses the byte order within each halfword of a 32-bit word, swapping the two bytes in each halfword.",
    syntax: [
      {
        format: "REV16 <Rd>, <Rm>",
        explanation: {
          Rd: "The destination register where the reversed halfwords will be stored.",
          Rm: "The source register containing the word whose halfwords will be reversed.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|0110|1011|1111|Rd|1111|0001|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "First part of the opcode (4 bits) fixed for REV16.",
          bits: "27-24",
          value: "0110",
        },
        opcode2: {
          description: "Second part of the opcode (4 bits) fixed for REV16.",
          bits: "23-20",
          value: "1011",
        },
        Rd: {
          description:
            "Destination register where the reversed halfwords will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        fixed1: {
          description: "Fixed bits for the instruction (4 bits), set to 1111.",
          bits: "15-12",
          value: "1111",
        },
        fixed2: {
          description: "Fixed bits for the instruction (4 bits), set to 0001.",
          bits: "11-8",
          value: "0001",
        },
        Rm: {
          description:
            "Source register containing the word whose halfwords will be reversed (4 bits)",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Reverses the byte order within each halfword of a 32-bit word from the source register and stores the result in the destination register.",
        example: {
          description:
            "Reverse the byte order within each halfword of the value in R1 and store the result in R0.",
          code: "REV16 R0, R1",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Reverse Bytes in Signed Halfword",
    mnemonic: "REVSH",
    description:
      "Reverses the byte order in the lower halfword of a 32-bit word and sign-extends the result to 32 bits, storing the result in a destination register.",
    syntax: [
      {
        format: "REVSH <Rd>, <Rm>",
        explanation: {
          Rd: "The destination register where the sign-extended reversed halfword will be stored.",
          Rm: "The source register containing the halfword to be reversed and sign-extended.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|0110|1011|1111|Rd|1111|0011|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "First part of the opcode (4 bits) fixed for REVSH.",
          bits: "27-24",
          value: "0110",
        },
        opcode2: {
          description: "Second part of the opcode (4 bits) fixed for REVSH.",
          bits: "23-20",
          value: "1011",
        },
        Rd: {
          description:
            "Destination register where the sign-extended reversed halfword will be stored (4 bits)",
          bits: "19-16",
          example: "0000 (R0)",
        },
        fixed1: {
          description: "Fixed bits for the instruction (4 bits), set to 1111.",
          bits: "15-12",
          value: "1111",
        },
        fixed2: {
          description: "Fixed bits for the instruction (4 bits), set to 0011.",
          bits: "11-8",
          value: "0011",
        },
        Rm: {
          description:
            "Source register containing the halfword to be reversed and sign-extended (4 bits)",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Reverses the byte order in the lower halfword of a 32-bit word from the source register, sign-extends the result, and stores it in the destination register.",
        example: {
          description:
            "Reverse the byte order in the lower halfword of the value in R1, sign-extend it, and store the result in R0.",
          code: "REVSH R0, R1",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative after sign extension.",
      Z: "Set to 1 if the result is zero after sign extension.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Supervisor Call",
    mnemonic: "SVC",
    description:
      "Generates a supervisor call exception, used to request a service from the operating system or kernel.",
    syntax: [
      {
        format: "SVC <imm24>",
        explanation: {
          imm24:
            "A 24-bit immediate value that can be used to specify the service being requested.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|1111|imm24",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode: {
          description: "Fixed opcode bits for the SVC instruction (4 bits)",
          bits: "27-24",
          value: "1111",
        },
        imm24: {
          description:
            "The immediate value (24 bits) used to specify the service being requested.",
          bits: "23-0",
          example: "000000000000000000000000 (Example immediate value)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Supervisor Call",
        description:
          "Generates a supervisor call exception, used to request a service from the operating system or kernel.",
        example: {
          description:
            "Generate a supervisor call with an immediate value of 0x123456.",
          code: "SVC 0x123456",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Coprocessor Data Operation",
    mnemonic: "CDP",
    description:
      "Performs an operation using a coprocessor. The exact operation depends on the coprocessor and the values of the opcode fields.",
    syntax: [
      {
        format: "CDP <p>, <opc1>, <CRd>, <CRn>, <CRm>, <opc2>",
        explanation: {
          p: "Specifies the coprocessor number.",
          opc1: "Primary operation code for the coprocessor instruction.",
          CRd: "Specifies the destination coprocessor register.",
          CRn: "Specifies the first source coprocessor register.",
          CRm: "Specifies the second source coprocessor register.",
          opc2: "Secondary operation code for the coprocessor instruction.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|1110|opc1|CRn|CRd|cp_num|opc2|CRm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description:
            "Primary opcode for the coprocessor instruction (4 bits).",
          bits: "27-24",
          example: "0000 (Example value)",
        },
        CRn: {
          description: "First source coprocessor register (4 bits).",
          bits: "23-20",
          example: "0000 (Example value)",
        },
        CRd: {
          description: "Destination coprocessor register (4 bits).",
          bits: "19-16",
          example: "0000 (Example value)",
        },
        cp_num: {
          description: "Specifies the coprocessor number (4 bits).",
          bits: "15-12",
          example: "1010 (Coprocessor 10)",
        },
        opcode2: {
          description:
            "Secondary opcode for the coprocessor instruction (3 bits).",
          bits: "11-8",
          example: "000 (Example value)",
        },
        CRm: {
          description: "Second source coprocessor register (4 bits).",
          bits: "3-0",
          example: "0000 (Example value)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Coprocessor Operation",
        description:
          "Performs an operation specified by the coprocessor using the given operands.",
        example: {
          description:
            "An example coprocessor operation with coprocessor 10, CR0 as destination, CR1 as first source, and CR2 as second source.",
          code: "CDP p10, 0, CR0, CR1, CR2, 0",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Load Coprocessor",
    mnemonic: "LDC",
    description:
      "Loads data from memory into a coprocessor register. The exact operation depends on the coprocessor and the values of the opcode fields.",
    syntax: [
      {
        format: "LDC <p>, <CRd>, [<Rn>], <option>",
        explanation: {
          p: "Specifies the coprocessor number.",
          CRd: "Specifies the coprocessor register to load the data into.",
          Rn: "Specifies the base register holding the memory address.",
          option:
            "Specifies the addressing mode and options, such as offset, increment, or decrement.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|1100|P|U|N|W|L|Rn|CRd|cp_num|offset",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit).",
          bits: "24",
          example: "0 (Post-indexed), 1 (Pre-indexed)",
        },
        U: {
          description:
            "Add/Subtract bit (1 bit), determines whether the offset is added or subtracted.",
          bits: "23",
          example: "0 (Subtract offset), 1 (Add offset)",
        },
        N: {
          description:
            "Nonsequential bit (1 bit), typically set to 1 for normal LDC operations.",
          bits: "22",
          example: "1",
        },
        W: {
          description:
            "Write-back bit (1 bit), determines whether the base register is updated with the address.",
          bits: "21",
          example: "0 (No write-back), 1 (Write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit), set to 0 for LDC.",
          bits: "20",
          example: "0 (LDC)",
        },
        Rn: {
          description: "Base register holding the memory address (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        CRd: {
          description: "Destination coprocessor register (4 bits).",
          bits: "15-12",
          example: "0000 (CR0)",
        },
        cp_num: {
          description: "Specifies the coprocessor number (4 bits).",
          bits: "11-8",
          example: "1010 (Coprocessor 10)",
        },
        offset: {
          description: "12-bit offset value used in the address calculation.",
          bits: "11-0",
          example: "000000000000 (No offset)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads data from memory into a coprocessor register using an immediate offset.",
        example: {
          description:
            "Load data from memory at the address in R1 into coprocessor register CR0, with no offset.",
          code: "LDC p10, CR0, [R1], #0",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Loads data from memory into a coprocessor register, with the address calculated before the memory access.",
        example: {
          description:
            "Load data from memory at the address in R1 plus an offset into coprocessor register CR0, with pre-indexing.",
          code: "LDC p10, CR0, [R1, #4]!",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Loads data from memory into a coprocessor register, with the address calculated after the memory access.",
        example: {
          description:
            "Load data from memory at the address in R1 into coprocessor register CR0, then add the offset to R1.",
          code: "LDC p10, CR0, [R1], #4",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store to Coprocessor",
    mnemonic: "STC",
    description:
      "Stores data from a coprocessor register to memory. The exact operation depends on the coprocessor and the values of the opcode fields.",
    syntax: [
      {
        format: "STC <p>, <CRd>, [<Rn>], <option>",
        explanation: {
          p: "Specifies the coprocessor number.",
          CRd: "Specifies the coprocessor register from which the data will be stored.",
          Rn: "Specifies the base register holding the memory address.",
          option:
            "Specifies the addressing mode and options, such as offset, increment, or decrement.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|1100|P|U|N|W|L|Rn|CRd|cp_num|offset",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        P: {
          description: "Pre/Post indexing bit (1 bit).",
          bits: "24",
          example: "0 (Post-indexed), 1 (Pre-indexed)",
        },
        U: {
          description:
            "Add/Subtract bit (1 bit), determines whether the offset is added or subtracted.",
          bits: "23",
          example: "0 (Subtract offset), 1 (Add offset)",
        },
        N: {
          description:
            "Nonsequential bit (1 bit), typically set to 1 for normal STC operations.",
          bits: "22",
          example: "1",
        },
        W: {
          description:
            "Write-back bit (1 bit), determines whether the base register is updated with the address.",
          bits: "21",
          example: "0 (No write-back), 1 (Write-back)",
        },
        L: {
          description: "Load/Store bit (1 bit), set to 1 for STC.",
          bits: "20",
          example: "1 (STC)",
        },
        Rn: {
          description: "Base register holding the memory address (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        CRd: {
          description:
            "Source coprocessor register from which the data will be stored (4 bits).",
          bits: "15-12",
          example: "0000 (CR0)",
        },
        cp_num: {
          description: "Specifies the coprocessor number (4 bits).",
          bits: "11-8",
          example: "1010 (Coprocessor 10)",
        },
        offset: {
          description: "12-bit offset value used in the address calculation.",
          bits: "11-0",
          example: "000000000000 (No offset)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Stores data from a coprocessor register to memory using an immediate offset.",
        example: {
          description:
            "Store data from coprocessor register CR0 to memory at the address in R1, with no offset.",
          code: "STC p10, CR0, [R1], #0",
        },
      },
      {
        mode: "Pre-Indexed",
        description:
          "Stores data from a coprocessor register to memory, with the address calculated before the memory access.",
        example: {
          description:
            "Store data from coprocessor register CR0 to memory at the address in R1 plus an offset, with pre-indexing.",
          code: "STC p10, CR0, [R1, #4]!",
        },
      },
      {
        mode: "Post-Indexed",
        description:
          "Stores data from a coprocessor register to memory, with the address calculated after the memory access.",
        example: {
          description:
            "Store data from coprocessor register CR0 to memory at the address in R1, then add the offset to R1.",
          code: "STC p10, CR0, [R1], #4",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Move to ARM Register from Coprocessor",
    mnemonic: "MRC",
    description:
      "Transfers data from a coprocessor register to an ARM core register.",
    syntax: [
      {
        format: "MRC <p>, <opc1>, <Rt>, <CRn>, <CRm>, <opc2>",
        explanation: {
          p: "Specifies the coprocessor number.",
          opc1: "Primary operation code for the coprocessor instruction.",
          Rt: "Specifies the ARM core register where the data is transferred.",
          CRn: "Specifies the coprocessor register from which the data is transferred.",
          CRm: "Specifies the second coprocessor register used in the operation.",
          opc2: "Secondary operation code for the coprocessor instruction.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|1110|opc1|CRn|Rt|cp_num|opc2|CRm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description:
            "Primary opcode for the coprocessor instruction (4 bits).",
          bits: "27-24",
          example: "0000 (Example value)",
        },
        CRn: {
          description: "Source coprocessor register (4 bits).",
          bits: "23-20",
          example: "0000 (CRn)",
        },
        Rt: {
          description: "Destination ARM core register (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        cp_num: {
          description: "Specifies the coprocessor number (4 bits).",
          bits: "15-12",
          example: "1010 (Coprocessor 10)",
        },
        opcode2: {
          description:
            "Secondary opcode for the coprocessor instruction (3 bits).",
          bits: "11-8",
          example: "000 (Example value)",
        },
        CRm: {
          description:
            "Second coprocessor register used in the operation (4 bits).",
          bits: "3-0",
          example: "0000 (CRm)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Coprocessor Operation",
        description:
          "Transfers the value from a coprocessor register to an ARM core register.",
        example: {
          description:
            "Transfer the value from coprocessor 10's register CR0 to R0, with CR1 as an additional coprocessor register.",
          code: "MRC p10, 0, R0, CR0, CR1, 0",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Vector Multiply",
    mnemonic: "VMUL",
    description:
      "Multiplies two vector registers element-wise and stores the result in a destination vector register.",
    syntax: [
      {
        format: "VMUL <Sd|Dd>, <Sn|Dn>, <Sm|Dm>",
        explanation: {
          "Sd|Dd":
            "The destination scalar or doubleword register where the result will be stored.",
          "Sn|Dn": "The first source scalar or doubleword register.",
          "Sm|Dm": "The second source scalar or doubleword register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|110|opc1|Dn|Vd|Vm|N|opc2|M|0|Vm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the vector operation (4 bits).",
          bits: "27-24",
          value: "1101",
        },
        Dn: {
          description:
            "The most significant bit of the destination register specifier (1 bit).",
          bits: "22",
          example: "0 (Example value)",
        },
        Vd: {
          description: "Specifies the destination register (4 bits).",
          bits: "19-16",
          example: "0000 (Example value)",
        },
        Vm: {
          description: "Specifies the first source register (4 bits).",
          bits: "3-0",
          example: "0000 (Example value)",
        },
        N: {
          description:
            "Specifies the most significant bit of the first source register specifier (1 bit).",
          bits: "7",
          example: "0 (Example value)",
        },
        opcode2: {
          description:
            "Secondary opcode bits for the vector operation (2 bits).",
          bits: "6-5",
          example: "00 (Example value)",
        },
        M: {
          description:
            "Specifies the most significant bit of the second source register specifier (1 bit).",
          bits: "5",
          example: "0 (Example value)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Scalar",
        description:
          "Multiplies the values in two scalar registers and stores the result in a destination scalar register.",
        example: {
          description:
            "Multiply the values in S0 and S1, storing the result in S2.",
          code: "VMUL S2, S0, S1",
        },
      },
      {
        mode: "Vector",
        description:
          "Multiplies the values in two vector registers element-wise and stores the result in a destination vector register.",
        example: {
          description:
            "Multiply the values in D0 and D1, storing the result in D2.",
          code: "VMUL D2, D0, D1",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Vector Add",
    mnemonic: "VADD",
    description:
      "Adds two vector registers element-wise and stores the result in a destination vector register.",
    syntax: [
      {
        format: "VADD <Sd|Dd>, <Sn|Dn>, <Sm|Dm>",
        explanation: {
          "Sd|Dd":
            "The destination scalar or doubleword register where the result will be stored.",
          "Sn|Dn": "The first source scalar or doubleword register.",
          "Sm|Dm": "The second source scalar or doubleword register.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|111|opc1|Dn|Vd|Vm|N|opc2|M|0|Vm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the vector operation (4 bits).",
          bits: "27-24",
          value: "1110",
        },
        Dn: {
          description:
            "The most significant bit of the destination register specifier (1 bit).",
          bits: "22",
          example: "0 (Example value)",
        },
        Vd: {
          description: "Specifies the destination register (4 bits).",
          bits: "19-16",
          example: "0000 (Example value)",
        },
        Vm: {
          description: "Specifies the first source register (4 bits).",
          bits: "3-0",
          example: "0000 (Example value)",
        },
        N: {
          description:
            "Specifies the most significant bit of the first source register specifier (1 bit).",
          bits: "7",
          example: "0 (Example value)",
        },
        opcode2: {
          description:
            "Secondary opcode bits for the vector operation (2 bits).",
          bits: "6-5",
          example: "00 (Example value)",
        },
        M: {
          description:
            "Specifies the most significant bit of the second source register specifier (1 bit).",
          bits: "5",
          example: "0 (Example value)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Scalar",
        description:
          "Adds the values in two scalar registers and stores the result in a destination scalar register.",
        example: {
          description: "Add the values in S0 and S1, storing the result in S2.",
          code: "VADD S2, S0, S1",
        },
      },
      {
        mode: "Vector",
        description:
          "Adds the values in two vector registers element-wise and stores the result in a destination vector register.",
        example: {
          description: "Add the values in D0 and D1, storing the result in D2.",
          code: "VADD D2, D0, D1",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Vector Absolute",
    mnemonic: "VABS",
    description:
      "Computes the absolute value of each element in a vector register and stores the result in a destination vector register.",
    syntax: [
      {
        format: "VABS <Sd|Dd>, <Sm|Dm>",
        explanation: {
          "Sd|Dd":
            "The destination scalar or doubleword register where the result will be stored.",
          "Sm|Dm":
            "The source scalar or doubleword register containing the values for which the absolute value will be computed.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|111|opc1|Dn|Vd|1110|opc2|M|0|Vm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the vector operation (4 bits).",
          bits: "27-24",
          value: "1111",
        },
        Dn: {
          description:
            "The most significant bit of the destination register specifier (1 bit).",
          bits: "22",
          example: "0 (Example value)",
        },
        Vd: {
          description: "Specifies the destination register (4 bits).",
          bits: "19-16",
          example: "0000 (Example value)",
        },
        fixed: {
          description: "Fixed bits for the instruction (4 bits), set to 1110.",
          bits: "11-8",
          value: "1110",
        },
        opcode2: {
          description:
            "Secondary opcode bits for the vector operation (2 bits).",
          bits: "6-5",
          example: "00 (Example value)",
        },
        M: {
          description:
            "Specifies the most significant bit of the source register specifier (1 bit).",
          bits: "5",
          example: "0 (Example value)",
        },
        Vm: {
          description: "Specifies the source register (4 bits).",
          bits: "3-0",
          example: "0000 (Example value)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Scalar",
        description:
          "Computes the absolute value of the scalar value in the source register and stores the result in the destination register.",
        example: {
          description:
            "Compute the absolute value of the scalar in S0 and store the result in S1.",
          code: "VABS S1, S0",
        },
      },
      {
        mode: "Vector",
        description:
          "Computes the absolute value of each element in the vector register and stores the result in the destination register.",
        example: {
          description:
            "Compute the absolute value of each element in D0 and store the result in D1.",
          code: "VABS D1, D0",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Reverse Bits",
    mnemonic: "RBIT",
    description:
      "Reverses the order of the bits in a 32-bit register and stores the result in a destination register.",
    syntax: [
      {
        format: "RBIT <Rd>, <Rm>",
        explanation: {
          Rd: "The destination register where the reversed bit order will be stored.",
          Rm: "The source register containing the value whose bits will be reversed.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|01101|111|Rd|1111|0000|1111|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Opcode for the RBIT instruction (5 bits).",
          bits: "27-23",
          value: "01101",
        },
        Rd: {
          description: "Specifies the destination register (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        fixed1: {
          description: "Fixed bits for the instruction (4 bits), set to 1111.",
          bits: "15-12",
          value: "1111",
        },
        fixed2: {
          description: "Fixed bits for the instruction (4 bits), set to 0000.",
          bits: "11-8",
          value: "0000",
        },
        Rm: {
          description: "Specifies the source register (4 bits).",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Reverses the order of the bits in the source register and stores the result in the destination register.",
        example: {
          description: "Reverse the bits in R1 and store the result in R0.",
          code: "RBIT R0, R1",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Rotate Right",
    mnemonic: "ROR",
    description:
      "Rotates the bits in a register to the right by a specified number of positions.",
    syntax: [
      {
        format: "ROR <Rd>, <Rm>, <Rs>",
        explanation: {
          Rd: "The destination register where the rotated value will be stored.",
          Rm: "The source register containing the value to be rotated.",
          Rs: "The register containing the number of positions to rotate.",
        },
      },
      {
        format: "ROR <Rd>, <Rm>, #<imm>",
        explanation: {
          Rd: "The destination register where the rotated value will be stored.",
          Rm: "The source register containing the value to be rotated.",
          imm: "The immediate value specifying the number of positions to rotate.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|opcode1|Rm|Rd|imm5|0110|Rs",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the ROR operation (3 bits).",
          bits: "27-25",
          value: "000",
        },
        Rm: {
          description: "Specifies the source register (4 bits).",
          bits: "3-0",
          example: "0001 (R1)",
        },
        Rd: {
          description: "Specifies the destination register (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        imm5: {
          description:
            "The immediate value specifying the number of positions to rotate (5 bits).",
          bits: "11-7",
          example: "00010 (Rotate by 2 positions)",
        },
        opcode2: {
          description:
            "Secondary opcode bits for the ROR operation (4 bits), set to 0110 for ROR.",
          bits: "7-4",
          value: "0110",
        },
        Rs: {
          description:
            "Specifies the register containing the number of positions to rotate (4 bits).",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Rotates the bits in the source register to the right by the number of positions specified in the Rs register and stores the result in the destination register.",
        example: {
          description:
            "Rotate the bits in R1 to the right by the number of positions specified in R2, and store the result in R0.",
          code: "ROR R0, R1, R2",
        },
      },
      {
        mode: "Immediate",
        description:
          "Rotates the bits in the source register to the right by the number of positions specified by an immediate value and stores the result in the destination register.",
        example: {
          description:
            "Rotate the bits in R1 to the right by 2 positions, and store the result in R0.",
          code: "ROR R0, R1, #2",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the rotation produces a carry out from the last bit rotated.",
      V: "Not affected.",
    },
  },
  {
    name: "Rotate Right with Extend",
    mnemonic: "RRX",
    description:
      "Rotates the bits in a register to the right by one position and inserts the old carry flag into the most significant bit.",
    syntax: [
      {
        format: "RRX <Rd>, <Rm>",
        explanation: {
          Rd: "The destination register where the rotated value will be stored.",
          Rm: "The source register containing the value to be rotated.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|000|opcode1|Rm|Rd|0000|0110|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the RRX operation (3 bits).",
          bits: "27-25",
          value: "000",
        },
        Rm: {
          description: "Specifies the source register (4 bits).",
          bits: "3-0",
          example: "0001 (R1)",
        },
        Rd: {
          description: "Specifies the destination register (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        fixed: {
          description:
            "Fixed bits for the RRX instruction (4 bits), set to 0000.",
          bits: "11-8",
          value: "0000",
        },
        opcode2: {
          description:
            "Secondary opcode bits for the RRX operation (4 bits), set to 0110 for RRX.",
          bits: "7-4",
          value: "0110",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Rotates the bits in the source register to the right by one position and inserts the old carry flag into the most significant bit, storing the result in the destination register.",
        example: {
          description:
            "Rotate the bits in R1 to the right by one position, insert the old carry flag into the most significant bit, and store the result in R0.",
          code: "RRX R0, R1",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to the last bit shifted out (the least significant bit).",
      V: "Not affected.",
    },
  },
  {
    name: "Load-Exclusive Register",
    mnemonic: "LDREX",
    description:
      "Loads a word from memory and marks the address for an exclusive access, which is used in conjunction with STREX for atomic read-modify-write operations.",
    syntax: [
      {
        format: "LDREX <Rt>, [<Rn>, #<imm>]",
        explanation: {
          Rt: "The destination register where the loaded value will be stored.",
          Rn: "The base register holding the address of the memory location.",
          imm: "The optional immediate value to be added to the base address (defaults to 0 if not specified).",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|0001|1000|Rn|Rt|1111|imm8",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the LDREX operation (4 bits).",
          bits: "27-24",
          value: "0001",
        },
        Rn: {
          description:
            "Specifies the base register holding the address of the memory location (4 bits).",
          bits: "19-16",
          example: "0001 (R1)",
        },
        Rt: {
          description:
            "Specifies the destination register where the loaded value will be stored (4 bits).",
          bits: "15-12",
          example: "0000 (R0)",
        },
        fixed: {
          description:
            "Fixed bits for the LDREX instruction (4 bits), set to 1111.",
          bits: "11-8",
          value: "1111",
        },
        imm8: {
          description:
            "Optional 8-bit immediate value to be added to the base address (8 bits).",
          bits: "7-0",
          example: "00000000 (No offset)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Loads a word from memory at the address specified by the base register plus an immediate offset, and stores it in the destination register.",
        example: {
          description:
            "Load a word from memory at the address in R1, with an offset of 4, into R0.",
          code: "LDREX R0, [R1, #4]",
        },
      },
      {
        mode: "Register",
        description:
          "Loads a word from memory at the address specified by the base register, and stores it in the destination register.",
        example: {
          description: "Load a word from memory at the address in R1 into R0.",
          code: "LDREX R0, [R1]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Store-Exclusive Register",
    mnemonic: "STREX",
    description:
      "Stores a word from a register to memory if the exclusive monitor permits it, and sets the result in a destination register to indicate success or failure.",
    syntax: [
      {
        format: "STREX <Rd>, <Rt>, [<Rn>, #<imm>]",
        explanation: {
          Rd: "The destination register where the success (0) or failure (non-zero) of the store is recorded.",
          Rt: "The source register containing the value to be stored.",
          Rn: "The base register holding the address of the memory location.",
          imm: "The optional immediate value to be added to the base address (defaults to 0 if not specified).",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|0001|1001|Rn|Rd|1111|imm8",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Primary opcode bits for the STREX operation (4 bits).",
          bits: "27-24",
          value: "0001",
        },
        Rn: {
          description:
            "Specifies the base register holding the address of the memory location (4 bits).",
          bits: "19-16",
          example: "0001 (R1)",
        },
        Rd: {
          description:
            "Specifies the destination register where the success or failure result is recorded (4 bits).",
          bits: "15-12",
          example: "0000 (R0)",
        },
        fixed: {
          description:
            "Fixed bits for the STREX instruction (4 bits), set to 1111.",
          bits: "11-8",
          value: "1111",
        },
        imm8: {
          description:
            "Optional 8-bit immediate value to be added to the base address (8 bits).",
          bits: "7-0",
          example: "00000000 (No offset)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Immediate Offset",
        description:
          "Stores a word from the source register to memory at the address specified by the base register plus an immediate offset, and sets the result in the destination register to indicate success or failure.",
        example: {
          description:
            "Store the value in R2 to memory at the address in R1 plus an offset of 4, and set R0 to indicate success or failure.",
          code: "STREX R0, R2, [R1, #4]",
        },
      },
      {
        mode: "Register",
        description:
          "Stores a word from the source register to memory at the address specified by the base register, and sets the result in the destination register to indicate success or failure.",
        example: {
          description:
            "Store the value in R2 to memory at the address in R1, and set R0 to indicate success or failure.",
          code: "STREX R0, R2, [R1]",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "If-Then",
    mnemonic: "IT",
    description:
      "Specifies conditional execution for up to four following instructions based on the condition flags. The first instruction is always conditional, and the remaining instructions can be conditional or unconditional.",
    syntax: [
      {
        format: "IT{x{y{z}}} <cond>",
        explanation: {
          x: "Specifies whether the second instruction is conditional (T) or not conditional (E).",
          y: "Specifies whether the third instruction is conditional (T) or not conditional (E).",
          z: "Specifies whether the fourth instruction is conditional (T) or not conditional (E).",
          cond: "The condition under which the following instructions will be executed.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "1011|1111|mask|cond",
      fields: {
        opcode: {
          description: "Fixed opcode for the IT instruction (8 bits).",
          bits: "15-8",
          value: "10111111",
        },
        mask: {
          description:
            "A 4-bit mask that specifies which of the following instructions are conditional.",
          bits: "7-4",
          example: "1000 (IT only the next instruction)",
        },
        cond: {
          description:
            "Condition field (4 bits) that specifies the condition for the IT block.",
          bits: "3-0",
          example: "0000 (EQ - Equal)",
        },
      },
    },
    operand_modes: [
      {
        mode: "If-Then",
        description:
          "Sets up conditional execution for up to four subsequent instructions.",
        example: {
          description:
            "Execute the next instruction if the Zero flag is set (EQ).",
          code: "IT EQ",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Unsigned Saturate",
    mnemonic: "USAT",
    description:
      "Saturates a signed value to an unsigned value within a specified range and stores the result in a destination register.",
    syntax: [
      {
        format: "USAT <Rd>, #<sat>, <Rn>{, <shift>}",
        explanation: {
          Rd: "The destination register where the saturated value will be stored.",
          sat: "An immediate value specifying the saturation limit (1 to 31).",
          Rn: "The source register containing the value to be saturated.",
          shift:
            "An optional shift operation applied to the value in Rn before saturation.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|01101|sat_imm|Rd|imm5|shift|Rn",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Opcode for the USAT instruction (5 bits).",
          bits: "27-23",
          value: "01101",
        },
        sat_imm: {
          description:
            "Immediate value specifying the saturation limit (5 bits).",
          bits: "22-18",
          example: "00010 (Saturate to 2)",
        },
        Rd: {
          description: "Specifies the destination register (4 bits).",
          bits: "15-12",
          example: "0000 (R0)",
        },
        imm5: {
          description: "Specifies the shift amount (5 bits).",
          bits: "11-7",
          example: "00000 (No shift)",
        },
        shift: {
          description:
            "Shift type (2 bits), indicating the kind of shift applied.",
          bits: "6-5",
          example: "00 (LSL - Logical Shift Left)",
        },
        Rn: {
          description:
            "Specifies the source register containing the value to be saturated (4 bits).",
          bits: "3-0",
          example: "0001 (R1)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Register",
        description:
          "Saturates the value in the source register to an unsigned value within the specified range and stores the result in the destination register.",
        example: {
          description:
            "Saturate the value in R1 to an unsigned value within the range defined by #2 and store the result in R0.",
          code: "USAT R0, #2, R1",
        },
      },
      {
        mode: "Register with Shift",
        description:
          "Applies a shift to the value in the source register before saturating it and storing the result in the destination register.",
        example: {
          description:
            "Shift the value in R1 left by 1, saturate it to an unsigned value within the range defined by #3, and store the result in R0.",
          code: "USAT R0, #3, R1, LSL #1",
        },
      },
    ],
    condition_flags: {
      N: "Set if the result is negative after saturation.",
      Z: "Set if the result is zero after saturation.",
      C: "Not affected.",
      V: "Not affected.",
    },
  },
  {
    name: "Unsigned Add 8-bit",
    mnemonic: "UADD8",
    description:
      "Performs four parallel unsigned 8-bit additions of corresponding bytes in two registers, and stores the result in a destination register.",
    syntax: [
      {
        format: "UADD8 <Rd>, <Rn>, <Rm>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first source register containing the values to be added.",
          Rm: "The second source register containing the values to be added.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|01100110|Rd|Rn|1001|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Fixed opcode bits for the UADD8 instruction (8 bits).",
          bits: "27-20",
          value: "01100110",
        },
        Rd: {
          description:
            "Specifies the destination register where the result will be stored (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rn: {
          description:
            "Specifies the first source register containing the values to be added (4 bits).",
          bits: "15-12",
          example: "0001 (R1)",
        },
        opcode2: {
          description: "Fixed opcode bits for the UADD8 instruction (4 bits).",
          bits: "11-8",
          value: "1001",
        },
        Rm: {
          description:
            "Specifies the second source register containing the values to be added (4 bits).",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Parallel Addition",
        description:
          "Performs four parallel unsigned 8-bit additions of corresponding bytes in the two source registers, and stores the result in the destination register.",
        example: {
          description:
            "Add the corresponding bytes in R1 and R2, storing the result in R0.",
          code: "UADD8 R0, R1, R2",
        },
      },
    ],
    condition_flags: {
      N: "Not affected.",
      Z: "Not affected.",
      C: "Set to 1 if the addition of any byte results in a carry out.",
      V: "Not affected.",
    },
  },
  {
    name: "Signed Add 16-bit",
    mnemonic: "SADD16",
    description:
      "Performs two parallel signed 16-bit additions of corresponding halfwords in two registers, and stores the result in a destination register.",
    syntax: [
      {
        format: "SADD16 <Rd>, <Rn>, <Rm>",
        explanation: {
          Rd: "The destination register where the result will be stored.",
          Rn: "The first source register containing the values to be added.",
          Rm: "The second source register containing the values to be added.",
        },
      },
    ],
    bit_encoding: {
      full_encoding: "cond|01100001|Rd|Rn|0001|Rm",
      fields: {
        cond: {
          description:
            "Condition field (4 bits), controls execution based on condition codes.",
          bits: "31-28",
          example: "1110 (Always execute)",
        },
        opcode1: {
          description: "Fixed opcode bits for the SADD16 instruction (8 bits).",
          bits: "27-20",
          value: "01100001",
        },
        Rd: {
          description:
            "Specifies the destination register where the result will be stored (4 bits).",
          bits: "19-16",
          example: "0000 (R0)",
        },
        Rn: {
          description:
            "Specifies the first source register containing the values to be added (4 bits).",
          bits: "15-12",
          example: "0001 (R1)",
        },
        opcode2: {
          description: "Fixed opcode bits for the SADD16 instruction (4 bits).",
          bits: "11-8",
          value: "0001",
        },
        Rm: {
          description:
            "Specifies the second source register containing the values to be added (4 bits).",
          bits: "3-0",
          example: "0010 (R2)",
        },
      },
    },
    operand_modes: [
      {
        mode: "Parallel Addition",
        description:
          "Performs two parallel signed 16-bit additions of corresponding halfwords in the two source registers, and stores the result in the destination register.",
        example: {
          description:
            "Add the corresponding halfwords in R1 and R2, storing the result in R0.",
          code: "SADD16 R0, R1, R2",
        },
      },
    ],
    condition_flags: {
      N: "Set to 1 if the result is negative.",
      Z: "Set to 1 if the result is zero.",
      C: "Set to 1 if the addition of any halfword results in a carry out.",
      V: "Set to 1 if the addition of any halfword results in an overflow.",
    },
  },
];
