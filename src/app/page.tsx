import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <div className="grid h-screen place-items-center">
        <h1 className="text-2xl font-bold">Hello World</h1>
      </div>
    </HydrateClient>
  );
}
