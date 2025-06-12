"use client"
import { cn } from "@/lib/utils";
import { CheckCircle2, HelpCircle, MoveRight, Radar, Settings } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Globe3D, StarField, AnimatedCounter } from "@/components/GlobalTradesSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
    // Mock trade data
    const mockTrades = [
        {
            id: '1',
            type: 'LONG' as const,
            amount: '2.456',
            asset: 'BTC',
            position: { lat: 40.7128, lng: -74.0060 },
            timestamp: Date.now(),
        },
        {
            id: '2',
            type: 'SHORT' as const,
            amount: '15.789',
            asset: 'ETH',
            position: { lat: 51.5074, lng: -0.1278 },
            timestamp: Date.now(),
        },
        {
            id: '3',
            type: 'LONG' as const,
            amount: '8.234',
            asset: 'SOL',
            position: { lat: 35.6762, lng: 139.6503 },
            timestamp: Date.now(),
        },
        {
            id: '4',
            type: 'SHORT' as const,
            amount: '4.567',
            asset: 'ADA',
            position: { lat: -33.8688, lng: 151.2093 },
            timestamp: Date.now(),
        },
        {
            id: '5',
            type: 'LONG' as const,
            amount: '12.345',
            asset: 'DOT',
            position: { lat: 1.3521, lng: 103.8198 },
            timestamp: Date.now(),
        },
    ];

    const handleTradeClick = (trade: any) => {
        console.log('Trade clicked:', trade);
    }

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
                    <TextReveal
                        text="START TRADING IN 3 SIMPLE STEPS"
                        highlight={["3", "SIMPLE", "STEPS"]}
                        highlightClass="text-[#7267FF] font-bold"
                        className="text-4xl md:text-4xl font-bold relative mb-8"
                        duration={0.3}
                        increment={0.05}
                    />

                    <TextReveal
                        text="Sign up, fund your account, and start trading in minutes—fast, easy, and hassle-free!"
                        duration={0.5}
                        className="text-md text-slate-300 mb-10 max-w-2xl mx-auto"
                    />

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
                                    <Image src={"/images/step1.png"} alt="step1" fill />
                                </div>
                            }
                        />

                        <TradingCard
                            step={2}
                            isActive={false}
                            title="DISCOVER ASSETS"
                            description="Explore a wide range of assets, from cryptocurrencies to commodities, and find the perfect fit for your trading strategy."
                            content={<div className="flex items-center justify-center object-fill">
                                <Image src={"/images/step2.png"} alt="step2" fill />
                            </div>}
                        />

                        <TradingCard
                            step={3}
                            isActive={false}
                            title="TRADE WITH PERPETUALS"
                            description="Trade with leverage, hedge risks, and maximize potential gains with advanced perpetual contracts."
                            content={<div className="flex items-center justify-center object-fill">
                                <Image src={"/images/step3.png"} alt="step3" fill />
                            </div>}
                        />
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="min-h-screen text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-15 w-fit mx-auto">
                        <Badge className="bg-black px-2 py-1 text-slate-300 border-slate-700 flex items-center rounded-full">
                            <Radar />
                            Real Success, Real Numbers
                        </Badge>
                    </div>

                    <div className="text-center mb-16">
                        <div className="mb-4">
                            <TextReveal
                                text="TRUSTED BY TRADERS"
                                className="text-4xl md:text-4xl font-bold relative text-[#7267FF]"
                                duration={0.3}
                                increment={0.05}
                            />
                            <TextReveal
                                text="PROVEN BY RESULTS"
                                className="text-4xl md:text-4xl font-bold relative"
                                duration={0.3}
                                increment={0.05}
                            />
                        </div>
                        <TextReveal
                            text="Join thousands of traders who trust Technance—backed by impressive stats and real user testimonials."
                            className="text-xl text-slate-300 max-w-2xl mx-auto"
                            duration={0.5}
                        />
                    </div>

                    {/* Testimonials Grid */}
                    <div className="relative max-w-full mx-auto">
                        <Globe3D trades={mockTrades} onTradeClick={handleTradeClick} />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-6 w-[110%]">
                            <TestimonialCard
                                title="Mobile Trading Done Right"
                                description="The Mobile Experience Is Just As Powerful As Desktop. I Can Trade Confidently From Anywhere Now."
                                author="Lucas P"
                            />
                            <TestimonialCard
                                title="Best Crypto Platform For Professionals"
                                description="As A Professional Trader, I Need Reliability And Advanced Features. This Platform Delivers Both Flawlessly."
                                author="Daniel M"
                            />
                            <TestimonialCard
                                title="Transformed My Trading Strategy"
                                description="The Platform's Unique Features Have Allowed Me To Implement Strategies I Couldn't Execute Elsewhere"
                                author="Lucas P"
                            />
                            <TestimonialCard
                                title="Fast, Reliable & Perfect For Bitcoin Trading"
                                description="The Fastest Crypto Trading Platform I've Experienced. The Low Spreads And Swift Execution Are Exactly What Four Traders Need."
                                author="John D"
                            />
                            <TestimonialCard
                                title="Most Trading Experience!"
                                description="I've Been Crypto Trading For Years And This Is By Far The Best Combination Of Sleek Design And Powerful Features."
                                author="Lucas P"
                            />
                            <TestimonialCard
                                title="Incredible Trading Platform"
                                description="The Most Responsive Trading Platform I've Ever Used. Perfect For Day Traders Who Need Speed And Reliability."
                                author="Daniel M"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-6">
                            <TestimonialCard
                                title="Seamless Trading Experience"
                                description="The Platform's Interface Is Intuitive And The Execution Speed Is Remarkable. Perfect For Both Beginners And Pros."
                                author="John D"
                            />
                            <TestimonialCard
                                title="Revolutionary Trading Tools"
                                description="The Artificial Tools And Real-Time Data Have Given Me An Edge In The Market I Have Never Had Before."
                                author="Lucas P"
                            />
                            <TestimonialCard
                                title="Secure And Reliable"
                                description="Feel Confident Trading Here Knowing My Assets Are Secure. The Platform Has Never Let Me Down During Versatile Markets."
                                author="Daniel M"
                            />
                            <TestimonialCard
                                title="Perfect For Day Trading"
                                description="The Platform's Speed And Low Spreads Make It Ideal For Day Traders Who Need Quick Execution And High Liquidity."
                                author="Lucas P"
                            />
                            <TestimonialCard
                                title="Mobile Trading Done Right"
                                description="The Mobile Experience Is Just As Powerful As Desktop. I Can Trade Confidently From Anywhere Now."
                                author="Lucas P"
                            />
                            <TestimonialCard
                                title="Best Crypto Platform For Professionals"
                                description="As A Professional Trader, I Need Reliability And Advanced Features. This Platform Delivers Both Flawlessly."
                                author="Daniel M"
                            />
                        </div>
                    </div>
                    <div className="h-[500px] flex items-center justify-center overflow-hidden">
                        <motion.div
                            initial={{ y: 500 }}
                            whileInView={{ y: 0 }}
                            viewport={{
                                // once: true,
                                margin: "100px 0px 0px 0px"
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <StarField starCount={1000} starColor={[1, 1, 1]} />
                            {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-red-500 z-10">
                                    counter
                                </div> */}
                        </motion.div>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" width="20px" height="20px" viewBox="2 2 20 20" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z" fill="currentcolor" />
        </svg>
    )
}

