import { getFailingNodes, isCompliant } from "@/lib/helpers";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { type Tree } from "@/types";
import { data } from "@/server/data";

const ENDPPOINT = "https://api.norm.ai/application/interview/tree";

export const documentRouter = createTRPCRouter({
  get: publicProcedure.query(async () => {
    const res = await fetch(ENDPPOINT);

    if (!res.ok) {
      return {
        error: "Failed to get document",
      };
    }

    const jsonData = (await res.json()) as Tree;

    return {
      document: jsonData.tree,
      isCompliant: isCompliant(jsonData.tree),
      failingNodes: getFailingNodes(jsonData.tree),
    };
  }),
  getRandom: publicProcedure.query(() => {
    const randomIdx = Math.floor(Math.random() * data.length);
    const randomElement = data[randomIdx];

    if (!randomElement) {
      return {
        error: "Failed to get document",
      };
    }

    return {
      document: randomElement.tree,
      isCompliant: isCompliant(randomElement.tree),
      failingNodes: getFailingNodes(randomElement.tree),
    };
  }),
  getDeeplyNested: publicProcedure.query(() => {
    const randomElement = data[3];

    if (!randomElement) {
      return {
        error: "Failed to get document",
      };
    }
    return {
      document: randomElement.tree,
      isCompliant: isCompliant(randomElement.tree),
      failingNodes: getFailingNodes(randomElement.tree),
    };
  }),
});
