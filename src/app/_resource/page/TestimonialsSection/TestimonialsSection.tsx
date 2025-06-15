import { AnimatedCounter } from '@/components/Animations/AnimatedCounter'
import { TextReveal } from '@/components/Animations/TextReveal'
import { EmblaCarousel } from '@/components/EmblaCarousel/EmblaCarousel'
import { CircleIcon } from '@/components/Icons'
import { StarField } from '@/components/StarField'
import { Testimonial } from '@/components/Testimonial'
import { Typography } from '@/components/Typography/Typography'
import { Badge } from '@/components/uiKit/components/ui/badge'
import { motion, useInView } from 'framer-motion'
import { Radar, TrendingDown, TrendingUp } from 'lucide-react'
import { useRef } from 'react'

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
    },
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

    const isInView = useInView(targetRef);

    return (
        <div className="text-white py-10 relative">
            <div className="px-4">
                <div className="text-center mb-15 w-fit mx-auto">
                    <Badge className="bg-black px-2 py-1 text-slate-300 border-gray-900 flex items-center rounded-full">
                        <Radar />
                        <Typography>Real Success, Real Numbers</Typography>
                    </Badge>
                </div>

                <div className="text-center mb-20">
                    <div className="mb-8">
                        <TextReveal
                            text="TRUSTED BY TRADERS"
                            as="h2"
                            variant='h2'
                            className='text-4xl md:text-4xl font-bold text-highlight'
                            duration={0.3}
                            increment={0.05}
                        />
                        <TextReveal
                            text="PROVEN BY RESULTS"
                            as="h2"
                            variant='h2'
                            className='text-4xl md:text-4xl font-bold'
                            duration={0.3}
                            increment={0.05}
                        />
                    </div>
                    <TextReveal
                        as="p"
                        variant='body'
                        text="Join thousands of traders who trust Technance — backed by impressive stats and real user testimonials."
                        wrapperClassName="text-slate-400 max-w-2xl mx-auto flex-wrap"
                        duration={0.5}
                        className='text-md'
                    />
                </div>

                {/* Testimonials Grid */}
                <div className='flex flex-col gap-4'>
                    <EmblaCarousel
                        slides={testimonialsFirstRow.map((testimonial, index) => (
                            <Testimonial
                                key={index}
                                avatar={testimonial.avatar}
                                title={testimonial.title}
                                description={testimonial.description}
                                author={testimonial.author}
                            />
                        ))}
                        direction='forward'
                    />
                    <EmblaCarousel
                        slides={testimonialsFirstRow.map((testimonial, index) => (
                            <Testimonial
                                key={index}
                                avatar={testimonial.avatar}
                                title={testimonial.title}
                                description={testimonial.description}
                                author={testimonial.author}
                            />
                        ))}
                        direction='backward'
                    />
                </div>


                <div className="relative max-w-full mx-auto overflow-hidden">
                    {/* <Globe3D trades={mockTrades} focusLocation={globeFocusLocation} /> */}
                </div>
                <div className="h-[500px] flex items-center justify-center overflow-hidden" ref={targetRef}>
                    <motion.div
                        initial={{ y: 500 }}
                        whileInView={{ y: 0 }}
                        viewport={{
                            margin: "0px 0px 200px 0px",
                        }}
                        transition={{ duration: 0.5, ease: "linear" }}
                        className='w-full h-full relative'
                    >
                        <div className="absolute top-0 left-0 w-full h-full">
                            <StarField starCount={800} starColor="#ffffff" />
                        </div>
                        <div className="relative w-full h-full flex items-center justify-center z-10">
                            <div className="flex flex-col items-start gap-5 w-fit me-auto ms-10">
                                <div className='text-xl md:text-3xl font-bold flex flex-col items-start'>
                                    <span className='text-highlight'>LIVE TRADES</span>
                                    <span>ON TECHNANCE</span>
                                </div>
                                <div className='flex items-center gap-2 justify-center'>
                                    <CircleIcon />
                                    <AnimatedCounter duration={2.5} from={546825} to={3267634} className='text-3xl md:text-5xl font-bold leading-[200%]' shouldStart={isInView} />
                                </div>
                                <div className='flex items-center gap-5'>
                                    <div className='flex flex-col items-center gap-2 bg-card rounded-lg p-2'>
                                        <div className='flex items-center gap-1'>
                                            <span className='text-xs text-trade-success font-medium'>Long trades</span>
                                            <TrendingUp size={16} className='text-trade-success' />
                                        </div>
                                        <span>1,235,456</span>
                                    </div>
                                    <div className='flex flex-col items-center gap-2 bg-card rounded-lg p-2'>
                                        <div className='flex items-center gap-1'>
                                            <span className='text-xs text-trade-failure font-medium'>Short trades</span>
                                            <TrendingDown size={16} className='text-trade-failure' />
                                        </div>
                                        <span>1,235,456</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>)
}
