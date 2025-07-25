import "server-only";

import { cache } from "react";
import { headers } from "next/headers";
import { initAuth } from "@finzo/auth";

import { env } from "~/env";

const baseUrl =
  env.VERCEL_ENV === "production"
    ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
    : env.VERCEL_ENV === "preview"
      ? `https://${env.VERCEL_URL}`
      : "http://localhost:3000";

export const auth = initAuth({
  baseUrl,
  productionUrl: `https://${env.VERCEL_PROJECT_PRODUCTION_URL ?? "www.finzo.co"}`,
  secret: env.AUTH_SECRET,
  googleClientId: env.AUTH_GOOGLE_ID!,
  googleClientSecret: env.AUTH_GOOGLE_SECRET!,
});

export const getSession = cache(async () =>
  auth.api.getSession({ headers: await headers() }),
);
