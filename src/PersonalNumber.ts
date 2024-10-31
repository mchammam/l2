export class PersonalNumber {
//   #number;

  constructor(number: string) {
    this.validatePersonalNumber(number);

    // this.setPersonalNumberFields(number);
    // const regExp = /^(19|20)?([0-9]{2}[01][0-9][0123][0-9])-?([0-9]{4})$/;

    // if (regExp.test(number)) {
    //     console.log('Valid personal number');
    // } else {
    //     console.log('Invalid personal number');
    // }
    // if not valid
    // throw new Error('Invalid personal number');
  }

  private validatePersonalNumber(number: string) {
    const regExp = /^(19|20)?([0-9]{2})((02)(0[1-9]|[12][0-9])|(01|03|05|07|08|10|12)(0[1-9]|[12][0-9]|3[01])|(04|06|09|11)(0[1-9]|[12][0-9]|3[0]))-?([0-9]{4})$/;

    if (!regExp.test(number)) {
        this.throwInvalidPersonalNumberError()
    }

    const found = number.match(regExp)!;

    const personalNumber = {
        year: (found[1] ? found[1] : (parseInt(found[2]) > Number.parseInt(new Date().getFullYear().toString().substring(2,4)) ? 19 : 20)) + found[2],
        month: found[3].substring(0,2),
        day: found[3].substring(2,4),
        fourNumbers: found[10],
    }

    if (parseInt(personalNumber.month) === 2 && parseInt(personalNumber.day) === 29 && 
        new Date(parseInt(personalNumber.year), 1, 29).getDate() !== 29){
        // Not a leap year and 29/2 -> invalid date
        this.throwInvalidPersonalNumberError()
    }
  }

  private throwInvalidPersonalNumberError() {
    throw new Error('Invalid personal number');
  }

//   get number() {
//     // return this.#number;
//   }

  //getAge
  //getGender
  //getBirthDate
  //getFourNumbers
  //getCheckDigit
  //getStandardPersonalNumber
}
