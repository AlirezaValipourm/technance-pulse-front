import { cn } from "@/lib/utils";
import { CheckCircle2, HelpCircle, MoveRight, Radar, Settings } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import step1 from "@/assets/images/step1.png";
import step2 from "@/assets/images/step2.png";
import step3 from "@/assets/images/step3.png";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="min-h-screen text-white">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-10 text-center">
          <div className="flex justify-center mb-15">
            <Badge variant="default" className="bg-black px-2 py-1 text-slate-300 border-slate-700 flex items-center rounded-full">
              <Settings className="h-4 w-4 mr-2" />
              Powerful Features for Every Trader
            </Badge>
          </div>

          <h1 className="text-4xl md:text-4xl font-bold mb-8">
            START TRADING IN{" "}
            <span className="text-[#7267FF]">
              3 SIMPLE STEPS
            </span>
          </h1>

          <p className="text-md text-slate-300 mb-10 max-w-2xl mx-auto">
            Sign up, fund your account, and start trading in minutes—fast, easy, and hassle-free!
          </p>

          <Button size="lg" className=" text-white py-6 text-lg font-medium">
            Start Trading
            <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Three Steps Section */}
        <div className="container mx-auto px-10 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TradingCard
              step={1}
              isActive={true}
              title="FUND YOUR ACCOUNT"
              description="Easily deposit crypto or fiat using secure payment methods and start trading in minutes."
              content={
                <div className="flex items-center justify-center object-fill">
                  <Image src={step1} alt="step1" fill />
                </div>
              }
            />

            {/* Step 2: Discover Assets */}
            <TradingCard
              step={2}
              isActive={false}
              title="DISCOVER ASSETS"
              description="Explore a wide range of assets, from cryptocurrencies to commodities, and find the perfect fit for your trading strategy."
              content={<div className="flex items-center justify-center object-fill">
                <Image src={step2} alt="step2" fill />
              </div>}
            />

            {/* Step 3: Trade with Perpetuals */}
            <TradingCard
              step={3}
              isActive={false}
              title="TRADE WITH PERPETUALS"
              description="Trade with leverage, hedge risks, and maximize potential gains with advanced perpetual contracts."
              content={<div className="flex items-center justify-center object-fill">
                <Image src={step3} alt="step3" fill />
              </div>}
            />
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="min-h-screen text-white py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-15 w-fit mx-auto">
            <Badge className="bg-black px-2 py-1 text-slate-300 border-slate-700 flex items-center rounded-full">
              <Radar />
              Real Success, Real Numbers
            </Badge>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              TRUSTED BY{" "}
              <span className="text-[#7267FF]">TRADERS</span>
              <br />
              PROVEN BY RESULTS
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join thousands of traders who trust Technance—backed by impressive stats and real user testimonials.
            </p>
          </div>

          {/* Testimonials Grid with Central Stats */}
          <div className="relative max-w-7xl mx-auto">
            {/* Central Stats Circle */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-full border border-slate-700 p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">3,046,005</div>
                <div className="text-slate-300 text-sm font-medium">NUMBER OF TRADES</div>
                <Button className="mt-4  text-white px-6">
                  SEE ALL
                </Button>
              </div>
            </div>

            {/* Testimonials Grid - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              {/* Card 1 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Mobile Trading Done Right</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The Mobile Experience Is Just As Powerful As Desktop. I Can Trade Confidently From Anywhere Now.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Lucas P</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Best Crypto Platform For Professionals</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    As A Professional Trader, I Need Reliability And Advanced Features. This Platform Delivers Both Flawlessly.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Daniel M</span>
                  </div>
                </CardContent>
              </Card>

              {/* Spacer for center */}
              <div className="lg:col-span-1 hidden lg:block"></div>

              {/* Card 3 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Perfect For Bitcoin Trading</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The Bitcoin Trading Features Are Intuitive And Swift.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Lucas P</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Most Trading Experience!</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    I've Been Crypto Trading For Years And This Is By Far The Best Combination Of Sleek Design And Powerful Features.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Lucas P</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Card 5 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Seamless Trading Experience</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The Platform's Interface Is Intuitive And The Execution Speed Is Remarkable. Perfect For Both Beginners And Pros.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Daniel M</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 6 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Revolutionary Trading Tools</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The Analytical Tools And Real-Time Data Have Given Me An Edge In The Market I Never Had Before.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Lucas P</span>
                  </div>
                </CardContent>
              </Card>

              {/* Spacer for center */}
              <div className="lg:col-span-1 hidden lg:block"></div>

              {/* Card 7 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Outstanding Customer Support</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    Not Only Is The Platform Excellent, But The Few Times I've Needed Help, The Support Team Was Responsive And Knowledgeable.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Daniel M</span>
                  </div>
                </CardContent>
              </Card>

              {/* Card 8 */}
              <Card className="bg-slate-800/50 border-slate-700 lg:col-span-1">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Mobile Trading Done Right</h4>
                  <p className="text-slate-300 text-sm mb-3">
                    The Mobile Experience Is Just As Powerful As Desktop. I Can Trade Confidently From Anywhere Now.
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-slate-600 rounded-full mr-2"></div>
                    <span className="text-slate-300 text-sm">Lucas P</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">

            <div className="space-y-6">
              <Badge className="bg-black px-2 py-1 text-slate-300 border-slate-700 flex items-center rounded-full">
                <HelpCircle className="h-5 w-5 text-slate-400" />
                Frequently Questions
              </Badge>

              <h2 className="text-xl md:text-3xl font-bold">
                YOUR QUESTIONS{" "}
                <span className="text-[#7267FF]">ANSWERED</span>
              </h2>

              <Button className=" text-white px-6 py-3 font-medium">
                Chat with Support
                <TelegramSvg />
              </Button>
            </div>

            <div></div>
            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="item-1" className="border-slate-700">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-[#7267FF] py-6">
                    WHAT IS CRYPTOCURRENCY AND HOW DOES IT WORK?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6">
                    Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates on blockchain technology, which is a decentralized ledger that records all transactions across a network of computers. Unlike traditional currencies, cryptocurrencies are not controlled by any central authority like a government or bank.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-slate-700">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-[#7267FF] py-6">
                    WHAT PRODUCTS DOES Technance PROVIDE?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6">
                    Technance provides a comprehensive trading platform featuring spot trading, perpetual contracts, advanced charting tools, portfolio management, and mobile trading capabilities. We offer access to hundreds of cryptocurrencies and trading pairs with competitive fees and professional-grade features.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-slate-700">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-[#7267FF] py-6">
                    HOW TO BUY BITCOIN ON Technance?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6">
                    To buy Bitcoin on Technance: 1) Create and verify your account, 2) Deposit funds via bank transfer, credit card, or other supported methods, 3) Navigate to the Bitcoin trading pair, 4) Choose your order type (market or limit), 5) Enter the amount and confirm your purchase. Your Bitcoin will be credited to your account instantly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-slate-700">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-[#7267FF] py-6">
                    HOW TO TRADE CRYPTOCURRENCIES ON Technance?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6">
                    Trading on Technance is straightforward: 1) Fund your account, 2) Choose your trading pair from our extensive list, 3) Analyze the market using our advanced charting tools, 4) Place your order (market, limit, or stop), 5) Monitor your positions and manage risk. Our platform supports both spot trading and derivatives trading.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-slate-700">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-[#7267FF] py-6">
                    HOW TO INVEST IN CRYPTOCURRENCY?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 pb-6">
                    Cryptocurrency investment requires careful planning: 1) Research and understand the market, 2) Start with small amounts, 3) Diversify your portfolio across different cryptocurrencies, 4) Use dollar-cost averaging for regular investments, 5) Secure your investments with proper wallet management, 6) Stay updated with market trends and news. Always invest only what you can afford to lose.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface StepBadgeProps {
  step: number;
  isActive: boolean;
}

const StepBadge: FC<StepBadgeProps> = ({ step, isActive }) => {
  return (
    <div className="flex items-center mb-2">
      <Badge className={cn("mr-3 rounded-full", isActive ? "bg-[#6A64FD]" : "bg-black")}>
        <CheckCircle2 className={cn("h-5 w-5")} />
        STEP {step}
      </Badge>
    </div >
  )
}

interface TradingCardProps {
  step: number;
  isActive: boolean;
  title: string;
  description: string;
  content: React.ReactNode;
}

const TradingCard: FC<TradingCardProps> = ({ step, isActive, title, description, content }) => {
  return (
    <div className="relative">

      <Card className="bg-slate-800/50 border-slate-700 overflow-hidden h-80 py-0">
        <CardContent className="h-full relative">
          {content}
        </CardContent>
      </Card>

      <div className="mt-3">
        <StepBadge step={step} isActive={isActive} />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}


const TelegramSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-6" width="20px" height="20px" viewBox="2 2 20 20" fill="none" preserveAspectRatio="xMidYMid meet"
    >
      <path d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z" fill="currentcolor" />
    </svg>
  )
}