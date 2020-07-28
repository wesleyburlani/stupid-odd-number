import INumberVerification from "main/domain/i-number-verification";
import { injectable } from "inversify";
import OnlyOddNumberGenerator from "../generators/only-odd-number-generator";
import { containsEvenNumbers } from "core/helper/contains-even-numbers";

/**
 * Collection of verification on numbers represented by strings
 */
@injectable()
export default class NumberVerification implements INumberVerification {
  /**
   * Return true if the passed word is an stupid odd number
   */
  public isStupidOddNumber(number: string): boolean {
    const onlyOddNumberGenerator = new OnlyOddNumberGenerator();

    if (number === "" || number === null || number === "1") {
      return false;
    }

    if (!number.startsWith("1")) {
      return false;
    }

    if (containsEvenNumbers(number)) {
      return false;
    }

    let cursor = 0;
    let length = 1;
    let nextExpectedNumber = onlyOddNumberGenerator.next();
    while (cursor < number.length) {
      let currentNumber = number.substr(cursor, Math.min(length, number.length - cursor));
      if (currentNumber !== nextExpectedNumber) {
        return false;
      }
      cursor += length;
      nextExpectedNumber = onlyOddNumberGenerator.next();
      length = nextExpectedNumber.toString().length;
    }

    return true;
  }
}
