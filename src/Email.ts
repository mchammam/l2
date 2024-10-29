export class Email {
  #address;

  constructor(address: string) {
    this.#address = address;
  }

  get address() {
    return this.#address;
  }
}
