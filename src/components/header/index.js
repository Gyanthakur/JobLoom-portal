"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify, Moon } from "lucide-react";
// import { UserButton } from "@clerk/nextjs";
// import { useTheme } from "next-themes";
function Header() {
	const menuItems = [
		{
			label: "Home",
			path: "/",
			Show: true,
		},
		{
			label: "Login",
			path: "/sign-in",
			Show: true,
		},
		{
			label: "Register",
			path: "/sign-up",
			Show: true,
		}
	];

	return (
		<div>
			<header className="flex h-6 w-full shrink-0 items-center">
				<Sheet>
					<SheetTrigger asChild>
						<Button>
							<AlignJustify className="h-6 w-6" />
							<span className="sr-only">Toggle Navigation Menu</span>
						</Button>
					</SheetTrigger>

					<SheetContent side="left">
						<Link className="mr-6 hidden lg:flex" href={"#"}>
							<h3>JobSco</h3>
						</Link>

			<div className="grid gap-2 py-6">
              {menuItems.map((menuItem) =>
                menuItem.Show ? (
                  <Link
                    href={menuItem.path}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}

            </div>
					</SheetContent>
				</Sheet>
			</header>
		</div>
	);
}

export default Header;
