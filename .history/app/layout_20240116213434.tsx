import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./(auth)/actions/getCurrentUser";
import ToasterContext from "@/context/HotToastContext";
import CartContext from "@/context/CartContext";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Dev-Threads",
  description: "E-commerce Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <html lang="en">
      <body className={raleway.className}>
        <AuthContext>
          <CartContext>
            <ToasterContext />
            <Navbar user={user!} />
            {children}
          </CartContext>
        </AuthContext>
      </body>
    </html>
  );
}
