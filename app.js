/* ============================================================
   BASE DE CRITÉRIOS (resumos próprios dos critérios do DSM-5)
   pag = página do DSM-5 (Artmed, 2014) onde estão os critérios
   Bloco: min = nº mínimo de itens; "todos" = todos os itens;
          umDe = índices dos quais ao menos um precisa estar marcado
   logica: "todos" (todos os blocos) ou "algum" (basta um bloco)
   ============================================================ */
const HIP = [
{ id:"tdm", nome:"Transtorno depressivo maior", grupo:"Humor", pag:"160–161",
  blocos:[{t:"A. Sintomas no mesmo período de 2 semanas", min:5, umDe:[0,1], itens:[
    "Humor deprimido na maior parte do dia, quase todos os dias (relato ou observação)",
    "Perda acentuada de interesse ou prazer em quase todas as atividades",
    "Alteração importante de peso ou de apetite, sem dieta",
    "Insônia ou sono excessivo quase todos os dias",
    "Agitação ou lentificação psicomotora perceptível por outras pessoas",
    "Fadiga ou perda de energia quase todos os dias",
    "Sentimento de inutilidade ou culpa excessiva ou inadequada",
    "Dificuldade de pensar, de se concentrar ou indecisão",
    {t:"Pensamentos recorrentes de morte, ideação suicida, plano ou tentativa", risco:true}
  ]}],
  req:["Sintomas causam sofrimento significativo ou prejuízo no funcionamento",
       "Não se devem a substância ou a outra condição médica",
       "Não são mais bem explicados por transtorno do espectro da esquizofrenia",
       "Nunca houve episódio maníaco ou hipomaníaco"]},

{ id:"dist", nome:"Transtorno depressivo persistente (distimia)", grupo:"Humor", pag:"168",
  blocos:[
   {t:"A. Humor deprimido", min:"todos", itens:["Humor deprimido na maior parte do dia, na maioria dos dias, por pelo menos 2 anos"]},
   {t:"B. Presença de dois ou mais", min:2, itens:[
    "Apetite diminuído ou excessivo","Insônia ou sono excessivo","Baixa energia ou fadiga",
    "Baixa autoestima","Concentração fraca ou dificuldade para decidir","Sentimentos de desesperança"]}],
  req:["Nesses 2 anos, nunca ficou mais de 2 meses seguidos sem os sintomas",
       "Nunca houve episódio maníaco ou hipomaníaco",
       "Não se deve a substância ou condição médica",
       "Causa sofrimento significativo ou prejuízo"]},

{ id:"bp1", nome:"Transtorno bipolar tipo I (episódio maníaco)", grupo:"Humor", pag:"123–124",
  flags:[{id:"irrit", t:"O humor é apenas irritável (nesse caso são exigidos 4 itens no bloco B)"}],
  blocos:[
   {t:"A. Período distinto", min:"todos", itens:["Humor anormalmente elevado, expansivo ou irritável, com aumento de energia ou atividade, por pelo menos 1 semana, quase todo o dia (ou qualquer duração se houve internação)"]},
   {t:"B. Durante o período", min:ctx=>ctx.flags.irrit?4:3, itens:[
    "Autoestima inflada ou grandiosidade","Menor necessidade de sono (descansado com poucas horas)",
    "Mais falante que o habitual ou pressão para continuar falando","Fuga de ideias ou pensamentos acelerados",
    "Distratibilidade","Aumento de atividade dirigida a objetivos ou agitação psicomotora",
    "Envolvimento excessivo em atividades de risco (gastos, sexo, negócios impulsivos)"]}],
  req:["Prejuízo acentuado no funcionamento, OU necessidade de internação, OU sintomas psicóticos",
       "Não se deve a substância ou condição médica"]},

{ id:"bp2", nome:"Transtorno bipolar tipo II (hipomania + depressão)", grupo:"Humor", pag:"132–134",
  flags:[{id:"irrit", t:"O humor é apenas irritável (nesse caso são exigidos 4 itens no bloco B)"}],
  blocos:[
   {t:"A. Período distinto", min:"todos", itens:["Humor elevado, expansivo ou irritável, com aumento de energia, por pelo menos 4 dias consecutivos"]},
   {t:"B. Durante o período", min:ctx=>ctx.flags.irrit?4:3, itens:[
    "Autoestima inflada ou grandiosidade","Menor necessidade de sono",
    "Mais falante que o habitual","Fuga de ideias ou pensamentos acelerados",
    "Distratibilidade","Aumento de atividade dirigida a objetivos ou agitação",
    "Envolvimento excessivo em atividades de risco"]}],
  req:["Pelo menos um episódio depressivo maior atual ou passado",
       "Nunca houve episódio maníaco completo",
       "A mudança foi percebida por outras pessoas, sem prejuízo acentuado nem internação",
       "Não se deve a substância ou condição médica"]},

{ id:"tag", nome:"Transtorno de ansiedade generalizada", grupo:"Ansiedade", pag:"222",
  blocos:[
   {t:"A–B. Preocupação", min:"todos", itens:[
    "Ansiedade e preocupação excessivas sobre vários assuntos, na maioria dos dias, por pelo menos 6 meses",
    "Dificuldade de controlar a preocupação"]},
   {t:"C. Três ou mais sintomas", min:3, itens:[
    "Inquietação ou sensação de estar com os nervos à flor da pele","Cansa-se com facilidade",
    "Dificuldade de concentração ou 'branco' na mente","Irritabilidade","Tensão muscular",
    "Perturbação do sono"]}],
  req:["Causa sofrimento significativo ou prejuízo","Não se deve a substância ou condição médica",
       "Não é mais bem explicado por outro transtorno mental"]},

{ id:"pan", nome:"Transtorno de pânico", grupo:"Ansiedade", pag:"208",
  blocos:[
   {t:"A. Ataques", min:"todos", itens:["Ataques de pânico recorrentes e inesperados (surto súbito de medo intenso que atinge o pico em minutos)"]},
   {t:"Sintomas no ataque (quatro ou mais)", min:4, itens:[
    "Palpitações ou coração acelerado","Sudorese","Tremores","Falta de ar ou sufocamento",
    "Sensação de asfixia","Dor ou desconforto no peito","Náusea ou desconforto abdominal",
    "Tontura, instabilidade ou sensação de desmaio","Calafrios ou ondas de calor",
    "Formigamento ou dormência","Desrealização ou despersonalização",
    "Medo de perder o controle ou enlouquecer","Medo de morrer"]}],
  req:["Por 1 mês ou mais após um ataque: preocupação persistente com novos ataques OU mudança de comportamento para evitá-los",
       "Não se deve a substância ou condição médica",
       "Não é mais bem explicado por outro transtorno mental"]},

{ id:"soc", nome:"Transtorno de ansiedade social", grupo:"Ansiedade", pag:"202",
  blocos:[{t:"Núcleo do quadro", min:"todos", itens:[
    "Medo ou ansiedade acentuados em situações sociais com possível avaliação por outros",
    "Medo de agir de modo a ser avaliado negativamente (humilhação, rejeição)",
    "As situações sociais quase sempre provocam medo ou ansiedade",
    "As situações são evitadas ou suportadas com intenso sofrimento",
    "O medo é desproporcional à ameaça real e ao contexto"]}],
  req:["Duração de 6 meses ou mais","Causa sofrimento significativo ou prejuízo",
       "Não se deve a substância, condição médica ou outro transtorno mental"]},

{ id:"toc", nome:"Transtorno obsessivo-compulsivo", grupo:"Obsessivo-compulsivo", pag:"237",
  blocos:[{t:"A. Obsessões, compulsões ou ambas", min:1, itens:[
    "Obsessões: pensamentos, impulsos ou imagens intrusivos e indesejados, que causam ansiedade e que a pessoa tenta ignorar ou neutralizar",
    "Compulsões: comportamentos ou atos mentais repetitivos feitos para reduzir a ansiedade ou evitar algo temido"]}],
  req:["Consomem tempo (mais de 1 hora por dia) ou causam sofrimento ou prejuízo",
       "Não se devem a substância ou condição médica",
       "Não são mais bem explicados por outro transtorno mental"]},

{ id:"tept", nome:"Transtorno de estresse pós-traumático", grupo:"Trauma e estressores", pag:"271–272",
  blocos:[
   {t:"A. Exposição", min:"todos", itens:["Exposição a morte, ameaça de morte, lesão grave ou violência sexual (vivida, testemunhada, ocorrida com pessoa próxima ou por exposição repetida a detalhes)"]},
   {t:"B. Intrusão (um ou mais)", min:1, itens:[
    "Lembranças intrusivas e angustiantes","Sonhos angustiantes recorrentes",
    "Reações dissociativas, como flashbacks","Sofrimento intenso diante de lembretes",
    "Reações físicas intensas diante de lembretes"]},
   {t:"C. Evitação (um ou mais)", min:1, itens:[
    "Evita lembranças, pensamentos ou sentimentos ligados ao evento",
    "Evita pessoas, lugares ou situações que lembram o evento"]},
   {t:"D. Cognição e humor negativos (dois ou mais)", min:2, itens:[
    "Não consegue lembrar aspecto importante do evento","Crenças negativas persistentes sobre si, os outros ou o mundo",
    "Culpa distorcida de si ou dos outros pelo evento","Estado emocional negativo persistente (medo, raiva, culpa, vergonha)",
    "Interesse muito diminuído em atividades","Sensação de distanciamento dos outros",
    "Incapacidade persistente de sentir emoções positivas"]},
   {t:"E. Excitação e reatividade (dois ou mais)", min:2, itens:[
    "Irritabilidade ou explosões de raiva","Comportamento imprudente ou autodestrutivo",
    "Hipervigilância","Sobressalto exagerado","Dificuldade de concentração","Perturbação do sono"]}],
  req:["Duração de mais de 1 mês","Causa sofrimento significativo ou prejuízo",
       "Não se deve a substância ou condição médica"]},

{ id:"tdah", nome:"TDAH (transtorno de déficit de atenção/hiperatividade)", grupo:"Neurodesenvolvimento", pag:"59–60",
  logica:"algum", nota:"Exige 6 sintomas em um dos blocos (5 a partir de 17 anos), por pelo menos 6 meses.",
  blocos:[
   {t:"1. Desatenção", min:ctx=>ctx.idade>=17?5:6, itens:[
    "Não presta atenção a detalhes ou comete erros por descuido","Dificuldade de manter a atenção em tarefas",
    "Parece não escutar quando falam diretamente","Não segue instruções até o fim e não termina tarefas",
    "Dificuldade para organizar tarefas e atividades","Evita tarefas que exigem esforço mental prolongado",
    "Perde objetos necessários","Distrai-se facilmente com estímulos externos","Esquece atividades do dia a dia"]},
   {t:"2. Hiperatividade e impulsividade", min:ctx=>ctx.idade>=17?5:6, itens:[
    "Remexe mãos ou pés, ou se contorce na cadeira","Levanta-se quando deveria ficar sentado",
    "Corre ou sobe em coisas (em adultos: sensação de inquietude)","Dificuldade de fazer lazer com calma",
    "Está sempre 'a mil', como se movido por um motor","Fala demais",
    "Responde antes de a pergunta terminar","Dificuldade de esperar a vez","Interrompe ou se intromete"]}],
  req:["Vários sintomas presentes antes dos 12 anos","Sintomas presentes em dois ou mais ambientes (casa, trabalho, escola)",
       "Interferem ou reduzem a qualidade do funcionamento","Não são mais bem explicados por outro transtorno mental"]},

{ id:"tea", nome:"Transtorno do espectro autista", grupo:"Neurodesenvolvimento", pag:"50–51",
  nota:"Se compatível, especificar o nível de suporte (1, 2 ou 3) para cada domínio.",
  blocos:[
   {t:"A. Comunicação e interação social (todos)", min:"todos", itens:[
    "Déficits na reciprocidade socioemocional","Déficits na comunicação não verbal usada na interação",
    "Déficits para desenvolver, manter e compreender relacionamentos"]},
   {t:"B. Padrões restritos e repetitivos (dois ou mais)", min:2, itens:[
    "Movimentos, fala ou uso de objetos estereotipados ou repetitivos","Insistência na mesmice, rotinas ou rituais rígidos",
    "Interesses fixos e restritos, de intensidade ou foco anormais","Hiper ou hiporreatividade a estímulos sensoriais"]}],
  req:["Sintomas presentes no início do desenvolvimento (podem ficar evidentes só mais tarde)",
       "Causam prejuízo significativo no funcionamento","Não são mais bem explicados por deficiência intelectual"]},

{ id:"bord", nome:"Transtorno da personalidade borderline", grupo:"Personalidade", pag:"663",
  blocos:[{t:"Cinco ou mais", min:5, itens:[
    "Esforços desesperados para evitar abandono real ou imaginado","Relações instáveis e intensas, entre idealização e desvalorização",
    "Perturbação da identidade: autoimagem instável","Impulsividade em pelo menos duas áreas potencialmente autodestrutivas",
    {t:"Comportamento, gestos ou ameaças suicidas recorrentes, ou automutilação", risco:true},
    "Instabilidade afetiva por forte reatividade do humor","Sentimento crônico de vazio",
    "Raiva intensa e inadequada ou dificuldade de controlá-la","Ideação paranoide transitória ou sintomas dissociativos sob estresse"]}],
  req:["Padrão difuso, presente em vários contextos","Início no começo da vida adulta"]},

{ id:"alc", nome:"Transtorno por uso de álcool", grupo:"Substâncias", pag:"490–491",
  nota:"A mesma estrutura serve de guia para outras substâncias (DSM-5, cap. Transtornos Relacionados a Substâncias).",
  grav:n=> n>=6?"grave": n>=4?"moderada": n>=2?"leve":"",
  blocos:[{t:"Dois ou mais em 12 meses", min:2, itens:[
    "Consome mais ou por mais tempo do que pretendia","Desejo persistente ou tentativas fracassadas de reduzir",
    "Muito tempo gasto para obter, usar ou se recuperar","Fissura (desejo forte de usar)",
    "Falha em obrigações no trabalho, escola ou casa","Continua apesar de problemas sociais causados pelo uso",
    "Abandona atividades importantes por causa do uso","Uso em situações de risco físico",
    "Continua apesar de problema físico ou psicológico agravado pelo uso","Tolerância","Abstinência"]}],
  req:["Padrão problemático que leva a sofrimento ou prejuízo clinicamente significativo"]},

{ id:"ins", nome:"Transtorno de insônia", grupo:"Sono", pag:"362",
  blocos:[{t:"A. Insatisfação com o sono, com um ou mais", min:1, itens:[
    "Dificuldade para iniciar o sono","Dificuldade para manter o sono (acorda e não volta a dormir)",
    "Despertar antes do horário, sem conseguir voltar a dormir"]}],
  req:["Causa sofrimento ou prejuízo","Ocorre pelo menos 3 noites por semana","Dura pelo menos 3 meses",
       "Ocorre mesmo com oportunidade adequada para dormir","Não é mais bem explicado por outro transtorno do sono, substância ou condição"]},

{ id:"ano", nome:"Anorexia nervosa", grupo:"Alimentar", pag:"338–339",
  blocos:[{t:"Núcleo do quadro", min:"todos", itens:[
    "Restrição da ingestão que leva a peso significativamente baixo","Medo intenso de ganhar peso ou comportamento persistente que impede o ganho",
    "Perturbação na percepção do peso ou da forma, ou não reconhece a gravidade do baixo peso"]}],
  req:[]},

{ id:"bul", nome:"Bulimia nervosa", grupo:"Alimentar", pag:"345",
  blocos:[{t:"Núcleo do quadro", min:"todos", itens:[
    "Episódios recorrentes de compulsão alimentar (grande quantidade em período delimitado, com perda de controle)",
    "Comportamentos compensatórios inadequados recorrentes (vômito, laxantes, jejum, exercício excessivo)",
    "Autoavaliação indevidamente influenciada pela forma e pelo peso"]}],
  req:["Compulsão e compensação ocorrem pelo menos 1 vez por semana há 3 meses","Não ocorre exclusivamente durante anorexia nervosa"]},

{ id:"tca", nome:"Transtorno de compulsão alimentar", grupo:"Alimentar", pag:"350",
  blocos:[
   {t:"A. Episódios", min:"todos", itens:["Episódios recorrentes de compulsão alimentar com sensação de perda de controle"]},
   {t:"B. Três ou mais", min:3, itens:[
    "Come muito mais rápido que o normal","Come até se sentir desconfortavelmente cheio",
    "Come grandes quantidades sem fome física","Come sozinho por vergonha da quantidade",
    "Sente nojo de si, depressão ou culpa depois"]}],
  req:["Sofrimento acentuado com a compulsão","Pelo menos 1 vez por semana há 3 meses",
       "Sem comportamento compensatório recorrente"]},

{ id:"adap", nome:"Transtorno de adaptação", grupo:"Trauma e estressores", pag:"286–287",
  blocos:[
   {t:"A. Resposta a estressor", min:"todos", itens:["Sintomas emocionais ou comportamentais em resposta a estressor identificável, surgidos até 3 meses depois dele"]},
   {t:"B. Significância clínica (um ou mais)", min:1, itens:[
    "Sofrimento desproporcional à intensidade do estressor","Prejuízo significativo no funcionamento"]}],
  req:["Não satisfaz critérios de outro transtorno mental","Não representa luto normal",
       "Os sintomas não persistem mais de 6 meses após o fim do estressor"]},

{ id:"som", nome:"Transtorno de sintomas somáticos", grupo:"Sintomas somáticos", pag:"311",
  blocos:[
   {t:"A. Sintoma", min:"todos", itens:["Um ou mais sintomas físicos que causam aflição ou perturbam a vida diária"]},
   {t:"B. Pensamentos, sentimentos ou comportamentos excessivos (um ou mais)", min:1, itens:[
    "Pensamentos desproporcionais e persistentes sobre a gravidade dos sintomas",
    "Ansiedade persistentemente elevada sobre a saúde ou os sintomas",
    "Tempo e energia excessivos dedicados aos sintomas ou à saúde"]}],
  req:["O estado sintomático persiste, em geral, por mais de 6 meses"]}
];

