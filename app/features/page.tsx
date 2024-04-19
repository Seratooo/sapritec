import ExploreMore from "../ui/features/explore-more";
import FeacturePageFeature from "../ui/features/feature";
import MainSection from "../ui/features/main-section";
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
