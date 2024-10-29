export class PhoneNumber {
  #number;

  constructor(number: string | number) {
    this.#number = number;
  }

  get number() {
    return this.#number;
  }
}
