import createGlobe from "cobe";
import { FC, useEffect, useRef, useMemo, useCallback } from "react";
import { IGlobe3DProps } from "./Globe3D.type";

// Animation constants
const ANIMATION_SPEED = 0.005;
const FOCUS_SPIN_SPEED = 0.008; // Slightly faster spin when focused
const FOCUS_EASING = 0.08; // Increased easing for faster approach
const FOCUS_TOLERANCE = 0.2; // Increased tolerance to make it easier to reach target
const MIN_MOVEMENT = 0.003; // Minimum movement to prevent getting stuck
const MAX_THETA = Math.PI / 3; // Limit theta to 60 degrees from equator
const GLOBE_SIZE = 500;

// Globe configuration
const GLOBE_CONFIG = {
    devicePixelRatio: 1,
    width: GLOBE_SIZE,
    height: GLOBE_SIZE,
    diffuse: 1,
    mapSamples: 16000,
    mapBrightness: 10,
    dark: 0.6,
    baseColor: [0.1, 0.1, 0.24] as [number, number, number],
    markerColor: [1, 0.8, 0.2] as [number, number, number],
    glowColor: [0.4, 0.5, 1] as [number, number, number],
} as const;

export const Globe3D: FC<IGlobe3DProps> = ({
    focusLocation,
    markerSize = 0.08,
    ref
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
    const animationRef = useRef<{
        phi: number;
        theta: number;
        targetPhi?: number;
        targetTheta?: number;
        hasReachedTarget: boolean;
    }>({
        phi: 0,
        theta: 0.2,
        hasReachedTarget: false,
    });

    // Convert lat/lng to spherical coordinates
    const getSphericalCoordinates = useCallback((lat: number, lng: number) => {
        // Convert longitude to phi (0 to 2π)
        let phi = (lng * Math.PI) / 180;
        if (phi < 0) phi += 2 * Math.PI; // Convert negative longitude to positive range

        // Convert latitude to theta (-π/2 to π/2, but we'll limit it further)
        const theta = (lat * Math.PI) / 180;

        return { phi, theta };
    }, []);

    // Calculate shortest angular distance with improved handling
    const getShortestAngularDistance = useCallback((current: number, target: number) => {
        let diff = target - current;

        // Normalize the difference to [-π, π] for proper circular distance
        while (diff > Math.PI) diff -= 2 * Math.PI;
        while (diff < -Math.PI) diff += 2 * Math.PI;

        return diff;
    }, []);

    // Normalize phi angle to [0, 2π] range
    const normalizePhi = useCallback((phi: number) => {
        let normalized = phi % (2 * Math.PI);
        if (normalized < 0) normalized += 2 * Math.PI;
        return normalized;
    }, []);

    // Animation render function
    const onRender = useCallback((state: any) => {
        const animation = animationRef.current;

        if (focusLocation && animation.targetPhi !== undefined && animation.targetTheta !== undefined) {
            // Limit target theta to prevent extreme angles
            const limitedTargetTheta = Math.max(-MAX_THETA, Math.min(MAX_THETA, animation.targetTheta));

            // Normalize both current and target phi for proper comparison
            const normalizedCurrentPhi = normalizePhi(animation.phi);
            const normalizedTargetPhi = normalizePhi(animation.targetPhi);

            const phiDiff = getShortestAngularDistance(normalizedCurrentPhi, normalizedTargetPhi);
            const thetaDiff = getShortestAngularDistance(animation.theta, limitedTargetTheta);

            const isAtTarget = Math.abs(phiDiff) < FOCUS_TOLERANCE && Math.abs(thetaDiff) < FOCUS_TOLERANCE;

            // console.log('Animation state:', {
            //     currentPhi: normalizedCurrentPhi,
            //     currentTheta: animation.theta,
            //     targetPhi: normalizedTargetPhi,
            //     targetTheta: limitedTargetTheta,
            //     phiDiff,
            //     thetaDiff,
            //     isAtTarget,
            //     hasReachedTarget: animation.hasReachedTarget,
            //     focusLocation
            // });

            if (!isAtTarget && !animation.hasReachedTarget) {
                // Still approaching the target
                let phiMovement = phiDiff * FOCUS_EASING;
                let thetaMovement = thetaDiff * FOCUS_EASING;

                // Apply minimum movement to prevent getting stuck
                if (Math.abs(phiMovement) < MIN_MOVEMENT && Math.abs(phiDiff) > MIN_MOVEMENT) {
                    phiMovement = Math.sign(phiMovement) * MIN_MOVEMENT;
                }
                if (Math.abs(thetaMovement) < MIN_MOVEMENT && Math.abs(thetaDiff) > MIN_MOVEMENT) {
                    thetaMovement = Math.sign(thetaMovement) * MIN_MOVEMENT;
                }

                // Move towards target
                animation.phi += phiMovement;
                animation.theta += thetaMovement;

                // Normalize phi angle to keep it in proper range
                animation.phi = normalizePhi(animation.phi);

                // Limit theta to prevent extreme angles
                animation.theta = Math.max(-MAX_THETA, Math.min(MAX_THETA, animation.theta));
            } else {
                // We've reached the target or were already there
                if (!animation.hasReachedTarget) {
                    animation.hasReachedTarget = true;
                    console.log('Globe reached focus location:', focusLocation);
                }

                // Continue rotating at focus location - keep theta fixed, only rotate phi
                animation.phi += FOCUS_SPIN_SPEED;
                // Keep theta at the limited target to maintain focus on the location
                animation.theta = limitedTargetTheta;

                // Normalize phi to prevent overflow
                animation.phi = normalizePhi(animation.phi);
            }
        } else {
            // Free rotation when no focus location
            animation.phi += ANIMATION_SPEED;
            animation.phi = normalizePhi(animation.phi);

            // Reset target reached flag when no focus location
            animation.hasReachedTarget = false;
        }

        state.phi = animation.phi;
        state.theta = animation.theta;
    }, [focusLocation, getShortestAngularDistance, normalizePhi]);

    // Update focus location
    useEffect(() => {
        if (focusLocation) {
            const { phi, theta } = getSphericalCoordinates(focusLocation.lat, focusLocation.lng);
            animationRef.current.targetPhi = phi;
            animationRef.current.targetTheta = theta;
            // Reset the reached flag when a new focus location is set
            animationRef.current.hasReachedTarget = false;
        } else {
            animationRef.current.targetPhi = undefined;
            animationRef.current.targetTheta = undefined;
            animationRef.current.hasReachedTarget = false;
        }
    }, [focusLocation, getSphericalCoordinates]);

    // Initialize globe
    useEffect(() => {
        if (!canvasRef.current) return;

        try {
            const globe = createGlobe(canvasRef.current, {
                ...GLOBE_CONFIG,
                phi: animationRef.current.phi,
                theta: animationRef.current.theta,
                markers: [],
                onRender,
            });

            globeRef.current = globe;

            return () => {
                try {
                    globe?.destroy();
                } catch (error) {
                    console.warn('Error destroying globe:', error);
                }
                globeRef.current = null;
            };
        } catch (error) {
            console.error('Error creating globe:', error);
            return undefined;
        }
    }, [onRender]);

    return (
        <div className="relative flex items-center justify-center" ref={ref}>
            <canvas
                ref={canvasRef}
                className="w-[500px] h-[500px] relative z-10 drop-shadow-2xl"
                style={{
                    filter: 'drop-shadow(-50px -50px 70px rgba(100, 150, 255, 0.5))',
                }}
                aria-label="Interactive 3D globe showing trade locations"
            />
        </div>
    );
};