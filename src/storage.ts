function saveToLocalStorage(key: string, obj: any): void{
    window.localStorage.setItem(key, obj);
}

const keyLetters = 'abcdefghijklmnopqrstuvwxyz';

function minifyObject<T>(obj: T): Object{
    const newObj = {};
    let curKeyLetter = 0;

    for(let key in obj){
        // Currently 26 properties only
        let newKey = keyLetters.substr(curKeyLetter, 1);
        newObj[newKey] = obj[key];

        curKeyLetter++;
    }
    return newObj;
}

export function save<T>(key: string, obj: T):void{
    saveToLocalStorage('cs-'+key, minifyObject<T>(obj));
}

export function get<T>(key: string): T{
    return null;
}
