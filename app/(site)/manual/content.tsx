type ManualImageProps = {
  alt: string;
  src: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
};

const ManualImage = ({
  alt,
  src,
  width = "100%",
  height = "auto",
  maxWidth = 960,
}: ManualImageProps) => (
  <div className="justify-center">
    <img
      alt={alt}
      src={src}
      className="img my-6 rounded-lg border border-gray-300 bg-white p-1 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)]"
      style={{ width, height, maxWidth }}
    />
  </div>
);

const red = (str: string) => (
  <strong>
    <span className="text-red-800"> {str} </span>
  </strong>
);

export default function ManualPostContent() {
  return (
    <>
      <article data-manual-content="true">
        <hr />
        <h2>Introdução</h2>
        <p>Aqui você encontrará instruções gerais sobre o SIG-HOVET.</p>
        <p>
          Sempre que você não encontrar uma tela ou um botão que aparece neste
          manual, o motivo mais comum é <strong>permissão do seu cargo</strong>.
          Nesse caso, fale com o administrador do sistema (cargo{" "}
          <strong>admin</strong>).
        </p>
        <h2>Configuração Inicial</h2>
        <h3>Cargos do sistema</h3>
        <p>
          Antes de cadastrar colaboradores (usuários), é necessário criar os
          cargos que representam suas funções dentro do hospital. Cada cargo
          define as permissões do usuário para os <strong>recursos</strong> do
          sistema.
        </p>
        <ul>
          <li>
            Se um recurso ficar sem permissão definida, o usuário não poderá nem
            mesmo visualizá-lo.
          </li>
          <li>
            <strong>Ler registros:</strong> permite apenas visualizar o recurso.
          </li>
          <li>
            <strong>Atualizar registros:</strong> permite visualizar, cadastrar,
            editar e excluir registros, quando essa opção existir.
          </li>
          <li>
            As telas e os menus exibidos no sistema variam de acordo com as
            permissões atribuídas ao cargo.
          </li>
        </ul>
        <h5>Paciente</h5>
        <ul>
          <li>
            <strong>Ler registros:</strong> permite apenas visualizar os
            cadastros de pacientes.
          </li>
          <li>
            <strong>Atualizar registros:</strong> permite visualizar e atualizar
            os cadastros de pacientes.
          </li>
        </ul>
        <h5>Consultas</h5>
        <ul>
          <li>
            <strong>Ler registros:</strong> permite apenas visualizar os
            registros de consulta.
          </li>
          <li>
            <strong>Atualizar registros:</strong> permite visualizar e atualizar
            os registros de consulta.
          </li>
          <li>
            <strong>Regra adicional:</strong> o usuário só pode atualizar as
            próprias consultas.
          </li>
        </ul>
        <h5>Imagem</h5>
        <ul>
          <li>
            <strong>Ler registros:</strong> permite apenas visualizar os
            registros de exames de imagem.
          </li>
          <li>
            <strong>Atualizar registros:</strong> permite visualizar e atualizar
            os registros de exames de imagem
          </li>
          <li>
            <strong>Atualizar configurações:</strong> permite inserir, atualizar
            ou remover itens da lista de exames de imagem, disponível nas
            configurações do sistema.
          </li>
        </ul>
        <ManualImage alt="Cadastro de colaboradores" src="/manual/cargos.png" />
        <h3>Funções do Cargo de Admin</h3>
        <p>
          Um colaborador do hospital é designado pela direção do hospital para o
          cargo de Admin. O administrador possui{" "}
          <strong>responsabilidades essenciais</strong>:
        </p>
        <ul>
          <li>Cadastro de usuários.</li>
          <li>Atribuição e edição dos cargos de cada usuário.</li>
          <li>Configurar o sistema.</li>
          <li>Gerar o relatório para o FORDHOV.</li>
          <li>Redefinir as senhas dos usuários.</li>
        </ul>
        <h3>Cadastro de Colaboradores</h3>
        <ul>
          <li>
            É possível inserir a assinatura/carimbo que será usado dentro do
            sistema.
          </li>
          <li>
            CRMV – <strong>ZP</strong> (zootecnista) ou <strong>VP</strong>{" "}
            (veterinário).
          </li>
        </ul>
        <ManualImage
          alt="Cadastro de colaboradores"
          src="/manual/colaborador.png"
        />
        <hr />
        <h2>Cadastro de Pacientes e Tutor</h2>
        <p>É necessário cadastrar o tutor antes de cadastrar o paciente.</p>
        <h3>Cadastro do Tutor</h3>
        <p>
          O endereço é preenchido automaticamente se o CEP estiver cadastrado
          nos correios.
        </p>
        <ManualImage alt="Cadastro de tutor" src="/manual/image6.png" />
        <h3>Cadastro de Pacientes</h3>
        <p>
          Ao selecionar o tutor, é exibido uma lista de todos os animais
          cadastrados que são vinculados ao tutor. Clique no botão ＋ para
          adicionar um <strong>novo animal</strong> para esse tutor.
        </p>
        <ManualImage alt="Lista de animais" src="/manual/image10.png" />
        <h3>Número de prontuário</h3>
        <p>
          O número de prontuário será definido automaticamente para novos
          pacientes se você deixar esse campo em branco. Ele será o próximo
          número da sequência, considerando o último cadastro anterior a
          implantação do sistema. Digamos que esse número é 23.000. O próximo
          cadastro será 23.001. Não será permitido definir números acima de
          23.000. Se o paciente é anterior a implantação do sistema, então sua
          numeração tem que ser menor ou igual a 23.000.
        </p>
        <p>
          Um <strong>digito verificador</strong> será acrescentado
          automaticamente no final do número do prontuário. Ele serve verificar
          se existem erros de digitação. Ex: 23.000-3. O 3 é o digito
          verificador. Ele faz parte do número de prontuário e não pode ser
          omitido.
        </p>
        <h3>Tipos de cadastro de paciente</h3>
        <ul>
          <li>
            <strong>Individual</strong>: usado para um animal específico.
          </li>
          <li>
            <strong>Coletivo</strong>: usado para rebanho.
          </li>
        </ul>
        <h3>Status do Paciente</h3>
        <p>
          Status inativo é para pacientes que vieram a óbito ou para cadastros
          feitos por equívoco. Não é possível fazer nenhum tipo de atendimento
          um paciente desativado.
        </p>
        <h3>Endereço do paciente diferente do endereço do tutor</h3>
        <p>
          O endereço do paciente pode ser diferente do endereço do tutor.
          Inicialmente o endereço do tutor será copiado para o paciente, mas
          poderá ser modificado.
        </p>
        <hr />
        <h2>Atendimento e Histórico do paciente</h2>
        <p>
          A tela de atendimento tem todas as informações e serviços relacionado
          ao paciente.
        </p>
        <h3>Atendimento - Paciente</h3>
        <p>
          <strong>Gráfico de pesagem:</strong> É possível registar o peso do
          paciente a cada consulta, procedimento e exame realizado. Os pesos
          mais recentes de cada dia serão exibidos no gráfico.
        </p>
        <h3>Atendimento - Consultas</h3>
        <p>
          A guia <strong>Consultas</strong> lista todas as consultas do
          paciente. Clique no botão ＋ para iniciar uma nova consulta.
        </p>
        <p>
          Clique em <strong>Minhas Consultas</strong> para filtrar as consultas
          que você registrou para esse paciente.
        </p>
        <ManualImage alt="Nova consulta" src="/manual/image14.png" />
        <h3>Atendimento - Procedimentos / exames</h3>
        <p>
          A guia <strong>Procedimentos</strong> lista todas as procedimentos do
          paciente. Clique no botão ＋ para iniciar um novo procedimento.
        </p>
        <p>
          Clique em <strong>Meus Procedimentos</strong> para filtrar as
          procedimentos que você registrou para esse paciente.
        </p>
        <h3>Atendimento - Requisições</h3>
        <p>
          A guia <strong>Requisições</strong> lista todas as requisições do
          paciente. É possível acessar a consulta que deu origem a uma
          requisição ou abrir um registro de procedimento a partir de uma
          requisição.
        </p>
        <p>
          Clique em <strong>Minhas Requisições</strong> para filtrar as
          requisições que você registrou para esse paciente. Esses documentos
          não ficam salvos no sistema.
        </p>
        <h3>Atendimento - Termos</h3>
        <p>
          Na guia <strong>Termos</strong> você poderá imprimir termos e
          declarações para esse paciente.
        </p>
        <hr />
        <h2>Consultas</h2>
        <ul>
          <li>
            Apenas quem registrou a consulta pode atualizar ou {red("deletar")}{" "}
            a consulta.
          </li>
          <li>
            Apenas consultas em <strong>andamento</strong> podem ser{" "}
            {red("deletadas")} ou atualizadas. Uma vez finalizada, será possível
            apenas adicionar notas de rodapé
          </li>
          <li>
            Requisições de consulta em andamento não servem para abertura de
            procedimentos/exames.
          </li>
          <li>
            Ao tentar iniciar uma nova consulta o sistema verificará se já
            existe alguma outra consulta em andamento. Se houver, você será
            solicitado a finalizar a consulta em andamento antes de iniciar uma
            nova.
          </li>
        </ul>
        <hr />
        <h2>Requisições</h2>
        <ul>
          <li>
            As requisições estão integradas ao registro da consulta e são para
            exames e procedimentos que serão realizados no hospital, portanto
            estão limitadas aos exames e procedimentos autorizados e disponíveis
            no hospital.
          </li>
        </ul>
        <hr />
        <h2>Procedimentos e exames</h2>
        <ul>
          <li>
            Procedimentos e exames são referidos no sistema apenas como
            <span className="italic"> procedimentos</span>, para simplificar.
          </li>
          <li>
            O tipo de procedimento que aparece para você depende das permissões
            do seu cargo.
          </li>
          <li>
            Qualquer pessoa que tenha permissão poderá atualizar ou{" "}
            {red("deletar")} um procedimento, mesmo que não seja quem o iniciou.
          </li>
          <li>
            Apenas procedimentos em <strong>andamento</strong> podem ser
            {red("deletados")} ou atualizados. Uma vez finalizado, será possível
            apenas adicionar notas de rodapé.
          </li>
          <li>
            Os procedimentos que exigem requisição só poderão ser iniciados a
            partir de uma requisição. O admin pode remover esta exigência nas
            configurações do sistema.
          </li>
          <li>Em necropsias, é obrigatório registrar o peso.</li>
          <li>
            A quantidade de amostras é exigida em exames cujo critério de
            pontuação são as amostras. Ex: Parasitológico de fezes (seriado).
          </li>
        </ul>
        <hr />
        <h2>Configurações do Sistema</h2>
        <p>
          Nas <strong>Configurações do Sistema</strong> ficam os listas de
          exames, procedimentos espécies e áreas disponível no sistema. Essa
          seção aparece no menu apenas para cargos que têm permissão para ver
          pelo menos um tipo de configuração.
        </p>
        <ul>
          <li>Não será possível cadastrar um paciente Felino se:</li>{" "}
          <ul>
            <li>Felino não estiver listado na lista de espécies</li>
            <li>Felino está listado e desativado.</li>
          </ul>
          <li>Não será possível registrar um procedimento de ultrassom:</li>
          <ul>
            <li>
              Se ultrassom não estiver listado na lista de exames de imagem
            </li>
            <li>Se ultrassom estiver listado e desativado.</li>
          </ul>
          <li>Não será possível registrar uma consulta de Dermatologia:</li>
          <ul>
            <li>Se Dermatologia não estiver listado na lista de Áreas</li>
            <li>Se Dermatologia estiver listado e desativado.</li>
            <li>Se o colaborador não tiver Dermatologia no cargo.</li>
          </ul>
        </ul>
        <h3>Critério de pontuação</h3>
        <p>
          <strong>Fixo</strong>: O procedimento exame terá sempre essa
          pontuação.
        </p>
        <ul>
          <li>
            <i>Magnésio</i> vale 1 ponto.
          </li>
          <li>
            <i>RPC - Relação de proteína e creatinina</i> vale 2 pontos.
          </li>
        </ul>
        <strong>Quantidade de amostras</strong>: Será 1 ponto para cada amostra.
        <hr />
        <h2>Modelos</h2>
        <p>
          Os <strong>modelos</strong> permitem agilizar o preenchimento de
          consultas, procedimentos, documentos, receituários e requisições. Eles
          funcionam como textos pré-formatados onde o usuário pode inserir{" "}
          <strong>tags automáticas</strong>, que são preenchidas pelo sistema
          com os dados do paciente.
        </p>
        <h3>Utilização das Tags</h3>
        <p>
          Ao criar ou editar um modelo, é possível inserir{" "}
          <strong>tags personalizadas</strong>. Essas tags são substituídas
          automaticamente pelos dados reais quando o modelo é utilizado em uma
          consulta ou procedimento.
        </p>
        <p>Exemplos de tags disponíveis:</p>
        <ManualImage alt="Exemplos de tags" src="/manual/image26.png" />
        <ManualImage alt="Atualizar modelo" src="/manual/image28.png" />
        <p>
          Em seguida, clique em <strong>substituir</strong> para verificar o
          resultado
        </p>
        <div className="w-80">
          <ManualImage alt="Exemplos de tags" src="/manual/substituir.png" />
        </div>
        <hr />
        {/* 
        <h2>Dispositivos Conectados</h2>

        <p>
          Em <strong>Dispositivos Conectados</strong>, você pode ver os acessos
          do seu usuário. Se notar um acesso que não reconhece, procure o
          administrador e troque sua senha.
        </p> */}
      </article>
    </>
  );
}
