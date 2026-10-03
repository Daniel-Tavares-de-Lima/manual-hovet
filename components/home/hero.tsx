import Image from "next/image";
import Link from "next/link";
import { Icone } from "./Icone";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div>
          <h1>Gestão clínica para hospitais veterinários</h1>
          <p className="lead">Prontuário, consultas, procedimentos e prestação de contas institucional em um só sistema, pensado para a rotina real do hospital universitário.</p>
          <div className="acoes">
            <Link className="btn btn-p" href="/entrar">Teste o SIG-HOVET</Link>
          </div>
          <div className="pilares">
            <div className="pilar"><small>Foco</small><strong>Prontuário</strong><p>Registro estruturado do histórico clínico com base em padronização.</p></div>
            <div className="pilar"><small>Diretriz</small><strong>FORDHOV</strong><p>Conformidade e consistência para contexto universitário.</p></div>
            <div className="pilar"><small>Arquitetura</small><strong>Modular</strong><p>Base preparada para evoluir com novos módulos e integrações.</p></div>
          </div>
        </div>
        <div className="foto">
          <Image src="/hero-foto.jpg" alt="Médica veterinária examinando um golden retriever com estetoscópio" width={890} height={704} priority unoptimized />
          <div className="flutua" aria-hidden="true">
            <div className="av"><Icone k="pata" c="#fff" s={22} /></div>
            <div><b>Prontuário 23.082-1</b><span>Canino · Consulta registrada</span></div>
            <span className="ok">Atualizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
