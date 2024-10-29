export class Address {
    #street;
    #city;
    #zipCode;
    
    constructor(street: string, city: string, zipCode: string) {
        this.#street = street;
        this.#city = city;
        this.#zipCode = zipCode;
    }
    
    get street() {
        return this.#street;
    }
    
    get city() {
        return this.#city;
    }
    
    get zipCode() {
        return this.#zipCode;
    }
}