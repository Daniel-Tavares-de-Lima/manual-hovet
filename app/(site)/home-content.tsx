function Stat({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium text-slate-600">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-emerald-900 lg:text-3xl">
        {value}
      </div>
      {helper ? (
        <div className="mt-2 text-sm leading-6 text-slate-600">{helper}</div>
      ) : null}
    </div>
  );
}

export default function Content() {
  return (
    <div>
      {/* HERO STICKY */}
      <section className="sticky bottom-0 z-0 w-full bg-white">
        <div className="grid min-h-[520px] grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1">
          {/* TEXTO */}
          <div className="relative flex h-full items-center justify-center bg-white px-6 py-10 md:px-10">
            <div className="flex w-full max-w-3xl flex-col items-center gap-12 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl lg:text-5xl">
                Sistema Integrado de Gestão para Hospitais Veterinários
              </h1>

              {/* Imagem principal logo abaixo do título no mobile */}
              <div className="relative w-full overflow-hidden rounded-2xl md:hidden">
                <img
                  src="capa.png"
                  alt="capa"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 lg:h-20 w-full bg-linear-to-t from-white via-white/70 to-transparent" />
              </div>

              <a
                href="/entrar"
                className="inline-flex items-center rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
              >
                Teste o SIG-HOVET
              </a>

              <p className="text-base leading-7 text-justify text-slate-700">
                Uma plataforma completa de gestão clínica para hospitais
                veterinários universitários, pensado para operar o hospital no
                dia a dia e, ao mesmo tempo, facilitar a prestação de contas
                institucional com qualidade e consistência. Desenvolvido no
                contexto universitário da{" "}
                <a className="a" href="https://www.ufrpe.br/">
                  UFRPE
                </a>
                , o sistema nasceu preparado para a realidade das universidades
                federais
              </p>

              <div className="grid w-full gap-3 sm:grid-cols-1 xl:grid-cols-3">
                <Stat
                  label="Foco"
                  value="Prontuário"
                  helper="Registro estruturado do histórico clínico com base em padronização."
                />
                <Stat
                  label="Diretriz"
                  value="FORDHOV"
                  helper="Conformidade e consistência para contexto universitário."
                />
                <Stat
                  label="Arquitetura"
                  value="Modular"
                  helper="Base preparada para evoluir com novos módulos e integrações."
                />
              </div>
            </div>
          </div>

          <div className="relative hidden h-full md:block">
            <img
              src="capa.png"
              alt="capa"
              className="h-full w-full object-cover"
            />

            {/* efeito fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 md:block bg-linear-to-r from-white via-white/70 to-transparent" />
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-white">
        <img src="/home.png" alt="capa" width={1400} className="object-cover" />
      </div>

      {/* PROBLEMAS + SOLUÇÃO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-[110ch] px-6 py-8 md:px-10">
          <div className="grid gap-10">
            <div>
              <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight text-emerald-900 md:text-3xl">
                O desafio na rotina do hospital universitário
              </h2>
              <p className="my-0 text-base leading-7 text-justify text-slate-700">
                Hospitais veterinários universitários precisam conciliar
                atendimento clínico, ensino, pesquisa e prestação de contas
                institucional. Quando informações ficam dispersas (papel,
                planilhas e sistemas desconectados), surgem inconsistências,
                retrabalho e perda de rastreabilidade.
              </p>

              <p className="mt-4 text-base leading-7 text-justify text-slate-700">
                O <strong className="strong">SIG-HOVET</strong> centraliza os
                registros clínicos e organiza processos críticos do hospital,
                reduzindo fricção operacional e melhorando a qualidade dos
                dados.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  O que costuma dar errado
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 md:text-base">
                  <li>Prontuários dispersos e registro não padronizado</li>
                  <li>
                    Dificuldade de acompanhar histórico e evolução do caso
                  </li>
                  <li>Retrabalho para consolidar relatórios institucionais</li>
                  <li>Dados pouco confiáveis para pesquisa e gestão</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
                <h3 className="text-lg font-semibold tracking-tight text-emerald-950">
                  O que o SIG-HOVET resolve
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-emerald-950/90 md:text-base">
                  <li>Padronização do registro clínico e rastreabilidade</li>
                  <li>
                    Fluxo integrado de consulta, requisição e procedimento
                  </li>
                  <li>
                    Automação do relatório de Anotações Casuísticas (FORDHOV)
                  </li>
                  <li>
                    Base sólida de dados para ensino, pesquisa e governança
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <main className=" bg-white">
        <section className="">
          <div className="mx-auto max-w-[110ch] px-6 py-14 md:px-10">
            <div className="mx-auto max-w-[80ch] text-center">
              <h2 className="mx-auto max-w-[110ch] px-6 py-8 text-3xl font-semibold tracking-tight text-emerald-900 md:text-4xl">
                Funcionalidades centrais
              </h2>
              <p className="my-0 text-base leading-7 text-justify text-slate-700">
                Um conjunto de módulos pensados para a rotina clínica e
                acadêmica com controle, padronização e integração do início ao
                fim do atendimento.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="Gestão de equipes e permissões"
                items={[
                  "Cadastro de colaboradores",
                  "Criação de cargos e perfis",
                  "Controle de acesso por módulo e tipo de procedimento",
                ]}
              />
              <FeatureCard
                title="Cadastro de pacientes e tutores"
                items={[
                  "Cadastro individual de animais",
                  "Cadastro coletivo (ex.: rebanhos)",
                  "Registro completo de tutores",
                ]}
              />
              <FeatureCard
                title="Consultas e prontuário clínico"
                items={[
                  "Registro estruturado da consulta veterinária",
                  "Diagnóstico, tratamento, evoluções e anexos",
                  "Histórico do paciente centralizado",
                ]}
              />
              <FeatureCard
                title="Procedimentos"
                items={[
                  "Suporte a todos os tipos de procedimento",
                  " Registro de resultados",
                  "Rastreabilidade entre consulta, procedimento e requisição",
                ]}
              />
              <FeatureCard
                title="Documentação clínica avançada"
                items={[
                  "Editor de texto rico para documentos clínicos",
                  "Editor gráfico estilo quadro branco para registros visuais",
                  "Upload de anexos (imagens, PDF)",
                ]}
              />
              <FeatureCard
                title="Modelos autopreenchiveis"
                items={[
                  "Modelos reutilizáveis para acelerar preenchimento",
                  "Preenchimento automático com dados do paciente e tutor",
                  "Padronização por equipe, área e procedimento",
                ]}
              />
            </div>
          </div>
        </section>

        {/*         <section className="bg-white">
          <div className="mx-auto max-w-[110ch] px-6 py-14 md:px-10">
            <div className="mx-auto max-w-[85ch] text-center">
              <h2 className="h2 text-emerald-900">Contribuição para ensino, pesquisa e gestão</h2>
              <p className="p">
                Além de apoiar o atendimento clínico, o SIG-HOVET fortalece a formação prática,
                melhora a governança dos dados e viabiliza produção de dados estruturados para análises e produção científica no ambiente universitário.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <ImpactCard
                title="Ensino"
                desc="Registros clínicos padronizados apoiam a aprendizagem e o acompanhamento de casos."
              />
              <ImpactCard
                title="Pesquisa"
                desc="Dados estruturados e rastreáveis facilitam estudos, análises e produção científica."
              />
              <ImpactCard
                title="Gestão"
                desc="Visão institucional do hospital: consistência, auditoria e prestação de contas."
              />
            </div>

          </div>
        </section> */}

        {/* MANIFESTO / CRESCIMENTO */}
        <section className="bg-emerald-950 text-white">
          <div className="mx-auto max-w-[110ch] px-6 py-10">
            <div className="mx-auto max-w-[90ch] text-center">
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Uma plataforma pensada para crescer
              </h2>
              <p className="mt-4 text-base leading-7 text-white/80 md:text-lg">
                Embora atualmente concentrada no prontuário eletrônico, a
                plataforma foi projetada para incorporar novos módulos sem
                reestruturações profundas — com foco em integração e evolução
                contínua.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row mt-8 justify-center">
              <a
                href="/timeline"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-900 px-5 text-base font-medium text-white shadow-sm hover:bg-emerald-950"
              >
                Ver cronograma
              </a>
              <a
                href="/releases"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-base font-medium text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Ver atualizações
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700 md:text-base">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
