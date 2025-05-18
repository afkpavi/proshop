import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import type { Metadata } from "next";
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
            {children}
        </main>
    </div>
  );
}