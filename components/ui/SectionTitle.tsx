type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
    </div>
  );
}
