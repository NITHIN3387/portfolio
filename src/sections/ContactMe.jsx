import Link from "next/link";
import Image from "next/image";

import SectionHeader from "@/components/customFonts/SectionHeader";
import HTML_Tag from "@/components/HTML_Tag";

import LinkedIn from "@/assets/images/linkedin.png";
import Github from "@/assets/images/github.png";
import Instagram from "@/assets/images/instagram.png";
import Mail from "@/assets/images/gmail.png";

const ContactMe = () => {
  const contactList = [
    {
      imgUrl: LinkedIn,
      link: "https://www.linkedin.com/in/nithin-n-a218b3228/",
    },
    {
      imgUrl: Github,
      link: "https://github.com/NITHIN3387",
    },
    {
      imgUrl: Instagram,
      link: "https://www.instagram.com/itz_nithin_n/",
    },
    {
      imgUrl: Mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=nithinn9980@gmail.com&su=Subject%20of%20your%20email&body=Hello%20there,",
    },
  ];

  return (
    <div className="flex flex-col justify-center relative ps-5">
      <div className="absolute sm:text-[10em] text-[7em] top-0 right-0 font-extrabold text-white/5">
        Contact
      </div>
      <SectionHeader>Connect me on {">>"}</SectionHeader>

      <div className="grid xl:grid-cols-[2fr_3fr] md:grid-cols-2">
        <div className="sm:hidden inline">
          <HTML_Tag>p</HTML_Tag>

          <p className="px-5 text-[1.1em] font-medium">
            I`m thrilled to connect with you. Whether you have a project in
            mind, a question, or just want to say hi, I`d love to hear from you.
            Feel free to reach out using the contact form, or connect with me
            through my social media links. I`m always excited to collaborate and
            explore new opportunities. Let`s create something awesome together!
          </p>

          <HTML_Tag>/p</HTML_Tag>
        </div>
        <div className="grid">
          <HTML_Tag>form</HTML_Tag>
          <form className="m-5 p-5 w-[80%] rounded-md bg-white/5 grid gap-5">
            <div className="grid">
              <label htmlFor="name">Name:</label>
              <input
                className="rounded-md bg-white/10 mt-2 p-1 ps-2 focus:ring-1 focus:outline-none focus:ring-[aqua]"
                type="text"
                id="name"
                placeholder="Nithin N"
                required
              />
            </div>
            <div className="grid">
              <label htmlFor="email">Email Id:</label>
              <input
                className="rounded-md bg-white/10 mt-2 p-1 ps-2 focus:ring-1 focus:outline-none focus:ring-[aqua]"
                type="email"
                id="email"
                placeholder="nithinn9980@gmail.com"
                required
              />
            </div>
            <div className="grid">
              <label htmlFor="msg">Message:</label>
              <textarea
                rows={3}
                className="rounded-md bg-white/10 mt-2 p-1 ps-2 focus:ring-1 focus:outline-none focus:ring-[aqua]"
                type="text"
                id="msg"
                placeholder="Hello !!!"
                required
              />
            </div>
            <button
              className="w-fit text-left bg-[aqua] text-black py-1 px-3 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
          <HTML_Tag>/form</HTML_Tag>
        </div>

        <div className="flex flex-col justify-center">
          <HTML_Tag className={" sm:inline hidden"}>p</HTML_Tag>

          <p className="px-5 text-[1.1em] font-medium sm:inline hidden">
            I`m thrilled to connect with you. Whether you have a project in
            mind, a question, or just want to say hi, I`d love to hear from you.
            Feel free to reach out using the contact form, or connect with me
            through my social media links. I`m always excited to collaborate and
            explore new opportunities. Let`s create something awesome together!
          </p>

          <HTML_Tag className={" sm:inline hidden"}>/p</HTML_Tag>

          <HTML_Tag>ul</HTML_Tag>
          <div className="flex gap-5 p-5">
            {contactList.map((list) => (
              <Link
                key={list.link}
                href={list.link}
                target="_blank"
                className="bg-white/5 p-3 rounded-md hover:-translate-y-2 transition-all"
              >
                <Image src={list.imgUrl} alt="linkedIn" priority />
              </Link>
            ))}
          </div>
          <HTML_Tag>/ul</HTML_Tag>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
