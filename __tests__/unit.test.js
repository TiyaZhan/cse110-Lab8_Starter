// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test for isPhoneNumber
test('is 4405678907 valid', () => {
    expect(functions.isPhoneNumber("440-567-8907")).toBe(true);
});

test('is 440-348-5555 valid', () => {
    expect(functions.isPhoneNumber("440-348-5555")).toBe(true);
});

test('is 440 valid', () => {
    expect(functions.isPhoneNumber("440")).toBe(false);
});

test('is 443485555908 valid', () => {
    expect(functions.isPhoneNumber("443485555908")).toBe(false);
});

// test for isEmail
test('is ti@gmail.com valid', () => {
    expect(functions.isEmail("ti@gmail.com")).toBe(true);
});

test('is hiiiii@ucsd.edu valid', () => {
    expect(functions.isEmail("hiiiii@ucsd.edu")).toBe(true);
});

test('is ti@gmail valid', () => {
    expect(functions.isEmail("ti@gmail")).toBe(false);
});

test('is timail.com valid', () => {
    expect(functions.isEmail("timail.com")).toBe(false);
});

// test isStrongPassword

test('is Ifajkfjl_8 strong', () => {
    expect(functions.isStrongPassword("Ifajkfjl_8")).toBe(true);
});

test('is If8_ strong', () => {
    expect(functions.isStrongPassword("If8_")).toBe(true);
});

test('is If3 strong', () => {
    expect(functions.isStrongPassword("If3")).toBe(false);
});

test('is 9fajkfjl_8 strong', () => {
    expect(functions.isStrongPassword("9fajkfjl_8")).toBe(false);
});

// test for isDate
test('is 12/12/2000 valid', () => {
    expect(functions.isDate("12/12/2000")).toBe(true);
});

test('is 3/12/2000 valid', () => {
    expect(functions.isDate("3/12/2000")).toBe(true);
});

test('is 129/12/2000 valid', () => {
    expect(functions.isDate("129/12/2000")).toBe(false);
});

test('is 12/12/20 valid', () => {
    expect(functions.isDate("12/12/20")).toBe(false);
});

// test for isHexColor
test('is #fcba03 valid', () => {
    expect(functions.isHexColor("#fcba03")).toBe(true);
});

test('is #542f7d valid', () => {
    expect(functions.isHexColor("#542f7d")).toBe(true);
});

test('is fc valid', () => {
    expect(functions.isHexColor("fc")).toBe(false);
});

test('is #fcba03kl valid', () => {
    expect(functions.isHexColor("#fcba03kl")).toBe(false);
});