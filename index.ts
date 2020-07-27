import { Container } from "inversify";
import { createContainer } from "core/di/create-container";
import INumberVerification from "main/domain/i-number-verification";
import { INumberVerification as INumberVerificationType } from "core/di/types";

const container: Container = createContainer();
const service = container.get<INumberVerification>(INumberVerificationType);
service.isStupidOddNumber("");
