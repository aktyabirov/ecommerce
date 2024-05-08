"use client";

import * as React from "react";
import Link from "next/link";

import { images } from "@/constants/images";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-4 ">
        <div className="top-text-left">
          <h2 className="text-gray-600">
            Welcome to Worldwide Electronics Store
          </h2>
        </div>
        <div className="top-link-right hidden md:block">
          <Link className="text-gray-600" href="">
            My account |
          </Link>
          <Link className="text-gray-600" href="">
            {" "}
            Checkout |
          </Link>
          <Link className="text-gray-600" href="">
            {" "}
            Shop |
          </Link>
          <Link className="text-gray-600" href="">
            {" "}
            Wishlist |
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between py-8">
        <div className="logo pr-[80px] ">
          <Link href="./">
            <img src={images.Logo.src} alt="Logo" />
          </Link>
        </div>
        <div className="flex ">
          <div className="xl:flex items-center hidden">
            <img src={images.Headphone.src} alt="headphone" />
          </div>
          <div className="pr-[80px] xl:block hidden">
            <h2 className="text-gray-600">Hotline free</h2>
            <p className="font-bold">06-900-6789-00</p>
          </div>
          <div className="flex justify-between">
            <div className="border-[3px] rounded-xl border-yellow-500 items-center hidden xl:flex">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              <Input placeholder="Search products..." />
              <Button
                className="bg-yellow-500 hover:bg-yellow-500 py-6"
                variant="outline"
              >
                Search
              </Button>
            </div>
            <div className="quick-link flex gap-7 pl-[170px]">
              <div className="flex flex-col justify-center items-center">
                <img className="w-8" src={images.Compare.src} alt="Compare" />
                <p>Compare</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-8"
                  src={images.Favorites.src}
                  alt="Favorites"
                />
                <p>Favorites</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="w-8" src={images.Cart.src} alt="Cart" />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-nav flex justify-between">
        <div className="hidden xl:block">
          <NavigationMenu className="z-50">
            <NavigationMenuList >
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">HOME</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">SHOP</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                    <a href="">Something</a>
                    <a href="">Something</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">BLOG</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[150px] gap-3 p-4 md:w-[200px] lg:w-[250px] ">
                    <a href="">Something</a>
                    <a href="">Something</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">PORTFOLIO</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                    <a href="">Something</a>
                    <a href="">Something</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">PAGE</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                    <a href="">Something</a>
                    <a href="">Something</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">CONTACT</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                    <a href="">Something</a>
                    <a href="">Something</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">
                  YOU RECENTLY VIEWED
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                    <a href="">Something</a>
                    <a href="">Something</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">US DOLLAR</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[100px] gap-3 p-4 ">
                    <a href="">USD</a>
                    <a href="">EUR</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-extrabold text-[12px]">ENGLISH</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] p-4 flex flex-col gap-3">
                    <a href="">English</a>
                    <a href="">Uzbek</a>
                    <a href="">Russian</a>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a href="">Link</a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
