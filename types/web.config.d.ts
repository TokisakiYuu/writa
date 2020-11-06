interface WebConfig {
  domain?: string[],
  httpsPort: number,
  httpPort: number,
  ssl?: SSLOptions,
  publicPathMap?: {
    [rootName: string]: string
  }
}

interface SSLOptions {
  key: string | undefined,
  cert: string | undefined
}