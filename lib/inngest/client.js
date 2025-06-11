import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "BadgetBuddy.AI", // Unique app ID
  name: "BadgetBuddy.AI", // App name
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
