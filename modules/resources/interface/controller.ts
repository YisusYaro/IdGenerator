import { QueryBus } from "../../shared/infrastructure/query-bus/query-bus";
import { App } from "../../shared/infrastructure/dependency-injection/app";
import { TYPES as SHARED_TYPES } from "../../shared/infrastructure/dependency-injection/types";
import { GetUUIDQuery } from "../application/queries/get-uuid.query";
import { GetULIDQuery } from "../application/queries/get-ulid.query";

const queryBus = App.getInstance()
  .getContainer()
  .get<QueryBus>(SHARED_TYPES.QueryBus);

export const getUUID = async () => {
  const query = new GetUUIDQuery();
  return await queryBus.execute(query);
};

export const getULID = async () => {
  const query = new GetULIDQuery();
  return await queryBus.execute(query);
};
