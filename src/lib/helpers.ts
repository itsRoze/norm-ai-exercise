import { type TreeNode } from "@/types";

export const isCompliant = (node: TreeNode): boolean => {
  if (node.status === "FAIL") {
    return false;
  }
  for (const child of node.children) {
    if (!isCompliant(child)) {
      return false;
    }
  }
  return true;
};

export const isChildrenCompliant = (node: TreeNode): boolean => {
  for (const child of node.children) {
    if (!isCompliant(child)) {
      return false;
    }
  }
  return true;
};

export const isNodeCompliant = (node: TreeNode): boolean => {
  return node.status === "PASS";
};

export const getFailingNodes = (node: TreeNode): TreeNode[] => {
  let failingNodes: TreeNode[] = [];
  if (node.status === "FAIL") {
    failingNodes.push(node);
  }
  for (const child of node.children) {
    failingNodes = failingNodes.concat(getFailingNodes(child));
  }
  return failingNodes;
};
