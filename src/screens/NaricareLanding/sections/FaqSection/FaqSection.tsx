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
      question: "Which program is better for me?",
      answer: "It depends on what stage you're in and the type of support you'd like.\n\n**Choose a Group Support Program if:**\n• You're looking for a more budget-friendly option.\n• You'd like an initial one-to-one consultation, followed by ongoing text support in a supportive group of moms with similar questions.\n\n**Choose a Private Program if:**\n• You're a first-time mom who wants regular, hands-on guidance at each stage.\n• You prefer a dedicated lactation consultant available to you in a private chat.\n• You want extra support beyond breastfeeding, such as postpartum nutrition, yoga, core rehab, sleep coaching, and mental wellness care.\n• You'd like longer-term, one-to-one follow-ups so you feel fully supported throughout your journey.",
    },
    {
      id: "item-2",
      question: "Are you anti-formula?",
      answer: "Not at all. At NariCare, we believe every mother and baby are unique, and feeding choices are deeply personal. We fully respect and support every mother's decision. Our focus is on helping those who wish to breastfeed whether exclusively or partially by giving them the right education, tools, and guidance to do so with confidence.",
    },
    {
      id: "item-3",
      question: "What is the NariCare app, and how does it help mothers?",
      answer: "The NariCare app is like having a digital lactation consultant in your pocket. It helps you track your baby's feeds, diapers, and growth, while also giving you instant, evidence-based answers to common breastfeeding and postpartum questions. You can even connect with experts for personalized care, all in one place.",
    },
    {
      id: "item-4",
      question: "How do I track my baby's feeds, diapers, and weight in the app?",
      answer: "The app includes simple logs where you can record every feed whether breast, expressed milk, or formula along with wet and dirty diapers and your baby's weight. These records help you and your consultant spot patterns and ensure your baby is thriving.",
    },
    {
      id: "item-5",
      question: "How does the AI-powered guidance work?",
      answer: "Our AI guidance is trained on trusted, evidence-based breastfeeding knowledge. It provides personalized, expert-backed answers any time of the day or night. Think of it as a first line of support that helps you feel confident between consultations.",
    },
    {
      id: "item-6",
      question: "Can I book a consultation with a lactation expert through the app?",
      answer: "Yes. With just a few taps, you can schedule a one-to-one consultation with a certified lactation consultant, nutritionist, sleep coach, or mental wellness expert—directly through the app.",
    },
    {
      id: "item-7",
      question: "Is my data private and secure?",
      answer: "Absolutely. Your personal information and your baby's health data are kept private and protected. We only share information with your consultant if you choose to connect with them, and never without your consent.",
    },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.filter(faq => faq.answer).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <section id="faq" className="gap-8 md:gap-16 px-0 py-12 lg:py-16 bg-basewhite flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col max-w-screen-xl items-start gap-6 md:gap-8 px-4 md:px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-6 md:gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-screen-md items-center gap-4 md:gap-5 relative w-full flex-[0_0_auto]">
            <h2 className="self-stretch [font-family:'Merriweather',Helvetica] text-[#0f1728] text-2xl md:text-3xl lg:text-5xl text-center leading-tight lg:leading-[normal] relative mt-[-1.00px] font-semibold tracking-[0] px-4">
              Frequently asked questions
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg lg:text-xl text-center tracking-[0] leading-6 md:leading-7 lg:leading-[30px] relative self-stretch px-4">
              Learn about our programs, app features, and
              <span className="hidden md:inline"><br /></span>
              <span className="md:hidden"> </span>
              how we support your breastfeeding journey.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col max-w-screen-xl items-center gap-8 md:gap-16 px-4 md:px-8 py-0 w-full flex-[0_0_auto] flex relative">
        <div className="flex flex-col max-w-screen-md items-start gap-6 md:gap-8 relative w-full flex-[0_0_auto]">
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
                className="w-full pt-4 md:pt-6 pb-0 px-0 border-t [border-top-style:solid] border-[#e4e7ec] first:pt-0"
              >
                <AccordionTrigger className="flex items-start gap-4 md:gap-6 relative self-stretch w-full flex-[0_0_auto] hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="gap-2 flex-1 grow flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-gray-900 text-base md:text-lg tracking-[0] leading-6 md:leading-7 text-left">
                      {faq.question}
                    </div>
                  </div>
                </AccordionTrigger>
                {faq.answer && (
                  <AccordionContent className="pt-2">
                    <div className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-pre-line">
                      {faq.answer.split(/(\*\*.*?\*\*)/).map((part, index) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={index} className="font-semibold text-gray-800">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start gap-6 md:gap-8 px-4 md:px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-6 md:gap-8 pt-6 md:pt-8 pb-8 md:pb-10 px-6 md:px-8 relative self-stretch w-full flex-[0_0_auto] bg-gray-50 rounded-2xl">
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
            <h3 className="self-stretch [font-family:'Poppins',Helvetica] text-gray-900 text-lg md:text-xl text-center leading-7 md:leading-[30px] relative mt-[-1.00px] font-semibold tracking-[0]">
              Still have questions?
            </h3>

            <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-gray-600 text-base md:text-lg text-center tracking-[0] leading-6 md:leading-7">
              Can&apos;t find the answer you&apos;re looking for? Please chat to
              our friendly team.
            </p>
          </div>

          <div className="inline-flex items-start gap-3 relative flex-[0_0_auto]">
            <Button className="inline-flex items-center justify-center gap-1.5 px-[18px] py-3 relative flex-[0_0_auto] bg-[#8383ed] rounded-lg overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none h-auto hover:bg-[#7373dd]">
              <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-basewhite text-sm md:text-base tracking-[0] leading-5 md:leading-6 whitespace-nowrap">
                  Get in touch
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
