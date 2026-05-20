import Link from "next/link";
import { IconPayleMark } from "@/components/payle/PayleIcons";
import { payleFooterBrand, payleFooterGroups } from "./payleFooterNav";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-slate-200/90 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)] lg:items-start lg:gap-16 xl:gap-20">
          <div className="max-w-md">
            <Link
              href={payleFooterBrand.homeHref}
              className="inline-flex items-center gap-3 rounded-xl transition-opacity duration-200 hover:opacity-90"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-[0_8px_24px_rgba(37,99,235,0.28)]">
                <IconPayleMark className="h-5 w-5" />
              </span>
              <p className="font-semibold tracking-tight text-slate-950">
                pay<span className="text-blue-600">le</span>
              </p>
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-[0.9375rem] sm:leading-[1.75]">
              {payleFooterBrand.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 md:grid-cols-4 lg:gap-x-10">
            {payleFooterGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight text-slate-950">{group.title}</h3>
                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}`}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="inline-block text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
