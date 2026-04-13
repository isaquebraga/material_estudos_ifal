# Skill: Code Review

## Objetivo
Revisar código de PRs para manter qualidade e consistência.

## Checklist

### TypeScript
- [ ] Sem `any` — tipagem estrita
- [ ] Interfaces antes de implementação
- [ ] `type` imports com `import type`
- [ ] Props tipadas explicitamente

### React
- [ ] Componentes funcionais com hooks
- [ ] Sem efeitos colaterais em renders
- [ ] Dependências corretas em `useEffect`
- [ ] Keys únicas em listas
- [ ] Sem re-renders desnecessários (memoization se necessário)

### Tailwind / CSS
- [ ] Usa classes do design system (variáveis CSS)
- [ ] Sem valores hardcoded de cor
- [ ] Responsividade: breakpoints `md:` e `lg:`
- [ ] Sem `!important`

### Estrutura
- [ ] Arquivo na pasta correta (`components/`, `content/`, `pages/`)
- [ ] Componente < 150 linhas
- [ ] Imports organizados
- [ ] Sem código morto ou comentado
- [ ] Sem `console.log` restante

### Segurança
- [ ] Sem API keys ou tokens
- [ ] `dangerouslySetInnerHTML` usado apenas com dados controlados
- [ ] Links externos com `rel="noopener noreferrer"`

### Conteúdo (se PR de matéria)
- [ ] Fontes citadas
- [ ] Quiz com mínimo 10 perguntas
- [ ] Registrado no `contentRegistry`
- [ ] `hasContent: true` em `curriculum.ts`
