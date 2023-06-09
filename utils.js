export const match = (candidate, testSuites, defaultValue) => {
  if (!defaultValue) throw new Error('what will return if nothing match?')

  let matchedValue = defaultValue
  for (const [value, ...tests] of testSuites) {
    if (tests.every((test) => test(candidate))) {
      matchedValue = value
    }
  }

  return matchedValue
}

export const reTest = (regex) => value => new RegExp(regex).test(value)

export const isUrl = string => {
  try { return Boolean(new URL(string)) } catch (e) { return false }
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
