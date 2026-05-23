import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import AIKahootQuiz from '../../components/ui/AIKahootQuiz';
import ConceptCard from '../../components/ui/ConceptCard';
import ExamQuizSelector from '../../components/ui/ExamQuizSelector';
import FlowDiagram from '../../components/ui/FlowDiagram';
import HighlightBox from '../../components/ui/HighlightBox';
import QuizTabs from '../../components/ui/QuizTabs';
import {
    ADMINISTRACAO_PROJETO_BANCO_DADOS_GUIDE_CONTEXT,
    ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS
} from './data';
import {
    COMPORTAMENTO_ORGANIZACIONAL_GUIDE_CONTEXT,
    COMPORTAMENTO_ORGANIZACIONAL_TOPICS,
    QUIZ_DATA
} from "../comportamento-organizacional/data.ts";

interface AdministracaoProjetoBancoDadosSectionsProps {
    activeSection: string;
}

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    colorClass: string;
}

type Accent = 'accent' | 'accent2' | 'accent3' | 'accent4' | 'accent5';

interface ConceptItem {
    title: string;
    description: string;
    accent: Accent;
}

interface PanelItem {
    title: string;
    description: string;
}

interface StatItem {
    label: string;
    value: string;
    accent: string;
}


function SectionHeader({ title, subtitle, colorClass }: SectionHeaderProps) {
    return (
        <div className="space-y-2">
            <h2 className={`section-title ${colorClass}`}>{title}</h2>
            <p className="section-subtitle max-w-3xl">{subtitle}</p>
        </div>
    );
}

function ConceptGrid({ items, columns = 'md:grid-cols-2' }: { items: ConceptItem[]; columns?: string }) {
    return (
        <div className={`grid grid-cols-1 ${columns} gap-4`}>
            {items.map(item => (
                <ConceptCard key={item.title} title={item.title} description={item.description} accent={item.accent} />
            ))}
        </div>
    );
}

function PanelList({ items }: { items: PanelItem[] }) {
    return (
        <div className="space-y-3">
            {items.map(item => (
                <div key={item.title} className="bg-card border border-border rounded-xl px-5 py-4">
                    <h3 className="font-semibold text-sm md:text-base text-text mb-0.5">{item.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

function StatStrip({ items }: { items: StatItem[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {items.map(item => (
                <div key={item.label} className="bg-card border border-border rounded-xl px-5 py-5 text-center">
                    <p className={`font-display font-black text-2xl ${item.accent}`}>{item.label}</p>
                    <p className="text-text-muted text-sm">{item.value}</p>
                </div>
            ))}
        </div>
    );
}

const primeira_nota: ConceptItem[] = [
    {
        title: 'Projeto: Fase 1 - 2 Pontos',
        description: 'Consiste na modelagem de dados com Oracle Database Modeler. É dividido em 5 fases e feito em grupo de até 3 pessoas.',
        accent: 'accent',
    },

    {
        title: 'Projeto: Fase 2 - 2 Pontos',
        description: 'Provas individuais, sem consulta e dividida em 3 partes.',
        accent: 'accent',
    },
    {
        title: 'Prova 1 - Parte 1',
        description: 'Consiste na modelagem de dados com Oracle Database Modeler. É dividido em 5 fases e feito em grupo de até 3 pessoas.',
        accent: 'accent',
    },

    {
        title: 'Prova 1 - Parte 2',
        description: 'Provas individuais, sem consulta e dividida em 3 partes.',
        accent: 'accent',
    },
]

const segunda_nota: ConceptItem[] = [
    {
        title: 'Projeto: Fase 3 - 2 Pontos',
        description: 'Consiste na modelagem de dados com Oracle Database Modeler. É dividido em 5 fases e feito em grupo de até 3 pessoas.',
        accent: 'accent',
    },

    {
        title: 'Projeto: Fase 4 - 2 Pontos',
        description: 'Provas individuais, sem consulta e dividida em 3 partes.',
        accent: 'accent',
    },
    {
        title: 'Projeto: Fase 5 - 2 Pontos',
        description: 'Provas individuais, sem consulta e dividida em 3 partes.',
        accent: 'accent',
    },

    {
        title: 'Prova 2',
        description: 'Provas individuais, sem consulta e dividida em 3 partes.',
        accent: 'accent',
    },
]

function IntroSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="Conceitos Básicos" subtitle="Método de avaliação, projeto e softwares necessários." colorClass="text-accent" />

        </section>
    );
}

function ModelagemSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="Modelagem de Dados" subtitle="Tabelas, colunas, FK, PK, índices e etc." colorClass="text-accent"></SectionHeader>
        </section>
    )
}

function DdlSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="DDL" subtitle="" colorClass="text-accent"></SectionHeader>
        </section>
    )
}

function SegurancaSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="Segurança" subtitle="Usuários, senhas, recursos, papéis, backup e recovery e plano de recuperação de desastres." colorClass="text-accent"></SectionHeader>
        </section>
    )
}

function ArquiteturaSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="Arquitetura" subtitle="" colorClass="text-accent"></SectionHeader>
        </section>
    )
}

function GerenciamentoSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="Gerenciando o Banco de Dados" subtitle="" colorClass="text-accent"></SectionHeader>
        </section>
    )
}

function DicionarioDadosSection() {
    return (
        <section className="animate-fade-in space-y-6">
            <SectionHeader title="Dicionários de Dados" subtitle="" colorClass="text-accent"></SectionHeader>
        </section>
    )
}

function QuizSection() {
    return (
        <section className="animate-fade-in">
            <QuizTabs
                normal={<ExamQuizSelector questions={QUIZ_DATA} mode="quiz" />}
                ai={(
                    <div className="space-y-4">
                        <HighlightBox title="Como funciona?">
                            <p>
                                A IA usa os conteúdos selecionados de Comportamento Organizacional para gerar lotes de 1, 5 ou 10 perguntas inéditas com alternativas, resposta correta e explicação.
                            </p>
                        </HighlightBox>
                        <AIQuizGenerator guideContext={COMPORTAMENTO_ORGANIZACIONAL_GUIDE_CONTEXT} topics={COMPORTAMENTO_ORGANIZACIONAL_TOPICS} />
                    </div>
                )}
                kahoot={<ExamQuizSelector questions={QUIZ_DATA} mode="kahoot" />}
                aiKahoot={<AIKahootQuiz guideContext={COMPORTAMENTO_ORGANIZACIONAL_GUIDE_CONTEXT} topics={COMPORTAMENTO_ORGANIZACIONAL_TOPICS} />}
            />
        </section>
    );
}


export default function AdministracaoProjetoBancoDadosSections({ activeSection }: AdministracaoProjetoBancoDadosSectionsProps) {
    switch (activeSection) {
        case 'intro':
            return <IntroSection />;
        case 'modelagem':
            return <ModelagemSection />;
        case 'ddl':
            return <DdlSection />;
        case 'seguranca':
            return <SegurancaSection />;
        case 'arquitetura':
            return <ArquiteturaSection />;
        case 'gerenciando-instancia':
            return <GerenciamentoSection />;
        case 'dicionario-de-dados':
            return <DicionarioDadosSection />;
        case 'quiz':
            return <QuizSection />;
        case 'iaquiz':
            return <QuizSection />;
        default:
            return null;
    }
}
