"use client";

import { 
  Code, 
  Database, 
  Zap, 
  Shield, 
  Globe, 
  Lock,
  Webhook,
  Plug,
  Cloud,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";

interface Expertise {
  title: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
}

const expertise: Expertise[] = [
  {
    title: "API Integration",
    items: [
      "RESTful APIs",
      "GraphQL",
      "WebSocket real-time connections",
      "Third-party service integrations",
      "Payment gateway APIs",
      "Blockchain node APIs",
    ],
    icon: <Code className="h-8 w-8" />,
    color: "text-blue-600",
  },
  {
    title: "SDK Implementation",
    items: [
      "Exchange trading SDKs",
      "Blockchain SDKs (Web3.js, Ethers.js)",
      "Payment processor SDKs",
      "Cloud service SDKs",
      "Custom SDK development",
      "Multi-platform SDK support",
    ],
    icon: <Plug className="h-8 w-8" />,
    color: "text-purple-600",
  },
  {
    title: "Trading Platform APIs",
    items: [
      "Order matching engines",
      "Market data feeds",
      "Trade execution APIs",
      "Account management APIs",
      "Risk management systems",
      "Price aggregation APIs",
    ],
    icon: <Zap className="h-8 w-8" />,
    color: "text-cyan-600",
  },
  {
    title: "Blockchain Integration",
    items: [
      "Smart contract interaction",
      "Multi-chain support",
      "Wallet integration",
      "Token standards (ERC-20, ERC-721)",
      "DeFi protocol integration",
      "Transaction signing & verification",
    ],
    icon: <Webhook className="h-8 w-8" />,
    color: "text-green-600",
  },
  {
    title: "Backend Services",
    items: [
      "Microservices architecture",
      "Database optimization",
      "API rate limiting",
      "Authentication & authorization",
      "Data caching strategies",
      "Error handling & logging",
    ],
    icon: <Database className="h-8 w-8" />,
    color: "text-orange-600",
  },
  {
    title: "Security & Compliance",
    items: [
      "API security best practices",
      "Encryption & hashing",
      "Rate limiting & throttling",
      "API key management",
      "OAuth 2.0 implementation",
      "Compliance standards",
    ],
    icon: <Shield className="h-8 w-8" />,
    color: "text-red-600",
  },
];

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Extensive experience working with APIs, SDKs, and building robust
            integrations across multiple platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 card-hover shadow-lg border border-gray-100"
            >
              <div className={`${item.color} mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.items.map((skill, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <span className={`${item.color} mr-2 mt-1`}>•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Ready to Integrate Your Platform?
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            We have extensive experience integrating with major platforms,
            exchanges, and services. Let us help you build robust API
            integrations and implement SDKs for your project.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Discuss Your Integration Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
}

