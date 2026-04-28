import { useState } from 'react';
import { ChevronDown, Download, ArrowUpRight } from 'lucide-react';
import logoSrc from './assets/logo.png';
import arrowDropDown from './assets/arrow_drop_down.svg';
const LOGO_DARK = logoSrc;

const DOWNLOAD_OPTIONS = [
  { label: 'Web App', href: '#' },
  { label: 'Python Library', href: 'https://github.com/arishazakry/mirage-library' },
];

// ──────────────────────────────────────────────────────────
// Publication data
// ──────────────────────────────────────────────────────────
const publications = [
  {
    title: 'Exploring internet radio across the globe with the MIRAGE online dashboard',
    authors: 'Ngan V.T. Nguyen, Elizabeth A.M. Acosta, Tommy Dang, David R.W. Sears',
    href: 'https://www.researchgate.net/publication/388883730_Exploring_internet_radio_across_the_globe_with_the_MIRAGE_online_dashboard',
  },
  {
    title: 'Exploring internet radio across the globe with the MIRAGE online dashboard',
    authors: 'Ngan V.T. Nguyen, Elizabeth A.M. Acosta, Tommy Dang, David R.W. Sears',
    href: null,
  },
  {
    title: 'Exploring internet radio across the globe with the MIRAGE online dashboard',
    authors: 'Ngan V.T. Nguyen, Elizabeth A.M. Acosta, Tommy Dang, David R.W. Sears',
    href: null,
  },
];

