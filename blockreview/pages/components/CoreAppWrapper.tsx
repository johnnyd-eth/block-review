import { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function CoreAppWrapper({
  children,
}: PropsWithChildren<Record<never, never>>) {
  return (
    <main>
      <Nav />
      {/* Page */}
      <div>{children}</div>
      <Footer />
    </main>
  );
}
