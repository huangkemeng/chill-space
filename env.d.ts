/// <reference types="vite/client" />
interface ImportMetaEnv {
  /*
   * 运行环境
   * */
  readonly NODE_ENV: string
  /**
   * 网站默认标题
   */
  readonly VITE_APP_TITLE: string
  /**
   * 测试版、正式版等
   */
  readonly VITE_APP_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
