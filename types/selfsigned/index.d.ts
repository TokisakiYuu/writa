declare module "selfsigned" {
  /**
   * 生成函数
   */
  export function generate(arrts: SelfsignedArrt[], opions: SelfsignedOptions): SelfsignedPerms;
  export function generate(arrts: SelfsignedArrt[], opions: SelfsignedOptions, callBack: (err: any, perms: SelfsignedPerms) => void): void
}

/**
 * 生成证书时需要询问的信息
 */
declare interface SelfsignedArrt {
  name: string,
  value: string
}

/**
 * selfsigned 配置项
 */
declare interface SelfsignedOptions {
  /**
   * the size for the private key in bits (default: 1024)
   */
  keySize?: number,
  /**
   * how long till expiry of the signed certificate (default: 365)
   */
  days?: number,
  /**
   * sign the certificate with specified algorithm (default: 'sha1')
   */
  algorithm?: string | "sha256" | "sha1",
  /**
   * certificate extensions array
   */
  extensions?: {name: string, cA: boolean}[],
  /**
   * include PKCS#7 as part of the output (default: false)
   */
  pkcs7?: boolean,
  /**
   * generate client cert signed by the original key (default: false)
   */
  clientCertificate?: boolean,
  /**
   * client certificate's common name (default: 'John Doe jdoe123')
   */
  clientCertificateCN?: string
}

declare interface SelfsignedPerms {
  private: string,
  public: string,
  cert: string,
  clientprivate: string,
  clientpublic: string,
  clientcert: string
}