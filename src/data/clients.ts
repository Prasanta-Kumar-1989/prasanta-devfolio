export const WALMART_GLOBAL_TECH = "Walmart Global Tech";
export const PRIME_FOCUS_TECHNOLOGIES = "Prime Focus Technologies";
export const BORN_GROUP = "Born Group";
export const AMERICAN_EXPRESS = "American Express";

export const walmartSparkLogo = "/logos/walmart-spark.png";
export const primeFocusLogo = "/logos/prime-focus-pft.png";
export const bornGroupLogo = "/logos/born-group-heading.png";
export const amexHeadingLogo = "/logos/amex-heading.png";

export function getClientLogo(client: string): string | null {
  if (client === WALMART_GLOBAL_TECH || client.startsWith(`${WALMART_GLOBAL_TECH} `)) {
    return walmartSparkLogo;
  }
  if (client === PRIME_FOCUS_TECHNOLOGIES || client.startsWith(`${PRIME_FOCUS_TECHNOLOGIES} `)) {
    return primeFocusLogo;
  }
  if (client === BORN_GROUP || client.startsWith(`${BORN_GROUP} `)) {
    return bornGroupLogo;
  }
  if (
    client === AMERICAN_EXPRESS ||
    client.startsWith(`${AMERICAN_EXPRESS} `) ||
    client.includes(`Client: ${AMERICAN_EXPRESS}`)
  ) {
    return amexHeadingLogo;
  }
  return null;
}

export function isWalmartGlobalTech(client: string): boolean {
  return client === WALMART_GLOBAL_TECH || client.startsWith(`${WALMART_GLOBAL_TECH} `);
}

export function isPrimeFocusTechnologies(client: string): boolean {
  return client === PRIME_FOCUS_TECHNOLOGIES || client.startsWith(`${PRIME_FOCUS_TECHNOLOGIES} `);
}
