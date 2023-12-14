export const schemaQA = {
  "@context": "http://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual a diferença dos modelos A1 e A3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os certificados A1 e A3 são dois modelos do Certificado Digital. As duas variações atendem as funcionalidades da certificação, o que muda é o local de armazenamento dos dados. Basicamente, a principal diferença dos dois modelos é o tipo de armazenagem e prazo: Certificado A1 Este usa um assistente de instalação para Windows e é armazenado no computador, podendo posteriormente ser salvo em um pen drive ou enviado por e-mail, seu tempo de validade é no máximo um ano. Certificado A3 É emitido e armazenado em cartão inteligente, token criptográfico ou diretamente na nuvem. Seu tempo de validade varia de 1 a 5 anos.",
      },
    },
    {
      "@type": "Question",
      name: "Posso utilizar meu certificado no Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o certificado poderá ser utilizado em máquina com a versão MACOS, porém será necessário seguir alguns critérios. Modelo A1 – Deverá ser instalado através do arquivo .pfx, ou seja, será necessário emitir em uma máquina versão Windows e o arquivo salvo ser enviado para a máquina que deseja instalação. Modelo A3 – O cartão ou token, não são reconhecidos em todas as versões, sendo compatível apenas com algumas como: Catalina 10.15.7, Big Sur 11.7 e Monterey 12.3. Porém, não garantimos o correto funcionamento do Certificado Digital nos Sistemas Operacional MAC. Sendo recomendado apenas o modelo A1.",
      },
    },
    {
      "@type": "Question",
      name: "Posso fazer a videoconferência pelo meu celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, a validação por videoconferência poderá ser realizada pelo celular, computador ou tablet, desde que os mesmos tenham câmera e áudio ativos. O link e código de acesso são enviados por e-mail, então lembre-se de ativar o seu e-mail no celular.",
      },
    },
    {
      "@type": "Question",
      name: "Esqueci minha senha de instalação como posso recuperar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Se o certificado digital não foi instalado ainda, é possível alterar a sua senha de instalação, basta acessar o link de recuperação e será enviado o link de recuperação para o e-mail cadastrado no certificado digital no momento da emissão. Link de recuperação: https://revogacao.acredeideia.com.br/#/auth/enviarRecuperacao",
      },
    },
    {
      "@type": "Question",
      name: "Não tenho CNH, posso fazer a validação por videoconferência?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A validação por videoconferência só poderá ser realizada se o titular possuir CNH ou cadastro biométrico no PS Bio (quando já realizou um atendimento presencial em qualquer certificadora). Caso não atenda um dos critérios o atendimento precisará ser presencial. Para validar se podes emitir por videoconferência volte em nossa tela inicial e ao escolher a opção por videoconferência, o sistema fará uma consulta em ambos bancos de dados, confirmando se poderá ocorrer ou não o atendimento neste formato.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo após o atendimento posso instalar meu certificado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Durante o atendimento o agente de registro irá lhe informar o prazo de liberação, que poder ser de imediato ao final do atendimento ou então, de até 2 horas úteis.",
      },
    },
    {
      "@type": "Question",
      name: "Comprei um modelo A3 por vídeo, preciso estar com a mídia conectada no momento do atendimento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não será necessário, primeiro será realizado o atendimento por videoconferência e posteriormente você receberá um e-mail com as instruções de instalação e neste momento de ativação, sim você deverá estar com sua mídia conectada.",
      },
    },
    {
      "@type": "Question",
      name: "Comprei o modelo errado e agora?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Neste caso, você deverá solicitar reembolso para o nosso financeiro, você pode utilizar o chat no canto inferior direito desta página ou ainda, por e-mail ao financeiro@redeideia.com.br. O Valor será reembolsado em até 48 horas, se pagamento em boleto ou pix será creditado diretamente na conta do titular, se o pagamento em cartão de crédito, o prazo de estorno vai depender da bandeira e data de fechamento da fatura do titular da compra.",
      },
    },
    {
      "@type": "Question",
      name: "Minha empresa está inapta na Receita, posso emitir certificado Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, você pode emitir o certificado digital modelo PJ NF-e A1 12 meses (empresas INAPTAS e BAIXADAS), que lhe possibilitará a geração das guias necessárias no e-CAC para a realização da empresa.",
      },
    },
    {
      "@type": "Question",
      name: "Como posso ver a validade do meu certificado digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para analisar a validade, você precisará estar com o certificado instalado em caso de A1 ou então, conectado em caso de A3.  Clique no menu iniciar do seu computador e digite: opções de internet;  Selecione a aba conteúdo e depois certificados;  Lá mostrará todos os seus certificados com suas validades!",
      },
    },
    {
      "@type": "Question",
      name: "Meu certificado digital tem validade jurídica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, a assinatura digital, com o uso do certificado digital, tem a mesma validade jurídica que a assinatura à caneta, não sendo necessário nenhum tipo de autenticação via cartório;",
      },
    },
  ],
};
