// Português (Brasil)
export default ({ k, fig, guide }) => ({
  code: 'pt', name: 'Português', locale: 'pt_BR', date: '10 de novembro de 2026',
  paths: { home: '/pt/', guides: '/pt/guias/', bye: '/pt/ate-logo/' },
  ui: {
    features: 'Recursos', privacy: 'Privacidade', guides: 'Guias', language: 'Idioma', skip: 'Pular para o conteúdo', nav: 'Principal',
    add: 'Adicionar ao Chrome — é grátis', soon: 'Em breve na Chrome Web Store', how: 'Veja como funciona',
    policy: 'Política de privacidade', tm: 'Google Chrome é uma marca registrada da Google LLC. O Lock My Profile não tem vínculo com o Google.',
    updated: 'Atualizado em', crumbsHome: 'Início', moreGuides: 'Mais guias',
    ctaText: 'Extensão gratuita: bloqueie seu perfil e os sites que você escolher com uma única senha.',
    notFound: 'Página não encontrada', notFoundText: 'Esta página não existe. Tente a página inicial ou um dos nossos guias.'
  },
  ids: { features: 'recursos', privacy: 'privacidade', how: 'como-funciona', guides: 'guias' },

  home: {
    title: 'Lock My Profile — Coloque senha no Chrome e nos sites que quiser',
    description: 'Extensão gratuita que bloqueia seu perfil do Chrome e os sites que você escolher com uma senha. Bloqueio automático, abas camufladas e registro de intrusos.',
    eyebrow: 'Extensão gratuita para o navegador',
    h1: 'Bloqueie seu navegador com <em>uma senha</em>',
    lead: 'O Lock My Profile coloca senha no seu perfil do Chrome e nos sites que você escolher, e pode disfarçar uma aba bloqueada de página inofensiva. Sem conta. Nada sai do seu dispositivo.',
    trust: ['Grátis', 'Sem conta', 'Funciona off-line', '6 idiomas'],
    heroAlt: 'Tela de bloqueio do Lock My Profile cobrindo o navegador',
    featuresTitle: 'Tudo o que você precisa para manter o navegador privado', featuresText: 'Para computadores compartilhados, o escritório ou qualquer pessoa que sente na sua cadeira enquanto você está fora.',
    features: [
      ['lock', 'Bloqueie o perfil inteiro', `Todas as abas abertas ficam escondidas atrás de uma tela de bloqueio até você digitar a senha. Bloqueie na hora com ${k('Ctrl+Shift+L')}.`],
      ['globe', 'Proteja só alguns sites', 'E-mail, conversas ou o banco pedem a senha mesmo com o navegador desbloqueado.'],
      ['clock', 'Bloqueio automático', 'Depois de alguns minutos parado, ao abrir o Chrome, quando o computador bloqueia ou quando a janela é minimizada.'],
      ['mask', 'Abas camufladas', 'Uma aba bloqueada pode parecer outro site ou ser trocada por uma página real e inofensiva.'],
      ['list', 'Registro de intrusos', 'Cada senha errada fica registrada com data e hora. Dá para exportar em CSV.'],
      ['shield', 'Proteção contra força bruta', 'Depois de 5 tentativas erradas (você pode mudar isso), começa uma espera que dobra a cada rodada, até 15 minutos.']
    ],
    camoTag: 'Abas camufladas', camoTitle: 'Saiu de perto? Só vão ver a Wikipédia.',
    camoText: 'Ao sair de uma aba protegida, ela é trocada por uma página inofensiva: a barra de endereço mostra o endereço real do outro site. Sua aba espera intacta numa janela minimizada, e uma pequena barra de senha na página traz ela de volta.',
    camoChecks: ['Escolha a página: Wikipédia, YouTube, Google, notícias e mais', 'Ou mantenha a aba e disfarce só o título e o ícone', `${k('Ctrl+Shift+U')} traz a aba real de volta`],
    camoAlt: 'Uma aba camuflada mostrando um site de receitas com a barra de senha do Lock My Profile',
    sitesTag: 'Sites protegidos', sitesTitle: 'Bloqueie só o que importa',
    sitesText: 'Adicione os sites que você quer manter privados. Eles pedem a senha toda vez que abrem, mesmo com o resto do navegador liberado.',
    sitesChecks: ['Subdomínios incluídos', 'Fica aberto pelo tempo que você escolher, de 5 minutos a 4 horas', 'Bloqueia de novo assim que você troca de aba'],
    sitesAlt: 'Um site protegido pedindo a senha', popupAlt: 'O pop-up do Lock My Profile',
    logTag: 'Registro de intrusos', logTitle: 'Descubra quem tentou entrar',
    logText: 'O Lock My Profile registra cada bloqueio, desbloqueio e tentativa falha, para você saber se alguém tentou abrir seu navegador enquanto você estava fora.',
    logChecks: ['Data e hora de cada tentativa', 'Exportação em CSV', 'Nota de segurança com dicas para reforçar sua configuração'],
    logAlt: 'O registro de segurança com tentativas de senha falhas',
    privacyTitle: 'Privado de verdade', privacyText: 'Sua senha e sua atividade ficam no seu dispositivo. Sempre.',
    privacy: [
      ['cloud', 'Sem conta, sem servidores', 'Não há cadastro e nada é enviado a lugar nenhum. Sem análise de dados, sem anúncios, sem rastreamento.'],
      ['key', 'Sua senha nunca é guardada', 'Só um hash PBKDF2-SHA256 com salt (600.000 iterações) fica salvo, no armazenamento local do navegador.'],
      ['info', 'Honesto sobre os limites', 'Ele protege o navegador de quem usa o seu computador. Para segurança total, use também a senha da sua conta no computador.']
    ],
    privacyLink: 'Ler a política de privacidade',
    howTitle: 'Pronto em menos de um minuto',
    steps: [['Adicione ao Chrome', 'Instale o Lock My Profile pela Chrome Web Store. É grátis.'], ['Crie sua senha', 'Adicione uma dica ou uma pergunta de recuperação para o caso de esquecer.'], ['Escolha o que bloquear', 'O perfil inteiro, alguns sites ou os dois, e quando ele deve bloquear sozinho.']],
    faqTitle: 'Perguntas frequentes', faq: [
      ['O Lock My Profile é grátis?', 'Sim. Você pode instalar e usar todos os recursos de graça.'],
      ['Ele envia meus dados para algum lugar?', 'Não. Ele não tem servidores nem conta. Suas configurações, o hash da sua senha e o registro de atividade ficam no armazenamento local do navegador.'],
      ['Alguém pode simplesmente desativar?', 'Enquanto o perfil está bloqueado, o Lock My Profile bloqueia as páginas internas do Chrome, inclusive a de extensões, então não dá para desativá-lo por ali. Ele foi feito para barrar quem usa o seu computador; alguém com controle total da máquina ainda conseguiria removê-lo, por isso combine com a senha da sua conta no computador para ter o máximo de segurança.'],
      ['E se eu esquecer a senha?', 'Use a dica ou a pergunta de recuperação na tela de bloqueio. Se não configurou nenhuma das duas, remova e reinstale a extensão: os dados dela são apagados e você começa do zero.'],
      ['Funciona em janelas anônimas?', 'Sim, se você permitir: em chrome://extensions, abra os detalhes do Lock My Profile e ative “Permitir no modo anônimo”.'],
      ['Em quais idiomas e computadores funciona?', 'No Google Chrome para Windows, macOS, Linux e ChromeOS, em português, inglês, espanhol, francês, alemão e italiano.']
    ],
    guidesTitle: 'Guias', guidesText: 'Respostas passo a passo para as dúvidas mais comuns.',
    finalTitle: 'Seu navegador, suas regras', finalText: 'Bloqueie seu perfil e os sites que você escolher em menos de um minuto.'
  },

  guides: [
    {
      slug: 'colocar-senha-no-chrome', tag: 'Chrome', title: 'Como colocar senha no Chrome',
      blurb: 'O Chrome não tem senha própria. Veja as duas formas de colocar uma e qual escolher.',
      seoTitle: 'Como colocar senha no Chrome (guia 2026) — Lock My Profile',
      description: 'O Chrome não tem senha própria. Veja as duas formas de colocar senha no Chrome, uma conta separada no computador ou uma extensão de bloqueio, e como configurar.',
      tldr: '<strong>Resposta rápida:</strong> o Chrome não pede senha ao abrir. O jeito mais rápido de colocar uma é usar uma extensão de bloqueio como o Lock My Profile; o mais seguro é cada pessoa ter a própria conta no computador. Muita gente usa os dois.',
      body: `
<h2>O Chrome tem opção de senha?</h2>
<p>Não para abrir o navegador. O Chrome permite criar vários <strong>perfis</strong> e fazer login com uma Conta do Google, mas nenhum deles pede senha quando alguém abre o Chrome no seu computador. Sair da Conta do Google também não resolve: suas abas abertas, o histórico e os sites em que você continua conectado ficam no computador.</p>

<h2>Opção 1: uma conta separada no computador</h2>
<p>Se várias pessoas usam o mesmo computador, o mais seguro é cada uma ter a própria conta no sistema. O Chrome mantém os dados de cada conta separados, e ninguém abre a sua sem a senha do computador.</p>
<ul>
  <li><strong>Windows:</strong> Configurações › Contas › Outros usuários › Adicionar conta.</li>
  <li><strong>macOS:</strong> Ajustes do Sistema › Usuários e Grupos › Adicionar Usuário.</li>
</ul>
<p>A desvantagem: todo mundo precisa trocar de conta, e isso não ajuda quando alguém usa o computador enquanto a sua sessão ainda está aberta.</p>

<h2>Opção 2: uma extensão de bloqueio (a mais rápida)</h2>
<p>Uma extensão de bloqueio coloca uma tela de senha na frente do Chrome. Veja como fazer com o <strong>Lock My Profile</strong>, que é grátis e guarda tudo no seu dispositivo:</p>
<ol>
  <li>Instale o Lock My Profile pela Chrome Web Store e clique no ícone dele na barra de ferramentas.</li>
  <li>Crie sua senha. Adicione uma <strong>dica</strong> ou uma <strong>pergunta de recuperação</strong> para o caso de esquecer.</li>
  <li>Clique em <strong>Bloquear agora</strong> ou pressione ${k('Ctrl+Shift+L')}. Todas as abas ficam cobertas até você digitar a senha.</li>
  <li>Em <strong>Automação</strong>, ative <strong>Ao iniciar o Chrome</strong> para que a senha seja pedida toda vez que o Chrome abrir, e escolha um tempo em <strong>Bloquear após inatividade</strong>.</li>
  <li>Em <strong>Segurança</strong>, deixe <strong>Bloquear páginas internas</strong> ativado, para que ninguém consiga desativar a extensão pela página de extensões enquanto ela está bloqueada.</li>
</ol>
${fig('lock', 'A tela de bloqueio do Lock My Profile', 1280, 800, true, 'A tela de bloqueio cobre todas as abas até você digitar a senha.')}

<h2>Quer proteger só alguns sites?</h2>
<p>Você não precisa bloquear o navegador inteiro. Em <strong>Sites protegidos</strong>, adicione os sites que quer manter privados, como seu e-mail ou o banco, e eles vão pedir a senha mesmo com o resto do Chrome liberado. Veja <a href="${guide(1)}">como colocar senha no WhatsApp Web</a> para um exemplo passo a passo.</p>

<h2>Dicas para uma configuração segura</h2>
<ul>
  <li>Use uma senha que você não usa em nenhum outro lugar.</li>
  <li>Num computador compartilhado, desative <strong>Mostrar a dica na tela de bloqueio</strong>, para que ninguém adivinhe a senha por ela.</li>
  <li>Confira o <strong>Registro</strong> de vez em quando: ele lista cada tentativa falha com data e hora.</li>
</ul>
<div class="note"><p>Uma extensão de bloqueio protege o navegador de quem usa o seu computador. Ela não substitui a senha da sua conta no computador nem a criptografia do disco; para ter o máximo de segurança, use as duas coisas.</p></div>`
    },
    {
      slug: 'colocar-senha-no-whatsapp-web', tag: 'WhatsApp Web', title: 'Como colocar senha no WhatsApp Web',
      blurb: 'Mantenha suas conversas privadas num computador compartilhado sem precisar desconectar toda vez.',
      seoTitle: 'Como colocar senha no WhatsApp Web no PC — Lock My Profile',
      description: 'Coloque senha no WhatsApp Web e bloqueie a aba no PC compartilhado sem desconectar. Guia passo a passo, com opção de esconder que o WhatsApp está aberto.',
      tldr: '<strong>Resposta rápida:</strong> adicione <code>web.whatsapp.com</code> como site protegido no Lock My Profile. O WhatsApp Web vai pedir sua senha toda vez que abrir e bloquear de novo quando você trocar de aba, sem desconectar sua conta.',
      body: `
<h2>Por que bloquear o WhatsApp Web?</h2>
<p>O WhatsApp Web fica conectado por semanas. Num computador compartilhado ou do trabalho, qualquer pessoa que abrir a aba pode ler suas conversas. Desconectar toda vez funciona, mas aí você precisa escanear o QR code de novo e de novo.</p>
<p>O próprio WhatsApp Web tem um bloqueio de tela básico nas configurações de privacidade. Ele só cobre o WhatsApp; o método abaixo funciona igual para o WhatsApp e para qualquer outro site, e ainda bloqueia de novo sozinho, camufla a aba e registra as tentativas falhas.</p>

<h2>Passo a passo</h2>
<ol>
  <li>Instale o <strong>Lock My Profile</strong> e crie sua senha.</li>
  <li>Abra as configurações dele (o ícone de engrenagem no pop-up) e vá em <strong>Sites protegidos</strong>.</li>
  <li>Digite <code>web.whatsapp.com</code> e clique em <strong>Proteger site</strong>.</li>
  <li>Em <strong>Pedir de novo após</strong>, escolha por quanto tempo o WhatsApp fica aberto depois de desbloqueado, de 5 minutos a 4 horas.</li>
  <li>Deixe <strong>Bloquear ao trocar de aba</strong> ativado: assim que você vai para outra aba, o WhatsApp bloqueia de novo.</li>
</ol>
${fig('site-locked', 'Um site protegido pedindo a senha', 1200, 760, true, 'Um site protegido pede a senha antes de mostrar qualquer coisa.')}

<h2>Esconda até que o WhatsApp está aberto</h2>
<p>Ative <strong>Camuflar abas protegidas</strong> e escolha <strong>Outro site (endereço real)</strong>. Quando você sai da aba do WhatsApp, ela é trocada por uma página inofensiva, como a Wikipédia, e a barra de endereço mostra o endereço real desse site. Sua aba do WhatsApp espera numa janela minimizada; uma pequena barra de senha na página, ou ${k('Ctrl+Shift+U')}, traz ela de volta.</p>
${fig('decoy', 'Uma aba camuflada com a barra de senha', 1200, 760, false, 'A aba camuflada mostra outro site, com a barra de senha no canto inferior direito.')}

<h2>Acha que alguém já leu suas conversas?</h2>
<ul>
  <li>Abra o <strong>Registro</strong> no Lock My Profile para ver as tentativas de senha falhas, com data e hora.</li>
  <li>No celular, abra o WhatsApp › <strong>Dispositivos conectados</strong> e desconecte qualquer computador que você não reconheça.</li>
</ul>`
    },
    {
      slug: 'bloquear-perfil-do-chrome', tag: 'Perfis', title: 'Como bloquear o perfil do Chrome com senha',
      blurb: 'Coloque senha em um perfil para que quem divide o computador com você não consiga abri-lo.',
      seoTitle: 'Como bloquear o perfil do Chrome com senha — Lock My Profile',
      description: 'Perfis do Chrome não têm senha. Veja como colocar senha no perfil do Chrome para ninguém abrir, o que cada perfil protege e quais limites é bom conhecer.',
      tldr: '<strong>Resposta rápida:</strong> os perfis do Chrome não têm senha, mas você pode colocar uma instalando o Lock My Profile <strong>dentro do perfil que quer proteger</strong> e ativando o bloqueio ao iniciar o Chrome.',
      body: `
<h2>O que é um perfil do Chrome (e por que ele não tem senha)</h2>
<p>Um perfil é um conjunto separado de favoritos, histórico, senhas, abas abertas e extensões. Qualquer pessoa que usa o computador pode trocar de perfil pelo ícone de perfil, porque o Chrome trata os perfis como uma comodidade, não como segurança.</p>

<h2>Como bloquear um perfil</h2>
<p>As extensões são instaladas por perfil. Isso facilita bloquear só o perfil que importa para você:</p>
<ol>
  <li>Abra o Chrome no perfil que você quer proteger.</li>
  <li>Instale o <strong>Lock My Profile</strong> nesse perfil e crie sua senha.</li>
  <li>Em <strong>Automação</strong>, ative <strong>Ao iniciar o Chrome</strong> e escolha um tempo em <strong>Bloquear após inatividade</strong>.</li>
  <li>Em <strong>Segurança</strong>, deixe <strong>Bloquear páginas internas</strong> ativado, para que a extensão não possa ser desativada pela página de extensões enquanto o perfil está bloqueado.</li>
  <li>Para bloquear outros perfis também, repita os passos em cada um. Cada perfil pode ter a própria senha.</li>
</ol>
${fig('opt-automation', 'Configurações de automação do Lock My Profile', 1200, 780, false, 'Escolha quando o perfil bloqueia sozinho.')}

<h2>O que ele protege e quais são os limites</h2>
<p>Com o perfil bloqueado, as abas, o histórico, as sessões salvas e os sites em que você está conectado ficam escondidos atrás da tela de bloqueio. Leve em conta:</p>
<ul>
  <li>Alguém ainda pode abrir uma janela de <strong>Visitante</strong> ou criar um perfil novo. Ali a pessoa não vê nenhum dado seu, mas consegue navegar.</li>
  <li>Se quiser impedir isso também, dê a cada pessoa a própria conta no computador. Em computadores gerenciados por uma empresa ou escola, um administrador pode desativar o modo visitante e a criação de perfis com as políticas do Chrome.</li>
  <li>Uma extensão de bloqueio protege contra quem usa o seu computador. Ela não substitui a senha da sua conta no computador nem a criptografia do disco.</li>
</ul>

<h2>Ou bloqueie só alguns sites</h2>
<p>Se não quiser bloquear o perfil inteiro, proteja só alguns sites, como seu e-mail ou o <a href="${guide(1)}">WhatsApp Web</a>. Eles vão pedir a senha enquanto o resto do perfil funciona normalmente.</p>`
    }
  ],

  bye: {
    title: 'O Lock My Profile foi removido', h1: 'O Lock My Profile foi removido',
    lead: 'Os dados dele foram apagados do seu navegador: a senha, as configurações e o registro não existem mais.',
    ask: 'Pode contar para a gente por quê? Leva 30 segundos e ajuda a melhorar a extensão.', askBtn: 'Contar o motivo',
    helpTitle: 'Se algo deu errado', help: [
      ['Esqueceu a senha?', 'Ao reinstalar, você começa do zero. Da próxima vez, adicione uma dica ou uma pergunta de recuperação ao criar a senha.'],
      ['Bloqueava demais?', 'Nas configurações você pode desativar o bloqueio ao iniciar o Chrome ou ao trocar de aba, e escolher um tempo maior para o bloqueio automático.'],
      ['Não sabia como usar?', `Nossos <a href="${guide(0)}">guias passo a passo</a> explicam os principais usos.`]
    ],
    again: 'Mudou de ideia?'
  }
});
