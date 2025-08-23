import { 
    FaUsers, FaSearch, FaBullhorn, FaGlobe, FaFileAlt, 
    FaPalette, FaChartLine, FaShoppingCart, FaVideo, FaShieldAlt, 
    FaAd, FaEnvelope, FaChartPie, FaVoteYea, FaLightbulb, 
    FaCalendarAlt, FaComments, FaEnvelopeOpenText, FaUsersCog 
  } from "react-icons/fa";
const servicesD = [
    {
     title:"business",
     business:{
        tag:"business",
        business:[
            {
              id: 1,
              service: "Social Media Marketing (SMM)",
              icon: FaUsers, 
              plans: [
                { planType: "Basic", price: "₹10,000", priceType: "month", additional: "2 posts/week" },
                { planType: "Advanced", price: "₹18,000", priceType: "month", additional: "4 posts/week" },
                { planType: "Premium", price: "₹30,000", priceType: "month", additional: "daily posts + engagement" }
              ]
              ,
              paragraph: [
                "Social media account setup & management (Facebook, Instagram, LinkedIn, Twitter, etc.)",
                "Social media content creation (posts, stories, reels)",
                "Social media ad campaigns (Meta Ads, LinkedIn Ads, Twitter Ads)",
                "Influencer marketing collaboration"
              ]
            },
            {
              id: 2,
              service: "Search Engine Optimization (SEO)",
              plans: [
                { planType: "Basic", price: "₹12,000", priceType: "month", additional: "Basic SEO" },
                { planType: "Advanced", price: "₹20,000", priceType: "month", additional: "Full on-page & off-page SEO" },
                { planType: "Premium", price: "₹35,000", priceType: "month", additional: "SEO + Content Strategy" }
              ],
              icon: FaSearch, 
              paragraph: [
                "Website SEO audit & optimization",
                "Keyword research & strategy",
                "On-page & off-page SEO",
                "Local SEO (Google My Business optimization)",
                "Technical SEO (site speed, mobile optimization)"
              ]
            },
          ]
    }
},
{
    tag:"Political",
    political:[
      {
        id: 1,
        service: "Digital Strategy & Consulting",
        icon: FaChartLine,
        paragraph: [
          "Campaign planning & strategy development",
          "Competitor analysis & voter behavior insights",
          "Data-driven decision-making"
        ]
      },
      {
        id: 2,
        service: "Social Media Management",
        icon: FaUsers,
        paragraph: [
          "Profile creation & optimization (Facebook, Instagram, Twitter, LinkedIn, YouTube)",
          "Content planning & scheduling",
          "Engagement & reputation management",
          "Community building & voter interaction"
        ]
      },
    ]
},
{
    tag:"Personal",
    personal: [
       
        {
          id: 9,
          service: "Email Marketing & Newsletters",
          price: "₹10,000",
          priceType: "Month",
          icon:FaMailBulk   ,
          paragraph: [
            "Personalized email campaigns for audience engagement.",
            "Newsletter creation for thought leadership.",
            "Automated email sequences for personal branding."
          ]
        },
        {
          id: 10,
          service: "Event & Webinar Promotion",
          price: "₹12,000",
          priceType: "Month",
          icon:FaChalkboardTeacher ,
          paragraph: [
            "Promoting personal events, webinars, and courses.",
            "Managing virtual or in-person event marketing.",
            "Audience engagement and RSVP tracking."
          ]
    
        }
      ]
},
{
    tag:"School collage",
    schoolCollage:[
        {
          id: 9,
          service: "YouTube & Video Marketing",
          price: "₹12,000 – ₹20,000",
          priceType: "Month",
          icon: FaVideo,
          paragraph: [
            "Promotional videos & student testimonials",
            "Campus life highlights",
            "Faculty introduction & online class recordings"
          ]
        },
        {
          id: 10,
          service: "Parent & Student Outreach Campaigns",
          price: "₹8,000 – ₹15,000",
          priceType: "Month",
          icon: FaUsersCog,
          paragraph: [
            "Parent-teacher engagement strategies",
            "Career counseling & student guidance programs",
            "Scholarship awareness campaigns"
          ]
        }
      ]
}
]

export default servicesD;