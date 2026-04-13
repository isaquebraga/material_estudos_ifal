# 📘 Regras e Uso — IFAL BSI Material de Estudo

## O que é este projeto?

Este é um **repositório colaborativo** criado por alunos e egressos do curso de **Bacharelado em Sistemas de Informação** do **Instituto Federal de Alagoas (IFAL)**.

O objetivo é centralizar e organizar material de estudo de todas as disciplinas do curso em uma aplicação web moderna, interativa e acessível. Cada matéria possui sua própria página com tópicos derivados do conteúdo disponibilizado pelos professores, além de quizzes para revisão e prática.

## Público-alvo

- Alunos atuais do BSI IFAL (todos os períodos)
- Egressos do curso que desejam contribuir com conteúdo
- Qualquer pessoa interessada nos temas abordados

---

## Regras Gerais de Uso

### 📚 Sobre o Conteúdo

1. **Origem do conteúdo**: Todo material publicado deve ser derivado de conteúdos disponibilizados pelos professores durante as aulas (slides, apostilas, livros-texto indicados na ementa).
2. **Direitos autorais**: É **proibido** copiar e colar conteúdo protegido por direitos autorais sem a devida autorização ou referência. Resuma, sintetize e reescreva com suas próprias palavras.
3. **Crédito obrigatório**: Ao adicionar conteúdo de uma matéria, **sempre** referencie o professor que disponibilizou o material e as fontes bibliográficas utilizadas.
4. **Linguagem**: Use linguagem **respeitosa, acadêmica e acessível**. Evite gírias excessivas, mas mantenha o tom amigável para facilitar o aprendizado.
5. **Qualidade**: Priorize informações corretas e verificáveis. Em caso de dúvida, cite a fonte.

### 🤖 Sobre o Quiz com IA

1. **API Key pessoal**: O quiz com IA utiliza a API do Google Gemini. Cada usuário deve usar sua **própria API key**, obtida gratuitamente em [Google AI Studio](https://aistudio.google.com/apikey).
2. **Privacidade**: A API key é armazenada **exclusivamente no navegador do usuário** (via `localStorage`). Ela **nunca** é enviada para servidores do projeto nem commitada no repositório.
3. **Nunca commitar chaves**: É absolutamente proibido incluir API keys, tokens ou credenciais em qualquer arquivo do repositório.
4. **Custo**: A API do Gemini possui um tier gratuito generoso. O custo de uso é de responsabilidade de cada usuário.

### 📝 Sobre o Conteúdo das Matérias

1. **Estrutura padrão**: Cada matéria segue a mesma estrutura: Hero → Tópicos (seções) → Quiz Estático → Quiz IA.
2. **Tópicos**: Cada tópico corresponde a uma unidade ou tema da ementa do professor. Os tópicos devem ser auto-contidos e didáticos.
3. **Quiz estático**: Cada matéria deve ter pelo menos 10 perguntas fixas de múltipla escolha com feedback explicativo.
4. **Quiz IA**: Reutiliza o mesmo sistema global — o contribuidor precisa apenas fornecer o resumo do conteúdo para contexto da IA.

---

## Regras de Contribuição

### 🔀 Fluxo de Trabalho

1. **Nunca faça push direto** na branch `main`
2. Faça um **fork** do repositório
3. Crie uma branch descritiva: `feat/marketing-segmentacao`, `fix/corrige-quiz-maslow`
4. Faça commits em **português**, com mensagens descritivas
5. Abra um **Pull Request** usando o template fornecido
6. Aguarde pelo menos **1 review aprovado** antes do merge

### ✅ Checklist para Contribuição

- [ ] O conteúdo é baseado em material fornecido por professores
- [ ] As fontes e créditos estão devidamente citados
- [ ] O código segue o padrão TypeScript + React do projeto
- [ ] Não há API keys, tokens ou dados sensíveis nos arquivos
- [ ] Testei localmente com `npm run dev`
- [ ] A aplicação compila sem erros com `npm run build`

### 🚫 O que NÃO fazer

- Adicionar conteúdo plagiado ou sem fontes
- Commitar API keys ou qualquer credencial
- Modificar arquivos de configuração sem justificativa
- Criar PRs sem descrição ou sem seguir o template
- Alterar conteúdo de matérias que não foram revisadas sem abrir issue primeiro

---

## Código de Conduta

1. Respeite todos os participantes, independente de período, experiência ou nível técnico.
2. Seja construtivo nos reviews de código e nas discussões.
3. Reporte problemas via Issues, não em redes sociais ou grupos informais.
4. Contribuições incorretas ou incompletas devem ser corrigidas via PR, não ridicularizadas.

---

## Dúvidas?

Abra uma [Issue](../../issues) com o template "Dúvida Geral" ou entre em contato com os mantenedores do projeto.
