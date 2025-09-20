import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { BlogSection } from "./sections/BlogSection/BlogSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FeaturesWrapperSection } from "./sections/FeaturesWrapperSection/FeaturesWrapperSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { MetricsSection } from "./sections/MetricsSection/MetricsSection";
import { NewsletterCtaSection } from "./sections/NewsletterCtaSection/NewsletterCtaSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { TestimonialSection } from "./sections/TestimonialSection/TestimonialSection";
import { TestimonialWrapperSection } from "./sections/TestimonialWrapperSection/TestimonialWrapperSection";

const navigationItems = [
  { label: "Home", hasDropdown: false },
  { label: "Products", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

const mediaLogos = [
  {
    src: "/the-better-india.svg",
    alt: "The better india",
    className: "w-44 h-[132px]",
  },
  {
    src: "/the-times-of-india.svg",
    alt: "The times of india",
    className: "w-[226px] h-20",
  },
  {
    src: "/yourstory.svg",
    alt: "Yourstory",
    className: "w-[196px] h-[99.18px]",
  },
];

export const NaricareLanding = (): JSX.Element => {
  return (
    <div className="bg-[#ffffff] overflow-hidden w-full min-w-[1440px] relative">
      <header className="w-full h-[120px] flex relative z-10">
        <div className="flex h-[120px] flex-1 relative flex-col w-full items-center justify-center">
          <div className="w-full max-w-[1280px] items-center justify-between px-8 py-0 flex">
            <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
              <img
                className="relative flex-[0_0_auto] h-12 w-auto"
                alt="Logo"
                src="/logo.svg"
              />

              <NavigationMenu className="absolute top-1 left-[calc(50.00%_+_162px)]">
                <NavigationMenuList className="inline-flex items-center gap-8">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      {item.hasDropdown ? (
                        <NavigationMenuTrigger className="inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-6 whitespace-nowrap">
                            {item.label}
                          </div>
                          <ChevronDownIcon className="w-5 h-5" />
                        </NavigationMenuTrigger>
                      ) : (
                        <div className="inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative">
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-6 whitespace-nowrap">
                            {item.label}
                          </div>
                        </div>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <Button className="inline-flex h-12 gap-3 px-6 py-4 flex-[0_0_auto] bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#8383ed]">
                <div className="relative w-fit mt-[-8.00px] mb-[-4.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-base tracking-[0] leading-7 whitespace-nowrap">
                  Contact us
                </div>

                <img
                  className="relative w-6 h-6 mt-[-4.00px] mb-[-4.00px]"
                  alt="Whatsapp"
                  src="/whatsapp.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col w-full items-start relative">
        <HeroSection />

        <img
          className="absolute top-[45px] left-[180px] w-[129px] h-[42px] z-10"
          alt="Group"
          src="/group.png"
        />

        <section className="flex w-full items-start justify-center pt-[142px] pb-24 px-0 relative bg-gray-50">
          <div className="flex-col max-w-screen-xl items-center gap-8 px-8 py-0 flex-1 grow flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Merriweather',Helvetica] font-medium text-gray-600 text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
              Featured in leading publications and media outlets
            </div>

            <div className="inline-flex items-center gap-[123px] relative flex-[0_0_auto]">
              {mediaLogos.map((logo, index) => (
                <img
                  key={index}
                  className={`relative ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>

            <img
              className="relative w-[946px] flex-[0_0_auto]"
              alt="Frame"
              src="/frame-36722.svg"
            />
          </div>
        </section>

        <FeaturesSection />
        <TestimonialSection />
        <FeaturesWrapperSection />
        <MetricsSection />
        <TeamSection />
        <MainContentSection />
        <TestimonialWrapperSection />
        <PricingSection />
        <BlogSection />
        <img
          className="relative w-full flex-[0_0_auto]"
          alt="Blog section"
          src="/blog-section.svg"
        />
        <FaqSection />
        <NewsletterCtaSection />
        <FooterSection />
      </main>
    </div>
  );
};
