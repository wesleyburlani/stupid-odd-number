/**
 * interface to a collection of verification on numbers represented by strings
 */
export default interface INumberVerification {
  /**
   * Return true if the passed word is an stupid odd number
   */
  isStupidOddNumber: (number: string) => boolean;
}
