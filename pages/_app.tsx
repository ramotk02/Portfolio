// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../Components/layout";

// ✅ Import Google Font une seule fois
import { Rajdhani } from "next/font/google";

// ✅ Configure la police une seule fois
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
<div className={`${rajdhani.variable} font-rajdhani`}>
      <AnimatePresence mode="wait">
        <Layout>
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </AnimatePresence>
    </div>
  );
}
