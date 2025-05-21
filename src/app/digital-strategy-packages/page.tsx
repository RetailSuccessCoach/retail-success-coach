import React from "react";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";

type Package = {
  name: string;
  price: string;
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
        price: "£295",
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
        price: "£750",
        bestFor: "Founders reviewing agency or channel waste",
        link: "/second-opinion-channel-audit",
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
        price: "£1,250",
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
        price: "£2,950",
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
    title: "Revenue-to-Profit Planning",
    description: "Done-for-you 12-month growth plans - rooted in your financial goals, designed to turn media into margin. This is fractional CSO thinking, delivered in full.",
    packages: [
      {
        name: "Q4 Profit Planning Sprint",
        price: "£1,950",
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
        price: "From £7,500",
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
        price: "£3,750",
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
        price: "£6,950",
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
        price: "From £9,950",
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
          <p className="text-lg text-zinc-300 mb-10">
            Whether you're stuck, scaling, or starting fresh - every plan here ties your growth goals to your bottom line.
          </p>

          {packages.map((section) => (
            <div key={section.title} className="mt-12">
              <h2 className="text-2xl font-semibold text-white mb-2">{section.title}</h2>
              <p className="text-zinc-400 mb-4">{section.description}</p>

              <div className="overflow-x-auto">
                <table className="min-w-full table-fixed border border-zinc-700 text-left text-sm md:text-base">
                  <thead className="bg-zinc-800 text-white">
                    <tr>
                      <th className="p-4 w-1/6">Package</th>
                      <th className="p-4 w-1/12">Price</th>
                      <th className="p-4 w-1/5">Best For</th>
                      <th className="p-4 w-1/2">What You Get</th>
                      <th className="p-4 w-1/6">Availability</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300 divide-y divide-zinc-700">
                    {section.packages.map((pkg) => (
                      <React.Fragment key={pkg.name}>
                        <tr>
                          <td className="p-4 font-medium text-white">
                            {pkg.link ? (
                              <a href={pkg.link} className="underline hover:text-zinc-300">
                                {pkg.name}
                              </a>
                            ) : (
                              pkg.name
                            )}
                          </td>
                          <td className="p-4">{pkg.price}</td>
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
            </div>
          ))}

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Every service begins with a clarity call.
            </h3>
            <p className="text-zinc-400 mb-6">
              If you're serious about tying growth to real profit outcomes, let's talk.
            </p>
            <a
              href="/profit-performance-call"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition"
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
