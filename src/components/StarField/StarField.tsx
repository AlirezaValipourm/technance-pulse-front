import React, { FC, useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { IStarFieldProps } from './StarField.type';
import { cn } from '@/components/uiKit/lib/utils';

export const StarField:FC<IStarFieldProps> = ({ starCount, starColor, className }) => {
    
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesOptions: ISourceOptions = {
        background: {
            color: {
                value: '#000000',
            },
        },
        backgroundMode: {
            enable: true,
            zIndex: 0,
        },
        fullScreen: {
            enable: false,
            zIndex: 0,
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                resize: true,
            },
        },
        particles: {
            color: {
                value: starColor,
            },
            move: {
                direction: 'bottom',
                enable: true,
                outModes: {
                    default: 'out',
                },
                random: true,
                speed: 0.3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: starCount,
            },
            opacity: {
                value: { min: 0.1, max: 0.7 },
                animation: {
                    enable: true,
                    speed: 0.5,
                    sync: false,
                },
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            className={cn("relative h-full w-full", className)}
        />
    );
};

