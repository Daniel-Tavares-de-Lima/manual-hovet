import "../globals.css";
import { Menu } from "@/components/Menu";


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      <main className="">
        {children}
      </main>
    </>
  );
}
