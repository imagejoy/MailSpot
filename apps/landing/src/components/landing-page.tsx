import { Link } from '@tanstack/react-router';
import { Mail, ArrowRight, Brain, Sliders, Zap, ChevronRight, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero3D, LogoMini3D } from '@/components/hero-3d';

const features = [
  {
    icon: Mail,
    title: 'Smart auto-replies',
    description: 'MailSpot reads every incoming email, understands the intent, and sends a reply that matches your voice and handles the request.',
    stat: '90%',
    statLabel: 'emails handled',
  },
  {
    icon: Zap,
    title: 'Instant response',
    description: 'Replies go out in seconds, not hours. No backlog, no waiting, no dropped threads.',
    stat: '10x',
    statLabel: 'faster replies',
  },
  {
    icon: Brain,
    title: 'Context-aware AI',
    description: 'MailSpot remembers conversation history and customer details so every reply feels personal, not robotic.',
    stat: '0',
    statLabel: 'generic responses',
  },
  {
    icon: Sliders,
    title: 'Your rules, your tone',
    description: 'Set your tone, define escalation triggers, and create rules for edge cases. MailSpot follows your playbook.',
    stat: '100%',
    statLabel: 'your control',
  },
];

const steps = [
  {
    number: '01',
    title: 'Reads & categorizes your inbox',
    description: 'MailSpot reads every incoming email, understands the intent, and organizes it automatically — no setup, no rules to write.',
  },
  {
    number: '02',
    title: 'Researches who you\'re talking to',
    description: 'Before drafting a reply, MailSpot looks up the sender — their history, context, and relationship with your business.',
  },
  {
    number: '03',
    title: 'Trained on your company data',
    description: 'MailSpot learns your products, policies, pricing, and tone. It replies the way you would, because it knows what you know.',
  },
  {
    number: '04',
    title: 'Takes action beyond the inbox',
    description: 'From logging bookings to updating your CRM, MailSpot can trigger real workflows based on what\'s in the email — not just reply to it.',
  },
];

const securityFeatures = [
  { icon: Lock, title: 'Your data is never shared', description: "We process your emails to generate replies — that's it. Your content is never stored beyond the session, never sold, and never used to train any AI model." },
  { icon: Sliders, title: 'You decide what gets sent', description: 'Run MailSpot in draft-only mode, require approval before every send, or let it go fully automatic. You set the rules — and you can change them any time.' },
  { icon: Eye, title: 'Nothing happens behind your back', description: 'Every reply MailSpot sends is logged with the original email, the reason it was handled automatically, and an exact timestamp. Full transparency, always.' },
];

const font = "'Onest', system-ui, sans-serif";
const outer = '#f7f7f4';
const container = '#f0efeb';
const ink = '#0a0a0a';
const muted = '#666';
const faint = '#999';
const orange = '#f56b39';

