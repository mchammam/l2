export class Name {
    #name;
    
    constructor(name: string) {
        this.#name = name;
    }
    
    get name() {
        return this.#name;
    }
}