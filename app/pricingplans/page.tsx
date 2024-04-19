import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import Integrations from "../ui/home/integrations";
import Plans from "../ui/pricingPlans/plans";
import Pricing from "../ui/pricingPlans/pricing";
import Questions from "../ui/pricingPlans/questions";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <Pricing />
      <Plans />
      <Integrations />
      <Questions />
      <Footer />
    </>
  );
}
