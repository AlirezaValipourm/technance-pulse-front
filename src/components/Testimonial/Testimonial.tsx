import { QuoteIcon, TestimonialIcon } from "@/components/Icons"
import { ITestimonialProps } from "@/components/Testimonial/Testimonial.type"
import { Typography } from "@/components/Typography"
import { Card, CardContent } from "@/components/uiKit/components/ui/card"
import Image from "next/image"
import { FC } from "react"

export const Testimonial: FC<ITestimonialProps> = ({ title, description, author, avatar }) => {
    return (
        <Card className="bg-gradient-to-r from-testimonial-gradient-start to-testimonial-gradient-end border-0 lg:col-span-1 relative overflow-hidden pb-2 pt-4">
            <CardContent className="h-full flex flex-col justify-between px-2">
                <QuoteIcon className="absolute top-0 right-0 size-[155px] opacity-30" />
                <div className="relative z-10 mb-4">
                    <div className="flex items-center mb-6">
                        <TestimonialIcon />
                    </div>
                    <Typography as="h4" variant="h4" className="font-semibold text-white mb-4 text-xs">{title}</Typography>
                    <Typography as="p" variant="body" className="text-slate-300 text-xs mb-3">{description}</Typography>
                </div>
                <div className="flex items-center mt-auto">
                    <Typography as="span" variant="body" className="text-slate-300 text-sm me-2">{author}</Typography>
                    <Image
                        src={avatar}
                        alt="testimonial"
                        width={24}
                        height={24}
                        className="w-6 h-6 bg-slate-600 rounded-full "
                    />
                </div>
            </CardContent>
        </Card>
    )
}