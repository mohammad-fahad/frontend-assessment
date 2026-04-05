import Image from "next/image";
import Container from "../ui/Container";

const features = [
  {
    title: "Fast Performance",
    desc: "Optimized for speed",
    icon: "/assets/icon1.svg",
  },
  {
    title: "Clean Design",
    desc: "Pixel perfect UI",
    icon: "/assets/icon2.svg",
  },
  {
    title: "Responsive",
    desc: "Works everywhere",
    icon: "/assets/icon3.svg",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Features</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-card p-6 rounded-xl text-center">
              <Image
                src={f.icon}
                alt=""
                width={40}
                height={40}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-muted mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
