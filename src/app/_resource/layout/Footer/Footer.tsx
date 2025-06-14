import { FAQItem } from '@/components/FAQItem'
import { TelegramIcon } from '@/components/Icons'
import { Accordion } from '@/components/uiKit/components/ui/accordion'
import { Badge } from '@/components/uiKit/components/ui/badge'
import { Button } from '@/components/uiKit/components/ui/button'
import { FAQList } from '@/core/declarations/constants/FAQList'
import { IFaq } from '@/core/declarations/types/faq'
import { HelpCircle } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <div className="text-white py-20" >
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
                            <TelegramIcon />
                        </Button>
                    </div>

                    <div></div>
                    <div className="space-y-4">
                        <Accordion type="single" collapsible className="space-y-2">
                            {FAQList.map((faq: IFaq, index: number) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div >
    )
}
