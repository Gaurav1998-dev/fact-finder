"use client";
import { CopilotChat } from "@copilotkit/react-ui";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import { useCopilotAction } from "@copilotkit/react-core";

export function CopilotKitComponent({ runtimeUrl }: { runtimeUrl: string }) {
  return (
    <CopilotKit runtimeUrl={runtimeUrl} agent="inkeepAgent">
      <CopilotChatWrapper />
    </CopilotKit>
  );
}

function CopilotChatWrapper() {
  useCopilotAction({
    name: "inkeep_ask-question-about-inkeep",
    available: "disabled", // Don't allow the agent or UI to call this tool as its only for rendering
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status !== "complete" && "Asking Inkeep..."}
          {status === "complete" && `Asked Inkeep: ${args.question}.`}
        </p>
      );
    },
  });

  useCopilotAction({
    name: "inkeep_search-inkeep-docs",
    available: "disabled", // Don't allow the agent or UI to call this tool as its only for rendering
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status !== "complete" && "Searching Inkeep docs..."}
          {status === "complete" && `Searched Inkeep docs for ${args.query}.`}
        </p>
      );
    },
  });

  useCopilotAction({
    name: "gs_GOOGLESHEETS_CREATE_GOOGLE_SHEET1",
    available: "disabled", // Don't allow the agent or UI to call this tool as its only for rendering
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status !== "complete" && "Creating new sheet..."}
          {status === "complete" &&
            `Created new sheet with title ${args.title}.`}
        </p>
      );
    },
  });

  useCopilotAction({
    name: "gs_GOOGLESHEETS_BATCH_UPDATE",
    available: "disabled", // Don't allow the agent or UI to call this tool as its only for rendering
    render: ({ status, args }) => {
      return (
        <p className="text-gray-500 mt-2">
          {status !== "complete" && "Updating Google Sheet..."}
          {status === "complete" && `Updated Google Sheet`}
        </p>
      );
    },
  });

  return (
    <CopilotChat
      labels={{
        title: "Your Assistant",
        initial: "Hi! 👋 How can I assist you today?",
      }}
      className="h-full"
    />
  );
}
