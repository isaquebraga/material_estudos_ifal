const STORAGE_KEY = 'gemini_api_key';

export function useApiKey() {
  const getApiKey = (): string | null => {
    return localStorage.getItem(STORAGE_KEY);
  };

  const setApiKey = (key: string): void => {
    localStorage.setItem(STORAGE_KEY, key);
  };

  const removeApiKey = (): void => {
    localStorage.removeItem(STORAGE_KEY);
  };

  const hasApiKey = (): boolean => {
    const key = getApiKey();
    return !!key && key.trim().length > 0;
  };

  return { getApiKey, setApiKey, removeApiKey, hasApiKey };
}
