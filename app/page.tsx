"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";
import Link from "next/link";

export default function HomePage() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <>
      <Button component={Link} href="/signin">
        Navigate to sign in
      </Button>
      <Button component={Link} href="/guide">
        Navigate to Guide dashboard
      </Button>

      <Button component={Link} href="/vendor">
        Navigate to Vendor dashboard
      </Button>


      <Group>
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      <Button onClick={clearColorScheme}>Clear</Button>
    </Group>
    </>
  );
}

