let heck: number[] | Array<string> | boolean | number = [1, 2, 3, 4]; 
heck = true;
heck = 1;
heck = ["heck"]; 

function peckedJerry(target: any, count: number, ): string {  
    return `You pecked jerry ${count} times!`
}

function sendLog(text: string, extra?: boolean): any { 
    if(extra){return console.log(text + ' Extra!')} 
    return console.log(text) 

}

sendLog("heck you", true)

interface Heck {
    key1: string
    key2: number,
    key3: boolean,
    key4: Array<string>,
    [key:string]: any
 }
 
 const HeckinHeck: Heck = {
    key1: "value1",
    key2: 90,
    key3: true,
    key4: ["hi"],
    key5: [1, 2]
 }

async function feedJerry(count: number, goodBoy?: boolean): Promise<string|boolean> {
    if(!goodBoy){return `You fed jerry ${count} allys!`}
    return "Jerry is a good boy"
 }

 async function StringOrBool(a: string, b?: boolean): Promise<any> {
    if(b){return true}
    if(!b){return console.log("Jerry!")}
 }

 StringOrBool("jerry", true)

 class jerry {
    count: number
    jerry: string
 
    constructor(count: number){
       this.count = count
       this.jerry = "good boy"
    }
 
    public feed(): any {
       return console.log(`You fed jerry ${this.count} times!`)
    }
 
 }

 export default jerry