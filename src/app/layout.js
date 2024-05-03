// import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "../scss/globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export async function generateMetadata() {
  // seo data fetch
  return {
    title: "Home Page",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />

      {children}
      <Footer />
      </body>
    </html>
  );
}