/* Perguntas de triagem: cada uma abre as hipóteses ligadas */
const TRIAGEM = [
 {id:"risco", q:"Há ideação suicida, plano, tentativa ou autolesão?", sub:"Sinal de alerta: avaliação de risco imediata", hip:[], risco:true},
 {id:"g1", q:"Tristeza persistente ou perda de prazer?", hip:["tdm","dist"]},
 {id:"g2", q:"Períodos de euforia, irritação ou energia muito acima do habitual?", hip:["bp1","bp2"]},
 {id:"g3", q:"Preocupação excessiva e difícil de controlar?", hip:["tag"]},
 {id:"g4", q:"Crises súbitas de medo intenso com sintomas físicos?", hip:["pan"]},
 {id:"g5", q:"Medo intenso de ser avaliado em situações sociais?", hip:["soc"]},
 {id:"g6", q:"Pensamentos intrusivos ou rituais repetitivos?", hip:["toc"]},
 {id:"g7", q:"Exposição a evento traumático com reações persistentes?", hip:["tept"]},
 {id:"g8", q:"Desatenção, agitação ou impulsividade desde a infância?", hip:["tdah"]},
 {id:"g9", q:"Dificuldades sociais com rotinas rígidas, interesses restritos ou questões sensoriais?", hip:["tea"]},
 {id:"g10", q:"Instabilidade em relações, emoções, autoimagem e impulsividade?", hip:["bord"]},
 {id:"g11", q:"Uso de álcool ou outra substância trazendo problemas?", hip:["alc"]},
 {id:"g12", q:"Dificuldade para dormir ou manter o sono?", hip:["ins"]},
 {id:"g13", q:"Preocupações com alimentação, peso ou imagem corporal?", hip:["ano","bul","tca"]},
 {id:"g14", q:"Estressor recente com sofrimento além do esperado?", hip:["adap"]},
 {id:"g15", q:"Preocupação intensa com sintomas físicos ou com a saúde?", hip:["som"]}
];

