import LandingPageButton from "components/Buttons/LandingPageButton";

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingPageButton />
      <main
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        {children}
      </main>
    </>
  );
}
