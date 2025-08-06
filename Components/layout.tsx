// Components/layout.tsx
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar gauche */}
      <Sidebar />

      {/* Contenu de la page */}
      <main className="flex-1 px-8 py-6 bg-gray-50 dark:bg-neutral-900 ml-[250px] mr-[80px]">
        {children}
      </main>

      {/* Navbar droite */}
      <Navbar />
    </div>
  );
}
