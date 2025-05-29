import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

type Package = {
  name: string;
  bestFor: string;
  items: string[];
  cta?: string;
  link?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
};

type PackageSection = {
  title: string;
  description: string;
  packages: Package[];
};

const packages: PackageSection[] = [
  {
    title: "Profit Checks",
    description: "Quick, low-commitment reviews designed to flag CAC issues, ROAS traps or missed margin opportunities - ideal for founders needing clarity, fast.",
    packages: [
      {
        name: "Profit Pulse Check",
        bestFor: "Quick profit leak detection",
        link: "/ecommerce-profit-audit",
        items: [
          "Snapshot of Gross and Net Profit Margins",
          "CAC vs Revenue vs Key Cost signals",
          "Top 1–2 margin opportunities flagged",
          "PDF Summary + optional 15-min clarity call"
        ]
      }
    ]
  },
  {
    title: "Ratio-Based Audits",
    description: "Strategic audits built to align your media, CRM, and site with actual profit drivers like LTV, CAC, MER and EBITDA.",
    packages: [
      {
        name: "Second Opinion: Channel Performance Review",
        bestFor: "Founders reviewing agency or channel waste",
        link: "/second-opinion-audit",
        items: [
          "Channel-by-channel performance review",
          "Benchmarks for ROAS, CAC, LTV vs sector",
          "Clear view of spend waste or misalignment",
          "Top 5 profit-first priorities to action",
          "Optional: Validate agency strength"
        ]
      },
      {
        name: "Profit Ratio Audit",
        bestFor: "Challenging your agency or internal strategy",
        link: "/profit-ratio-audit",
        items: [
          "Full-funnel digital audit: acquisition to conversion",
          "Breakdown of ROAS, MER, CAC & LTV:CAC",
          "Benchmarks vs competitors + red flags",
          "Top 5 Fix / Scale / Stop opportunities",
          "PDF Summary + 30-min Profit Clarity Session"
        ]
      },
      {
        name: "LTV-Backed Scale Plan",
        bestFor: "Founders & teams ready to scale profitably",
        link: "/lifetime-value-backed-scale-plan",
        items: [
          "Includes the full Profit Ratio Audit",
          "LTV:CAC modelling + retention strategy",
          "12-month profit-led growth roadmap",
          "Quick wins + scalable growth layers",
          "60-min team alignment session included"
        ]
      }
    ]
  },
  {
    title: "Forecasting & Commercial Planning",
    description: "Strategic forecasting delivered in-house – not a plug-and-play template. Built on analyst-grade logic, tailored to your targets, and delivered as a clean, client-ready file.",
    packages: [
      {
        name: "Profit Forecast Tracker",
        bestFor: "Brands who want a clear view of monthly profit performance without building the backend",
        link: "/profit-forecast-tracker",
        items: [
          "Strategic Excel forecast built from your inputs – no setup required",
          "Actual vs Pro-Rated view of profit by channel",
          "Sessions, CVR, AOV, spend, ROI – all mapped to your current trading patterns",
          "Delivered one-off or monthly, tailored to targets and budget planning",
          "Includes walkthrough call or Loom, plus 30-min Q&A session"
        ]
      }
    ]
  },
  {
    title: "Revenue-to-Profit Planning",
    description: "Done-for-you 12-month growth plans - rooted in your financial goals, designed to turn media into margin. This is fractional CSO thinking, delivered in full.",
    packages: [
      {
        name: "Q4 Profit Planning Sprint",
        bestFor: "Peak season planning without the chaos",
        link: "/q4-profit-planning-sprint",
        items: [
          "Profit-first campaign framework",
          "Black Friday + peak planning calendar",
          "CAC targets + spend by channel",
          "Roles, timings, and metrics clarified",
          "4-page PDF plan + strategy walkthrough"
        ]
      },
      {
        name: "Revenue-to-Profit Blueprint",
        bestFor: "Brands scaling from 6 to 8 figures",
        link: "/revenue-to-profit-blueprint",
        items: [
          "Channel-by-channel annual growth plan",
          "Revenue, CAC & MER targets by month",
          "Media + margin plan to hit EBITDA goals",
          "Weekly actions mapped to business cadence",
          "Used by CEOs to align team, agency & board"
        ],
        testimonial: {
          quote: "The Gross Demand Plan helped us translate ambition into measurable weekly goals - it keeps us accountable and focused.",
          author: "- Laundry B"
        }
      }
    ]
  },
  {
    title: "Investor-Grade Launch Planning",
    description: "For new brands, new ranges or capital raises. Commercial clarity and CAC control - delivered with investor-grade polish.",
    packages: [
      {
        name: "Essentials Launch Plan",
        bestFor: "Launching with financial clarity",
        link: "/essentials-launch-planning",
        items: [
          "5-Year Commercial Forecast with P&L logic",
          "Monthly + regional revenue breakdowns",
          "Channel-level ROI and CAC targets",
          "KPI dashboard aligned to growth goals",
          "Go-to-market clarity for teams + investors"
        ]
      },
      {
        name: "Full-Funnel Profit Launch",
        bestFor: "Brands with paid, DTC + wholesale ambitions",
        link: "/Full-Funnel-Profit-Launch-for-eCommerce",
        items: [
          "Everything in the Essentials Plan",
          "Channel-level CAC & ROAS forecasts",
          "Full-funnel strategy: acquisition to retention",
          "Investor-ready metrics & KPI dashboards",
          "Strategic support during launch phase"
        ]
      },
      {
        name: "Bespoke Investor Plan",
        bestFor: "Investor, pitch deck or acquisition planning",
        link: "/bespoke-investor-plan",
        items: [
          "Custom commercial strategy + forecast model",
          "Investor-grade pitch deck + KPI scorecard",
          "Optional long-term advisory or NED-style support",
          "Tailored to your tech stack & investor goals",
          "Built for brands raising serious capital"
        ]
      }
    ]
  }
];

