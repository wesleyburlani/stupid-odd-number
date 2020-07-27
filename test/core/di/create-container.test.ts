import { expect } from "chai";
import { createContainer } from "core/di/create-container";
import { Container } from "inversify";

describe("Core", (): void => {
  describe("CreateContainer", (): void => {
    it("Should create and return a container", (): void => {
      // When
      const container: Container = createContainer();
      // Then
      expect(container).to.be.an.instanceOf(Container);
    });
  });
});
