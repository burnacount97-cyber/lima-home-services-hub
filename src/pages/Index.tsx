import ServiceCard from "@/components/ServiceCard";

import gasfiteriaImg from "@/assets/gasfiteria.jpg";
import electricidadImg from "@/assets/electricidad.jpg";
import pinturaImg from "@/assets/pintura.jpg";
import drywallImg from "@/assets/drywall.jpg";
import cerrajeriaImg from "@/assets/cerrajeria.jpg";
import carpinteriaImg from "@/assets/carpinteria.jpg";

const serviceCards = [
  { name: "Gasfitería", slug: "gasfiteria", image: gasfiteriaImg },
  { name: "Electricidad", slug: "electricidad", image: electricidadImg },
  { name: "Pintura", slug: "pintura", image: pinturaImg },
  { name: "Drywall", slug: "drywall", image: drywallImg },
  { name: "Cerrajería", slug: "cerrajeria", image: cerrajeriaImg },
  { name: "Carpintería", slug: "carpinteria", image: carpinteriaImg },
];

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Header */}
      <header className="px-4 pt-6 pb-2 text-center md:pt-12 md:pb-6">
        <h1 className="font-display text-2xl font-bold text-foreground opacity-0 animate-fade-up md:text-5xl">
          Servicios de Mantenimiento
        </h1>
        <p className="mt-2 text-base text-muted-foreground opacity-0 animate-fade-up md:text-xl" style={{ animationDelay: "100ms" }}>
          Profesionales de confianza en Chorrillos y Surco
        </p>
      </header>

      {/* Service Cards - 3 rows x 2 cols filling screen */}
      <section className="mx-auto grid flex-1 w-full max-w-5xl grid-cols-2 grid-rows-3 gap-2 px-3 pb-4 md:grid-cols-3 md:grid-rows-2 md:gap-4 md:px-4 md:pb-8">
        {serviceCards.map((service, i) => (
          <ServiceCard key={service.slug} {...service} index={i} />
        ))}
      </section>

    </main>
  );
};

export default Index;
