import { useEffect, useState } from 'react'

/**
 * A custom hook to check the status of a media query.
 * @param query The media query string to match against.
 * @returns A boolean indicating whether the media query matches.
 * @example
 * // Usage:
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * if (isMobile) {
 *   // Do something for mobile view
 * } else {
 *   // Do something for larger screens
 * }
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => {
      setMatches(media.matches)
    }

    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
