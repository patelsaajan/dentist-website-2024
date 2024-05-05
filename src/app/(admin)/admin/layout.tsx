import LandingPageButton from "components/buttons/LandingPageButton";
import SignOut from "components/sign-out";
import WebsiteNav from "nav-bar/website-nav-bar";

const navItems = [
  { name: "Admin", route: "/admin/home" },
  { name: "Case Studies", route: "/admin/case-studies/all" },
  { name: "Portfolio", route: "/admin/portfolio/all" },
];

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebsiteNav navBarItems={navItems} />
      <main
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        {children}
      </main>
      <footer
        style={{
          width: "100%",
          marginTop: 100,
          textAlign: "center",
        }}
      >
        <SignOut />
      </footer>
    </>
  );
}
