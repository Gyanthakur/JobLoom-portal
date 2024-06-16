"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify, Moon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
// import { useTheme } from "next-themes";

function Header({ user, profileInfo }) {
//   const { theme, setTheme } = useTheme();

  const menuItems = [
    {
      id: 1,
      label: "Home",
      path: "/",
      show: true,
    },
    {
      id: 2,
      label: "Feed",
      path: "/feed",
      show: profileInfo,
    },
    {
      id: 3,
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      id: 4,
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
      id: 5,
      label: "Activity",
      path: "/activity",
      show: profileInfo?.role === "candidate",
    },
    {
      id: 6,
      label: "Companies",
      path: "/companies",
      show: profileInfo?.role === "candidate",
    },
    {
      id: 7,
      label: "Jobs",
      path: "/jobs",
      show: user,
    },
    {
      id: 8,
      label: "Membership",
      path: "/membership",
      show: user,
    },
    {
      id: 9,
      label: "Account",
      path: "/account",
      show: user,
    },
  ];

  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href={"#"}>
              <h3>JOBSCO</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem) =>
                menuItem.show ? (
                  <Link
                    key={menuItem.id}
                    href={menuItem.path}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
              {/* <Moon
                className="cursor-pointer mb-4"
                fill={theme === "dark" ? "light" : "dark"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              /> */}
              <UserButton afterSignOutUrl="/" />
            </div>
          </SheetContent>
        </Sheet>
        <Link className="hidden font-bold text-3xl lg:flex mr-6" href={"/"}>
          JOBSCO
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuItems.map((menuItem) =>
            menuItem.show ? (
              <Link
                key={menuItem.id}
                href={menuItem.path}
                onClick={() => sessionStorage.removeItem("filterParams")}
                className="group inline-flex h-9 w-max items-center rounded-md  px-4 py-2 text-sm font-medium"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
          {/* <Moon
            className="cursor-pointer"
            fill={theme === "dark" ? "light" : "dark"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          /> */}
          <UserButton afterSignOutUrl="/" />
        </nav>
      </header>
    </div>
  );
}

export default Header;