"use client";

import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
  User as UserIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetMeQuery } from "@/features/auth";
import { cn, getAuthToken, removeAuthToken } from "@/lib/utils";
import { baseApi, useAppDispatch, type User } from "@/store";
import {
  HeaderConstants,
  type NavDropdownItem,
  type NavItem,
  type NavSingleItem,
} from "./header.constants";

interface HeaderProps extends React.ComponentProps<"header"> {
  className?: string;
}

export function Header({ className, ...props }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-40 w-full border-b",
        className,
      )}
      {...props}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <HeaderLogo />
        <DesktopNav pathname={pathname} />
        <HeaderActions pathname={pathname} />
      </Container>
    </header>
  );
}

// Header Logo
function HeaderLogo() {
  return (
    <div className="flex shrink-0 items-center">
      <Link
        href="/"
        className="flex items-center gap-2 transition-opacity hover:opacity-90"
      >
        <Image
          src="/images/logo/logo_main.png"
          alt="Statement Doors"
          width={160}
          height={48}
          className="h-10 w-auto object-contain"
          priority
        />
      </Link>
    </div>
  );
}

// Desktop Navigation
function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav
      aria-label="Main Navigation"
      className="hidden items-center justify-center gap-1 xl:flex"
    >
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          {HeaderConstants.navItems.map((item: NavItem) => {
            if (item.type === "dropdown") {
              return (
                <FrontDoorsDropdown
                  key={item.label}
                  item={item}
                  pathname={pathname}
                />
              );
            }

            return (
              <DesktopNavLink key={item.href} item={item} pathname={pathname} />
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

// Front Doors Dropdown Item
function FrontDoorsDropdown({
  item,
  pathname,
}: {
  item: NavDropdownItem;
  pathname: string;
}) {
  const isDropdownActive =
    pathname === "/front-doors" || pathname.startsWith("/front-doors/");

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "relative h-9 cursor-pointer px-3.5 transition-colors",
          "data-open:bg-[#13171C] data-open:text-white data-popup-open:bg-[#13171C] data-popup-open:text-white",
          isDropdownActive &&
            "text-white hover:bg-transparent hover:text-white",
        )}
      >
        {isDropdownActive && (
          <motion.div
            layoutId="active-nav-pill"
            className="absolute inset-0 rounded-lg bg-[#13171C]"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 32,
            }}
          />
        )}
        <span className="relative z-10">{item.label}</span>
      </NavigationMenuTrigger>

      <NavigationMenuContent className="border-border/60 bg-popover text-popover-foreground max-h-[80vh] w-[90vw] overflow-y-auto rounded-xl border p-6 shadow-xl md:w-[680px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {item.columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-2">
              <h3 className="text-foreground border-border/40 border-b pb-2 text-sm font-semibold tracking-wide">
                {column.title}
              </h3>
              <div className="flex flex-col gap-0.5">
                {column.items.map((subItem) => {
                  const isSubActive = pathname === subItem.href;

                  return (
                    <NavigationMenuLink
                      key={subItem.href}
                      render={<Link href={subItem.href} />}
                      className={cn(
                        "group text-muted-foreground hover:text-foreground hover:bg-muted/60 flex cursor-pointer items-center justify-between rounded-md px-2 py-1.5 text-xs font-normal transition-all active:opacity-60",
                        isSubActive && "text-foreground bg-muted font-semibold",
                      )}
                    >
                      <span className="truncate">{subItem.label}</span>
                      <ChevronRight className="text-muted-foreground/60 size-3 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5" />
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

// Desktop Nav Link Item
function DesktopNavLink({
  item,
  pathname,
}: {
  item: NavSingleItem;
  pathname: string;
}) {
  const isActive = pathname === item.href;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        render={<Link href={item.href} />}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "relative h-9 px-3.5 transition-colors",
          isActive && "text-white hover:bg-transparent hover:text-white",
        )}
      >
        {isActive && (
          <motion.div
            layoutId="active-nav-pill"
            className="absolute inset-0 rounded-lg bg-[#13171C]"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 32,
            }}
          />
        )}
        <span className="relative z-10">{item.label}</span>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

// Header Actions
function HeaderActions({ pathname }: { pathname: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isMounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const token = React.useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      return () => window.removeEventListener("storage", onStoreChange);
    },
    () => getAuthToken(),
    () => null,
  );

  const { data: userResponse, isLoading: isProfileLoading } = useGetMeQuery(
    undefined,
    {
      skip: !token,
    },
  );

  const user = userResponse?.data;
  const isLoggedIn = Boolean(token);
  const isAuthLoading = !isMounted || (isLoggedIn && isProfileLoading);

  const handleLogout = () => {
    removeAuthToken();
    dispatch(baseApi.util.resetApiState());
    router.push("/");
    router.refresh();
  };

  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      {/* Search */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Search"
        className="size-9 rounded-full"
      >
        <Image
          src="/icons/search.svg"
          alt="Search"
          width={20}
          height={20}
          className="size-5"
        />
      </Button>

      {/* Cart */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Shopping Cart"
        className="size-9 rounded-full"
      >
        <Image
          src="/icons/cart.svg"
          alt="Shopping Cart"
          width={20}
          height={20}
          className="size-5"
        />
      </Button>

      {/* User Auth Action */}
      {isAuthLoading ? (
        <Skeleton className="size-9 rounded-full" />
      ) : isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="User Account"
                className="hover:bg-accent size-9 cursor-pointer rounded-full"
              />
            }
          >
            <Image
              src="/icons/user.svg"
              alt="User Account"
              width={20}
              height={20}
              className="size-5"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                {isProfileLoading ? (
                  <div className="flex flex-col space-y-1.5 p-0.5">
                    <Skeleton className="h-3.5 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                ) : (
                  <div className="flex flex-col space-y-1">
                    <p className="text-foreground truncate text-xs font-semibold">
                      {user?.first_name
                        ? `${user.first_name} ${user.last_name || ""}`.trim()
                        : "My Account"}
                    </p>
                    {user?.email && (
                      <p className="text-muted-foreground truncate text-[11px]">
                        {user.email}
                      </p>
                    )}
                  </div>
                )}
              </DropdownMenuLabel>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                render={
                  <Link
                    href="/profile"
                    className="flex w-full cursor-pointer items-center gap-2"
                  />
                }
              >
                <UserIcon className="size-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                render={
                  <Link
                    href="/dashboard"
                    className="flex w-full cursor-pointer items-center gap-2"
                  />
                }
              >
                <LayoutDashboard className="size-4" />
                <span>Dashboard</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={handleLogout}
              className="flex cursor-pointer items-center gap-2"
            >
              <LogOut className="size-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "border-border/80 hover:bg-accent flex h-9 items-center gap-1.5 rounded-full px-3.5 text-xs font-semibold tracking-wide transition-colors",
          )}
        >
          <Image
            src="/icons/user.svg"
            alt="User"
            width={16}
            height={16}
            className="size-3.5 opacity-80"
          />
          <span>Sign In</span>
        </Link>
      )}

      {/* Mobile Drawer Trigger */}
      <MobileNav
        pathname={pathname}
        isLoggedIn={isLoggedIn}
        isLoading={isAuthLoading}
        user={user}
        onLogout={handleLogout}
      />
    </div>
  );
}

