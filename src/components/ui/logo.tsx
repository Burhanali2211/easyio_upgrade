"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const Logo = ({ className = "" }: { className?: string }) => {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [logoType, setLogoType] = useState<string>("default");
  const [siteName, setSiteName] = useState<string>("EASYIO");
  const [siteTagline, setSiteTagline] = useState<string>("Technologies");
  const [hoverAnimationEnabled, setHoverAnimationEnabled] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const { data, error } = await supabase
          .from('website_settings')
          .select('*');

        if (error) {
          // Table might not exist yet, use defaults
          console.warn('Website settings table not found, using defaults:', error.message);
          setLoading(false);
          return;
        }

        if (data) {
          const settingsMap: Record<string, string> = {};
          data.forEach((setting: any) => {
            settingsMap[setting.setting_key] = setting.setting_value || '';
          });

          if (settingsMap.logo_url) setLogoUrl(settingsMap.logo_url);
          if (settingsMap.logo_type) setLogoType(settingsMap.logo_type);
          if (settingsMap.site_name) setSiteName(settingsMap.site_name);
          if (settingsMap.site_tagline) setSiteTagline(settingsMap.site_tagline);
          if (settingsMap.hover_animation_enabled === 'true') {
            setHoverAnimationEnabled(true);
          }
        }
      } catch (error) {
        console.error('Error fetching logo settings:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSettings();

    // Subscribe to changes (only if table exists)
    let channel: any;
    try {
      channel = supabase
        .channel('website_settings_changes')
        .on('postgres_changes', 
          { event: '*', schema: 'public', table: 'website_settings' },
          () => {
            fetchSettings();
          }
        )
        .subscribe();
    } catch (error) {
      // Subscription might fail if table doesn't exist
      console.warn('Could not subscribe to settings changes:', error);
    }

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  if (loading) {
    return (
      <div className={`relative flex items-center gap-3 ${className}`}>
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="relative z-10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 6H20M4 18H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
              <path d="M4 12V6M20 12V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-white" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-display font-black tracking-tighter text-white leading-none">
            {siteName.includes('IO') ? (
              <>
                {siteName.split('IO')[0]}<span className="text-white">IO</span>
              </>
            ) : (
              siteName
            )}
          </span>
          <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground uppercase">
            {siteTagline}
          </span>
        </div>
      </div>
    );
  }

  const logoContainerClass = hoverAnimationEnabled 
    ? "transition-opacity hover:opacity-80" 
    : "";

  return (
    <div className={`relative flex items-center gap-3 ${className} ${logoContainerClass}`}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {logoType === 'custom' && logoUrl ? (
          <>
            <img 
              src={logoUrl} 
              alt={`${siteName} Logo`}
              className="w-full h-full object-contain relative z-10"
              onError={() => {
                setLogoType('default');
                setLogoUrl('');
              }}
            />
          </>
        ) : (
          <>
            {/* Animated Background Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-primary/20 rounded-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 border border-accent/30 rounded-lg"
            />
            
            {/* The "E" Mark */}
            <div className="relative z-10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M4 6H20M4 18H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary" />
                <path d="M4 12V6M20 12V6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-white" />
              </svg>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          </>
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-display font-black tracking-tighter text-white leading-none">
          {siteName.includes('IO') ? (
            <>
              {siteName.split('IO')[0]}<span className="text-white">iO</span>
            </>
          ) : (
            siteName
          )}
        </span>
        <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground uppercase">
          {siteTagline}
        </span>
      </div>
    </div>
  );
};

export default Logo;
