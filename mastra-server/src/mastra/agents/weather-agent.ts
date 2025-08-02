import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { weatherTool } from "../tools/weather-tool";
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
  servers: {
    inkeep: {
      url: new URL("https://mcp.inkeep.com/inkeep/mcp"),
    },
  },
});

export const weatherAgent = new Agent({
  name: "Weather Agent",
  instructions: `
      You are a helpful assistant that can answer questions about Inkeep.
      Use the inkeep_search-inkeep-docs tool to answer questions about Inkeep.
`,
  model: openai("gpt-4o-mini"),
  tools: await mcp.getTools(),
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});
