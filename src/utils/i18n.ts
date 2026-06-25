import en from '../messages/en.json';
import id from '../messages/id.json';

const messages = { en, id };

export type Locale = 'en' | 'id';

export function useTranslations(locale: Locale) {
  const dict = messages[locale] || messages.en;
  
  return function t(key: string, variables?: Record<string, string>) {
    const parts = key.split('.');
    let current: any = dict;
    for (const part of parts) {
      if (current === undefined || current === null) return key;
      current = current[part];
    }
    if (typeof current !== 'string') return key;
    
    let result = current;
    if (variables) {
      for (const [vKey, vVal] of Object.entries(variables)) {
        result = result.replaceAll(`{${vKey}}`, vVal);
      }
    }
    return result;
  }
}
