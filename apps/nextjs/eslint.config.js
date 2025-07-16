import baseConfig, { restrictEnvAccess } from "@finzo/eslint-config/base";
import nextjsConfig from "@finzo/eslint-config/nextjs";
import reactConfig from "@finzo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
