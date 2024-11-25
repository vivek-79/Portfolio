import HomeBtn from "../comps/HomeBtn";

export default function({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:16 py-20 lg:px-32">
        <HomeBtn/>
        {children}
    </main>
  );
}
