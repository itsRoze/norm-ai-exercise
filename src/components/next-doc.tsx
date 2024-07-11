"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const NextDocument = () => {
  const router = useRouter();

  return (
    <Button className="bg-opacity-50" onClick={() => router.refresh()}>
      Next Document
    </Button>
  );
};

export default NextDocument;
