import { Result } from "../../../shared/application/result";

export class GetULIDResult implements Result {
  constructor(properties: { ulid: string }) {
    Object.assign(this, properties);
  }
}
