import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getPeriods, getOptativesByCategory, optativeCategories } from '../../data/curriculum';
import type { Subject } from '../../data/curriculum';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedPeriods, setExpandedPeriods] = useState<Set<string>>(new Set());
  const [expandedOptCategories, setExpandedOptCategories] = useState<Set<string>>(new Set());
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const periods = getPeriods();

  const togglePeriod = (key: string) => {
    setExpandedPeriods(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleOptCategory = (key: string) => {
    setExpandedOptCategories(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const renderSubjectLink = (subject: Subject) => (
    <NavLink
      key={subject.id}
      to={`/materia/${subject.slug}`}
      onClick={() => setMobileOpen(false)}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
          isActive
            ? 'bg-accent/15 text-accent font-semibold'
            : subject.hasContent
              ? 'text-text-muted hover:text-text hover:bg-card'
              : 'text-text-muted/40 hover:text-text-muted/60'
        }`
      }
    >
      <span className="truncate flex-1">{subject.name}</span>
      {subject.hasContent && (
        <span className="w-1.5 h-1.5 rounded-full bg-accent5 flex-shrink-0" />
      )}
    </NavLink>
  );

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Header */}
      <NavLink to="/" onClick={() => setMobileOpen(false)} className="block px-5 pt-7 pb-5 border-b border-border">
        <h1 className="font-display font-bold text-lg text-text leading-tight tracking-tight">IFAL BSI</h1>
        <p className="text-text-muted text-[11px] mt-0.5 font-medium tracking-wide uppercase">Material de Estudo</p>
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {/* Home */}
        <NavLink
          to="/"
          end
          onClick={() => setMobileOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive ? 'bg-accent/15 text-accent' : 'text-text-muted hover:text-text hover:bg-card'
            }`
          }
        >
          Início
        </NavLink>

        <div className="h-px bg-border mx-2 my-2" />

        {/* Periods 1-8 */}
        {periods.filter(p => p.number !== 'optativa').map(period => {
          const key = `p${period.number}`;
          const isExpanded = expandedPeriods.has(key);
          const hasActiveChild = period.subjects.some(s => location.pathname === `/materia/${s.slug}`);

          return (
            <div key={key}>
              <button
                onClick={() => togglePeriod(key)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  hasActiveChild ? 'text-accent' : 'text-text-muted hover:text-text hover:bg-card'
                }`}
              >
                <span>{period.label}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {isExpanded && (
                <div className="ml-3 pl-3 border-l border-border space-y-0.5 mt-0.5 animate-fade-in">
                  {period.subjects.map(renderSubjectLink)}
                </div>
              )}
            </div>
          );
        })}

        <div className="h-px bg-border mx-2 my-2" />

        {/* Optatives */}
        <div>
          <button
            onClick={() => togglePeriod('opt')}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text hover:bg-card transition-all duration-200"
          >
            <span>Optativas</span>
            <svg className={`w-3 h-3 transition-transform duration-200 ${expandedPeriods.has('opt') ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {expandedPeriods.has('opt') && (
            <div className="ml-3 pl-3 border-l border-border space-y-0.5 mt-0.5 animate-fade-in">
              {(Object.keys(optativeCategories) as Array<keyof typeof optativeCategories>).map(catKey => {
                const cat = optativeCategories[catKey];
                const subjects = getOptativesByCategory(catKey);
                const isCatExpanded = expandedOptCategories.has(catKey);

                return (
                  <div key={catKey}>
                    <button
                      onClick={() => toggleOptCategory(catKey)}
                      className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold text-text-muted hover:text-text hover:bg-card transition-all duration-200 uppercase tracking-wider"
                    >
                      <span>{cat.label}</span>
                      <svg className={`w-2.5 h-2.5 transition-transform duration-200 ${isCatExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {isCatExpanded && (
                      <div className="ml-3 pl-3 border-l border-border/50 space-y-0.5 mt-0.5 animate-fade-in">
                        {subjects.map(renderSubjectLink)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-border px-2 py-3">
        <NavLink
          to="/configuracoes"
          onClick={() => setMobileOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              isActive ? 'bg-accent/15 text-accent' : 'text-text-muted hover:text-text hover:bg-card'
            }`
          }
        >
          Configurações
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-card border border-border rounded-xl p-2.5 shadow-lg transition-all duration-200 hover:bg-card-hover"
        aria-label="Menu"
      >
        <div className="w-5 h-5 flex flex-col justify-center gap-1">
          <span className={`block h-0.5 bg-text rounded transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block h-0.5 bg-text rounded transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-text rounded transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
      )}

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-sidebar border-r border-border ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex-shrink-0`}
      >
        {!collapsed && sidebarContent}
        {collapsed && (
          <div className="flex flex-col items-center pt-7">
            <span className="font-display font-bold text-sm text-text-muted">BSI</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-9 text-text-muted hover:text-text border-t border-border transition-colors"
          aria-label={collapsed ? 'Expandir' : 'Colapsar'}
        >
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-border z-50 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
