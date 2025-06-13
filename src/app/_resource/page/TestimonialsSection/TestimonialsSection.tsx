import React, { useRef } from 'react'
import { TextReveal } from '@/components/Animations/TextReveal'
import { Globe3D } from '@/components/Globe3D'
import { StarField } from '@/components/StarField'
import { Testimonial } from '@/components/Testimonial'
import { Badge } from '@/components/uiKit/components/ui/badge'
import { Radar } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

const testimonialsFirstRow = [
    {
        title: "Mobile Trading Done Right",
        description: "The Mobile Experience Is Just As Powerful As Desktop. I Can Trade Confidently From Anywhere Now.",
        author: "Lucas P",
        avatar: "https://i.pravatar.cc/48?img=0"
    },
    {
        title: "Best Crypto Platform For Professionals",
        description: "As A Professional Trader, I Need Reliability And Advanced Features. This Platform Delivers Both Flawlessly.",
        author: "Daniel M",
        avatar: "https://i.pravatar.cc/48?img=1"
    },
    {
        title: "Transformed My Trading Strategy",
        description: "The Platform's Unique Features Have Allowed Me To Implement Strategies I Couldn't Execute Elsewhere",
        author: "Lucas P",
        avatar: "https://i.pravatar.cc/48?img=2"
    },
    {
        title: "Fast, Reliable & Perfect For Bitcoin Trading",
        description: "The Fastest Crypto Trading Platform I've Experienced. The Low Spreads And Swift Execution Are Exactly What Four Traders Need.",
        author: "John D",
        avatar: "https://i.pravatar.cc/48?img=3"
    },
    {
        title: "Most Trading Experience!",
        description: "I've Been Crypto Trading For Years And This Is By Far The Best Combination Of Sleek Design And Powerful Features.",
        author: "Lucas P",
        avatar: "https://i.pravatar.cc/48?img=4"
    },
    {
        title: "Incredible Trading Platform",
        description: "The Most Responsive Trading Platform I've Ever Used. Perfect For Day Traders Who Need Speed And Reliability.",
        author: "Daniel M",
        avatar: "https://i.pravatar.cc/48?img=5"
    }
];

const testimonialsSecondRow = [
    {
        title: "Seamless Trading Experience",
        description: "The Platform's Interface Is Intuitive And The Execution Speed Is Remarkable. Perfect For Both Beginners And Pros.",
        author: "John D",
        avatar: "https://i.pravatar.cc/48?img=6"
    },
    {
        title: "Revolutionary Trading Tools",
        description: "The Artificial Tools And Real-Time Data Have Given Me An Edge In The Market I Have Never Had Before.",
        author: "Lucas P",
        avatar: "https://i.pravatar.cc/48?img=7"
    },
    {
        title: "Secure And Reliable",
        description: "Feel Confident Trading Here Knowing My Assets Are Secure. The Platform Has Never Let Me Down During Versatile Markets.",
        author: "Daniel M",
        avatar: "https://i.pravatar.cc/48?img=8"
    },
    {
        title: "Perfect For Day Trading",
        description: "The Platform's Speed And Low Spreads Make It Ideal For Day Traders Who Need Quick Execution And High Liquidity.",
        author: "Lucas P",
        avatar: "https://i.pravatar.cc/48?img=9"
    },
    {
        title: "Mobile Trading Done Right",
        description: "The Mobile Experience Is Just As Powerful As Desktop. I Can Trade Confidently From Anywhere Now.",
        author: "Lucas P",
        avatar: "https://i.pravatar.cc/48?img=10"
    },
    {
        title: "Best Crypto Platform For Professionals",
        description: "As A Professional Trader, I Need Reliability And Advanced Features. This Platform Delivers Both Flawlessly.",
        author: "Daniel M",
        avatar: "https://i.pravatar.cc/48?img=11"
    }
];

export const TestimonialsSection = () => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start']
    })

    const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
    const x2 = useTransform(scrollYProgress, [0, 1], ['-10%', '0%'])

    return (
        <div className="min-h-screen text-white py-10" ref={targetRef}>
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
                <div className="relative max-w-full mx-auto overflow-hidden">
                    {/* <Globe3D trades={mockTrades} focusLocation={globeFocusLocation} /> */}
                    <motion.div style={{ x: x1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-6 w-[130%]">
                        {testimonialsFirstRow.map((testimonial, index) => (
                            <Testimonial
                                key={index}
                                avatar={testimonial.avatar}
                                title={testimonial.title}
                                description={testimonial.description}
                                author={testimonial.author}
                            />
                        ))}
                    </motion.div>

                    <motion.div style={{ x: x2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-6 w-[130%]">
                        {testimonialsSecondRow.map((testimonial, index) => (
                            <Testimonial
                                avatar={testimonial.avatar}
                                key={index}
                                title={testimonial.title}
                                description={testimonial.description}
                                author={testimonial.author}
                            />
                        ))}
                    </motion.div>
                </div>
                <div className="h-[500px] flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ y: 500 }}
                        whileInView={{ y: 0 }}
                        viewport={{
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
        </div>)
}
