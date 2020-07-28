import { expect } from "chai";
import OnlyOddNumberGenerator from "main/application/generators/only-odd-number-generator";

const generator = new OnlyOddNumberGenerator();

describe("Main", (): void => {
  describe("Application", (): void => {
    describe("Generators", (): void => {
      describe("OnlyOddNumberGenerator", (): void => {
        describe("next", (): void => {
          it("Should return the expected sequence", (): void => {
            expect(generator.next()).to.be.equal("1");
            expect(generator.next()).to.be.equal("3");
            expect(generator.next()).to.be.equal("5");
            expect(generator.next()).to.be.equal("7");
            expect(generator.next()).to.be.equal("9");
            expect(generator.next()).to.be.equal("11");
            expect(generator.next()).to.be.equal("13");
            expect(generator.next()).to.be.equal("15");
            expect(generator.next()).to.be.equal("17");
            expect(generator.next()).to.be.equal("19");
            expect(generator.next()).to.be.equal("31");
            expect(generator.next()).to.be.equal("33");
            expect(generator.next()).to.be.equal("35");
            expect(generator.next()).to.be.equal("37");
            expect(generator.next()).to.be.equal("39");
            expect(generator.next()).to.be.equal("51");
            expect(generator.next()).to.be.equal("53");
            expect(generator.next()).to.be.equal("55");
            expect(generator.next()).to.be.equal("57");
            expect(generator.next()).to.be.equal("59");
            expect(generator.next()).to.be.equal("71");
            expect(generator.next()).to.be.equal("73");
            expect(generator.next()).to.be.equal("75");
            expect(generator.next()).to.be.equal("77");
            expect(generator.next()).to.be.equal("79");
            expect(generator.next()).to.be.equal("91");
            expect(generator.next()).to.be.equal("93");
            expect(generator.next()).to.be.equal("95");
            expect(generator.next()).to.be.equal("97");
            expect(generator.next()).to.be.equal("99");
            expect(generator.next()).to.be.equal("111");
          });
        });
      });
    });
  });
});
