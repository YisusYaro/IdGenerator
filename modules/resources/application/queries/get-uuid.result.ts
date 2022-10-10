import { Result } from "../../../shared/application/result";

export class GetUUIDResult implements Result {
  constructor(properties: { uuid: string }) {
    Object.assign(this, properties);
  }
}
