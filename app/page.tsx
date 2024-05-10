import Footer from "./ui/footer";
import HeaderMenu from "./ui/header";
import FeactureHome from "./ui/home/feature";
import GetSarted from "./ui/home/get-started";
import Integrations from "./ui/home/integrations";
import LatestUpdates from "./ui/home/latestUpdates";
import MainSection from "./ui/home/main-section";
import Partners from "./ui/home/partners";
import Testimonios from "./ui/home/testimonios";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactForm from "./ui/blog/contact-form";
import Identity from "./ui/aboutUS/identity";
import Feactures, { Coaching } from "./ui/services/feature";

export default function Home() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <Identity />
      <Feactures />

      <Integrations />

      <Testimonios />
      <Coaching />
      <ContactForm />
      <Footer />
    </>
  );
}
