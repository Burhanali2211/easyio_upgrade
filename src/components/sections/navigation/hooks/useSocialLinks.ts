"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Twitter } from "lucide-react";
import { SocialLink } from "../types";

export function useSocialLinks() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ]);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch('/api/website-settings');
        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            const settingsMap: Record<string, string> = {};
            result.data.forEach((setting: { setting_key: string; setting_value: string }) => {
              settingsMap[setting.setting_key] = setting.setting_value || '';
            });

            const updatedLinks: SocialLink[] = [
              { name: "GitHub", href: settingsMap.github_url || "https://github.com", icon: Github },
              { name: "Instagram", href: settingsMap.instagram_url || "https://instagram.com", icon: Instagram },
              { name: "Twitter", href: settingsMap.twitter_url || "https://twitter.com", icon: Twitter },
            ];
            setSocialLinks(updatedLinks);
          }
        }
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  return { socialLinks };
}
