import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const FaqSection = (): JSX.Element => {
  const faqData = [
    {
      id: "item-1",
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "item-2",
      question: "Can I change my plan later?",
      answer: "",
    },
    {
      id: "item-3",
      question: "What is your cancellation policy?",
      answer: "",
    },
    {
      id: "item-4",
      question: "How does NariCare work?",
      answer: "",
    },
    {
      id: "item-5",
      question: "Is my data safe?",
      answer: "",
    },
    {
      id: "item-6",
      question: "Will NariCare share my data with third parties?",
      answer: "",
    },
  ];

  return (
    <section className="gap-16 px-0 py-24 bg-basewhite flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-screen-md items-center gap-5 relative w-full flex-[0_0_auto]">
            <h2 className="self-stretch [font-family:'Merriweather',Helvetica] text-[#0f1728] text-5xl text-center leading-[normal] relative mt-[-1.00px] font-semibold tracking-[0]">
              Frequently asked questions
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-xl text-center tracking-[0] leading-[30px] relative self-stretch">
              Answers to common questions about how NariCare works and <br />
              your data privacy.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col max-w-screen-xl items-center gap-16 px-8 py-0 w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col max-w-screen-md items-start gap-8 relative w-full flex-[0_0_auto]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="min-w-80 pt-6 pb-0 px-0 border-t [border-top-style:solid] border-[#e4e7ec] first:pt-0"
              >
                <AccordionTrigger className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="gap-2 flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-gray-900 text-lg tracking-[0] leading-7 text-left">
                      {faq.question}
                    </div>
                  </div>
                </AccordionTrigger>
                {faq.answer && (
                  <AccordionContent className="pt-2">
                    <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base tracking-[0] leading-6">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-8 pt-8 pb-10 px-8 relative self-stretch w-full flex-[0_0_auto] bg-gray-50 rounded-2xl">
          <div className="relative w-[120px] h-14">
            <div className="absolute top-1.5 -left-0.5 w-[51px] h-[51px] flex bg-avatar-user-squaremarco-kelly-color-background rounded-[200px] border-[1.5px] border-solid border-[#ffffff]">
              <div className="mr-[3px] flex-1 mb-[3px] w-12 rounded-[200px] border-[0.75px] border-solid border-black opacity-[0.08]" />
            </div>

            <div className="absolute top-1.5 left-[70px] w-[51px] h-[51px] flex bg-avatar-user-squarejaya-willis-color-background rounded-[200px] border-[1.5px] border-solid border-[#ffffff]">
              <div className="mr-[3px] flex-1 mb-[3px] w-12 rounded-[200px] border-[0.75px] border-solid border-black opacity-[0.08]" />
            </div>

            <div className="absolute -top-0.5 left-[30px] w-[59px] h-[59px] flex rounded-[200px] border-[1.5px] border-solid border-[#ffffff] [background:url(../avatar.png)_50%_50%_/_cover,linear-gradient(0deg,rgba(221,192,206,1)_0%,rgba(221,192,206,1)_100%)] bg-avatar-user-squareamlie-laurent-color-background">
              <div className="mr-[3px] flex-1 mb-[3px] w-14 rounded-[200px] border-[0.75px] border-solid border-black opacity-[0.08]" />
            </div>
          </div>

          <div className="flex max-w-screen-md items-center gap-2 w-full flex-col relative flex-[0_0_auto]">
            <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-gray-900 text-xl text-center leading-[30px] relative mt-[-1.00px] font-semibold tracking-[0]">
              Still have questions?
            </h3>

            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-lg text-center tracking-[0] leading-7">
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team.
            </p>
          </div>

          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <Button className="inline-flex items-center justify-center gap-1.5 px-[18px] py-3 relative flex-[0_0_auto] bg-[#8383ed] rounded-lg overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-[#7373dd]">
              <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-base tracking-[0] leading-6 whitespace-nowrap">
                  Get in touch
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
