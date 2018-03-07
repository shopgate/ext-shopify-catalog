interface PipelineContext {
  config: PipelineConfiguration
  log: PipelineLogger
  storage: PipelineStorageContainer
}

interface PipelineStorageGetCallback {
  (err: Error | null, value: string | number | Object): void
}

interface PipelineStorageDelCallback {
  (err: Error | null, value: string | number | Object): void
}

interface PipelineStorageSetCallback {
  (err: Error | null, value: string | number | Object): void
}

interface PipelineStorage {
  get(key: string, callback: PipelineStorageGetCallback)

  set(key: string, value: string | number | Object, callback: PipelineStorageSetCallback)

  del(key: string, callback: PipelineStorageDelCallback)
}

interface PipelineStorageContainer {
  user: PipelineStorage
  device: PipelineStorage
  extension: PipelineStorage
}

interface PipelineConfiguration {
  shopifyAccessToken: string
  shopifyShopAlias: string
}

interface PipelineLogger {
  error(metaInformation: Object, message: string)

  error(message: string)

  debug(metaInformation: Object, message: string)

  debug(message: string)

  info(metaInformation: Object, message: string)

  info(message: string)
}
