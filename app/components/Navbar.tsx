"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { SafeUser } from "../types";
import Link from "next/link";

type Props = {
  currentUser?: SafeUser | null;
};

const TOP_OFFSET = 66;

const Navbar = ({ currentUser }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          {currentUser ? (
            <>
              <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                <BsSearch />
              </div>
              <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                <BsBell />
              </div>
              <div
                onClick={toggleAccountMenu}
                className="flex flex-row items-center gap-2 cursor-pointer relative"
              >
                <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                  <Image
                    src="/images/default-blue.png"
                    alt="Profile"
                    width={100}
                    height={100}
                  />
                </div>
                <BsChevronDown
                  className={`text-white transition ${
                    showAccountMenu ? "rotate-180" : "rotate-0"
                  }`}
                />
                <AccountMenu
                  visible={showAccountMenu}
                  currentUser={currentUser}
                />
              </div>
            </>
          ) : (
            <Link href={"/auth"} className="text-white cursor-pointer">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
