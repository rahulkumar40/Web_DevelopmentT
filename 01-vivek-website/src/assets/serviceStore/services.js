import { 
    FaUsers, FaSearch, FaBullhorn, FaGlobe, FaFileAlt, 
    FaPalette, FaChartLine, FaShoppingCart, FaVideo, FaShieldAlt, 
    FaAd, FaEnvelope, FaChartPie, FaVoteYea, FaLightbulb, 
    FaCalendarAlt, FaComments, FaEnvelopeOpenText, FaUsersCog ,FaPenNib ,FaMicrophone ,FaPlayCircle ,FaMailBulk ,FaChalkboardTeacher 
  } from "react-icons/fa";
const servicesD  = [
    {
        tag:"business",
        services:[
            {
              id: "4ba349de742c44288f633685",
              service: "Social Media Marketing (SMM)",
              icon: FaUsers, 
              plans: [
                { planType: "Basic", price: "₹10,000", priceType: "month", additional: "2 posts/week" },
                { planType: "Advanced", price: "₹18,000", priceType: "month", additional: "4 posts/week" },
                { planType: "Premium", price: "₹30,000", priceType: "month", additional: "daily posts + engagement" }
              ]
              ,
              features: [
                "Social media account setup & management (Facebook, Instagram, LinkedIn, Twitter, etc.)",
                "Social media content creation (posts, stories, reels)",
                "Social media ad campaigns (Meta Ads, LinkedIn Ads, Twitter Ads)",
                "Influencer marketing collaboration"
              ]
            },
            {
              id: "4872fb539f6348a9ac86d404",
              service: "Search Engine Optimization (SEO)",
              plans: [
                { planType: "Basic", price: "₹12,000", priceType: "month", additional: "Basic SEO" },
                { planType: "Advanced", price: "₹20,000", priceType: "month", additional: "Full on-page & off-page SEO" },
                { planType: "Premium", price: "₹35,000", priceType: "month", additional: "SEO + Content Strategy" }
              ],
              icon: FaSearch, 
              features: [
                "Website SEO audit & optimization",
                "Keyword research & strategy",
                "On-page & off-page SEO",
                "Local SEO (Google My Business optimization)",
                "Technical SEO (site speed, mobile optimization)"
              ]
            },
            {
              id: "938e5da6a8174449bd51023f",
              service: "Paid Advertising (PPC)",
              plans: [
                { planType: "Basic", price: "₹5,000", priceType: "setup", additional: "+ 10% of Ad Budget" },
                { planType: "Advanced", price: "₹8,000", priceType: "setup", additional: "+ 8% of Ad Budget" },
                { planType: "Premium", price: "₹12,000", priceType: "setup", additional: "+ 5% of Ad Budget" }
              ],
              icon: FaBullhorn, 
        
              features: [
                "Google Ads (Search, Display, Shopping, Video)",
                "Facebook & Instagram Ads",
                "LinkedIn & Twitter Ads",
                "Retargeting & remarketing campaigns",
                "Conversion rate optimization"
              ]
            },
            {
              id: "c24d6f5bca974ad3a86e4390",
              service: "Website Development & Optimization",
              plans: [
                { planType: "Basic", price: "₹15,000", priceType: "one-time", additional: "Basic 5-page site" },
                { planType: "Advanced", price: "₹30,000", priceType: "one-time", additional: "E-commerce site" },
                { planType: "Premium", price: "₹50,000", priceType: "one-time", additional: "Custom design + SEO" }
              ],
              icon: FaGlobe,
              features: [
                "Business website design & development",
                "E-commerce website setup",
                "Landing page creation for campaigns",
                "Website maintenance & security",
                "UI/UX optimization for better user experience"
              ]
            },
            {
              id: "863c466330694bfa9a2f6441",
              service: "Content Marketing & Blogging",
              plans: [
                { planType: "Basic", price: "₹1,500", priceType: "per article", additional: "500 words" },
                { planType: "Advanced", price: "₹3,500", priceType: "per article", additional: "1000 words" },
                { planType: "Premium", price: "₹5,000", priceType: "per article", additional: "SEO optimized, 1500+ words" }
              ],
              icon: FaFileAlt, 
              features: [
                "Blog writing & management",
                "Email marketing campaigns",
                "Video marketing (short-form & long-form content)",
                "Press releases & online PR"
              ]
            },
            {
              id: "4a10fac86441420284b0b67c",
              service: "Branding & Graphic Design",
              plans: [
                { planType: "Basic", price: "₹5,000", priceType: "one-time", additional: "Logo + 2 creatives" },
                { planType: "Advanced", price: "₹15,000", priceType: "one-time", additional: "Branding kit" },
                { planType: "Premium", price: "₹25,000", priceType: "one-time", additional: "Full branding package" }
              ],
              icon: FaPalette, 
              features: [
                "Logo design & brand identity",
                "Business cards, brochures & flyers",
                "Product packaging design",
                "Corporate presentations & pitch decks"
              ]
            },
            {
              id: "1260c541934a4133983242fc",
              service: "Lead Generation & CRM Solutions",
              plans: [
                { planType: "Basic", price: "₹5,000", priceType: "one-time", additional: "Logo + 2 creatives" },
                { planType: "Advanced", price: "₹15,000", priceType: "one-time", additional: "Branding kit" },
                { planType: "Premium", price: "₹25,000", priceType: "one-time", additional: "Full branding package" }
              ],
              icon: FaChartLine, 
              features: [
                "Lead capture & nurturing strategies",
                "WhatsApp & email automation",
                "CRM setup & integration (HubSpot, Zoho, etc.)"
              ]
            },
            {
              id: "4a641eaa573140cfaaa8e637",
              service: "E-commerce Marketing",
              plans: [
                { planType: "Basic", price: "₹12,000", priceType: "month", additional: "" },
                { planType: "Advanced", price: "₹20,000", priceType: "month", additional: "" },
                { planType: "Premium", price: "₹35,000", priceType: "month", additional: "" }
              ],
              icon: FaShoppingCart, 
              features: [
                "Shopify, WooCommerce & Amazon store setup",
                "Product listing optimization",
                "E-commerce ad campaigns & sales funnel optimization"
              ]
            },
            {
              id: "b853c63e7df544b2a30451eb",
              service: "Video & Motion Graphics",
              plans: [
                { planType: "Basic", price: "₹8,000", priceType: "per video", additional: "Basic edits" },
                { planType: "Advanced", price: "₹15,000", priceType: "per video", additional: "Animated explainer" },
                { planType: "Premium", price: "₹25,000", priceType: "per video", additional: "High-quality production" }
              ],
              icon: FaVideo, 
              features: [
                "Promotional videos & animations",
                "YouTube channel setup & growth strategies",
                "Product showcase videos"
              ]
            },
            {
              id: "7bdb457db6e24ac2abc508ce",
              service: "Reputation Management & PR",
              plans: [
                { planType: "Basic", price: "₹10,000", priceType: "month", additional: "" },
                { planType: "Advanced", price: "₹18,000", priceType: "month", additional: "" },
                { planType: "Premium", price: "₹30,000", priceType: "month", additional: "" }
              ],
              icon: FaShieldAlt, 
              features: [
                "Online reputation monitoring & crisis management",
                "Review & feedback management",
                "PR & media outreach"
              ]
            }
          ]
    
},
{
    tag:"political",
    services:[
      {
        id: "e94b1fd70e064d0fad4f74bd",
        service: "Digital Strategy & Consulting",
        icon: FaChartLine,
        features: [
          "Campaign planning & strategy development",
          "Competitor analysis & voter behavior insights",
          "Data-driven decision-making"
        ]
      },
      {
        id: "6653a1060fdf403aabbcb40c",
        service: "Social Media Management",
        icon: FaUsers,
        features: [
          "Profile creation & optimization (Facebook, Instagram, Twitter, LinkedIn, YouTube)",
          "Content planning & scheduling",
          "Engagement & reputation management",
          "Community building & voter interaction"
        ]
      },
      {
        id: "3079a8a18e634aca8abf6da0",
        service: "Content Creation & Branding",
        icon: FaBullhorn,
        features: [
          "Graphic design (posters, banners, infographics, etc.)",
          "Video production (promotional videos, reels, speeches, etc.)",
          "Speech writing & content marketing",
          "Personalized campaign slogans & messaging"
        ]
      },
      {
        id: "6e4acba455324d28a3ddd731",
        service: "Political Advertising & Promotions",
        icon: FaAd,
        features: [
          "Facebook & Instagram Ads (targeted voter outreach)",
          "Google Ads (search, display & YouTube ads)",
          "WhatsApp & SMS marketing",
          "Influencer & micro-influencer collaborations"
        ]
      },
      {
        id: "dc25b427300541b594865e21",
        service: "Website & Landing Page Development",
        icon: FaGlobe,
        features: [
          "Political campaign website design",
          "Donation & volunteer sign-up integration",
          "SEO optimization for better visibility"
        ]
      },
      {
        id:"66a8b3b6861f4d95a604cab7" ,
        service: "Voter Engagement & Outreach",
        icon: FaEnvelope,
        features: [
          "WhatsApp & Telegram campaign management",
          "Automated chatbot services for voter queries",
          "Email marketing & newsletters",
          "Online surveys & feedback collection"
        ]
      },
      {
        id: "b6694b1f15044118b9703e75",
        service: "Data Analytics & Performance Tracking",
        icon: FaChartPie,
        features: [
          "Social media & ad campaign performance reports",
          "Voter sentiment analysis",
          "Real-time engagement tracking & optimization"
        ]
      },
      {
        id: "de82c91b281d4d94a68e1157",
        service: "Crisis Management & Online Reputation",
        icon: FaShieldAlt,
        features: [
          "Handling negative comments & fake news",
          "Image & brand reputation monitoring",
          "Response strategy for political crises"
        ]
      },
      {
        id: "5acaff6e7a1840fe80ce7c80",
        service: "Election Day & On-Ground Digital Support",
        icon: FaVoteYea,
        features: [
          "Live updates & social media coverage",
          "Exit poll surveys & real-time analytics",
          "Influencer-led voter motivation campaigns"
        ]
      }
    ]
},
{
    tag:"personal",
    services: [
        {
          id: "720d364491a142f693e601ff",
          service: "Social Media Management",
          price: "₹12,000",
          priceType: "Month",
          icon: FaUsers,
          features: [
            "Personal brand development on platforms like Instagram, LinkedIn, Twitter, and Facebook.",
            "Content strategy and calendar planning.",
            "Engagement and community building."
          ]
        },
        {
          id: "b07823716db340f1994f20f7",
          service: "Content Creation (10 posts + 5 reels)",
          price: "₹15,000",
          priceType: " Month",
          icon:FaPenNib,
          features: [
            "Personalized post and blog writing.",
            "Professional graphics and video creation.",
            "Reels and short-form video editing."
          ]
        },
        {
          id: "ae79b7019f4042f99cb2552c",
          service: "Website & Portfolio Development",
          price: "₹20,000",
          priceType: "One-time",
          icon:FaGlobe  ,
          features: [
            "Personal website design and development.",
            "Online portfolio creation for professionals, influencers, and freelancers.",
            "SEO optimization for personal brand visibility."
          ]
        },
        {
          id: "a7bb57d085714cb391d70256",
          service: "Personal Reputation Management",
          price: "₹18,000",
          priceType: "Month",
          icon:FaShieldAlt,
          features: [
            "Online presence auditing and improvement.",
            "Negative content suppression.",
            "Media outreach and PR."
          ]
        },
        {
          id: "ecbb62da1a1148a5864a8222",
          service: "Paid Advertising & Promotions",
          price: "₹10,000",
          priceType: "Excluding Ad Budget",
          icon:FaBullhorn ,
          features: [
            "Facebook, Instagram, and Google Ads for personal brand growth.",
            "Influencer collaborations and promotions.",
            "YouTube and LinkedIn Ads."
          ]
        },
        {
          id: "9f96f5aafda846f39929e59f",
          service: "Thought Leadership & Public Speaking",
          price: "₹15,000",
          priceType: "Month",
          icon:FaMicrophone ,
          features: [
            "LinkedIn content strategy for professionals.",
            "Ghostwriting articles for media publications.",
            "Podcast guest appearances and speaker outreach."
          ]
        },
        {
          id: "6649dce1bb644b6d9e1174f7",
          service: "Personal SEO & Google Ranking",
          price: "₹18,000",
          priceType: "Month",
          icon:FaSearch ,
          features: [
            "Optimizing personal profiles for search engines.",
            "Google Knowledge Panel setup and management.",
            "Wikipedia page creation (if eligible)."
          ]
        },
        {
          id: "b3221a2c55d34e25b2e53c4e",
          service: "Video & Podcast Production",
          price: "₹20,000",
          priceType: "Month",
          icon:FaPlayCircle ,
          features: [
            "Personal YouTube channel growth.",
            "Podcast setup and editing.",
            "Interview-style video production."
          ]
          
        },
        {
          id: "63439c1abe52458fbc81ebf4",
          service: "Email Marketing & Newsletters",
          price: "₹10,000",
          priceType: "Month",
          icon:FaMailBulk   ,
          features: [
            "Personalized email campaigns for audience engagement.",
            "Newsletter creation for thought leadership.",
            "Automated email sequences for personal branding."
          ]
        },
        {
          id: "06cf8d594cd74459842e6df2",
          service: "Event & Webinar Promotion",
          price: "₹12,000",
          priceType: "Month",
          icon:FaChalkboardTeacher ,
          features: [
            "Promoting personal events, webinars, and courses.",
            "Managing virtual or in-person event marketing.",
            "Audience engagement and RSVP tracking."
          ]
    
        }
      ]
},
{
    tag:"school-college",
    services:[
        {
          id: "958237b3329e4fdbbdbc13cd",
          service: "Social Media Management",
          icon: FaUsers,
          price: "₹15,000 – ₹25,000",
          priceType:"month",
          features: [
            "Creating and managing social media pages (Facebook, Instagram, LinkedIn, YouTube, etc.)",
            "Engaging content creation (posts, reels, videos, carousels)",
            "Running interactive campaigns (quizzes, contests, testimonials)",
            "Community engagement and student interaction"
          ]
        },
        {
          id: "729f8efb04004cba8a5643fd",
          service: "Paid Advertising & Lead Generation",
          price: "₹10,000 + Ad Spend",
          priceType:"month",
          icon: FaBullhorn,
          features: [
            "Facebook & Instagram Ads for admissions and awareness",
            "Google Ads (Search, Display, and YouTube Ads)",
            "Retargeting and lookalike audience campaigns",
            "Landing page creation for lead capture"
          ]
        },
        {
          id: "381d8cf7ac4347e396f69bb0",
          service: "Website Development & Optimization",
          price: "₹25,000 – ₹50,000",
          priceType:"month",
          icon: FaGlobe,
          features: [
            "School/College website design & development",
            "SEO optimization for better search rankings",
            "Mobile-friendly & fast-loading websites",
            "Event pages & student portals integration"
          ]
        },
        {
          id: "1798c6fe582c42e19ce520bc",
          service: "Branding & Content Marketing",
          priceType:"month",
          price: "₹10,000 – ₹18,000",
          priceType:"month",
          icon: FaLightbulb,
          features: [
            "Brochures, flyers, and prospectus design",
            "Video marketing (campus tours, alumni testimonials, faculty interviews)",
            "Blog writing & student success stories",
            "Press releases & media coverage"
          ]
        },
        {
          id: "bf274205527d42b0b331b61f",
          service: "Online Reputation Management (ORM)",
          priceType: "Month",
          price: "₹8,000 – ₹15,000",
          icon: FaShieldAlt,
          features: [
            "Google reviews & ratings management",
            "Handling student/parent feedback professionally",
            "Crisis communication strategies"
          ]
        },
        {
          id: "2d363058fad74b20b2bc4ab2",
          service: "Event Promotions & Live Coverage",
          price: "₹10,000 – ₹20,000",
          priceType:" per event",
          
          icon: FaCalendarAlt,
          features: [
            "Digital promotion of school/college events (festivals, open days, webinars)",
            "Live streaming & event coverage on social media",
            "Designing posters, invitations, and digital banners"
          ]
        },
        {
          id: "333d5c6f091142f0a766c5d7",
          service: "Student Engagement & Community Building",
          price: "₹8,000 – ₹12,000",
          priceType: "Month",
          icon: FaComments,
          features: [
            "WhatsApp & Telegram groups for student communication",
            "Interactive Q&A sessions & webinars",
            "Alumni engagement campaigns"
          ]
        },
        {
          id: "cc7439bed44b4e5aa7009fa4",
          service: "Email & SMS Marketing",
          icon: FaEnvelopeOpenText,
          price: "₹5,000 + SMS/Email Cost",
          priceType: "Month",
          features: [
            "Admission campaigns via bulk email/SMS",
            "Important announcements & updates",
            "Personalized outreach for student inquiries"
          ]
        },
        {
          id: "0f59dbf248534958b90109df",
          service: "YouTube & Video Marketing",
          price: "₹12,000 – ₹20,000",
          priceType: "Month",
          icon: FaVideo,
          features: [
            "Promotional videos & student testimonials",
            "Campus life highlights",
            "Faculty introduction & online class recordings"
          ]
        },
        {
          id: "f892944640c640e882c1f8b6",
          service: "Parent & Student Outreach Campaigns",
          price: "₹8,000 – ₹15,000",
          priceType: "Month",
          icon: FaUsersCog,
          features: [
            "Parent-teacher engagement strategies",
            "Career counseling & student guidance programs",
            "Scholarship awareness campaigns"
          ]
        },
        {
          id: "f89294ef40c640e882c1f8b6",
          service: "360 Degree Campus Tour",
          price:  `₹30,000 – ₹60,000`,
          priceType: "One-time",
          icon: FaUsersCog,
          features: [
            "Professional 360-degree photography and videography of the campus",
            "Virtual tour creation, integrating different areas of the campus (classrooms, labs, library, sports facilities, etc.)",
            "Customizable hotspots for interactive elements such as information pop-ups, videos, and images",
            "Mobile-friendly and VR-compatible virtual tour",
            " Embedding options for the school/college website and social media platforms"
          ]
        },
      ]
}
]


export default servicesD;