/* ============================================================
   Escala Transversal de Sintomas de Nível 1 Autoaplicável do DSM-5 – Adulto
   (DSM-5, p. 734–739; limiares na Tabela 1, p. 735).
   © American Psychiatric Association. A APA permite a reprodução por
   clínicos para uso com os próprios pacientes. Uso comercial exige permissão.
   ============================================================ */
const ESC_ITENS = [
 "Pouco interesse ou prazer em fazer as coisas?",
 "Sentiu-se desanimado, deprimido ou sem esperança?",
 "Sentiu-se mais irritado, mal-humorado ou zangado do que o usual?",
 "Dormiu menos do que o usual, mas ainda tem muita energia?",
 "Iniciou muito mais projetos do que o usual ou fez coisas mais arriscadas do que o habitual?",
 "Sentiu-se nervoso, ansioso, assustado, preocupado ou tenso?",
 "Sentiu pânico ou se sentiu amedrontado?",
 "Evitou situações que o deixam ansioso?",
 "Dores e sofrimentos sem explicação (p. ex., cabeça, costas, articulações, abdome, pernas)?",
 "Sentimento de que suas doenças não estão sendo levadas suficientemente a sério?",
 "Pensamentos de ferir a si mesmo?",
 "Ouviu coisas que outras pessoas não ouviam, como vozes, mesmo quando não havia ninguém por perto?",
 "Sentiu que alguém podia ouvir seus pensamentos ou que você podia ouvir o que outra pessoa estava pensando?",
 "Problemas com o sono que afetaram a qualidade do seu sono em geral?",
 "Problemas com a memória (p. ex., aprender informações novas) ou com localização (p. ex., encontrar o caminho para casa)?",
 "Pensamentos, impulsos ou imagens desagradáveis que entram repetidamente na sua cabeça?",
 "Sentiu-se compelido a realizar certos comportamentos ou atos mentais repetidamente?",
 "Sentiu-se desligado ou distante de si mesmo, do seu corpo, do ambiente físico ao seu redor ou de suas lembranças?",
 "Sem saber quem você realmente é ou o que você quer da vida?",
 "Não se sentiu próximo a outras pessoas ou desfrutou das suas relações com elas?",
 "Bebeu no mínimo 4 drinques de qualquer tipo de bebida alcoólica em um único dia?",
 "Fumou cigarros, charuto ou cachimbo ou usou rapé ou tabaco de mascar?",
 "Usou algum dos seguintes medicamentos POR CONTA PRÓPRIA, isto é, sem prescrição médica, em quantidades maiores ou por mais tempo do que o prescrito (p. ex., analgésicos [como paracetamol, codeína], estimulantes [como metilfenidato ou anfetaminas], sedativos ou tranquilizantes [como comprimidos para dormir ou diazepam] ou drogas, como maconha, cocaína ou crack, drogas sintéticas [como ecstasy], alucinógenos [como LSD], heroína, inalantes ou solventes [como cola] ou metanfetamina [ou outros estimulantes])?"
];
const ESC_OPC = [["0","Nada"],["1","Muito leve"],["2","Leve"],["3","Moderado"],["4","Grave"]];
/* itens = posições (a partir de 0); lim = nota mínima para investigar; abre = perguntas da triagem marcadas como "Talvez" */
const ESC_DOM = [
 {r:"I",    nome:"Depressão", itens:[0,1], lim:2, abre:["g1"]},
 {r:"II",   nome:"Raiva", itens:[2], lim:2, abre:[], nota:"Sem checklist neste programa: investigar na entrevista."},
 {r:"III",  nome:"Mania", itens:[3,4], lim:2, abre:["g2"]},
 {r:"IV",   nome:"Ansiedade", itens:[5,6,7], lim:2, abre:["g3","g4","g5"]},
 {r:"V",    nome:"Sintomas somáticos", itens:[8,9], lim:2, abre:["g15"]},
 {r:"VI",   nome:"Ideação suicida", itens:[10], lim:1, abre:["risco"]},
 {r:"VII",  nome:"Psicose", itens:[11,12], lim:1, abre:[], nota:"Investigar o espectro da esquizofrenia e outros transtornos psicóticos (DSM-5, p. 87)."},
 {r:"VIII", nome:"Distúrbio do sono", itens:[13], lim:2, abre:["g12"]},
 {r:"IX",   nome:"Memória", itens:[14], lim:2, abre:[], nota:"Investigar queixa cognitiva; ver transtornos neurocognitivos (DSM-5, p. 591)."},
 {r:"X",    nome:"Pensamentos e comportamentos repetitivos", itens:[15,16], lim:2, abre:["g6"]},
 {r:"XI",   nome:"Dissociação", itens:[17], lim:2, abre:[], nota:"Investigar; ver transtornos dissociativos (DSM-5, p. 291)."},
 {r:"XII",  nome:"Funcionamento da personalidade", itens:[18,19], lim:2, abre:["g10"]},
 {r:"XIII", nome:"Uso de substância", itens:[20,21,22], lim:1, abre:["g11"]}
];

/* ================= SEÇÕES DA HISTÓRIA CLÍNICA (campos opcionais) ================= */
const HIST = [
 {id:"desenv", t:"Histórico de desenvolvimento", campos:[
   ["gestacao","Gestação e parto","Intercorrências, prematuridade, complicações"],
   ["marcos","Marcos do desenvolvimento","Fala, marcha, controle esfincteriano, socialização"],
   ["escola","Vida escolar","Desempenho, dificuldades, repetências, relação com colegas"]]},
 {id:"saude", t:"Saúde física e medicações", campos:[
   ["medico","Histórico médico","Doenças, cirurgias, condições crônicas, alergias"],
   ["medicacoes","Medicações em uso","Nome, dose e quem prescreveu"]]},
 {id:"psiq", t:"Histórico psiquiátrico e familiar", campos:[
   ["psiqAnt","Tratamentos anteriores","Psicoterapia, psiquiatria, internações, diagnósticos prévios"],
   ["familiar","Histórico familiar","Transtornos mentais, uso de substâncias, suicídio na família"]]},
 {id:"habitos", t:"Hábitos e rotina", campos:[
   ["substancias","Uso de substâncias","Álcool, tabaco, outras drogas: frequência e quantidade"],
   ["sono","Sono","Horários, qualidade, despertares"],
   ["alimentacao","Alimentação","Apetite, padrão, mudanças de peso"],
   ["atividade","Atividade física e lazer",""]]},
 {id:"social", t:"Vida social e estressores", campos:[
   ["rede","Rede de apoio","Família, amigos, comunidade"],
   ["trabalho","Trabalho ou estudo",""],
   ["relacoes","Relacionamentos","Afetivos, familiares, conflitos"],
   ["estressores","Estressores e eventos traumáticos","Perdas, violência, mudanças recentes"]]}
];
const RISCO = [
 ["ideacao","Ideação suicida (atual ou recente)"],
 ["autolesao","Autolesão"],
 ["plano","Plano ou acesso a meios"],
 ["tentativas","Tentativas anteriores"]
];
const EEM = [
 ["aparencia","Aparência e comportamento","Cuidado pessoal, postura, contato visual, psicomotricidade"],
 ["humor","Humor e afeto","Humor relatado, afeto observado, congruência"],
 ["pensamento","Pensamento","Curso, forma e conteúdo"],
 ["percepcao","Sensopercepção","Alucinações, ilusões"],
 ["orientacao","Orientação, atenção e memória",""],
 ["insight","Insight e juízo crítico",""]
];
const ACOMP = [["relatado","Relatado pelo paciente"],["observado","Observado na sessão"],["exemplos","Exemplos concretos"],
 ["fortes","Pontos fortes"],["apoio","Estratégias de apoio"],["mudancas","Mudanças no acompanhamento"]];
