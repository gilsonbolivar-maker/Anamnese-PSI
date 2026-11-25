# Anamnese PSI — Apoio à Anamnese (DSM-5)

Aplicativo web (funciona no iPad, inclusive sem internet depois da primeira abertura) para a psicóloga organizar a anamnese enquanto conversa com o paciente. Quem preenche é sempre a psicóloga.

Versão que une o app Virlene e o protótipo PSI, com conteúdo novo de anamnese.

## Etapas
1. **Paciente** – identificação por iniciais, queixa, objetivos, contexto de vida e seções opcionais recolhíveis: desenvolvimento, saúde e medicações, histórico psiquiátrico e familiar, hábitos (substâncias, sono, alimentação, atividade física), vida social e estressores, **avaliação de risco** e **exame do estado mental**.
2. **Escala** – Escala Transversal de Sintomas de Nível 1 do DSM-5 (texto oficial), com lista dos itens que faltam. Domínio incompleto abaixo do limite aparece como *Inconclusivo*.
3. **Triagem** – áreas com Sim / Talvez / Não e detalhes opcionais (início, frequência, situações, impacto).
4. **Critérios** – cada item como Presente, Ausente ou sem marcação (= sem informação), mais anotações por hipótese.
5. **Resultado** – hipóteses em ordem de compatibilidade, com barra, contagem e selo; escala; observações; acompanhamento; relatório para o prontuário e versões anteriores.

## Dados
Tudo fica no navegador do aparelho (localStorage). Nada é enviado. Rascunho automático, lista de anamneses salvas, abrir, apagar e histórico de versões ao atualizar. O botão **Importar anamneses do Virlene** copia as anamneses salvas no app Virlene do mesmo aparelho e navegador, sem alterar as originais.

Quando há risco marcado, o resultado e o relatório mostram um alerta em vermelho com orientação de seguir o protocolo do serviço (SAMU 192 · CVV 188).

## Aviso
Ferramenta de apoio. Não emite diagnóstico; a conclusão é da profissional responsável. Os critérios são resumos próprios, com a página do DSM-5 (Artmed, 2014) para conferência. A escala é © American Psychiatric Association, que permite a reprodução por clínicos para uso com os próprios pacientes.

Desenvolvido por Gilson Bolivar · Desenvolvedor Digital.
