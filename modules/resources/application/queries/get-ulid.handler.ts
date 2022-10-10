import { inject, injectable } from "inversify";
import { GetULIDHandler } from "./get-ulid.interface";
import { TYPES } from "../../infrastructure/dependency-injection/types";
import { GetULIDResult } from "./get-ulid.result";
import type { IdGenerator } from "../../domain/id-generator";
import { GetULIDQuery } from "./get-ulid.query";

@injectable()
export class GetULIDHandlerImpl implements GetULIDHandler {
  constructor(
    @inject(TYPES.IdGenerator)
    private idGenerator: IdGenerator
  ) {}

  async handle(query: GetULIDQuery): Promise<GetULIDResult> {
    const ulid = this.idGenerator.generateULID();

    return new GetULIDResult({ ulid });
  }
}
