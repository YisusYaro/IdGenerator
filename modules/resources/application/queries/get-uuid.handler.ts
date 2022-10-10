import { inject, injectable } from "inversify";
import { GetUUIDHandler } from "./get-uuid.interface";
import { TYPES } from "../../infrastructure/dependency-injection/types";
import { GetUUIDResult } from "./get-uuid.result";
import type { IdGenerator } from "../../domain/id-generator";
import { GetUUIDQuery } from "./get-uuid.query";

@injectable()
export class GetUUIDHandlerImpl implements GetUUIDHandler {
  constructor(
    @inject(TYPES.IdGenerator)
    private idGenerator: IdGenerator
  ) {}

  async handle(query: GetUUIDQuery): Promise<GetUUIDResult> {
    const uuid = this.idGenerator.generateUUID();

    return new GetUUIDResult({ uuid });
  }
}
