import "reflect-metadata";
const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}


class Greeter {
    @format("a")
    greeting: string;
    constructor() {
      //this.greeting = message;
    }
    greet() {
      let formatString = getFormat(this, "greeting");
      return formatString;//.replace("%s", this.greeting);
    }
}


describe('greeter', ()=>{
    it('works', ()=>{
        const g = new Greeter();
        //g.greeting = "Jack";
        const out = g.greet();

        console.log('************************************************');
        console.log(g);
        expect(out).toBe('Hello, Jack');
    })
})