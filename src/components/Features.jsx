import { HoverEffect } from "../components/ui/card-hover-effect";

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <p className="text-3xl">Coming soon</p>
      <HoverEffect items={cards} />
    </div>
  );
}
export const cards = [
  {
    title: "⚽ Create Your Football CV",
    description:
      "Showcase your skills, experience, and achievements to impress scouts and clubs.",
  },
  {
    title: "🤝 Connect with Scouts",
    description:
      "Get discovered by professional scouts actively searching for the next generation of talent.",
  },
  {
    title: "📊 Track Your Stats",
    description:
      "Record your goals, assists, tackles, and more to quantify your on-field impact.",
  },

  {
    title: "💯 Learn from the Best ",
    description:
      "Access exclusive training resources and insights from top coaches and players.",
  },

  {
    title: "⚡Build Your Football Network",
    description:
      "Connect with other aspiring footballers, share experiences, and motivate each other.",
  },
];
