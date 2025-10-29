"use client";

import { Code2, Sparkles, Globe, Lock, ArrowLeftRight, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  client: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "SpeedWallet - Web3 Wallet & Exchange",
    client: "SpeedWallet",
    description:
      "Developed a comprehensive web3 wallet and exchange platform with integrated fiat on/off-ramp functionality via virtual cards. Built a seamless bridge between traditional finance and decentralized finance, enabling users to easily convert between crypto and fiat currencies.",
    category: "Web3 Wallet & Exchange",
    icon: <CreditCard className="h-8 w-8 text-primary-600" />,
    highlights: [
      "Multi-chain wallet integration",
      "Fiat on/off-ramp with virtual cards",
      "Secure exchange functionality",
      "Real-time balance tracking",
      "Card issuance and management system",
      "Payment gateway integrations",
    ],
  },
  {
    title: "Dextools Supplementary Tools",
    client: "Dextools",
    description:
      "Developed supplementary tools enabling users to easily update their project's social media links and information for listing on DEX platforms. Streamlined the onboarding process for new token projects.",
    category: "Web3 Platform Tools",
    icon: <Code2 className="h-8 w-8 text-primary-600" />,
    highlights: [
      "Social media management integration",
      "Real-time data synchronization",
      "User-friendly dashboard interface",
      "API integration with DEX platforms",
    ],
  },
  {
    title: "P2P Trading Platform",
    client: "Cryptocurrency Exchange",
    description:
      "Built a comprehensive peer-to-peer trading platform with secure escrow services, real-time order matching, and multi-currency support. Implemented robust trading infrastructure with advanced API integrations and SDK implementations.",
    category: "Trading Platform",
    icon: <ArrowLeftRight className="h-8 w-8 text-primary-600" />,
    highlights: [
      "Secure escrow system and payment processing",
      "Real-time order matching engine",
      "Multi-currency and multi-payment method support",
      "Advanced API/SDK integrations for exchanges",
      "User rating and reputation system",
      "Chat and dispute resolution features",
    ],
  },
  {
    title: "Marketing Platform Development",
    client: "Boost Labs",
    description:
      "Built comprehensive web3/web2 marketing solutions for Boost Labs, a leading marketing agency. Created tools and platforms that bridge traditional and blockchain marketing strategies.",
    category: "Web3/Web2 Marketing",
    icon: <Sparkles className="h-8 w-8 text-primary-600" />,
    highlights: [
      "Cross-platform marketing tools",
      "Analytics and reporting dashboards",
      "Campaign management systems",
      "Integration with major platforms",
    ],
  },
  {
    title: "Onchain Web Applications",
    client: "Various Web3 Projects",
    description:
      "Developed multiple onchain web applications and tools for leading web3 projects. Built decentralized applications with seamless user experiences and robust blockchain integration.",
    category: "Web3 Applications",
    icon: <Globe className="h-8 w-8 text-primary-600" />,
    highlights: [
      "Smart contract integration",
      "Wallet connectivity",
      "DeFi protocol integration",
      "Gas optimization strategies",
    ],
  },
  {
    title: "Private Client Solutions",
    client: "Private Clients",
    description:
      "Created custom websites and web applications for private clients across various industries. Delivered tailored solutions that meet specific business requirements and objectives.",
    category: "Custom Web Development",
    icon: <Lock className="h-8 w-8 text-primary-600" />,
    highlights: [
      "Custom website development",
      "Web application solutions",
      "E-commerce platforms",
      "Private enterprise tools",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative technology solutions across blockchain, trading platforms, web3, mobile apps, and custom software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 card-hover border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-semibold">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>

              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
                {project.category}
              </span>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

