const letters = 'abcdefghijklmnopqrstuvwxyz';

export const getLetter = function (val: number): string {
    if(val < 0) {
        return '';
    }

    const rval = val % 26;
    const lval = Math.floor(val / 26);

    return getLetter(lval - 1) + letters.substr(rval, 1);
}
