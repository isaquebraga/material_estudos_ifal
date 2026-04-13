# Skill: Content Creation

## Objetivo
Criar conteúdo de uma nova matéria seguindo a estrutura do projeto.

## Passo a Passo

### 1. Preparação
- Reunir material-fonte: slides do professor, apostilas, PDFs
- Identificar os tópicos principais (6-15 seções)
- Verificar se a matéria já existe em `src/data/curriculum.ts`

### 2. Criar o arquivo de dados `data.ts`

```typescript
// src/content/<slug>/data.ts

import type { QuizQuestionData } from '../../components/ui/QuizCard';

// Resumo denso de todo o conteúdo, usado como contexto para a IA gerar perguntas
export const GUIDE_CONTEXT = `
...resumo completo aqui...
`;

// Tópicos para filtro do quiz IA
export const TOPICS = [
  { value: 'topico1', label: 'Nome do Tópico 1' },
  // ... pelo menos 5 tópicos
];

// Seções de navegação
export const SECTIONS = [
  { id: 'intro', title: 'Introdução', shortTitle: 'Introdução' },
  // ... todas as seções
  { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
  { id: 'iaquiz', title: 'Quiz com IA', shortTitle: 'Quiz IA' },
];

// Mínimo 10 perguntas de quiz estático
export const QUIZ_DATA: QuizQuestionData[] = [
  {
    id: 'q1',
    question: 'Pergunta aqui?',
    options: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
    correctIndex: 1,
    feedbackCorrect: 'Explicação do acerto.',
    feedbackWrong: 'Explicação do erro e resposta correta.',
  },
];
```

### 3. Criar o componente `<NomeDaMateria>Content.tsx`

Estrutura obrigatória:
- Hero com título, subtítulos de seção, e metadata (período, eixo, ch)
- Nav sticky com pills para cada seção
- Renderização condicional por `activeSection`
- Últimas 2 seções sempre: Quiz estático + Quiz IA

Componentes disponíveis:
- `ConceptCard` — conceitos com título + descrição
- `HighlightBox` — definições importantes
- `FlowDiagram` — sequências com setas
- `QuizCard` — perguntas fixas
- `AIQuizGenerator` — quiz IA completo

### 4. Registrar

1. Em `src/data/curriculum.ts` → marcar `hasContent: true`
2. Em `src/pages/SubjectPage.tsx` → adicionar ao `contentRegistry`

```typescript
import NomeDaMateriaContent from '../content/<slug>/NomeDaMateriaContent';

const contentRegistry: Record<string, React.ComponentType> = {
  // ...existentes
  '<slug>': NomeDaMateriaContent,
};
```

### 5. Verificar
- `npm run dev` — visual ok
- `npm run build` — sem erros
- Todas as seções navegáveis
- Quiz com pelo menos 10 perguntas
- Quiz IA funcional (com API key configurada)

## Referência: Matéria Modelo
Use `src/content/marketing-comercio-eletronico/` como referência.