const DigitalStrategyPackagesPage = () => {
  return (
    <>
      <Head>
        <title>Profit Strategy Packages | LTV, CAC & ROI-Based Planning</title>
        <meta
          name="description"
          content="Explore strategy packages designed around LTV, CAC, MER and EBITDA. Ratio-based audits, investor-grade launch plans and profit-first growth strategy."
        />
      </Head>

      <MainLayout>
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Profit Strategy Packages</h1>
          <p className="text-lg text-zinc-600 mb-10">
            Whether you're stuck, scaling, or starting fresh – every plan here ties your growth goals to your bottom line.
          </p>

              {packages.map((section) => (
      <div key={section.title} className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-800 mb-2">{section.title}</h2>
        <p className="text-zinc-700 mb-4">{section.description}</p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full table-fixed border border-zinc-700 text-left text-sm md:text-base">
            <thead className="bg-zinc-100 text-black">
              <tr>
                <th className="p-4 w-1/6">Package</th>
                <th className="p-4 w-1/5">Best For</th>
                <th className="p-4 w-1/2">What You Get</th>
                <th className="p-4 w-1/6">Availability</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-zinc-700">
              {section.packages.map((pkg) => (
                <React.Fragment key={pkg.name}>
                  <tr>
            <td className="p-4 text-white font-semibold">
              {pkg.link ? (
                <a href={pkg.link} className="text-zinc-600 underline hover:text-zinc-900">
                  {pkg.name}
                </a>
              ) : (
                pkg.name
              )}
            </td>
                    <td className="p-4">{pkg.bestFor}</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside space-y-1">
                        {pkg.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 italic text-zinc-400">
                      Discuss in discovery session
                    </td>
                  </tr>
                  {pkg.testimonial && (
                    <tr>
                      <td colSpan={5} className="italic text-zinc-400 px-4 py-6">
                        “{pkg.testimonial.quote}” <span className="not-italic">{pkg.testimonial.author}</span>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {section.packages.map((pkg) => (
            <div key={pkg.name} className="border border-zinc-700 rounded-xl p-4 bg-zinc-900">
                  <p className="text-sm text-zinc-300 italic mb-3">{pkg.bestFor}</p>
              <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1 mb-4">
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {pkg.link && (
                <a
                  href={pkg.link}
                  className="inline-block mt-2 text-sm font-semibold text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  View Package →
                </a>
              )}
              {pkg.testimonial && (
                <p className="mt-4 text-sm text-zinc-400 italic border-t border-zinc-700 pt-3">
                  “{pkg.testimonial.quote}” <br />
                  <span className="not-italic">{pkg.testimonial.author}</span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}


          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Every service begins with a clarity call.
            </h3>
            <p className="text-zinc-600 mb-6">
              If you're serious about tying growth to real profit outcomes, let's talk.
            </p>
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 text-black font-semibold border border-black rounded-full transition-transform duration-200 hover:bg-black hover:text-white hover:scale-105"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default DigitalStrategyPackagesPage;
