"use client";

import React, { memo, useState, useEffect } from "react";
import DesktopNav from "./navigation/DesktopNav";
import MobileNav from "./navigation/MobileNav";
import { useNetworkStats } from "./navigation/hooks/useNetworkStats";
import { useSocialLinks } from "./navigation/hooks/useSocialLinks";

const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { networkStats } = useNetworkStats();
  const { socialLinks } = useSocialLinks();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <DesktopNav networkStats={networkStats} socialLinks={socialLinks} />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} socialLinks={socialLinks} />
    </>
  );
});

export default Navigation;
