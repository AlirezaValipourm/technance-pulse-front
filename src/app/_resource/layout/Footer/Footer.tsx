import { FAQItem } from '@/components/FAQItem'
import { TelegramIcon } from '@/components/Icons'
import { Accordion } from '@/components/uiKit/components/ui/accordion'
import { Badge } from '@/components/uiKit/components/ui/badge'
import { Button } from '@/components/uiKit/components/ui/button'
import { FAQList } from '@/core/declarations/constants/FAQList'
import { IFaq } from '@/core/declarations/types/faq'
import { HelpCircle } from 'lucide-react'
import React from 'react'
import { Typography } from '@/components/Typography/Typography'

export const Footer = () => {
    return (
        <div className="text-white py-20" >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
                    <div className="space-y-6">
                        <Badge className="bg-black px-2 py-1 text-slate-300 border-gray-900 flex items-center rounded-full mb-12">
                            <HelpCircle className="h-5 w-5 text-slate-400" />
                            <Typography as="span" variant="body" className="text-xs">Frequently Questions</Typography>
                        </Badge>

                        <Typography as="h2" variant="h2" className="text-xl md:text-3xl font-bold">
                            YOUR QUESTIONS{" "}
                            <span className="text-highlight">ANSWERED</span>
                        </Typography>

                        <Button className=" text-white px-6 py-3 font-medium">
                            <Typography as="span" variant="body" className="text-md flex items-center">Chat with Support</Typography>
                            <TelegramIcon className="w-6 h-6" />
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
