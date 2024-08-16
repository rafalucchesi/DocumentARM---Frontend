interface InstructionsListProps {
  name: string;
  mnemonic: string;
}

export const instructionsList: InstructionsListProps[] = [
  {
    name: "Add",
    mnemonic: "ADD",
  },
  {
    name: "Add with Carry",
    mnemonic: "ADC",
  },
  {
    name: "Subtract",
    mnemonic: "SUB",
  },
  {
    name: "Subtract with Carry",
    mnemonic: "SBC",
  },
  {
    name: "Reverse Subtract",
    mnemonic: "RSB",
  },
  {
    name: "Reverse Subtract with Carry",
    mnemonic: "RSC",
  },
  {
    name: "Bitwise AND",
    mnemonic: "AND",
  },
  {
    name: "Bitwise OR",
    mnemonic: "ORR",
  },
  {
    name: "Bitwise Exclusive OR",
    mnemonic: "EOR",
  },
  {
    name: "Bitwise Clear",
    mnemonic: "BIC",
  },
  {
    name: "Move",
    mnemonic: "MOV",
  },
  {
    name: "Test (Bitwise AND)",
    mnemonic: "TST",
  },
  {
    name: "Test Equivalence (Bitwise XOR)",
    mnemonic: "TEQ",
  },
  {
    name: "Compare (Subtract)",
    mnemonic: "CMP",
  },
  {
    name: "Compare Negative (Add)",
    mnemonic: "CMN",
  },
  {
    name: "Load Register",
    mnemonic: "LDR",
  },
  {
    name: "Store Register",
    mnemonic: "STR",
  },
  {
    name: "Load Register Byte",
    mnemonic: "LDRB",
  },
  {
    name: "Store Register Byte",
    mnemonic: "STRB",
  },
  {
    name: "Load Register Halfword",
    mnemonic: "LDRH",
  },
  {
    name: "Store Register Halfword",
    mnemonic: "STRH",
  },
  {
    name: "Load Register Signed Byte",
    mnemonic: "LDRSB",
  },
  {
    name: "Load Register Signed Halfword",
    mnemonic: "LDRSH",
  },
  {
    name: "Load Multiple",
    mnemonic: "LDM",
  },
  {
    name: "Store Multiple",
    mnemonic: "STM",
  },
  {
    name: "Load Register Dual",
    mnemonic: "LDRD",
  },
  {
    name: "Store Register Dual",
    mnemonic: "STRD",
  },
  {
    name: "Branch",
    mnemonic: "B",
  },
  {
    name: "Branch with Link",
    mnemonic: "BL",
  },
  {
    name: "Branch and Exchange",
    mnemonic: "BX",
  },
  {
    name: "Branch with Link and Exchange",
    mnemonic: "BLX",
  },
  {
    name: "Move to Register from Special Register",
    mnemonic: "MRS",
  },
  {
    name: "Move to Special Register from Register",
    mnemonic: "MSR",
  },
  {
    name: "Multiply",
    mnemonic: "MUL",
  },
  {
    name: "Multiply Accumulate",
    mnemonic: "MLA",
  },
  {
    name: "Multiply and Subtract",
    mnemonic: "MLS",
  },
  {
    name: "Unsigned Multiply Long",
    mnemonic: "UMULL",
  },
  {
    name: "Unsigned Multiply-Accumulate Long",
    mnemonic: "UMLAL",
  },
  {
    name: "Signed Multiply Long",
    mnemonic: "SMULL",
  },
  {
    name: "Signed Multiply-Accumulate Long",
    mnemonic: "SMLAL",
  },
  {
    name: "Swap",
    mnemonic: "SWP",
  },
  {
    name: "Swap Byte",
    mnemonic: "SWPB",
  },
  {
    name: "No Operation",
    mnemonic: "NOP",
  },
  {
    name: "Count Leading Zeros",
    mnemonic: "CLZ",
  },
  {
    name: "Byte-Reverse Word",
    mnemonic: "REV",
  },
  {
    name: "Byte-Reverse Packed Halfword",
    mnemonic: "REV16",
  },
  {
    name: "Reverse Bytes in Signed Halfword",
    mnemonic: "REVSH",
  },
  {
    name: "Supervisor Call",
    mnemonic: "SVC",
  },
  {
    name: "Coprocessor Data Operation",
    mnemonic: "CDP",
  },
  {
    name: "Load Coprocessor",
    mnemonic: "LDC",
  },
  {
    name: "Store to Coprocessor",
    mnemonic: "STC",
  },
  {
    name: "Move to ARM Register from Coprocessor",
    mnemonic: "MRC",
  },
  {
    name: "Vector Multiply",
    mnemonic: "VMUL",
  },
  {
    name: "Vector Add",
    mnemonic: "VADD",
  },
  {
    name: "Vector Absolute",
    mnemonic: "VABS",
  },
  {
    name: "Reverse Bits",
    mnemonic: "RBIT",
  },
  {
    name: "Rotate Right",
    mnemonic: "ROR",
  },
  {
    name: "Rotate Right with Extend",
    mnemonic: "RRX",
  },
  {
    name: "Load-Exclusive Register",
    mnemonic: "LDREX",
  },
  {
    name: "Store-Exclusive Register",
    mnemonic: "STREX",
  },
  {
    name: "If-Then",
    mnemonic: "IT",
  },
  {
    name: "Unsigned Saturate",
    mnemonic: "USAT",
  },
  {
    name: "Unsigned Add 8-bit",
    mnemonic: "UADD8",
  },
  {
    name: "Signed Add 16-bit",
    mnemonic: "SADD16",
  },
];
