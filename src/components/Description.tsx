"use client";
import { useState } from "react";

export default function Description() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "careerajin@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true); // Show popup when copy is successful
      setTimeout(() => setIsCopied(false), 2000); // Hide popup after 2 seconds
    });
  };

  return (
    <section className="mb-8 text-center relative">
      <p className="text-xl font-bold max-w-2xl mx-auto text-left mt-4">
        Hi, I&apos;m Ajin Varghese Chandy.
        <br /> <br />
        <span
          onClick={copyToClipboard}
          className="cursor-pointer text-blue-500 hover:underline"
        >
          careerajin@gmail.com
        </span>
        <br /> <br />
        / Market.
        <br />
        <br />
        / Code.
        <br />
        <br />
        / Money.
        <br /> <br />
        <span className="text-gray-400">Designing UI is shit.</span>
      </p>
      {isCopied && (
        <div className="absolute top-0 right-0 mt-4 mr-4 p-2 bg-green-500 text-white rounded shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </section>
  );
}
