import { Icone } from "./Icone";

const ok = <span><Icone k="check" c="#035d3a" /></span>;

export function Diferenciais() {
  return (
    <section className="sec" id="diferenciais">
      <div className="wrap">
        <div className="cab">
          <p className="sob">Diferenciais</p>
          <h2>Feito para o hospital universitário, não para o pet shop</h2>
          <p>Os sistemas veterinários do mercado foram desenhados para clínicas e pet shops privados, com foco em vendas, estoque e agenda. O SIG-HOVET parte da realidade de um hospital de ensino.</p>
        </div>
        <div className="comp" role="region" aria-label="Comparativo" tabIndex={0}>
          <table>
            <thead><tr><th scope="col"><span className="sr">Critério</span></th><th scope="col">Sistemas de clínica e pet shop</th><th scope="col" className="nos">SIG-HOVET</th></tr></thead>
            <tbody>
              <tr><th scope="row">Pensado para</th><td>Clínicas, consultórios e pet shops privados</td><td className="nos">{ok}Hospitais veterinários universitários</td></tr>
              <tr><th scope="row">Relatório FORDHOV</th><td>Não previsto</td><td className="nos">{ok}Anotações Casuísticas geradas a partir dos registros</td></tr>
              <tr><th scope="row">Rebanhos e animais de produção</th><td>Cadastro individual, foco em cães e gatos</td><td className="nos">{ok}Cadastro individual e coletivo, para todas as espécies</td></tr>
              <tr><th scope="row">Ensino e pesquisa</th><td>Dados voltados ao faturamento</td><td className="nos">{ok}Base padronizada e rastreável para uso acadêmico</td></tr>
              <tr><th scope="row">Prioridade do produto</th><td>Vendas, estoque, agenda e financeiro</td><td className="nos">{ok}Prontuário clínico e prestação de contas institucional</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
