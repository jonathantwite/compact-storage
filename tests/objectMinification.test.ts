import { minifyObject } from '../src/objectMinification';

class TestObj {
    prop1: number;
    prop2: string;
}

describe('minifyObject', () => {
    it('prop1 becomes "a"', ()=>{
        const p1 = 15;
        const p2 = 'Hello';

        const obj = new TestObj();
        obj.prop1 = p1;
        obj.prop2 = p2;

        const minObj = minifyObject<TestObj>(obj);

        expect(Object.keys(minObj).indexOf('a')).not.toBe(-1);
        expect(minObj['a']).toBe(p1);
    });
    it('prop2 becomes "b"', ()=>{
        const p1 = 15;
        const p2 = 'Hello';

        const obj = new TestObj();
        obj.prop1 = p1;
        obj.prop2 = p2;

        const minObj = minifyObject<TestObj>(obj);

        expect(Object.keys(minObj).indexOf('b')).not.toBe(-1);
        expect(minObj['b']).toBe(p2);
    });
});