const NOTAS = [["evidencias","Evidências, fontes e exemplos"],["faltantes","Informações faltantes"],
 ["alternativas","Hipóteses alternativas a considerar"],["perguntas","Perguntas para investigar"]];
const TRI_DET = [["inicio","Início e duração"],["frequencia","Frequência"],["situacoes","Situações e ambientes"],["impacto","Impacto na rotina"]];

/* ================= ESTADO ================= */
const hoje = () => new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);
const novoEstado = () => ({ etapa:0,
  pac:{ini:"",idade:"",data:hoje(),queixa:"",objetivos:"",contexto:"",obs:"",
       relatado:"",observado:"",exemplos:"",fortes:"",apoio:"",mudancas:""},
  hist:{}, risco:{}, eem:{},
  tri:{}, triDet:{}, marc:{}, aus:{}, req:{}, reqNao:{}, flags:{}, notas:{}, atual:null,
  esc:{}, auto:[], mexidas:[], salvoId:null });
let S = novoEstado();
/* completa registros antigos (Virlene ou versões anteriores) sem perder nada */
function normalizar(d){
  const b = novoEstado();
  const s = Object.assign(b, d||{});
  s.pac = Object.assign(novoEstado().pac, (d&&d.pac)||{});
  for(const k of ["hist","risco","eem","tri","triDet","marc","aus","req","reqNao","flags","notas","esc"])
    if(!s[k]||typeof s[k]!=="object"||Array.isArray(s[k])) s[k]={};
  /* campos com nomes do protótipo PSI */
  if(d&&d.triDetalhes&&typeof d.triDetalhes==="object") s.triDet = Object.assign({}, d.triDetalhes, s.triDet);
  if(d&&d.hipNotas&&typeof d.hipNotas==="object") s.notas = Object.assign({}, d.hipNotas, s.notas);
  delete s.triDetalhes; delete s.hipNotas; delete s.escResp; delete s.escRel; delete s.escHoras;
  for(const k of ["auto","mexidas"]) if(!Array.isArray(s[k])) s[k]=[];
  if(!(s.etapa>=0&&s.etapa<=4)) s.etapa=0;
  return s;
}
const ETAPAS = [["1","Paciente"],["2","Escala"],["3","Triagem"],["4","Critérios"],["5","Resultado"]];
const TELAS = [telaPaciente, telaEscala, telaTriagem, telaCriterios, telaResultado];
const emMoldura = (()=>{ try{ return window.self!==window.top; }catch(_){ return true; } })();

const txt = it => typeof it==="string"?it:it.t;
const ctxDe = h => ({ idade: Number(S.pac.idade)||0, flags: S.flags[h.id]||{} });
const minDe = (b,h) => b.min==="todos"? b.itens.length : (typeof b.min==="function"? b.min(ctxDe(h)) : b.min);

/* Presente = marcado; Ausente = marcado como ausente; sem marcação = sem informação (não é "não tem"). */
function avaliar(h){
  const m = S.marc[h.id]||{}, au = S.aus[h.id]||{};
  const blocos = h.blocos.map((b,bi)=>{
    const n = b.itens.filter((_,ii)=>m[bi+"_"+ii]).length;
    const ausN = b.itens.filter((_,ii)=>!m[bi+"_"+ii] && au[bi+"_"+ii]).length;
    const semInfo = b.itens.length - n - ausN;
    const min = minDe(b,h);
    const umDeOk = !b.umDe || b.umDe.some(ii=>m[bi+"_"+ii]);
    return {t:b.t, n, ausN, semInfo, total:b.itens.length, min, ok: n>=min && umDeOk, umDeOk, frac: Math.min(n,min)/min};
  });
  const nucleo = h.logica==="algum" ? blocos.some(b=>b.ok) : blocos.every(b=>b.ok);
  const fracN = h.logica==="algum" ? Math.max(...blocos.map(b=>b.frac)) : blocos.reduce((s,b)=>s+b.frac,0)/blocos.length;
  const r = S.req[h.id]||{}, rn = S.reqNao[h.id]||{};
  const reqOk = h.req.filter((_,i)=>r[i]).length;
  const fracR = h.req.length? reqOk/h.req.length : 1;
  const score = h.req.length? fracN*0.7 + fracR*0.3 : fracN;
  const naoAtende = h.req.filter((_,i)=>!r[i] && rn[i]);
  const faltam = h.req.filter((_,i)=>!r[i] && !rn[i]);
  let nivel, rot;
  if(nucleo && reqOk===h.req.length){nivel=3; rot="Compatível com os critérios";}
  else if(nucleo){nivel=2; rot= naoAtende.length? "Núcleo atendido · requisito não atendido" : "Núcleo atendido · faltam requisitos";}
  else if(score>=0.5){nivel=1; rot="Parcialmente compatível";}
  else {nivel=0; rot="Poucos indícios";}
  const presentes = blocos.reduce((s,b)=>s+b.n,0), totalItens = blocos.reduce((s,b)=>s+b.total,0);
  const semInfo = blocos.reduce((s,b)=>s+b.semInfo,0), ausentes = blocos.reduce((s,b)=>s+b.ausN,0);
  const risco = h.blocos.some((b,bi)=>b.itens.some((it,ii)=>it.risco && m[bi+"_"+ii]));
  const grav = h.grav && nucleo ? h.grav(blocos[0].n) : "";
  return {blocos,nucleo,score,nivel,rot,faltam,naoAtende,reqOk,risco,grav,presentes,totalItens,semInfo,ausentes};
}

const ativas = () => {
  const ids = new Set();
  TRIAGEM.forEach(g=>{ if(S.tri[g.id]==="sim"||S.tri[g.id]==="talvez") g.hip.forEach(i=>ids.add(i)); });
  return HIP.filter(h=>ids.has(h.id));
};
const riscoMarcado = () => RISCO.some(([k])=>S.risco[k]==="sim");
const temRisco = () => riscoMarcado() || S.tri.risco==="sim"||S.tri.risco==="talvez"|| S.esc[10]>=1 || ativas().some(h=>avaliar(h).risco);

/* ================= ESCALA: CÁLCULO ================= */
function avaliarEscala(){
  const dom = ESC_DOM.map(d=>{
    const vals = d.itens.map(i=>S.esc[i]).filter(v=>Number.isInteger(v));
    const falta = d.itens.filter(i=>!Number.isInteger(S.esc[i])).map(i=>i+1);
    const maior = vals.length? Math.max(...vals) : null;
    const acima = maior!==null && maior>=d.lim;
    const inconclusivo = !acima && falta.length>0 && maior!==null;
    return {...d, maior, acima, falta, inconclusivo};
  });
  const faltam = ESC_ITENS.map((_,i)=>i).filter(i=>!Number.isInteger(S.esc[i])).map(i=>i+1);
  return {dom, respondidas: ESC_ITENS.length-faltam.length, faltam};
}
function aplicarEscala(){
  const indicadas = new Set(avaliarEscala().dom.filter(d=>d.acima).flatMap(d=>d.abre));
  S.auto = S.auto.filter(g=>{
    if(indicadas.has(g)) return true;
    if(S.tri[g]==="talvez") delete S.tri[g];
    return false;
  });
  indicadas.forEach(g=>{
    if(S.tri[g]===undefined && !S.mexidas.includes(g)){ S.tri[g]="talvez"; if(!S.auto.includes(g)) S.auto.push(g); }
  });
}
function indicacoesEscala(){
  const m = {};
  avaliarEscala().dom.filter(d=>d.acima).forEach(d=>d.abre.forEach(g=>(m[g] ||= []).push(d.nome)));
  return m;
}

/* ================= ARQUIVO LOCAL (nada sai deste aparelho) ================= */
const $ = s => document.querySelector(s);
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CHAVE_RASCUNHO = "anamnese-psi-rascunho";
const CHAVE_SALVAS = "anamnese-psi-salvas";
const CHAVE_VIRLENE = "virlene-salvas"; /* somente leitura */
const clonar = x => JSON.parse(JSON.stringify(x));
const novoId = () => "a"+Date.now().toString(36)+Math.random().toString(36).slice(2,8);

