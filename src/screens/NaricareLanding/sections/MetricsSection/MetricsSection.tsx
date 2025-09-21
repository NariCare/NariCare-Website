import React from "react";

const tableData = [
  {
    category: "How does it make you feel?",
    naricare: {
      icon: "check",
      text: "Like your mom-friend who's also a lactation expert",
      highlights: ["mom-friend", "lactation expert"],
    },
    google: {
      icon: "x",
      text: "Drowning in conflicting advice from strangers",
    },
    consults: {
      icon: "x",
      text: "Explaining your whole story from scratch every time",
    },
  },
  {
    category: "At 2 AM when baby won't latch",
    naricare: {
      icon: "check",
      text: "AI answers instantly, expert follows up later",
      highlights: ["instantly,"],
    },
    google: {
      icon: "x",
      text: "Panic-scrolling through old forum threads",
    },
    consults: {
      icon: "x",
      text: "Wait until morning and hope for the best",
    },
  },
  {
    category: "Quality of advice",
    naricare: {
      icon: "check",
      text: "Evidence-based + rooted in real mom experience",
      highlights: ["Evidence-based + rooted"],
    },
    google: {
      icon: "x",
      text: "Random opinions, often scary or wrong",
    },
    consults: {
      icon: "x",
      text: "Professional, but ends after the call",
    },
  },
  {
    category: "Remembers your story",
    naricare: {
      icon: "check",
      text: "Knows your journey, celebrates progress",
      highlights: ["journey, celebrates progress"],
    },
    google: {
      icon: "x",
      text: "Start from zero with every search",
    },
    consults: {
      icon: "x",
      text: "No memory, you repeat history each visit",
    },
  },
  {
    category: "Tracks what matters",
    naricare: {
      icon: "check",
      text: "Smart insights from feeds, diapers, and weight",
      highlights: ["Smart insights"],
    },
    google: {
      icon: "x",
      text: "You track everything manually",
    },
    consults: {
      icon: "x",
      text: "No tracking between appointments",
    },
  },
  {
    category: "Red flag alerts",
    naricare: {
      icon: "check",
      text: "Spots issues early and guides next steps",
      highlights: ["Spots issues"],
    },
    google: {
      icon: "x",
      text: 'You have to know what\'s "normal"',
    },
    consults: {
      icon: "x",
      text: "Only flagged if you book another session",
    },
  },
  {
    category: "Cost",
    naricare: {
      icon: "check",
      text: "Simple, affordable monthly plan",
      highlights: ["Simple, affordable"],
    },
    google: {
      icon: "x",
      text: "Free but costs your peace of mind",
    },
    consults: {
      icon: "x",
      text: "Pay per visit, adds up fast",
    },
  },
  {
    category: "Your partner can help",
    naricare: {
      icon: "check",
      text: "Shared app so both parents track",
      highlights: ["Shared app"],
    },
    google: {
      icon: "x",
      text: "Screenshots and chaos",
    },
    consults: {
      icon: "x",
      text: "Only you attend, partner left out",
    },
  },
];

