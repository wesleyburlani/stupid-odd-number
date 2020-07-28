import { expect } from "chai";
import NumberVerification from "main/application/verification/number-verification";
import INumberVerification from "main/domain/i-number-verification";
import { Container } from "inversify";
import * as Types from "core/di/types";

const createInstance: () => INumberVerification = (): INumberVerification => {
  const container: Container = new Container();
  container.bind<INumberVerification>(Types.INumberVerification).to(NumberVerification);
  return container.get<INumberVerification>(Types.INumberVerification);
};

const service: INumberVerification = createInstance();

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
          it("Should return false when the number do not starts with 1", (): void => {
            expect(service.isStupidOddNumber("357")).to.be.equal(false);
            expect(service.isStupidOddNumber("3579")).to.be.equal(false);
            expect(service.isStupidOddNumber("3579111315")).to.be.equal(false);
          });
          it("Should return false when the number is not sequential", (): void => {
            expect(service.isStupidOddNumber("3575")).to.be.equal(false);
            expect(service.isStupidOddNumber("35711")).to.be.equal(false);
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
          it("Should return true when the number is 135791113151731", (): void => {
            expect(service.isStupidOddNumber("13579111315171931")).to.be.equal(true);
          });
        });
      });
    });
  });
});
