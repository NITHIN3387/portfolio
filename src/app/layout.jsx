import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export const metadata = {
  title: "Nithin N",
  description: "Personal portfolio website of Nithin n",
};

export default function RootLayout({ children }) {
  console.log(poppins.className);
  return (
    <html lang="en">
      <body className={poppins.style}>{children}</body>
    </html>
  );
}
