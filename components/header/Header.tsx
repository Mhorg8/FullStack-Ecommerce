import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "../Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "../searchbar/SearchBar";
import CartIcon from "./CartIcon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import { getAllCategories } from "@/sanity/lib/helpers/query";
import WhishlistIcon from "./WhishlistIcon";

const Header = async () => {
  const user = await currentUser();
  const categories = await getAllCategories();

  return (
    <header className="bg-white border-b border-gray-200 py-5 sticky top-0 z-50">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu categories={categories} />

        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo text="Tulus" className="" />
        </div>

        <div className="auto md:1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />

          <ClerkLoaded>
            <WhishlistIcon />
            <SignedIn>
              <UserButton />
            </SignedIn>

            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
