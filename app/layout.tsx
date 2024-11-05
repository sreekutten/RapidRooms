import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modals/Modal";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "RapidRooms",
  description: "RapidRooms booking",
};
const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {font.className}>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <Navbar />
          </ClientOnly>
          
          {children}
    
      </body>
    </html>
  );
}
