export default function Sidebar() {
  return (
    <aside className="w-[250px] bg-white dark:bg-neutral-800 shadow-md fixed left-0 top-0 h-full p-6">
      <img src="/images/omar.jpg" alt="Omar" className="rounded-full w-32 h-32 mx-auto mb-4" />
      <h1 className="text-xl font-bold text-center">Omar Taky</h1>
      <p className="text-center text-gray-500"></p>
      <div className="mt-6 text-sm text-center">
        <p>📍 Paderborn, Allemagne</p>
        <p>📧 omartaky.ot@gmail.com</p>
      </div>
    </aside>
  );
}
