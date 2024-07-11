"use client";

import { cn } from "@/lib/utils";
import { type TreeNode } from "@/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface IFailingChecks {
  checks: TreeNode[];
}

const FailingChecks: React.FC<IFailingChecks> = ({ checks }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <button onClick={() => setCollapsed((prev) => !prev)}>
        <h3 className="flex items-center gap-x-1 font-semibold">
          <ChevronDown
            size={18}
            className={cn("transition-transform duration-100 ease-in-out", {
              "-rotate-90 transform": collapsed,
            })}
          />{" "}
          The following checks failed compliance
        </h3>
      </button>
      <ul
        className={cn("ml-6 flex flex-col gap-4", {
          hidden: collapsed,
        })}
      >
        {checks.map((node, idx) => (
          <li key={idx}>
            <p className="w-fit rounded-lg bg-blue-50/25 px-1">{node.name}</p>
            <p className="text-sm italic">{node.overwrite_message}</p>
            <div className="flex gap-2 py-1">
              <Button className="bg-opacity-50" size={"sm"}>
                Ignore
              </Button>
              <Button className="bg-opacity-50" size={"sm"}>
                Resolve
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FailingChecks;
