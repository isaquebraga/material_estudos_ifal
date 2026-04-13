# Skill: Quiz Creation

## Objetivo
Criar perguntas de quiz de alta qualidade para revisão de matérias.

## Formato de Pergunta

```typescript
{
  id: 'q1',                    // Identificador único
  question: 'Texto?',         // Pergunta clara e direta
  options: ['A', 'B', 'C', 'D'], // 3-4 alternativas
  correctIndex: 0,             // Índice da correta (0-based)
  feedbackCorrect: '...',      // Explica POR QUE está certo
  feedbackWrong: '...',        // Explica o erro + resposta correta
}
```

## Diretrizes

### Qualidade das Perguntas
- Testar compreensão conceitual, não memorização
- Alternativas plausíveis (evitar absurdos óbvios)
- Apenas 1 resposta inequivocamente correta
- Feedback deve ensinar, não apenas dizer "certo/errado"

### Distribuição
- 30% fácil — definições diretas
- 50% médio — aplicação de conceitos
- 20% difícil — análise ou comparação

### Cobertura
- Mínimo 10 perguntas por matéria
- Todas as seções principais cobertas
- Pelo menos 2 perguntas por tópico central

### Proibido
- Pegadinhas ou truques linguísticos
- "Todas as alternativas" / "Nenhuma das alternativas"
- Perguntas negativadas desnecessárias
- Conteúdo que não está no material da matéria

## GUIDE_CONTEXT para Quiz IA

O `GUIDE_CONTEXT` é o resumo enviado ao Gemini como base. Deve:
- Cobrir TODOS os tópicos da matéria
- Ser denso e factual (sem opinião)
- Incluir termos-chave, definições, comparações
- Ter entre 1000-3000 caracteres
- Usar formato de lista numerada para organização
