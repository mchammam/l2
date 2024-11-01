export class PersonalNumber {
  #year: string = "";
  #month: string = "";
  #day: string = "";
  #fourNumbers: string = "";

  //   #number;

  constructor(number: string) {
    this.#validatePersonalNumber(number);
    this.#setPersonalNumberFields(number);
  }

  #validatePersonalNumber(number: string) {
    const regExp =
      /^(19|20)?([0-9]{2})((02)(0[1-9]|[12][0-9])|(01|03|05|07|08|10|12)(0[1-9]|[12][0-9]|3[01])|(04|06|09|11)(0[1-9]|[12][0-9]|3[0]))-?([0-9]{4})$/;

    if (!regExp.test(number)) {
      this.#throwInvalidPersonalNumberError();
    }

    const found = number.match(regExp)!;

    const personalNumber = {
      year: (found[1] ? found[1] : (parseInt(found[2]) >
          Number.parseInt(
            new Date().getFullYear().toString().substring(2, 4),
          )
        ? 19
        : 20)) + found[2],
      month: found[3].substring(0, 2),
      day: found[3].substring(2, 4),
      fourNumbers: found[10],
    };

    // If not a leap year and 29/2
    if (
      parseInt(personalNumber.month) === 2 &&
      parseInt(personalNumber.day) === 29 &&
      new Date(parseInt(personalNumber.year), 1, 29).getDate() !== 29
    ) {
      this.#throwInvalidPersonalNumberError();
    }

    const fullPersonalNumber =
      `${personalNumber.year}${personalNumber.month}${personalNumber.day}-${personalNumber.fourNumbers}`;
    this.#validateFourNumbers(fullPersonalNumber);
  }

  #throwInvalidPersonalNumberError() {
    throw new Error("Invalid personal number");
  }

  // Paramformat: YYYYMMDD-XXXX
  #validateFourNumbers(fullPersonalNumber: string) {
    fullPersonalNumber = fullPersonalNumber.replace("-", "").substring(2);

    let sum = 0;
    let alt = false;
    for (let i = 9; i >= 0; i--) {
      let num = parseInt(fullPersonalNumber.charAt(i));
      if (alt) {
        num = num * 2;
        if (num > 9) {
          num = num - 9;
        }
      }
      sum += num;
      alt = !alt;
    }

    if ((sum % 10) !== 0) {
      this.#throwInvalidPersonalNumberError();
    }
  }

  #setPersonalNumberFields(number: string) {
    const regExp =
      /^(19|20)?([0-9]{2})((02)(0[1-9]|[12][0-9])|(01|03|05|07|08|10|12)(0[1-9]|[12][0-9]|3[01])|(04|06|09|11)(0[1-9]|[12][0-9]|3[0]))-?([0-9]{4})$/;
    const found = number.match(regExp)!;

    this.#year = (found[1] ? found[1] : (parseInt(found[2]) >
        Number.parseInt(new Date().getFullYear().toString().substring(2, 4))
      ? 19
      : 20)) + found[2];
    this.#month = found[3].substring(0, 2);
    this.#day = found[3].substring(2, 4);
    this.#fourNumbers = found[10];
  }

  //format: YYMMDD-XXXX
  getFullPersonalNumber() {
    return `${this.#year}${this.#month}${this.#day}-${this.#fourNumbers}`.substring(2);
  }

  getAge() {
    const birthDate = new Date(
      parseInt(this.#year),
      parseInt(this.#month) - 1,
      parseInt(this.#day),
    );
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

    // Type format
    // test more
  getGender() {
    return parseInt(this.#fourNumbers.substring(2,1)) % 2 === 0 ? "male" : "female";
  }

  
  //getGender
  //getBirthDate
  //getFourNumbers
  //getCheckDigit
  //getStandardPersonalNumber
}