export function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: outer, fontFamily: font, color: ink }}>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-black/[0.06]" style={{ backgroundColor: outer }}>
        <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="ms-logo-group flex items-center gap-0" style={{ cursor: 'default' }}>
              <svg width="28" height="28" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <g transform="translate(40, 40)">
                  <line x1="20" y1="-15" x2="20" y2="15" stroke="#f97316" strokeWidth="6" strokeLinecap="round" className="ms-spin-line" style={{ transformOrigin: '20px 0px' }} />
                  <line x1="20" y1="15" x2="-20" y2="0" stroke="#f97316" strokeWidth="6" strokeLinecap="round" className="ms-spin-line" style={{ transformOrigin: '0px 7.5px' }} />
                  <line x1="-20" y1="0" x2="20" y2="-15" stroke="#f97316" strokeWidth="6" strokeLinecap="round" className="ms-spin-line" style={{ transformOrigin: '0px -7.5px' }} />
                </g>
                <style>{`
                  @keyframes ms-spin { 0% { transform: rotate(0deg); } 25% { transform: rotate(180deg); } 100% { transform: rotate(180deg); } }
                  .ms-spin-line { animation: none; }
                  .ms-logo-group:hover .ms-spin-line { animation: ms-spin 2s linear forwards; }
                `}</style>
              </svg>
              <span style={{ color: ink, fontFamily: "'HandelGothicEF', sans-serif", fontSize: '15.75px', fontWeight: 'normal', letterSpacing: '0.04em', textTransform: 'uppercase' }}>MailSpot</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {['Product', 'How it works', 'Security', 'Pricing'].map(label => (
              <a key={label} href="#" className="text-[14px] text-[#666] hover:text-[#0a0a0a] transition-colors duration-200">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/" hash="login" className="text-[14px] text-[#666] hover:text-[#0a0a0a] transition-colors duration-200">
              Sign in
            </Link>
            <Link to="/" hash="login">
              <Button
                className="rounded-full text-[14px] h-9 px-5 font-medium bg-[#26251e] text-white hover:bg-[#3a392f] hover:scale-[1.02] cursor-pointer transition-all duration-500"
              >
                Try for free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero — text */}
      <section className="mx-auto max-w-[1360px] px-6 pt-20 pb-16">
        <h1
          className="leading-[1.1] max-w-none mt-10"
          style={{ color: ink, fontFamily: "'Shruti', sans-serif", fontWeight: 'normal', fontSize: '40px' }}
        >
          The AI agent that answers emails
        </h1>
        <p className="mt-3 text-[20px] font-normal leading-relaxed max-w-[660px]" style={{ color: '#575757', fontFamily: "'DM Sans', sans-serif" }}>
          MailSpot reads your email thread, understands context, connects to your company data, researches the recipient and drafts email replies.
        </p>
        <div className="mt-6">
          <Link to="/" hash="login">
            <Button
              className="rounded-full text-[15px] h-11 px-7 gap-2 font-medium bg-[#26251e] text-white hover:bg-[#3a392f] hover:scale-[1.02] cursor-pointer transition-all duration-500"
            >
              Try for free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero — demo container */}
      <div className="mx-auto max-w-[1360px] px-6 pb-6">
        <div className="rounded-[4px] overflow-hidden border border-black/[0.03]" style={{ backgroundColor: container }}>
          <Hero3D />
        </div>
      </div>

      {/* Logos */}
      <section className="mx-auto max-w-[1360px] px-6 py-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-center mb-5" style={{ color: faint }}>
          Trusted by teams at
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { name: 'Leadster', weight: '600', transform: 'none' },
            { name: 'ITAB', weight: '700', transform: 'uppercase' },
            { name: 'reco', weight: '700', transform: 'lowercase' },
            { name: 'MedHelp', weight: '500', transform: 'none' },
            { name: 'Agana', weight: '600', transform: 'none' },
            { name: 'AddSecure', weight: '500', transform: 'none' },
            { name: 'POLYGIENE', weight: '600', transform: 'uppercase' },
            { name: 'PaidIt', weight: '700', transform: 'none' },
          ].map(({ name, weight, transform }) => (
            <div
              key={name}
              className="rounded-[4px] border border-black/[0.08] flex items-center justify-center h-[72px]"
              style={{ backgroundColor: '#ffffff' }}
            >
              <span
                className="text-[13px] select-none"
                style={{ color: ink, fontWeight: weight, textTransform: transform as any }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-[1360px] px-6 py-6">
        <div className="rounded-[4px] p-10 sm:p-14 border border-black/[0.03]" style={{ backgroundColor: container }}>
          <p className="text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ color: faint }}>Features</p>
          <h2
            className="text-[34px] sm:text-[42px] font-semibold leading-tight tracking-tight max-w-[560px]"
            style={{ color: ink }}
          >
            Everything you need to automate email
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed max-w-[460px]" style={{ color: orange }}>
            Built for founders, support teams, and anyone drowning in email who needs an AI agent that actually understands context.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mt-12">
            {features.map((f) => (
              <div key={f.title} className="rounded-[2px] p-7 sm:p-8 border border-black/[0.05]" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: ink, color: '#fff' }}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[28px] font-bold" style={{ color: ink }}>{f.stat}</span>
                    <p className="text-[12px]" style={{ color: faint }}>{f.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-[17px] font-semibold" style={{ color: ink }}>{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: muted }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1360px] px-6 py-6">
        <div className="rounded-[4px] p-10 sm:p-14 border border-black/[0.03]" style={{ backgroundColor: container }}>
          <p className="text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ color: faint }}>How it works</p>
          <h2
            className="text-[34px] sm:text-[42px] font-semibold leading-tight tracking-tight"
            style={{ color: ink }}
          >
            More than AI-written emails
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed max-w-[460px]" style={{ color: orange }}>
            Most AI email tools just reword your drafts. MailSpot is an agent — it researches, reasons, knows your business, and takes action.
          </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-14">
            {steps.map((s) => (
              <div key={s.number}>
                <span
                  className="text-[56px] font-bold leading-none block"
                  style={{ color: `${ink}18` }}
                >
                  {s.number}
                </span>
                <h3 className="mt-3 text-[16px] font-semibold" style={{ color: ink }}>{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: muted }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-[1360px] px-6 py-6">
        <div className="rounded-[4px] p-10 sm:p-14 border border-black/[0.03]" style={{ backgroundColor: container }}>
          <p className="text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ color: faint }}>Enterprise security</p>
          <h2
            className="text-[34px] sm:text-[42px] font-semibold leading-tight tracking-tight"
            style={{ color: ink }}
          >
            Private & secure by design
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 mt-12">
            {securityFeatures.map((sf) => (
              <div key={sf.title} className="rounded-[2px] p-6 border border-black/[0.05]" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: ink, color: '#fff' }}
                >
                  <sf.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[16px] font-semibold" style={{ color: ink }}>{sf.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: muted }}>{sf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1360px] px-6 py-6 pb-24">
        <div className="rounded-[4px] p-14 sm:p-20 text-center border border-black/[0.03]" style={{ backgroundColor: container }}>
          <h2
            className="text-[28px] sm:text-[34px] font-semibold leading-tight tracking-tight"
            style={{ color: ink }}
          >
            Stop drowning in email.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed max-w-[420px] mx-auto" style={{ color: muted }}>
            Let MailSpot handle the routine replies so you can focus on what moves the needle.
          </p>
          <div className="mt-10">
            <Link to="/" hash="login">
              <Button
                className="rounded-full text-[15px] h-12 px-8 gap-2 font-medium bg-[#26251e] text-white hover:bg-[#3a392f] hover:scale-[1.02] cursor-pointer transition-all duration-500"
              >
                Try for free <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] py-8" style={{ backgroundColor: outer }}>
        <div className="mx-auto max-w-[1360px] px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" style={{ color: ink }} />
            <span className="text-[14px]" style={{ color: muted }}>MailSpot</span>
          </div>
          <p className="text-[13px]" style={{ color: faint }}>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
