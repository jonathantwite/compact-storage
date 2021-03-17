import { minifyObject, rehydrateObject } from './objectMinification.js';

function saveToLocalStorage(key: string, obj: Record<string, unknown>|Record<string, unknown>[]): void {
    window.localStorage.setItem(key, JSON.stringify(obj));
}

export function save<T>(key: string, obj: T|T[]): void {
    saveToLocalStorage('cs-' + key, minifyObject<T>(obj));
}

export function get<T>(key: string, out: T): void {
    return rehydrateObject<T>(JSON.parse(window.localStorage.getItem('cs-' + key)), out);
}
