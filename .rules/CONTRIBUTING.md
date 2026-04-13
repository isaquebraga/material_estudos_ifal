# Regras de Contribuição

## Código

- TypeScript estrito, sem `any`
- Componentes React funcionais com hooks
- Tailwind CSS v4 — use as classes do design system, não crie estilos arbitrários
- Commits em português, formato semântico: `feat:`, `fix:`, `docs:`, `style:`

## Conteúdo

- Cada matéria deve viver em `src/content/<slug-da-materia>/`
- Conteúdo derivado exclusivamente de materiais disponibilizados por professores
- Crédito obrigatório ao professor e fontes bibliográficas
- Linguagem acadêmica e acessível
- Mínimo 10 perguntas de quiz por matéria

## Fluxo de PR

- Nunca push direto na `main`
- Branch com prefixo: `feat/`, `fix/`, `docs/`
- PR com template preenchido
- Mínimo 1 review aprovado

## Segurança

- Nunca commitar API keys, tokens ou credenciais
- API key do Gemini é exclusivamente client-side (localStorage)
- `.env` e derivados estão no `.gitignore`
