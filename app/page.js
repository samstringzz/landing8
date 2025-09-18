import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import ExpertAreas from "@/components/ExpertAreas";
import Feedback from "@/components/Feedback";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Tagline from "@/components/Tagline";
import Products from "@/components/Products";
import Newsletter from "@/components/Newsletter";
import OridoLayout from "@/layouts/OridoLayout";

import dynamic from "next/dynamic";
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/components/Partners"), {
  ssr: false,
});

const Index = () => {
  return (
    <OridoLayout>
      {/* HERO */}
      <Home />
      {/* /HERO */}
      
      {/* GALLERY */}
      <Gallery />
      {/* /GALLERY */}
      
      {/* EVENTS */}
      <Events />
      {/* /EVENTS */}
      
      {/* TAGLINE */}
      <Tagline />
      {/* /TAGLINE */}
      
      {/* SERVICES */}
      <Services />
      {/* /SERVICES */}
      
      {/* TESTIMONIALS */}
      <Feedback />
      {/* /TESTIMONIALS */}
      
      {/* PRODUCTS */}
      <Products />
      {/* /PRODUCTS */}
      
      {/* CONTACT */}
      <Newsletter />
      {/* /CONTACT */}
    </OridoLayout>
  );
};
export default Index;
