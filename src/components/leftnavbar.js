import React from "react";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <button onClick={toggle} className="text-gray-600 hover:text-gray-900">
          ×
        </button>
      </div>
      <nav className="p-4">
        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Home</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">About</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Services</a>
        <a href="#" className="block py-2 px-4 hover:bg-gray-200 rounded">Contact</a>
      </nav>
    </div>
  );
}