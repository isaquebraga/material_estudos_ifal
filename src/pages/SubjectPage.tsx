import { useParams, NavLink } from 'react-router-dom';
import { getSubjectBySlug } from '../data/curriculum';
import MarketingContent from '../content/marketing-comercio-eletronico/MarketingContent';

const contentRegistry: Record<string, React.ComponentType> = {
  'marketing-comercio-eletronico': MarketingContent,
};

export default function SubjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const subject = slug ? getSubjectBySlug(slug) : undefined;

  if (!subject) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center animate-fade-in">
          <h1 className="font-display font-bold text-2xl text-text mb-2">Matéria não encontrada</h1>
          <p className="text-text-muted text-sm mb-6">O conteúdo que você procura não existe ou foi movido.</p>
          <NavLink to="/" className="px-4 py-2 bg-accent text-white rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all">
            Voltar ao início
          </NavLink>
        </div>
      </div>
    );
  }

  const ContentComponent = contentRegistry[subject.slug];

  if (!ContentComponent || !subject.hasContent) {
    return (
      <div className="flex-1 animate-fade-in">
        <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-bg-float"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(108,99,255,0.15) 0%, transparent 50%)' }}
            />
          </div>
          <p className="text-text-muted text-xs font-semibold tracking-widest uppercase relative z-10 mb-3">
            {subject.period === 'optativa' ? 'Optativa' : `${subject.period}º Período`} · {subject.hours}h · {subject.code}
          </p>
          <h1 className="font-display font-bold text-3xl text-text relative z-10 mb-2 tracking-tight">{subject.name}</h1>
          <p className="text-text-muted text-sm relative z-10 max-w-sm mb-6">
            Esta matéria ainda não tem conteúdo disponível. Quer ser o primeiro a contribuir?
          </p>
          <div className="flex gap-2 relative z-10">
            <a
              href="https://github.com/periclesanfe/material_estudos_ifal/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Abrir Issue
            </a>
            <a
              href="https://github.com/periclesanfe/material_estudos_ifal/blob/main/.github/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border text-text-muted rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all hover:text-text"
            >
              Como contribuir
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="study-surface p-5">
            <h2 className="font-semibold text-xs text-text-muted uppercase tracking-wider mb-4">Informações da Matéria</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Código', value: subject.code },
                { label: 'Carga Horária', value: `${subject.hours}h` },
                { label: 'Período', value: subject.period === 'optativa' ? 'Optativa' : `${subject.period}º` },
                { label: 'Eixo', value: subject.axis },
              ].map(info => (
                <div key={info.label} className="text-center">
                  <span className="text-text-muted text-[10px] font-semibold block mb-0.5 uppercase tracking-wider">{info.label}</span>
                  <span className="font-semibold text-sm text-text">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ContentComponent />;
}
