import Image from "next/image";
import { CopilotKitComponent } from "@/components/copilotkit-component";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto">
      <CopilotKitComponent runtimeUrl="/api/copilotkit" />
    </div>
  );
}
