import Footer from "./ui/footer";
import HeaderMenu from "./ui/header";
import FeactureHome from "./ui/home/feature";
import GetSarted from "./ui/home/get-started";
import Integrations from "./ui/home/integrations";
import LatestUpdates from "./ui/home/latestUpdates";
import MainSection from "./ui/home/main-section";
import Partners from "./ui/home/partners";
import Testimonios from "./ui/home/testimonios";

export default function Home() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <Partners />
      <FeactureHome />
      <Integrations />
      <GetSarted />
      <Testimonios />
      <LatestUpdates />
      <Footer />
    </>
  );
}
