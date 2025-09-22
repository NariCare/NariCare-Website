export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  customIcon?: string;
  color: string;
}

export interface MediaItem {
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

export interface ContentSection {
  type: 'text' | 'heading' | 'list' | 'callout' | 'media' | 'table' | 'video';
  level?: number;
  content?: string;
  title?: string;
  style?: 'info' | 'warning' | 'success' | 'danger' | 'bullet' | 'numbered';
  items?: string[];
  mediaType?: 'video' | 'image';
  media?: MediaItem[];
  videoUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
  headers?: string[];
  rows?: string[][];
}

export interface BlogArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  featured?: boolean;
  content: {
    sections: ContentSection[];
  };
}

export const blogCategories: BlogCategory[] = [
  {
    id: "postpartum-early-days",
    name: "Postpartum & Early Days",
    description: "Essential information for the first days after delivery",
    icon: "heart",
    color: "#8383ed"
  },
  {
    id: "breastfeeding-techniques",
    name: "Breastfeeding Techniques",
    description: "Proper positioning, latching, and feeding techniques",
    icon: "school",
    customIcon: "assets/Fed directly.svg",
    color: "#26a69a"
  },
  {
    id: "milk-supply-production",
    name: "Milk Supply & Production",
    description: "Understanding milk production and supply issues",
    icon: "water",
    color: "#42a5f5"
  },
  {
    id: "common-challenges",
    name: "Common Challenges",
    description: "Solutions for common breastfeeding problems",
    icon: "help-circle",
    color: "#ff7043"
  },
  {
    id: "baby-health-growth",
    name: "Baby Health & Growth",
    description: "Monitoring your baby's health and development",
    icon: "trending-up",
    color: "#4caf50"
  },
  {
    id: "preparation-planning",
    name: "Preparation & Planning",
    description: "Getting ready for your breastfeeding journey",
    icon: "calendar",
    color: "#9c27b0"
  }
];

