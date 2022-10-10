import { QueryHandler } from "../../../shared/application/queries/query.handler";
import { GetULIDQuery } from "./get-ulid.query";
import { GetULIDResult } from "./get-ulid.result";

export interface GetULIDHandler
  extends QueryHandler<GetULIDQuery, GetULIDResult> {
  handle(Query: GetULIDQuery): Promise<GetULIDResult>;
}
