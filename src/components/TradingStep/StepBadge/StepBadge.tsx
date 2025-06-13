import { FC } from "react"
import { IStepBadgeProps } from "./StepBadge.type"
import { cn } from "@/components/uiKit/lib/utils"
import { Badge } from "@/components/uiKit/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export const StepBadge: FC<IStepBadgeProps> = ({ step, isActive }) => {
    return (
        <div className="flex items-center mb-2">
            <Badge className={cn("mr-3 rounded-full", isActive ? "bg-[#6A64FD]" : "bg-black")}>
                <CheckCircle2 className={cn("h-5 w-5")} />
                STEP {step}
            </Badge>
        </div >
    )
}
