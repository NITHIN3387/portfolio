"use client";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const navlist = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "About Me",
      link: "#aboutMe",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contanct Me",
      link: "#contactMe",
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex justify-between items-stretch w-[calc(100%-5px)] backdrop-blur-xl p-5 top-0">
      <Link
        href={"/"}
        className="logo text-[2em] font-extrabold tracking-widest flex items-center"
      >
        <Image src={Logo} alt="logo" width={30} priority />
        <span className="sm:inline ms-1 hidden">ITHIN</span>
      </Link>
      <Image
        src={require("../assets/images/menu.png")}
        alt="menu"
        width={45}
        className="sm:hidden inline"
        onClick={() => setToggle(true)}
        priority
      />
      <ul className=" sm:flex gap-10 font-extrabold hidden">
        {navlist.map((list) => (
          <Link
            key={list.title}
            href={list.link}
            className="flex justify-center items-center"
          >
            {list.title}
          </Link>
        ))}
      </ul>
      <div
        className={
          (toggle ? "grid nav-open" : "hidden nav-close") +
          " grid-cols-[2fr_12fr] h-[100lvh] w-full absolute left-0 top-0"
        }
      >
        <div
          className="bg-black/50 flex justify-center"
          onClick={() => setToggle(false)}
        >
          <span style={{ zoom: 3 }}></span>
        </div>
        <ul className=" sm:hidden gap-10 pt-10 font-extrabold flex flex-col items-center bg-black">
          {navlist.map((list) => (
            <Link
              key={list.title}
              href={list.link}
              className="flex justify-center items-center text-[1.25em]"
              onClick={() => setToggle(false)}
            >
              {list.title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