// ──────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────
function Nav({
  onNavigateHome,
  onNavigateTeam,
  onNavigateContacts,
}: {
  onNavigateHome: () => void;
  onNavigateTeam: () => void;
  onNavigateContacts?: () => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full h-20 border-b border-[#e0e0e0] bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-5 flex items-center justify-between h-full">
        <div className="h-10 w-[136px] relative overflow-hidden shrink-0">
          <a href='/'>
            <img
            src={LOGO_DARK}
            alt="MIRAGE"
            className="w-full h-full object-contain invert"
          />
          </a>
        </div>
        <div className="flex items-center gap-7" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '150%' }}>
          <span
            className="text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateHome}
          >
            Home
          </span>
          <span className="text-[#f74b0e] cursor-pointer">
            Research Outputs
          </span>
          <span
            className="text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateTeam}
          >
            Team &amp; Supporters
          </span>
          <span
            className="text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateContacts}
          >
            Contacts
          </span>
          <a href="https://arxiv.org/html/2502.05250v1" className="text-[#444] flex items-center hover:text-[#1e1e1e] transition-colors" target="_blank">
            Paper
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="h-10 flex items-center gap-1 pl-4 pr-2 bg-[#f3f3f3] border border-[#e0e0e0] rounded-xl text-sm font-medium text-[#1e1e1e]"
            >
              Download
              <img src={arrowDropDown} alt="" className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-[#e0e0e0] rounded-xl shadow-lg overflow-hidden z-50">
                {DOWNLOAD_OPTIONS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-[#1e1e1e] hover:bg-[#f3f3f3] transition-colors"
                  >
                    {label}
                    <Download className="w-4 h-4 text-[#8a8a8a] shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://dashboard.mirage-project.org"
            target="_blank"
            rel="noreferrer"
            className="h-10 flex items-center px-4 bg-[#1e1e1e] rounded-xl text-sm font-medium text-white"
          >
            Launch Dashboard
          </a>
        </div>
      </div>
    </nav>
  );
}

// ──────────────────────────────────────────────────────────
// Hero
// ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 pt-[120px] pb-[160px]">
        <div className="flex flex-col gap-8 w-[843px]">
          <h1
            className="text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Research Outputs
          </h1>
          <p className="text-[20px] font-normal leading-[1.5] text-[#444]">
            Key outputs including datasets, publications, and technical resources developed through
            the project. Designed to support further analysis, reproducibility, and ongoing
            interdisciplinary research.
          </p>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Publications grid
// ──────────────────────────────────────────────────────────
function PublicationsGrid({ onNavigateHome }: { onNavigateHome: () => void }) {
  const pub = publications[0];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 pb-40">
        <div className="flex gap-16 items-start">
          {/* Paper PDF viewer */}
          <div className="w-[608px] h-[843px] rounded-lg border-[12px] border-[#edeee9] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] overflow-hidden shrink-0">
            <iframe
              src="https://arxiv.org/pdf/2502.05250"
              title={pub.title}
              className="w-full h-full"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col items-start justify-between py-4 self-stretch w-[608px]">
            <div className="flex flex-col gap-12 w-full">
              {/* Heading */}
              <div className="flex flex-col gap-4 w-full">
                <h3
                  className="text-[32px] font-bold leading-[1.1] tracking-[0.4px] text-[#1e1e1e] w-full"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {pub.title}
                </h3>
                <p className="text-[16px] font-normal leading-[1.5] text-[#6b6b6b] w-full">
                  {pub.authors}
                </p>
              </div>

              {/* Abstract */}
              <div className="flex flex-col gap-4 w-full">
                <h4
                  className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] w-full"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Abstract
                </h4>
                <p className="text-[20px] font-normal leading-[1.5] text-[#444] w-full">
                  This study presents the Music Informatics for Radio Across the GlobE (MIRAGE) online
                  dashboard, which allows users to access, interact with, and export metadata (e.g.,
                  artist name, track title) and musicological features (e.g., instrument list, voice
                  type, key/mode) for 1 million events streaming on 10,000 internet radio stations
                  across the globe. Users can search for stations or events according to several
                  criteria, display, analyze, and listen to the selected station/event lists using
                  interactive visualizations that include embedded links to streaming services, and
                  finally export relevant metadata and visualizations for further study.
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="border-t border-[#e0e0e0] pt-8 flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <a
                  href={pub.href ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 flex items-center px-6 bg-[#3b6edc] rounded-2xl text-base font-semibold text-white"
                >
                  Read Paper
                </a>
                <button
                  onClick={() => {
                    onNavigateHome();
                    setTimeout(() => {
                      document.getElementById('how-to-cite')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="h-14 flex items-center px-6 bg-[#f3f3f3] border border-[#e0e0e0] rounded-2xl text-base font-semibold text-[#1e1e1e]"
                >
                  Cite
                </button>
              </div>
              <span className="text-[16px] font-medium leading-[1.5] text-[#6b6b6b] whitespace-nowrap">
                PDF • 8 pages
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e]">
      <div className="max-w-[1440px] mx-auto px-20 pt-20 pb-10 flex flex-col gap-20">
        <div className="flex items-start justify-between w-full">
          <div className="h-10 w-[126px] relative overflow-hidden shrink-0">
            <img
              src={LOGO_DARK}
              alt="MIRAGE"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-10 w-[620px]">
            <div className="flex-1 flex flex-col gap-6">
              <p
                className="text-[20px] font-semibold text-white leading-[1.5]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Resources
              </p>
              <div className="flex flex-col gap-4">
                {['GitHub Repository', 'Zenodo Repository', 'API'].map((item) => (
                  <span key={item} className="text-[16px] font-normal text-[#c1c1c1] cursor-pointer hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <p
                className="text-[20px] font-semibold text-white leading-[1.5]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Legal
              </p>
              <div className="flex flex-col gap-4">
                {['Privacy Policy', 'Terms of Use', 'Ethical Guidelines'].map((item) => (
                  <span key={item} className="text-[16px] font-normal text-[#c1c1c1] cursor-pointer hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex items-center justify-between w-full">
          <p className="text-[16px] font-normal text-[#c1c1c1]">
            © 2024 MIRAGE Research Project. All rights reserved.
          </p>
          <span className="text-[16px] font-normal text-[#c1c1c1]">
            MIRAGE is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Creative Commons Attribution
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────
// Page root
// ──────────────────────────────────────────────────────────
export default function ResearchOutputs({
  onNavigateHome,
  onNavigateTeam,
  onNavigateContacts,
}: {
  onNavigateHome: () => void;
  onNavigateTeam: () => void;
  onNavigateContacts?: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <Nav onNavigateHome={onNavigateHome} onNavigateTeam={onNavigateTeam} onNavigateContacts={onNavigateContacts} />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <PublicationsGrid onNavigateHome={onNavigateHome} />
      </main>
      <Footer />
    </div>
  );
}
