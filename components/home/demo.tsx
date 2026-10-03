"use client";

import { useEffect, useRef, useState } from "react";
import { Icone, type NomeIcone } from "./Icone";

const itens: [NomeIcone, string][] = [["pata", "Pacientes"], ["user", "Tutores"], ["users", "Colaboradores"], ["star", "Cargos"], ["plus", "Consultas"], ["flask", "Procedimentos"], ["send", "Requisições"], ["gear", "Configurações"], ["table", "Transparência"], ["docs", "Modelos"], ["dev", "Dispositivos"], ["help", "Ajuda"]];
const pac = [["Nathaniel Kilback", "23.082-1", "canino", "Macho", "3 anos", "28,4 kg"], ["Erik Kuhlman", "23.080-5", "felino", "Fêmea", "5 anos", "4,2 kg"],
  ["Dr. Marshall Bogisich", "23.074-8", "bovino", "Macho", "4 meses", "105,3 kg"], ["Susan Schimmel", "23.073-5", "equino", "Macho", "7 meses", "58 kg"],
  ["Brenda Bergstrom", "23.072-2", "serpente", "Fêmea", "11 meses", "0,9 kg"], ["Celia Blanda", "23.071-4", "ave", "Macho", "16 dias", "14 g"],
  ["Phil Bergnaum-Gottlieb", "23.069-8", "suíno", "Macho", "8 meses", "62 kg"], ["Preston Friesen DDS", "23.067-2", "caprino", "Macho", "11 meses", "39,2 kg"]];

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
          <div className="tela"><div className="app">
            <div className="app-top"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>SIG-HOVET</div>
            <div className="icones" id="icones">
              {itens.map(([k, n]) => <div className="ico" key={n}><Icone k={k} /><span>{n}</span></div>)}
            </div>
            <div className="busca"><div className="b1">Nº do Prontuário</div><div className="b2">Número do prontuário</div><div className="b3"></div></div>
            <div className="abas"><span>Vistos recentemente</span><span className="on">Resultados de pesquisa</span></div>
            <div className="pacientes" id="pacientes">
              {pac.map((p) => <div className="pac" key={p[1]}><div className="av"><Icone k="pata" c="#fff" s={20} /></div><div className="inf"><div className="l1"><span>{p[0]}</span><span>{p[1]}</span></div><div className="tags"><i>{p[2]}</i><i>{p[3]}</i><i>{p[4]}</i><i>{p[5]}</i></div></div></div>)}
            </div>
            <div className="pag"><span>21-30 de 57</span><span>‹</span><span>1</span><span>2</span><b>3</b><span>4</span><span>…</span><span>6</span><span>›</span><span className="fab">+</span></div>
          </div></div>
          <div className="base"></div>
        </div>
      </div>
    </section>
  );
}
