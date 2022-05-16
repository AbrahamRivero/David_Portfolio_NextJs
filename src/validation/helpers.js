export const atLeast1Number = value => /[0-9]/g.test(value)

export const atLeast1UpperCase = value => /[A-Z]/g.test(value)

export const atLeast1LowerCase = value => /[a-z]/g.test(value)

export const noWhiteSpaces = value => !/[\s]/g.test(value)
