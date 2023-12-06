import Image from "next/image";
import Link from "next/link";

import Logo from '@/assets/images/logo.png'

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

  return (
    <div className="flex justify-between items-stretch w-[calc(100%-5px)] backdrop-blur-xl p-5 top-0y">
      <Link href={'/'} className="logo text-[2em] font-extrabold tracking-widest flex items-center">
        <Image src={Logo} alt="logo" width={30}/>
        <span className="ms-1">ITHIN</span>
      </Link>
      <ul className=" flex gap-10 font-extrabold">
        {
            navlist.map((list) => (
                <Link key={list.title} href={list.link} className="flex justify-center items-center">{list.title}</Link>
            ))
        }
      </ul>
    </div>
  );
};

export default Navbar;
