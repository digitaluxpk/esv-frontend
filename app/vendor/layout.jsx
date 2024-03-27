"use client";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import VendorNavBar from "@/app/components/commonLayout/VendorNavBar";
import Header from "@/app/components/commonLayout/Header";

export default function VendorLayout({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 256,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <Header
        desktopOpened={desktopOpened}
        toggleDesktop={toggleDesktop}
        mobileOpened={mobileOpened}
        toggleMobile={toggleMobile}
      />

      <VendorNavBar />

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
