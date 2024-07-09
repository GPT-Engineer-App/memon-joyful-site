import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to MEMON - The Meme Token on TON Blockchain</h1>
            <p className="text-xl mb-8">Join the revolution of meme tokens with MEMON.</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About MEMON</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <p className="text-lg mb-4">
                MEMON is not just another meme token. It's a community-driven project that aims to bring fun and value to the world of cryptocurrency. Built on the TON Blockchain, MEMON combines the best of both worlds - the excitement of meme culture and the robustness of blockchain technology.
              </p>
              <p className="text-lg">
                Our mission is to create a vibrant ecosystem where creativity meets utility, and where every holder becomes part of a larger, exciting journey in the crypto space.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img src="/placeholder.svg" alt="MEMON Illustration" className="mx-auto object-cover w-full h-[400px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Token Distribution</h3>
                  <ul className="list-disc pl-5">
                    <li>Community Rewards: 40%</li>
                    <li>Liquidity Pool: 30%</li>
                    <li>Development: 20%</li>
                    <li>Team: 10%</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Token Details</h3>
                  <ul className="list-disc pl-5">
                    <li>Total Supply: 1,000,000,000 MEMON</li>
                    <li>Network: TON Blockchain</li>
                    <li>Token Type: Fungible</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>
          <div className="max-w-3xl mx-auto">
            {roadmapItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                  Q{index + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-purple-400">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400">About</a></li>
                <li><a href="#tokenomics" className="hover:text-purple-400">Tokenomics</a></li>
                <li><a href="#roadmap" className="hover:text-purple-400">Roadmap</a></li>
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-telegram"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-discord"></i></a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© 2023 MEMON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const roadmapItems = [
  {
    title: "Project Launch",
    description: "Initial token distribution and listing on decentralized exchanges.",
  },
  {
    title: "Community Growth",
    description: "Expanding our community and implementing governance mechanisms.",
  },
  {
    title: "Partnerships",
    description: "Collaborating with other projects in the TON ecosystem.",
  },
  {
    title: "Advanced Features",
    description: "Introducing new utilities and use cases for MEMON tokens.",
  },
];

export default Index;