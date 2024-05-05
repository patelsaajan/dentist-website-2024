import WebsiteNav from "nav-bar/website-nav-bar";

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebsiteNav />
      <main style={{ display: "flex", flex: 1 }}>{children}</main>
    </>
  );
}
