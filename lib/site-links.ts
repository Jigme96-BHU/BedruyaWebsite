/**
 * Google review link.
 *
 * Currently points to the Google Maps listing (searched by name + address),
 * where visitors can tap "Reviews" → "Write a review".
 *
 * For a one-click review form, replace with the short link from
 * Google Business Profile → "Ask for reviews" (looks like
 * https://g.page/r/XXXXXXXX/review).
 */
export const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Bedurya Community Care, 6 Gem Street, Strathnairn ACT 2615");
