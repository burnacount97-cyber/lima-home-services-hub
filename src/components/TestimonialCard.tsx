interface TestimonialCardProps {
  name: string;
  district: string;
  text: string;
  initials: string;
  image: string;
  index: number;
}

const TestimonialCard = ({ name, district, text, image, index }: TestimonialCardProps) => {
  return (
    <div
      className="rounded-lg border border-border bg-card p-6 shadow-sm opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 100 + 400}ms` }}
    >
      <p className="mb-4 text-muted-foreground leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{district}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
