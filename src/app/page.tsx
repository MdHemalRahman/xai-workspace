import HeroSection from "@/components/Hero/HeroSection";
import InsightFlow from "@/components/InsightFlow/InsightFlow";
import Dashboard from "@/components/Dashboard/Dashboard";
import WowMoment from "@/components/WowMoment/WowMoment";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InsightFlow />
      <Dashboard />
      <WowMoment />
    </main>
  );
}
