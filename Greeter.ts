class TypeScriptHello {
  ch : string;
  constructor (message : string){
    this.ch=message;
  }
get() : string{
  return this.ch;
}

}
let obj=new TypeScriptHello("hello world i m zied tuihri this is the first program TypeScript !");
console.log(obj.get());
