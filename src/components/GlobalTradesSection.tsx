"use client";

import { FC, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import createGlobe from "cobe";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Radar } from "lucide-react";
import { cn } from "@/lib/utils";

// Trade notification interface
interface TradeNotification {
    id: string;
    type: 'LONG' | 'SHORT';
    amount: string;
    asset: string;
    position: { lat: number; lng: number };
    timestamp: number;
}

// Mock trade generator
const generateMockTrade = (): TradeNotification => {
    const assets = ['BTC', 'ETH', 'SOL', 'ADA', 'DOT', 'LINK'];
    const types: ('LONG' | 'SHORT')[] = ['LONG', 'SHORT'];

    return {
        id: Math.random().toString(36).substr(2, 9),
        type: types[Math.floor(Math.random() * types.length)],
        amount: (Math.random() * 10).toFixed(3),
        asset: assets[Math.floor(Math.random() * assets.length)],
        position: {
            lat: (Math.random() - 0.5) * 180,
            lng: (Math.random() - 0.5) * 360,
        },
        timestamp: Date.now(),
    };
};


// 3D Globe Component
export const Globe3D: FC<{ trades: TradeNotification[], onTradeClick: (trade: TradeNotification) => void }> = ({ trades, onTradeClick }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const globeRef = useRef<any>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 1,
            width: 500,
            height: 500,
            phi: 0,
            theta: 0.3,
            diffuse: 1,
            mapSamples: 16000,
            mapBrightness: 10,
            dark: 0.6,
            baseColor: [0.1, 0.1, 0.24], // globe color
            markerColor: [1, 0.8, 0.2], // Gold/yellow dots
            // mapBaseBrightness: 0.1,
            // mapDarkColor: [0.1, 0.1, 0.3],
            // opacity:0.5,
            // glowColor: [0, 0, 0],
            // glowColor: [1, 1, 1],
            glowColor: [0.4, 0.5, 1],
            markers: trades.map(trade => ({
                location: [trade.position.lat, trade.position.lng],
                size: 0.08,
            })),
            onRender: (state) => {
                // Rotate globe
                phi += 0.005;
                state.phi = phi;
            },
        });

        globeRef.current = globe;

        return () => {
            globe.destroy();
        };
    }, [trades]);

    const handleTradeClick = (trade: TradeNotification) => {
        onTradeClick(trade);

        // Rotate globe to center on trade
        if (globeRef.current) {
            const phi = trade.position.lng * (Math.PI / 180);
            const theta = trade.position.lat * (Math.PI / 180);

            // Animate to new position
            let startPhi = globeRef.current.phi || 0;
            let startTheta = globeRef.current.theta || 0;
            let progress = 0;

            const animate = () => {
                progress += 0.02;
                if (progress <= 1) {
                    const currentPhi = startPhi + (phi - startPhi) * progress;
                    const currentTheta = startTheta + (theta - startTheta) * progress;

                    if (globeRef.current && globeRef.current.updateState) {
                        globeRef.current.updateState({
                            phi: currentPhi,
                            theta: currentTheta,
                        });
                    }

                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    };

    return (
        <div className="relative flex items-center justify-center">
            {/* Globe with enhanced glow effect */}
            <div className="relative">
                {/* Outer glow ring */}
                {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl scale-75 top-[-200px] left-[-200px]  animate-pulse"></div> */}

                {/* Globe canvas */}
                <canvas
                    ref={canvasRef}
                    className="w-[500px] h-[500px] relative z-10 drop-shadow-2xl"
                    style={{
                        filter: 'drop-shadow(-50px -50px 70px rgba(100, 150, 255, 0.5))',
                    }}
                />


                {/* Central stats overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/60 backdrop-blur-md rounded-full border border-blue-500/30 p-8 text-center shadow-2xl">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedCounter target={3257775} />
            </div>
            <div className="text-blue-300 text-sm font-medium mb-4 flex items-center justify-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              NUMBER OF TRADES
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 text-sm font-semibold rounded-full border-0 shadow-lg">
              SEE LIVE
            </Button>
          </div>
        </div> */}

            </div>

            {/* Trade notifications around globe */}
            {trades.slice(0, 5).map((trade, index) => (
                <motion.div
                    key={trade.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`absolute cursor-pointer bg-gradient-to-r ${trade.type === 'LONG' ? 'from-green-500 to-green-600' : 'from-red-500 to-red-600'
                        } text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg hover:scale-105 transition-transform z-30`}
                    style={{
                        top: `${50 + index * 100}px`,
                        left: `${index % 2 === 0 ? -150 : 650}px`,
                    }}
                    onClick={() => handleTradeClick(trade)}
                >
                    {trade.amount} {trade.asset} {trade.type}
                </motion.div>
            ))}
        </div>
    );
};

// Animated counter component
export const AnimatedCounter: FC<{ target: number, duration?: number }> = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Star field background component
interface StarFieldProps {
    starCount: number;
    starColor: [number, number, number];
    className?: string;
}

export const StarField: FC<StarFieldProps> = ({ className, starCount, starColor }) => {
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
    }, []);

    return <canvas ref={canvasRef} className={cn("pointer-events-none", className)} />;
};

// Main Global Trades Section
export const GlobalTradesSection: FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const [trades, setTrades] = useState<TradeNotification[]>([]);
    const [showStarField, setShowStarField] = useState(false);

    // Transform values for parallax effects
    const globeX = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const globeY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
    const starFieldOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

    const { elementRef: titleRef, isIntersecting: titleInView } = useIntersectionObserver({
        threshold: 0.5,
    });

    // Generate mock trades
    useEffect(() => {
        const initialTrades = Array.from({ length: 8 }, generateMockTrade);
        setTrades(initialTrades);

        const interval = setInterval(() => {
            setTrades(prev => {
                const newTrades = [...prev];
                newTrades.shift(); // Remove oldest
                newTrades.push(generateMockTrade()); // Add new
                return newTrades;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Monitor scroll for star field
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setShowStarField(latest > 0.7);
        });
        return unsubscribe;
    }, [scrollYProgress]);

    const handleTradeClick = (trade: TradeNotification) => {
        console.log(`Clicked trade: ${trade.amount} ${trade.asset} ${trade.type}`);
    };

    return (
        <div ref={sectionRef} className="relative min-h-[100vh] bg-black overflow-hidden">
            {/* Star field background */}
            {showStarField && (
                <motion.div
                    style={{ opacity: starFieldOpacity }}
                    className="fixed inset-0 bg-gradient-to-b from-slate-950 to-black z-0"
                >
                    {/* <StarField starCount={1000} /> */}
                </motion.div>
            )}

            {/* Main content */}
            <motion.div style={{ opacity }} className="relative z-10">
                {/* Animated Title Section */}
                <motion.div
                    ref={titleRef}
                    className="text-center py-20 px-4"
                    initial={{ opacity: 0 }}
                    animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        initial={{ y: 50, filter: "blur(10px)" }}
                        animate={titleInView ? { y: 0, filter: "blur(0px)" } : { y: 50, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Badge className="bg-black px-4 py-2 text-slate-300 border-slate-700 flex items-center rounded-full w-fit mx-auto mb-8">
                            <Radar className="h-4 w-4 mr-2" />
                            Global Trading Network
                        </Badge>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ y: 50, filter: "blur(10px)" }}
                        animate={titleInView ? { y: 0, filter: "blur(0px)" } : { y: 50, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        TRADES FROM{" "}
                        <span className="text-[#7267FF]">AROUND THE WORLD</span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                        initial={{ y: 50, filter: "blur(10px)" }}
                        animate={titleInView ? { y: 0, filter: "blur(0px)" } : { y: 50, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Watch live trades happen in real-time across our global network of traders
                    </motion.p>
                </motion.div>

                {/* Globe and Testimonials Section */}
                <div className="relative flex items-center justify-center min-h-screen overflow-hidden">


                    {/* Central Globe with Stats */}
                    <motion.div
                        className="relative z-20 flex flex-col items-center"
                        style={{ x: globeX, y: globeY }}
                    >
                        <Globe3D trades={trades} onTradeClick={handleTradeClick} />

                        {/* Trade counter overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="bg-black/80 backdrop-blur-sm rounded-full border border-slate-700 p-6 text-center">
                                <div className="text-3xl font-bold text-white mb-2">
                                    <AnimatedCounter target={3046005} />
                                </div>
                                <div className="text-slate-300 text-sm font-medium">GLOBAL TRADES</div>
                                <Button className="mt-4 bg-[#7267FF] hover:bg-[#6159E8] text-white px-6 text-sm pointer-events-auto">
                                    View All
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}; 