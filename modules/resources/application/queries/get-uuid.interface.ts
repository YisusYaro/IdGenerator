import { QueryHandler } from "../../../shared/application/queries/query.handler";
import { GetUUIDQuery } from "./get-uuid.query";
import { GetUUIDResult } from "./get-uuid.result";

export interface GetUUIDHandler
  extends QueryHandler<GetUUIDQuery, GetUUIDResult> {
  handle(Query: GetUUIDQuery): Promise<GetUUIDResult>;
}