interface TestimonialCardProps {
    title: string;
    description: string;
    author: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ title, description, author }) => {
    return (
        <Card className="bg-slate-800/50 border-0 lg:col-span-1 relative overflow-hidden pb-2 pt-4">
            <CardContent className="h-full flex flex-col justify-between px-4">
                <QuoteSvg className="absolute top-0 right-0 size-[155px] opacity-10" />
                <div className="relative z-10">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white text-xm font-bold">icon</span>
                        </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-xs">{title}</h4>
                    <p className="text-slate-300 text-xs mb-3">
                        {description}
                    </p>
                </div>
                <div className="flex items-center mt-auto">
                    <span className="text-slate-300 text-sm mr-2">{author}</span>
                    <div className="w-6 h-6 bg-slate-600 rounded-full "></div>
                </div>
            </CardContent>
        </Card>
    )
}

interface QuoteSvgProps {
    className?: string;
}

const QuoteSvg: FC<QuoteSvgProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 4 24 24" fill="currentColor" className={className} >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
    )
}

interface TextRevealProps {
    text: string;
    highlight?: string[];
    highlightClass?: string;
    className?: string;
    duration?: number;
    increment?: number;
}

const TextReveal: FC<TextRevealProps> = ({
    text,
    highlight,
    highlightClass,
    className,
    duration = 0.5,
    increment = duration / text.split(" ").length
}) => {

    return (
        <div className={cn("flex items-center justify-center gap-[4px] whitespace-nowrap", className)}>
            {text.split(" ").map((word: string, index: number) => {
                const cleanWord = word.replace(/[.,!?]/g, "");
                const isHighlighted = highlight?.includes(cleanWord);

                return (
                    <motion.div
                        key={index}
                        className={cn("", isHighlighted ? highlightClass : "")}
                        initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: index * increment, duration: duration }}
                    >
                        {word}
                    </motion.div>
                );
            })}
        </div>
    );
};

