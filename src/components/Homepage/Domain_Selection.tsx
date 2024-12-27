import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BitcoinIcon as Blockchain, Music, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const domains = [
  {
    name: "Blockchain",
    icon: Blockchain,
    description: "Explore decentralized technologies and cryptocurrencies.",
  },
  {
    name: "Music",
    icon: Music,
    description:
      "Discover innovations in music production, distribution, and experiences.",
  },
  {
    name: "Art",
    icon: Palette,
    description:
      "Uncover new frontiers in digital art, NFTs, and creative expression.",
  },
];

export function DomainSelection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Choose Your Domain
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#141c23]">
        {domains.map((domain) => (
          <Card key={domain.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <domain.icon className="mr-2 h-8 w-8" />
                {domain.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">
                {domain.description}
              </p>
              <Link to={`/${domain.name.toLowerCase()}`}>
                <Button className="w-full">Explore {domain.name}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}