const QUERY_HANDLERS = {
  GetUUIDHandler: Symbol.for('GetUUIDHandler'),
  GetULIDHandler: Symbol.for('GetULIDHandler'),
};

const APPLICATION = {
  ...QUERY_HANDLERS,
};

const INFRASTRUCTURE = {
  IdGenerator: Symbol.for('IdGenerator'),
};

export const TYPES = {
  ...APPLICATION,
  ...INFRASTRUCTURE,
};
