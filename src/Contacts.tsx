import { useState } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import logoSrc from './assets/logo.png';

const LOGO_DARK = logoSrc;

const SUBJECTS = ['General Inquiry', 'Collaboration', 'Data Access', 'Technical Issue', 'Media / Press'];

// ──────────────────────────────────────────────────────────
// Nav
// ──────────────────────────────────────────────────────────
function Nav({
  onNavigateHome,
  onNavigateResearch,
  onNavigateTeam,
}: {
  onNavigateHome: () => void;
  onNavigateResearch: () => void;
  onNavigateTeam: () => void;
}) {
  return (
    <nav className="w-full border-b border-[#e0e0e0] bg-white">
      <div className="max-w-[1440px] mx-auto px-20 py-5 flex items-center justify-between">
        <div className="h-10 w-[126px] relative overflow-hidden shrink-0">
          <a href='/'>
            <img
            src={LOGO_DARK}
            alt="MIRAGE"
            className="w-full h-full object-contain invert"
          />
          </a>
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
          <span
            className="text-base font-normal text-[#444] cursor-pointer hover:text-[#1e1e1e] transition-colors"
            onClick={onNavigateTeam}
          >
            Team &amp; Supporters
          </span>
          <span className="text-base font-medium text-[#f74b0e] cursor-pointer">Contacts</span>
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
// Contact Form
// ──────────────────────────────────────────────────────────
function ContactForm() {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontWeight: 400,
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('access_key', '182cbc47-5321-4852-ace8-b63a1682b05a');
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', org ? `Organization: ${org}\n\n${message}` : message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      console.log('Web3Forms response:', data);
      if (data.success) {
        setStatus('success');
        setName(''); setOrg(''); setEmail(''); setSubject('General Inquiry'); setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Web3Forms fetch error:', err);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#1e1e1e] rounded-3xl p-14 flex flex-col gap-12 items-end w-full">

      {/* Row 1: My name is … from … */}
      <div className="flex gap-8 items-center w-full">
        <p
          className="text-[32px] text-white leading-[1.1] tracking-[0.384px] shrink-0 w-60"
          style={labelStyle}
        >
          My name is
        </p>
        <div className="border-b border-[#e0e0e0] flex items-center h-14 py-4 w-[280px] shrink-0">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            className="flex-1 bg-transparent text-[20px] font-normal text-[#8a8a8a] placeholder-[#8a8a8a] outline-none leading-[1.5]"
          />
          <span className="text-[20px] text-[#f74b0e] leading-[1.5] shrink-0">*</span>
        </div>
        <p
          className="text-[32px] text-white leading-[1.1] tracking-[0.384px] shrink-0"
          style={labelStyle}
        >
          from
        </p>
        <div className="border-b border-[#e0e0e0] flex items-center h-14 py-4 flex-1">
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="University / Organization"
            className="flex-1 bg-transparent text-[20px] font-normal text-[#8a8a8a] placeholder-[#8a8a8a] outline-none leading-[1.5]"
          />
        </div>
      </div>

      {/* Row 2: Reach me at … */}
      <div className="flex gap-8 items-center w-full">
        <p
          className="text-[32px] text-white leading-[1.1] tracking-[0.384px] shrink-0 w-60"
          style={labelStyle}
        >
          Reach me at
        </p>
        <div className="border-b border-[#e0e0e0] flex items-center h-14 py-4 flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-transparent text-[20px] font-normal text-[#8a8a8a] placeholder-[#8a8a8a] outline-none leading-[1.5]"
          />
          <span className="text-[20px] text-[#f74b0e] leading-[1.5] shrink-0">*</span>
        </div>
      </div>

      {/* Row 3: Subject is … */}
      <div className="flex gap-8 items-start w-full">
        <p
          className="text-[32px] text-white leading-[1.1] tracking-[0.384px] shrink-0 w-60 pt-3"
          style={labelStyle}
        >
          Subject is <span className="text-[#f74b0e]">*</span>
        </p>
        <div className="flex flex-wrap gap-3 flex-1">
          {SUBJECTS.map((s) => {
            const selected = subject === s;
            return (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`h-14 px-6 rounded-xl border-2 text-[20px] leading-[1.5] transition-colors ${
                  selected
                    ? 'bg-[#f3f3f3] border-[#e0e0e0] text-[#1e1e1e] font-semibold'
                    : 'bg-transparent border-[#e0e0e0] text-white font-normal hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Row 4: To discuss … */}
      <div className="flex flex-col gap-4 w-full">
        <p
          className="text-[32px] text-white leading-[1.1] tracking-[0.384px] shrink-0 w-60"
          style={labelStyle}
        >
          To discuss <span className="text-[#f74b0e]">*</span>
        </p>
        <div className="border-b border-[#e0e0e0] pb-24 pt-4 w-full">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows={5}
            className="w-full bg-transparent text-[20px] font-normal text-[#8a8a8a] placeholder-[#8a8a8a] outline-none leading-[1.5] resize-none"
          />
        </div>
      </div>

      {/* Submit */}
      {status === 'success' && (
        <p className="text-green-400 text-[16px] font-medium w-full text-right">
          Message sent! We'll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-[16px] font-medium w-full text-right">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="h-14 w-[232px] flex items-center justify-center bg-[#3b6edc] rounded-2xl text-[16px] font-semibold text-white hover:bg-[#2f5cbf] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
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
              <p className="text-[20px] font-semibold text-white leading-[1.5]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
              <p className="text-[20px] font-semibold text-white leading-[1.5]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
          <p className="text-[16px] font-normal text-[#c1c1c1]">© 2024 MIRAGE Research Project. All rights reserved.</p>
          <p className="text-[16px] font-normal text-[#c1c1c1]">MIRAGE is licensed under a Creative Commons Attribution</p>
        </div>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────
// Page root
// ──────────────────────────────────────────────────────────
export default function Contacts({
  onNavigateHome,
  onNavigateResearch,
  onNavigateTeam,
}: {
  onNavigateHome: () => void;
  onNavigateResearch: () => void;
  onNavigateTeam: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center overflow-x-hidden">
      <Nav
        onNavigateHome={onNavigateHome}
        onNavigateResearch={onNavigateResearch}
        onNavigateTeam={onNavigateTeam}
      />
      <main className="w-full flex flex-col items-center">

        {/* Hero header */}
        <section className="w-full bg-white">
          <div className="max-w-[1440px] mx-auto px-20 pt-[120px] pb-20 flex items-start justify-between">
            <h1
              className="text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e] w-[843px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Have an idea or questions?<br />Let's discuss it
            </h1>
            <a
              href="mailto:drwsears@umich.edu"
              className="flex items-center gap-2 py-4 shrink-0"
            >
              <Mail className="w-6 h-6 shrink-0 text-[#3b6edc]" />
              <span className="text-[20px] font-normal leading-[1.5] text-[#3b6edc] whitespace-nowrap">
                drwsears@umich.edu
              </span>
            </a>
          </div>
        </section>

        {/* Contact form */}
        <section className="w-full bg-white pb-40">
          <div className="max-w-[1440px] mx-auto px-20">
            <ContactForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