function gravarRascunho(){
  try{ localStorage.setItem(CHAVE_RASCUNHO, JSON.stringify(S)); }
  catch(_){ statusArq("Não foi possível guardar o rascunho neste aparelho."); }
}
function restaurarRascunho(){
  try{ const t = localStorage.getItem(CHAVE_RASCUNHO); if(!t) return;
    const d = JSON.parse(t); if(d && d.pac) S = normalizar(d); }catch(_){}
}
function listaSalvas(){
  try{ const a = JSON.parse(localStorage.getItem(CHAVE_SALVAS)||"[]"); return Array.isArray(a)?a:[]; }
  catch(_){ return []; }
}
function gravarLista(a){ localStorage.setItem(CHAVE_SALVAS, JSON.stringify(a)); }
function rotuloData(iso){
  if(!iso) return "—";
  const p = String(iso).split("-");
  return p.length===3 ? p[2]+"/"+p[1]+"/"+p[0] : iso;
}
function rotuloHora(iso){
  try{ return new Date(iso).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}); }
  catch(_){ return iso||"—"; }
}
const algum = o => Object.values(o||{}).some(v=> v && (typeof v!=="object" || algum(v)));
function temConteudo(s){
  const p = s.pac||{};
  return !!(["ini","idade","queixa","objetivos","contexto","obs","relatado","observado","exemplos","fortes","apoio","mudancas"].some(k=>p[k])
    || Object.keys(s.esc||{}).length || Object.keys(s.tri||{}).length || algum(s.marc) || algum(s.aus)
    || algum(s.hist) || algum(s.risco) || algum(s.eem) || algum(s.triDet) || algum(s.notas));
}
/* conteúdo comparável (ignora em que tela a psicóloga está) */
const assinatura = s => { const c = clonar(s); delete c.etapa; delete c.atual; delete c.salvoId; delete c._abertos; return JSON.stringify(c); };
function rascunhoAlterado(){
  if(!temConteudo(S)) return false;
  const it = S.salvoId && listaSalvas().find(x=>x.id===S.salvoId);
  return !it || assinatura(normalizar(it.estado))!==assinatura(S);
}
function statusArq(msg){
  const el = $("#statusArq"); if(!el) return;
  el.textContent = msg;
  el.classList.toggle("hidden", !msg);
  if(msg) setTimeout(()=>{ if(el.textContent===msg){ el.textContent=""; el.classList.add("hidden"); } }, 3000);
}
function salvarAnamnese(){
  try{
    const lista = listaSalvas();
    const antigo = S.salvoId && lista.find(x=>x.id===S.salvoId);
    if(antigo && !confirm("Atualizar esta anamnese salva?\nA versão anterior fica guardada no histórico.")) return;
    const historico = antigo ? [...(Array.isArray(antigo.historico)?antigo.historico:[]), {salvoEm:antigo.salvoEm, estado:clonar(antigo.estado)}] : [];
    if(!S.salvoId || !antigo) S.salvoId = S.salvoId || novoId();
    const item = { id:S.salvoId, ini:(S.pac.ini||"").trim()||"(sem iniciais)", data:S.pac.data||"",
      queixa:(S.pac.queixa||"").trim(), salvoEm:new Date().toISOString(), estado:clonar(S), historico };
    gravarLista([item, ...lista.filter(x=>x.id!==item.id)]);
    gravarRascunho(); desenharLista();
    if(S.etapa===4) render2();
    statusArq(antigo? "Atualizada. A versão anterior foi guardada." : "Salva neste aparelho.");
  }catch(_){ statusArq("Não foi possível salvar neste aparelho. Verifique o espaço do navegador."); }
}
function abrirSalva(id){
  const item = listaSalvas().find(x=>x.id===id);
  if(!item || !item.estado) return;
  if(S.salvoId!==id && rascunhoAlterado() && !confirm("Abrir esta anamnese vai substituir o rascunho atual, que não está salvo.\nContinuar?")) return;
  S = normalizar(clonar(item.estado));
  S.salvoId = item.id; S.etapa = 4;
  gravarRascunho(); render();
  const rel = $("#rel"); if(rel) rel.closest(".card").scrollIntoView({block:"start"});
}
function apagarSalva(id){
  const item = listaSalvas().find(x=>x.id===id);
  const nome = item? item.ini+" ("+rotuloData(item.data)+")" : "esta anamnese";
  if(!confirm("Apagar a anamnese de "+nome+" e as versões anteriores dela?\nEsta ação não pode ser desfeita.")) return;
  gravarLista(listaSalvas().filter(x=>x.id!==id));
  if(S.salvoId===id) S.salvoId = null;
  gravarRascunho(); desenharLista();
  if(S.etapa===4) render2();
}
function novaAnamnese(){
  if(rascunhoAlterado() && !confirm("Começar uma anamnese em branco?\nO que não tiver sido salvo na lista será perdido.")) return;
  S = novoEstado(); gravarRascunho(); render();
}
/* Copia as anamneses salvas no app da Virlene (mesmo endereço). Os originais não são alterados. */
function importarVirlene(){
  let orig;
  try{ orig = JSON.parse(localStorage.getItem(CHAVE_VIRLENE)||"[]"); }catch(_){ orig = null; }
  if(!Array.isArray(orig) || !orig.length){ alert("Não há anamneses do Virlene salvas neste aparelho e navegador."); return; }
  const lista = listaSalvas();
  const ja = new Set(lista.map(x=>x.origemVirlene).filter(Boolean));
  const novas = orig.filter(x=>x && x.id && x.estado && !ja.has(x.id));
  if(!novas.length){ alert("As "+orig.length+" anamneses do Virlene já foram importadas."); return; }
  if(!confirm("Copiar "+novas.length+" anamnese(s) do Virlene para esta lista?\nAs originais continuam no Virlene, sem alteração.")) return;
  try{
    const copias = novas.map(x=>{
      const id = "v"+novoId(), estado = normalizar(clonar(x.estado));
      estado.salvoId = id; estado.etapa = 4;
      return { id, ini:x.ini||"(sem iniciais)", data:x.data||"", queixa:x.queixa||"", salvoEm:x.salvoEm||new Date().toISOString(),
        estado, historico:[], origemVirlene:x.id };
    });
    gravarLista([...lista, ...copias]);
    desenharLista();
    statusArq(copias.length+" anamnese(s) importada(s) do Virlene.");
  }catch(_){ statusArq("Não foi possível importar. Verifique o espaço do navegador."); }
}
function desenharLista(){
  const box = $("#listaSalvas"); if(!box) return;
  const lista = listaSalvas();
  if(!lista.length){
    box.innerHTML = '<p class="hint" style="margin:0">Nenhuma anamnese na lista ainda. Toque em Salvar para guardar esta neste aparelho.</p>';
    return;
  }
  box.innerHTML = lista.map(it=>{
    const q = it.queixa||"";
    const extra = q ? " · "+esc(q.slice(0,60))+(q.length>60?"…":"") : "";
    const nv = Array.isArray(it.historico)&&it.historico.length ? ` · ${it.historico.length} versão(ões) anterior(es)` : "";
    const org = it.origemVirlene ? " · importada do Virlene" : "";
    return `<div class="salva ${it.id===S.salvoId?'atual':''}">
    <p>${esc(it.ini)} <small>${rotuloData(it.data)}${extra}${nv}${org}</small></p>
    <div class="acts">
      <button class="btn sec" data-abrir="${esc(it.id)}">Abrir</button>
      <button class="btn apag" data-apagar="${esc(it.id)}">Apagar</button>
    </div>
  </div>`;
  }).join("");
  box.querySelectorAll("[data-abrir]").forEach(b=>b.onclick=()=>abrirSalva(b.dataset.abrir));
  box.querySelectorAll("[data-apagar]").forEach(b=>b.onclick=()=>apagarSalva(b.dataset.apagar));
}
function ligarArquivo(){
  $("#salvar").onclick = salvarAnamnese;
  $("#novaAnm").onclick = novaAnamnese;
  $("#importar").onclick = importarVirlene;
  desenharLista();
}

/* ================= TELAS ================= */
function render(){
  $("#stepper").innerHTML = ETAPAS.map((e,i)=>`<button class="${i===S.etapa?'on':(i<S.etapa?'done':'')}" data-go="${i}"><b>${e[0]}</b>${e[1]}</button>`).join("");
  $("#aviso").classList.toggle("hidden", S.etapa!==0);
  TELAS[S.etapa]();
  gravarRascunho();
  desenharLista();
  window.scrollTo({top:0});
}
/* re-render sem pular para o topo */
function render2(){ const y=window.scrollY; TELAS[S.etapa](); gravarRascunho(); window.scrollTo({top:y}); }

const PROTOCOLO = "Siga o protocolo de avaliação e manejo de risco do serviço e construa um plano de segurança. Em emergência: SAMU 192 · CVV 188 (24 horas, gratuito).";
function motivosRisco(){
  const m = RISCO.filter(([k])=>S.risco[k]==="sim").map(([,l])=>l.toLowerCase());
  if(S.tri.risco==="sim"||S.tri.risco==="talvez") m.push("sinal de risco na triagem");
  if(S.esc[10]>=1) m.push("item 11 da escala (pensamentos de ferir a si mesmo) com nota "+S.esc[10]);
  if(ativas().some(h=>avaliar(h).risco)) m.push("critério de ideação suicida marcado");
  return m;
}
const alertaRisco = () => temRisco()? `<div class="alert risk"><b>Atenção: sinal de risco.</b> ${esc(motivosRisco().join("; "))}. Priorize a avaliação de risco e o plano de segurança antes de seguir com a anamnese. ${PROTOCOLO}</div>`:"";
const alertaPsicose = () => { const d = avaliarEscala().dom.find(x=>x.r==="VII");
  return d.acima? `<div class="alert warn"><b>Possíveis sintomas psicóticos na escala.</b> Investigue antes de concluir as hipóteses: vários critérios excluem quadros psicóticos (DSM-5, p. 87).</div>`:""; };

const preenchidos = (obj,campos) => campos.filter(([k])=>obj[k]&&String(obj[k]).trim()).length;
const campoTexto = (grupo,[k,l,ph]) => `<label class="f">${l}</label><textarea class="curto" data-grp="${grupo}" data-k="${k}" placeholder="${esc(ph||"")}">${esc((S[grupo]||{})[k]||"")}</textarea>`;
const resumoSec = n => n? `<span class="cont">${n} preenchido${n>1?"s":""}</span>` : `<span class="cont vazio">opcional</span>`;

