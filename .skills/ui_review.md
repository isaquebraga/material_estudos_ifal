# Skill: UI Review

## Objetivo
Avaliar e corrigir problemas visuais em componentes React.

## Checklist de Revisão

### Layout
- [ ] Alinhamento consistente entre cards (grid simétrico)
- [ ] Responsividade: mobile (1 col), tablet (2 col), desktop (3-4 col)
- [ ] Overflow controlado: `overflow-hidden` ou `overflow-x-auto` onde necessário
- [ ] Sidebar não sobrepõe o conteúdo principal
- [ ] Scrolling suave sem jumps

### Tipografia
- [ ] Hierarquia clara: h1 > h2 > h3 > body > caption
- [ ] Fonte display (`font-display`) apenas para títulos
- [ ] Tamanhos: h1=`text-2xl`/`text-3xl`, h2=`text-xl`, h3=`text-sm font-semibold`, body=`text-xs`/`text-sm`
- [ ] Labels: `text-[10px] uppercase tracking-wider font-semibold`

### Cores
- [ ] Texto principal: `text-text`
- [ ] Texto secundário: `text-text-muted`
- [ ] Accents usados com parcimônia (título de card, badges, links)
- [ ] Contraste suficiente em todos os elementos

### Componentes
- [ ] Cards: `bg-card border border-border rounded-xl p-5`
- [ ] Botões primários: `bg-accent text-white rounded-lg px-4 py-2 text-xs font-semibold`
- [ ] Botões secundários: `border border-border text-text-muted rounded-lg`
- [ ] Inputs: `bg-bg border border-border rounded-lg px-3 py-2.5 text-xs`
- [ ] Badges: `text-[10px] px-2 py-0.5 rounded bg-accent/10 text-accent`

### Interação
- [ ] `card-hover` em cards clicáveis
- [ ] `transition-all duration-200` em botões
- [ ] `hover:-translate-y-0.5` para elevação sutil
- [ ] Focus states: `focus:outline-none focus:border-accent`
- [ ] Disabled states: `disabled:opacity-40 disabled:cursor-not-allowed`

## Padrão de Espaçamento
```
Página: px-6 py-8/py-12
Seções: space-y-5
Cards: p-5, gap-3
Internos: gap-2, mb-1/mb-2
```
