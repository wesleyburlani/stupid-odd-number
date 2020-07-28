import { Container } from "inversify";
import { createContainer } from "core/di/create-container";
import INumberVerification from "main/domain/i-number-verification";
import { INumberVerification as INumberVerificationType } from "core/di/types";

const container: Container = createContainer();
const service = container.get<INumberVerification>(INumberVerificationType);

if (process.argv.length <= 2) {
  throw new Error("number not specified on argument list");
}

const number = process.argv[2];
console.log(service.isStupidOddNumber(number));
