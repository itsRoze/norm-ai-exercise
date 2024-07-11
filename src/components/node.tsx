"use client";

import { cn } from "@/lib/utils";
import { type TreeNode } from "@/types";
import { useState } from "react";

interface INodeCard {
  node: TreeNode;
  depth?: number;
}
const NodeCard: React.FC<INodeCard> = ({ node, depth = 1 }) => {
  const [collapsed, setCollapsed] = useState(depth > 1);

  return (
    <>
      <button
        className={cn("my-1 flex max-w-xs flex-col rounded-xl p-2", {
          "bg-white/10 hover:bg-white/20": node.status !== "FAIL",
          "bg-red-500/50 hover:bg-red-500/75": node.status === "FAIL",
        })}
        style={{ marginLeft: `${depth * 2.25}rem` }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <h3 className="text-lg font-bold">
          {node.children.length > 0 ? (collapsed ? "→" : "↓") : ""} {node.name}
        </h3>
        <div className="text-left text-sm">
          <p>Status: {node.status === "PASS" ? "Passes" : "Fails"}</p>
          <p>{node.reason}</p>
          <p className="italic">{node.overwrite_message}</p>
        </div>
      </button>
      {!collapsed
        ? node.children.map((child, idx) => (
            <NodeCard key={idx} node={child} depth={depth + 1} />
          ))
        : null}
    </>
  );
};

export default NodeCard;
