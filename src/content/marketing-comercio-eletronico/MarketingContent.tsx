import { useState } from 'react';
import ConceptCard from '../../components/ui/ConceptCard';
import HighlightBox from '../../components/ui/HighlightBox';
import FlowDiagram from '../../components/ui/FlowDiagram';
import QuizCard from '../../components/ui/QuizCard';
import AIQuizGenerator from '../../components/ui/AIQuizGenerator';
import { MARKETING_GUIDE_CONTEXT, MARKETING_TOPICS, MARKETING_SECTIONS, QUIZ_DATA } from './data';

export default function MarketingContent() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-bg-float"
            style={{
              background: `
                radial-gradient(circle at 30% 40%, rgba(108,99,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(255,107,107,0.08) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(78,205,196,0.06) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        <p className="text-text-muted text-sm font-semibold tracking-[0.2em] uppercase relative z-10 mb-4">Optativa · Gestão de TI · 80h</p>
        <h1 className="font-display font-black text-4xl md:text-5xl text-text relative z-10 mb-3 leading-[1.1] tracking-tight">
          Marketing &<br /><span className="gradient-text">Comércio Eletrônico</span>
        </h1>
        <p className="text-text-muted text-sm relative z-10 max-w-lg">
          Conceitos Iniciais · Mix de Marketing · Marketing de Relacionamento · Pesquisa · Segmentação
        </p>
      </div>

      {/* Topic Nav */}
      <nav className="sticky top-0 z-40 glass border-b border-border px-4 py-3 flex gap-2 overflow-x-auto justify-center flex-wrap">
        {MARKETING_SECTIONS.map(section => (
          <button
            key={section.id}
            onClick={() => {
              setActiveSection(section.id);
              window.scrollTo({ top: 260, behavior: 'smooth' });
            }}
            className={`study-pill px-5 py-2 whitespace-nowrap ${
              activeSection === section.id
                ? 'active'
                : ''
            }`}
          >
            {section.shortTitle}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-6 pt-10 pb-24">
        {/* INTRO */}
        {activeSection === 'intro' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent">O que é Marketing?</h2>
              <p className="section-subtitle">Definições fundamentais</p>
            </div>
            <HighlightBox title="Definição Clássica (Philip Kotler)">
              <p>Marketing é a atividade dirigida para a <strong>satisfação das necessidades e desejos</strong>, por meio dos <strong>processos de troca</strong>. É um processo social e gerencial pelo qual pessoas e grupos obtêm aquilo que necessitam e desejam com a criação, oferta e negociação de produtos e serviços de valor.</p>
              <p className="mt-2 font-semibold text-accent text-sm">Resumo: Marketing = suprir necessidades gerando lucro.</p>
            </HighlightBox>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ConceptCard title="Identifica necessidades" description="O marketing envolve a identificação e satisfação das necessidades humanas e sociais." accent="accent" />
              <ConceptCard title="Não cria necessidades" description="O marketing <strong>não cria necessidades</strong> — todos nascemos com elas. O marketing <strong>cria desejos</strong>, direcionando as necessidades a objetos específicos." accent="accent2" />
              <ConceptCard title="Gera competitividade" description="As empresas devem realizar trocas de forma <strong>mais eficiente que os concorrentes</strong>, trazendo impactos positivos." accent="accent3" />
              <ConceptCard title="Importância" description="O marketing inspira aprimoramentos em produtos existentes e gera demanda, criando postos de trabalho." accent="accent4" />
            </div>
            <HighlightBox title="Quem faz o marketing?">
              <p>O <strong>profissional de marketing</strong> é alguém que busca uma resposta (atenção, compra, voto, doação) de outra parte, denominada <strong>cliente potencial (prospect)</strong>.</p>
            </HighlightBox>
          </section>
        )}

        {/* CONCEITOS */}
        {activeSection === 'conceitos' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent2">Conceitos Centrais</h2>
              <p className="section-subtitle">As bases teóricas que sustentam o marketing</p>
            </div>
            <FlowDiagram items={['Necessidade', 'Desejo', 'Demanda', 'Oferta', 'Troca', 'Satisfação']} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ConceptCard title="Necessidades" description="Requisitos básicos do ser humano: ar, comida, roupa, abrigo. São inerentes, não criadas pelo marketing." accent="accent" />
              <ConceptCard title="Desejos" description="Necessidades direcionadas a <strong>objetos específicos</strong>. Ex: a necessidade é se alimentar, o desejo é comer um hambúrguer gourmet." accent="accent2" />
              <ConceptCard title="Demandas" description="Desejos por produtos específicos sustentados pela <strong>capacidade de comprá-los</strong>." accent="accent3" />
              <ConceptCard title="Oferta" description="Proposta tangível ou intangível de mercado, posicionada na mente dos consumidores-alvo." accent="accent4" />
              <ConceptCard title="Marca" description="Oferta de uma fonte conhecida. Empresas se esforçam para construir imagem de marca <strong>sólida, favorável e exclusiva</strong>." accent="accent5" />
              <ConceptCard title="Valor" description="Relação entre benefícios e custos. <strong>Tríade do valor:</strong> qualidade, serviço e preço." accent="accent" />
            </div>

            <h3 className="font-display font-bold text-2xl text-accent2 mt-8">5 Tipos de Necessidades</h3>
            <div className="space-y-1.5">
              {['Declaradas — O que o cliente diz que quer', 'Reais — O que ele realmente precisa', 'Não declaradas — Expectativas implícitas', '"Algo mais" — Bônus desejados', 'Secretas — Motivações ocultas'].map((need, i) => (
                <div key={i} className="bg-card border-l-4 border-accent rounded-r-xl px-5 py-3.5 text-sm text-text">
                  <strong className="text-accent">{i + 1}.</strong> {need}
                </div>
              ))}
            </div>

            <h3 className="font-display font-bold text-2xl text-accent3 mt-8">Satisfação do Cliente</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { title: 'Decepção', desc: 'Desempenho < Expectativa', color: 'var(--color-accent2)' },
                { title: 'Satisfação', desc: 'Desempenho = Expectativa', color: 'var(--color-accent4)' },
                { title: 'Encantamento', desc: 'Desempenho > Expectativa', color: 'var(--color-accent5)' },
              ].map(sat => (
                <div key={sat.title} className="text-center p-6 bg-card border border-border rounded-2xl">
                  <h4 className="font-semibold text-base mb-0.5" style={{ color: sat.color }}>{sat.title}</h4>
                  <p className="text-text-muted text-sm">{sat.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* APLICAÇÃO */}
        {activeSection === 'aplicacao' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent3">A que se aplica o Marketing?</h2>
              <p className="section-subtitle">O marketing vai muito além de produtos físicos</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {['Bens', 'Serviços', 'Eventos', 'Experiências', 'Pessoas', 'Lugares', 'Propriedades', 'Organizações', 'Informações', 'Ideias'].map(item => (
                <div key={item} className="bg-card border border-border rounded-xl p-4 text-center card-hover">
                  <span className="text-sm font-semibold text-text">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DEMANDA */}
        {activeSection === 'demanda' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent4">Tipos de Demanda</h2>
              <p className="section-subtitle">8 estados de demanda que o profissional de marketing deve conhecer</p>
            </div>
            <div className="space-y-2">
              {[
                { num: 1, title: 'Demanda Negativa', desc: 'Consumidores evitam ou rejeitam o produto.' },
                { num: 2, title: 'Demanda Inexistente', desc: 'Consumidores não conhecem ou não se interessam.' },
                { num: 3, title: 'Demanda Latente', desc: 'Há necessidade forte, mas nenhum produto a satisfaz.' },
                { num: 4, title: 'Demanda em Declínio', desc: 'Consumidores reduzem ou param de comprar.' },
                { num: 5, title: 'Demanda Irregular', desc: 'Compras sazonais — variam conforme época.' },
                { num: 6, title: 'Demanda Plena', desc: 'Situação ideal — consumidores compram adequadamente.' },
                { num: 7, title: 'Demanda Excessiva', desc: 'Mais consumidores do que produtos disponíveis.' },
                { num: 8, title: 'Demanda Indesejada', desc: 'Atração por produtos com consequências negativas.' },
              ].map(d => (
                <div key={d.num} className="bg-card border border-border rounded-xl px-5 py-4 flex items-start gap-4">
                  <span className="font-display font-black text-2xl text-accent tabular-nums w-7 flex-shrink-0">{d.num}</span>
                  <div>
                    <h4 className="font-semibold text-base text-text">{d.title}</h4>
                    <p className="text-text-muted text-sm">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MASLOW */}
        {activeSection === 'maslow' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent5">Pirâmide de Maslow</h2>
              <p className="section-subtitle">Hierarquia das necessidades humanas</p>
            </div>
            <div className="flex flex-col items-center gap-1 my-6">
              {[
                { label: '5. Auto-realização', width: 40, color: '#9b59b6' },
                { label: '4. Estima', width: 55, color: '#3498db' },
                { label: '3. Sociais', width: 70, color: '#2ecc71' },
                { label: '2. Segurança', width: 85, color: '#f39c12' },
                { label: '1. Fisiológicas', width: 100, color: '#e74c3c' },
              ].map(level => (
                <div
                  key={level.label}
                  className="flex items-center justify-center text-white font-semibold text-sm rounded-md px-3 py-3"
                  style={{ width: `${level.width}%`, maxWidth: '480px', background: level.color }}
                >
                  {level.label}
                </div>
              ))}
            </div>
            <HighlightBox title="Por que isso importa para o Marketing?">
              <p>Entender em que nível da pirâmide o consumidor está ajuda a <strong>posicionar produtos e mensagens</strong> de forma eficaz.</p>
            </HighlightBox>
          </section>
        )}

        {/* 4 Ps */}
        {activeSection === '4ps' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent">Os 4 Ps do Marketing</h2>
              <p className="section-subtitle">O Mix de Marketing clássico de McCarthy</p>
            </div>
            <HighlightBox title="O que é o Mix de Marketing?">
              <p>Conjunto de ferramentas para alcançar objetivos de marketing no mercado-alvo. A finalidade é <strong>gerar desejo de compra</strong> no consumidor.</p>
            </HighlightBox>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: 'Produto (Product)', desc: 'O que será oferecido ao cliente. Deve <strong>agregar valor</strong> e se destacar.', accent: 'accent' as const },
                { title: 'Preço (Price)', desc: 'Permite a <strong>gestão financeira</strong>. Único componente que gera receita.', accent: 'accent2' as const },
                { title: 'Praça (Place)', desc: 'Como o cliente chega ao produto. Toda a <strong>logística de distribuição</strong>.', accent: 'accent3' as const },
                { title: 'Promoção (Promotion)', desc: '<strong>Divulgação</strong> do produto ao público-alvo.', accent: 'accent4' as const },
              ].map(p => (
                <ConceptCard key={p.title} title={p.title} description={p.desc} accent={p.accent} />
              ))}
            </div>
          </section>
        )}

        {/* 8 Ps */}
        {activeSection === '8ps' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent2">A Evolução: 8 Ps</h2>
              <p className="section-subtitle">Os 4 Ps já não representam todo o cenário do marketing moderno</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { num: 1, name: 'Produto', isNew: false },
                { num: 2, name: 'Preço', isNew: false },
                { num: 3, name: 'Praça', isNew: false },
                { num: 4, name: 'Promoção', isNew: false },
                { num: 5, name: 'Pessoas', isNew: true },
                { num: 6, name: 'Processos', isNew: true },
                { num: 7, name: 'Posicionamento', isNew: true },
                { num: 8, name: 'Performance', isNew: true },
              ].map(p => (
                <div key={p.num} className={`bg-card rounded-lg p-3 text-center border ${p.isNew ? 'border-accent2/40' : 'border-border'}`}>
                  <span className={`font-display text-lg font-black block ${p.isNew ? 'text-accent2' : 'text-accent'}`}>{p.num}</span>
                  <span className="font-semibold text-sm text-text">{p.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4 Cs */}
        {activeSection === '4cs' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent3">Os 4 Cs do Marketing</h2>
              <p className="section-subtitle">A visão do marketing centrada no cliente</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">4 Ps (Empresa)</th>
                    <th className="py-2.5 px-2 w-8"></th>
                    <th className="text-left py-3 px-4 font-semibold text-text-muted uppercase tracking-wider text-xs">4 Cs (Cliente)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Produto', 'Cliente', 'Cujos desejos devem ser satisfeitos'],
                    ['Preço', 'Custo', 'Valor que o cliente considera justo'],
                    ['Praça', 'Conveniência', 'Facilidade de acesso'],
                    ['Promoção', 'Comunicação', 'Canal para o consumidor'],
                  ].map(([p, c, desc]) => (
                    <tr key={p} className="border-b border-border/50">
                      <td className="py-3 px-4 font-semibold text-text">{p}</td>
                      <td className="py-3 px-2 text-center text-text-muted">→</td>
                      <td className="py-3 px-4"><strong className="text-accent3">{c}</strong> — <span className="text-text-muted">{desc}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* MKT RELACIONAMENTO */}
        {activeSection === 'mktrel' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent2">Marketing de Relacionamento</h2>
              <p className="section-subtitle">Fidelizar é mais rentável do que conquistar novos clientes</p>
            </div>
            <HighlightBox title="O que é?">
              <p>Conjunto de estratégias que tem como objetivo <strong>fidelizar clientes</strong>. A empresa oferece <strong>benefícios</strong> para garantir a satisfação e o sucesso dos seus clientes.</p>
            </HighlightBox>
            <FlowDiagram items={['Atrair', 'Conquistar', 'Reter', 'Fidelizar', 'Divulgador']} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <ConceptCard title="Relacionamento > Transação" description="Foco no <strong>relacionamento contínuo</strong>, não na venda única." accent="accent2" />
              <ConceptCard title="Tratamento Diferenciado" description="Benefícios exclusivos e atendimento personalizado." accent="accent3" />
              <ConceptCard title="Efeito Multiplicador" description="Clientes satisfeitos geram o <strong>efeito boca a boca</strong>." accent="accent4" />
            </div>
          </section>
        )}

        {/* 15 CARACTERÍSTICAS */}
        {activeSection === '15carac' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent4">15 Características</h2>
              <p className="section-subtitle">O que define um bom Marketing de Relacionamento</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {[
                'Aplicar informações', 'Identificar o cliente', 'Identificar necessidades',
                'Criar conversas', 'Criar proximidade', 'Aprimorar processos',
                'Criar valor', 'Gerar confiança', 'Aumentar ganhos',
                'Conquistar novos clientes', 'Branding', 'Aumentar faturamento',
                'Fortalecer a cultura', 'Reinventar processos', 'Sustentabilidade',
              ].map((char, i) => (
                <div key={i} className="bg-card rounded-xl px-4 py-3 border border-border flex items-center gap-3">
                  <span className="text-accent text-xs font-bold tabular-nums w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm text-text">{char}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FERRAMENTAS */}
        {activeSection === 'ferramentas' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent5">Ferramentas e Estratégias</h2>
              <p className="section-subtitle">Como colocar o Marketing de Relacionamento em prática</p>
            </div>
            <div className="space-y-2">
              {[
                { title: 'Gestão de Redes Sociais', desc: 'As empresas devem estar atentas e responder a qualquer tipo de feedback.' },
                { title: 'Programas de Fidelidade', desc: 'Benefícios exclusivos para retenção: pontos, descontos, brindes.' },
                { title: 'Email Marketing', desc: 'Envio de informações relevantes: conteúdos, aniversários, ofertas.' },
                { title: 'CRM', desc: 'Customer Relationship Management — registra todos os pontos de contato e histórico.' },
                { title: 'WhatsApp Business', desc: 'Catálogo de produtos, respostas automáticas e tags de organização.' },
              ].map(tool => (
                <div key={tool.title} className="bg-card border border-border rounded-xl px-5 py-4">
                  <h3 className="font-semibold text-base text-accent mb-0.5">{tool.title}</h3>
                  <p className="text-text-muted text-sm">{tool.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PESQUISA */}
        {activeSection === 'pesquisa' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent3">Pesquisa de Marketing</h2>
              <p className="section-subtitle">Coleta e análise de informações para decisões estratégicas</p>
            </div>
            <HighlightBox title="O que é?">
              <p>Atividades sistemáticas de <strong>concepção, coleta, análise e edição</strong> de relatórios e conclusões relevantes sobre situações de marketing.</p>
            </HighlightBox>
            <FlowDiagram items={['Definição', 'Plano', 'Coleta', 'Análise', 'Resultados', 'Decisão']} />
          </section>
        )}

        {/* SEGMENTAÇÃO */}
        {activeSection === 'segmentacao' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent">Segmentação de Mercado</h2>
              <p className="section-subtitle">Identificando e atendendo grupos específicos de consumidores</p>
            </div>
            <HighlightBox title="O que é?">
              <p>Processo de <strong>dividir um mercado em grupos de compradores</strong> com semelhantes necessidades, desejos ou comportamentos.</p>
            </HighlightBox>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ConceptCard title="Geográfica" description="Por <strong>localização</strong>: países, regiões, cidades." accent="accent" />
              <ConceptCard title="Demográfica" description="Por <strong>características mensuráveis</strong>: idade, sexo, renda." accent="accent2" />
              <ConceptCard title="Psicográfica" description="Por <strong>personalidade</strong>: estilo de vida, valores, atitudes." accent="accent3" />
              <ConceptCard title="Comportamental" description="Por <strong>conhecimento, atitude, uso ou reação</strong> a um produto." accent="accent4" />
            </div>
          </section>
        )}

        {/* QUIZ */}
        {activeSection === 'quiz' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent4">Quiz de Revisão</h2>
              <p className="section-subtitle">25 perguntas para testar seus conhecimentos</p>
            </div>
            {QUIZ_DATA.map(q => (
              <QuizCard key={q.id} data={q} />
            ))}
          </section>
        )}

        {/* QUIZ IA */}
        {activeSection === 'iaquiz' && (
          <section className="animate-fade-in space-y-5">
            <div>
              <h2 className="section-title text-accent3">Quiz com IA</h2>
              <p className="section-subtitle">Perguntas inéditas geradas pelo Google Gemini</p>
            </div>
            <HighlightBox title="Como funciona?">
              <p>A IA analisa todo o conteúdo deste guia e gera uma pergunta inédita com 4 alternativas, resposta correta e explicação detalhada.</p>
            </HighlightBox>
            <AIQuizGenerator guideContext={MARKETING_GUIDE_CONTEXT} topics={MARKETING_TOPICS} />
          </section>
        )}
      </div>
    </div>
  );
}