function telaPaciente(){
  const p=S.pac, abertos = S._abertos||{};
  const nRisco = RISCO.filter(([k])=>S.risco[k]).length + (S.risco.protecao?1:0) + (S.risco.obs?1:0);
  $("#view").innerHTML = `<div class="card">
   <h2>Dados da avaliação</h2>
   <p class="hint">Use apenas iniciais para preservar o sigilo. A idade ajusta os critérios do TDAH.</p>
   <div class="row">
    <div><label class="f">Iniciais do paciente</label><input type="text" id="ini" value="${esc(p.ini)}" placeholder="Ex.: M.A.S."></div>
    <div><label class="f">Idade</label><input type="number" id="idade" min="0" max="120" value="${esc(p.idade)}"></div>
    <div><label class="f">Data</label><input type="date" id="data" value="${esc(p.data)}"></div>
   </div>
   <label class="f">Queixa principal</label><textarea id="queixa" placeholder="Nas palavras do paciente">${esc(p.queixa)}</textarea>
   <label class="f">Objetivos</label><textarea class="curto" id="objetivos" placeholder="O que o paciente busca com o atendimento">${esc(p.objetivos)}</textarea>
   <label class="f">Contexto de vida</label><textarea class="curto" id="contexto" placeholder="Com quem mora, situação atual, momento de vida">${esc(p.contexto)}</textarea>
  </div>
  <div class="card">
   <h2>História clínica</h2>
   <p class="hint">Tudo opcional. Toque em uma seção para abrir e preencha o que surgir na conversa.</p>
   ${HIST.map(sec=>`<details class="sec" data-sec="${sec.id}" ${abertos[sec.id]?"open":""}><summary><span>${sec.t}</span>${resumoSec(preenchidos(S.hist,sec.campos))}</summary>
     ${sec.campos.map(c=>campoTexto("hist",c)).join("")}</details>`).join("")}
   <details class="sec riscosec" data-sec="risco" ${abertos.risco||riscoMarcado()?"open":""}><summary><span>Avaliação de risco</span>${riscoMarcado()?`<span class="cont alto">risco marcado</span>`:resumoSec(nRisco)}</summary>
     <p class="hint">Sem marcação = não avaliado.</p>
     ${RISCO.map(([k,l])=>`<div class="gate"><div class="q">${l}</div>
       <div class="seg" data-risco="${k}">${["sim","nao"].map(v=>`<button data-v="${v}" class="${S.risco[k]===v?'on':''} ${v==='sim'?'rsim':''}">${v==="sim"?"Sim":"Não"}</button>`).join("")}</div></div>`).join("")}
     ${campoTexto("risco",["protecao","Fatores de proteção","Vínculos, projetos, crenças, tratamento, ausência de acesso a meios"])}
     ${campoTexto("risco",["obs","Observações sobre o risco","Frequência, intensidade, último episódio, conduta combinada"])}
     ${riscoMarcado()?`<div class="alert risk" style="margin:10px 0 0"><b>Risco marcado.</b> ${PROTOCOLO}</div>`:""}
   </details>
   <details class="sec" data-sec="eem" ${abertos.eem?"open":""}><summary><span>Exame do estado mental (breve)</span>${resumoSec(preenchidos(S.eem,EEM))}</summary>
     ${EEM.map(c=>campoTexto("eem",c)).join("")}</details>
   <div class="nav"><span></span><button class="btn" data-go="1">Ir para a escala →</button></div>
  </div>`;
  ["ini","idade","data","queixa","objetivos","contexto"].forEach(k=>$("#"+k).oninput=e=>{S.pac[k]=e.target.value; gravarRascunho();});
  document.querySelectorAll("textarea[data-grp]").forEach(t=>t.oninput=()=>{ S[t.dataset.grp][t.dataset.k]=t.value; gravarRascunho(); });
  document.querySelectorAll("details.sec").forEach(d=>d.ontoggle=()=>{ (S._abertos ||= {})[d.dataset.sec]=d.open; });
  document.querySelectorAll(".seg[data-risco]").forEach(sg=>sg.onclick=e=>{
    const v=e.target.dataset.v; if(!v) return; const k=sg.dataset.risco;
    S.risco[k] = S.risco[k]===v? undefined : v; if(S.risco[k]===undefined) delete S.risco[k];
    (S._abertos ||= {}).risco = true; render2(); });
}

function telaEscala(){
  const ae = avaliarEscala(), n = ae.respondidas, total = ESC_ITENS.length;
  $("#view").innerHTML = `<div class="card">
   <h2>Escala de sintomas do DSM-5 (Nível 1)</h2>
   <div class="legend"><b>Instruções:</b> as questões abaixo perguntam sobre coisas que podem ter perturbado o paciente. Para cada pergunta, toque no número que melhor descreve o quanto (ou com que frequência) o paciente foi perturbado durante as <b>duas (2) últimas semanas</b>.
     <span>0 = nada, de modo algum · 1 = muito leve, raramente, menos de um ou dois dias · 2 = leve, vários dias · 3 = moderado, mais da metade dos dias · 4 = grave, quase todos os dias</span></div>
   ${ESC_ITENS.map((q,i)=>`<div class="item ${n&&!Number.isInteger(S.esc[i])?'falta':''}"><p><b>${i+1}.</b> ${q}</p>
     <div class="opts" data-i="${i}">${ESC_OPC.map(([v,l])=>`<button class="opt ${S.esc[i]===Number(v)?'on':''}" data-nota="${v}"><b>${v}</b>${l}</button>`).join("")}</div></div>`).join("")}
   <p class="prog">${n} de ${total} respondidas${n&&n<total?` · faltam os itens ${ae.faltam.join(", ")}`:""}</p>
   <div class="nav"><button class="btn ghost" data-go="0">← Voltar</button><button class="btn" data-go="2">${n?"Concluir escala →":"Pular escala →"}</button></div>
   <p class="ref" style="margin:14px 0 0">Escala Transversal de Sintomas de Nível 1 Autoaplicável do DSM-5 – Adulto (DSM-5, p. 738–739). © American Psychiatric Association. A APA permite a reprodução por clínicos para uso com os próprios pacientes.</p>
  </div>`;
  document.querySelectorAll(".opts").forEach(o=>o.onclick=e=>{
    const b = e.target.closest(".opt"); if(!b) return;
    const i = Number(o.dataset.i), v = Number(b.dataset.nota);
    if(S.esc[i]===v) delete S.esc[i]; else S.esc[i]=v;
    render2(); });
}

function telaTriagem(){
  const ind = indicacoesEscala();
  $("#view").innerHTML = `<div class="card">
   <h2>Triagem por áreas</h2>
   <p class="hint">Responda pelo que surgiu na entrevista. "Sim" e "Talvez" abrem a checagem detalhada na próxima etapa. As áreas acima do limite na escala já vêm marcadas como "Talvez".</p>
   ${TRIAGEM.map(g=>{ const det=S.triDet[g.id]||{}, nd=preenchidos(det,TRI_DET), on=S.tri[g.id]==="sim"||S.tri[g.id]==="talvez";
     return `<div class="gate ${g.risco?'risk':''}">
     <div class="q">${g.q}${g.sub?`<small>${g.sub}</small>`:""}${ind[g.id]?`<span class="tag">Escala: ${ind[g.id].join(", ")}</span>`:""}</div>
     <div class="seg" data-g="${g.id}">${["sim","talvez","nao"].map(v=>`<button data-v="${v}" class="${S.tri[g.id]===v?'on':''}">${v==="nao"?"Não":v[0].toUpperCase()+v.slice(1)}</button>`).join("")}</div>
   </div>${on||nd?`<details class="det" ${nd?"open":""}><summary>Detalhes desta área (opcional)${nd?` · ${nd} preenchido${nd>1?"s":""}`:""}</summary>
     <div class="row">${TRI_DET.map(([k,l])=>`<div><label class="f">${l}</label><textarea class="curto" data-tg="${g.id}" data-campo="${k}">${esc(det[k]||"")}</textarea></div>`).join("")}</div></details>`:""}`;}).join("")}
   <div class="nav"><button class="btn ghost" data-go="1">← Escala</button><button class="btn" data-go="3">Ver critérios →</button></div>
  </div>`;
  document.querySelectorAll(".seg[data-g]").forEach(sg=>sg.onclick=e=>{
    const v=e.target.dataset.v; if(!v) return;
    const g=sg.dataset.g;
    S.tri[g] = S.tri[g]===v? undefined : v; if(S.tri[g]===undefined) delete S.tri[g];
    if(!S.mexidas.includes(g)) S.mexidas.push(g);
    S.auto = S.auto.filter(x=>x!==g);
    render2(); });
  document.querySelectorAll("textarea[data-tg]").forEach(t=>t.oninput=()=>{ (S.triDet[t.dataset.tg] ||= {})[t.dataset.campo]=t.value; gravarRascunho(); });
}

