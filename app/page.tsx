"use client";

import { Button } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {

  return (
    <>
      <Button component={Link} href="/signin">
        Navigate to sign in
      </Button>
      <Button component={Link} href="/guide">
        Navigate to Guide dashboard
      </Button>
    </>
  );
}
