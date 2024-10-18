import { PhoneNumber } from '../src/PhoneNumber.js';

test('return same phone number', () => {
    const phoneNumber = new PhoneNumber('07024324234');
    expect(phoneNumber.number).toBe('07024324234');
  });