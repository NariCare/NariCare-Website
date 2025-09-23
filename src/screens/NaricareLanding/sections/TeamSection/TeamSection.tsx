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
      className: "absolute top-[39%] left-[-7%] w-[298px] h-[408px]",
      src: "/line-pattern-3.svg",
      alt: "Line pattern",
    },
    {
      className: "absolute top-[-54%] right-[-11%] w-[298px] h-[299px]",
      src: "/line-pattern-3.svg",
      alt: "Line pattern",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="flex flex-col w-full items-center gap-8 md:gap-16 px-0 py-12 lg:py-16 bg-gray-50">
        <h2 className="[font-family:'Merriweather',Helvetica] font-semibold text-[#0f1728] text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight lg:leading-[normal] px-4">
          Meet the founder
        </h2>

        <div className="max-w-screen-xl items-center gap-8 md:gap-12 lg:gap-16 px-4 md:px-8 py-0 w-full flex flex-col lg:flex-row relative">
          <div className="relative flex-shrink-0 w-full max-w-sm md:max-w-md lg:flex-1 lg:h-[560px]">
            <img
              className="w-full h-auto lg:absolute lg:top-[6px] lg:left-0 lg:w-[420px] lg:h-[558px] object-cover"
              alt="Gayathri Kanumuri, founder and certified lactation consultant of NariCare, smiling confidently"
              src="/image-18.png"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col w-full lg:w-[642px] items-start gap-4">
            <div className="flex flex-col w-full items-start">
              <div className="flex flex-col items-start w-full">
                <div className="gap-4 md:gap-[18px] flex flex-col items-start">
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-7">
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

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-7">
                    <span className="text-[#8383ed]">
                      This experience ignited my passion to address a critical
                      gap: the lack of widespread, accurate information about
                      breastfeeding. Breastfeeding is one of the most profound
                      gifts you can give your child, yet many women who wish to
                      breastfeed are driven to formula feeding due to
                      misconceptions and inadequate support.
                    </span>
                  </p>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg tracking-[0] leading-6 md:leading-7">
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
              </div>
            </div>
          </div>

          {/* Decorative elements positioned relative to content block */}
          {decorativeImages.map((image, index) => (
            <img
              key={index}
              className={`${image.className.replace('absolute top-[468px] left-0', 'absolute top-[60%] left-[-15%]').replace('absolute top-0 left-[1229px]', 'absolute top-[-10%] right-[-15%]')} hidden lg:block`}
              alt={image.alt}
              src={image.src}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
