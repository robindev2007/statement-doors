export interface NavItemLink {
  label: string;
  href: string;
}

export interface NavDropdownColumn {
  title: string;
  items: readonly NavItemLink[];
}

export interface NavDropdownItem {
  type: "dropdown";
  label: string;
  columns: readonly NavDropdownColumn[];
}

export interface NavSingleItem {
  type: "link";
  label: string;
  href: string;
}

export type NavItem = NavDropdownItem | NavSingleItem;

export const FRONT_DOOR_DROPDOWN: NavDropdownItem = {
  type: "dropdown",
  label: "Front Doors",
  columns: [
    {
      title: "Aluminium Front Doors",
      items: [
        {
          label: "Single Hinged Doors",
          href: "/front-doors/aluminium/single-hinged-doors",
        },
        { label: "Pivot Doors", href: "/front-doors/aluminium/pivot-doors" },
        {
          label: "Doors with Side Lights",
          href: "/front-doors/aluminium/doors-with-side-lights",
        },
        {
          label: "Doors with Side & Top Lights",
          href: "/front-doors/aluminium/doors-with-side-and-top-lights",
        },
        { label: "Double Doors", href: "/front-doors/aluminium/double-doors" },
        {
          label: "Glass Front Doors",
          href: "/front-doors/aluminium/glass-front-doors",
        },
        {
          label: "Door with Right Sidelight",
          href: "/front-doors/aluminium/door-with-right-sidelight",
        },
        {
          label: "Door with Top Sidelight",
          href: "/front-doors/aluminium/door-with-top-sidelight",
        },
        {
          label: "Double Door with Left, Right & Top Sidelights",
          href: "/front-doors/aluminium/double-door-with-left-right-top-sidelights",
        },
        {
          label: "Door with Top & Right Sidelights",
          href: "/front-doors/aluminium/door-with-top-and-right-sidelights",
        },
        {
          label: "Single Door with Top, Right & Left Sidelights",
          href: "/front-doors/aluminium/single-door-with-top-right-left-sidelights",
        },
        {
          label: "Door with Left Side Panel",
          href: "/front-doors/aluminium/door-with-left-side-panel",
        },
        {
          label: "Door with Two Side Panels",
          href: "/front-doors/aluminium/door-with-two-side-panels",
        },
        {
          label: "Double Door with Left & Right Sidelights",
          href: "/front-doors/aluminium/double-door-with-left-right-sidelights",
        },
        {
          label: "Double Door with Top Sidelight",
          href: "/front-doors/aluminium/double-door-with-top-sidelight",
        },
        {
          label: "Door with Left, Right & Top Sidelights",
          href: "/front-doors/aluminium/door-with-left-right-top-sidelights",
        },
        {
          label: "Door with Right Side Panel",
          href: "/front-doors/aluminium/door-with-right-side-panel",
        },
      ],
    },
    {
      title: "Steel Front Doors",
      items: [
        {
          label: "Single Hinged Doors",
          href: "/front-doors/steel/single-hinged-doors",
        },
        { label: "Pivot Doors", href: "/front-doors/steel/pivot-doors" },
        {
          label: "Doors with Side Lights",
          href: "/front-doors/steel/doors-with-side-lights",
        },
        {
          label: "Doors with Side & Top Lights",
          href: "/front-doors/steel/doors-with-side-and-top-lights",
        },
        { label: "Double Doors", href: "/front-doors/steel/double-doors" },
        {
          label: "Glass Front Doors",
          href: "/front-doors/steel/glass-front-doors",
        },
        {
          label: "Door with Right Sidelight",
          href: "/front-doors/steel/door-with-right-sidelight",
        },
        {
          label: "Door with Top Sidelight",
          href: "/front-doors/steel/door-with-top-sidelight",
        },
        {
          label: "Double Door with Left, Right & Top Sidelights",
          href: "/front-doors/steel/double-door-with-left-right-top-sidelights",
        },
        {
          label: "Door with Top & Right Sidelights",
          href: "/front-doors/steel/door-with-top-and-right-sidelights",
        },
        {
          label: "Single Door with Top, Right & Left Sidelights",
          href: "/front-doors/steel/single-door-with-top-right-left-sidelights",
        },
        {
          label: "Door with Left Side Panel",
          href: "/front-doors/steel/door-with-left-side-panel",
        },
        {
          label: "Door with Two Side Panels",
          href: "/front-doors/steel/door-with-two-side-panels",
        },
        {
          label: "Double Door with Left & Right Sidelights",
          href: "/front-doors/steel/double-door-with-left-right-sidelights",
        },
        {
          label: "Double Door with Top Sidelight",
          href: "/front-doors/steel/double-door-with-top-sidelight",
        },
        {
          label: "Door with Left, Right & Top Sidelights",
          href: "/front-doors/steel/door-with-left-right-top-sidelights",
        },
        {
          label: "Door with Right Side Panel",
          href: "/front-doors/steel/door-with-right-side-panel",
        },
      ],
    },
  ],
};

export const NAV_ITEMS: readonly NavItem[] = [
  FRONT_DOOR_DROPDOWN,
  { type: "link", label: "All Doors", href: "/all-doors" },
  { type: "link", label: "Design Your Door", href: "/design-your-door" },
  { type: "link", label: "Inspiration", href: "/inspiration" },
  { type: "link", label: "Finance Your Door", href: "/finance-your-door" },
  { type: "link", label: "Coming Soon", href: "/coming-soon" },
  { type: "link", label: "FAQs", href: "/faqs" },
  { type: "link", label: "Contact Us", href: "/contact-us" },
] as const;

export const HeaderConstants = {
  navItems: NAV_ITEMS,
  frontDoorDropdown: FRONT_DOOR_DROPDOWN,
} as const;
