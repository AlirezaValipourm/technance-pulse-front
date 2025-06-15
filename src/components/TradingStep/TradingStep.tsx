import { FC } from "react"
import { ITradingStepProps } from "./TradingStep.type"
import { Card, CardContent } from "../uiKit/components/ui/card"
import { StepBadge } from "./StepBadge"
import { Typography } from "../Typography/Typography"

export const TradingStep: FC<ITradingStepProps> = ({ step, isActive, title, description, content }) => {
    return (
        <div>
            <Card className="border-slate-700 overflow-hidden h-80 p-0">
                <CardContent className="h-full relative">
                    {content}
                </CardContent>
            </Card>

            <div className="mt-3">
                <StepBadge step={step} isActive={isActive} />
                <Typography as="h3" variant="h3" className="text-gray-300 text-xl font-bold mb-2 w-fit">{title}</Typography>
                <Typography as="p" variant="body" className="text-gray-600 text-sm text-start">{description}</Typography>
            </div>
        </div>
    )
}
