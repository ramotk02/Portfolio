// Components/layout.tsx
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black dark:bg-neutral-900 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenu principal */}
        <main className="flex-1 px-50 py-6 ml-[250px] mr-[80px]">
          {children}
        </main>

        {/* Navbar droite */}
        <Navbar />
      </div>
    </div>
  );
}

