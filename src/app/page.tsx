"use client";

import { useRouter } from "next/navigation";
import Logo from "../../public/logo.svg";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-full w-full flex-col items-center gap-6 overflow-scroll bg-white p-10">
      <h1 className="text-center text-xl font-bold text-black">DocumentARM</h1>
      <h4 className="text-lg">Concise ARM Assembly Documentation</h4>
      <Image src={Logo} alt="logo" width={256} height={256} />
      <h4 onClick={() => router.push("/instructions")} className="text-lg">
        Click here to start now
      </h4>
    </main>
  );
}
