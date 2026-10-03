import Link from "next/link";

export function Cta() {
  return (
    <section className="cta" id="crescer">
      <svg className="pata-bg" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><circle cx="7" cy="6" r="2.2"/><circle cx="12" cy="4.2" r="2.2"/><circle cx="17" cy="6" r="2.2"/><circle cx="19.5" cy="11" r="2"/><circle cx="4.5" cy="11" r="2"/><path d="M12 10c-3 0-6 3.6-6 6.6 0 2 1.6 3.4 3.5 3.4 1 0 1.7-.5 2.5-.5s1.5.5 2.5.5c1.9 0 3.5-1.4 3.5-3.4C18 13.6 15 10 12 10z"/></svg>
      <div className="wrap">
        <div>
          <h2>Uma plataforma pensada para crescer</h2>
          <p>Hoje concentrada no prontuário eletrônico, a plataforma foi projetada para incorporar novos módulos sem reestruturações profundas.</p>
        </div>
        <div className="acoes">
          <Link className="btn btn-branco" href="/timeline">Ver cronograma</Link>
          <Link className="btn btn-contorno" href="/releases">Ver atualizações</Link>
        </div>
      </div>
    </section>
  );
}
