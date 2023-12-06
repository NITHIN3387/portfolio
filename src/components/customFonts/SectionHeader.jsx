import React from "react";
import HTML_Tag from "../HTML_Tag";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const SectionHeader = ({children}) => {
  return (
    <div>
      <HTML_Tag>h2</HTML_Tag>
      <h2
        className={
          poppins.className + " ps-5 text-[3.5em] font-extrabold text-[aqua]"
        }
      >
        {children}
      </h2>
      <HTML_Tag>/h2</HTML_Tag>
    </div>
  );
};

export default SectionHeader;
