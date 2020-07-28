import * as Types from "core/di/types";
import { Container } from "inversify";
import NumberVerification from "main/application/verification/number-verification";
import INumberVerification from "main/domain/i-number-verification";

export const createContainer: () => Container = (): Container => {
  const container: Container = new Container();
  container.bind<INumberVerification>(Types.INumberVerification).to(NumberVerification);
  return container;
};
