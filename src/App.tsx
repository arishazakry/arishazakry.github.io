import { useState } from 'react';
import { Play, ChevronDown, ExternalLink, Download, Check, Copy } from 'lucide-react';
import heroVideo from './herovideo.mp4';
import Globe3D from './Globe3D';
import logoSrc from './assets/logo.png';
import TeamAndSupporters from './TeamAndSupporters';
import ResearchOutputs from './ResearchOutputs';
import Contacts from './Contacts';

const LOGO_DARK = logoSrc;
const CONTENT_COPY = "https://www.figma.com/api/mcp/asset/a362049c-3fdd-405f-8ab7-1b8616472648";

// ──────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────
const DOWNLOAD_OPTIONS = [
  { label: 'Python Package', href: 'https://github.com/arishazakry/mirage-library' },
  { label: 'Desktop App', href: '#' },
  { label: 'MIRAGE MetaCorpus', href: 'https://zenodo.org/records/12786202'}, 
];

const CITE_STYLES = [
  { label: 'APA' },
  { label: 'Harvard' },
  { label: 'MLA' },
  { label: 'Vancouver' },
  { label: 'Chicago' },
  { label: 'IEEE '},
];

function Nav({ onNavigateTeam, onNavigateResearch, onNavigateContacts }: { onNavigateTeam: () => void; onNavigateResearch: () => void; onNavigateContacts: () => void }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  
  return (
    <nav className="w-full border-b border-[#e0e0e0] bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="h-30 w-[156px] relative overflow-hidden shrink-0">
          <img
            src={LOGO_DARK}
            alt="MIRAGE"
            className="w-full h-full object-contain invert"
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-12">
          <span className="text-base font-medium text-[#f74b0e] cursor-pointer">Home</span>
          <span
            className="text-base font-normal text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateResearch}
          >
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

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="h-10 flex items-center gap-1 pl-4 pr-2 bg-[#f3f3f3] border border-[#e0e0e0] rounded-xl text-sm font-medium text-[#1e1e1e]"
            >
              Download 
              <ChevronDown className={`w-4 h-4 text-[#c1c1c1] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-56 bg-white border border-[#e0e0e0] rounded-xl shadow-lg overflow-hidden z-50'>
                {DOWNLOAD_OPTIONS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className='flex items-center justify-between px-4 py-3 text-sm text-[#1e1e1e] hover:bg-[#f3f3f3] transition-colors'
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
          className="h-10 flex items-center px-4 bg-[#1e1e1e] rounded-xl text-sm font-medium text-white">
            Explore Dashboard
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
      <div className="max-w-[1440px] mx-auto px-20 pt-16 pb-40 flex items-center gap-10">
        {/* Left */}
        <div className="flex-1 pt-16 flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <h1
              className="text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Mapping the Global Radio Landscape
            </h1>
            <p className="text-[20px] font-normal leading-[1.5] text-[#444]">
              MIRAGE is an open-access platform for exploring and exporting metadata and musicological
              features from millions of songs streaming across global internet radio.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://dashboard.mirage-project.org"
              target="_blank"
              rel="noreferrer"
              className="h-14 flex items-center px-4 bg-[#3b6edc] rounded-2xl text-base font-semibold text-white"
            >
              Explore Dashboard
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </a>
            <a
              href="https://arxiv.org/html/2502.05250v1"
              target="_blank"
              rel="noreferrer"
              className="h-14 flex items-center gap-1 pl-4 pr-4 bg-[#f3f3f3] border border-[#e0e0e0] rounded-2xl text-base font-semibold text-[#1e1e1e]"
            >
              Read the Paper
            </a>
          </div>
        </div>

        {/* Right – interactive globe */}
        <div className="w-[620px] h-[640px] shrink-0 relative rounded-full overflow-hidden">
          <Globe3D width={620} height={640} />
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// How to Use
// ──────────────────────────────────────────────────────────
function HowToUse() {
  const [playing, setPlaying] = useState(false);

  const steps = [
    {
      num: '1',
      title: 'Search',
      body: 'Locate radio stations, artists, or songs using search filters. Browse metadata from stations across the globe.',
    },
    {
      num: '2',
      title: 'Analyze',
      body: 'Use interactive visualizations and metadata panels to examine song lists, stations, and listening patterns.',
    },
    {
      num: '3',
      title: 'Listen & Export',
      body: 'Access embedded streaming links to listen to tracks and export relevant metadata or visualizations.',
    },
  ];

  return (
    <section className="w-full bg-[#edeee9]">
      <div className="max-w-[1440px] mx-auto px-20 py-40 flex flex-col items-center gap-24">
        {/* Explanation */}
        <div className="flex flex-col gap-16 items-center w-full">
          <div className="flex flex-col gap-4 items-center text-center w-[842px]">
            <h2
              className="text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] w-full"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              How to Use
            </h2>
            <p className="text-[20px] font-normal leading-[1.5] text-[#444] w-full">
              Explore music across the global radio landscape, from stations in Malaysia and Bulgaria
              to broadcasts in Guatemala and beyond.
            </p>
          </div>

          {/* Steps */}
          <div className="flex items-start justify-center gap-10 w-full">
            {steps.map((s) => (
              <div key={s.num} className="flex-1 flex flex-col items-center gap-6 px-6">
                <div className="w-14 h-14 rounded-2xl bg-[#f74b0e] flex items-center justify-center shrink-0">
                  <span
                    className="text-[24px] font-bold text-white leading-[1.3]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.num}
                  </span>
                </div>
                <div className="flex flex-col gap-4 items-start text-center w-full">
                  <p
                    className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] w-full"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </p>
                  <p className="text-[18px] font-normal leading-[1.5] text-[#444] w-full">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div className="relative w-[842px] h-[518px] rounded-2xl border border-[#e0e0e0] overflow-hidden">
          <video
            src={heroVideo}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            ref={(el) => {
              if (el) playing ? el.play() : el.pause();
            }}
          />
          {!playing && (
            <>
              <div className="absolute inset-0 bg-black/50 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setPlaying(true)}
                  className="w-14 h-14 rounded-2xl bg-[#f3f3f3] shadow-sm flex items-center justify-center"
                >
                  <Play className="w-5 h-5 text-[#1e1e1e] fill-[#1e1e1e]" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Scope & Limitations
// ──────────────────────────────────────────────────────────
const scopeCards = [
  { type: 'Scope', title: 'Data Volume', body: 'The core of the project is MIRAGE MetaCorpus, which currently contains metadata for 1 million events.' },
  { type: 'Limitation', title: 'Medium-Specific', body: 'The project is limited to internet radio rather than terrestrial (FM/AM) radio or other streaming platforms.' },
  { type: 'Scope', title: 'Breadth', body: 'The metacorpus contains events from 10,000 internet radio stations across the globe.' },
  { type: 'Limitation', title: 'Data Sources', body: 'Metadata is collected from stream encoders and verified by annotators and open-access online music libraries, so data quality depends on these sources.' },
  { type: 'Scope', title: 'Depth', body: 'Each event in the metacorpus includes metadata for 131 fields. These fields cover information related to the location, station, event, artist, and track.' },
  { type: 'Limitation', title: 'Development Stage', body: 'The team released v1.0 in 2026, but the project is still in development.' },
  { type: 'Scope', title: 'Target Audience', body: 'The dashboard enables users with potentially little training in computational methods to access, interact with, and export information about the music on internet radio.' },
  { type: 'Limitation', title: 'Corpus Size', body: 'The current metacorpus consists of 1 million events, but data collection is ongoing.' },
];

function ScopeAndLimitations() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 pt-40 pb-30 flex flex-col gap-10">
        <div className="flex flex-col gap-4 w-[842px]">
          <h2
            className="text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Scope &amp; Limitations
          </h2>
          <p className="text-[20px] font-normal leading-[1.5] text-[#444]">
            Focuses on internet radio metadata, a relatively new and underexamined medium. Data quality
            and coverage depend on external sources with varying accuracy.
          </p>
        </div>

        {/* 4-col × 2-row grid, column-flow */}
        <div className="grid grid-cols-4 grid-rows-2 grid-flow-col gap-6 w-full">
          {scopeCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#edeee9] rounded-2xl p-6 flex flex-col gap-12 overflow-hidden h-[314px]"
            >
              <span
                className={`text-[14px] font-medium leading-[1.2] ${
                  card.type === 'Scope' ? 'text-[#3b6edc]' : 'text-[#f74b0e]'
                }`}
              >
                {card.type}
              </span>
              <div className="flex flex-col gap-2">
                <p
                  className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {card.title}
                </p>
                <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// How to Cite
// ──────────────────────────────────────────────────────────
const DATASET_CITATIONS: Record<string, string> = {
  APA: 'Sears, D. R. W. (2025). Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0. Zenodo. https://doi.org/10.5281/zenodo.18112107',
  Harvard: "Sears, D.R.W. (2025) 'Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0', Zenodo, 29 December. Available at: https://doi.org/10.5281/zenodo.18112107",
  MLA: 'Sears, David R.W. "Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0." Zenodo, 29 Dec. 2025. https://doi.org/10.5281/zenodo.18112107.',
  Vancouver: 'Sears DRW. Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0 [Internet]. Zenodo; 2025 Dec 29. Available from: https://doi.org/10.5281/zenodo.18112107',
  Chicago: 'Sears, David R.W. "Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0." Zenodo, December 29, 2025. https://doi.org/10.5281/zenodo.18112107.',
  'IEEE ': 'D. R. W. Sears, "Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0," Zenodo, Dec. 29, 2025. [Online]. Available: https://doi.org/10.5281/zenodo.18112107',
};

const DASHBOARD_CITATIONS: Record<string, string> = {
  APA: 'Nguyen, N. V. T., Acosta, E. A. M., Dang, T., & Sears, D. R. W. (2024). Exploring internet radio across the globe with the MIRAGE online dashboard. In Proceedings of the 25th International Society for Music Information Retrieval Conference. San Francisco, CA.',
  Harvard: "Nguyen, N.V.T., Acosta, E.A.M., Dang, T. and Sears, D.R.W. (2024) 'Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard', in Proceedings of the 25th International Society for Music Information Retrieval Conference. San Francisco, CA.",
  MLA: 'Nguyen, Ngan V.T., et al. "Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard." Proceedings of the 25th International Society for Music Information Retrieval Conference, San Francisco, CA, 2024.',
  Vancouver: 'Nguyen NVT, Acosta EAM, Dang T, Sears DRW. Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard. In: Proceedings of the 25th International Society for Music Information Retrieval Conference; 2024; San Francisco, CA.',
  Chicago: 'Nguyen, Ngan V.T., Elizabeth A.M. Acosta, Tommy Dang, and David R.W. Sears. "Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard." In Proceedings of the 25th International Society for Music Information Retrieval Conference. San Francisco, CA, 2024.',
  'IEEE ': 'N. V. T. Nguyen, E. A. M. Acosta, T. Dang, and D. R. W. Sears, "Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard," in Proc. 25th Int. Soc. Music Inf. Retrieval Conf., San Francisco, CA, 2024.',
};

function HowToCite() {
  const [selectedStyle, setSelectedStyle] = useState('APA');
  const [citeDropdownOpen, setCiteDropdownOpen] = useState(false);
  const [copied, setCopied] = useState<'dataset' | 'dashboard' | null>(null);

  const copyText = (text: string, which: 'dataset' | 'dashboard') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {});
  };

  const datasetCitation = DATASET_CITATIONS[selectedStyle];
  const dashboardCitation = DASHBOARD_CITATIONS[selectedStyle];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 pt-30 pb-40 flex flex-col gap-10">
        {/* Heading row */}
        <div className="flex items-center justify-between w-full">
          <h2
            className="text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How to Cite
          </h2>
          <div className="relative">
            <button
              onClick={() => setCiteDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setCiteDropdownOpen(false), 150)}
              className="h-14 flex items-center gap-4 pl-4 pr-3 w-[200px] bg-[#f3f3f3] border border-[#e0e0e0] rounded-2xl"
            >
              <span className="flex-1 text-base font-normal text-[#1e1e1e] text-left">{selectedStyle.trim()}</span>
              <ChevronDown className={`w-5 h-5 text-[#c1c1c1] shrink-0 transition-transform ${citeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {citeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-[#e0e0e0] rounded-xl shadow-lg overflow-hidden z-50">
                {CITE_STYLES.map(({ label }) => (
                  <button
                    key={label}
                    onMouseDown={() => { setSelectedStyle(label); setCiteDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${selectedStyle === label ? 'bg-[#f3f3f3] font-semibold text-[#1e1e1e]' : 'text-[#444] hover:bg-[#f3f3f3]'}`}
                  >
                    {label.trim()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Citation cards */}
        <div className="flex gap-10 w-full">
          {/* Dataset */}
          <div className="flex-1 bg-[#edeee9] rounded-2xl p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <p className="text-[18px] font-normal leading-[1.5] text-[#444]">When using the dataset</p>
              <button
                onClick={() => copyText(datasetCitation, 'dataset')}
                className="w-6 h-6 shrink-0 flex items-center justify-center text-[#444] hover:text-[#1e1e1e] transition-colors"
                title="Copy citation"
              >
                {copied === 'dataset' ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 flex-1">
              <p className="text-[16px] font-normal leading-[1.5] text-[#444]">{datasetCitation}</p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex-1 bg-[#edeee9] rounded-2xl p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <p className="text-[18px] font-normal leading-[1.5] text-[#444]">When using the online dashboard</p>
              <button
                onClick={() => copyText(dashboardCitation, 'dashboard')}
                className="w-6 h-6 shrink-0 flex items-center justify-center text-[#444] hover:text-[#1e1e1e] transition-colors"
                title="Copy citation"
              >
                {copied === 'dashboard' ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 flex-1">
              <p className="text-[16px] font-normal leading-[1.5] text-[#444]">{dashboardCitation}</p>
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
        {/* Top row */}
        <div className="flex items-start justify-between w-full">
          {/* Logo (light version — same image, slight invert handled by white bg contrast) */}
          <div className="h-10 w-[126px] relative overflow-hidden shrink-0">
            <img
              src={LOGO_DARK}
              alt="MIRAGE"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Resources + Legal */}
          <div className="flex gap-10 w-[620px]">
            <div className="flex-1 flex flex-col gap-6">
              <p
                className="text-[20px] font-semibold text-white leading-[1.5]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Resources
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/arishazakry/mirage-library"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[16px] font-normal text-[#c1c1c1] hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
                <a
                  href="https://zenodo.org/records/12786202"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[16px] font-normal text-[#c1c1c1] hover:text-white transition-colors"
                >
                  Zenodo Repository
                </a>
                <a
                  href="https://github.com/arishazakry/mirage-library"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[16px] font-normal text-[#c1c1c1] hover:text-white transition-colors"
                >
                  API
                </a>
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

        {/* Bottom border row */}
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
// Root
// ──────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<'home' | 'team' | 'research' | 'contacts'>('home');

  if (page === 'team') {
    return (
      <TeamAndSupporters
        onNavigateHome={() => setPage('home')}
        onNavigateResearch={() => setPage('research')}
        onNavigateContacts={() => setPage('contacts')}
      />
    );
  }

  if (page === 'research') {
    return (
      <ResearchOutputs
        onNavigateHome={() => setPage('home')}
        onNavigateTeam={() => setPage('team')}
        onNavigateContacts={() => setPage('contacts')}
      />
    );
  }

  if (page === 'contacts') {
    return (
      <Contacts
        onNavigateHome={() => setPage('home')}
        onNavigateResearch={() => setPage('research')}
        onNavigateTeam={() => setPage('team')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <Nav onNavigateTeam={() => setPage('team')} onNavigateResearch={() => setPage('research')} onNavigateContacts={() => setPage('contacts')} />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <HowToUse />
        <ScopeAndLimitations />
        <HowToCite />
      </main>
      <Footer />
    </div>
  );
}
