import { Cta } from "@/components/home/cta";
import { Demo } from "@/components/home/demo";
import { Desafio } from "@/components/home/desafio";
import { Diferenciais } from "@/components/home/diferenciais";
import { Funcionalidades } from "@/components/home/funcionalidades";
import { Hero } from "@/components/home/hero";
import { Rodape } from "@/components/home/rodape";

export default function Page() {
  return (
    <>
      <main id="topo">
        <Hero />
        <Demo />
        <Desafio />
        <Diferenciais />
        <Funcionalidades />
        <Cta />
      </main>
      <Rodape />
    </>
  );
}
