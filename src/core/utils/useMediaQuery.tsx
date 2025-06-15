"use client"
import { useState, useEffect } from 'react';

// breakpoints
const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
} as const;

type BreakpointKey = keyof typeof breakpoints;
type MediaQueryInput = BreakpointKey | string;

/**
 * Custom hook for responsive design with Tailwind CSS v4 breakpoints
 * @param query - Media query string or Tailwind breakpoint name
 * @returns Whether the media query matches
 */
export const useMediaQuery = (query: MediaQueryInput): boolean => {
    const getMediaQuery = (q: MediaQueryInput): string => {
        if (q in breakpoints) {
            return `(min-width: ${breakpoints[q as BreakpointKey]})`;
        }
        return q;
    };

    const mediaQuery = getMediaQuery(query);
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQueryList = window.matchMedia(mediaQuery);
        setMatches(mediaQueryList.matches);

        const handler = (event: MediaQueryListEvent): void => {
            setMatches(event.matches);
        };

        // event listener
        mediaQueryList.addEventListener('change', handler);

        // cleanup function
        return () => {
            mediaQueryList.removeEventListener('change', handler);
        };
    }, [mediaQuery]);

    return matches;
};