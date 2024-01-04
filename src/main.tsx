import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { installSkeleton } from "./skeleton/install";
import { createApp } from "./pages/create";
import { installHeader } from "./ui/header/install";
import { installServices } from "./services/install";

async function main() {

  const { skeleton, skeletonConfig } = installSkeleton();
  const { headerController } = installHeader({ skeletonConfig });
  const { articleProvider } = await installServices();
  const { App } = createApp({ headerController, articleProvider });

  skeletonConfig.Content = App;

  render(
    <div>
      { skeleton }
    </div>
  );
}

function render(App: ReactNode) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        {App}
      </BrowserRouter>
    </StrictMode>
  );
}

main();
