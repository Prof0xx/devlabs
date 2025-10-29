"use client";

import { Webhook, Zap, Code, Smartphone, Database, Plug, ArrowLeftRight, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web3 Development",
    description:
      "Building decentralized applications, smart contract integration, and blockchain solutions for the next generation of the web.",
    icon: <Webhook className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "Web Application Development",
    description:
      "Custom web applications built with modern technologies, ensuring scalability, performance, and exceptional user experiences.",
    icon: <Code className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "API Integration & Development",
    description:
      "Seamless integration with third-party APIs and custom API development. Extensive experience with REST APIs, GraphQL, WebSockets, and SDKs including blockchain, payment processors, and trading platform integrations.",
    icon: <Zap className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "SDK Implementation & Custom APIs",
    description:
      "Expert-level implementation of SDKs and custom API development. We've integrated with major platforms including cryptocurrency exchanges, payment processors, blockchain networks, and trading platforms with robust error handling and rate limiting.",
    icon: <Plug className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "Trading Platform Development",
    description:
      "Building sophisticated trading platforms with order matching engines, market data feeds, account management, and risk management systems. Experience with P2P trading, exchanges, and DeFi protocols.",
    icon: <ArrowLeftRight className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "Blockchain & Smart Contract Integration",
    description:
      "Smart contract development, multi-chain support, wallet integration, token standards (ERC-20, ERC-721), DeFi protocol integration, and transaction signing & verification.",
    icon: <Layers className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "Custom Website Development",
    description:
      "Professional, responsive websites tailored to your brand and business needs, optimized for performance and SEO.",
    icon: <Smartphone className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We build high-performance mobile apps with modern frameworks including React Native, Flutter, and native Swift/Kotlin development.",
    icon: <Smartphone className="h-10 w-10 text-primary-600" />,
  },
  {
    title: "Platform Tools & Dashboards",
    description:
      "Custom tools and administrative dashboards to streamline operations, manage data, and enhance productivity. Backend services including microservices architecture, database optimization, and API rate limiting.",
    icon: <Database className="h-10 w-10 text-primary-600" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions across development, integration, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 card-hover shadow-lg border border-gray-100"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

