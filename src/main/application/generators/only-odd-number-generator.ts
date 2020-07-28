import { replaceStringCharByIndex } from "core/helper/replace-string-char-by-index";
import { injectable } from "inversify";

/**
 * Generates sequential numbers formed only by even numbers starting by 1;
 */
@injectable()
export default class OnlyOddNumberGenerator {
  private currentNumber: string = "";

  /**
   * Get the next number in the sequence formed only by even numbers
   */
  public next(): string {
    if (this.currentNumber === "") {
      this.currentNumber = "1";
      return this.currentNumber;
    }

    let position = this.currentNumber.length - 1;
    // walks through the last position to the start position
    while (position >= 0) {
      const currentChar = this.currentNumber[position];
      if (currentChar !== "9") {
        const nextEvenNumber = (Number(currentChar) + 2).toString();
        this.currentNumber = replaceStringCharByIndex(this.currentNumber, position, nextEvenNumber);
        break;
      }
      this.currentNumber = replaceStringCharByIndex(this.currentNumber, position, "1");
      if (position === 0) {
        this.currentNumber = "1" + this.currentNumber;
        break;
      }
      position--;
    }

    return this.currentNumber;
  }
}