export const MetricsSection = (): JSX.Element => {
  const renderTextWithHighlights = (
    text: string,
    highlights: string[] = [],
  ) => {
    if (!highlights.length) {
      return (
        <span className="[font-family:'Poppins',Helvetica] font-normal text-[#475467] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]">
          {text}
        </span>
      );
    }

    const result = text;
    let parts = [text];

    highlights.forEach((highlight) => {
      const newParts: any[] = [];
      parts.forEach((part) => {
        if (typeof part === "string") {
          const splitParts = part.split(highlight);
          for (let i = 0; i < splitParts.length; i++) {
            if (i > 0) {
              newParts.push(
                <span key={`${highlight}-${i}`} className="font-medium">
                  {highlight}
                </span>,
              );
            }
            if (splitParts[i]) {
              newParts.push(splitParts[i]);
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return (
      <>
        {parts.map((part, index) =>
          typeof part === "string" ? (
            <span
              key={index}
              className="[font-family:'Poppins',Helvetica] font-normal text-[#475467] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]"
            >
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 md:gap-16 px-0 py-12 md:py-24 relative bg-basewhite">
      <div className="flex flex-col max-w-screen-xl items-start gap-6 md:gap-8 px-4 md:px-8 py-0 relative w-full">
        <div className="flex flex-col items-center gap-6 md:gap-8 relative self-stretch w-full">
          <div className="inline-flex max-w-screen-md items-center gap-4 md:gap-5 flex-col relative">
            <h2 className="max-w-[864px] [font-family:'Merriweather',Helvetica] text-transparent text-2xl md:text-3xl lg:text-5xl text-center leading-tight lg:leading-[normal] relative font-semibold tracking-[0]">
              <span className="text-[#0f1728]">
                Google gives answers. A consult gives advice.{" "}
              </span>
              <span className="text-[#8383ed]">Nari</span>
              <span className="text-[#ff9e88]">Care</span>
              <span className="text-[#0f1728]"> gives you a path.</span>
            </h2>

            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-7 lg:leading-[30px]">
              Not a one-time fix - a health companion that checks in, adapts,
              and helps you reach real goals.
            </p>
          </div>
        </div>

        <img
        className="absolute hidden lg:block left-[-6%] lg:left-[-6%] top-[-5%] lg:top-[-5%] w-32 lg:w-[200px] h-auto pointer-events-none"
        alt="Line pattern"
        src="/line-pattern.svg"
        />
      </div>

      <div className="w-full max-w-screen-xl px-4 md:px-8">
        <div className="overflow-x-auto">
          <div className="inline-flex flex-col items-start relative min-w-[800px]">
            <div className="inline-flex items-start relative bg-[linear-gradient(351deg,rgba(227,226,255,1)_0%,rgba(246,237,255,1)_56%)]">
              <div className="flex w-[287px] h-[130px] items-center justify-center gap-6 p-6 relative bg-[#ffffff] border-r border-b border-[#d7d7d7]" />

              <img
                className="relative w-[319px] h-[130px]"
                alt="Property cell"
                src="/property-cell.svg"
              />

              <div className="flex w-80 h-[130px] items-center justify-center gap-6 p-6 relative border-r border-b border-[#d7d7d7] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(66,133,244,0.2)_100%)]">
                <img
                  className="relative w-[124px] h-[42px] object-cover"
                  alt="Image"
                  src="/image-39.svg"
                />
              </div>

              <div className="flex w-80 h-[130px] items-center justify-center gap-6 p-6 relative border-b border-[#d7d7d7] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(252,255,213,1)_100%)]">
                <div className="relative flex items-center justify-center flex-1 [font-family:'Poppins',Helvetica] font-normal text-[#353535] text-lg md:text-xl text-center tracking-[0.60px] leading-6 md:leading-8">
                  One-time consults
                </div>
              </div>
            </div>

            <div className="flex items-start relative self-stretch w-full">
              <div className="flex flex-col w-[287px] items-start relative">
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex h-[90px] items-center justify-center gap-6 px-6 py-4 relative self-stretch w-full bg-[#ffffff] border-r ${index === tableData.length - 1 ? "" : "border-b border-[#d7d7d7]"}`}
                  >
                    <div className="relative flex items-center justify-center flex-1 [font-family:'Poppins',Helvetica] font-medium text-[#4b4b4b] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]">
                      {row.category}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[319px] items-start relative">
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center gap-6 px-6 py-4 relative self-stretch w-full bg-[#ffffff] border-r min-h-[90px] ${index === tableData.length - 1 ? "" : "border-b border-[#d7d7d7]"}`}
                  >
                    <div className="flex items-start gap-6 relative flex-1 grow">
                      <div className="inline-flex items-center gap-2.5 pt-2 pb-0 px-0 relative flex-[0_0_auto]">
                        <img 
                          src="/tick.svg" 
                          alt="Tick" 
                          className="w-5 h-5 md:w-6 md:h-6" 
                        />
                      </div>
                      <div className="relative flex items-center justify-center flex-1 mt-[-1.00px]">
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-[#475467] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]">
                          {renderTextWithHighlights(
                            row.naricare.text,
                            row.naricare.highlights,
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-80 items-start relative">
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex h-[90px] items-center justify-center gap-6 px-6 py-4 relative self-stretch w-full bg-[#ffffff] border-r ${index === tableData.length - 1 ? "" : "border-b border-[#d7d7d7]"}`}
                  >
                    <div className="flex items-start gap-6 relative flex-1 grow">
                      <div className="inline-flex items-center gap-2.5 pt-2 pb-0 px-0 relative flex-[0_0_auto]">
                        <img 
                          src="/circle.png" 
                          alt="Circle" 
                          className="w-5 h-5 md:w-6 md:h-6" 
                        />
                      </div>
                      <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#475467] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]">
                        {row.google.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-80 items-start relative">
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className={`flex h-[90px] items-center justify-center gap-6 px-6 py-4 relative self-stretch w-full bg-[#ffffff] ${index === tableData.length - 1 ? "border-0 border-none" : "border-b border-[#d7d7d7]"}`}
                  >
                    <div className="flex items-start gap-6 relative flex-1 grow">
                      <div className="inline-flex items-center gap-2.5 pt-2 pb-0 px-0 relative flex-[0_0_auto]">
                        <img 
                          src="/circle.png" 
                          alt="Circle" 
                          className="w-5 h-5 md:w-6 md:h-6" 
                        />
                      </div>
                      <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#475467] text-sm md:text-base tracking-[0] leading-[20px] md:leading-[28.8px]">
                        {row.consults.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
