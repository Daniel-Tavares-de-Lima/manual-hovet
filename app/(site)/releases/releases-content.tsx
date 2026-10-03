export default function ReleasesContent() {
  return (
    <>
      <>
        <hr />
        <p>
          <em>10/06/2026</em>
        </p>
        <ul>
          <li>Atualização do manual</li>
        </ul>
      </>
      <>
        <hr />
        <p>
          <em>24/03/2026</em>
        </p>
        <ul>
          <li>Atualização do manual</li>
        </ul>
      </>
      <>
        <hr />
        <p>
          <em>18/03/2026</em>
        </p>
        <ul>
          <li>
            A tag de cabeçalho agora usa o logo do DMV-UFRPE ao invés do logo da
            medicina veterinária{" "}
          </li>
          <li>Adição de tag de rodapé</li>
          <li>As tags dos modelos foram renomeadas e reorganizadas</li>
          <li>
            Corrigido o problema de algumas tags que não eram substituídas pelos
            valores reais.
          </li>
        </ul>
      </>
      <>
        <hr />

        <p>
          <em>17/03/2026</em>
        </p>

        <h3>Atualização do manual</h3>
        <ul>
          <li>Um sumário foi adicionado no manual para facilitar a leitura</li>
          <li>
            O conteúdo do manual foi atualizado, mas ainda há muito o que fazer
          </li>
        </ul>
      </>
      <>
        <hr />

        <p>
          <em>16/03/2026</em>
        </p>

        <ul>
          <li>
            <strong>Definição direta de número de prontuário</strong> . Se o
            paciente já tiver cadastro no hospital, agora é possível definir
            esse número no momento do cadastro. Se o paciente é novo, então
            deixe o campo em branco que o sistema vai gerar o número
            automaticamente seguindo a sequência.
          </li>
        </ul>
      </>
      <>
        <hr />

        <p>
          <em>18/02/2026</em>
        </p>

        <h3>Novos Recursos</h3>

        <ul>
          <li>
            <strong>Tags de Imagem:</strong> Adição de 10 tags (0 a 9) que são
            substituídas automaticamente por imagens em anexo, desde que os
            nomes dos arquivos correspondam às tags.
          </li>
          <li>
            <strong>Visualizador de Imagens:</strong> Agora, ao clicar em uma
            imagem anexada, ela será exibida e terá suporte a{" "}
            <strong>zoom</strong>.
          </li>
          <li>
            <strong>Redimensionamento Automático configurável:</strong> Para
            otimizar o armazenamento do sistema, agora as imagens em anexo são
            redimensionadas automaticamente no momento da seleção. Utilizando
            modelos é possível criar configurações específicas de Largura
            Máxima, Altura Máxima e Qualidade para cada tipo de exame de imagem.
          </li>
        </ul>

        <h3>Mudanças</h3>

        <ul>
          <li>
            <strong>Fluxo de Salvamento:</strong> Ao salvar cadastros (paciente,
            tutor, colaborador, consulta, etc.), o sistema{" "}
            <strong>não redireciona</strong> mais para a página anterior,
            mantendo o usuário na página atual.
          </li>
        </ul>

        <h3>Correção de Bugs</h3>

        <ul>
          <li>
            Corrigido o erro que exigia um novo login para que a assinatura
            atualizada ficasse disponível.
          </li>
          <li>
            Resolvida a falha onde imagens ocasionalmente não apareciam nos
            documentos impressos.
          </li>
          <li>
            Corrigido o erro que impedia <strong>renomear</strong> arquivos
            anexados.
          </li>
          <li>
            Resolvido o problema de sincronia onde anexos recém-enviados não
            apareciam imediatamente na lista.
          </li>
        </ul>
      </>
    </>
  );
}
