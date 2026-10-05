"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Demo() {
  const lap = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  // Revelação do notebook (1x ao entrar na tela)
  useEffect(() => {
    const o = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setVisivel(true); o.disconnect(); } }), { threshold: .3 });
    o.observe(lap.current!);
    return () => o.disconnect();
  }, []);

  return (
    <section className="demo" id="demo">
      <div className="cab">
        <p className="sob">O sistema por dentro</p>
        <h2>Todo o paciente a um clique</h2>
        <p>Busque pelo número do prontuário e encontre tutor, histórico e procedimentos na mesma tela.</p>
      </div>
      <div className="laptop-zona">
        <div className={visivel ? "laptop visivel" : "laptop"} id="laptop" ref={lap}>
          <Image src="/home.png" alt="Tela inicial do SIG-HOVET com a busca de pacientes por número de prontuário" width={1802} height={1034} unoptimized />
        </div>
      </div>
    </section>
  );
}
