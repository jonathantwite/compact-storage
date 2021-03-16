import { getLetter } from "./alphabet";

export function minifyObject<T>(obj: T): Record<string, unknown> {
    const newObj = {};
    let curKeyIndex = 0;

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
