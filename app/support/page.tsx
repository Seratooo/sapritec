import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import NeedHelp from "../ui/support/help";
import ProductSupport from "../ui/support/main-section";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <ProductSupport />
      <NeedHelp />
      <Footer />
    </>
  );
}
