import { FC } from "react"
import { ITradingStepProps } from "./TradingStep.type"
import { Card, CardContent } from "../uiKit/components/ui/card"
import { StepBadge } from "./StepBadge"

export const TradingStep: FC<ITradingStepProps> = ({ step, isActive, title, description, content }) => {
    return (
        <div className="relative">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden h-80 py-0">
                <CardContent className="h-full relative">
                    {content}
                </CardContent>
            </Card>

            <div className="mt-3">
                <StepBadge step={step} isActive={isActive} />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-300 text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}
