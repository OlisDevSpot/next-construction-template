import Hero from "./_components/Hero";
import { MainSection } from "./_components/MainSection";
import { ProjectCarousel } from "./_components/ProjectCarousel";
import { CompanyBenefits } from "./_components/CompanyBenefits";
import { WhyLosAngeles } from "./_components/WhyLosAngeles";
import { COMPANY_INFO } from "@/data/companyInfo";
import { MinorSection } from "./_components/MinorSection";
import { OwnerQuote } from "./_components/OwnerQuote";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <MinorSection>
        <div className="w-full grid gap-4">
          {COMPANY_INFO.stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden flex gap-2 items-center justify-between border border-neutral-600 rounded-lg p-8 text-center"
            >
              <stat.icon
                size={120}
                className="absolute z-[-1] text-neutral-700 top-1/2 -translate-y-1/2 left-0 -translate-x-1/3"
              />
              <h3 className="text-5xl font-semibold ml-6">{stat.value}</h3>
              <span className="text-neutral-300 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </MinorSection>
      <MainSection
        heading={sections[0].heading}
        subtitle={sections[0].subtitle}
      >
        <ProjectCarousel />
      </MainSection>
      <MinorSection className="flex flex-col gap-8">
        <OwnerQuote />
      </MinorSection>
      <MainSection
        heading={sections[1].heading}
        subtitle={sections[1].subtitle}
      >
        <WhyLosAngeles />
      </MainSection>
      <MainSection
        heading={sections[2].heading}
        subtitle={sections[2].subtitle}
      >
        <CompanyBenefits />
      </MainSection>
    </div>
  );
}

const FinishHeading = (
  <>
    The{" "}
    <span className="text-primary block tracking-wide">
      {COMPANY_INFO.alias}
    </span>{" "}
    Finish
  </>
);

const DifferenceHeading = (
  <>
    The{" "}
    <span className="text-primary block tracking-wide">
      {COMPANY_INFO.alias}
    </span>{" "}
    Difference
  </>
);

const sections = [
  {
    heading: FinishHeading,
    subtitle: "Your home deserves more. Give it what it needs.",
  },
  {
    heading: "Building Momentum in a Hot Market",
    subtitle: "Why Invest in L.A.",
  },
  {
    heading: DifferenceHeading,
    subtitle: "Standing Above The Rest",
  },
];
