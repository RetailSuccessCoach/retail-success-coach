// src/lib/gtag.ts

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-J646JT4TXL"; // Your actual GA4 ID

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } else {
    console.warn("GA4 not ready: pageview not tracked");
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  } else {
    console.warn("GA4 not ready: event not tracked", { action, category, label });
  }
};
