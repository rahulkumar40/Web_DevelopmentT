import clientMukesh from './mukeshJ.png'

import { FaLightbulb, FaChartLine, FaCogs, FaBullseye ,FaBusinessTime,FaUsers,FaSearch,FaBullhorn,FaGlobe,FaPaintBrush, FaMale ,FaFemale } from "react-icons/fa";
const landingPageContent = {
    // About Section
    aboutSection: {
      title: "Who We Are",
      description:
        `"Era Post is a full-service digital marketing agency helping brands establish a powerful online presence. With a data-driven approach and innovative strategies, we create impactful digital experiences."`,
        subHeading:`At Era Post, we don’t just provide services; we build lasting partnerships to ensure our clients achieve long-term success. `,
      features: [
        "Customized solutions for education, politics, businesses & personal branding.",
        "100+ successful campaigns with increased visibility & conversions.",
        "End-to-end digital services: SEO, social media, paid ads, and web development.",
        "Results-driven strategies focusing on growth, engagement, and brand awareness.",
      ],
      image:"about",
    },
  
    // Why Choose Us Section
    whyChooseUs: {
      title: "Why Choose Era Post?",
      points: [
        { icon: FaLightbulb, text: "Industry Expertise in various domains." },
        { icon: FaChartLine, text: "Proven Success with 100+ successful campaigns." },
        { icon: FaCogs, text: "Full Digital Solutions under one roof." },
        { icon: FaBullseye, text: "Results-Driven Approach focused on ROI." },
      ],
    },
  
    //  Services Section
    servicesSection: [
      {
        id: 1,
        service: "Digital Strategy & Consulting",
        icon: FaBusinessTime,
        description:
          "Campaign planning, competitor analysis, and data-driven insights to build an effective digital strategy.",
      },
      {
        id: 2,
        service: "Social Media Management",
        icon: FaUsers,
        description:
          "Content planning, profile optimization, engagement strategies, and community building across major platforms.",
      },
      {
        id: 3,
        service: "SEO & Content Marketing",
        icon: FaSearch,
        description:
          "On-page & off-page SEO, content creation, and keyword optimization to improve search rankings.",
      },
      {
        id: 4,
        service: "Paid Advertising",
        icon: FaBullhorn,
        description:
          "Google Ads, Facebook & Instagram Ads, and strategic ad placements to maximize ROI.",
      },
      {
        id: 5,
        service: "Website Development",
        icon: FaGlobe,
        description:
          "Custom website design, landing pages, and SEO-friendly websites for better brand visibility.",
      },
      {
        id: 6,
        service: "Branding & Graphic Design",
        icon: FaPaintBrush,
        description:
          "Creative branding, logo design, and eye-catching visuals to enhance your brand identity.",
      },
    ],

    // client details
  
    testimonials: {
      title: "What Our Clients Say",
      reviews: [
        {
          name: "Mukesh Singh",
          position: "Political Candidate - Lok Sabha 2024 Candidate (Arariya, Bihar)",
          feedback: `Era Post helped me connect with voters through targeted social media campaigns. The results were outstanding! 
      Their expertise in political digital marketing ensured that my campaign reached the right audience, 
      significantly increasing engagement and awareness. The team provided detailed analytics, allowing us to 
      adjust strategies in real-time for maximum impact. Their creative approach, combined with data-driven insights, 
      played a crucial role in strengthening my voter base. I highly appreciate their professionalism, commitment, and 
      ability to deliver measurable results. Highly recommended for political branding and outreach!`,
          icon: FaMale
        },
        {
          name: "Neha Verma",
          position: "Business Owner",
          feedback: `Their SEO and branding strategies took my business to new heights. Highly recommended! 
      With Era Post's expert keyword research and content optimization, my website's traffic increased 
      by over 150% within just a few months. Their branding strategies helped position my business as a trusted 
      name in the industry, improving customer engagement and retention. They continuously monitored performance 
      metrics and refined our strategy to ensure long-term success. Their ability to transform a brand's online 
      presence with creative, high-impact marketing is truly remarkable. Working with Era Post has been an absolute 
      game-changer for my business!`,
          icon: FaFemale,
        },
        {
          name: "Harkesh Sharma",
          position: "Startup Founder",
          feedback: `I loved the professionalism and results-driven approach of Era Post. Truly amazing experience! 
      Their strategic guidance helped my startup establish a strong digital presence in a highly competitive market. 
      They created a compelling brand identity, optimized our online content, and executed targeted advertising 
      campaigns that brought in high-quality leads. The team was incredibly responsive and adaptable, ensuring that 
      our marketing strategies evolved with market trends. Their attention to detail, from content creation to 
      performance analysis, has significantly boosted our brand credibility. The measurable growth in our customer 
      base and engagement is proof of their expertise. I highly recommend Era Post to any startup looking to scale 
      effectively and efficiently!`,
          icon: FaMale,
        },
      ],
    },
  };
  
  export default landingPageContent;
  