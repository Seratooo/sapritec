import AllPosts from "../ui/blog/all-posts";
import ContactForm from "../ui/blog/contact-form";
import LatestPosts from "../ui/blog/latest-posts";
import MainSection from "../ui/blog/main-section";
import Footer from "../ui/footer";
import HeaderMenu from "../ui/header";

export default function Page() {
  return (
    <>
      <HeaderMenu />
      <MainSection />
      <LatestPosts />
      <AllPosts />
      <ContactForm />
      <Footer />
    </>
  );
}
