import HTML_Tag from "@/components/HTML_Tag";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import BouncyText from "@/components/customFonts/BouncyText";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Home = () => {
  return (
    <div className="relative flex flex-col justify-center sm:px-10 ps-5">
      <div className="absolute sm:text-[10em] text-[7em] top-0 right-0 font-extrabold text-white/5">
        Home
      </div>
      <div>
        <HTML_Tag>h1</HTML_Tag>

        <BouncyText
          className={
            poppins.className + " sm:text-[4.5em] text-[4em] font-[900]"
          }
        >
          Hi,
        </BouncyText>
        <span className="flex items-center">
          <BouncyText
            className={
              poppins.className + " sm:text-[4.5em] text-[4em] font-[900]"
            }
          >
            I&apos;m
          </BouncyText>
          <Image
            src={Logo}
            alt="logo"
            width={0}
            className="sm:h-[58px] sm:w-[65px] h-[50px] w-[60px] translate-x-5"
            priority
          />
          <BouncyText
            className={
              poppins.className + " sm:text-[4.5em] text-[4em] font-[900]"
            }
          >
            ithin,
          </BouncyText>
        </span>
        <BouncyText
          className={
            poppins.className + " sm:text-[4.5em] text-[4em] font-[900]"
          }
        >
          Web Developer
        </BouncyText>

        <HTML_Tag>h1</HTML_Tag>

        <span className="flex gap-2 items-center text-white/90 text-[0.9em]">
          <HTML_Tag>p</HTML_Tag>
          Full Stack Developer / Mobile App Developer
          <HTML_Tag>/p</HTML_Tag>
        </span>
      </div>

      <HTML_Tag className="pt-5">button</HTML_Tag>
      <span className="border border-[aqua] p-3 w-fit m-2 ms-5 text-[aqua] hover:text-black hover:font-extrabold rounded-sm bg-[100%] hover:bg-[0%] transition-all bg-[length:200%] bg-gradient-to-r from-[aqua_50%] to-[transparent_50%]">
        <Link href="#contactMe">Contact Me !</Link>
      </span>
      <HTML_Tag>/button</HTML_Tag>
    </div>
  );
};

export default Home;
