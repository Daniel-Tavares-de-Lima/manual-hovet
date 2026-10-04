import "./home.css";
import { Nav } from "@/components/home/nav";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* mesmo <link> de fontes do sig-hovet-v3.html; o React 19 leva para o <head> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&family=Source+Sans+3:wght@400;600;700&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      {/* o body do layout raiz tem fundo verde inline; aqui volta ao --fundo da referência */}
      <div style={{ background: "var(--fundo)", minHeight: "100vh" }}>
        <Nav />
        {children}
      </div>
    </>
  );
}
