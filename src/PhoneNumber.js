export class PhoneNumber {
  #number
  
  constructor(number) {
    this.#number = number;
  }

  get number() {
    return this.#number;
  }
}