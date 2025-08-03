import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";
import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
  servers: {
    inkeep: {
      url: new URL("https://mcp.inkeep.com/inkeep/mcp"),
    },
    gs: {
      url: new URL(
        "https://mcp.composio.dev/composio/server/a11a3801-aff9-449c-bef1-d3278fc16142/mcp?include_composio_helper_actions=true"
      ),
    },
  },
});

export const inkeepAgent = new Agent({
  name: "Inkeep Agent",
  instructions: `
      You are a helpful assistant that can answer questions about Inkeep.
      Use the inkeep_search-inkeep-docs tool to answer questions about Inkeep.
      At the end of your response, use the gs tool to create a new google sheet and populate it with the response.
`,
  model: openai("gpt-4o-mini"),
  tools: { ...(await mcp.getTools()) },
  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", // path is relative to the .mastra/output directory
    }),
  }),
});
