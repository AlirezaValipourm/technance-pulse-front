"use client"
import { AnimatedCounter } from '@/components/Animations/AnimatedCounter'
import { TextReveal } from '@/components/Animations/TextReveal'
import { EmblaCarousel } from '@/components/EmblaCarousel/EmblaCarousel'
import { Globe3D } from '@/components/Globe3D'
import { CircleIcon } from '@/components/Icons'
import { StarField } from '@/components/StarField'
import { Testimonial } from '@/components/Testimonial'
import { TradeList } from '@/components/TradeList.tsx/TradeList'
import { Typography } from '@/components/Typography'
import { Badge } from '@/components/uiKit/components/ui/badge'
import { Button } from '@/components/uiKit/components/ui/button'
import { testimonialsList } from '@/core/declarations/constants/TestimonialList'
import { TTrade } from '@/core/declarations/types/trade'
import { useMediaQuery } from '@/core/utils/useMediaQuery'
import { motion, useInView, useScroll, useTransform } from 'motion/react'
import { Radar, TrendingDown, TrendingUp } from 'lucide-react'
import { useRef, useState } from 'react'

export const IntroductionSection = () => {
    const isDesktop = useMediaQuery('sm'); // for simplicity tablet mode and desktop mode are the same
    const starFieldRef = useRef<HTMLDivElement | null>(null);
    const globeRef = useRef<HTMLDivElement | null>(null);
    const testimonialsGridRef = useRef<HTMLDivElement | null>(null);

    const [selectedTrade, setSelectedTrade] = useState<TTrade | null>(null);

    const isStarFieldInView = useInView(starFieldRef);
    const isGlobeInView = useInView(globeRef, { margin: "0px" });

    const { scrollYProgress: starFieldScrollYProgress } = useScroll({
        target: starFieldRef,
        offset: ['center end', 'center center'],
    })

    const { scrollYProgress: testimonialsGridScrollYProgress } = useScroll({
        target: testimonialsGridRef,
        offset: ['start end', 'end start'],
    })

    const globeTopPosition = useTransform(starFieldScrollYProgress, [0, 1], ["-20%", "45%"])
    const globeLeftPosition = useTransform(starFieldScrollYProgress, [0, 0.5, 1], ['0%', '0%', '30%'])
    const globeStatsLayerOpacity = useTransform(starFieldScrollYProgress, [0, 0.1], [1, 0])
    const globeTradeLayerOpacity = useTransform(starFieldScrollYProgress, [0.95, 1], [0, 1])

    const testimonialsGridOpacity = useTransform(
        testimonialsGridScrollYProgress,
        [0, 0.6, 0.9],
        ["0", "0", "100"]
    )

    const handleTradeClick = (trade: TTrade) => {
        setSelectedTrade(trade)
    }

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
                {/* Testimonials and Globe container */}
                <div className='relative overflow-hidden'>
                    {/* Testimonials Grid */}
                    <div className='flex flex-col gap-4 relative z-0' ref={testimonialsGridRef}>
                        <EmblaCarousel
                            slides={testimonialsList.map((testimonial, index) => (
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
                            slides={testimonialsList.map((testimonial, index) => (
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
                        {/* shadow layer */}
                        <motion.div
                            className="absolute top-0 left-0 w-full h-full z-10 bg-black"
                            style={{ opacity: useTransform(testimonialsGridOpacity, (value) => parseInt(value) / 100) }}
                        />
                    </div>

                    {/* Globe3D positioned in center */}
                    <div className='absolute top-0 w-full h-full flex items-center justify-center overflow-hidden z-20'>
                        <motion.div
                            className="flex relative items-center justify-center w-fit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "0px" }}
                            transition={{
                                duration: 1.2,
                                ease: "linear",
                            }}
                            style={{ left: isDesktop ? globeLeftPosition : "0%", top: globeTopPosition }}
                        >
                            <motion.div
                                className={"absolute top-1/2 left-1/2 h-fit -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-20"}
                                style={{
                                    opacity: globeStatsLayerOpacity
                                }}
                            >
                                <div className="text-center">
                                    <AnimatedCounter duration={1.5} from={546825} to={3267634} className='text-3xl md:text-5xl font-bold mb-4' shouldStart={isGlobeInView} />
                                    <Typography variant='body' className='mb-2'>
                                        NUMBER OF TRADES
                                    </Typography>

                                    <Button>SEE LIVE</Button>
                                </div>
                            </motion.div>
                            <motion.div
                                className={"absolute top-[45%] left-1/2 h-full -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center z-30"}
                                style={{
                                    opacity: globeTradeLayerOpacity,
                                }}
                            >
                                <TradeList onClick={handleTradeClick} />
                                {/* Shadow layer below TradeList */}
                                <div
                                    className={"absolute top-[90%] left-[65%] w-100 h-100 z-10 -translate-x-1/2 -translate-y-1/2 bg-black blur-[80px] bg-[radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05) 75%, transparent 90%)] pointer-events-none"}
                                />
                            </motion.div>
                            <Globe3D focusLocation={selectedTrade?.position ?? undefined} ref={globeRef} />
                        </motion.div>
                    </div>
                    {/* star field */}
                    <div className="h-[500px] left-0 w-full flex items-center justify-center overflow-hidden z-10" ref={starFieldRef}>
                        <motion.div
                            initial={{ top: 500, opacity: 0 }}
                            whileInView={{ top: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "0px" }}
                            exit={{
                                top: 500
                            }}
                            transition={{ duration: 0.5, ease: "linear" }}
                            className='w-full h-full relative pointer-events-none'
                        >
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                <StarField starCount={800} starColor="#ffffff" />
                            </div>
                            <div className="relative w-full h-full flex items-start sm:items-center justify-center z-50 md:z-0">
                                <div className="flex flex-col gap-5 w-fit sm:me-auto sm:ms-10">
                                    <div className='text-xl md:text-3xl font-bold flex flex-col items-center sm:items-start'>
                                        <span className='text-highlight'>LIVE TRADES</span>
                                        <span>ON TECHNANCE</span>
                                    </div>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <CircleIcon />
                                        <AnimatedCounter duration={3.5} from={546825} to={3267634} className='text-3xl md:text-5xl font-bold leading-[200%]' shouldStart={isStarFieldInView} />
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
            </div>
        </div>
    )
}
