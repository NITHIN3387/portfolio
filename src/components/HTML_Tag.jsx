import { Source_Code_Pro } from "next/font/google";
import React from "react";

const sourceCode = Source_Code_Pro({ subsets: ["latin"], weight: ["500"] });

const HTML_Tag = ({ children, className }) => (
  <div
    className={
      sourceCode.className + " text-white/30 tracking-wider py-1 " + className
    }
  >
    &lt;{children}&gt;
  </div>
);

export default HTML_Tag;
