# 🤝 Contribuindo para o IFAL BSI — Material de Estudo

Obrigado por querer contribuir! Este guia explica como adicionar conteúdo e respeitar os padrões do projeto.

---

## 📋 Pré-requisitos

- Node.js 18+ e npm
- Git
- Uma conta no GitHub

## 🔀 Fluxo de Contribuição

### 1. Fork e Clone

```bash
# Fork pelo GitHub, depois clone
git clone https://github.com/SEU_USUARIO/material_estudos_ifal.git
cd material_estudos_ifal
npm install
```

### 2. Crie uma branch

```bash
git checkout -b feat/nome-da-materia-topico
# Exemplos:
# feat/banco-dados-normalizacao
# fix/corrige-quiz-maslow
# docs/atualiza-readme
```

### 3. Adicione seu conteúdo

#### Para uma matéria NOVA:

1. Crie a pasta: `src/content/slug-da-materia/`
2. Crie `data.ts` com:
   - `GUIDE_CONTEXT` — resumo do conteúdo para a IA
   - `TOPICS` — lista de temas para o quiz IA
   - `SECTIONS` — lista de seções da matéria
   - `QUIZ_DATA` — pelo menos 10 perguntas de quiz
3. Crie `NomeDaMateriaContent.tsx` — componente React com todas as seções
4. Registre em `src/pages/SubjectPage.tsx` no `contentRegistry`
5. Marque `hasContent: true` em `src/data/curriculum.ts`

#### Para conteúdo EXISTENTE:

1. Edite os arquivos na pasta `src/content/slug-da-materia/`
2. Adicione novas seções ou corrija as existentes

### 4. Teste localmente

```bash
npm run dev     # Verifique visualmente
npm run build   # Garanta que compila
```

### 5. Commit e Push

```bash
git add .
git commit -m "feat: adiciona conteúdo de Banco de Dados - Normalização"
git push origin feat/banco-dados-normalizacao
```

### 6. Abra um Pull Request

- Use o template de PR fornecido
- Descreva as matérias afetadas
- Marque o checklist

---

## 📐 Padrões de Código

- **TypeScript** — tipagem estrita, sem `any`
- **Componentes React** — funcional com hooks
- **Tailwind CSS** — use as classes do design system
- **Commits** em **português**, formato: `tipo: descrição`
  - `feat:` — novo conteúdo ou funcionalidade
  - `fix:` — correção de bug ou erro no conteúdo
  - `docs:` — documentação
  - `style:` — formatação (sem mudança de lógica)

## 🚫 Regras Importantes

- ❌ **Nunca** inclua API keys ou credenciais
- ❌ **Nunca** faça push direto na `main`
- ❌ **Nunca** copie conteúdo protegido sem autorização
- ✅ **Sempre** cite fontes e professores
- ✅ **Sempre** teste localmente antes do PR
- ✅ **Sempre** siga a estrutura de componentes existente

---

## 🧩 Componentes UI Disponíveis

Reutilize os componentes em `src/components/ui/`:

| Componente | Uso |
|-----------|-----|
| `ConceptCard` | Cards com emoji, título e descrição |
| `HighlightBox` | Caixa de destaque para definições |
| `FlowDiagram` | Diagrama de fluxo com setas |
| `QuizCard` | Pergunta de quiz com feedback |
| `AIQuizGenerator` | Integração completa com quiz IA |

## ❓ Dúvidas?

Abra uma [Issue](../../issues) ou entre em contato com os mantenedores.
