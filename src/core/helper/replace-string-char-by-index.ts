export const replaceStringCharByIndex: (word: string, position: number, character: string) => string = (
  word: string,
  position: number,
  character: string
): string => {
  if (position > word.length - 1) {
    return word;
  }
  return word.substr(0, position) + character + word.substr(position + 1);
};
