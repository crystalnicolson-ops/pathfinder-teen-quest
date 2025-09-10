// Centralized payment configuration for Stripe Payment Links
// TODO: Paste your live/test Stripe Payment Link URL below.
// Example: https://buy.stripe.com/test_1234567890abcdef
export const PAYMENT_LINK_URL = "https://buy.stripe.com/28EdR13aR41Y95w9xe8bS00";

// Success signal used when redirecting back from Stripe (configure in your Payment Link)
// Example: set the success redirect to: https://your-site.com/detailed-results?paid=1
export const PAYMENT_SUCCESS_PARAM = "paid";
export const PAYMENT_SUCCESS_VALUE = "1";
