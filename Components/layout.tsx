import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50 dark:bg-neutral-900">{children}</main>
      <Navbar />
    </div>
  );
}
