import { useState } from "react";
import Button from './Button';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Arthur Melo</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600">Sobre</a>
          <a href="#projects" className="hover:text-blue-600">Projetos</a>
          <a href="#contact" className="hover:text-blue-600">Contato</a>
          <a
            href="/CarlosArthur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Baixar CV
          </a>
        </div>
        <div className="md:hidden">
          <Button onClick={() => setOpen(!open)} className="focus:outline-none">
            <div className="w-6 h-1 bg-gray-800 mb-1"></div>
            <div className="w-6 h-1 bg-gray-800 mb-1"></div>
            <div className="w-6 h-1 bg-gray-800"></div>
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#about" className="block px-6 py-3 hover:bg-gray-100">Sobre</a>
          <a href="#projects" className="block px-6 py-3 hover:bg-gray-100">Projetos</a>
          <a href="#contact" className="block px-6 py-3 hover:bg-gray-100">Contato</a>
          <a
            href="/CarlosArthur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 font-semibold text-indigo-600 hover:bg-gray-100"
          >
            Baixar CV
          </a>
        </div>
      )}
    </nav>
  );
}