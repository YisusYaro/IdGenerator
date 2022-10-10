import { getQueryHandlersMap } from "../../../shared/infrastructure/dependency-injection/register-queries";
import { GetULIDQuery } from "../../application/queries/get-ulid.query";
import { GetUUIDQuery } from "../../application/queries/get-uuid.query";
import { TYPES } from "./types";

export const registerQueries = (): void => {
  const queryHandlersMap = getQueryHandlersMap();

  queryHandlersMap.set(GetUUIDQuery, TYPES.GetUUIDHandler);

  queryHandlersMap.set(GetULIDQuery, TYPES.GetULIDHandler);
};
