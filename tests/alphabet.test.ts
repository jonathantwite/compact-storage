import { getLetter } from '../src/alphabet';

describe('getLetter', () => {
    it('9 returns "j"', () => {
        expect(getLetter(9)).toBe('j');
    });
    it('19 returns "t"', () => {
        expect(getLetter(19)).toBe('t');
    });
    it('26 returns "aa"', () => {
        expect(getLetter(26)).toBe('aa');
    });
    it('28 returns "ac"', () => {
        expect(getLetter(28)).toBe('ac');
    });
    it('52 returns "ba"', () => {
        expect(getLetter(52)).toBe('ba');
    });
});
