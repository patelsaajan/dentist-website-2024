import AdminHomeButton from "components/buttons/AdminHomeButton";

export default async function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHomeButton />
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
