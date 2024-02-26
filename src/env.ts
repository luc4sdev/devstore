import { createEnv } from "@t3-oss/env-nextjs/dist";
import { z } from "zod";

export const env = createEnv({

  server: {
    APP_URL: z.string().url(),
    OPEN_AI_API_KEY: z.string().min(1),
  },
 
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  
  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
});