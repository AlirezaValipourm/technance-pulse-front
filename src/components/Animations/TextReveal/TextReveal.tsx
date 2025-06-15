import { cn } from "@/components/uiKit/lib/utils";
import { motion } from "motion/react";
import { FC } from "react";
import { ITextRevealProps } from "./TextReveal.type";
import { ITypographyProps } from "@/components/Typography/Typography.type";
import { Typography } from "@/components/Typography/Typography";

export const TextReveal: FC<ITextRevealProps & Omit<ITypographyProps, "children">> = ({
    text,
    highlight,
    highlightClass,
    wrapperClassName,
    as,
    className,
    variant,
    duration = 0.5,
    increment = duration / text.split(" ").length
}) => {

    return (
        <div className={cn("flex items-center flex-wrap justify-center gap-[4px] relative", wrapperClassName)}>
            {text.split(" ").map((word: string, index: number) => {
                const cleanWord = word.replace(/[.,!?]/g, "");
                const isHighlighted = highlight?.includes(cleanWord);

                return (
                    <motion.div
                        key={index}
                        className={cn("", isHighlighted ? highlightClass : "")}
                        initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: index * increment, duration: duration }}
                    >
                        <Typography as={as} variant={variant} className={className}>{word}</Typography>
                    </motion.div>
                );
            })}
        </div>
    );
};

