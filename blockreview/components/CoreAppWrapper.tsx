import { PropsWithChildren } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function CoreAppWrapper({
  children,
}: PropsWithChildren<Record<never, never>>) {
  return (
    <main className='font-body'>
      <Nav />
      <div className="flex justify-center">{children}</div>
    </main>
  );
}
