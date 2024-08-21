import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">
            <div className="hover:text-gray-200">Simple Next-JS App</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <div className="text-white hover:text-gray-200">Home</div>
          </Link>
          <Link href="/login">
            <div className="text-white hover:text-gray-200">Login</div>
          </Link>
          <Link href="/signup">
            <div className="text-white hover:text-gray-200">SginUp</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
