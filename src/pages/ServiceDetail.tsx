import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import TestimonialCard from "@/components/TestimonialCard";
import WhatsAppButton from "@/components/WhatsAppButton";

import gasfiteriaImg from "@/assets/gasfiteria.jpg";
import electricidadImg from "@/assets/electricidad.jpg";
import pinturaImg from "@/assets/pintura.jpg";
import drywallImg from "@/assets/drywall.jpg";
import cerrajeriaImg from "@/assets/cerrajeria.jpg";
import carpinteriaImg from "@/assets/carpinteria.jpg";

const imageMap: Record<string, string> = {
  gasfiteria: gasfiteriaImg,
  electricidad: electricidadImg,
  pintura: pinturaImg,
  drywall: drywallImg,
  cerrajeria: cerrajeriaImg,
  carpinteria: carpinteriaImg,
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Servicio no encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-accent underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const heroImage = imageMap[service.slug];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img
          src={heroImage}
          alt={service.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="service-card-overlay absolute inset-0" />
        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
          <Link
            to="/"
            className="flex w-fit items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
          <div>
            <h1 className="font-display text-4xl font-bold text-primary-foreground text-shadow opacity-0 animate-fade-up md:text-6xl">
              {service.name}
            </h1>
            <p className="mt-2 text-lg text-primary-foreground/80 text-shadow opacity-0 animate-fade-up" style={{ animationDelay: "100ms" }}>
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-10 md:py-16">
        {/* Description */}
        <section className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {service.description}
          </p>
        </section>

        {/* Works */}
        <section className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <h2 className="font-display mb-6 text-2xl font-bold text-foreground">
            Trabajos que realizamos
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {service.works.map((work) => (
              <div key={work} className="flex items-start gap-3 rounded-md bg-muted p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground">{work}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Zones */}
        <section className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "350ms" }}>
          <h2 className="font-display mb-4 text-2xl font-bold text-foreground">
            Zonas de atención
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Chorrillos", "Surco"].map((zone) => (
              <div
                key={zone}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-foreground shadow-sm"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-medium">{zone}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-8">
          <h2 className="font-display mb-6 text-2xl font-bold text-foreground opacity-0 animate-fade-up" style={{ animationDelay: "400ms" }}>
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center opacity-0 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <a
            href="https://wa.me/51996997815"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105"
          >
            Solicitar cotización
          </a>
        </div>
      </div>

      <WhatsAppButton />
    </main>
  );
};

export default ServiceDetail;
