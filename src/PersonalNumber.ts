export class PersonalNumber {
    #number;
    
    constructor(number: string) {
        this.#number = number;
    }
    
    get number() {
        return this.#number;
    }
}