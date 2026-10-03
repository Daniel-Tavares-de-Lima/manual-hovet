import { Icone } from "./Icone";

export function Desafio() {
  return (
    <section className="sec alt" id="desafio">
      <div className="wrap">
        <div className="cab">
          <p className="sob">O desafio</p>
          <h2>Atendimento, ensino e pesquisa no mesmo prontuário</h2>
          <p>Quando a informação fica em papel, planilhas e sistemas desconectados, surgem inconsistências, retrabalho e perda de rastreabilidade. O SIG-HOVET centraliza os registros clínicos e organiza os processos críticos do hospital.</p>
        </div>
        <div className="dupla">
          <div className="lista-card problema">
            <h3><span><Icone k="x" c="#9a3412" /></span>O que costuma dar errado</h3>
            <ul>
              <li><span><Icone k="menos" c="#9a3412" /></span>Prontuários dispersos e registro não padronizado</li>
              <li><span><Icone k="menos" c="#9a3412" /></span>Dificuldade de acompanhar histórico e evolução do caso</li>
              <li><span><Icone k="menos" c="#9a3412" /></span>Retrabalho para consolidar relatórios institucionais</li>
              <li><span><Icone k="menos" c="#9a3412" /></span>Dados pouco confiáveis para pesquisa e gestão</li>
            </ul>
          </div>
          <div className="lista-card solucao">
            <h3><span><Icone k="check" c="#035d3a" /></span>O que o SIG-HOVET resolve</h3>
            <ul>
              <li><span><Icone k="check" c="#035d3a" /></span>Padronização do registro clínico e rastreabilidade</li>
              <li><span><Icone k="check" c="#035d3a" /></span>Fluxo integrado de consulta, requisição e procedimento</li>
              <li><span><Icone k="check" c="#035d3a" /></span>Relatório de Anotações Casuísticas (FORDHOV) automatizado</li>
              <li><span><Icone k="check" c="#035d3a" /></span>Base sólida de dados para ensino, pesquisa e governança</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
