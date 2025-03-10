import { IoShieldCheckmarkSharp } from "react-icons/io5";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";
import { FaStar } from "react-icons/fa";
import { BsFillSendCheckFill } from "react-icons/bs";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: FaStar,
    title: "Fast & Easy Transactions",
    content:
      "Seamlessly buy, sell, and trade crypto with zero delays and transparent fees.",
  },
  {
    id: "feature-2",
    icon: IoShieldCheckmarkSharp,
    title: "Partnered with Trusted Merchants",
    content:
      "Our platform only list trusted Merchants to ensure that your funds are safe",
  },
  {
    id: "feature-3",
    icon: BsFillSendCheckFill,
    title: "User Empowerment & Control",
    content:
      "Trade directly with peers without middlemen or banks. Set your own prices, terms, and payment methods.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "5000+",
  },
  {
    id: "stats-2",
    title: "Trusted Merchants",
    value: "50+",
  },
  // {
  //   id: "stats-3",
  //   title: "Transaction",
  //   value: "100+",
  // },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const availableBank = [
  {
    label: "BDO",
    icon: "/android-chrome-512x512.png",
  },
  {
    label: "Security Bank",
    icon: "/android-chrome-512x512.png",
  },
  {
    label: "BPI",
    icon: "/android-chrome-512x512.png",
  },
];
