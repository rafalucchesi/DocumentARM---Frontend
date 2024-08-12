const Header = () => {
  return (
    <header className="flex w-screen flex-row justify-between border-b border-gray-300 bg-black text-white">
      <h2 className="p-4">DocumentARM</h2>
      <section>
        <button className="p-4">Home</button>
        <button className="p-4">Documentação</button>
      </section>
    </header>
  );
};

export default Header;
