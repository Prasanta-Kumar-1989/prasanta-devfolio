import { useEffect, useState } from 'react'

interface CountUpMetricProps {
  target: number
  suffix?: string
  useComma?: boolean
  className?: string
  duration?: number
}

function formatCount(value: number, useComma?: boolean, suffix?: string) {
  const formatted = useComma ? value.toLocaleString('en-US') : String(value)
  return `${formatted}${suffix ?? ''}`
}

export default function CountUpMetric({
  target,
  suffix,
  useComma,
  className,
  duration = 2000,
}: CountUpMetricProps) {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)

    if (target <= 1) {
      setCount(target)
      return
    }

    let frameId = 0
    let cancelled = false
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (cancelled) return
      if (startTime === null) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      const next = Math.max(1, Math.round(1 + (target - 1) * eased))
      setCount(next)

      if (progress < 1) {
        frameId = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(step)

    return () => {
      cancelled = true
      cancelAnimationFrame(frameId)
    }
  }, [duration, target])

  return <div className={className}>{formatCount(count, useComma, suffix)}</div>
}
