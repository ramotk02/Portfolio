import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Background3D from "../styles/Background3D";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Arrière-plan 3D */}
      <div className="fixed inset-0 -z-10">
        <Background3D />
      </div>

      <div className="flex">
        {/* Sidebar gauche */}
        <Sidebar />

        {/* Contenu principal */}
        <main className="flex-1 px-8 py-6 ml-[250px] mr-[80px]">
          {children}
        </main>

        {/* Navbar droite */}
        <Navbar />
      </div>
    </div>
  );
}