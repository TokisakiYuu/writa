interface WebConfig {
  domain?: string[],
  httpsPort: number,
  httpPort: number,
  ssl?: SSLOptions,
  publicPathMap?: {
    [rootName: string]: string
  },
  upload?: UploadOption
}

interface SSLOptions {
  key: string | undefined,
  cert: string | undefined
}

interface UploadOption {
  dir: string
}