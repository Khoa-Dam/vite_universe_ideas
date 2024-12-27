import {Link} from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:underline">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm hover:underline">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="https://twitter.com"
                  className="text-sm hover:underline"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://discord.com"
                  className="text-sm hover:underline"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  to="https://github.com"
                  className="text-sm hover:underline"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2024 Web3 Ideas Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
