import { ChevronDown } from 'lucide-react';
import logoSrc from './assets/logo.png';

const LOGO_DARK = logoSrc;

// Team & Supporters page assets
const imgPrimaryResearcher = "https://www.figma.com/api/mcp/asset/0c8e4a88-5607-4a4d-b039-054af82210ad";
const imgNganNguyen = "https://www.figma.com/api/mcp/asset/c4fc2133-694b-48bc-8fbb-96a717044e42";
const imgTommyDang = "https://www.figma.com/api/mcp/asset/78f81d25-7b51-4544-ba1a-0e3285b7ed35";
const imgMarzhanN = "https://www.figma.com/api/mcp/asset/340e4ee8-6852-4698-a465-786310a6ca77";
const imgVibhor = "https://www.figma.com/api/mcp/asset/4467e7bc-c613-4ebb-b60a-9afe66bfea98";
const imgArishahuda = "https://www.figma.com/api/mcp/asset/1261eabc-2d92-4e85-8e8e-01afc47a3430";
const imgElizabeth = "https://www.figma.com/api/mcp/asset/70e71867-4960-4786-9825-bbcabae3bf7b";
const imgChengYun = "https://www.figma.com/api/mcp/asset/f32c9149-463e-4795-aa2d-1ed23bc92772";
const imgJonathan = "https://www.figma.com/api/mcp/asset/1711997d-eb5d-47d2-a4de-77a394002eaa";
const imgLauren = "https://www.figma.com/api/mcp/asset/8afcb9bb-d4be-4b76-bdf9-47088443c02c";
const imgTingTing = "https://www.figma.com/api/mcp/asset/6bfdbc8c-c474-49b8-a7cd-ac3512f77316";
const imgDavidPriebe = "https://www.figma.com/api/mcp/asset/b85b915d-b265-486a-864f-5e9c3793dda4";

const imgLogoUMich = "https://www.figma.com/api/mcp/asset/8c4cddae-e6da-4316-a7b3-52177056aac4";
const imgLogoPearl = "https://www.figma.com/api/mcp/asset/7f92f19f-328e-4f63-b5df-63f210e0276d";
const imgLogoVNU = "https://www.figma.com/api/mcp/asset/acf44bd0-12a4-4cea-a197-45c0ef7aed5a";
const imgLogoIDVL = "https://www.figma.com/api/mcp/asset/f4fbcfe9-e5dc-4d80-bfd6-4b0adcbc62e6";

const imgLogoNEH = "https://www.figma.com/api/mcp/asset/41814b84-6785-45bb-8e0c-49561ae9c253";
const imgLogoCH = "https://www.figma.com/api/mcp/asset/1fe2c511-4a20-4e8a-8460-e72cf96000ff";
const imgLogoTTU = "https://www.figma.com/api/mcp/asset/3f864256-76e2-41db-8a43-69a2e4b77efe";

const imgSchoolIcon = "https://www.figma.com/api/mcp/asset/ff92c5c5-111f-44bb-a5c0-2cdb3e473b44";
const imgMailIcon = "https://www.figma.com/api/mcp/asset/2dcf1bc4-80ca-4019-87c4-44df21b50c04";

