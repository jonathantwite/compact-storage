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
