"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import Footer from "./components/footer";

export type Language = "en" | "fr";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [lang]);

  return (
    <main className="bg-black text-white">
      <Navbar lang={lang} setLang={setLang} />
       <HeroSection lang={lang} />
        <Footer lang={lang} />

    </main>
  );
}