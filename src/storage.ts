import { minifyObject } from './objectMinification';

function saveToLocalStorage(key: string, obj: Record<string, unknown>): void {
    window.localStorage.setItem(key, JSON.stringify(obj));
}

export function save<T>(key: string, obj: T): void {
    saveToLocalStorage('cs-'+key, minifyObject<T>(obj));
}

export function get<T>(key: string): T {
    return null;
}
