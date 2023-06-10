
import typographicBase from 'typographic-base'

export function formatText(input?: string | React.ReactNode) {
    if (!input) {
      return;
    }
  
    if (typeof input !== 'string') {
      return input;
    }
  
    return typographicBase(input, {locale: 'en-us'}).replace(
      /\s([^\s<]+)\s*$/g,
      '\u00A0$1',
    );
  }

  export function missingClass(string?: string, prefix?: string) {
    if (!string) {
      return true;
    }
  
    const regex = new RegExp(` ?${prefix}`, 'g');
    return string.match(regex) === null;
  }
  