export interface IdGenerator {
  generateULID(): string;
  generateUUID(): string;
}