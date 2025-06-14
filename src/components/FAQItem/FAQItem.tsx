import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/uiKit/components/ui/accordion'
import { FC } from 'react'
import { IFAQItemProps } from './FAQItem.type'

export const FAQItem: FC<IFAQItemProps> = ({ question, answer, index }) => {
    return (
        <AccordionItem value={`item-${index}`} className="border-slate-700">
            <AccordionTrigger className="text-left font-semibold text-white hover:text-[#7267FF] py-6">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-300 pb-6">
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}
