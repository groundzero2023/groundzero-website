/* 
This file contains list of static texts that will be displayed in the web page.
In the future, please use this file as the only way to interact with editing texts.
*/

import {
  ajinkya_bhat,
  alvin_ng,
  andrew_soh,
  arin_alois_loy,
  arjun_arora,
  chandra_tjan,
  chet_yong,
  darrell_zhang,
  daryl_lim,
  dennis_poh,
  dhawal_shah,
  donna_daritan,
  don_tsai,
  douglas_peris,
  elena_chow,
  eric_lam,
  evan_chow,
  francis_lee,
  freddie_luchterhand_dare,
  james_conde,
  jeffrey_chua,
  jeremy_loh,
  jonas_chen,
  kenneth_lou,
  lucas_yeo,
  max_giammario,
  melvin_ho,
  mohan_belani,
  palash_jain,
  patrick_ng,
  phang_wei_jun,
  richard_ruddy,
  sam_ho, 
  steven_chua,
  suwira_teo,
  viveka_kalidasan,
  wei_liang_lim,
  wei_zhuang,
  ye_sheng_tan, 
  accelerating,
  airbnb,
  aws,
  binance,
  changeMakers,
  coinbase,
  eatLaunchpad,
  dropbox,
  facebook,
  groundzero,
  hsbc,
  ideate,
  instagram,
  linkedin,
  mapletree,
  mentorship,
  nes,
  network,
  nusEnterprise,
  nyc,
  pastEvent1,
  pastEvent2,
  pastEvent3,
  pastEvent4,
  sampleIcon,
  sginnovate,
  startupBuddy,
  twitter,
  healthcare,
  consumercentric,
  sustainability,
  industryfour,
  mapletree_new
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "problems",
    title: "Problems",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const timeline = [
  {
    id: "timeline-1",
    icon: groundzero,
    title: "Registration",
    content: "January - March 2023",
  },
  {
    id: "timeline-2",
    icon: groundzero,
    title: "Problem Statements Released",
    content: "March 2023",
  },
  {
    id: "timeline-3",
    icon: groundzero,
    title: "Pitch Day",
    content: "April 2023",
  },
];

export const reasons = [
  {
    id: 1,
    img: network,
    title: "Network",
    description: "At Ground Zero, you will be surrounded by students from different schools, courses, majors, and backgrounds – all in it with a common interest in Entrepreneurship. You will meet and interact with fellow students, who may become potential collaborators or co-founders for your budding ideas. You will also be able to network with key industry experts, start-up founders, and investors – all of whom will make you richer in contacts.",
  },
  {
    id: 2,
    img: mentorship,
    title: "Seek guidance through mentorship",
    description: "At Ground Zero, you can leverage the experience and network of industry experts, founders, and investors, who will provide invaluable mentoring. There will also be workshops where you will have the opportunity to learn from experts and hone your skills. A pool of experienced mentors will be waiting to share their knowledgeable experiences to spur you further in your entrepreneurship journey.",
  },
  {
    id: 3,
    img: ideate,
    title: "Ideate, Pitch, and Win",
    description: "You will ideate and pitch a start-up to solve a problem statement within a week and stand a chance to win attractive prizes.",
  }
]

export const problems = [
  {
    id: 1,
    title: "Industry 4.0",
    details1: "Perfect for those interested in everything tech! From Internet of Things, Cloud Computing, Machine Learning & AI, the opportunities are endless.",
    img: industryfour,
  },
  {
    id: 2,
    title: "Sustainability",
    details1: "In this day and age, ecological, social and economic issues are present everywhere, requiring tangible solutions to deal with them. More than just a buzzword, sustainability is for teams that want to make a real impact on communities!",
    img: sustainability,
  },
  {
    id: 3,
    title: "Healthcare",
    details1: "MedTech? Hospital information systems? This area of focus is for anyone interested in improving healthcare systems and processes, or even just the health and wellness of people.    ",
    img: healthcare,
  },
  {
    id: 4,
    title: "Consumer-centric",
    details1: "Here, the consumer is chief. Solutions can range between anything e-commerce to F&B - as long as it targets the consumer!",
    img: consumercentric,
  }
]

export const stats = [
  {
    id: "stats-1",
    title: "Participants",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Supported by Companies",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Prizes to be Won",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Contact Us",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/groundzero/",
      },
      {
        name: "Telegram",
        link: "https://www.telegram.com/groundzero/",
      },
      {
        name: "TikTok",
        link: "https://www.tiktok.com/groundzero/",
      },
      {
        name: "YouTube",
        link: "https://www.youtube.com/groundzero/",
      },
      {
        name: "Website",
        link: "https://www.groundzero.com/about/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.groundzero.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.groundzero.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.groundzero.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.groundzero.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.groundzero.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.groundzero.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.groundzero.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const contacts = [
  {
    id: "contacts-1",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "contacts-2",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "contacts-3",
    icon: groundzero,
    link: "Lorem ipsum dolor sit amet.",
  },
];

export const companies = [
  {
    id: "companies-1",
    logo: airbnb,
  },
  {
    id: "companies-2",
    logo: binance,
  },
  {
    id: "companies-3",
    logo: coinbase,
  },
  {
    id: "companies-4",
    logo: dropbox,
  },
];

export const questions = [
  {
    Question: "How much does it cost to join Ground Zero?",
    Answer:
      "Ground Zero is completely free for all participants! All you have to bring to the table is your innovative ideas.",
  },
  {
    Question: "How do I sign up for Ground Zero?",
    Answer:
    "You can signup for Ground Zero through the Register button above!"
  },
  {
    Question: "I have a startup idea that I want to pitch at Ground Zero, but not enough peers to do it with. How can I find other like-minded individuals to form a team?",
    Answer:
      "Fret not! You can sign up individually and we will try our best to assign you to a team.",
  },
  {
    Question: "Does my startup idea have to be in line with a certain theme, or can it be anything I want?",
    Answer: "All ideas presented must be related to one of the four industry focus areas listed in the above section.",
  },
  {
    Question: "How many winners will there be?",
    Answer: "There will be 12 teams that make it to the final pitching rounds, and 3 winning teams.\nFirst place: $5,000\nSecond place: $3,000\nThird place: $2,000.\nMystery prizes would also be awarded to teams with the most creative ideas, and other honourable mentions",
  },
  {
    Question: "Do I need to have experience in entrepreneurship or startups to join Ground Zero?",
    Answer: "No experience is needed! We encourage all aspiring entrepreneurs from all tertiary institutions and faculties to join us at this event.",
  },
  {
    Question: "Will Ground Zero happen in person or virtually?",
    Answer: "After a few long years, Ground Zero 2023 will be held as a physical event hosted at Mapletree Business City. Preliminary pitching submission will be uploaded online, while the final rounds will be conducted in person at Mapletree Business City. For the mentor-mentee sessions, it is up to the agreement between mentors and their mentees whether they want to meet online or in-person, and if the latter, the location is also to be agreed on between both parties.",
  },
  {
    Question: "Who can participate in Ground Zero?",
    Answer: "Any student currently enrolled at a tertiary institution, be it part-time or full-time. Tertiary institutions include, but are not limited to ITEs, Polytechnics, Universities (both undergraduate and postgraduate). We also allow recent alumni of 5 years or less, but please limit the number of alumni to two at maximum.",
  },
  {
    Question: "How many people can be on a team?",
    Answer: "Each team can have 3 to 5 members.",
  },
  {
    Question: "I am a student at an international tertiary institution, but currently residing in Singapore. Can I still join Ground Zero?",
    Answer: "Definitely! We are happy to accept students from any tertiary institute across the world.",
  },
  {
    Question: "What if I need to travel internationally to attend Ground Zero?",
    Answer: "As Ground Zero has shifted to being a hybrid event, most of the event can be attended online. For the final pitching rounds carried out in-person, we highly encourage all finalists to attend physically. However, if this is not possible, the event will also be streamed online.",
  },
];

export const organizer = [
  {
    id: "nes",
    icon: nes,
  },
];

export const platinumSponsor = [
  {
    id: "platinumSponsor-1",
    icon: aws,
  },
  {
    id: "platinumSponsor-2",
    icon: eatLaunchpad,
  },
];

export const thePatron = [
  {
    id: "thePatron-1",
    icon: mapletree_new,
  },
];

export const diamondSponsor = [
  {
    id: "diamondSponsor-1",
    icon: hsbc,
  },
];

export const goldSponsor = [
  {
    id: "goldSponsor-1",
    icon: sginnovate,
  },
];

export const ecosystemPartner = [
  {
    id: "ecosystemPartner-1",
    icon: nusEnterprise,
  },
  {
    id: "ecosystemPartner-2",
    icon: nyc,
  },
  {
    id: "ecosystemPartner-3",
    icon: changeMakers,
  },
];

export const deepTechPartner = [
  {
    id: "deepTechPartner-1",
    icon: sginnovate,
  },
];

export const workshopPartner = [
  {
    id: "workshopPartner-1",
    icon: accelerating,
  },
  {
    id: "workshopPartner-2",
    icon: startupBuddy,
  },
];

export const partners = [
  {
    id: "organizers",
    title: "Organized By",
    content: organizer,
  },
  {
    id: "thePatron",
    title: "Patron Sponsor",
    content: thePatron,
  },
  {
    id: "diamondSponsor",
    title: "Diamond Sponsor",
    content: diamondSponsor,
  },
  {
    id: "goldSponsor",
    title: "Gold Sponsor",
    content: goldSponsor,
  },
];

export const pastEvents = [
  {
    id: "pastEvent1",
    title: "Ground Zero 2021",
    content: pastEvent1,
  },
  {
    id: "pastEvent2",
    title: "Ground Zero 2020",
    content: pastEvent2,
  },
  {
    id: "pastEvent3",
    title: "Ground Zero 2022",
    content: pastEvent3,
  },
  {
    id: "pastEvent4",
    title: "Ground Zero 2019",
    content: pastEvent4,
  },
];

export const workshops = [
  {
    name: "Workshop 1",
    by: "XXX",
    company: "Company 1",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 2",
    by: "XXX",
    company: "Company 1",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 3",
    by: "XXX",
    company: "Company 2",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Workshop 4",
    by: "XXX",
    company: "Company 2",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "What it means to incubate a Startup with AI technology",
    by: "XXX",
    company: "Company 3",
    date: "2023-01-01T12:00:00",
    link: "",
  },
  {
    name: "Digital Marketing for Tech Startups",
    by: "XXX",
    company: "Company 4",
    date: "2023-01-01T12:00:00",
    link: "",
  },
];

export const mentors = [
  {
    title:"Sam Ho",
    subtitle:["Founder"],
    info: ["We CARE"],
    personalLink:"https://www.linkedin.com/in/ssam-ho/",
    imgsrc: sam_ho,
    description: [
        "-",
    ]
  },
  {
    title:"Steven Chua",
    subtitle:["Co-Founder"],
    info: ["Inner Circle Network"],
    personalLink:"https://www.linkedin.com/in/stevenchuajc/",
    imgsrc: steven_chua,
    description: [
        "-"
    ]
  },
  {
    title:"Andrew Soh",
    subtitle:["Founder & CEO"],
    info: ["Fundigo"],
    personalLink:"https://www.linkedin.com/in/andrew-soh-b81a2b206/",
    imgsrc: andrew_soh,
    description: [
        "-",
    ]
  },
  {
    title:"Richard Ruddy",
    subtitle:["President & Co-Founder"],
    info: ["Nuguru"],
    personalLink:"https://www.linkedin.com/in/richard-ruddy-b79a5122/",
    imgsrc: richard_ruddy,
    description: [
        "-"
    ]
  },
  {
    title:"Ye Sheng Tan",
    subtitle:["Startup Mentor"],
    info: ["500 Global"],
    personalLink:"https://www.linkedin.com/in/tanyesheng/",
    imgsrc: ye_sheng_tan,
    description: [
        "-",
    ]
  },
  {
    title:"Chet Yong",
    subtitle:["Expert Mentor"],
    info: ["Innovators Commersialisation Program"],
    personalLink:"https://www.linkedin.com/in/chetyong/",
    imgsrc: chet_yong,
    description: [
        "-"
    ]
  },
  {
    title:"Mohan Belani",
    subtitle:["Co-Founder & CEO"],
    info: ["e27"],
    personalLink:"https://www.linkedin.com/in/mohanbelani",
    imgsrc: mohan_belani,
    description: [
        "-",
    ]
  },
  {
    title:"Douglas Peris",
    subtitle:["Program Coach & Mentor"],
    info: ["Hyper Accelerator"],
    personalLink:"https://www.linkedin.com/in/douglasperis",
    imgsrc: douglas_peris,
    description: [
        "-"
    ]
  },
  {
    title:"Evan Chow",
    subtitle:["Co-Founder & CEO"],
    info: ["Quest"],
    personalLink:"https://www.linkedin.com/in/evan-chow/",
    imgsrc: evan_chow,
    description: [
        "-",
    ]
  },
  {
    title:"Chandra Tjan",
    subtitle:["Co-Founder & General Partner"],
    info: ["Alpha JWC Ventures"],
    personalLink:"https://linkedin.com/in/chandratjan",
    imgsrc: chandra_tjan,
    description: [
        "-"
    ]
  },
  {
    title:"Donna Daritan",
    subtitle:["Startup Mentor"],
    info: ["Asia Insitute of Mentoring & Startupbootcamp FinTech"],
    personalLink:"https://linkedin.com/in/donnadaritan",
    imgsrc: donna_daritan,
    description: [
        "-",
    ]
  },
  {
    title:"Dennis Poh",
    subtitle:["Founder & CEO"],
    info: ["Legatcy"],
    personalLink:"https://www.linkedin.com/in/dennis-poh-csa-cert-9693652a/",
    imgsrc: dennis_poh,
    description: [
        "-"
    ]
  },
  {
    title:"Patrick Ng",
    subtitle:["Founder"],
    info: ["Spark Launchpad"],
    personalLink:"https://www.linkedin.com/in/peisin/?originalSubdomain=sg",
    imgsrc: patrick_ng,
    description: [
        "-",
    ]
  },
  {
    title:"Arin Alois Loy",
    subtitle:["Startup and Industry Mentor"],
    info: ["NTU"],
    personalLink:"https://www.linkedin.com/in/arinalois/",
    imgsrc: arin_alois_loy,
    description: [
        "-"
    ]
  },
  {
    title:"Melvin Ho",
    subtitle:["CEO"],
    info: ["Bizsquare Group"],
    personalLink:"https://www.linkedin.com/in/melvin-ho-45055554/?originalSubdomain=sg",
    imgsrc: melvin_ho,
    description: [
        "-",
    ]
  },
  {
    title:"Viveka Kalidasan",
    subtitle:["Co-Founder/CEO/Director"],
    info: ["Edify"],
    personalLink:"https://www.linkedin.com/in/vivekakalidasan/",
    imgsrc: viveka_kalidasan,
    description: [
        "-"
    ]
  },
  {
    title:"Kenneth Lou",
    subtitle:["Co-Founder"],
    info: ["Seedly"],
    personalLink:"https://www.linkedin.com/in/kenneth-lou/",
    imgsrc: kenneth_lou,
    description: [
        "-",
    ]
  },
  {
    title:"Jeremy Loh",
    subtitle:["Co-Founder & Partner"],
    info: ["Genesis Alternative Ventures"],
    personalLink:"https://www.linkedin.com/in/drmmhloh",
    imgsrc: jeremy_loh,
    description: [
        "-"
    ]
  },
  {
    title:"Max Giammario",
    subtitle:["CEO"],
    info: ["MetaPals"],
    personalLink:"https://www.linkedin.com/in/maxgiammario/",
    imgsrc: max_giammario,
    description: [
        "-",
    ]
  },
  {
    title:"Francis Lee",
    subtitle:["Co-Founder"],
    info: ["Lalia"],
    personalLink:"https://www.linkedin.com/in/fustilio/",
    imgsrc: francis_lee,
    description: [
        "-"
    ]
  },
  {
    title:"Ajinkya Bhat",
    subtitle:["Co-Founder & CEO"],
    info: ["Seamless XR"],
    personalLink:"https://www.linkedin.com/in/ajinkya-bhat23/",
    imgsrc: ajinkya_bhat,
    description: [
        "-",
    ]
  },
  {
    title:"Suwira Teo",
    subtitle:["Co-Founder"],
    info: ["Aleph Technologies"],
    personalLink:"https://www.linkedin.com/in/suwirateo/",
    imgsrc: suwira_teo,
    description: [
        "-"
    ]
  },
  {
    title:"Lucas Yeo",
    subtitle:["Co-Founder & CEO"],
    info: ["Docuf.AI"],
    personalLink:"https://www.linkedin.com/in/lucasyeo/",
    imgsrc: lucas_yeo,
    description: [
        "-",
    ]
  },
  {
    title:"Daryl Lim",
    subtitle:["Business Operations"],
    info: ["Paladium"],
    personalLink:"https://www.linkedin.com/in/daryllim95/",
    imgsrc: daryl_lim,
    description: [
        "-"
    ]
  },
  {
    title:"Wei Zhuang (Lenard)",
    subtitle:["Founder & CEO"],
    info: ["Ailytics"],
    personalLink:"https://www.linkedin.com/in/wei-zhuang-tan/",
    imgsrc: wei_zhuang,
    description: [
        "-",
    ]
  },
  {
    title:"Phang Wei Jun",
    subtitle:["Co-Founder"],
    info: ["Lalia"],
    personalLink:"https://www.linkedin.com/in/phang-wei-jun/",
    imgsrc: phang_wei_jun,
    description: [
        "-"
    ]
  },
  {
    title:"Elena Chow",
    subtitle:["Founder"],
    info: ["ConnectOne"],
    personalLink:"http://linkedin.com/in/elenachow",
    imgsrc: elena_chow,
    description: [
        "-",
    ]
  },
  {
    title:"Wei Liang Lim",
    subtitle:["Deputy CEO"],
    info: ["Social Impact Catalyst"],
    personalLink:"https://www.linkedin.com/in/weilianglim/",
    imgsrc: wei_liang_lim,
    description: [
        "-"
    ]
  },
  {
    title:"Palash Jain",
    subtitle:["Founder & CEO"],
    info: ["Think Design Make"],
    personalLink:"https://www.linkedin.com/in/palashjain96/?originalSubdomain=sg",
    imgsrc: palash_jain,
    description: [
        "-",
    ]
  },
  {
    title:"Dhawal Shah",
    subtitle:["Limited Partner & Mentor"],
    info: ["Accelerating Asia"],
    personalLink:"https://www.linkedin.com/in/dhawaljshah",
    imgsrc: dhawal_shah,
    description: [
        "-"
    ]
  },
  {
    title:"Arjun Arora",
    subtitle:["Co-Founder & CEO"],
    info: ["Betafi"],
    personalLink:"https://www.linkedin.com/in/arjunarora108/",
    imgsrc: arjun_arora,
    description: [
        "-",
    ]
  },
  {
    title:"Jeffrey Chua",
    subtitle:["Co-Founder & Ex-CEO"],
    info: ["Millennium Enterprise"],
    personalLink:"https://www.linkedin.com/in/jeffreychuapl/",
    imgsrc: jeffrey_chua,
    description: [
        "-"
    ]
  },
  {
    title:"Darrell Zhang",
    subtitle:["Co-Founder"],
    info: ["NextBlock"],
    personalLink:"https://www.linkedin.com/in/darrellzhang",
    imgsrc: darrell_zhang,
    description: [
        "-",
    ]
  },
  {
    title:"Don Tsai",
    subtitle:["Chairman/Founder"],
    info: ["First Wave"],
    personalLink:"https://www.linkedin.com/in/dontsai",
    imgsrc: don_tsai,
    description: [
        "-"
    ]
  },
  {
    title:"Freddie Luchterhand-Dare",
    subtitle:["Vice President"],
    info: ["Openspace Ventures"],
    personalLink:"https://www.linkedin.com/in/frederickluchterhand/",
    imgsrc: freddie_luchterhand_dare,
    description: [
        "-",
    ]
  },
  {
    title:"Eric Lam",
    subtitle:["Venture Principal"],
    info: ["Recast Ventures"],
    personalLink:"https://www.linkedin.com/in/lam-eric/",
    imgsrc: eric_lam,
    description: [
        "-"
    ]
  },
  {
    title:"Jonas Chen",
    subtitle:["Co-Founder"],
    info: ["Metacamp"],
    personalLink:"https://www.linkedin.com/in/jonas-chen/",
    imgsrc: jonas_chen,
    description: [
        "-",
    ]
  },
  {
    title:"Alvin Ng",
    subtitle:["Venture Creation, Investment, and Acceleration"],
    info: ["Farquhar Capital"],
    personalLink:"https://www.linkedin.com/in/alvinjmng/",
    imgsrc: alvin_ng,
    description: [
        "-"
    ]
  },
  {
    title:"James Conde",
    subtitle:["Senior Associate, Investor Relations and Portfolio"],
    info: ["Plug and Play Tech Center"],
    personalLink:"https://www.linkedin.com/in/james-conde/",
    imgsrc: james_conde,
    description: [
        "-"
    ]
  },
];

// Date for Releasing Problem Statements. Edit here to change
export const statementReleaseDate = "May 8, 2023 00:09:00 GMT+0800"

// Edit this to change the content of paras in About Page
export const aboutUs = [
  {
    id: "para1",
    content: "Ground Zero is the largest student-led startathon in Singapore which invites aspiring entrepreneurs from all tertiary institutions and faculties to ideate and develop a startup from ground up. Within a week, participants will be challenged to select an area of focus, and come up with a startup idea from the ground up and pitch it. The winners of Ground Zero will go home with a cash prize from our $10,000 prize pool to kick start their start up ideas.",
  },
  {
    id: "para2",
    content: "This year, participants will be supported by a network of over 50 mentors, speakers, and judges - all experts in their respective fields to provide the best guidance possible. We are also excited to announce that we will be inviting angel investors and incubators to come down to our event to scout for talent amongst our highly valued participants.",
  },
  {
    id: "para3",
    content: "So what are you waiting for? Reach the top, start from Ground Zero.",
  },
];

export const timelineSchedule = [
  {
    title: ["Registration opens"],
    date: "2023-03-31T12:00:00",
  },
  {
    title: ["Registration closes"],
    date: "2023-05-01T12:00:00",
  },
  {
    title: ["Opening Ceremony", "Patron Sponsor Talk", "Mentor Introduction", "Panel Discussion", "Workshops"],
    date: "2023-05-08T12:00:00",
  },
  {
    title: ["Mentorship Sessions", "Pitch Idea Validation"],
    date: "2023-05-09T12:00:00",
  },
  {
    title: ["Pitch Preparation"],
    date: "2023-05-10T12:00:00",
  },
  {
    title: ["Video Pitch Submission"],
    date: "2023-05-11T12:00:00",
  },
  {
    title: ["Announcement of Top 12 Finalists"],
    date: "2023-05-12T12:00:00",
  },
  {
    title: ["Finals Judging", "Award Ceremony", "Closing Address", "Networking Dinner"],
    date: "2023-05-13T12:00:00",
  },
];

export const pastEventDescription = [
  {
    id: "para1",
    content: "Ground Zero has been one of the largest student led Startathons in Singapore.",
  },
  {
    id: "para2",
    content: "Despite the covid situation, we still managed to accumulate over 200 participants for GZ 2021. Subsequently, over 381 participants registered for the following year for GZ 2022.",
  },
  {
    id: "para3",
    content: "Ground Zero is filled with students from all faculties equipped with different skillsets sharing a common entrepreneurial spirit looking to make a difference. For GZ 2022, there were 31.2% from Computing, 24.1% from Business, 21.5% from Engineering and 7% from the Science faculty. Ground Zero has also been one of the NES events that has been able to have the most mentors for participants with over 50 speakers, mentors, and judges to guide our participants in various expertise areas.",
  },
];