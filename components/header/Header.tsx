import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "../Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />

        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo text="Tulus" className="italic" />
        </div>

        <div className="auto md:1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <div>
            <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
