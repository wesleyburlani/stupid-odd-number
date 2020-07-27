import INumberVerification from "main/domain/i-number-verification";

export default class NumberVerification implements INumberVerification {
  public isStupidOddNumber(number: string): boolean {
    return number === "";
  }
}