// ──────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────
function Nav({ onNavigateHome, onNavigateResearch, onNavigateContacts }: { onNavigateHome: () => void; onNavigateResearch: () => void; onNavigateContacts?: () => void }) {
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
          <span
            className="text-base font-normal text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateResearch}
          >
            Research Outputs
          </span>
          <span className="text-base font-medium text-[#f74b0e] cursor-pointer">Team &amp; Supporters</span>
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
            Team &amp; Supporters
          </h1>
          <p className="text-[20px] font-normal leading-[1.5] text-[#444]">
            A collaborative effort involving researchers, contributors, and supporting institutions
            across disciplines. Includes individuals and organizations contributing to research,
            development, and project support.
          </p>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Primary Researcher
// ──────────────────────────────────────────────────────────
function PrimaryResearcher() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="bg-[#edeee9] rounded-3xl p-14 flex gap-10 items-start overflow-hidden">
          {/* Photo */}
          <div className="w-[320px] h-[400px] shrink-0 rounded-2xl overflow-hidden border border-black/10 relative">
            <img
              src={imgPrimaryResearcher}
              alt="David R.W. Sears"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col justify-between self-stretch py-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2
                  className="text-[32px] font-bold leading-[1.1] tracking-[0.38px] text-[#1e1e1e]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  David R.W. Sears
                </h2>
                <div className="flex flex-col text-[20px] leading-[1.5] text-[#444]">
                  <p className="font-semibold">Principle Investigator of MIRAGE Project</p>
                  <p className="font-normal">Associate Professor of Music Theory at the University of Michigan</p>
                </div>
              </div>
              <p className="text-[18px] font-normal leading-[1.5] text-[#444]">
                Dr. Sears leads the MIRAGE project at the intersection of music cognition, computational
                analysis, and global radio studies. His work explores how large-scale listening data reveals
                patterns in musical perception and contemporary global listening. Through MIRAGE, he develops
                open-access tools and datasets to support interdisciplinary research.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-12 items-center">
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <img src={imgSchoolIcon} alt="" className="w-6 h-6" />
                <span className="text-[18px] font-normal leading-[1.5] text-[#3b6edc]">Google Scholar</span>
              </a>
              <a
                href="mailto:drwsears@umich.edu"
                className="flex items-center gap-2"
              >
                <img src={imgMailIcon} alt="" className="w-6 h-6" />
                <span className="text-[18px] font-normal leading-[1.5] text-[#3b6edc]">drwsears@umich.edu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Research Team
// ──────────────────────────────────────────────────────────
const teamMembers = [
  {
    img: imgNganNguyen,
    name: 'Ngan V.T. Nguyen',
    role: 'Developer',
    institution: 'Vietnam National University',
    href: 'https://phys.hcmus.edu.vn/vat-ly-tin-hoc/nhan-su/ths-nguyen-vuong-thuy-ngan',
    nameColor: '#3b6edc',
  },
  {
    img: imgTommyDang,
    name: 'Tommy Dang',
    role: 'Developer',
    institution: 'Texas Tech University',
    href: 'https://www.depts.ttu.edu/cs/faculty/tommy_dang/index.php',
    nameColor: '#1e1e1e',
  },
  {
    img: imgMarzhanN,
    name: 'Marzhan Nurdauletova',
    role: 'UX/UI Design',
    institution: 'University of Michigan, Ann Arbor',
    href: 'https://www.linkedin.com/in/nurmarie/',
    nameColor: '#1e1e1e',
  },
  {
    img: imgVibhor,
    name: 'Vibhor Katiyar',
    role: 'UX/UI Design',
    institution: 'University of Michigan, Ann Arbor',
    href: 'https://www.linkedin.com/in/vibhor-katiyar-753687224/',
    nameColor: '#1e1e1e',
  },
  {
    img: imgArishahuda,
    name: 'Arishahuda S. Zakry',
    role: 'Developer',
    institution: 'University of Michigan, Ann Arbor',
    href: 'https://www.linkedin.com/in/arisha-zakry/',
    nameColor: '#1e1e1e',
  },
  {
    img: imgElizabeth,
    name: 'Elizabeth A. M. Acosta',
    role: 'Annotator',
    institution: 'Texas Tech University',
    href: 'https://www.depts.ttu.edu/visual-performing-arts/research/performing-arts-research-lab/members/acosta-elizabeth.php',
    nameColor: '#1e1e1e',
  },
  {
    img: imgChengYun,
    name: 'Cheng-Yun (Mia) Wang',
    role: 'Annotator',
    institution: 'Texas Tech University',
    href: 'https://www.depts.ttu.edu/visual-performing-arts/research/performing-arts-research-lab/members/wang-cheng-yung-mia.php',
    nameColor: '#1e1e1e',
  },
  {
    img: imgJonathan,
    name: 'Jonathan Masley',
    role: 'Annotator',
    institution: 'Texas Tech University',
    href: 'https://www.depts.ttu.edu/visual-performing-arts/research/performing-arts-research-lab/members/masley-jonathan.php',
    nameColor: '#1e1e1e',
  },
  {
    img: imgLauren,
    name: 'Lauren Peterson',
    role: 'Annotator',
    institution: 'Texas Tech University',
    href: null,
    nameColor: '#1e1e1e',
  },
  {
    img: imgTingTing,
    name: 'Ting Ting Goh',
    role: 'Annotator',
    institution: 'Texas Tech University',
    href: 'https://www.depts.ttu.edu/pragmaticism/about/people/tingtinggoh.php?v=preview',
    nameColor: '#1e1e1e',
  },
  {
    img: imgDavidPriebe,
    name: 'David Priebe',
    role: 'Annotator',
    institution: 'Texas Tech University',
    href: 'https://www.dpriebetheatre.net/about',
    nameColor: '#1e1e1e',
  },
];

function ResearchTeam() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-40 flex flex-col gap-10">
        <h2
          className="text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Research Team
        </h2>

        <div className="grid grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col gap-4 items-start">
              {/* Photo */}
              <div className="w-40 h-40 rounded-lg overflow-hidden border border-black/10 relative shrink-0">
                <img
                  src={member.img}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1">
                {member.href ? (
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] no-underline w-full"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", textDecoration: 'none' }}
                  >
                    {member.name}
                  </a>
                ) : (
                  <p
                    className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {member.name}
                  </p>
                )}
                <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{member.role}</p>
              </div>

              {/* Institution */}
              <p className="text-[16px] font-normal leading-[1.5] text-[#6b6b6b]">{member.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Affiliated Institutions
// ──────────────────────────────────────────────────────────
const institutions = [
  {
    logo: imgLogoUMich,
    name: 'Music Cognition and Computation Lab (MCCL), University of Michigan',
    location: 'Ann Arbor, Michigan, USA',
    href: null,
  },
  {
    logo: imgLogoPearl,
    name: 'Performing Arts Research Lab, Texas Tech University',
    location: 'Lubbock, Texas, USA',
    href: '#',
    nameColor: '#3b6edc',
  },
  {
    logo: imgLogoVNU,
    name: 'Vietnam National University',
    location: 'Ho Chi Minh City, Vietnam',
    href: null,
  },
  {
    logo: imgLogoIDVL,
    name: 'Interactive Data Visualization Lab, Texas Tech University',
    location: 'Lubbock, Texas, USA',
    href: null,
  },
];

function AffiliatedInstitutions() {
  return (
    <section className="w-full bg-[#edeee9]">
      <div className="max-w-[1440px] mx-auto px-20 py-40 flex flex-col gap-16">
        <h2
          className="text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Affiliated Institutions
        </h2>

        <div className="flex gap-10 items-start">
          {institutions.map((inst) => (
            <div key={inst.name} className="flex-1 flex flex-col gap-6">
              <div className="bg-white h-[200px] rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={inst.logo}
                  alt={inst.name}
                  className="w-[192px] h-[160px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                {inst.href ? (
                  <a
                    href={inst.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", textDecoration: 'none' }}
                  >
                    {inst.name}
                  </a>
                ) : (
                  <p
                    className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {inst.name}
                  </p>
                )}
                <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{inst.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Funding & Support
// ──────────────────────────────────────────────────────────
const funders = [
  {
    logo: imgLogoNEH,
    name: 'National Endowment for the Humanities',
    href: '#',
    nameColor: '#3b6edc',
    bgColor: '#edeee9',
  },
  {
    logo: imgLogoCH,
    name: 'The CH Foundation',
    href: null,
    nameColor: '#1e1e1e',
    bgColor: '#edeee9',
  },
  {
    logo: imgLogoTTU,
    name: 'J.T. & Margaret Talkington College of Visual and Performing Arts, Texas Tech University',
    href: null,
    nameColor: '#1e1e1e',
    bgColor: '#edeee9',
  },
];

function FundingAndSupport() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-40 flex flex-col gap-12">
        <h2
          className="text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Funding &amp; Support
        </h2>

        <div className="flex gap-10 items-start">
          {funders.map((funder) => (
            <div key={funder.name} className="flex-1 flex flex-col gap-6">
              <div
                className="h-[200px] rounded-lg flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: funder.bgColor }}
              >
                <img
                  src={funder.logo}
                  alt={funder.name}
                  className="w-[400px] max-w-full h-[96px] object-contain"
                />
              </div>
              {funder.href ? (
                <a
                  href={funder.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", textDecoration: 'none' }}
                >
                  {funder.name}
                </a>
              ) : (
                <p
                  className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {funder.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Footer (same as home page)
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
export default function TeamAndSupporters({
  onNavigateHome,
  onNavigateResearch,
  onNavigateContacts,
}: {
  onNavigateHome: () => void;
  onNavigateResearch?: () => void;
  onNavigateContacts?: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <Nav onNavigateHome={onNavigateHome} onNavigateResearch={onNavigateResearch ?? (() => {})} onNavigateContacts={onNavigateContacts} />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <PrimaryResearcher />
        <ResearchTeam />
        <AffiliatedInstitutions />
        <FundingAndSupport />
      </main>
      <Footer />
    </div>
  );
}
