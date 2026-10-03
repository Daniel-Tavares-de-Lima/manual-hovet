import Link from "next/link";
import { Icone } from "./Icone";

export function Nav() {
  return (
    <>
      <nav className="nav" aria-label="Principal">
        <div className="wrap">
          <Link className="marca" href="/"><span className="selo" id="selo"><Icone k="pata" c="#035d3a" s={20} w={2} /></span>SIG-HOVET</Link>
          <ul>
            <li><Link href="/manual">Manual</Link></li>
            <li><Link href="/timeline">Cronograma</Link></li>
            <li><Link href="/releases">Atualizações</Link></li>
            <li><Link href="/team">Equipe</Link></li>
          </ul>
          <Link className="btn btn-branco" href="/entrar">Teste o SIG-HOVET</Link>
        </div>
      </nav>
      <div className="pblur" aria-hidden="true"></div>
    </>
  );
}
