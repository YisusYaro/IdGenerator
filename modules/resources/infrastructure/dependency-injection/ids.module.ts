import { Container } from "inversify";
import { TYPES } from "./types";
import { GetUUIDHandler } from "../../application/queries/get-uuid.interface";
import { GetUUIDHandlerImpl } from "../../application/queries/get-uuid.handler";
import { registerQueries } from "./register-queries";
import { IdGenerator } from "../../domain/id-generator";
import { IdGeneratorImpl } from "../id-generator/id-generator";
import { GetULIDHandler } from "../../application/queries/get-ulid.interface";
import { GetULIDHandlerImpl } from "../../application/queries/get-ulid.handler";

const setQueryHandlers = (container: Container): void => {
  container.bind<GetUUIDHandler>(TYPES.GetUUIDHandler).to(GetUUIDHandlerImpl);

  container.bind<GetULIDHandler>(TYPES.GetULIDHandler).to(GetULIDHandlerImpl);
};

const setApplication = (container: Container): void => {
  setQueryHandlers(container);
  registerQueries();
};

const setInfrastructure = (container: Container): void => {
  container.bind<IdGenerator>(TYPES.IdGenerator).to(IdGeneratorImpl);
};

export const setIdsModule = (container: Container): void => {
  setApplication(container);
  setInfrastructure(container);
};
