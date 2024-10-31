import { cn } from "@/lib/utils";
import { navItems } from "@/static-data";
import { useLocation } from "react-router";
import TauqeerLogo from "./TauqeerLogo";

const NavItem = ({
  label,
  path,
}: {
  label: string;
  name: string;
  path: string;
}) => {
  const { hash } = useLocation();

  return (
    <a
      href={path}
      className={cn(
        "px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold duration-200 transition-all hover:bg-white hover:text-gray-900",
        {
          "bg-white text-gray-900": hash === path,
        }
      )}
    >
      {label}
    </a>
  );
};

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 items-center w-screen h-16">
      <div className="flex items-center justify-center gap-4 p-2 mx-auto lg:justify-between max-w-7xl">
        <span className="hidden lg:flex">
          <TauqeerLogo />
        </span>
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur flex-wrap">
          {navItems.map((nav) => (
            <NavItem key={nav.path} {...nav} />
          ))}
        </nav>
        {/* <span className="hidden md:flex">
          <ThemeToggle />
        </span> */}
      </div>
    </header>
  );
};

export default NavBar;
