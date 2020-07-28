export const containsNonNumbers: (word: string) => boolean = (word: string): boolean => {
  const regexp = new RegExp("^[0-9]*$");
  if (regexp.test(word)) {
    return false;
  }
  return true;
};
