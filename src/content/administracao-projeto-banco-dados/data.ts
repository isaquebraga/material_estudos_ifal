import type { QuizQuestionData, QuizTopicOption } from '../../components/ui/QuizCard';

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_GUIDE_CONTEXT = `
//TODO
`;

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_TOPICS: QuizTopicOption[] = [
    {
        value: 'prova1',
        label: 'Prova 1: Parte 1',
        prompt: 'Conteúdo: Modelagem',
    },
    {
        value: 'prova1-parte2',
        label: 'Prova 1: Parte 2',
        prompt: 'Conteúdo da Prova: DDL, Segurança e Gerenciamento de Banco de Dados',
    },
    { value: 'modelagem', label: 'Usuários: Criação e Administração' },
    { value: 'ddl', label: 'DDL' },
    { value: 'seguranca', label: 'Segurança' },
    { value: 'arquitetura', label: 'Arquitetura' },
    { value: 'gerenciando-instancia', label: 'Gerenciando a Instância' },
    { value: 'dicionario-de-dados', label: 'Dicionário de Dados' },

];

export const ADMINISTRACAO_PROJETO_BANCO_DADOS_SECTIONS = [
    { id: 'intro', title: 'Introdução ao CO', shortTitle: 'Introdução', exam: 'P1' },
    { id: 'modelagem', title: 'SQL Data Modeler', shortTitle: 'SQL Data Modeler', exam: 'P1' },
    { id: 'ddl', title: 'DDL', shortTitle: 'DDL', exam: 'P1' },
    { id: 'seguranca', title: 'Segurança', shortTitle: 'Segurança', exam: 'P1' },
    { id: 'arquitetura', title: 'Arquitetura', shortTitle: 'Arquitetura', exam: 'P1' },
    { id: 'gerenciando-instancia', title: 'Gerenciando a Instância', shortTitle: 'Gerenciamento', exam: 'P1' },
    { id: 'dicionario-de-dados', title: 'Dicionário de Dados', shortTitle: 'Dicionário de Dados', exam: 'P1' },
    { id: 'quiz', title: 'Quiz de Revisão', shortTitle: 'Quiz' },
];