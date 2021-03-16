import { minifyObject, rehydrateObject } from '../src/objectMinification';

class TestObj {
    prop1: number;
    prop2: string;
}

class TestLgObj {
    prop1: number;
    prop2: number;
    prop3: number;
    prop4: number;
    prop5: number;
    prop6: number;
    prop7: number;
    prop8: number;
    prop9: number;
    prop10: number;
    prop11: number;
    prop12: number;
    prop13: number;
    prop14: number;
    prop15: number;
    prop16: number;
    prop17: number;
    prop18: number;
    prop19: number;
    prop20: number;
    prop21: number;
    prop22: number;
    prop23: number;
    prop24: number;
    prop25: number;
    prop26: number;
    prop27: number;
    prop28: number;
    prop29: number;
    prop40: number;
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

describe('minifyLargeObject', () =>{
    it('prop27 becomes "aa"', ()=>{
        const p1 = 15;

        const obj = new TestLgObj();
        obj.prop27 = p1;

        const minObj = minifyObject<TestLgObj>(obj);

        expect(Object.keys(minObj).indexOf('ab')).not.toBe(-1);
        expect(minObj['aa']).toBe(p1);
    });
    it('prop28 becomes "ab"', ()=>{
        const p1 = 15;

        const obj = new TestLgObj();
        obj.prop28 = p1;

        const minObj = minifyObject<TestLgObj>(obj);

        expect(Object.keys(minObj).indexOf('ab')).not.toBe(-1);
        expect(minObj['ab']).toBe(p1);
    });
})

describe('rehydrateObject', () => {
    it('"a" becomes "prop1"', ()=>{
        const p1 = 15;
        const p2 = 'Hello';

        const obj = {
            a: p1,
            b: p2,
        }
        const out = new TestObj();
        out.prop1 = 0;
        out.prop2 = ""

        rehydrateObject<TestObj>(obj, out);

        console.log(out);

        expect(Object.keys(out).indexOf('prop1')).not.toBe(-1);
        expect(out['prop1']).toBe(p1);
    });
});