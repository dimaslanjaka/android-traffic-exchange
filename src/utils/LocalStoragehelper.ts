export default class LocalStorageHelper {
  static setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch (error) {
        console.error(`Error parsing localStorage item with key '${key}':`, error);
        return null;
      }
    }
    return null;
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }

  static hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}
