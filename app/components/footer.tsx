"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type Language = "en" | "fr";

type FooterProps = {
  lang?: Language;
};

export default function Footer({ lang = "en" }: FooterProps) {
  const [instagramLink, setInstagramLink] =
    useState("https://instagram.com");

  const [linkedinLink, setLinkedinLink] =
    useState("https://linkedin.com");

  useEffect(() => {
    async function getSettings() {
      try {
        const res = await fetch(
          "https://hanzo.dxpshift.com/api/settings",
        );

        const data = await res.json();

        const socialMedia = data?.data?.social_media?.en;

        if (socialMedia?.Instagram) {
          setInstagramLink(socialMedia.Instagram);
        }

        if (socialMedia?.Linkedin) {
          setLinkedinLink(socialMedia.Linkedin);
        }
      } catch (error) {
        console.log("Error fetching footer links:", error);
      }
    }

    getSettings();
  }, []);

  return (
    <footer className="bg-[#ff3b44] px-8 py-16 text-white md:px-12 xl:px-16 [&_a]:cursor-pointer">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

            {/* Sitemap */}
            <div>
              <h3 className="mb-5 text-base font-medium">
                {lang === "fr" ? "plan du site" : "sitemap"}
              </h3>

              <ul className="space-y-2 text-[15px]">
                <li>
                  <Link
                    href="/about"
                    className="hover:underline"
                  >
                    {lang === "fr" ? "à propos" : "about us"}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#work"
                    className="hover:underline"
                  >
                    {lang === "fr"
                      ? "nos travaux"
                      : "our work"}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/news"
                    className="hover:underline"
                  >
                    {lang === "fr"
                      ? "actualités"
                      : "news"}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#clients"
                    className="hover:underline"
                  >
                    {lang === "fr"
                      ? "nos clients"
                      : "our clients"}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#team"
                    className="hover:underline"
                  >
                    {lang === "fr"
                      ? "notre équipe"
                      : "our team"}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="hover:underline"
                  >
                    {lang === "fr"
                      ? "contactez-nous"
                      : "contact us"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h3 className="mb-5 text-base font-medium">
                {lang === "fr" ? "bureaux" : "offices"}
              </h3>

              <ul className="space-y-2 text-[15px]">
                <li>
                  {lang === "fr"
                    ? "dubaï, EAU"
                    : "dubai, UAE"}
                </li>

                <li>
                  {lang === "fr"
                    ? "beyrouth, LIBAN"
                    : "beirut, LEBANON"}
                </li>

                <li>
                  {lang === "fr"
                    ? "paris, FRANCE"
                    : "paris, FRANCE"}
                </li>

                <li>
                  {lang === "fr"
                    ? "le caire, ÉGYPTE"
                    : "cairo, EGYPT"}
                </li>

                <li>
                  {lang === "fr"
                    ? "riyad, ARABIE SAOUDITE"
                    : "riyadh, KSA"}
                </li>
              </ul>
            </div>

            {/* Inquiries */}
            <div>
              <h3 className="mb-5 text-base font-medium">
                {lang === "fr"
                  ? "demandes"
                  : "inquiries"}
              </h3>

              <p className="cursor-pointer text-[15px] font-medium">
                hello@visionspace.com
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-14 flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 flex items-center gap-6 md:mb-0">

              <Link
                href="/"
                className="text-3xl font-bold hover:opacity-90"
              >
                {lang === "fr"
                  ? "espace vision"
                  : "vision space"}
              </Link>

              <div className="h-5 w-px bg-white"></div>

              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">
                  IG
                </span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">
                  IN
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-[13px]">
              <span className="cursor-pointer">
                {lang === "fr"
                  ? "politique de confidentialité"
                  : "privacy policy"}
              </span>

              <span>|</span>

              <span className="cursor-pointer">
                {lang === "fr"
                  ? "termes et conditions"
                  : "terms & conditions"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}