interface TestimonialCardProps {
  name: string;
  district: string;
  text: string;
  initials: string;
  index: number;
}

const TestimonialCard = ({ name, district, text, initials, index }: TestimonialCardProps) => {
  return (
    <div
      className="rounded-lg border border-border bg-card p-6 shadow-sm opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 100 + 400}ms` }}
    >
      <p className="mb-4 text-muted-foreground leading-relaxed">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{district}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
