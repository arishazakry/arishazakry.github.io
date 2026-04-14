import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import logoSrc from './assets/logo.png';
import _asset_imgPaperThumbnail from "./assets/paper-thumbnail.png";

const LOGO_DARK = logoSrc;

const imgPaperThumbnail = _asset_imgPaperThumbnail;

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
  return (
    <nav className="w-full border-b border-[#e0e0e0] bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-5 flex items-center justify-between">
        <div className="h-10 w-[126px] relative overflow-hidden shrink-0">
          <img
            src={LOGO_DARK}
            alt="MIRAGE"
            className="w-full h-full object-contain invert"
          />
        </div>
        <div className="flex items-center gap-12">
          <span
            className="text-base font-normal text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateHome}
          >
            Home
          </span>
          <span className="text-base font-medium text-[#f74b0e] cursor-pointer">
            Research Outputs
          </span>
          <span
            className="text-base font-normal text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateTeam}
          >
            Team &amp; Supporters
          </span>
          <span
            className="text-base font-normal text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateContacts}
          >
            Contacts
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-10 flex items-center gap-1 pl-4 pr-2 bg-[#f3f3f3] border border-[#e0e0e0] rounded-xl text-sm font-medium text-[#1e1e1e]">
            Download
            <ChevronDown className="w-4 h-4 text-[#c1c1c1]" />
          </button>
          <button className="h-10 flex items-center px-4 bg-[#1e1e1e] rounded-xl text-sm font-medium text-white">
            Explore Dashboard
          </button>
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
const PDF_URL = 'https://arxiv.org/pdf/2502.05250';

function PublicationsGrid() {
  const pub = publications[0];
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 pb-40 flex flex-col gap-12">
        {/* Single publication card */}
        <div className="flex gap-8 items-start">
          <div className="w-[192px] h-[261px] rounded-lg border-8 border-[#edeee9] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] overflow-hidden relative shrink-0">
            <img
              src={imgPaperThumbnail}
              alt={pub.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            {pub.href ? (
              <a
                href={pub.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[24px] font-bold leading-[1.3] text-[#1e1e1e] hover:text-[#3b6edc] transition-colors"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {pub.title}
                <ExternalLink className="w-5 h-5 shrink-0" />
              </a>
            ) : (
              <p
                className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {pub.title}
              </p>
            )}
            <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{pub.authors}</p>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setShowPdf((v) => !v)}
          className="self-start h-12 flex items-center gap-2 px-5 bg-[#f3f3f3] border border-[#e0e0e0] rounded-xl text-sm font-medium text-[#1e1e1e] hover:bg-[#e8e8e8] transition-colors"
        >
          {showPdf ? 'Hide Paper Preview' : 'Preview Paper'}
          <ChevronDown className={`w-4 h-4 text-[#c1c1c1] transition-transform ${showPdf ? 'rotate-180' : ''}`} />
        </button>

        {/* PDF preview */}
        {showPdf && (
          <div className="w-full rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm">
            <iframe
              src={PDF_URL}
              title="Paper PDF Preview"
              className="w-full"
              style={{ height: '800px' }}
            />
          </div>
        )}
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
          <p className="text-[16px] font-normal text-[#c1c1c1]">
            MIRAGE is licensed under a Creative Commons Attribution
          </p>
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
        <PublicationsGrid />
      </main>
      <Footer />
    </div>
  );
}
