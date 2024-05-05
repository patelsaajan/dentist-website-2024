import WebsiteNav from "nav-bar/website-nav-bar";

const navItems = [
  { name: "Case Studies", route: "/case-studies" },
  { name: "Portfolio", route: "/portfolio" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
];

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebsiteNav navBarItems={navItems} />
      <main style={{ display: "flex", flex: 1 }}>{children}</main>
    </>
  );
}
