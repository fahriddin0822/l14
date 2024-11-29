import React from "react";
import Container from "../style/Container";

export default function Header() {
  return (
    <header className="bg-gray-100 mb-8 sticky top-0 z-10">
      <Container>
        <nav className="flex justify-between py-3 items-center ml-4">
          <h2 className="mainTitle cursor-pointer">Shop</h2>
          <ul className="flex gap-2">
            <li className="infoText cursor-pointer mx-2">Home</li>
            <li className="infoText cursor-pointer mr-4">Products</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
