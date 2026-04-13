import { useState, useEffect } from 'react';
import { useApiKey } from '../hooks/useApiKey';

export default function SettingsPage() {
  const { getApiKey, setApiKey, removeApiKey, hasApiKey } = useApiKey();
  const [keyValue, setKeyValue] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const existing = getApiKey();
    if (existing) setKeyValue(existing);
  }, []);

  const handleSave = () => {
    if (!keyValue.trim()) return;
    setApiKey(keyValue.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleRemove = () => {
    removeApiKey();
    setKeyValue('');
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 animate-fade-in">
      <p className="text-text-muted text-xs font-semibold tracking-widest uppercase mb-2">Configurações</p>
      <h1 className="font-display font-bold text-3xl text-text mb-10">Preferências e integrações</h1>

      {/* API Key Section */}
      <div className="study-surface p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-semibold text-sm text-text">API Key — Google Gemini</h2>
            <p className="text-text-muted text-xs mt-0.5">Necessária para o Quiz com IA</p>
          </div>
          {hasApiKey() && (
            <span className="px-2.5 py-1 bg-accent5/10 text-accent5 text-[10px] font-bold rounded-md uppercase tracking-wide">
              Configurada
            </span>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="api-key-input" className="block text-xs font-medium text-text-muted mb-1.5">
              Token da API
            </label>
            <div className="relative">
              <input
                id="api-key-input"
                type={showKey ? 'text' : 'password'}
                value={keyValue}
                onChange={(e) => setKeyValue(e.target.value)}
                placeholder="Cole aqui seu token"
                className="w-full bg-bg border border-border rounded-lg px-3 py-2.5 text-text placeholder-text-muted/40 focus:outline-none focus:border-accent transition-colors font-mono text-xs"
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text text-xs transition-colors"
                type="button"
              >
                {showKey ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={handleSave}
              disabled={!keyValue.trim()}
              className="px-4 py-2 bg-accent text-white rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {saved ? 'Salvo' : 'Salvar'}
            </button>
            {hasApiKey() && (
              <button
                onClick={handleRemove}
                className="px-4 py-2 border border-accent2/40 text-accent2 rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all duration-200"
              >
                Remover
              </button>
            )}
            <a
              href="https://aistudio.google.com/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border text-text-muted rounded-lg font-semibold text-xs hover:-translate-y-0.5 transition-all duration-200 hover:text-text"
            >
              Gerar token no Gemini
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-border">
          <p className="text-text-muted text-[11px] leading-relaxed">
            <strong className="text-text">Privacidade:</strong> Seu token é armazenado exclusivamente no seu navegador (localStorage).
            Nunca é enviado para servidores do projeto.
          </p>
        </div>
      </div>

      {/* About */}
      <div className="study-surface p-6">
        <h2 className="font-semibold text-sm text-text mb-3">Sobre o Projeto</h2>
        <div className="space-y-2 text-text-muted text-xs leading-relaxed">
          <p>
            Repositório colaborativo de conteúdos do Bacharelado em Sistemas de Informação do IFAL.
            Mantido por alunos e egressos do curso.
          </p>
          <p className="text-text-muted/60">
            React · TypeScript · Tailwind CSS · Vite · Google Gemini API
          </p>
        </div>
      </div>
    </div>
  );
}
