import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Sidebar } from "@/shared/components";
import { Providers } from "@/shared/providers";
import { StyledComponentsRegistry } from "@/shared/lib";

import { ResetCSS } from "@/shared/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animes | Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <ResetCSS />

            <div className="flex">
              <Sidebar />

              <main className="main">{children}</main>
            </div>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
