"use client"
import { TextReveal } from '@/components/Animations/TextReveal'
import { TradingStep } from '@/components/TradingStep'
import { Typography } from '@/components/Typography'
import { Badge } from '@/components/uiKit/components/ui/badge'
import { Button } from '@/components/uiKit/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { MoveRight, Settings } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export const TradingStepsSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const images = ["/images/step1-1.png", "/images/step1-2.png"]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 3000) // Change image every 3 seconds

        return () => clearInterval(interval)
    }, [])
    return (
        <div className="mx-auto px-4 py-10 text-center text-white">
            <div className="flex justify-center">
                <Badge variant="default" className="bg-black px-2 py-1 text-slate-300 border-gray-900 flex items-center rounded-full mb-10">
                    <Settings className="h-4 w-4 mr-2" />
                    <Typography>Powerful Features for Every Trader</Typography>
                </Badge>
            </div>
            <TextReveal
                text="START TRADING IN 3 SIMPLE STEPS"
                highlight={["3", "SIMPLE", "STEPS"]}
                highlightClass="text-highlight font-bold"
                wrapperClassName="mb-8"
                as="h2"
                variant='h2'
                className='text-4xl md:text-4xl font-bold'
                duration={0.3}
                increment={0.05}
            />

            <TextReveal
                text="Sign up, fund your account, and start trading in minutes—fast, easy, and hassle-free!"
                duration={0.5}
                as="p"
                variant='body'
                wrapperClassName="text-slate-400 mb-8 max-w-2xl mx-auto"
                className='text-md'
            />

            <Button size="lg" className=" text-white py-6 text-lg font-medium mb-15">
                <Typography as="span" variant='body' className='text-lg font-medium'>Start Trading</Typography>
                <MoveRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="container mx-auto px-10 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <TradingStep
                        step={1}
                        isActive={true}
                        title="FUND YOUR ACCOUNT"
                        description="Easily deposit crypto or fiat using secure payment methods and start trading in minutes."
                        content={
                            <div className="flex items-center justify-center object-fill relative h-full">
                                {images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="absolute inset-0 h-full"
                                        initial={false}
                                        animate={{ 
                                            opacity: currentImageIndex === index ? 1 : 0,
                                            scale: currentImageIndex === index ? 1 : 0.95
                                        }}
                                        transition={{ 
                                            duration: 1, 
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Image 
                                            src={image} 
                                            alt={`step1-${index + 1}`} 
                                            fill 
                                            // className='h-full object-contain'
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        }
                    />

                    <TradingStep
                        step={2}
                        isActive={false}
                        title="DISCOVER ASSETS"
                        description="Explore a wide range of assets, from cryptocurrencies to commodities, and find the perfect fit for your trading strategy."
                        content={<div className="flex items-center justify-center object-fill">
                            <Image src={"/images/step2.png"} alt="step2" fill />
                        </div>}
                    />

                    <TradingStep
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
    )
}
