import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
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
  { label: "Home", hasDropdown: false, action: "reload" },
  { label: "Products", hasDropdown: false, href: "#products" },
  { label: "Resources", hasDropdown: false, href: "#resources" },
  { label: "Pricing", hasDropdown: false, href: "#pricing" },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const handleNavigation = (item: any) => {
  if (item.action === "reload") {
    window.location.reload();
  } else if (item.href) {
    scrollToSection(item.href);
  }
};

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavigation = (item: any) => {
    handleNavigation(item);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <div className="naricare-app bg-[#ffffff] overflow-hidden w-full relative">
      <header className="naricare-header w-full h-16 lg:h-[120px] flex relative z-10">
        <div className="header-container flex h-16 lg:h-[120px] flex-1 relative flex-col w-full items-center justify-center">
          <div className="header-content w-full max-w-[1280px] items-center justify-between px-4 lg:px-12 py-0 flex">
            <div className="header-left inline-flex items-center gap-4 lg:gap-10 relative flex-[0_0_auto]">
              <div className="naricare-logo inline-flex items-center relative flex-[0_0_auto]">
                <img
                  className="logo-icon relative flex-[0_0_auto] h-8 lg:h-12 w-auto -mr-2"
                  alt="NariCare Logo"
                  src="/logo.svg"
                />
                <div className="logo-text flex flex-col items-start relative" style={{ marginLeft: '-1.5rem' }}>
                  <div className="brand-name relative [font-family:'Merriweather',Helvetica] font-medium text-lg lg:text-xl tracking-[0] leading-tight">
                    <span className="brand-nari text-[#8383ed]">Nari</span>
                    <span className="brand-care text-[#ff9e88]">Care</span>
                  </div>
                  <div className="brand-tagline relative [font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs lg:text-sm tracking-[0] leading-tight">
                    Your breast friend
                  </div>
                </div>
              </div>

              <NavigationMenu className="desktop-navigation hidden pt-[0.5rem] lg:block absolute top-1 left-[calc(50.00%_+_162px)]">
                <NavigationMenuList className="nav-list inline-flex items-center gap-8">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem className="nav-item" key={index}>
                      {item.hasDropdown ? (
                        <NavigationMenuTrigger className="nav-trigger inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                          <div className="nav-label relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-6 whitespace-nowrap">
                            {item.label}
                          </div>
                        </NavigationMenuTrigger>
                      ) : (
                        <div 
                          className="nav-link inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative cursor-pointer"
                          onClick={() => handleNavigation(item)}
                        >
                          <div className="nav-label relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-gray-600 text-base tracking-[0] leading-6 whitespace-nowrap">
                            {item.label}
                          </div>
                        </div>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="header-right inline-flex items-center gap-2 lg:gap-3 relative flex-[0_0_auto]">
              {/* Mobile burger menu button */}
              <Button
                onClick={toggleMobileMenu}
                className="mobile-menu-toggle lg:hidden inline-flex h-12 w-12 items-center justify-center bg-transparent hover:bg-gray-100 rounded-md border-none shadow-none"
                variant="ghost"
                size="icon"
              >
                {isMobileMenuOpen ? (
                  <XIcon className="menu-close-icon h-8 w-8 text-gray-600" />
                ) : (
                  <MenuIcon className="menu-open-icon h-8 w-8 text-gray-600" />
                )}
              </Button>

              {/* Contact us button - hidden on mobile, visible on desktop */}
              <Button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank')}
                className="contact-us-btn desktop-only hidden lg:inline-flex h-10 lg:h-12 gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-4 flex-[0_0_auto] bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#8383ed]"
              >
                <div className="btn-text relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-sm lg:text-base tracking-[0] leading-5 lg:leading-7 whitespace-nowrap">
                  Contact us
                </div>

                <img
                  className="whatsapp-icon relative w-4 lg:w-6 h-4 lg:h-6"
                  alt="Whatsapp"
                  src="/whatsapp.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden fixed inset-0 z-50 bg-white">
          <div className="mobile-menu-content flex flex-col h-full">
            {/* Mobile Header */}
            <div className="mobile-menu-header flex items-center justify-between p-4 border-b">
              <div className="mobile-logo inline-flex items-center relative flex-[0_0_auto]">
                <img
                  className="mobile-logo-icon relative flex-[0_0_auto] h-8 w-auto -mr-2"
                  alt="NariCare Logo"
                  src="/logo.svg"
                />
                <div className="mobile-logo-text flex flex-col items-start relative" style={{ marginLeft: '-1.5rem' }}>
                  <div className="mobile-brand-name relative [font-family:'Merriweather',Helvetica] font-medium text-lg tracking-[0] leading-tight">
                    <span className="mobile-brand-nari text-[#8383ed]">Nari</span>
                    <span className="mobile-brand-care text-[#ff9e88]">Care</span>
                  </div>
                  <div className="mobile-brand-tagline relative [font-family:'Poppins',Helvetica] font-normal text-[#8383ed] text-xs tracking-[0] leading-tight">
                    Your breast friend
                  </div>
                </div>
              </div>
              <Button
                onClick={toggleMobileMenu}
                className="mobile-menu-close inline-flex h-10 w-10 items-center justify-center bg-transparent hover:bg-gray-100 rounded-md border-none shadow-none"
                variant="ghost"
                size="icon"
              >
                <XIcon className="mobile-close-icon h-6 w-6 text-gray-600" />
              </Button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="mobile-nav-section flex-1 overflow-y-auto py-6">
              <nav className="mobile-nav flex flex-col space-y-1 px-4 pt-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleMobileNavigation(item)}
                    className="mobile-nav-item flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    data-nav-item={item.label.toLowerCase().replace(' ', '-')}
                  >
                    <span className="mobile-nav-label [font-family:'Poppins',Helvetica] font-semibold text-gray-900 text-lg">
                      {item.label}
                    </span>
                  </button>
                ))}
                
                {/* Contact us button inside menu */}
                <div className="mobile-contact-container px-4 mt-4">
                  <Button
                    onClick={() => {
                      window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                    className="mobile-contact-btn w-full inline-flex h-12 gap-3 px-6 py-4 bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7373dd]"
                  >
                    <span className="mobile-contact-text relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-7 whitespace-nowrap">
                      Contact us
                    </span>
                    <img
                      className="mobile-whatsapp-icon relative w-6 h-6"
                      alt="Whatsapp"
                      src="/whatsapp.svg"
                    />
                  </Button>
                </div>
              </nav>
            </div>

            {/* Mobile Contact Button */}
            <div className="mobile-bottom-cta p-4 border-t">
              <Button 
                onClick={() => {
                  window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="mobile-bottom-contact-btn w-full inline-flex h-12 gap-3 px-6 py-4 bg-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#7373dd]"
              >
                <span className="mobile-bottom-contact-text relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-base tracking-[0] leading-7 whitespace-nowrap">
                  Contact us
                </span>
                <img
                  className="mobile-bottom-whatsapp-icon relative w-6 h-6"
                  alt="Whatsapp"
                  src="/whatsapp.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="main-content flex flex-col w-full items-start relative">
        <div className="relative w-full">
          <HeroSection />
          
          {/* Stats Card - Overlapping both sections */}
          <Card className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl mx-4 lg:mx-0 bg-[#ffffff] rounded-2xl shadow-[0px_4px_4px_#00000026] z-30">
            <CardContent className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 p-6 lg:p-0 lg:px-12 lg:py-6">
              {[
                {
                  number: "600+",
                  description: "Mothers supported",
                  icon: "/mothers-supported.svg",
                  alt: "Mothers supported",
                },
                {
                  number: "25+",
                  description: "Years experience",
                  icon: "/years-experience.svg",
                  alt: "Years experience",
                },
                {
                  number: "24/7",
                  description: "Support available",
                  icon: "/support-available.svg",
                  alt: "Support available",
                },
              ].map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex w-full lg:w-[302px] items-center justify-between relative">
                    <div className="flex flex-col flex-1 lg:w-[179px] items-start relative">
                      <div className="relative self-stretch [font-family:'Merriweather',Helvetica] font-semibold text-black text-3xl lg:text-5xl tracking-[-0.96px] leading-tight lg:leading-[72px]">
                        {stat.number}
                      </div>
                      <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#475467] text-sm lg:text-base tracking-[-0.32px] leading-5 lg:leading-6">
                        {stat.description}
                      </div>
                    </div>
                    <img
                      className="relative w-12 h-12 lg:w-14 lg:h-14 ml-4"
                      alt={stat.alt}
                      src={stat.icon}
                    />
                  </div>
                  {index < 2 && (
                    <Separator
                      orientation="horizontal"
                      className="relative w-full h-px lg:hidden"
                    />
                  )}
                  {index < 2 && (
                    <Separator
                      orientation="vertical"
                      className="relative self-stretch w-px hidden lg:block"
                    />
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <section className="flex w-full items-start justify-center pt-32 lg:pt-40 pb-12 lg:pb-24 px-4 lg:px-0 relative bg-gray-50">
          <div className="flex-col max-w-screen-xl items-center gap-6 lg:gap-8 px-4 lg:px-12 py-0 flex-1 grow flex relative">
            <div className="relative w-fit [font-family:'Merriweather',Helvetica] font-medium text-gray-600 text-lg lg:text-2xl text-center tracking-[0] leading-6 lg:leading-[30px] px-4">
              Featured in leading publications and media outlets
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[123px] relative w-full lg:w-auto">
              {mediaLogos.map((logo, index) => (
                <img
                  key={index}
                  className={`relative opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer ${index === 0 ? 'w-32 lg:w-44 h-auto' : index === 1 ? 'w-40 lg:w-[226px] h-auto' : 'w-36 lg:w-[196px] h-auto'}`}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[123px] relative w-full lg:w-auto">
              <img
                className="relative opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer w-40 lg:w-52 h-auto"
                alt="Eenadu"
                src="/eenadu.svg"
              />
              <img
                className="relative opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer w-40 lg:w-52 h-auto"
                alt="The Hindu"
                src="/the-hindu.svg"
              />
              <img
                className="relative opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer w-32 lg:w-40 h-auto"
                alt="ETV"
                src="/ETV.svg"
              />
            </div>
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
        <section 
          className="relative w-full flex-[0_0_auto] py-16 overflow-hidden flex items-center justify-center"
          style={{
            backgroundColor: '#FFFCF9'
          }}
        >
          <div className="max-w-screen-xl w-full px-4 lg:px-8">
            <div className="relative overflow-hidden whitespace-nowrap">
              <div 
                className="animate-scroll-left inline-flex text-6xl lg:text-8xl font-bold text-gray-800 opacity-80"
                style={{
                  animation: 'scroll-left 40s linear infinite'
                }}
              >
              <span className="px-12">Naari</span>
              <span className="px-12">ನಾರಿ</span>
              <span className="px-12">नारी</span>
              <span className="px-12">ناری</span>
              <span className="px-12">நாரி</span>
              <span className="px-12">নারী</span>
              <span className="px-12">Naari</span>
              <span className="px-12">ನಾರಿ</span>
              <span className="px-12">नारी</span>
              <span className="px-12">നാരി</span>
              <span className="px-12">নারী</span>
              <span className="px-12">Naari</span>
              <span className="px-12">ನಾರಿ</span>
              <span className="px-12">ناری</span>
              <span className="px-12">নারী</span>
              <span className="px-12">Naari</span>
              <span className="px-12">नारी</span>
              <span className="px-12">ناری</span>
              <span className="px-12">নারি</span>
              <span className="px-12">নারী</span>
              <span className="px-12">Naari</span>
              <span className="px-12">ನಾರಿ</span>
              <span className="px-12">नारी</span>
              <span className="px-12">ناری</span>
              <span className="px-12">নারী</span>
              <span className="px-12">Naari</span>
              <span className="px-12">ನಾರಿ</span>
              <span className="px-12">नारी</span>
              <span className="px-12">ناری</span>
              <span className="px-12">তারি</span>
              <span className="px-12">നാরি</span>
              <span className="px-12">নারী</span>
              <span className="px-12">Naari</span>
              <span className="px-12">ನಾರಿ</span>
              <span className="px-12">नारी</span>
              <span className="px-12">ناری</span>
              <span className="px-12">তারি</span>
              <span className="px-12">നാরি</span>
              <span className="px-12">নারী</span>
            </div>
            </div>
          </div>
        </section>
        <FaqSection />
        <NewsletterCtaSection />
        <FooterSection />
      </main>
    </div>
  );
};
