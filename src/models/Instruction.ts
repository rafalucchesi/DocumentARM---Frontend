export interface Instruction {
  name: string;
  mnemonic: string;
  description: string;
  opcode?: string;
  syntax: {
    format: string;
    explanation: {
      CRd?: string;
      CRn?: string;
      CRm?: string;
      Rd?: string;
      RdLo?: string;
      RdHi?: string;
      Rm?: string;
      Rn?: string;
      Rs?: string;
      Rt?: string;
      Rt2?: string;
      cond?: string;
      opc1?: string;
      opc2?: string;
      operand?: string;
      operand2?: string;
      offset?: string;
      register_list?: string;
      exclamation_mark?: string;
      label?: string;
      special_reg?: string;
      sat?: string;
      shift?: string;
      p?: string;
      x?: string;
      y?: string;
      z?: string;
      NOP?: string;
      imm?: string;
      imm12?: string;
      imm24?: string;
      option?: string;
      "Sd|Dd"?: string;
      "Sn|Dn"?: string;
      "Sm|Dm"?: string;
    };
  }[];
  operand_modes: {
    mode: string;
    description: string;
    example: {
      description: string;
      code: string;
    };
  }[];
  bit_encoding: {
    full_encoding?: string;
    full_encoding_immediate?: string;
    full_encoding_register?: string;
    fields: {
      cond?: {
        description: string;
        bits: string;
        example: string;
      };
      opcode?: {
        description: string;
        bits: string;
        example?: string;
        value?: string;
      };
      opcode1?: {
        description: string;
        bits: string;
        value?: string;
        example?: string;
      };
      opcode2?: {
        description: string;
        bits: string;
        value?: string;
        example?: string;
      };
      opcode3?: {
        description: string;
        bits: string;
        value?: string;
        example?: string;
      };
      A?: {
        description: string;
        bits: string;
        value: string;
      };
      B?: {
        description: string;
        bits: string;
        value?: string;
        example?: string;
      };
      I?: {
        description: string;
        bits: string;
        example: string;
      };
      S?: {
        description: string;
        bits: string;
        example?: string;
        value?: string;
      };
      P?: {
        description: string;
        bits: string;
        example: string;
      };
      N?: {
        description: string;
        bits: string;
        example: string;
      };
      M?: {
        description: string;
        bits: string;
        example: string;
      };
      R?: {
        description: string;
        bits: string;
        example: string;
      };
      U?: {
        description: string;
        bits: string;
        example?: string;
        value?: string;
      };
      W?: {
        description: string;
        bits: string;
        example: string;
      };
      L?: {
        description: string;
        bits: string;
        value?: string;
        example?: string;
      };
      register_list?: {
        description: string;
        bits: string;
        example: string;
      };
      Rm?: {
        description: string;
        bits: string;
        example: string;
      };
      Rn?: {
        description: string;
        bits: string;
        example?: string;
        value?: string;
      };
      Rd?: {
        description: string;
        bits: string;
        example: string;
      };
      RdHi?: {
        description: string;
        bits: string;
        example: string;
      };
      RdLo?: {
        description: string;
        bits: string;
        example: string;
      };
      Rs?: {
        description: string;
        bits: string;
        example: string;
      };
      Rt?: {
        description: string;
        bits: string;
        example: string;
      };
      operand2?: {
        description: string;
        bits: string;
        example: string;
      };
      opcode_immediate?: {
        description: string;
        bits: string;
        value: string;
      };
      opcode_register?: {
        description: string;
        bits: string;
        value: string;
      };
      sat_imm?: {
        description: string;
        bits: string;
        example: string;
      };
      imm5?: {
        description: string;
        bits: string;
        example: string;
      };
      imm8?: {
        description: string;
        bits: string;
        example: string;
      };
      imm12?: {
        description: string;
        bits: string;
        example: string;
      };
      imm24?: {
        description: string;
        bits: string;
        example: string;
      };
      imm4H?: {
        description: string;
        bits: string;
        example: string;
      };
      imm4L?: {
        description: string;
        bits: string;
        example: string;
      };
      suffix?: {
        description: string;
        bits: string;
        value: string;
      };
      mask?: {
        description: string;
        bits: string;
        example: string;
      };
      operand?: {
        description: string;
        bits: string;
        example: string;
      };
      offset?: {
        description: string;
        bits: string;
        example: string;
      };
      shift?: {
        description: string;
        bits: string;
        example: string;
      };
      zeros?: {
        description: string;
        bits: string;
        value: string;
      };
      fixed?: {
        description: string;
        bits: string;
        value: string;
      };
      fixed1?: {
        description: string;
        bits: string;
        value: string;
      };
      fixed2?: {
        description: string;
        bits: string;
        value: string;
      };
      CRd?: {
        description: string;
        bits: string;
        example: string;
      };
      CRn?: {
        description: string;
        bits: string;
        example: string;
      };
      CRm?: {
        description: string;
        bits: string;
        example: string;
      };
      cp_num?: {
        description: string;
        bits: string;
        example: string;
      };
      Sd?: {
        description: string;
        bits: string;
        example: string;
      };
      Dn?: {
        description: string;
        bits: string;
        example: string;
      };
      Vd?: {
        description: string;
        bits: string;
        example: string;
      };
      Vm?: {
        description: string;
        bits: string;
        example: string;
      };
    };
  };
  condition_flags: {
    N: string;
    Z: string;
    C: string;
    V: string;
  };
}
