"use client"
import { TestimonialsSection } from "@/app/_resource/page/TestimonialsSection";
import { TradingStepsSection } from "@/app/_resource/page/TradingStepsSection";

export default function Home() {
    return (
        <div>
            <TradingStepsSection />
            <TestimonialsSection />
        </div>
    );
}