// Mobile Navigation
function MobileNav({
  pathname,
  isLoggedIn,
  isLoading,
  user,
  onLogout,
}: {
  pathname: string;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  user?: User;
  onLogout?: () => void;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(true);

  return (
    <div className="xl:hidden">
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open Navigation Menu"
              className="size-9 rounded-full"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>
        <SheetContent side="right" className="w-80 overflow-y-auto sm:w-96">
          <SheetHeader className="text-left">
            <SheetTitle className="text-base font-bold">
              <Image
                src="/images/logo/logo_main.png"
                alt="Statement Doors"
                width={140}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1.5 px-4 pt-4">
            {HeaderConstants.navItems.map((item: NavItem) => {
              if (item.type === "dropdown") {
                const isDropdownActive =
                  pathname === "/front-doors" ||
                  pathname.startsWith("/front-doors/");

                return (
                  <div key={item.label} className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "h-9 w-full cursor-pointer justify-between px-3.5 text-sm font-medium transition-colors",
                        isDropdownActive && "text-foreground font-semibold",
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          dropdownOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {dropdownOpen && (
                      <div className="border-border my-1 ml-3 flex flex-col gap-4 border-l pl-3">
                        {item.columns.map((column) => (
                          <div
                            key={column.title}
                            className="flex flex-col gap-1"
                          >
                            <p className="text-muted-foreground px-2 text-xs font-semibold tracking-wider uppercase">
                              {column.title}
                            </p>
                            {column.items.map((subItem) => {
                              const isSubActive = pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    "group text-foreground flex items-center justify-between px-2.5 py-1.5 text-sm underline-offset-4 transition-all hover:underline active:bg-transparent active:opacity-60",
                                    isSubActive && "font-semibold underline",
                                  )}
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronRight className="text-foreground/60 size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "relative h-9 justify-start px-3.5 transition-colors",
                    isActive &&
                      "text-white hover:bg-transparent hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-mobile-nav-pill"
                      className="absolute inset-0 rounded-lg bg-[#13171C]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Auth Action in Mobile Drawer */}
          <div className="border-border mt-6 border-t px-4 pt-4">
            {isLoading ? (
              <div className="flex items-center gap-2.5 py-1">
                <Skeleton className="size-8 rounded-full" />
                <div className="flex flex-col gap-1.5">
                  <Skeleton className="h-3.5 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            ) : isLoggedIn ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="bg-accent text-foreground flex size-8 items-center justify-center rounded-full text-xs font-bold uppercase">
                    {user?.first_name ? user.first_name[0] : "U"}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate text-xs font-semibold">
                      {user?.first_name
                        ? `${user.first_name} ${user.last_name || ""}`.trim()
                        : "My Account"}
                    </span>
                    {user?.email && (
                      <span className="text-muted-foreground truncate text-[11px]">
                        {user.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-border/60 mt-1 flex flex-col gap-1 border-t pt-2">
                  <Link
                    href="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="hover:bg-accent flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors"
                  >
                    <UserIcon className="text-muted-foreground size-3.5" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="hover:bg-accent flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium transition-colors"
                  >
                    <LayoutDashboard className="text-muted-foreground size-3.5" />
                    <span>Dashboard</span>
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onLogout?.();
                  }}
                  className="text-destructive mt-1 flex cursor-pointer items-center gap-1.5 px-2 text-left text-xs font-medium transition-opacity hover:opacity-80"
                >
                  <LogOut className="size-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-black text-xs font-semibold text-white hover:bg-black/90",
                )}
              >
                <Image
                  src="/icons/user.svg"
                  alt="User"
                  width={16}
                  height={16}
                  className="size-3.5 invert"
                />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
