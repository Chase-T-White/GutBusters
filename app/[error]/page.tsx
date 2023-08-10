"use client";
import Link from "next/link";
import Button from "../components/Button";

const Error = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center w-[50%] mb-16">
        Oops... don't you know that page don't exist
      </h1>
      <Link href={"/"}>
        <Button action={"Back"} />
      </Link>
    </main>
  );
};

export default Error;
