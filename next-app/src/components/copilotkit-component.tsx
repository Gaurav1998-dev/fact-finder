'use client';
import { CopilotChat } from "@copilotkit/react-ui";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
 
export function CopilotKitComponent({ runtimeUrl }: { runtimeUrl: string}) {
  return (                                                     
    <CopilotKit
      runtimeUrl={runtimeUrl}
      agent="weatherAgent"
    >
      <CopilotChat
        labels={{
          title: "Your Assistant",
          initial: "Hi! 👋 How can I assist you today?",
        }}
        className="h-full"
      />
    </CopilotKit>
  );
}