'use client';

import { useEffect } from 'react';

export default function ProfitPerformanceCallPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal("init", "45-min-meeting", { origin: "https://cal.com" });
        window.Cal.ns["45-min-meeting"]("inline", {
          elementOrSelector: "#my-cal-inline",
          config: { layout: "month_view" },
          calLink: "lauren-percival-xz8hq3/45-min-meeting",
        });
        window.Cal.ns["45-min-meeting"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      }
    };

    return () => {
      const calScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (calScript) document.head.removeChild(calScript);
    };
  }, []);

  return (
    <div
      id="my-cal-inline"
      style={{ width: '100%', height: '700px', overflow: 'auto' }}
    />
  );
}
