export default function Sidebar() {
  return (
    <aside className="w-[350px]  bg-white dark:bg-neutral-800 shadow-md fixed left-5 top-1/2 -translate-y-1/2 h-[70%] p-10 rounded-[50px]">
      <img src="/Omar2.jpg" alt="Omar" className="rounded-full w-52 h-52 mx-auto mb-4" />
      <h1 className="text-xl font-bold text-center">Omar Taky</h1>
      <p className="text-center text-gray-500"></p>
      <div className="mt-6 text-sm text-center">
        <p>📍 Paderborn, Deutschland</p>
        <p>📧 omartaky.ot@gmail.com</p>
      </div>
    </aside>
  );
}
