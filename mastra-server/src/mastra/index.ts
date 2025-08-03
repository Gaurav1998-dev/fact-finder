import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { inkeepAgent } from "./agents/inkeep-agent";
import { registerCopilotKit } from "@ag-ui/mastra";

type InkeepRuntimeContext = {
  "user-id": string;
};

export const mastra = new Mastra({
  agents: { inkeepAgent },
  server: {
    cors: {
      origin: "*",
      allowMethods: ["*"],
      allowHeaders: ["*"],
    },
    apiRoutes: [
      registerCopilotKit<InkeepRuntimeContext>({
        path: "/copilotkit",
        resourceId: "inkeepAgent",
        setContext: (c, runtimeContext) => {
          runtimeContext.set(
            "user-id",
            c.req.header("X-User-ID") || "anonymous"
          );
        },
      }),
    ],
  },
  storage: new LibSQLStore({
    // stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
    url: ":memory:",
  }),
  logger: new PinoLogger({
    name: "Mastra",
    level: "info",
  }),
});
