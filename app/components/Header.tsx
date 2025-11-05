"use client";

// Import the things we need to build the header
import Image from "next/image"; // For showing the logo image
import Link from "next/link"; // For making clickable links
import { usePathname } from "next/navigation"; // To know which page we are on
import { Jost } from "next/font/google"; // To use a nice font called "Jost"

// Set up the Jost font so we can use it in our header
const jost = Jost({
  subsets: ["latin"], // Use letters from the Latin alphabet
  weight: ["400"], // Use normal weight (not too thick, not too thin)
  variable: "--font-jost", // Give it a name so we can use it later
});

export default function Header() {
  // Get the current page path (like "/" for home or "/about" for about page)
  const pathname = usePathname();
  
  // List of all the menu items we want to show in the header
  const navItems = [
    { href: "/", label: "HOME" }, // Home page link
    { href: "/about", label: "ABOUT" }, // About page link
    { href: "/projects", label: "PROJECTS" }, // Projects page link
    { href: "/events", label: "EVENTS" }, // Events page link
    { href: "/sponsors", label: "SPONSORS" }, // Sponsors page link
  ];

  // Check if a menu item is the current page (so we can underline it)
  // If the link is "/" (home), check if we're exactly on the home page
  // Otherwise, check if the current path starts with the link path
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    // The main header container - this is the whole header bar at the top of the page
    <header
      className={`${jost.variable} font-sans text-white select-none`}
      style={{
        // Make a gradient background that goes from dark blue to light purple
        background:
          "linear-gradient(180deg, #1E2B48 75.96%, var(--Light-YinMin, #899ABD) 100%)",
        // Add a blue line at the bottom of the header
        borderBottom: "1px solid #1E24B8",
        // Make the height responsive: smallest is 96.5px, biggest is 180px
        // It changes based on screen size (12.76vw means 12.76% of screen width)
        height: "clamp(96.5px, 12.76vw, 180px)",
        // Make the header take up the full width of the screen
        width: "100%",
        // Use flexbox to arrange things inside
        display: "flex",
        // Put things in the middle vertically (up and down)
        alignItems: "center",
        // Put things in the middle horizontally (left and right)
        justifyContent: "center",
      }}
    >
      {/* Inner container: keeps space on left and right sides (64px on large screens, smaller on small screens) */}
      <div
        style={{
          // Use flexbox to arrange logo and menu items
          display: "flex",
          // Put things in the middle vertically
          alignItems: "center",
          // Put space between logo and menu items evenly
          justifyContent: "space-between",
          // Make width = full width minus padding on both sides
          // Padding is responsive: smallest is 16px, biggest is 64px on each side
          // So we subtract clamp(16px, 4.23vw, 64px) * 2 (left + right)
          width: "calc(100% - clamp(32px, 8.46vw, 128px))",
          // Allow the container to shrink if screen is too small
          minWidth: 0,
        }}
      >
        {/* The ASME logo image on the left side */}
        <Image
          src="/asme_Logo.png"
          alt="ASME"
          width={180}
          height={113}
          priority // Load this image first because it's important
          style={{
            // Make height responsive: smallest is 40px, biggest is 113px
            height: "clamp(40px, 7.47vw, 113px)",
            // Keep the width proportional to height (auto = figure it out)
            width: "auto",
            // Make it a block element
            display: "block",
            // Don't let the logo shrink if space is tight
            flexShrink: 0,
          }}
        />

        {/* Loop through all menu items and create a link for each one */}
        {navItems.map((item) => {
          // Check if this menu item is the current page
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                // Make text white
                color: "#FFF",
                // Use the Jost font we set up earlier
                fontFamily: "var(--font-jost)",
                // Make font size responsive: smallest is 12px, biggest is 34.575px
                fontSize: "clamp(12px, 2.29vw, 34.575px)",
                // Make text normal weight (not bold)
                fontWeight: 400,
                // If this is the active page, underline it. Otherwise, no underline
                textDecoration: active ? "underline" : "none",
                // Make underline white if it's active, invisible if not
                textDecorationColor: active ? "#FFF" : "transparent",
                // Make the underline a little bit below the text (responsive)
                textUnderlineOffset: "clamp(2px, 0.26vw, 4px)",
                // Make the underline thickness responsive
                textDecorationThickness: "clamp(1px, 0.13vw, 2px)",
                // Don't let the text wrap to a new line - keep it on one line
                whiteSpace: "nowrap",
              }}
            >
              {/* Show the menu item label (like "HOME", "ABOUT", etc.) */}
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}