import { NavLink } from 'react-router-dom';
import { getSubjectsWithContent, getTotalSubjects, getSubjectsWithContentCount } from '../data/curriculum';

export default function HomePage() {
  const subjectsWithContent = getSubjectsWithContent();
  const totalSubjects = getTotalSubjects();
  const contentCount = getSubjectsWithContentCount();
  const progressPercent = Math.round((contentCount / totalSubjects) * 100);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-bg-float"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(108,99,255,0.12) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(78,205,196,0.06) 0%, transparent 50%)
              `
            }}
          />
        </div>
        <p className="text-text-muted text-xs font-semibold tracking-widest uppercase relative z-10 mb-4">Bacharelado em Sistemas de Informação · IFAL</p>
        <h1 className="font-display font-black text-5xl md:text-7xl text-text relative z-10 mb-4 leading-[1.1] tracking-tight">
          Material de<br /><span className="gradient-text">Estudo</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg relative z-10 max-w-lg leading-relaxed">
          Repositório colaborativo com conteúdos organizados por matéria, quizzes interativos e geração de perguntas por IA.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20 space-y-10">
        {/* Progress */}
        <div className="study-surface p-6">
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="font-semibold text-sm text-text-muted uppercase tracking-wide">Progresso do Conteúdo</h2>
            <span className="text-accent font-bold text-sm tabular-nums">{contentCount}/{totalSubjects} matérias</span>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${Math.max(progressPercent, 2)}%`,
                background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent3))',
              }}
            />
          </div>
        </div>

        {/* Available Subjects */}
        {subjectsWithContent.length > 0 && (
          <div>
            <h2 className="font-display font-bold text-xl text-text mb-5">Matérias Disponíveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {subjectsWithContent.map(subject => (
                <NavLink
                  key={subject.id}
                  to={`/materia/${subject.slug}`}
                  className="study-surface study-surface-hover px-5 py-4 group flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-sm text-text group-hover:text-accent transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-text-muted text-xs mt-0.5">
                      {subject.period === 'optativa' ? 'Optativa' : `${subject.period}º Período`} · {subject.hours}h · {subject.code}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              ))}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Períodos', value: '8' },
            { label: 'Matérias', value: String(totalSubjects) },
            { label: 'Com conteúdo', value: String(contentCount) },
            { label: 'Quiz IA', value: '∞' },
          ].map(stat => (
            <div key={stat.label} className="study-surface p-4 text-center">
              <span className="font-display font-black text-xl text-text block">{stat.value}</span>
              <span className="text-text-muted text-[10px] font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Contribute CTA */}
        <div className="study-surface p-6 flex items-center justify-between gap-6">
          <div>
            <h3 className="font-semibold text-sm text-text mb-1">Quer contribuir?</h3>
            <p className="text-text-muted text-xs">
              Adicione conteúdo de qualquer matéria seguindo nosso guia de contribuição.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href="https://github.com/periclesanfe/material_estudos_ifal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              Ver no GitHub
            </a>
            <NavLink
              to="/configuracoes"
              className="px-4 py-2 border border-border text-text-muted rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all duration-200 hover:text-text"
            >
              Configurar Quiz IA
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
