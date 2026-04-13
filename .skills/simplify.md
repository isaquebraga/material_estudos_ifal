# Skill: Simplify

## Objetivo
Reduzir complexidade visual e de código sem perder funcionalidade.

## Regras

### Visual
- Remover todos os emojis de interfaces
- Preferir ícones SVG inline ou texto simples
- Reduzir gradientes — máximo 1 por página (no hero)
- Bordas sutis: `border-border` (1px), nunca bordas grossas ou coloridas excessivas
- Espaçamento consistente: usar `gap-2`, `gap-3`, nunca acima de `gap-6`
- Tipografia: títulos `text-sm` a `text-2xl`, corpo `text-xs` a `text-sm`
- Cores: usar as variáveis do design system, nunca valores hardcoded
- Animações: apenas `animate-fade-in` para transições de seção

### Código
- Componentes com no máximo 150 linhas
- Se ultrapassar, extrair subcomponentes
- Props com no máximo 5 propriedades
- Remover props não utilizadas
- Eliminar `any` — tipar tudo
- Imports agrupados: React → libs → componentes → dados → tipos

### Conteúdo
- Frases diretas, sem rodeios
- Títulos curtos (máximo 5 palavras)
- Descrições em 1-2 linhas
- Evitar adjetivos desnecessários ("incrível", "fantástico", "revolucionário")

## Checklist de Simplificação
- [ ] Sem emojis na UI
- [ ] Sem gradientes desnecessários
- [ ] Componentes abaixo de 150 linhas
- [ ] Tipografia consistente
- [ ] Espaçamento uniforme
- [ ] Cores do design system
