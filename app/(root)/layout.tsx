import Header from "@/components/shared/header";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import type { Metadata } from "next";
import "@/app/assets/styles/globals.css";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
