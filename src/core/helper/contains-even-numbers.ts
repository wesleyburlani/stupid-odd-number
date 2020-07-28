export const containsEvenNumbers: (word: string) => boolean = (word: string): boolean => {
  const regexp = new RegExp("^d*[02468]$");
  if (regexp.test(word)) {
    return true;
  }
  return false;
};
