import { type Tree } from "@/types";

export const data: Tree[] = [
  {
    tree: {
      name: "Root Node",
      type: "root_node",
      children: [
        {
          name: "Check 1",
          type: "check_node",
          status: "FAIL",
          overwrite_message: "Original node output was left unaltered.",
          reason: "Content is not compliant",
          children: [
            {
              name: "Sub-check A of Check 1",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message:
                "Comment added to node output by John Doe esq.",
              reason: "Content is not compliant",
              children: [],
            },
            {
              name: "Sub-check B of Check 1",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message: "Original node output was left unaltered.",
              reason: "Content is not compliant",
              children: [],
            },
          ],
        },
        {
          name: "Check 2",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Node output overwritten by John Doe esq.",
          reason: "Content is compliant",
          children: [
            {
              name: "Sub-check A of Check 2",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message: "Node output overwritten by John Doe esq.",
              reason: "Content is compliant",
              children: [],
            },
          ],
        },
        {
          name: "Check 3",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Comment added to node output by John Doe esq.",
          reason: "Content is compliant",
          children: [],
        },
        {
          name: "Check 4",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Original node output was left unaltered.",
          reason: "Content is compliant",
          children: [
            {
              name: "Sub-check A of Check 4",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message: "Node output overwritten by John Doe esq.",
              reason: "Content is compliant",
              children: [],
            },
          ],
        },
      ],
    },
  },
  {
    tree: {
      name: "Root Node",
      type: "root_node",
      children: [
        {
          name: "Check 1",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Node output overwritten by John Doe esq.",
          reason: "Content is compliant",
          children: [
            {
              name: "Sub-check A of Check 1",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message: "Original node output was left unaltered.",
              reason: "Content is compliant",
              children: [],
            },
          ],
        },
        {
          name: "Check 2",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Original node output was left unaltered.",
          reason: "Content is compliant",
          children: [],
        },
        {
          name: "Check 3",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Node output overwritten by John Doe esq.",
          reason: "Content is compliant",
          children: [
            {
              name: "Sub-check A of Check 3",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message:
                "Comment added to node output by John Doe esq.",
              reason: "Content is compliant",
              children: [],
            },
          ],
        },
        {
          name: "Check 4",
          type: "check_node",
          status: "FAIL",
          overwrite_message: "Original node output was left unaltered.",
          reason: "Content is not compliant",
          children: [
            {
              name: "Sub-check A of Check 4",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message: "Node output overwritten by John Doe esq.",
              reason: "Content is not compliant",
              children: [],
            },
          ],
        },
      ],
    },
  },
  {
    tree: {
      name: "Root Node",
      type: "root_node",
      children: [
        {
          name: "Check 1",
          type: "check_node",
          status: "FAIL",
          overwrite_message: "Node output overwritten by John Doe esq.",
          reason: "Content is not compliant",
          children: [
            {
              name: "Sub-check A of Check 1",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message:
                "Comment added to node output by John Doe esq.",
              reason: "Content is not compliant",
              children: [],
            },
            {
              name: "Sub-check B of Check 1",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message:
                "Comment added to node output by John Doe esq.",
              reason: "Content is compliant",
              children: [],
            },
            {
              name: "Sub-check C of Check 1",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message:
                "Comment added to node output by John Doe esq.",
              reason: "Content is not compliant",
              children: [],
            },
          ],
        },
        {
          name: "Check 2",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Comment added to node output by John Doe esq.",
          reason: "Content is compliant",
          children: [],
        },
      ],
    },
  },
  {
    tree: {
      name: "Root Node",
      type: "root_node",
      children: [
        {
          name: "Check 1",
          type: "check_node",
          status: "FAIL",
          overwrite_message: "Original node output was left unaltered.",
          reason: "Content is not compliant",
          children: [
            {
              name: "Sub-check A of Check 1",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message:
                "Comment added to node output by John Doe esq.",
              reason: "Content is not compliant",
              children: [
                {
                  name: "Sub-check A of Sub-check A",
                  type: "sub_check_node",
                  status: "FAIL",
                  overwrite_message:
                    "Comment added to node output by John Doe esq.",
                  reason: "Content is not compliant",
                  children: [
                    {
                      name: "Sub-check A of Sub-check A of Sub-check A",
                      type: "sub_check_node",
                      status: "FAIL",
                      overwrite_message:
                        "Comment added to node output by John Doe esq.",
                      reason: "Content is not compliant",
                      children: [
                        {
                          name: "Sub-check A of Sub-check A of Sub-check A of Sub-check A",
                          type: "sub_check_node",
                          status: "FAIL",
                          overwrite_message:
                            "Comment added to node output by John Doe esq.",
                          reason: "Content is not compliant",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "Sub-check B of Check 1",
              type: "sub_check_node",
              status: "FAIL",
              overwrite_message: "Original node output was left unaltered.",
              reason: "Content is not compliant",
              children: [],
            },
          ],
        },
        {
          name: "Check 2",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Node output overwritten by John Doe esq.",
          reason: "Content is compliant",
          children: [
            {
              name: "Sub-check A of Check 2",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message: "Node output overwritten by John Doe esq.",
              reason: "Content is compliant",
              children: [
                {
                  name: "Sub-check A of Sub-check A of Check 2",
                  type: "sub_check_node",
                  status: "PASS",
                  overwrite_message: "Node output overwritten by John Doe esq.",
                  reason: "Content is compliant",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          name: "Check 3",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Comment added to node output by John Doe esq.",
          reason: "Content is compliant",
          children: [],
        },
        {
          name: "Check 4",
          type: "check_node",
          status: "PASS",
          overwrite_message: "Original node output was left unaltered.",
          reason: "Content is compliant",
          children: [
            {
              name: "Sub-check A of Check 4",
              type: "sub_check_node",
              status: "PASS",
              overwrite_message: "Node output overwritten by John Doe esq.",
              reason: "Content is compliant",
              children: [],
            },
          ],
        },
      ],
    },
  },
];
