declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BLOB_READ_WRITE_TOKEN: string;

      PUBLIC_URL: string;

      REDIS_API_TOKEN: string;
      REDIS_API_URL: string;
    }
  }
}

export {};
