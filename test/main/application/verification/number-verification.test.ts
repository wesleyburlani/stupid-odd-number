import { expect } from "chai";
import NumberVerification from "main/application/verification/number-verification";

const service: NumberVerification = new NumberVerification();

describe("Main", (): void => {
  describe("Application", (): void => {
    describe("Verification", (): void => {
      describe("Number Verification", (): void => {
        describe("Is Stupid Odd Number", (): void => {
          it("Should return false when the number is lower then 10", (): void => {
            expect(service.isStupidOddNumber("9")).to.be.equal(false);
            expect(service.isStupidOddNumber("7")).to.be.equal(false);
            expect(service.isStupidOddNumber("5")).to.be.equal(false);
            expect(service.isStupidOddNumber("3")).to.be.equal(false);
            expect(service.isStupidOddNumber("2")).to.be.equal(false);
            expect(service.isStupidOddNumber("1")).to.be.equal(false);
          });
          it("Should return false when the number contains even numbers", (): void => {
            expect(service.isStupidOddNumber("1257")).to.be.equal(false);
            expect(service.isStupidOddNumber("1234")).to.be.equal(false);
            expect(service.isStupidOddNumber("013")).to.be.equal(false);
          });
          it("Should return true when the number is 1357", (): void => {
            expect(service.isStupidOddNumber("1357")).to.be.equal(true);
          });
          it("Should return true when the number is 13579", (): void => {
            expect(service.isStupidOddNumber("13579")).to.be.equal(true);
          });
          it("Should return true when the number is 13579111315", (): void => {
            expect(service.isStupidOddNumber("13579111315")).to.be.equal(true);
          });
        });
      });
    });
  });
});
