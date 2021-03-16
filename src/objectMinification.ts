const keyLetters = 'abcdefghijklmnopqrstuvwxyz';

export function minifyObject<T>(obj: T): Record<string, unknown> {
    const newObj = {};
    let curKeyLetter = 0;

    for(const key in obj) {
        // Currently 26 properties only
        const newKey = keyLetters.substr(curKeyLetter, 1);
        newObj[newKey] = obj[key];

        curKeyLetter++;
    }
    return newObj;
}
