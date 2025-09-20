import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const FooterSection = (): JSX.Element => {
  const quickLinks = [
    { label: "Home" },
    { label: "About us" },
    { label: "Features", hasNewBadge: true },
    { label: "Pricing" },
    { label: "Our experts" },
    { label: "Contact" },
  ];

  const supportLinks = [
    { label: "Help centre" },
    { label: "Knowledge base" },
    { label: "Community" },
    { label: "Expert consultation" },
    { label: "AI Chatbot" },
    { label: "24/7 Support" },
  ];

  const socialIcons = [
    { src: "/social-icon.svg", alt: "Social icon" },
    { src: "/social-icon-3.svg", alt: "Social icon" },
    { src: "/social-icon-1.svg", alt: "Social icon" },
    { src: "/social-icon-2.svg", alt: "Social icon" },
  ];

  const contactInfo = [
    { icon: "/frame-1.svg", text: "support@naricare.com" },
    { icon: "/frame-2.svg", text: "+91 99999 00000" },
    { icon: "/frame.svg", text: "Bengaluru, India" },
  ];

  const legalLinks = [
    { label: "Privacy policy" },
    { label: "Terms & Conditions" },
    { label: "Cookies" },
    { label: "Refund Policy" },
  ];

  return (
    <footer className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#8383ed]">
      <div className="flex flex-col items-center gap-16 pt-16 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-start gap-12 px-8 py-0 w-full flex-[0_0_auto] flex relative">
          <div className="flex flex-wrap items-start gap-[48px_64px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col min-w-80 max-w-xs items-start gap-8 relative flex-1 grow">
              <img
                className="relative w-[209.1px] h-[91px]"
                alt="Group"
                src="/group-36689.png"
              />

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-6">
                  Empowering mothers with expert guidance, AI support, and
                  community care for a successful breastfeeding journey.
                </p>

                <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
                  {socialIcons.map((icon, index) => (
                    <img
                      key={`social-${index}`}
                      className="relative w-6 h-6"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-w-[800px] items-start gap-8 relative flex-1 grow">
              <nav className="flex flex-col min-w-24 gap-4 flex-1 grow items-start relative">
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
                        <a
                          href="#"
                          className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#e0e2ec] transition-colors"
                        >
                          {link.label}
                        </a>
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

              <nav className="flex flex-col min-w-24 gap-4 flex-1 grow items-start relative">
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
                        <a
                          href="#"
                          className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#e0e2ec] transition-colors"
                        >
                          {link.label}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex flex-col w-[285px] items-start gap-4 relative">
                <div className="flex flex-col min-w-24 h-[140px] items-start gap-4 relative self-stretch w-full">
                  <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-[#e0e2ec] text-sm leading-5 relative mt-[-1.00px] font-semibold tracking-[0]">
                    Get in touch
                  </h3>

                  <address className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] not-italic">
                    {contactInfo.map((contact, index) => (
                      <div
                        key={`contact-${index}`}
                        className="flex h-6 items-center gap-1.5 w-full relative self-stretch"
                      >
                        <img
                          className="relative w-5 h-5"
                          alt="Contact icon"
                          src={contact.icon}
                        />

                        <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {contact.text}
                        </span>
                      </div>
                    ))}
                  </address>
                </div>

                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-[#e0e2ec] text-sm leading-5 relative mt-[-1.00px] font-semibold tracking-[0]">
                    Emergency support
                  </h3>

                  <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-6">
                    For urgent breastfeeding concerns, our experts are available
                    <br />
                    24/7 through the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-col max-w-screen-xl items-start gap-8 w-full flex-[0_0_auto] flex relative">
            <div className="flex flex-wrap items-center justify-between gap-[24px_32px] pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#e4e7ec]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-6 whitespace-nowrap">
                © 2025 Naricare. All rights reserved.
              </p>

              <nav className="inline-flex gap-4 flex-[0_0_auto] items-start relative">
                {legalLinks.map((link, index) => (
                  <a
                    key={`legal-link-${index}`}
                    href="#"
                    className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#e0e2ec] transition-colors"
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
