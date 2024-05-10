import ExploreMore from "../ui/services/explore-more";
import FeacturePageFeature from "../ui/services/feature";
import MainSection from "../ui/services/main-section";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <FeacturePageFeature />
      <ExploreMore />
      <Footer />
    </>
  );
}
