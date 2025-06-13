import { FC, useEffect, useRef } from "react";
import { IStarFieldProps } from "./StarField.type";
import { cn } from "@/components/uiKit/lib/utils";

export const StarField: FC<IStarFieldProps> = ({ className, starCount, starColor }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars: Array<{ x: number; y: number; radius: number; opacity: number; speed: number }> = [];

        // Initialize stars
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 0.5,
                opacity: Math.random(),
                speed: Math.random() * 0.5 + 0.1,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.opacity += (Math.random() - 0.5) * 0.02;
                star.opacity = Math.max(0.1, Math.min(1, star.opacity));

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                const red = starColor[0] * 255;
                const green = starColor[1] * 255;
                const blue = starColor[2] * 255;
                ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${star.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [starColor, starCount]);

    return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} />;
};