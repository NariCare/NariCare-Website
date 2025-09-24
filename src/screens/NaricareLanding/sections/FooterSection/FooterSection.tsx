import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { label: "Home", action: "scroll", target: "top" },
    { label: "Programs", action: "scroll", target: "programs" },
    { label: "App", hasNewBadge: true, action: "external", url: "https://app.naricare.com" },
  ];

  const supportLinks = [
    { label: "Resources", action: "external", url: "https://naricare.com/blog" },
    { label: "FAQs", action: "scroll", target: "faq" },
    { label: "Contact Us", action: "whatsapp" },
  ];

  const socialIcons = [
    { src: "/social-icon.svg", alt: "Social icon" },
    { src: "/social-icon-3.svg", alt: "Social icon" },
    { src: "/social-icon-1.svg", alt: "Social icon" },
    { src: "/social-icon-2.svg", alt: "Social icon" },
  ];

  const contactInfo = [
    { icon: "/frame-1.svg", text: "support@naricare.com", type: "email" },
    { icon: "/frame-2.svg", text: "+918142144762", type: "phone" },
    { icon: "/frame.svg", text: "Visakhapatnam, India", type: "location" },
  ];

  const legalLinks = [
    { label: "Privacy policy" },
    { label: "Terms & Conditions" },
    { label: "Refund Policy" },
  ];

  const handleContactClick = (contact: any) => {
    if (contact.type === "email") {
      window.open(`mailto:${contact.text}`, '_blank');
    } else if (contact.type === "phone") {
      window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank');
    }
  };

  const handleQuickLinkClick = (link: any) => {
    if (link.action === "scroll") {
      if (link.target === "top") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (link.target === "programs") {
        // Scroll to Programs section (PricingSection)
        const element = document.getElementById('pricing');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (link.target === "faq") {
        // Scroll to FAQ section
        const element = document.getElementById('faq') || document.querySelector('[data-section="faq"]');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else if (link.action === "external" && link.url) {
      window.open(link.url, '_blank');
    } else if (link.action === "whatsapp") {
      window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank');
    }
  };

  return (
    <footer className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#8383ed]">
      <div className="flex flex-col items-center gap-8 md:gap-16 pt-12 md:pt-16 pb-8 md:pb-12 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-start gap-8 md:gap-12 px-4 md:px-8 py-0 w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-start gap-8 lg:gap-[48px_64px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col w-full lg:min-w-80 lg:max-w-xs items-start gap-6 md:gap-8 relative lg:flex-1 lg:grow">
              <img
                className="relative w-[180px] md:w-[209.1px] h-auto"
                alt="Group"
                src="/group-36689.png"
              />

              <div className="flex flex-col items-start gap-6 md:gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                  Empowering mothers with expert guidance, AI support, 
                  and a caring community for a confident and successful breastfeeding journey.
                </p>

                <div className="inline-flex items-center gap-4 md:gap-6 relative flex-[0_0_auto]">
                  {socialIcons.map((icon, index) => (
                    <img
                      key={`social-${index}`}
                      className="relative w-5 h-5 md:w-6 md:h-6"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full lg:min-w-[600px] items-start gap-6 md:gap-8 relative lg:flex-1 lg:grow">
              <nav className="flex flex-col w-full lg:min-w-24 gap-4 lg:flex-1 lg:grow items-start relative">
                <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-[#e0e2ec] text-sm leading-5 relative mt-[-1.00px] font-semibold tracking-[0]">
                  Quick links
                </h3>

                <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  {quickLinks.map((link, index) => (
                    <li
                      key={`quick-link-${index}`}
                      className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                    >
                      <div className="inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative">
                        <button
                          onClick={() => handleQuickLinkClick(link)}
                          className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap hover:text-[#e0e2ec] transition-colors cursor-pointer bg-transparent border-none text-left p-0"
                        >
                          {link.label}
                        </button>
                      </div>

                      {link.hasNewBadge && (
                        <Badge className="inline-flex items-center px-1.5 py-0.5 relative flex-[0_0_auto] bg-basewhite rounded-md border border-solid border-[#cfd4dc] shadow-shadows-shadow-xs">
                          <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-gray-700 text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
                            New
                          </span>
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <nav className="flex flex-col w-full lg:min-w-24 gap-4 lg:flex-1 lg:grow items-start relative">
                <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-[#e0e2ec] text-sm leading-5 relative mt-[-1.00px] font-semibold tracking-[0]">
                  Support
                </h3>

                <ul className="flex flex-col gap-3 self-stretch w-full flex-[0_0_auto] items-start relative">
                  {supportLinks.map((link, index) => (
                    <li
                      key={`support-link-${index}`}
                      className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                    >
                      <div className="inline-flex gap-2 flex-[0_0_auto] items-center justify-center relative">
                        <button
                          onClick={() => handleQuickLinkClick(link)}
                          className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap hover:text-[#e0e2ec] transition-colors cursor-pointer bg-transparent border-none text-left p-0"
                        >
                          {link.label}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col w-full lg:w-[285px] items-start gap-4 relative">
                <div className="flex flex-col w-full lg:min-w-24 lg:h-[140px] items-start gap-4 relative self-stretch">
                  <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-[#e0e2ec] text-sm leading-5 relative mt-[-1.00px] font-semibold tracking-[0]">
                    Get in touch
                  </h3>

                  <address className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] not-italic">
                    {contactInfo.map((contact, index) => (
                      <div
                        key={`contact-${index}`}
                        className={`flex h-6 items-center gap-1.5 w-full relative self-stretch ${contact.type !== "location" ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}`}
                        onClick={() => handleContactClick(contact)}
                      >
                        <img
                          className="relative w-4 h-4 md:w-5 md:h-5"
                          alt="Contact icon"
                          src={contact.icon}
                        />

                        <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-xs md:text-sm tracking-[0] leading-4 md:leading-5">
                          {contact.text}
                        </span>
                      </div>
                    ))}
                  </address>
                </div>

                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                    Trusted by 600+ mothers | 25+ years combined lactation experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-screen-xl items-start gap-6 md:gap-8 px-4 md:px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-col max-w-screen-xl items-start gap-6 md:gap-8 w-full flex-[0_0_auto] flex relative">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-[24px_32px] pt-6 md:pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#e4e7ec]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                © 2025 Naricare. All rights reserved.
              </p>

              <nav className="flex flex-wrap gap-3 md:gap-4 flex-[0_0_auto] items-start relative">
                {legalLinks.map((link, index) => (
                  <a
                    key={`legal-link-${index}`}
                    href="#"
                    className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-sm md:text-base tracking-[0] leading-5 md:leading-6 hover:text-[#e0e2ec] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
