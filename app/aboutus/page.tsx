import Identity from "../ui/aboutUS/identity";
import JoinOurTeam from "../ui/aboutUS/joinOuTeam";
import MainSection from "../ui/aboutUS/main-section";
import OurTeam from "../ui/aboutUS/our-team";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <Identity />
      <JoinOurTeam />
      <Footer />
    </>
  );
}
