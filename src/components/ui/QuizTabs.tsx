import { useState, type ReactNode } from 'react';

type QuizTabId = 'normal' | 'ia' | 'kahoot';

interface QuizTabsProps {
  normal: ReactNode;
  ai: ReactNode;
  kahoot: ReactNode;
}

const tabs: { id: QuizTabId; label: string }[] = [
  { id: 'normal', label: 'Quiz normal' },
  { id: 'ia', label: 'Quiz com IA' },
  { id: 'kahoot', label: 'Kahoot' },
];

export default function QuizTabs({ normal, ai, kahoot }: QuizTabsProps) {
  const [activeTab, setActiveTab] = useState<QuizTabId>('normal');

  const activeContent = {
    normal,
    ia: ai,
    kahoot,
  }[activeTab];

  return (
    <div className="space-y-5">
      <div className="glass border border-border rounded-xl p-1.5 flex gap-1.5 overflow-x-auto whitespace-nowrap">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 ${
              activeTab === tab.id
                ? 'bg-accent text-white shadow-[0_8px_22px_rgba(108,99,255,0.26)]'
                : 'text-text-muted hover:bg-card-hover hover:text-text'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{activeContent}</div>
    </div>
  );
}
