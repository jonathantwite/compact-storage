import { getLetter } from "./alphabet.js";

export function minifyObject<T>(obj: T|T[]): Record<string, unknown>|Record<string, unknown>[] {
    const newObj = {};
    let curKeyIndex = 0;

    if(Array.isArray(obj)) {
        return obj.map(o=>minifyObject<T>(o) as Record<string, unknown>);
    }

    for(const key in obj) {
        const newKey = getLetter(curKeyIndex);
        newObj[newKey] = obj[key];

        curKeyIndex++;
    }

    return newObj;
}

export function rehydrateObject<T>(obj: Record<string, unknown>, out: T): void {
    let curKeyIndex = 0;
    
    for(const key in out) {
        const newKey = getLetter(curKeyIndex);
        out[key] = obj[newKey] as T[Extract<keyof T, string>];

        curKeyIndex++;
    }
}
