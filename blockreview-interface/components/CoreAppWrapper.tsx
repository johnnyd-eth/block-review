import { PropsWithChildren } from "react";
import { Nav } from "./ui/Nav";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "./ui/Footer";

const queryClient = new QueryClient()

export function CoreAppWrapper({
  children,
}: PropsWithChildren<Record<never, never>>) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='font-body'>
        <Nav />
        <div className="flex justify-center">{children}</div>
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