export const blogArticles: BlogArticle[] = [
  {
    id: "what-to-expect-2-5-days",
    title: "What to expect around 2-5 days after delivery?",
    summary: "Understanding milk transition and managing engorgement in the first few days",
    category: "postpartum-early-days",
    tags: ["milk-coming-in", "engorgement", "early-days"],
    author: "NariCare Team",
    publishedAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    readTime: 4,
    difficulty: "beginner",
    featured: true,
    content: {
      sections: [
        {
          type: "text",
          content: "For most mothers, this thinner, whiter form of milk comes in by about 3 days after birth, but may take longer for first-time moms. You may notice your breasts feeling full, hard, and warm as this happens."
        },
        {
          type: "callout",
          style: "info",
          title: "Managing Engorgement",
          content: "To minimize engorgement: nurse often, don't skip feedings (even at night), ensure good latch/positioning, and let the baby finish the first breast before offering the other side. Use cold and/or cabbage leaf compresses between feedings."
        },
        {
          type: "callout",
          style: "warning",
          title: "Important Reminder",
          content: "Night-time feedings are very important to help build your milk supply, establish the breastfeeding relationship, and help your baby begin to gain properly."
        }
      ]
    }
  },
  {
    id: "breastfeeding-after-c-section",
    title: "Breastfeeding after C-Section",
    summary: "Complete guide to successful breastfeeding after cesarean delivery",
    category: "postpartum-early-days",
    tags: ["c-section", "cesarean", "recovery"],
    author: "NariCare Team",
    publishedAt: "2024-01-14T00:00:00Z",
    updatedAt: "2024-01-14T00:00:00Z",
    readTime: 6,
    difficulty: "intermediate",
    featured: true,
    content: {
      sections: [
        {
          type: "heading",
          level: 2,
          content: "Things to do before delivery:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Discuss keeping the baby skin-to-skin until first nursing to your healthcare provider during your pregnancy",
            "Ask if the hospital has a lactation consultant on hand and arrange them to meet with you after you shift to the recovery room"
          ]
        },
        {
          type: "text",
          content: "It is common for moms who deliver via c-section to worry about the milk coming in late, and a delayed start to breastfeeding. Follow these tips for a successful breastfeeding journey after c-section."
        },
        {
          type: "heading",
          level: 3,
          content: "Tips for Success After C-Section:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Keep the baby skin-to-skin right after birth. Ask your partner to hold the baby skin-to-skin if you are unable to do so right after the surgery",
            "Early and frequent breastfeeding to establish a good milk supply",
            "Keep the baby in the same room as you",
            "Taking pain medication to avoid feeling uncomfortable while breastfeeding",
            "Avoid the use of artificial nipples like pacifiers and bottles as it interferes with breastfeeding",
            "Avoid supplementing unless medically necessary",
            "Breastfeed in comfortable nursing positions for c-section like football hold and side lying position",
            "Hand express the milk and give it to the baby in a cup or feeding syringe, if the baby needs to be away from you",
            "Accept help from family and friends"
          ]
        },
        {
          type: "media",
          mediaType: "video",
          media: [
            {
              title: "Football Hold Technique",
              url: "https://youtu.be/8F2iE5Zx20I",
              thumbnail: "https://img.youtube.com/vi/8F2iE5Zx20I/maxresdefault.jpg",
              description: "Learn the football hold position for comfortable breastfeeding after C-section"
            },
            {
              title: "Side Lying Position",
              url: "https://youtu.be/e4RIx0f4VGw",
              thumbnail: "https://img.youtube.com/vi/e4RIx0f4VGw/maxresdefault.jpg",
              description: "Master the side lying position for easier nursing"
            }
          ]
        }
      ]
    }
  },
  {
    id: "is-baby-getting-enough-milk",
    title: "Is my baby getting enough milk?",
    summary: "Signs and indicators to ensure your baby is getting adequate nutrition",
    category: "baby-health-growth",
    tags: ["milk-intake", "baby-health", "feeding-signs"],
    author: "NariCare Team",
    publishedAt: "2024-01-13T00:00:00Z",
    updatedAt: "2024-01-13T00:00:00Z",
    readTime: 5,
    difficulty: "beginner",
    featured: true,
    content: {
      sections: [
        {
          type: "heading",
          level: 2,
          content: "Frequent Feeds"
        },
        {
          type: "text",
          content: "Your baby feeds often around 8 to 12 times in 24 hours. This is completely normal and helps build a good milk supply."
        },
        {
          type: "heading",
          level: 2,
          content: "After Feeds"
        },
        {
          type: "text",
          content: "After feeding, your baby looks calm and satisfied. They usually let go of the breast on their own. You might notice their hands were clenched before the feed and now look relaxed and open—that's a great sign they're full."
        },
        {
          type: "heading",
          level: 2,
          content: "Healthy Weight Gain"
        },
        {
          type: "text",
          content: "Most babies gain about 155–240 grams (5.5–8.5 ounces) each week until they're around 4 months old. If weight gain is on track, feeding is going well."
        },
        {
          type: "heading",
          level: 2,
          content: "Sucking & Swallowing Patterns"
        },
        {
          type: "text",
          content: "During feeds, there will be moments when you hear gulping sounds, this means your milk is letting down and your baby is getting larger mouthfuls. Sucking slows down to about one suck per second as milk fills the mouth before swallowing. Watch their throat—you'll see a gentle rise and fall with each swallow."
        },
        {
          type: "heading",
          level: 2,
          content: "Poop Changes"
        },
        {
          type: "text",
          content: "By day five, baby's stools usually turn yellow, soft, and seedy. By the fourth day, you should see at least 3–4 dirty diapers each day."
        },
        {
          type: "heading",
          level: 2,
          content: "Wet Diapers"
        },
        {
          type: "text",
          content: "In the early days, wet diapers gradually increase:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Day 2: at least 2 wet diapers",
            "Days 3–4: 3 or more per day",
            "By day 5: 6+ wet diapers in 24 hours"
          ]
        },
        {
          type: "text",
          content: "By now, diapers should feel heavier. Some disposable diapers have a color-changing line that helps show when they're wet."
        },
        {
          type: "heading",
          level: 2,
          content: "Baby's Overall Wellness"
        },
        {
          type: "text",
          content: "Your baby should be alert and active when awake and should be progressing in their developmental milestones."
        }
      ]
    }
  },
  {
    id: "pain-relief-medication-c-section",
    title: "Is it safe to take pain relief medication after C-Section if breastfeeding?",
    summary: "Understanding medication safety while breastfeeding after cesarean delivery",
    category: "postpartum-early-days",
    tags: ["medication", "c-section", "safety"],
    author: "NariCare Team",
    publishedAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
    readTime: 4,
    difficulty: "intermediate",
    content: {
      sections: [
        {
          type: "callout",
          style: "success",
          title: "Good News",
          content: "The medication used for pain relief, antibiotics and any other prescribed medicine after c-section is usually compatible with breastfeeding even in the newborn period. In case you have a question about any medication, doctors can always prescribe an alternative which is safe while breastfeeding."
        },
        {
          type: "heading",
          level: 2,
          content: "Reliable Resources"
        },
        {
          type: "text",
          content: "The US National Library of Medicine (NLM) maintains LactMed®, a database containing information on drugs and other chemicals to which breastfeeding mothers may be exposed."
        },
        {
          type: "text",
          content: "LactMed® includes information on the levels of such substances in breast milk and infant blood, and the possible adverse effects in the nursing infant. Suggested therapeutic alternatives to those drugs are provided, where appropriate."
        },
        {
          type: "text",
          content: "The InfantRisk Center provides up-to-date evidence-based information on the use of medications during pregnancy and breastfeeding."
        },
        {
          type: "callout",
          style: "info",
          title: "Mobile App Resource",
          content: "The MommyMeds mobile app, developed by the Texas Tech University Health Sciences Center's InfantRisk Center, gives pregnant and breastfeeding mothers fast, convenient access to up-to-date and evidence-based information about prescription and over the counter medications."
        }
      ]
    }
  },
  {
    id: "how-often-feed-baby",
    title: "How often should I feed my baby?",
    summary: "Understanding feeding frequency and establishing a healthy nursing routine",
    category: "breastfeeding-techniques",
    tags: ["feeding-frequency", "schedule", "newborn"],
    author: "NariCare Team",
    publishedAt: "2024-01-11T00:00:00Z",
    updatedAt: "2024-01-11T00:00:00Z",
    readTime: 4,
    difficulty: "beginner",
    content: {
      sections: [
        {
          type: "callout",
          style: "info",
          title: "Important Note",
          content: "This information is for mothers with babies born at full term or close to full term and addresses the normal course of breastfeeding."
        },
        {
          type: "text",
          content: "Right after the birth, place the baby skin to skin and initiate breastfeeding within the first hour, if possible."
        },
        {
          type: "text",
          content: "It is important to feed the baby between 8 - 12 times, day and night to establish your milk supply, help your baby grow and prevent or treat jaundice. The first few days, your body produces the earliest form of breastmilk called colostrum."
        },
        {
          type: "callout",
          style: "warning",
          title: "Key Point",
          content: "It is very important for moms to frequently breastfeed to stimulate milk production. The more mature milk which is thin and whiter usually comes in after 3 days for most mothers."
        },
        {
          type: "text",
          content: "Nurse the baby when the baby shows signs of hunger. Everything in the range of 4 times a day - 13 times a day is normal since every mother and every baby is different."
        },
        {
          type: "text",
          content: "Exclusively breastfed babies nurse for about 8 times a day on average, in the first six months."
        },
        {
          type: "text",
          content: "There are going to be days when the baby feeds more than the average, these days are also called growth spurts. Other days when the baby is not feeling well, the baby tends to nurse less."
        }
      ]
    }
  },
  {
    id: "milk-not-coming-in",
    title: "Why is my milk not coming in?",
    summary: "Understanding delayed lactation and factors that affect milk production",
    category: "milk-supply-production",
    tags: ["delayed-lactation", "milk-production", "factors"],
    author: "NariCare Team",
    publishedAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
    readTime: 3,
    difficulty: "intermediate",
    content: {
      sections: [
        {
          type: "text",
          content: "The more mature milk which is thin and whiter usually comes in after 3 days for most mothers. The breasts start feeling heavy and full and you might notice milk leaking from the breasts."
        },
        {
          type: "heading",
          level: 2,
          content: "Factors that might delay the onset of lactation:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Delivery by C-Section",
            "Pain medication during labor",
            "Retained Placenta",
            "First time mothers",
            "Obesity",
            "Maternal Health"
          ]
        },
        {
          type: "callout",
          style: "success",
          title: "What Helps",
          content: "Mothers who breastfeed or express milk early and often, if unable to breastfeed for any reason, have higher milk production on days 3-4. Skin-to-Skin contact with the baby helps with milk production."
        }
      ]
    }
  },
  {
    id: "yellow-breast-milk-colostrum",
    title: "Why is my first breast milk yellow?",
    summary: "Understanding colostrum - your baby's first superfood",
    category: "milk-supply-production",
    tags: ["colostrum", "liquid-gold", "early-milk"],
    author: "NariCare Team",
    publishedAt: "2024-01-09T00:00:00Z",
    updatedAt: "2024-01-09T00:00:00Z",
    readTime: 4,
    difficulty: "beginner",
    featured: true,
    content: {
      sections: [
        {
          type: "callout",
          style: "success",
          title: "Liquid Gold",
          content: "Colostrum is the earliest breast milk produced by mothers ready for babies at birth and is also called liquid gold. It is highly concentrated, full of protein and has disease fighting antibodies."
        },
        {
          type: "text",
          content: "It is nutrient rich and has everything the baby needs in the early days after birth. It is thick, sticky, concentrated milk and is usually yellow, clear or white, although it could be other colors as well."
        },
        {
          type: "callout",
          style: "info",
          title: "Hand Expression Tip",
          content: "If you are not able to breastfeed for any reason in the early hours, hand express the colostrum to feed your baby, hand expression yields more volume of colostrum than using a breast pump."
        },
        {
          type: "text",
          content: "Colostrum is very important for pre-term babies as it has many health benefits."
        },
        {
          type: "text",
          content: "By the fourth day, the more mature whitish thin milk starts coming in for most mothers, babies will start drinking colostrum mixed with more mature milk. The colostrum will remain in the milk for the first few weeks."
        },
        {
          type: "callout",
          style: "warning",
          title: "Important Benefits",
          content: "Colostrum prevents jaundice as it acts like a laxative to help your baby pass the dark first poop (meconium). Colostrum is the most important first food for all infants."
        }
      ]
    }
  },
  {
    id: "good-latch-breastfeeding",
    title: "How to get a good latch while breastfeeding?",
    summary: "Step-by-step guide to achieving the perfect latch for comfortable feeding",
    category: "breastfeeding-techniques",
    tags: ["latch", "positioning", "technique"],
    author: "NariCare Team",
    publishedAt: "2024-01-08T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
    readTime: 5,
    difficulty: "beginner",
    featured: true,
    content: {
      sections: [
        {
          type: "text",
          content: "Whatever breastfeeding position you chose - cradle hold, football hold, cross cradle hold, side lying - follow the below steps for the perfect latch:"
        },
        {
          type: "heading",
          level: 2,
          content: "Steps for Perfect Latch:"
        },
        {
          type: "list",
          style: "numbered",
          items: [
            "Support your baby's neck, shoulders, and hips with your hands and make sure they are all aligned",
            "Bring the baby to the breast, not your breast to the baby and hold her skin-to-skin",
            "Get good back support, relax your shoulders. Do not lean forward",
            "Use a good nursing pillow which offers great back support",
            "Tickle the baby lips with your nipple so she opens her mouth",
            "Wait till the baby opens the mouth wide enough and then immediately bring the baby to the breast",
            "Baby's nose should be directly across your nipple",
            "Ensure the baby takes a good portion of the areola which is the darker area around the nipple and not just the nipple"
          ]
        },
        {
          type: "media",
          mediaType: "video",
          media: [
            {
              title: "Perfect Latch Technique",
              url: "https://youtu.be/7FJuBn2bgNk?feature=shared",
              thumbnail: "https://img.youtube.com/vi/7FJuBn2bgNk/maxresdefault.jpg",
              description: "Learn the step-by-step process for achieving a perfect latch"
            },
            {
              title: "Latch Positioning Guide",
              url: "https://youtu.be/jyOt9aB6sOo?feature=shared",
              thumbnail: "https://img.youtube.com/vi/jyOt9aB6sOo/maxresdefault.jpg",
              description: "Visual guide to proper positioning for successful latching"
            }
          ]
        }
      ]
    }
  },
  {
    id: "baby-hunger-cues",
    title: "Should I wait till my baby cries before feeding her?",
    summary: "Recognizing early hunger cues for better feeding experiences",
    category: "breastfeeding-techniques",
    tags: ["hunger-cues", "feeding-timing", "baby-signals"],
    author: "NariCare Team",
    publishedAt: "2024-01-07T00:00:00Z",
    updatedAt: "2024-01-07T00:00:00Z",
    readTime: 3,
    difficulty: "beginner",
    content: {
      sections: [
        {
          type: "callout",
          style: "warning",
          title: "Important",
          content: "When babies are hungry, they show hunger cues and have to be fed as soon as the mom notices the early signs. Crying is a late sign of hunger. It is easier to breastfeed a calm baby than a crying baby."
        },
        {
          type: "heading",
          level: 2,
          content: "Early cues of hunger:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Bringing hands to mouth",
            "Increased Body Movement",
            "Making cooing noises",
            "Fussiness",
            "Restlessness",
            "Rooting for your breast",
            "Crying"
          ]
        },
        {
          type: "callout",
          style: "info",
          title: "If Baby is Already Crying",
          content: "If the baby is already crying, hold the baby skin-to-skin and soothe the baby before starting to breastfeed her."
        },
        {
          type: "media",
          mediaType: "video",
          media: [
            {
              title: "Recognizing Hunger Cues",
              url: "https://youtu.be/ABAXgubx58Q?feature=shared",
              thumbnail: "https://img.youtube.com/vi/ABAXgubx58Q/maxresdefault.jpg",
              description: "Learn to identify your baby's hunger signals before they cry"
            }
          ]
        }
      ]
    }
  },
  {
    id: "avoid-breastfeeding-pain",
    title: "How to avoid pain while breastfeeding?",
    summary: "Identifying poor latch signs and techniques for pain-free nursing",
    category: "common-challenges",
    tags: ["pain", "latch-problems", "nipple-pain"],
    author: "NariCare Team",
    publishedAt: "2024-01-06T00:00:00Z",
    updatedAt: "2024-01-06T00:00:00Z",
    readTime: 6,
    difficulty: "intermediate",
    content: {
      sections: [
        {
          type: "heading",
          level: 2,
          content: "Signs of a poor latch:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Baby seems fussy and doesn't look satisfied after the feed",
            "Extreme pain during the entire nursing session, not just the initial discomfort which is common and goes away after a few minutes",
            "Baby makes clicking noises as the suction is broken multiple times",
            "Sore, cracked or bleeding nipples",
            "Discoloration of the nipple or the nipple looks lip-stick shaped after the feed"
          ]
        },
        {
          type: "callout",
          style: "warning",
          title: "Shallow Latch Problem",
          content: "When a baby doesn't take a good portion of the areola and rather feeds from just the nipple, it causes extreme pain to the mother and results in sore, cracked, bleeding nipples. This is called a shallow latch, when the baby nipple feeds and doesn't breastfeed."
        },
        {
          type: "heading",
          level: 2,
          content: "To get a deep latch, follow these tips:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Sit in a comfortable position, relax your shoulders and the entire body",
            "Position the baby so that the baby's head and body are in alignment",
            "Bring your baby across the front of your body, tummy to tummy",
            "Touch the baby's lip with your nipple to encourage the baby to open her mouth",
            "Once the baby opens the mouth wide enough, quickly bring the baby to the breast",
            "Do not lean forward and hunch your shoulders. Bring the baby to the breast, not the breast to the baby",
            "Side Lying and Laid back positions will encourage the baby to naturally look for the nipple and extend the head to get a good latch by opening their mouth wide"
          ]
        },
        {
          type: "media",
          mediaType: "video",
          media: [
            {
              title: "How to avoid sore nipples",
              url: "https://youtu.be/NfVvFNLy5kc",
              thumbnail: "https://img.youtube.com/vi/NfVvFNLy5kc/maxresdefault.jpg",
              description: "Techniques to prevent and treat sore nipples"
            },
            {
              title: "Lower lip placement technique",
              url: "https://www.facebook.com/reel/458215646196516?s=chYV2B&fs=e",
              thumbnail: "https://via.placeholder.com/480x360/e91e63/ffffff?text=Facebook+Video",
              description: "Proper lower lip placement to avoid shallow latch"
            },
            {
              title: "Exaggerated Latch Technique",
              url: "https://youtu.be/41fC0fQs1P8",
              thumbnail: "https://img.youtube.com/vi/41fC0fQs1P8/maxresdefault.jpg",
              description: "Advanced technique for achieving deeper latch"
            }
          ]
        }
      ]
    }
  },
  {
    id: "nipple-pain-causes",
    title: "What causes nipple pain during breastfeeding?",
    summary: "Understanding the root causes of nipple pain and discomfort",
    category: "common-challenges",
    tags: ["nipple-pain", "causes", "problems"],
    author: "NariCare Team",
    publishedAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z",
    readTime: 5,
    difficulty: "intermediate",
    content: {
      sections: [
        {
          type: "heading",
          level: 2,
          content: "Common Causes of Nipple Pain:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Incorrect latch - Shallow latch causes a lot of nipple pain to the mothers as the baby suckles just on the nipples and doesn't take a good portion of the areola",
            "Babies with a tongue tie or lip tie find it hard to latch on correctly causing pain. There can be cracking, distortion, blanching or bleeding from the nipple, sometimes followed by infection or mastitis",
            "If you have flat or inverted nipples, the baby may put extra pressure to draw out the nipples which causes pain. The soreness should go away after the initial 2 weeks of breastfeeding",
            "If you are pumping, using incorrectly sized pump flanges, too-high or low suction settings",
            "When you have an oversupply and a forceful milk ejection, the baby might clamp the breasts to slow the flow which also causes pain",
            "Rash on the nipple from using deodorants, soaps, breast pads etc."
          ]
        },
        {
          type: "callout",
          style: "info",
          title: "Normal vs. Concerning Pain",
          content: "The initial discomfort and pain when the baby latches on is normal and should go away after a few seconds. If the pain persists, this indicates a shallow latch."
        },
        {
          type: "media",
          mediaType: "video",
          media: [
            {
              title: "How to avoid sore nipples",
              url: "https://youtu.be/NfVvFNLy5kc",
              thumbnail: "https://img.youtube.com/vi/NfVvFNLy5kc/maxresdefault.jpg",
              description: "Prevention and treatment of sore nipples"
            },
            {
              title: "Lower lip placement technique",
              url: "https://www.facebook.com/reel/458215646196516?s=chYV2B&fs=e",
              thumbnail: "https://via.placeholder.com/480x360/e91e63/ffffff?text=Facebook+Video",
              description: "Correct positioning to prevent shallow latch"
            },
            {
              title: "Exaggerated Latch Technique",
              url: "https://youtu.be/41fC0fQs1P8",
              thumbnail: "https://img.youtube.com/vi/41fC0fQs1P8/maxresdefault.jpg",
              description: "Advanced latching technique for pain prevention"
            }
          ]
        }
      ]
    }
  },
  {
    id: "baby-weight-gain-chart",
    title: "Average weight gain of breastfed babies",
    summary: "WHO growth standards and weight tracking guidelines for breastfed infants",
    category: "baby-health-growth",
    tags: ["weight-gain", "growth-chart", "WHO-standards"],
    author: "NariCare Team",
    publishedAt: "2024-01-04T00:00:00Z",
    updatedAt: "2024-01-04T00:00:00Z",
    readTime: 3,
    difficulty: "beginner",
    content: {
      sections: [
        {
          type: "text",
          content: "Here is a chart of average weight gain by age according to the World Health Organization (WHO) issued Child Growth Standards in 2006."
        },
        {
          type: "table",
          headers: ["Baby's Age", "Average Weight Gain"],
          rows: [
            ["0-4 months", "155 – 241 grams per week"],
            ["4-6 months", "92 – 126 grams per week"],
            ["6-12 months", "50 – 80 grams per week"]
          ]
        },
        {
          type: "heading",
          level: 2,
          content: "To get accurate results:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Weigh the baby on the same day once a week",
            "Use the same weighing scale every time",
            "Keep the baby naked while weighing"
          ]
        },
        {
          type: "callout",
          style: "info",
          title: "Important Note",
          content: "Please note that babies lose 5-7% of their weight in the first few days after birth and regain their birth weight by 10 - 14 days."
        }
      ]
    }
  },
  {
    id: "low-milk-supply-causes",
    title: "Causes of Low Milk Supply/Less Milk Production",
    summary: "Common factors that can negatively impact milk production",
    category: "milk-supply-production",
    tags: ["low-milk-supply", "causes", "milk-production"],
    author: "NariCare Team",
    publishedAt: "2024-01-03T00:00:00Z",
    updatedAt: "2024-01-03T00:00:00Z",
    readTime: 2,
    difficulty: "intermediate",
    content: {
      sections: [
        {
          type: "heading",
          level: 2,
          content: "Common Causes of Low Milk Supply:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Supplementing with formula",
            "Feeding the baby on a schedule rather than on-demand",
            "Feeding only from one breast before the milk supply has been established",
            "Stopping the feed before the baby ends it by himself",
            "Increased gap between feedings",
            "Use of pacifiers",
            "Prolonged use of nipple shields"
          ]
        },
        {
          type: "callout",
          style: "warning",
          title: "Key Takeaway",
          content: "Most milk supply issues can be prevented by following baby-led, on-demand feeding practices and avoiding unnecessary supplements or feeding aids."
        }
      ]
    }
  },
  {
    id: "when-to-get-help",
    title: "What's Not Normal – When to Get Help",
    summary: "Warning signs that require immediate medical attention",
    category: "baby-health-growth",
    tags: ["warning-signs", "medical-help", "emergency"],
    author: "NariCare Team",
    publishedAt: "2024-01-02T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
    readTime: 3,
    difficulty: "beginner",
    featured: true,
    content: {
      sections: [
        {
          type: "callout",
          style: "danger",
          title: "When to Contact Your Doctor",
          content: "It's important to speak to your doctor or lactation consultant if you notice any of the following:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "🍼 No wet or dirty diapers in a 24-hour period",
            "💧 Urine is dark in color after day 3 (it should be pale yellow or clear)",
            "💩 Poop is still dark after day 4 (it should be mustard yellow by then, with no black meconium)",
            "🔄 Baby is feeding less often than 8 times in 24 hours or is having fewer wet/soiled diapers than expected",
            "🤒 Mom has symptoms of infection like a sore, red breast along with fever, chills, or body aches — this could be mastitis"
          ]
        },
        {
          type: "callout",
          style: "success",
          title: "Trust Your Instincts",
          content: "Trust your instincts. If something feels off, don't hesitate to get help."
        }
      ]
    }
  },
  {
    id: "prepare-breastfeeding-before-birth",
    title: "How to Prepare for Breastfeeding in the Month Before Birth",
    summary: "Essential preparation steps for a successful breastfeeding journey",
    category: "preparation-planning",
    tags: ["preparation", "birth-plan", "hospital-bag"],
    author: "NariCare Team",
    publishedAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    readTime: 5,
    difficulty: "beginner",
    featured: true,
    content: {
      sections: [
        {
          type: "heading",
          level: 2,
          content: "1. Make a Birth Plan That Supports Breastfeeding"
        },
        {
          type: "text",
          content: "Discuss your preferences with your doctor. Clearly mention that your baby should not be given formula, bottles, pacifiers, or artificial nipples unless it's prescribed by your pediatrician and you approve it."
        },
        {
          type: "heading",
          level: 2,
          content: "2. If Formula Is Needed, Say No to Bottles"
        },
        {
          type: "text",
          content: "If supplementation is medically necessary, ask that it be given through a spoon, paladai, or oral syringe—not a bottle. This helps protect your baby's latch and breastfeeding journey."
        },
        {
          type: "heading",
          level: 2,
          content: "3. Ask About Hospital Practices"
        },
        {
          type: "text",
          content: "Before delivery, check with your hospital about:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "✅ Breastfeeding within the first hour after birth",
            "✅ Skin-to-skin contact immediately after delivery",
            "✅ Keeping baby in the same room (rooming-in)",
            "✅ Access to a lactation consultant within 24 hours"
          ]
        },
        {
          type: "heading",
          level: 2,
          content: "4. Pack Your Breastfeeding Essentials"
        },
        {
          type: "text",
          content: "Here's a simple checklist for your hospital bag:"
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Nursing bras",
            "Nipple cream",
            "Breastfeeding pillow (optional but helpful)",
            "Easy-to-open nursing-friendly outfits",
            "Breast pump (if advised)",
            "Breast milk storage bags or bottles"
          ]
        },
        {
          type: "media",
          mediaType: "video",
          media: [
            {
              title: "Breastfeeding Preparation Guide",
              url: "https://www.youtube.com/watch?v=OhF-qpaaOHQ",
              thumbnail: "https://img.youtube.com/vi/OhF-qpaaOHQ/maxresdefault.jpg",
              description: "Complete guide to preparing for breastfeeding before birth"
            }
          ]
        }
      ]
    }
  }
];

// Helper functions
export const getFeaturedArticles = () => blogArticles.filter(article => article.featured);

export const getArticlesByCategory = (categoryId: string) => 
  blogArticles.filter(article => article.category === categoryId);

export const getArticleById = (id: string) => 
  blogArticles.find(article => article.id === id);

export const getCategoryById = (id: string) => 
  blogCategories.find(category => category.id === id);

export const getRecentArticles = (limit: number = 5) => 
  [...blogArticles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);