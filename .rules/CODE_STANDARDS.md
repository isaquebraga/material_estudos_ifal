# Padrões de Código

## Estrutura de uma matéria

```
src/content/<slug>/
├── data.ts              # GUIDE_CONTEXT, TOPICS, SECTIONS, QUIZ_DATA
└── <NomeDaMateria>Content.tsx  # Componente principal
```

## Registrando uma matéria nova

1. Adicionar dados em `src/data/curriculum.ts` (se não existir)
2. Marcar `hasContent: true`
3. Registrar no `contentRegistry` em `src/pages/SubjectPage.tsx`

## Componentes UI reutilizáveis

| Componente | Uso |
|-----------|-----|
| `ConceptCard` | Card de conceito com título e descrição |
| `HighlightBox` | Destaque para definições importantes |
| `FlowDiagram` | Sequência com setas |
| `QuizCard` | Pergunta de quiz estático |
| `AIQuizGenerator` | Integração com quiz IA |

## Naming conventions

- Slugs: kebab-case (`marketing-comercio-eletronico`)
- Componentes: PascalCase (`MarketingContent.tsx`)
- Dados: camelCase (`quizData`)
