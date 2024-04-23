import Keys from "./keys";

const excludeKeys: any[] = [];

class Session {
  static set = (key: string, value: any) => {
    try {
      if (window && window?.localStorage) {
        localStorage?.setItem(key, value);
      }
    } catch (e) {}
  };

  static setStringified = (key: string, value: any) => {
    try {
      if (window && window?.localStorage) {
        localStorage?.setItem(key, JSON.stringify(value));
      }
    } catch (e) {}
  };

  static get = (key: string) => {
    try {
      if (window && window?.localStorage) {
        return localStorage?.getItem(key) || false;
      }
    } catch (e) {}
  };

  static getParsed = (key: string) => {
    try {
      if (window && window?.localStorage) {
        const storedValue = localStorage?.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
      }
      return null;
    } catch (e) {}
  };

  static remove = (key: string) => {
    try {
      if (window && window?.localStorage) {
        localStorage?.removeItem(key);
      }
    } catch (e) {}
  };

  static logout = () => {
    try {
      if (window && window?.localStorage) {
        for (const [key, value] of Object.entries(Keys)) {
          if (excludeKeys.indexOf(value) === -1) {
            localStorage?.removeItem(value);
          }
        }
      }
    } catch (e) {}
  };
}

export default Session;
