import React from "react";
import { GiMeat } from "react-icons/gi";
import Button from "./Button";

interface HeaderProps {
  setSearch: (search: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearch }) => {
  const handleSubmit = (e: React.FormEvent | any) => {
    e.preventDefault();
    setSearch(e.target[0].value);
  };

  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start w-full p-8 border-b border-sky-600 border-b-[2px]">
      <div className="flex gap-2 text-2xl mb-8 md:mb-0 sm:mr-12">
        <GiMeat className="text-4xl text-main-blue" />
        GutBusters
      </div>
      <form
        className="w-full max-w-[30rem] flex justify-between mx-auto rounded-full overflow-hidden bg-white"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          name="search"
          id="search"
          className="searchInput px-4 py-2 grow outline-none caret-pink-500"
          placeholder="Search over 1,000,000 recipes..."
        />
        <Button action={"Search"} />
      </form>
    </header>
  );
};

export default Header;
