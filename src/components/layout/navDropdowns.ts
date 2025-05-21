// navDropdowns.ts — The Retail Success Coach navigation structure

export type DropdownItem = {
  title: string;
  description?: string;
  href: string;
};

export type DropdownSection = {
  title: string;
  items: DropdownItem[];
};

export type NavDropdown = {
  title: string;
  sections: DropdownSection[];
};

const solutionsDropdown: NavDropdown = {
  title: "Solutions",
  sections: [
    {
      title: "Revenue-to-Profit Planning",
      items: [
        {
          title: "Q4 Profit Planning Sprint",
          description: "Map your Black Friday & Peak Season plan by margin and channel",
          href: "/q4-profit-planning-sprint",
        },
        {
          title: "Revenue-to-Profit Blueprint",
          description: "Build your profit engine with a CSO-level strategy",
          href: "/revenue-to-profit-blueprint",
        }
      ],
    },
    {
      title: "Ratio-Based Audits",
      items: [
        {
          title: "Second-Opinion Audit",
          description: "A fresh pair of expert eyes on your agency or media setup",
          href: "/second-opinion-audit",
        },
        {
          title: "Profit Ratio Audit",
          description: "Full-funnel breakdown of CAC, ROAS, LTV and spend efficiency",
          href: "/profit-ratio-audit",
        },
        {
          title: "LTV-Backed Scale Plan",
          description: "12-month roadmap based on your most valuable customers",
          href: "/lifetime-value-backed-scale-plan",
        },
      ],
    },
    {
      title: "Investor-Grade Launch Planning",
      items: [
        {
          title: "Essentials Launch Plan",
          description: "For new brands or ranges needing commercial clarity",
          href: "/essentials-launch-planning",
        },
        {
          title: "Full-Funnel Profit Launch",
          description: "Launch with ROAS, CAC and retention mapped from day one",
          href: "/Full-Funnel-Profit-Launch-for-eCommerce",
        },
        {
          title: "Bespoke Investor Plan",
          description: "Tailored strategy and forecasts for capital raises or exits",
          href: "/bespoke-investor-plan",
        }
      ],
    },
    {
      title: "Profit Checks",
      items: [
        {
          title: "Profit Pulse Check",
          description: "Quick snapshot of margin and spend health",
          href: "/ecommerce-profit-audit",
        }
      ],
    }
  ]
};


export const navDropdowns: NavDropdown[] = [solutionsDropdown];
