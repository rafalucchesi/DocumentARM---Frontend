import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-screen flex-row justify-between bg-black text-white">
      <h2 className="p-4">DocumentARM</h2>
      <section className="flex">
        <Link href="/" className="p-4">
          Home
        </Link>
        <Link href="/instructions" className="p-4">
          Instructions
        </Link>
      </section>
    </header>
  );
};

export default Header;
