import { Icone } from "./Icone";

export function Funcionalidades() {
  return (
    <section className="sec alt" id="func">
      <div className="wrap">
        <div className="cab">
          <p className="sob">Funcionalidades centrais</p>
          <h2>Módulos para a rotina clínica e acadêmica</h2>
        </div>
        <div className="grade">
          <article className="func"><div className="ic"><Icone k="users" c="#035d3a" s={24} /></div><h3>Equipes e permissões</h3><ul><li>Cadastro de colaboradores</li><li>Cargos e perfis</li><li>Acesso por módulo e tipo de procedimento</li></ul></article>
          <article className="func"><div className="ic"><Icone k="pata" c="#035d3a" s={24} /></div><h3>Pacientes e tutores</h3><ul><li>Cadastro individual de animais</li><li>Cadastro coletivo (ex.: rebanhos)</li><li>Registro completo de tutores</li></ul></article>
          <article className="func"><div className="ic"><Icone k="steto" c="#035d3a" s={24} /></div><h3>Consultas e prontuário</h3><ul><li>Registro estruturado da consulta</li><li>Diagnóstico, tratamento, evoluções e anexos</li><li>Histórico do paciente centralizado</li></ul></article>
          <article className="func"><div className="ic"><Icone k="flask" c="#035d3a" s={24} /></div><h3>Procedimentos</h3><ul><li>Todos os tipos de procedimento</li><li>Registro de resultados</li><li>Rastreabilidade consulta → requisição</li></ul></article>
          <article className="func"><div className="ic"><Icone k="docs" c="#035d3a" s={24} /></div><h3>Documentação clínica</h3><ul><li>Editor de texto rico</li><li>Quadro branco para registros visuais</li><li>Anexos em imagem e PDF</li></ul></article>
          <article className="func"><div className="ic"><Icone k="modelo" c="#035d3a" s={24} /></div><h3>Modelos autopreenchíveis</h3><ul><li>Modelos reutilizáveis</li><li>Dados do paciente e tutor preenchidos</li><li>Padrão por equipe, área e procedimento</li></ul></article>
        </div>
      </div>
    </section>
  );
}
