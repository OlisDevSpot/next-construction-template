import { Hero } from "./_components/Hero";
import { MinorSection } from "./_components/MinorSection";
import { MainSection } from "./_components/MainSection";
import { CompanyStats } from "./_components/CompanyStats";
import { ProjectCarousel } from "./_components/ProjectCarousel";
import { OwnerQuote } from "./_components/OwnerQuote";
import { CompanyBenefits } from "./_components/CompanyBenefits";
import { WhyLosAngeles } from "./_components/WhyLosAngeles";
import { COMPANY_INFO } from "@/data/companyInfo";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <MinorSection>
        <CompanyStats />
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
