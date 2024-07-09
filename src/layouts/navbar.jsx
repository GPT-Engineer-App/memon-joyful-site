import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between"
      >
        <DesktopNav />
        <MobileNav />
        <ConnectWalletButton />
      </motion.header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <img src="/memon-logo.png" alt="MEMON Logo" className="h-8 w-8" />
      <span>MEMON</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <img src="/memon-logo.png" alt="MEMON Logo" className="h-8 w-8" />
          <span>MEMON</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const ConnectWalletButton = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
      Connect Wallet
    </Button>
  </motion.div>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;