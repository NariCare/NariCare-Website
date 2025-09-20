import React from "react";

export const TeamSection = (): JSX.Element => {
  const textContent = [
    {
      text: "Hello! I'm Gayathri Kanumuri, founder of ",
      highlight: false,
    },
    {
      text: "NariCare",
      highlight: true,
    },
    {
      text: ". My journey to creating ",
      highlight: false,
    },
    {
      text: "NariCare",
      highlight: true,
    },
    {
      text: " was born from my own struggles with breastfeeding and the overwhelming misinformation that surrounded me as a new mom. When I finally received the right support and guidance, my entire experience transformed. I was empowered with the knowledge to breastfeed confidently and pain-free. From contemplating giving up when my daughter was just three weeks old, I went on to successfully breastfeed her for 4.3 years.",
      highlight: false,
    },
  ];

  const decorativeImages = [
    {
      className: "absolute top-[468px] left-0 w-[298px] h-[408px]",
      src: "/line-pattern-3.svg",
      alt: "Line pattern",
    },
    {
      className: "absolute top-0 left-[1229px] w-[211px] h-[204px]",
      src: "/line-pattern-3.svg",
      alt: "Line pattern",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="flex flex-col w-full items-center gap-16 px-0 py-24 bg-gray-50">
        <h2 className="[font-family:'Merriweather',Helvetica] font-semibold text-[#0f1728] text-5xl text-center tracking-[0] leading-[normal]">
          Meet the founder
        </h2>

        <div className="max-w-screen-xl items-center gap-16 px-8 py-0 w-full flex">
          <div className="relative flex-1 h-[560px]">
            <img
              className="absolute top-[6px] left-0 w-[420px] h-[558px]"
              alt="Founder image"
              src="/image-18.png"
            />
          </div>

          <div className="flex flex-col w-[642px] items-start gap-4">
            <div className="flex flex-col min-w-[480px] max-w-[720px] items-start w-full">
              <div className="flex flex-col items-start w-full">
                <div className="h-[540px] gap-[18px] flex flex-col items-start">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-7">
                    {textContent.map((segment, index) => (
                      <span
                        key={index}
                        className={
                          segment.highlight
                            ? "font-medium text-[#8383ed]"
                            : "text-[#475466]"
                        }
                      >
                        {segment.text}
                      </span>
                    ))}
                  </p>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-7">
                    <span className="text-[#8383ed]">
                      This experience ignited my passion to address a critical
                      gap: the lack of widespread, accurate information about
                      breastfeeding. Breastfeeding is one of the most profound
                      gifts you can give your child, yet many women who wish to
                      breastfeed are driven to formula feeding due to
                      misconceptions and inadequate support.
                    </span>
                  </p>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-lg tracking-[0] leading-7">
                    <span className="text-[#475466]">At </span>
                    <span className="font-medium text-[#8383ed]">NariCare</span>
                    <span className="text-[#475466]">
                      , we are committed to transforming the breastfeeding
                      experience for every mother. Our mission is to break
                      through the myths, provide the right support, and empower
                      moms with the knowledge they need to succeed. Together, we
                      can make a powerful impact and ensure that every mom and
                      baby thrive.
                    </span>
                  </p>
                </div>

                <div className="flex flex-col h-[18px] items-start w-full" />
              </div>
            </div>
          </div>
        </div>

        {decorativeImages.map((image, index) => (
          <img
            key={index}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>
    </section>
  );
};
