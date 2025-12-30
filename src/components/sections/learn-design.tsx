"use client";

import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/Mu9Q0JWKK6E5HDHM0BEhNdyzk-10.svg",
    title: "App Design",
    description: "Start learning App design"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/2FKWrFxbWiKLsNFdbUHQggHxA-11.svg",
    title: "Web Design",
    description: "All about web design"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/F5qnsOLzmxYOOdUw3xhDWjZI0zs-12.svg",
    title: "Design Trends",
    description: "Stay with the latest designs."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/sFO95hU0gXkq53AKMLD6Kd2dc-13.svg",
    title: "Daily UI Challenge",
    description: "Improve with daily UI tasks."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/6HAYccCQkzNcf7QbW85JFggcv8-14.svg",
    title: "Webflow Series",
    description: "Design, Build & Launch"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/iv5YYzT4yK5He5vr6e6LvB5Ooio-15.svg",
    title: "Graphic Design",
    description: "Dive into creative design."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/jCykccly5w2bAdL3FufmFrmzPg0-16.svg",
    title: "Framer",
    description: "Interactive design made easy."
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/3Rsmu68Kx9dpLJUXb9EWTHqeRM-17.svg",
    title: "Tips & Tricks",
    description: "Quick tips for better design"
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/afb2314f-67e2-407d-89d7-103620cb16db-thedesignsense-io/assets/svgs/0Lcf4FptToa1kJY8Ih5R15G2FiU-18.svg",
    title: "DesignSense Shorts",
    description: "Learn design in shorts"
  }
];

export default function LearnDesign() {
  return (
    <section className="relative w-full bg-muted dark:bg-[#050508] text-foreground dark:text-white pt-[120px] pb-[120px] z-10">
      <div className="container mx-auto px-8 max-w-[1440px]">
        {/* Header Section */}
        <div className="mb-[64px] max-w-[1000px]">
          <div className="mb-4">
            <h2 className="text-[16px] font-bold uppercase tracking-wider text-foreground dark:text-white">
              Learn Design
            </h2>
            <div className="h-[2px] w-12 bg-primary dark:bg-[#6017ff] mt-4" />
          </div>
          <p className="text-muted-foreground dark:text-[#a1a1a1] text-[18px] lg:text-[20px] leading-[1.6] mt-8 font-sans max-w-[850px]">
            Our video tutorials cover UX/UI design principles, web and graphic design, as well as advanced topics like prototyping and usability testing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border dark:border-[#1a1a1a]">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col p-12 border-r border-b border-border dark:border-[#1a1a1a] transition-all duration-300 hover:bg-muted/50 dark:hover:bg-[#111116] group min-h-[300px]"
            >
              <div className="mb-auto">
                <div className="relative w-10 h-10 mb-10">
                  <Image 
                    src={feature.icon} 
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain filter brightness-75 dark:brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-display text-[22px] font-bold mb-3 text-foreground dark:text-white">
                  {feature.title}
                </h3>
                <p className="font-sans text-[15px] text-muted-foreground dark:text-[#6a6a6e] group-hover:text-foreground/80 dark:group-hover:text-[#a1a1a1] transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
