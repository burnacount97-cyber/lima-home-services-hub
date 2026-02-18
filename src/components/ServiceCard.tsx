import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  slug: string;
  image: string;
  index: number;
}

const ServiceCard = ({ name, slug, image, index }: ServiceCardProps) => {
  return (
    <Link
      to={`/servicios/${slug}`}
      className="group relative flex min-h-[85vh] w-full items-end overflow-hidden rounded-lg opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <img
        src={image}
        alt={`Servicio de ${name}`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading={index < 2 ? "eager" : "lazy"}
      />
      <div className="service-card-overlay absolute inset-0" />
      <div className="relative z-10 flex w-full items-center justify-between p-6 pb-10 md:p-10 md:pb-14">
        <h2 className="font-display text-3xl font-bold text-primary-foreground text-shadow md:text-5xl">
          {name}
        </h2>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:translate-x-1">
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
