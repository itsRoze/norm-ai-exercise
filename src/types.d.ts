export type TreeNode = {
  name: string;
  type: "root_node" | "check_node" | "sub_check_node";
  status?: "PASS" | "FAIL";
  overwrite_message?: string;
  reason?: string;
  children: TreeNode[];
};

export type Tree = {
  tree: TreeNode;
};
