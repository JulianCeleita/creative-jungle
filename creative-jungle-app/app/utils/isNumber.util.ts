export const isNumber = (str: string) => {
    return /^\+?(0|[1-9]\d*)$/.test(str);
  }