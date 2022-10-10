import { injectable } from "inversify";
import { ulid } from "ulid";
import { v4 as uuidv4 } from 'uuid';
import { IdGenerator } from "../../domain/id-generator";

@injectable()
export class IdGeneratorImpl implements IdGenerator {
  generateULID(): string {
    return ulid();
  }
  generateUUID(): string {
    return uuidv4().toString();
  }
}
