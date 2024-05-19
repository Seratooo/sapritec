import ExploreMore from "../ui/services/explore-more";
import FeacturePageFeature from "../ui/services/feature";
import MainSection from "../ui/services/main-section";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <div className="mt-16  p-4">
        <div className="flex gap-24 flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-bold md:max-w-20">
                Soluções analíticas
              </h3>
              <p className="text-md text-gray-400 md:max-w-[21rem] leading-[1.8]">
                Na Sapritec, oferecemos serviços especializados em Data Science
                e Business Intelligence, uma ferramenta poderosa para desvendar
                os segredos ocultos nos dados. Em termos simples, Data Science é
                como uma lupa que amplia a compreensão dos dados, revelando
                padrões, tendências e insights valiosos.
              </p>
            </div>
            <div>
              <Image
                src={"/assets/services/analyticsSolutions.png"}
                width={727}
                height={400}
                alt="service"
                className="rounded-md"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-bold md:max-w-20">
                Inteligência Artificial
              </h3>
              <p className="text-md text-gray-400 md:max-w-[21rem] leading-[1.8]">
                Na Sapritec, oferecemos serviços especializados em Data Science,
                uma ferramenta poderosa para desvendar os segredos ocultos nos
                dados. Em termos simples, Data Science é como uma lupa que
                amplia a compreensão dos dados, revelando padrões, tendências e
                insights valiosos.
              </p>
            </div>
            <div>
              <Image
                src={"/assets/services/analyticsSolutions.png"}
                width={727}
                height={400}
                alt="service"
                className="rounded-md"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/*<FeacturePageFeature />*/}
      <ExploreMore />
      <Footer />
    </>
  );
}