const contagem = b => `${b.n} de ${b.total} presente${b.n===1?"":"s"}${b.semInfo?`, ${b.semInfo} sem informação`:""} · exigidos ${b.min}`;
function telaCriterios(){
  const lista = ativas();
  if(!lista.length){
    $("#view").innerHTML = `${alertaRisco()}${alertaPsicose()}<div class="card"><h2>Nenhuma área selecionada</h2>
     <p class="hint">Marque "Sim" ou "Talvez" em ao menos uma pergunta da triagem.</p>
     <div class="nav"><button class="btn ghost" data-go="2">← Voltar à triagem</button></div></div>`; return;
  }
  if(!lista.find(h=>h.id===S.atual)) S.atual = lista[0].id;
  const h = lista.find(x=>x.id===S.atual), idx = lista.indexOf(h), a = avaliar(h);
  const m = S.marc[h.id]||{}, au = S.aus[h.id]||{}, r = S.req[h.id]||{}, rn = S.reqNao[h.id]||{}, f = S.flags[h.id]||{}, nt = S.notas[h.id]||{};
  const linha = (k,t,pres,ausente,risco,tipo) => `<div class="crit ${risco?'riskitem':''} ${pres?'pres':ausente?'ausn':''}"><span class="ct">${t}</span>
    <div class="seg mini" data-${tipo}="${k}"><button data-v="sim" class="${pres?'on':''}">${tipo==="c"?"Presente":"Sim"}</button><button data-v="nao" class="${ausente?'on':''}">${tipo==="c"?"Ausente":"Não"}</button></div></div>`;
  $("#view").innerHTML = `${alertaRisco()}${alertaPsicose()}
  <div class="chips">${lista.map(x=>{const ax=avaliar(x);return `<button class="chip ${x.id===h.id?'on':''} ${ax.nivel>=2?'ok':''}" data-h="${x.id}">${x.nome.split(" (")[0]}</button>`}).join("")}</div>
  <div class="card">
   <h2>${h.nome}</h2>
   <p class="ref">Hipótese ${idx+1} de ${lista.length} · ${h.grupo} · DSM-5, p. ${h.pag}</p>
   <p class="hint">Sem marcação = sem informação, não "ausente". ${a.presentes} de ${a.totalItens} itens presentes${a.semInfo?`, ${a.semInfo} sem informação`:""}.</p>
   ${h.nota?`<p class="hint">${h.nota}</p>`:""}
   ${(h.flags||[]).map(fl=>`<div class="block flag"><label class="chk"><input type="checkbox" data-flag="${fl.id}" ${f[fl.id]?'checked':''}> ${fl.t}</label></div>`).join("")}
   ${h.blocos.map((b,bi)=>{const ab=a.blocos[bi];return `<div class="block">
     <div class="bt"><span>${b.t}</span><span class="count ${ab.ok?'met':''}">${contagem(ab)}</span></div>
     ${b.umDe?`<p class="hint">Pelo menos um dos dois primeiros itens precisa estar presente.</p>`:""}
     ${b.itens.map((it,ii)=>{const k=bi+"_"+ii;return linha(k,txt(it),!!m[k],!m[k]&&!!au[k],it.risco,"c");}).join("")}
   </div>`}).join("")}
   ${h.req.length?`<div class="block req"><div class="bt"><span>Requisitos (duração, prejuízo e exclusões)</span><span class="count ${a.reqOk===h.req.length?'met':''}">${a.reqOk} de ${h.req.length} confirmados</span></div>
     ${h.req.map((q,i)=>linha(i,q,!!r[i],!r[i]&&!!rn[i],false,"r")).join("")}</div>`:""}
   <details class="sec" ${algum(nt)?"open":""}><summary><span>Anotações desta hipótese</span>${resumoSec(preenchidos(nt,NOTAS))}</summary>
     ${NOTAS.map(([k,l])=>`<label class="f">${l}</label><textarea class="curto" data-nota="${k}">${esc(nt[k]||"")}</textarea>`).join("")}</details>
   <div class="nav">
    ${idx>0?`<button class="btn ghost" data-h="${lista[idx-1].id}">← Anterior</button>`:`<button class="btn ghost" data-go="2">← Triagem</button>`}
    ${idx<lista.length-1?`<button class="btn" data-h="${lista[idx+1].id}">Próxima hipótese →</button>`:`<button class="btn" data-go="4">Ver resultado →</button>`}
   </div>
  </div>`;
  const tri = (obj,neg,k,v) => { const P=(S[obj][h.id] ||= {}), N=(S[neg][h.id] ||= {});
    if(v==="sim"){ if(P[k]) delete P[k]; else { P[k]=true; delete N[k]; } }
    else { if(N[k]) delete N[k]; else { N[k]=true; delete P[k]; } }
    render2(); };
  document.querySelectorAll(".seg[data-c]").forEach(sg=>sg.onclick=e=>{ const v=e.target.dataset.v; if(v) tri("marc","aus",sg.dataset.c,v); });
  document.querySelectorAll(".seg[data-r]").forEach(sg=>sg.onclick=e=>{ const v=e.target.dataset.v; if(v) tri("req","reqNao",sg.dataset.r,v); });
  document.querySelectorAll("[data-flag]").forEach(c=>c.onchange=e=>{ (S.flags[h.id] ||= {})[c.dataset.flag]=e.target.checked; render2(); });
  document.querySelectorAll("textarea[data-nota]").forEach(t=>t.oninput=()=>{ (S.notas[h.id] ||= {})[t.dataset.nota]=t.value; gravarRascunho(); });
}

const ranking = () => ativas().map(h=>({h,a:avaliar(h)})).sort((x,y)=>y.a.nivel-x.a.nivel||y.a.score-x.a.score);
function telaResultado(){
  const lista = ranking();
  $("#view").innerHTML = `${alertaRisco()}${alertaPsicose()}
  <div class="card">
   <h2>Hipóteses levantadas</h2>
   <p class="hint">Ordenadas da mais à menos compatível. Servem para orientar a investigação, não substituem o julgamento clínico nem o diagnóstico diferencial. Itens sem marcação contam como sem informação.</p>
  </div>
  ${lista.length? lista.map(({h,a})=>{ const nt=S.notas[h.id]||{}; return `<div class="card res s${a.nivel}">
    <span class="badge">${a.rot}${a.grav?` · gravidade ${a.grav}`:""}</span>
    <h2>${h.nome}</h2>
    <p class="ref">DSM-5, p. ${h.pag} · ${a.presentes} de ${a.totalItens} presentes${a.semInfo?`, ${a.semInfo} sem informação`:""}</p>
    <div class="bar"><i style="width:${Math.round(a.score*100)}%"></i></div>
    <ul class="mini">${a.blocos.map(b=>`<li>${b.t}: ${b.n} de ${b.min} exigidos${b.ok?" ✓":""}${b.semInfo?` <span class="si">(${b.semInfo} sem informação)</span>`:""}${!b.umDeOk&&b.n?" (falta humor deprimido ou perda de prazer)":""}</li>`).join("")}
    ${a.naoAtende.map(q=>`<li class="nao">Não atendido: ${q}</li>`).join("")}
    ${a.faltam.map(q=>`<li class="miss">A confirmar: ${q}</li>`).join("")}</ul>
    ${NOTAS.filter(([k])=>nt[k]).map(([k,l])=>`<p class="nota"><b>${l}:</b> ${esc(nt[k])}</p>`).join("")}
    <p class="noprint" style="margin:10px 0 0"><button class="btn sec" data-edit="${h.id}">Revisar critérios</button></p>
  </div>`;}).join("") : `<div class="card"><p class="hint">Nenhuma hipótese aberta na triagem.</p></div>`}
  ${cartaoEscala()}
  <div class="card">
   <h3 style="margin-top:0">Observações clínicas</h3>
   <textarea id="obs" placeholder="Diagnóstico diferencial, comorbidades, próximos passos">${esc(S.pac.obs)}</textarea>
   <details class="sec" ${ACOMP.some(([k])=>S.pac[k])?"open":""}><summary><span>Acompanhamento</span>${resumoSec(preenchidos(S.pac,ACOMP))}</summary>
    <div class="row">${ACOMP.map(([k,l])=>`<div><label class="f">${l}</label><textarea class="curto" data-acomp="${k}">${esc(S.pac[k]||"")}</textarea></div>`).join("")}</div></details>
   <h3>Relatório para o prontuário</h3>
   <pre id="rel"></pre>
   <div class="nav noprint" style="flex-wrap:wrap">
    <button class="btn ghost" data-go="3">← Critérios</button>
    <span style="display:flex;gap:8px;flex-wrap:wrap">
     <button class="btn sec" id="copiar">Copiar relatório</button>
     ${emMoldura?"":`<button class="btn sec" id="imprimir">Imprimir / PDF</button>`}
     <button class="btn ghost" id="nova">Nova anamnese</button>
    </span>
   </div>
  </div>
  <div class="card noprint" id="versoes"></div>`;
  const atualizaRel = ()=>$("#rel").textContent = relatorio(lista);
  atualizaRel();
  $("#obs").oninput=e=>{S.pac.obs=e.target.value; atualizaRel(); gravarRascunho();};
  document.querySelectorAll("textarea[data-acomp]").forEach(t=>t.oninput=()=>{S.pac[t.dataset.acomp]=t.value; atualizaRel(); gravarRascunho();});
  $("#copiar").onclick=async e=>{ try{await navigator.clipboard.writeText($("#rel").textContent); e.target.textContent="Copiado ✓";}catch(_){ e.target.textContent="Selecione o texto e copie"; } };
  if($("#imprimir")) $("#imprimir").onclick=()=>window.print();
  $("#nova").onclick=()=>novaAnamnese();
  document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>{S.atual=b.dataset.edit; S.etapa=3; render();});
  desenharVersoes();
}
function desenharVersoes(){
  const box = $("#versoes"); if(!box) return;
  const item = S.salvoId && listaSalvas().find(x=>x.id===S.salvoId);
  const hist = item && Array.isArray(item.historico) ? item.historico : [];
  if(!item){ box.innerHTML = `<h3 style="margin-top:0">Versões anteriores</h3><p class="hint" style="margin:0">Esta anamnese ainda não foi salva. Ao atualizar uma anamnese salva, a versão anterior fica guardada aqui.</p>`; return; }
  box.innerHTML = `<h3 style="margin-top:0">Versões anteriores</h3>${hist.length? hist.map((v,i)=>({v,i})).reverse().map(({v,i})=>{
    const e = normalizar(v.estado||{}); const p = e.pac;
    return `<details class="sec"><summary><span>Versão ${i+1} · salva em ${esc(rotuloHora(v.salvoEm))}</span></summary>
     <p class="nota"><b>Queixa:</b> ${esc(p.queixa||"—")}</p>
     <p class="nota"><b>Escala:</b> ${Object.keys(e.esc).length} de ${ESC_ITENS.length} itens</p>
     <p class="nota"><b>Áreas da triagem:</b> ${esc(TRIAGEM.filter(g=>e.tri[g.id]==="sim"||e.tri[g.id]==="talvez").map(g=>g.q.replace(/\?$/,"")).join("; ")||"—")}</p>
     <p class="noprint"><button class="btn ghost" data-restaurar="${i}">Abrir esta versão como rascunho</button></p></details>`;}).join("")
   : `<p class="hint" style="margin:0">Nenhuma versão anterior. Salva em ${esc(rotuloHora(item.salvoEm))}.</p>`}`;
  box.querySelectorAll("[data-restaurar]").forEach(b=>b.onclick=()=>{
    if(rascunhoAlterado() && !confirm("Abrir a versão anterior vai substituir o rascunho atual, que não está salvo.\nContinuar?")) return;
    const v = hist[Number(b.dataset.restaurar)];
    S = normalizar(clonar(v.estado)); S.salvoId = item.id; S.etapa = 4;
    render(); statusArq("Versão anterior aberta. Toque em Salvar para torná-la a atual.");
  });
}

