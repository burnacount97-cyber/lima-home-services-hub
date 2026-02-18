import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";

import gasfiteriaImg from "@/assets/gasfiteria.jpg";
import electricidadImg from "@/assets/electricidad.jpg";
import pinturaImg from "@/assets/pintura.jpg";
import drywallImg from "@/assets/drywall.jpg";
import cerrajeriaImg from "@/assets/cerrajeria.jpg";

const serviceCards = [
  { name: "Gasfitería", slug: "gasfiteria", image: gasfiteriaImg },
  { name: "Electricidad", slug: "electricidad", image: electricidadImg },
  { name: "Pintura", slug: "pintura", image: pinturaImg },
  { name: "Drywall", slug: "drywall", image: drywallImg },
  { name: "Cerrajería", slug: "cerrajeria", image: cerrajeriaImg },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="px-4 pt-10 pb-4 text-center md:pt-16 md:pb-8">
        <h1 className="font-display text-3xl font-bold text-foreground opacity-0 animate-fade-up md:text-5xl">
          Servicios de Mantenimiento
        </h1>
        <p className="mt-3 text-lg text-muted-foreground opacity-0 animate-fade-up md:text-xl" style={{ animationDelay: "100ms" }}>
          Profesionales de confianza en Chorrillos y Surco
        </p>
      </header>

      {/* Service Cards */}
      <section className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 pb-24 md:grid-cols-3 md:gap-4">
        {serviceCards.map((service, i) => (
          <ServiceCard key={service.slug} {...service} index={i} />
        ))}
      </section>

      <WhatsAppButton />
    </main>
  );
};

export default Index;
