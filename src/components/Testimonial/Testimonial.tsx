import { QuoteIcon, TestimonialIcon } from "@/components/Icons"
import { ITestimonialProps } from "@/components/Testimonial/Testimonial.type"
import { Card, CardContent } from "@/components/uiKit/components/ui/card"
import Image from "next/image"
import { FC } from "react"

export const Testimonial: FC<ITestimonialProps> = ({ title, description, author, avatar }) => {
    return (
        <Card className="bg-gradient-to-r from-slate-900/50 to-slate-700/50 border-0 lg:col-span-1 relative overflow-hidden pb-2 pt-4">
            <CardContent className="h-full flex flex-col justify-between px-4">
                <QuoteIcon className="absolute top-0 right-0 size-[155px] opacity-30" />
                <div className="relative z-10">
                    <div className="flex items-center mb-3">
                        <TestimonialIcon />
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-xs">{title}</h4>
                    <p className="text-slate-300 text-xs mb-3">
                        {description}
                    </p>
                </div>
                <div className="flex items-center mt-auto">
                    <span className="text-slate-300 text-sm mr-2">{author}</span>
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