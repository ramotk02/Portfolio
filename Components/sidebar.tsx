import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";

export default function Sidebar() {
  return (
    <aside className="w-[300px] bg-white/70 dark:bg-neutral-800/70 shadow-md fixed left-5 top-1/2 -translate-y-1/2 h-[85%] p-10 rounded-[50px] backdrop-blur-md flex flex-col items-center justify-between">
      <div>
        <img
          src="/Omar2.jpg"
          alt="Omar"
          className="rounded-full w-52 h-52 mx-auto mb-4"
        />
        <h1 className="text-xl font-bold text-center">Omar Taky</h1>
        <p className="text-center text-gray-500"></p>
        <div className="mt-6 text-sm text-center space-y-1">
          <p>📍 Paderborn, Deutschland</p>
          <p>📧 omartaky.ot@gmail.com</p>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex space-x-4 mt-8">
        <a
          href="https://www.linkedin.com/in/omartaky"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-neutral-700 rounded-full shadow-md hover:bg-gray-300 transition-colors"
        >
          <FaLinkedin className="text-xl text-blue-600" />
        </a>
        <a
          href="https://www.indeed.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-neutral-700 rounded-full shadow-md hover:bg-gray-300 transition-colors"
        >
          <SiIndeed className="text-xl text-blue-500" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-neutral-700 rounded-full shadow-md hover:bg-gray-300 transition-colors"
        >
          <FaInstagram className="text-xl text-pink-500" />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white dark:bg-neutral-700 rounded-full shadow-md hover:bg-gray-300 transition-colors"
        >
          <FaXTwitter className="text-xl text-black" />
        </a>
      </div>
    </aside>
  );
}
