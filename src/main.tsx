import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

function main() {
  render(<div>Hello World!</div>);
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
