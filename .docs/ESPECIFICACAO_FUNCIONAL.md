# ⚙️ Especificação Funcional — IFAL BSI Material de Estudo

## Visão Geral

Aplicação web SPA (Single Page Application) construída com **React + TypeScript + Tailwind CSS v4**, servida por **Vite**. Sem backend — toda a lógica e dados vivem no client-side. A integração com IA (Gemini) é feita diretamente do navegador do usuário.

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite |
| Estilização | Tailwind CSS v4 |
| Roteamento | React Router v7 |
| IA (Quiz) | Google Gemini API (client-side) |
| Persistência | localStorage (API key, scores) |
| Deploy | GitHub Pages / Vercel (futuro) |

---

## Arquitetura da Aplicação

```
┌──────────────────────────────────────────────────┐
│                    App Shell                      │
│  ┌──────────┐  ┌──────────────────────────────┐  │
│  │          │  │                              │  │
│  │ Sidebar  │  │       Content Area           │  │
│  │          │  │                              │  │
│  │ - Home   │  │  ┌────────────────────────┐  │  │
│  │ - 1º Per │  │  │ SubjectPage            │  │  │
│  │ - 2º Per │  │  │ ┌─────────────────────┐│  │  │
│  │ - ...    │  │  │ │ TopicNav            ││  │  │
│  │ - 8º Per │  │  │ └─────────────────────┘│  │  │
│  │ - Optat. │  │  │ ┌─────────────────────┐│  │  │
│  │ - Config │  │  │ │ TopicContent        ││  │  │
│  │          │  │  │ │ (Cards, Diagrams)   ││  │  │
│  │          │  │  │ └─────────────────────┘│  │  │
│  │          │  │  │ ┌─────────────────────┐│  │  │
│  │          │  │  │ │ Quiz (Static + IA)  ││  │  │
│  │          │  │  │ └─────────────────────┘│  │  │
│  │          │  │  └────────────────────────┘  │  │
│  └──────────┘  └──────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

---

## Funcionalidades Detalhadas

### F1 — Sidebar de Navegação

**Descrição**: Menu lateral fixo com todas as matérias organizadas por período.

**Comportamento**:
- Agrupamento colapsável: "1º Período", "2º Período", ..., "8º Período", "Optativas"
- Optativas sub-agrupadas: "Desenvolvimento de Software", "Gestão de TI", "Infraestrutura", "Humanísticas"
- Matérias com conteúdo: texto normal + badge verde "✓"
- Matérias sem conteúdo: texto atenuado (opacity 50%) + tooltip "Em breve"
- Link para "⚙️ Configurações" no final
- Em mobile: hamburger menu (botão no header), sidebar desliza pela esquerda com overlay

### F2 — Página Home (Dashboard)

**Descrição**: Tela inicial com visão geral do projeto.

**Elementos**:
- Hero com título e gradiente animado
- Contador de progresso: "X de Y matérias com conteúdo"
- Cards de acesso rápido às matérias disponíveis
- Seção "Como contribuir" com link para CONTRIBUTING.md
- Créditos: IFAL, BSI, contribuidores

### F3 — Página de Matéria (SubjectPage)

**Descrição**: Página genérica que renderiza o conteúdo de qualquer matéria.

**URL**: `/materia/:slug` (ex: `/materia/marketing-comercio-eletronico`)

**Com conteúdo**:
1. Hero com nome da matéria, período, carga horária, código
2. TopicNav: barra horizontal com pills para navegação entre seções (sticky)
3. Seções de conteúdo: renderizadas sequencialmente ou alternadas
4. Quiz estático: perguntas fixas com alternativas e feedback
5. Quiz IA: integração com Gemini

**Sem conteúdo**:
- Placeholder visual com ilustração/emoji
- Texto "Esta matéria ainda não tem conteúdo. Quer contribuir?"
- Botões: "Abrir Issue" + "Ver como contribuir"

### F4 — Configurações Globais (Settings)

**Descrição**: Página para configurações da aplicação.

**URL**: `/configuracoes`

**Funcionalidades**:
- Input para API Key do Gemini (tipo password, com toggle de visibilidade)
- Botão "Salvar" (persiste em `localStorage` com key `gemini_api_key`)
- Link direto para criar key: https://aistudio.google.com/apikey
- Aviso de privacidade: "Sua chave fica armazenada apenas neste navegador"
- Status: indicador visual se a key está configurada ou não

### F5 — Quiz Estático

**Descrição**: Quiz de múltipla escolha com perguntas fixas por matéria.

**Comportamento**:
- Cada pergunta tem 3-4 alternativas
- Ao clicar em uma alternativa:
  - Correta: fica verde + feedback de acerto
  - Incorreta: fica vermelha + feedback explicativo com a resposta certa
  - Demais alternativas ficam desabilitadas (opacity)
- Não há pontuação global no quiz estático (apenas visual)

### F6 — Quiz com IA (Gemini)

**Descrição**: Quiz gerado dinamicamente pela Gemini API.

**Pré-requisitos**:
- API key configurada na página de Settings
- Cada matéria fornece um `GUIDE_CONTEXT` (resumo do conteúdo para prompt)

**Comportamento**:
1. Usuário seleciona tema (específico ou aleatório) e dificuldade
2. Clica em "✨ Gerar Pergunta"
3. Loading com spinner e mensagens rotativas
4. Pergunta aparece com badge de tema + dificuldade
5. Ao responder: feedback + botão "→ Próxima Pergunta"
6. Score da sessão: acertos, erros, total, barra de progresso
7. Histórico das últimas 10 perguntas da sessão
8. Botão "Resetar" para zerar score

**Integração técnica**:
- Chamada direta à API `generativelanguage.googleapis.com`
- Modelo: `gemini-2.0-flash` (rápido e no tier gratuito)
- Response em JSON com: `pergunta`, `alternativas[]`, `respostaCorreta`, `explicacao`, `tema`, `dificuldade`

---

## Componentes UI Reutilizáveis

| Componente | Descrição | Props |
|-----------|-----------|-------|
| `ConceptCard` | Card com emoji, título, texto, cor de acento | emoji, title, description, accent |
| `HighlightBox` | Box de destaque com borda colorida | title, children, accent |
| `FlowDiagram` | Sequência horizontal com setas | items[], arrowColor |
| `PyramidChart` | Pirâmide visual com níveis | levels[] |
| `DemandList` | Lista vertical com numeração e bordas | items[] |
| `ComparisonTable` | Tabela comparativa com setas | headers[], rows[] |
| `QuizCard` | Pergunta + alternativas clicáveis | question, options[], onAnswer |
| `QuizFeedback` | Feedback de acerto/erro | isCorrect, message |
| `AIQuizGenerator` | Integração completa do quiz IA | context, topics[] |
| `TopicNav` | Pills de navegação horizontal | topics[], activeId |
| `SectionHero` | Hero de matéria | title, subtitle, accent |

---

## Estrutura de Dados

### Matéria (Subject)

```typescript
interface Subject {
  id: string;
  name: string;
  slug: string;
  code: string;
  period: number | 'optativa';
  axis: 'FB' | 'FPG' | 'FHS' | 'FPF' | 'EXT';
  hours: number;
  optativeCategory?: 'desenvolvimento' | 'gestao' | 'infraestrutura' | 'humanistica';
  hasContent: boolean;
  topics: Topic[];
}
```

### Tópico (Topic)

```typescript
interface Topic {
  id: string;
  title: string;
  shortTitle: string;
  component: React.ComponentType;
}
```

### Quiz Question

```typescript
interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  feedbackCorrect: string;
  feedbackWrong: string;
}
```

---

## Design System

### Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-bg` | `#0f0f12` | Fundo da aplicação |
| `--color-card` | `#1a1a22` | Background de cards |
| `--color-card-hover` | `#22222e` | Hover de cards |
| `--color-accent` | `#6C63FF` | Cor principal (roxo) |
| `--color-accent2` | `#FF6B6B` | Secundária (coral) |
| `--color-accent3` | `#4ECDC4` | Terciária (teal) |
| `--color-accent4` | `#FFE66D` | Quaternária (amarelo) |
| `--color-accent5` | `#A8E6CF` | Quinária (verde menta) |
| `--color-text` | `#e8e8f0` | Texto principal |
| `--color-text-muted` | `#9090a8` | Texto secundário |
| `--color-border` | `#2a2a3a` | Bordas |

### Tipografia

- **Display/Títulos**: Playfair Display (serif), 700/900
- **Body/UI**: Source Sans 3 (sans-serif), 300/400/600/700

### Animações

- `fadeIn`: opacity 0→1
- `bgFloat`: background gradient movement
- `spin`: loading spinner
- Hover transitions: `all 0.3s ease`
- Card hover: `translateY(-4px)` + box-shadow

---

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | HomePage | Dashboard de boas-vindas |
| `/materia/:slug` | SubjectPage | Página de qualquer matéria |
| `/configuracoes` | SettingsPage | Configurações (API key) |

---

## Persistência (localStorage)

| Key | Tipo | Descrição |
|-----|------|-----------|
| `gemini_api_key` | string | API key do Gemini |
| `ia_quiz_score_{slug}` | JSON | Score do quiz IA por matéria (opcional) |

---

## Segurança

- API key nunca é enviada a servidores próprios
- API key persiste apenas no navegador do usuário
- Nenhum dado pessoal é coletado
- `.gitignore` configurado para excluir `.env`, `node_modules`, etc.
- Branch protection no GitHub impede push direto em `main`
