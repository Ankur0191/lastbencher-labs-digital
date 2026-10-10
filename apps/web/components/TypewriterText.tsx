"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  phrases: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

const EMPTY_PHRASES: readonly string[] = [""];

/** Small, reduced-motion-aware typewriter for short hero phrases. */
export function TypewriterText({
  phrases,
  typingSpeed = 54,
  deletingSpeed = 28,
  pauseMs = 1450,
}: TypewriterTextProps) {
  const phraseList = phrases.length > 0 ? phrases : EMPTY_PHRASES;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(phraseList[0] ?? "");
      return;
    }

    const currentPhrase = phraseList[phraseIndex] ?? "";
    const hasFinishedTyping = displayed === currentPhrase;
    const hasFinishedDeleting = displayed.length === 0;
    const delay = !isDeleting && hasFinishedTyping
      ? pauseMs
      : isDeleting
        ? deletingSpeed
        : typingSpeed;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && hasFinishedTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && hasFinishedDeleting) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phraseList.length);
        return;
      }

      setDisplayed(
        isDeleting
          ? currentPhrase.slice(0, Math.max(0, displayed.length - 1))
          : currentPhrase.slice(0, displayed.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [displayed, isDeleting, phraseIndex, phraseList, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="hero__typewriter-text" aria-label={phraseList[phraseIndex]}>
      <span aria-hidden="true">{displayed}</span>
      <span className="hero__typewriter-cursor" aria-hidden="true">|</span>
      <span className="sr-only">{phraseList[phraseIndex]}</span>
    </span>
  );
}
