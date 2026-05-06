// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// ***** isPhoneNumber Function ***** //

test('Letters (abc) not a phone number', () => {
  expect(isPhoneNumber("abc")).toBe(false);
}); //returns False

test('5 Consecutive numbers not a phone number', () => {
  expect(isPhoneNumber("89076")).toBe(false);
});

test('(123) 456-7890 is a phone number', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('123-8976 is a phone number', () => {
    expect(isPhoneNumber("123-8976")).toBe(true);
});

// ***** isEmail Function ***** //

test('bob@gmail.com is an email', () => {
  expect(isEmail("bob@gmail.com")).toBe(true);
}); 

test('john123@ucsd.edu is an email', () => {
  expect(isEmail("john123@ucsd.edu")).toBe(true);
});

test('@gmail.com is not an email', () => {
  expect(isEmail("@gmail.com")).toBe(false);
});

test('kuya@ is not an email', () => {
    expect(isEmail("kuya@")).toBe(false);
});

// ***** isStrongPassword Function ***** //

test('abc1 is a strong password', () => {
  expect(isStrongPassword("abc1")).toBe(true);
}); 

test('Password_123 is a strong password', () => {
  expect(isStrongPassword("Password_123")).toBe(true);
});

test('1abc is not a strong password', () => {
  expect(isStrongPassword("1abc")).toBe(false);
});

test('thispasswordiswaytoolong123 is not a strong password', () => {
    expect(isStrongPassword("thispasswordiswaytoolong123")).toBe(false);
});

// ***** isDate Function ***** //

test('99/99/9999 is a date', () => {
  expect(isDate("99/99/9999")).toBe(true);
}); 

test('1/1/2001 is a date', () => {
  expect(isDate("1/1/2001")).toBe(true);
});

test('Oct 21, 1997 is not a date', () => {
  expect(isDate("Oct 21, 1997")).toBe(false);
});

test('abc is not a date', () => {
    expect(isDate("abc")).toBe(false);
});

// ***** isHexColor Function ***** //

test('#FFF is a hex color', () => {
  expect(isHexColor("#FFF")).toBe(true);
}); 

test('FFF is a hex color', () => {
  expect(isHexColor("FFF")).toBe(true);
});

test('#GGG is not a hex color', () => {
  expect(isHexColor("#GGG")).toBe(false);
});

test('hello is not a hex color', () => {
    expect(isHexColor("hello")).toBe(false);
});