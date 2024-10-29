export class Password {
    #password;
    
    constructor(password: string) {
        this.#password = password;
    }
    
    get password() {
        return this.#password;
    }
}