function cartaoEscala(){
  const {dom, respondidas, faltam} = avaliarEscala();
  if(!respondidas) return `<div class="card"><h2>Escala de Nível 1 do DSM-5</h2><p class="hint" style="margin:0">Não foi respondida nesta avaliação.</p></div>`;
  return `<div class="card">
   <h2>Escala de Nível 1 do DSM-5</h2>
   <p class="ref">Preenchida pela psicóloga · ${respondidas} de ${ESC_ITENS.length} itens · limites na p. 735</p>
   ${faltam.length?`<p class="hint miss">Itens sem resposta: ${faltam.join(", ")}</p>`:""}
   ${dom.map(d=>{
     const cls = d.maior===null? "na" : d.acima? ((d.r==="VI"||d.r==="VII")? "risk" : "up") : d.inconclusivo? "inc" : "ok";
     const rot = d.maior===null? "Sem resposta" : d.acima? "Investigar" : d.inconclusivo? "Inconclusivo" : "Abaixo do limite";
     return `<div class="dom"><div>${d.r}. ${d.nome}
       <small>${d.maior===null? "" : `Maior nota ${d.maior}, limite ${d.lim}`}${d.falta.length&&d.maior!==null?` · faltam itens ${d.falta.join(", ")}`:""}${d.acima&&d.nota? `. ${d.nota}`:""}</small></div>
       <span class="st ${cls}">${rot}</span></div>`; }).join("")}
  </div>`;
}

const rotTri = {sim:"Sim", talvez:"Talvez", nao:"Não"};
function relatorio(lista){
  const p=S.pac, L=[];
  const d = p.data? p.data.split("-").reverse().join("/") : "";
  const bloco = (titulo, pares) => { const f = pares.filter(([,v])=>v&&String(v).trim()); if(f.length){ L.push("", titulo); f.forEach(([l,v])=>L.push(`   - ${l}: ${String(v).trim()}`)); } };
  L.push("APOIO À ANAMNESE · HIPÓTESES SEGUNDO O DSM-5");
  L.push(`Paciente: ${p.ini||"(iniciais)"}   Idade: ${p.idade||"-"}   Data: ${d}`);
  if(p.queixa) L.push(`Queixa principal: ${p.queixa}`);
  if(p.objetivos) L.push(`Objetivos: ${p.objetivos}`);
  if(p.contexto) L.push(`Contexto de vida: ${p.contexto}`);
  if(temRisco()){
    L.push("", "!!! ALERTA DE RISCO !!!", `   - Sinais: ${motivosRisco().join("; ")}.`);
    if(S.risco.protecao) L.push(`   - Fatores de proteção: ${S.risco.protecao}`);
    if(S.risco.obs) L.push(`   - Observações: ${S.risco.obs}`);
    L.push(`   - ${PROTOCOLO}`);
  }
  const rv = RISCO.filter(([k])=>S.risco[k]).map(([k,l])=>[l, S.risco[k]==="sim"?"sim":"não"]);
  if(!temRisco()) bloco("Avaliação de risco:", [...rv, ["Fatores de proteção",S.risco.protecao], ["Observações",S.risco.obs]]);
  HIST.forEach(sec=>bloco(sec.t+":", sec.campos.map(([k,l])=>[l,S.hist[k]])));
  bloco("Exame do estado mental:", EEM.map(([k,l])=>[l,S.eem[k]]));
  const ae = avaliarEscala();
  if(ae.respondidas){
    const acima = ae.dom.filter(d=>d.acima), inc = ae.dom.filter(d=>d.inconclusivo), sem = ae.dom.filter(d=>d.maior===null);
    L.push("", `Escala Transversal de Sintomas de Nível 1 do DSM-5 (preenchida pela psicóloga; ${ae.respondidas}/${ESC_ITENS.length} itens):`);
    L.push(acima.length? `   - Acima do limite: ${acima.map(d=>`${d.nome} (nota ${d.maior})`).join("; ")}` : "   - Nenhum domínio acima do limite.");
    if(inc.length) L.push(`   - Inconclusivo (incompleto, abaixo do limite): ${inc.map(d=>d.nome).join(", ")}`);
    if(sem.length) L.push(`   - Sem resposta: ${sem.map(d=>d.nome).join(", ")}`);
    if(ae.faltam.length) L.push(`   - Itens não respondidos: ${ae.faltam.join(", ")}`);
  }
  const tri = TRIAGEM.filter(g=>S.tri[g.id]==="sim"||S.tri[g.id]==="talvez");
  if(tri.length){
    L.push("", "Triagem (áreas assinaladas):");
    tri.forEach(g=>{ L.push(`   - ${g.q.replace(/\?$/,"")}: ${rotTri[S.tri[g.id]]}`);
      const det=S.triDet[g.id]||{}; TRI_DET.forEach(([k,l])=>{ if(det[k]&&det[k].trim()) L.push(`      ${l}: ${det[k].trim()}`); }); });
  }
  L.push("", "Hipóteses (da mais à menos compatível):");
  lista.forEach(({h,a},i)=>{
    L.push(`${i+1}. ${h.nome} (DSM-5, p. ${h.pag}): ${a.rot}${a.grav?`, gravidade ${a.grav}`:""}`);
    L.push(`   - ${a.presentes} de ${a.totalItens} itens presentes${a.ausentes?`, ${a.ausentes} ausentes`:""}${a.semInfo?`, ${a.semInfo} sem informação`:""}`);
    a.blocos.forEach(b=>L.push(`   - ${b.t}: ${b.n}/${b.min}${b.semInfo?` (${b.semInfo} sem informação)`:""}`));
    if(a.naoAtende.length) L.push(`   - Não atendido: ${a.naoAtende.join("; ")}`);
    if(a.faltam.length) L.push(`   - A confirmar: ${a.faltam.join("; ")}`);
    const nt=S.notas[h.id]||{}; NOTAS.forEach(([k,l])=>{ if(nt[k]&&nt[k].trim()) L.push(`   - ${l}: ${nt[k].trim()}`); });
  });
  if(!lista.length) L.push("Nenhuma área assinalada na triagem.");
  if(p.obs) L.push("", "Observações clínicas:", p.obs);
  bloco("Acompanhamento:", ACOMP.map(([k,l])=>[l,p[k]]));
  L.push("", "Itens sem marcação foram registrados como sem informação, não como ausentes.");
  L.push("Documento de apoio. Hipóteses a investigar; a conclusão diagnóstica é da profissional responsável.");
  return L.join("\n");
}

/* navegação geral */
document.addEventListener("click",e=>{
  const go=e.target.closest("[data-go]");
  if(go){ const nova=Number(go.dataset.go); if(S.etapa===1 && nova!==1) aplicarEscala(); S.etapa=nova; render(); return; }
  const hh=e.target.closest("[data-h]"); if(hh){ S.atual=hh.dataset.h; render(); }
});
restaurarRascunho();
ligarArquivo();
render();

/* PWA: funciona sem internet depois da primeira abertura */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  try { navigator.serviceWorker.register("sw.js").catch(()=>{}); } catch(_) {}
}
