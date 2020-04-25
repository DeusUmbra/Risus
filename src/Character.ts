export class Character{
    Name:string;
    Cliches:Array<string>;

    constructor(n:string, c:Array<string>) {
        this.Name = n;
        this.Cliches = c;
    }
}