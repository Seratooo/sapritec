import CardIntegrations from "../ui/cardIntegrations";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import MainSection from "../ui/integrations/main-section";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <div className="flex flex-col gap-8 justify-center px-4 lg:px-12 py-8 lg:max-w-screen-xl m-auto">
        <p className="text-md text-gray-300 font-bold">Notifications</p>
        <div className="flex gap-8">
          <CardIntegrations />
          <CardIntegrations />
          <CardIntegrations />
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-center px-4 lg:px-12 py-8 lg:max-w-screen-xl m-auto">
        <p className="text-md text-gray-300 font-bold">SOO/ALMs</p>
        <div className="flex flex-wrap gap-8">
          <CardIntegrations />
          <CardIntegrations />
          <CardIntegrations />
          <CardIntegrations />
          <CardIntegrations />
          <CardIntegrations />
        </div>
      </div>
      <Footer />
    </>
  );
}
