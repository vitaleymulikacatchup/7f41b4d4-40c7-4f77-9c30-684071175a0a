import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import PricingSplitCards from '@/components/sections/pricing/PricingSplitCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';

export default function App() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="Morning Brew"
      navItems={[
        {
          name: "Home",
          href: "#hero",
        },
        {
          name: "Menu",
          href: "#products",
        },
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ]}
      ctaButton={{
        text: "Order Online",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      tag="Artisan Roasts"
      title="Awaken Your Senses with Morning Brew"
      description="Handcrafted coffee, ethically sourced and roasted to perfection. Experience the art of the perfect pour, one cup at a time."
      primaryButton={{
        text: "View Menu",
        href: "#products",
      }}
      secondaryButton={{
        text: "Visit Us",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fweblo",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6nh0oa",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=5d94eq",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bcgs72",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xvfjb6",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=41i793",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonial
      tag="Our Story"
      quote="Morning Brew isn't just a coffee shop; it's a sanctuary for the neighborhood. We pour passion, skill, and sustainably grown beans into every single cup."
      author="Elena Rossi"
      role="Founder & Head Barista"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9koa11"
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesTaggedCards
      tag="Our Commitment"
      title="Excellence in Every Cup"
      description="We take pride in our craft, ensuring the highest standards of quality from bean to cup."
      items={[
        {
          tag: "Sourcing",
          title: "Ethical Beans",
          description: "Direct trade partnerships with sustainable family farms.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7t61qn",
        },
        {
          tag: "Craft",
          title: "Expert Roasting",
          description: "Small-batch roasting for peak flavor development.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dhnntd",
        },
        {
          tag: "Service",
          title: "Artisan Brewing",
          description: "Precision methods for perfectly extracted espresso.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0ey7g9",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <PricingSplitCards
      tag="Signature Menu"
      title="Crafted Classics"
      description="Discover our curated selection of signature coffee drinks."
      plans={[
        {
          tag: "Popular",
          price: "$4.50",
          period: "cup",
          description: "The perfect daily espresso.",
          primaryButton: {
            text: "Order",
            href: "#contact",
          },
          featuresTitle: "Includes",
          features: [
            "Double shot",
            "Organic roast",
            "Milk option",
          ],
        },
        {
          tag: "Signature",
          price: "$5.75",
          period: "cup",
          description: "Artisan milk art experience.",
          primaryButton: {
            text: "Order",
            href: "#contact",
          },
          featuresTitle: "Includes",
          features: [
            "Velvety foam",
            "Signature bean",
            "Barista choice",
          ],
        },
        {
          tag: "Refresh",
          price: "$6.00",
          period: "cup",
          description: "Smooth cold brew goodness.",
          primaryButton: {
            text: "Order",
            href: "#contact",
          },
          featuresTitle: "Includes",
          features: [
            "Slow steeped",
            "Ice blend",
            "Smooth finish",
          ],
        },
        {
          tag: "Classic",
          price: "$4.00",
          period: "cup",
          description: "Rich black americano.",
          primaryButton: {
            text: "Order",
            href: "#contact",
          },
          featuresTitle: "Includes",
          features: [
            "Double shot",
            "Hot water",
            "Bold roast",
          ],
        },
        {
          tag: "Treat",
          price: "$6.50",
          period: "cup",
          description: "Sweet chocolate harmony.",
          primaryButton: {
            text: "Order",
            href: "#contact",
          },
          featuresTitle: "Includes",
          features: [
            "Organic cocoa",
            "Steamed milk",
            "Espresso base",
          ],
        },
        {
          tag: "Smooth",
          price: "$5.00",
          period: "cup",
          description: "Silky flat white texture.",
          primaryButton: {
            text: "Order",
            href: "#contact",
          },
          featuresTitle: "Includes",
          features: [
            "Balanced roast",
            "Microfoam",
            "Perfect ratio",
          ],
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsFeatureCards
      tag="Our Impact"
      title="Community Stats"
      description="By the numbers: your daily coffee impact."
      metrics={[
        {
          value: "12,000+",
          title: "Cups Served",
          features: [
            "Since opening",
            "Neighborhood favorite",
          ],
        },
        {
          value: "8+",
          title: "Farmer Partners",
          features: [
            "Direct trade",
            "Ethical sourcing",
          ],
        },
        {
          value: "5+",
          title: "Roast Profiles",
          features: [
            "Hand-selected",
            "Custom crafted",
          ],
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialMarqueeCards
      tag="Kind Words"
      title="Loved by the Neighborhood"
      description="What our wonderful regulars are saying about us."
      testimonials={[
        {
          name: "Alex P.",
          role: "Daily Regular",
          quote: "The best espresso in the city, hands down.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=jvdxuj",
        },
        {
          name: "Sarah J.",
          role: "Digital Nomad",
          quote: "Perfect atmosphere for getting work done.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j2ie1u",
        },
        {
          name: "Mike T.",
          role: "Foodie",
          quote: "You can truly taste the quality difference.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=bnl07c",
        },
        {
          name: "Emily K.",
          role: "Morning Commuter",
          quote: "Friendly staff, consistent roast quality.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=plhbnl",
        },
        {
          name: "David R.",
          role: "Local Resident",
          quote: "My morning ritual wouldn't be complete.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=mtvatr",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSimple
      tag="Common Questions"
      title="Need Help?"
      description="Answers to your burning coffee questions."
      items={[
        {
          question: "Do you offer milk alternatives?",
          answer: "Yes, we offer oat, almond, and soy milk for all our drinks.",
        },
        {
          question: "Can I buy beans to brew at home?",
          answer: "Absolutely! We sell our signature blends by the bag in-store.",
        },
        {
          question: "Are you open on weekends?",
          answer: "Yes, we are open 8 AM - 6 PM every day of the week.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCta
      tag="Visit Us"
      text="Find us at 123 Coffee Lane, City Center. Come in for a cup or place a large order online."
      primaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com",
      }}
      secondaryButton={{
        text: "Contact Support",
        href: "mailto:hello@morningbrew.com",
      }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleCard
      brand="Morning Brew"
      columns={[
        {
          title: "Menu",
          items: [
            {
              label: "Espresso",
              href: "#products",
            },
            {
              label: "Signature",
              href: "#products",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Impact",
              href: "#metrics",
            },
          ],
        },
      ]}
      copyright="© 2024 Morning Brew Coffee Co."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
    />
  </div>
    </>
  );
}
