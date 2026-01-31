"use client";

import { useCallback, useState } from "react";

/**
 * Custom hook for managing orbit animation states
 * Handles pause/play functionality and individual planet focus
 */
export function useOrbitAnimation() {
  const [isPaused, setIsPaused] = useState(false);
  const [focusedPlanetId, setFocusedPlanetId] = useState<string | null>(null);

  const toggleSystemPause = useCallback(() => {
    setIsPaused((prev) => !prev);
    setFocusedPlanetId(null);
  }, []);

  const focusPlanet = useCallback((planetId: string) => {
    if (focusedPlanetId === planetId) {
      // Clicking same planet unfocuses it
      setFocusedPlanetId(null);
      setIsPaused(false);
    } else {
      setFocusedPlanetId(planetId);
      setIsPaused(true);
    }
  }, [focusedPlanetId]);

  const unfocusPlanet = useCallback(() => {
    setFocusedPlanetId(null);
    setIsPaused(false);
  }, []);

  return {
    isPaused,
    focusedPlanetId,
    toggleSystemPause,
    focusPlanet,
    unfocusPlanet,
  };
}
