export const DBConfig = {
  name: "Articles_DB",
  version: 1,
  objectStoresMeta: [
    {
      store: "articles",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "text", keypath: "text", options: { unique: false } },
      ],
    },
  ],
};
