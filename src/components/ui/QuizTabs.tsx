import { useState, type ReactNode } from 'react';

type QuizFormat = 'quiz' | 'kahoot';
type QuizSource = 'normal' | 'ia';

interface QuizTabsProps {
  normal: ReactNode;
  ai: ReactNode;
  kahoot: ReactNode;
  aiKahoot: ReactNode;
}

const formatOptions: { id: QuizFormat; label: string }[] = [
  { id: 'quiz', label: 'Quiz' },
  { id: 'kahoot', label: 'Kahoot' },
];

const sourceOptions: { id: QuizSource; label: string }[] = [
  { id: 'normal', label: 'Normal' },
  { id: 'ia', label: 'IA' },
];

export default function QuizTabs({ normal, ai, kahoot, aiKahoot }: QuizTabsProps) {
  const [format, setFormat] = useState<QuizFormat>('quiz');
  const [source, setSource] = useState<QuizSource>('normal');

  const activeContent = {
    quiz: {
      normal,
      ia: ai,
    },
    kahoot: {
      normal: kahoot,
      ia: aiKahoot,
    },
  }[format][source];

  return (
    <div className="space-y-4">
      <div className="glass border border-border rounded-xl p-1.5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid grid-cols-2 gap-1.5 sm:w-auto" role="tablist" aria-label="Tipo de quiz">
          {formatOptions.map(option => (
            <button
              key={option.id}
              type="button"
              onClick={() => setFormat(option.id)}
              aria-selected={format === option.id}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 ${
                format === option.id
                  ? 'bg-accent text-white shadow-[0_8px_22px_rgba(108,99,255,0.26)]'
                  : 'text-text-muted hover:bg-card-hover hover:text-text'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-1.5 sm:w-auto" role="tablist" aria-label="Origem das perguntas">
          {sourceOptions.map(option => (
            <button
              key={option.id}
              type="button"
              onClick={() => setSource(option.id)}
              aria-selected={source === option.id}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 ${
                source === option.id
                  ? 'bg-accent text-white shadow-[0_8px_22px_rgba(108,99,255,0.26)]'
                  : 'text-text-muted hover:bg-card-hover hover:text-text'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>{activeContent}</div>
    </div>
  );
}
