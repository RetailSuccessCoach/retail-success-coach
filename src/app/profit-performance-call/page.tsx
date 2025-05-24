'use client';

import { useEffect } from 'react';

export default function ProfitPerformanceCallPage() {
  useEffect(() => {
    if (window.Cal && window.Cal.ns && window.Cal.ns["45-min-meeting"]) {
      window.Cal("init", "45-min-meeting", { origin: "https://cal.com" });
      window.Cal.ns["45-min-meeting"]("inline", {
        elementOrSelector: "#my-cal-inline",
        config: { layout: "month_view" },
        calLink: "lauren-percival-xz8hq3/45-min-meeting",
      });
      window.Cal.ns["45-min-meeting"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    } else {
      console.error("Cal embed script not loaded or Cal namespace missing");
    }
  }, []);

  return (
    <div
      id="my-cal-inline"
      style={{ width: '100%', height: '700px', overflow: 'auto' }}
    />
  );
}
