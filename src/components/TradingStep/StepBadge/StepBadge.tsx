import { Typography } from "@/components/Typography/Typography"
import { Badge } from "@/components/uiKit/components/ui/badge"
import { cn } from "@/components/uiKit/lib/utils"
import { CheckCircle2 } from "lucide-react"
import { FC } from "react"
import { IStepBadgeProps } from "./StepBadge.type"

export const StepBadge: FC<IStepBadgeProps> = ({ step, isActive }) => {
    return (
        <div className="flex items-center mb-2">
            <Badge className={cn("mr-3 rounded-full", isActive ? "bg-highlight" : "bg-black")}>
                <CheckCircle2 className={cn("h-6 w-6", isActive ? "text-white" : "text-gray-600")} />
                <Typography as="span" variant="body" className={cn("text-xs", isActive ? "text-white" : "text-gray-600")}>{`STEP ${step}`}</Typography>
            </Badge>
        </div >
    )
}
