import Image from "next/image";
import AllPosts from "../ui/blog/all-posts";
import ContactForm from "../ui/blog/contact-form";
import LatestPosts from "../ui/blog/latest-posts";
import MainSection from "../ui/blog/main-section";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";
import { Rowdies } from "next/font/google";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const rowdies = Rowdies({
  style: ["normal"],
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <HeaderMenu />

      <main
        className="flex flex-col-reverse md:flex-row gap-20 px-4 pt-8 pb-20 md:py-32 items-center justify-center"
        id="contactus"
      >
        <div className="flex flex-col gap-4">
          <h3
            className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
          >
            Entre em contato hoje.
          </h3>
          <form className="flex flex-col gap-4 w-full md:w-auto">
            <div className="">
              <input
                type="text"
                required
                name=""
                id=""
                placeholder="Seu nome"
                className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                required
                name=""
                id=""
                placeholder="Email"
                className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
              />
            </div>

            <div>
              <textarea
                name=""
                required
                id=""
                cols={30}
                placeholder="Como podemos ajudar?"
                rows={5}
                className="w-full text-sm text-gray-400 p-3  border bg-black border-gray-600 rounded-md"
              ></textarea>
            </div>
            <button
              className="bg-sky-600 px-4 py-2 text-md rounded-md md:self-start font-thin hover:bg-[#00152A] transition-all duration-300 shadow-2xl"
              type="submit"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
        <div className="bg-[#00152A] border-[3px] border-sky-600 rounded-md overflow-hidden">
          <Image
            src={"/assets/contact-page.png"}
            width={755}
            height={341}
            alt="Contact form"
            className="rounded-md"
          />
          <div className="border-[3px] border-sky-600 m-8 px-8 py-4 rounded-md space-y-4">
            <div className="flex gap-4">
              <MapPin />
              <p>Belas Business, Edf.Bengo Apt 410-411</p>
            </div>
            <div className="flex gap-4">
              <Mail />
              <p>geral@sapritec.com</p>
            </div>
            <div className="flex gap-4">
              <Phone />
              <p>(+244) 923 304 860</p>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-gradient-to-b from-[#00152A] to-black px-4 py-24 md:py-32 flex flex-col items-center gap-4">
        <h3
          className={`text-2xl 2xl:text-3xl text-center uppercase ${rowdies.className}`}
        >
          Perguntas Frequentes
        </h3>
        <p className="font-thin text-lg text-sky-500">
          Exercitation dolore reprehenderit fugi
        </p>
        <div className="w-full max-w-[60rem]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I unsubscribe from Nature News?
              </AccordionTrigger>
              <AccordionContent className="font-thin text-gray-300">
                To designate your donation to a specific area or project, send
                us a note with your donation by mail. We'll allocate it
                accordingly and send you an acknowledgment. If donating by
                phone, inform the representative about your preference. Online
                donations do not renew memberships and can only be allocated to
                states or countries, not individual projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I volunteer with The Nature Guardians?
              </AccordionTrigger>
              <AccordionContent className="font-thin text-gray-300">
                To designate your donation to a specific area or project, send
                us a note with your donation by mail. We'll allocate it
                accordingly and send you an acknowledgment. If donating by
                phone, inform the representative about your preference. Online
                donations do not renew memberships and can only be allocated to
                states or countries, not individual projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent className="font-thin text-gray-300">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
}
