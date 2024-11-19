type TypesMap = {
  // cache
  mmkv: symbol;

  // local
  watermelon: symbol;
};

const Types: TypesMap = {
  // cache
  mmkv: Symbol.for('MMKV'),

  // local
  watermelon: Symbol.for('WatermelonDb'),
}

export {
  type TypesMap,
  Types,
};
