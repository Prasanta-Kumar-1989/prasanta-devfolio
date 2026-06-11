export const CAREER_START_DATE = new Date(2017, 10, 25)

export interface ExperienceDuration {
  years: number
  months: number
  days: number
}

export function getExperienceDuration(now = new Date()): ExperienceDuration {
  let years = now.getFullYear() - CAREER_START_DATE.getFullYear()
  let months = now.getMonth() - CAREER_START_DATE.getMonth()
  let days = now.getDate() - CAREER_START_DATE.getDate()

  if (days < 0) {
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    months -= 1
  }
  if (months < 0) {
    months += 12
    years -= 1
  }

  return { years, months, days }
}

export function formatExperienceDuration(duration: ExperienceDuration): string {
  const parts = [
    `${duration.years} ${duration.years === 1 ? 'year' : 'years'}`,
    `${duration.months} ${duration.months === 1 ? 'month' : 'months'}`,
    `${duration.days} ${duration.days === 1 ? 'day' : 'days'}`,
  ]
  return parts.join(' · ')
}
