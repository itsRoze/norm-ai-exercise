import { api, HydrateClient } from "@/trpc/server";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import NextDocument from "@/components/next-doc";
import FailingChecks from "@/components/failing-checks";
import NodeCard from "@/components/node";
import { type TreeNode } from "@/types";

export default async function Home() {
  const data = await api.document.get();

  void api.document.get.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-[100svh] flex-col items-center gap-y-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] px-4 py-2 text-white">
        <header className="flex items-center gap-x-2 self-start">
          <Logo />
          <p className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Norm AI
          </p>
        </header>
        {data.error ?? data.isCompliant == null ? (
          <section className="self-start">
            <h3>{data.error}</h3>
            <p>Try refreshing the page</p>
          </section>
        ) : (
          <Analysis {...data} />
        )}
      </main>
    </HydrateClient>
  );
}

interface IAnalysis {
  isCompliant: boolean;
  document: TreeNode;
  failingNodes: TreeNode[];
}

const Analysis: React.FC<IAnalysis> = ({
  isCompliant,
  document,
  failingNodes,
}) => {
  return (
    <>
      <section className="flex w-full justify-between">
        <h1 className="text-lg font-semibold sm:text-3xl">
          Document
          <span
            className={cn({
              "text-green-500": isCompliant,
              "text-red-500": !isCompliant,
            })}
          >
            {isCompliant ? " passes " : "  fails "}
          </span>
          compliance
        </h1>
        <NextDocument />
      </section>
      <div className="flex w-full flex-col md:flex-row">
        <section className="container flex flex-col border-r border-r-white/10 px-2 py-4">
          {isCompliant ? (
            <p>All checks pass</p>
          ) : (
            <FailingChecks checks={failingNodes} />
          )}
        </section>
        <section className="container flex flex-col px-2 py-4">
          <NodeCard node={document} />
        </section>
      </div>
    </>
  );
};
