import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom";

export function CTA() {
  return (
    <section className="py-20 text-center bg-primary text-primary-foreground">
      <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Choose a domain and start exploring groundbreaking ideas or share your
        own vision with the world.
      </p>
      <Link to="/domains">
        <Button size="lg" variant="secondary">
          View All Domains
        </Button>
      </Link>
    </section>
  );
}
