import { FaRocket, FaBolt, FaCrown, FaHandshake, FaChartLine, FaTrophy, FaUser, FaGlobe, FaUsers, FaBullhorn, FaAward } from "react-icons/fa";

const serviceC = [
    {
        tag:"school-college",
        service: [
          {
            id: "1b925d1da9eb47b394c30ee9",
            title: "Basic Digital Presence Package",
            subHeading:"For institutions looking to establish a strong online presence",
            price: "₹30,000",
            priceType: "Month",
            icon: FaGlobe, 
            features: [
              "Social Media Management (3 platforms)",
              "SEO Optimization",
              "Online Reputation Management",
              "Email & SMS Marketing (Limited)"
            ]
          },
          {
            id: "5304cad18ff14a169053dc8c",
            title: "Growth & Lead Generation Package",
            subHeading:"For institutions focusing on admissions, lead generation, and student engagement.",
            price: "₹50,000",
            priceType: "Month",
            icon: FaRocket, // 🚀 Growth & Lead
            features: [
              "Social Media Management (4 platforms)",
              "SEO Optimization & Website Maintenance",
              "Paid Ads (₹10,000 Ad Spend Included)",
              "Parent & Student Outreach Campaigns",
              "Email & SMS Marketing"
            ]
          },
          {
            id: "2e0002fd9bc64cbeb38312aa",
            title: "Premium 360° Marketing Package",
            subHeading:"For institutions looking for an end-to-end digital marketing solution.",
            price: "₹80,000",
            priceType: "Month",
            icon: FaAward,
            features: [
              "Social Media Management (All major platforms)",
              "Website Development & SEO Optimization",
              "Paid Ads (₹15,000 Ad Spend Included)",
              "Branding & Content Marketing",
              "Online Reputation Management",
              "Event Promotions & Live Coverage",
              "YouTube & Video Marketing",
              "Student Engagement & Community Building"
            ]
          }
        ]
        
    },

    {
        tag:"personal",
        service:  [
            {
              id: "c56adc4579c74a1ea5b6e178",
              title: "Starter Personal Brand Package",
              price: "₹20,000",
              priceType: "Month",
              icon:FaUser,
              features: [
                " Social Media Management",
                " Content Creation (5 posts + 3 reels)",
                " Personal SEO Optimization"
              ]
            },
            {
              id: "79455af3abfa40fc902a3231",
              title: "Influencer Growth Package",
              price: "₹35,000",
              priceType: "Month",
              icon:FaChartLine,
              features: [
                " Social Media Management",
                " Content Creation (10 posts + 5 reels)",
                " Paid Advertising (Excluding Ad Budget)",
                " Video Editing for Reels/Shorts"
              ]
            },
            {
              id: "1e722493aace4c6ba0af68dd",
              title: "Premium Authority Package",
              price: "₹50,000",
              priceType: "Month",
              icon:FaCrown,
              features: [
                " Social Media Management",
                " Content Creation (15 posts + 7 reels)",
                " Paid Advertising (₹5,000 Ad Budget Included)",
                " Thought Leadership (LinkedIn Articles + PR)",
                " Personal Website Development (One-time)"
              ]
            }
          ]
    },
    {
        tag:"political",
        service:[
          {
            id: "960dcb910f92422d9d5b8747",
            title: "Starter Package",
            price: "₹45,000",
            priceType: "Month",
            icon: FaHandshake,
            features: [
              "Social Media Management (2 platforms)",
              "10 Custom Social Media Graphics",
              "₹20,000 Facebook & Instagram Ads (ad spend separate)",
              "WhatsApp & SMS Marketing (5,000 messages)",
              "Monthly Performance Report"
            ]
          },
          {
            id: "04f460696c054d619ac5d585",
            title: "Growth Package",
            price: "₹85,000",
            priceType: "Month",
            icon: FaChartLine,
            features: [
              "Social Media Management (3 platforms)",
              "20 Custom Social Media Graphics + 5 Reels",
              "₹50,000 Facebook & Instagram Ads (ad spend separate)",
              "WhatsApp & SMS Marketing (10,000 messages)",
              "Political Branding Kit (Logo, Slogans, etc.)",
              "Website Development (Basic)",
              "Crisis & Reputation Management"
            ]
          },
          {
            id: "6ab1205da1bf4572b619cd21",
            title: "Ultimate Campaign Package",
            price: "₹1,50,000",
            priceType: "Month",
            icon: FaTrophy, 
            features: [
              "Social Media Management (4 platforms)",
              "30 Custom Social Media Graphics + 10 Reels",
              "₹1,00,000 Ad Budget Management (Meta & Google Ads)",
              "WhatsApp & SMS Marketing (20,000 messages)",
              "Website Development (Advanced) + SEO Optimization",
              "Data Analytics & Voter Sentiment Analysis",
              "Crisis Management & Fake News Handling",
              "Election Day Social Media Coverage & Exit Poll Surveys"
            ]
          }
        ]
    },
    {
        tag:"business",
        service: [
          {
            id: "6ab1205da1bf4572b6ff9cd21",
            title: "Starter Business Pack",
            price: "₹25,000",
            priceType: "Month",
            icon: FaRocket, 
            features: [
              "Social Media Management (FB, IG, LinkedIn – 3 posts/week)",
              "Basic SEO (On-page optimization & keyword research)",
              "Google My Business Setup & Optimization",
              "1 Blog Post (SEO-optimized, 800 words)",
              "1 Ad Campaign Setup (Meta Ads or Google Ads, budget not included)"
            ]
          },
          {
            id: "fab1205da1bf4572b619cd2d",
            title: "Growth Business Pack",
            price: "₹50,000",
            priceType: "Month",
            icon: FaBolt, 
            features: [
              "Social Media Management (FB, IG, LinkedIn – 5 posts/week + engagement)",
              "Advanced SEO (On-page & off-page with 10 backlinks/month)",
              "Google Ads + Meta Ads (Setup + 8% of Ad Budget)",
              "Website Optimization (Speed & UI/UX improvements)",
              "2 Blog Posts (SEO-optimized, 1000 words each)",
              "Branding & Graphics (5 creatives/month)"
            ]
          },
          {
            id: "dab1205da1bf4572b619cd4f",
            title: "Ultimate Business Pack",
            price: "₹80,000",
            priceType: "Month",
            icon: FaCrown, 
            features: [
              "Social Media Management (All platforms + daily posts + engagement)",
              "Full SEO Strategy (On-page, Off-page, Technical SEO)",
              "Google Ads + Meta Ads (Setup + 5% of Ad Budget)",
              "Website Development (If needed) + Monthly Maintenance",
              "4 Blog Posts (SEO-optimized, 1500 words each)",
              "Branding & Graphic Design (10 creatives/month)",
              "Video Marketing (1 promotional video/month)",
              "Reputation Management (Review handling & PR)"
            ]
          }
        ]
    }
]

export default serviceC;