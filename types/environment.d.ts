export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HASHNODE_BLOG_URL: string;
      NEXT_PUBLIC_HASHNODE_USERNAME: string;
    }
  }
}
