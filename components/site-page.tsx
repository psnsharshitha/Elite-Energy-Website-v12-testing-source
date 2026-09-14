"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, CircleGauge, Globe2, Menu, Network, ShieldCheck, X, Zap, type LucideIcon } from "lucide-react";

type Item = { label: string; href: string };
type Group = { label: string; href: string; items?: Item[] };
type LinkProps = { href: string; className?: string; children: ReactNode; onClick?: () => void; "aria-label"?: string };

function Link({ href, className, children, onClick, "aria-label": ariaLabel }: LinkProps) {
  return <a href={href} className={className} onClick={onClick} aria-label={ariaLabel}>{children}</a>;
}

const nav: Group[] = [
  { label: "About", href: "/about", items: [
    { label: "Our Story", href: "/about/our-story" }, { label: "Leadership", href: "/about/leadership" },
    { label: "Our Vision", href: "/about/our-vision" }, { label: "Global Presence", href: "/about/global-presence" },
  ]},
  { label: "Expertise", href: "/expertise", items: [
    { label: "Production & Allocation Excellence", href: "/expertise/production-allocation-excellence" },
    { label: "Operational Excellence", href: "/expertise/operational-excellence" },
    { label: "Digital Strategy & Advisory", href: "/expertise/digital-strategy-advisory" },
    { label: "Engineering Assurance", href: "/expertise/engineering-assurance" },
  ]},
  { label: "Solutions", href: "/solutions", items: [
    { label: "EnergySys", href: "/solutions/energysys" }, { label: "ePMF", href: "/solutions/epmf" },
    { label: "Hydrocarbon Allocation as a Service", href: "/solutions/haas" },
    { label: "Cargo & Transportation", href: "/solutions/cargo-transportation" },
    { label: "Connected Operations", href: "/solutions/connected-operations" },
  ]},
  { label: "Resources", href: "/resources", items: [
    { label: "Case Studies", href: "/resources/case-studies" }, { label: "Brochures", href: "/resources/brochures" },
    { label: "Insights", href: "/resources/insights" },
  ]},
  { label: "Partnerships", href: "/partnerships" },
  { label: "Careers", href: "/careers" },
];

const copy: Record<string, { eyebrow: string; title: string; intro: string; points?: string[] }> = {
  about: { eyebrow: "About Elite Energy", title: "Built around the realities of energy operations.", intro: "We combine deep operational knowledge, engineering discipline and digital expertise to help energy businesses make confident decisions and sustain performance.", points: ["Operator-led perspective", "Technology with a clear operational purpose", "Long-term capability, not short-term dependency"] },
  "about/our-story": { eyebrow: "Our Story", title: "From specialist consultancy to connected energy partner.", intro: "Elite Energy was founded on a simple belief: complex energy operations improve when the right people, processes and technology work as one. Our work has grown from specialist delivery into a broader, connected portfolio of advisory expertise and practical solutions." },
  "about/leadership": { eyebrow: "Leadership", title: "Experienced leadership. Practical judgement.", intro: "Our leadership team brings together commercial, operational, engineering and technology experience. They set the direction, stay close to delivery and create the conditions for our people and clients to succeed." },
  "about/our-vision": { eyebrow: "Our Vision", title: "A more connected, assured and intelligent energy industry.", intro: "We see an industry where trusted data, capable people and well-designed processes turn complexity into clarity, and where digital progress delivers measurable operational value." },
  "about/global-presence": { eyebrow: "Global Presence", title: "Global perspective. Local understanding.", intro: "We support energy organisations across international markets, adapting our delivery to local operating environments while applying consistent standards of assurance and expertise." },
  expertise: { eyebrow: "Expertise", title: "Expertise that moves from strategy into operation.", intro: "Our specialists work across production, allocation, operational improvement, digital strategy and engineering assurance, connecting decisions at leadership level with delivery on the ground." },
  "expertise/production-allocation-excellence": { eyebrow: "Production & Allocation Excellence", title: "Confidence in every production number.", intro: "We help operators strengthen production accounting and hydrocarbon allocation through clear governance, robust processes, fit-for-purpose systems and specialist assurance.", points: ["Allocation design and optimisation", "Production accounting assurance", "Process, data and system improvement"] },
  "expertise/operational-excellence": { eyebrow: "Operational Excellence", title: "Better performance, embedded in the way work gets done.", intro: "We help teams identify friction, improve control and build repeatable ways of working that support safer, more efficient and more resilient operations.", points: ["Operating model and process design", "Performance improvement", "Change adoption and capability building"] },
  "expertise/digital-strategy-advisory": { eyebrow: "Digital Strategy & Advisory", title: "Digital progress with an operational purpose.", intro: "We connect business priorities to a practical digital roadmap, helping leaders choose, shape and deliver technology that creates lasting value rather than isolated tools.", points: ["Digital strategy and roadmaps", "Technology and data advisory", "Delivery assurance"] },
  "expertise/engineering-assurance": { eyebrow: "Engineering Assurance", title: "Independent confidence for critical decisions.", intro: "Our engineering assurance work gives leaders a clear view of technical risk, readiness and compliance across projects, assets and operational change.", points: ["Technical review and assurance", "Readiness and risk assessment", "Governance and decision support"] },
  solutions: { eyebrow: "Solutions", title: "Practical solutions for complex energy operations.", intro: "Our solution portfolio combines proven technology, energy-domain configuration and specialist support, designed to accelerate value without compromising control." },
  "solutions/energysys": { eyebrow: "EnergySys", title: "Cloud-native production allocation, shaped for your operation.", intro: "We help energy businesses configure, implement and continuously improve EnergySys, turning complex production data into trusted, auditable operational insight." },
  "solutions/epmf": { eyebrow: "ePMF", title: "A clearer way to manage production measurement information.", intro: "ePMF creates a structured, accessible foundation for production measurement data, documentation and governance, supporting consistency across assets and teams." },
  "solutions/haas": { eyebrow: "Hydrocarbon Allocation as a Service", title: "Allocation expertise, delivered as an ongoing service.", intro: "HaaS combines specialist people, governed processes and enabling technology to operate and support hydrocarbon allocation with flexibility, transparency and assurance." },
  "solutions/cargo-transportation": { eyebrow: "Cargo & Transportation", title: "Connected visibility across complex product movements.", intro: "We help organisations improve planning, control and reconciliation across cargo and transportation workflows, from nomination through movement to settlement." },
  "solutions/connected-operations": { eyebrow: "Connected Operations", title: "Turn frontline work into connected operational intelligence.", intro: "Combining Zaptic with Microsoft Fabric connects frontline execution, operational data and enterprise insight, helping teams act consistently and improve continuously." },
  resources: { eyebrow: "Resources", title: "Ideas and evidence for better energy decisions.", intro: "Explore practical case studies, solution brochures and perspectives from our specialists." },
  "resources/case-studies": { eyebrow: "Case Studies", title: "What better looks like in practice.", intro: "Explore how operational expertise, focused technology and close collaboration have helped energy organisations address complex challenges." },
  "resources/brochures": { eyebrow: "Brochures", title: "A closer look at our capabilities.", intro: "Download concise overviews of Elite Energy expertise, solutions and delivery approaches." },
  "resources/insights": { eyebrow: "Insights", title: "Perspectives from inside energy operations.", intro: "Read practical thinking on production, allocation, digital delivery, connected operations and engineering assurance." },
  partnerships: { eyebrow: "Partnerships", title: "Stronger outcomes through the right partnerships.", intro: "We work with technology providers and specialist organisations whose capabilities complement our energy expertise, creating more connected, complete solutions for clients." },
  careers: { eyebrow: "Careers", title: "Do meaningful work with people who know the industry.", intro: "Join a team that values expertise, curiosity and practical delivery. At Elite Energy, you will work on real operational challenges and keep building your capability." },
  "careers/cadet-programme": { eyebrow: "Cadet Programme", title: "A supported start to a career in energy.", intro: "Our Cadet Programme gives emerging talent structured development, real project exposure and guidance from experienced specialists." },
  contact: { eyebrow: "Contact", title: "Let’s talk about what your operation needs next.", intro: "Tell us about the challenge, opportunity or capability you are exploring. We will connect you with the right person at Elite Energy." },
};

const pillars: { icon: LucideIcon; label: string; text: string; href: string }[] = [
  { icon: Zap, label: "Production & allocation", text: "Build confidence in data, systems and decisions across the production lifecycle.", href: "/expertise/production-allocation-excellence" },
  { icon: ShieldCheck, label: "Operational assurance", text: "Strengthen performance and control through practical, embedded improvement.", href: "/expertise/operational-excellence" },
  { icon: Network, label: "Digital & connected operations", text: "Connect strategy, frontline execution and enterprise intelligence.", href: "/expertise/digital-strategy-advisory" },
];

const leaders = [
  {
    name: "Stephen J. Finnie-Locke",
    role: "Founder and Chief Executive Officer",
    photo: "/leaders/stephen-finnie-locke.jpg",
    bio: "Stephen founded Elite Energy to bridge the gap between engineering expertise and modern technology. He brings more than 20 years of experience leading digital transformation and operational change across production, transportation and offtake for major energy organisations.",
    focus: "Client relationships, operational transformation and sustainable growth",
  },
  {
    name: "Adam Crane",
    role: "Director for Australia and General Manager, Sales, Bids and Governance",
    photo: "/leaders/adam-crane.jpg",
    bio: "Adam combines an engineering background with a strong focus on innovation, commercial delivery and continuous improvement. He supports Elite Energy's growth in Australia while leading sales, bids and governance across the business.",
    focus: "Australian delivery, commercial governance and continuous improvement",
  },
  {
    name: "Kumar Gaurav",
    role: "General Manager, Product and Strategy",
    photo: "/leaders/kumar-gaurav.jpg",
    bio: "Kumar aligns product development with business objectives and market needs. With nearly 18 years of upstream and midstream experience, he connects petroleum engineering, commercial strategy and digital transformation.",
    focus: "Product strategy, hydrocarbon operations and digital transformation",
  },
  {
    name: "Harshitha Paruchuri",
    role: "Regional Delivery Lead and General Manager, Technology",
    photo: "/leaders/harshitha-paruchuri.jpg",
    bio: "Harshitha leads specialised delivery and technology capability across multiple regions. Her background in project delivery and technology supports complex solutions, strong client relationships and consistently high delivery standards.",
    focus: "Regional delivery, technology implementation and client outcomes",
  },
  {
    name: "Pavan Chitragar",
    role: "General Manager, Midstream",
    photo: "/leaders/pavan-chitragar.jpg",
    bio: "Pavan is responsible for building and leading Elite Energy's Midstream business globally. He focuses on growing our market presence, developing client opportunities, shaping our proposition and capabilities, and ensuring strong delivery across the full client lifecycle.",
    focus: "Global midstream growth, client development and delivery",
  },
  {
    name: "Fabio Terzini",
    role: "Chief Technology Officer, CarbonOptics",
    photo: "/leaders/fabio-terzini.jpg",
    bio: "Fabio is a chemical engineer with a PhD in reservoir engineering and international experience across engineering and IT projects. He helps clients navigate emissions regulation, compliance and the energy transition through the CarbonOptics joint venture.",
    focus: "Engineering assurance, emissions management and energy transition",
  },
];

function Brand() { return <Link href="/" className="brand" aria-label="Elite Energy home"><img src="/elite-energy-logo.png" alt="Elite Energy"/></Link>; }

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell"><Brand />
    <nav className="desktop-nav" aria-label="Primary navigation">{nav.map((group) => <div className="nav-group" key={group.label}><Link href={group.href}>{group.label}{group.items && <ChevronDown size={14} />}</Link>{group.items && <div className="dropdown">{group.items.map((item)=><Link href={item.href} key={item.href}>{item.label}</Link>)}</div>}</div>)}<Link href="/contact" className="nav-contact">Contact</Link></nav>
    <button className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={()=>setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(group=><div key={group.label}><Link href={group.href} onClick={()=>setOpen(false)}>{group.label}</Link>{group.items?.map(item=><Link className="mobile-sub" href={item.href} key={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}</div>)}<Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link></nav>}</header>;
}

function Footer() { return <footer><div className="footer-grid"><div><Brand /><p>Your partner in digital operations and hydrocarbon excellence.</p></div><div><h3>Explore</h3><Link href="/expertise">Expertise</Link><Link href="/solutions">Solutions</Link><Link href="/resources">Resources</Link></div><div><h3>Company</h3><Link href="/about">About</Link><Link href="/partnerships">Partnerships</Link><Link href="/careers">Careers</Link></div><div><h3>Start a conversation</h3><Link className="footer-cta" href="/contact">Contact Elite Energy <ArrowRight size={16}/></Link></div></div><div className="footer-base"><span>© {new Date().getFullYear()} Elite Energy</span><span>Edinburgh · Perth · Houston</span></div></footer>; }

function FlowVisual() {
  return <div className="flow-visual" aria-label="Connected hydrocarbon operations illustration">
    <svg viewBox="0 0 620 520" role="img">
      <defs><linearGradient id="flow" x1="0" x2="1"><stop stopColor="#27B560"/><stop offset="1" stopColor="#B93680"/></linearGradient></defs>
      <path className="flow-line" d="M88 264 C166 264 184 144 268 144 S378 260 448 260 S500 168 560 168"/>
      <path className="flow-line secondary" d="M86 264 C156 264 174 382 270 382 S388 298 448 298 S510 376 570 376"/>
      <g className="hex"><path d="M229 81 292 45l63 36v72l-63 36-63-36z"/><text x="292" y="112">DATA</text></g>
      <g className="hex h2"><path d="M385 218 448 182l63 36v72l-63 36-63-36z"/><text x="448" y="249">DECIDE</text></g>
      <g className="hex h3"><path d="M207 321 270 285l63 36v72l-63 36-63-36z"/><text x="270" y="352">ASSURE</text></g>
      <circle className="node n1" cx="88" cy="264" r="9"/><circle className="node n2" cx="560" cy="168" r="9"/><circle className="node n3" cx="570" cy="376" r="9"/>
    </svg>
    <div className="photo-card"><img src="/elite-energy-operations.png" alt="Energy operations team reviewing production information"/><span>Connected from field to enterprise</span></div>
  </div>
}

function HomePage() { return <><Header /><main>
  <section className="hero"><div className="hero-content"><div className="hero-copy-wrap"><p className="eyebrow">DIGITAL OPERATIONS AND HYDROCARBON EXCELLENCE</p><h1>Engineering clarity into every energy operation<span>.</span></h1><p className="hero-copy">Elite Energy combines deep industry knowledge with practical digital solutions to improve production, allocation, offtake and transport.</p><div className="hero-actions"><Link className="button primary" href="/expertise">Explore our expertise <ArrowRight size={18}/></Link><Link className="button outline" href="/solutions">View solutions <ArrowRight size={18}/></Link></div><div className="proof-row"><span><b>30+</b> successful EnergySys implementations</span><span><b>100+</b> years of combined industry experience</span></div></div><FlowVisual/></div></section>
  <section className="intro-band"><div><p className="eyebrow">WHY ELITE ENERGY</p><h2>Real operations experience, built into every solution.</h2></div><p>Our engineering-led, IT-driven teams understand the commercial agreements, operational processes and technology decisions behind trusted hydrocarbon management. We work with clients, not around them.</p></section>
  <section className="pillars">{pillars.map(({icon:Icon,...p},i)=><Link className="pillar" href={p.href} key={p.label}><div className="pillar-top"><Icon/><span>0{i+1}</span></div><h3>{p.label}</h3><p>{p.text}</p><span className="text-link">Explore capability <ArrowRight size={16}/></span></Link>)}</section>
  <section className="solution-feature"><div className="solution-console"><div className="console-top"><span>LIVE OPERATIONS VIEW</span><i/></div><div className="console-metric"><CircleGauge/><div><strong>Trusted</strong><span>allocation results</span></div></div><div className="console-flow"><span>FIELD</span><i/><span>ALLOCATION</span><i/><span>REPORTING</span></div></div><div><p className="eyebrow">CONNECTED OPERATIONS</p><h2>From frontline action to enterprise insight.</h2><p>Zaptic and Microsoft Fabric connect daily execution, operational data and enterprise reporting, giving teams one governed flow from the field to decision-makers.</p><p className="ecosystem-note">Our technology ecosystem also includes <a href="https://allocule.dev/" target="_blank" rel="noopener noreferrer">Allocule <ArrowRight size={14}/></a></p><Link className="button outline" href="/solutions/connected-operations">Explore Connected Operations <ArrowRight size={18}/></Link></div></section>
  <section className="global"><div><p className="eyebrow">Global reach</p><h2>International experience.<br/>One standard of delivery.</h2><p>Our specialists work across markets and operating environments, bringing global lessons to local challenges.</p><Link className="text-link" href="/about/global-presence">View our global presence <ArrowRight size={16}/></Link></div><div className="globe-card"><Globe2/><span>Connected across<br/>energy markets</span></div></section>
  <section className="cta"><p className="eyebrow">A CLEARER WAY FORWARD</p><h2>What could we help you improve<span>.</span></h2><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section>
  </main><Footer /></>;
}

function StandardPage({ slug }: { slug: string }) {
  const data = copy[slug] ?? copy.about;
  const group = nav.find(g => slug === g.href.slice(1) || g.items?.some(i=>i.href.slice(1)===slug));
  const childLinks = group?.items ?? [];
  return <><Header/><main><section className="page-hero"><div className="page-hero-inner"><p className="eyebrow">{data.eyebrow}</p><h1>{data.title}<span>.</span></h1><p>{data.intro}</p></div><div className="page-motif" aria-hidden="true"><i/><i/><i/><i/></div></section>
    <section className="page-body"><div className="page-copy"><p className="section-kicker">Our perspective</p><h2>Experience shaped around the outcome.</h2><p>{data.intro}</p>{data.points && <ul>{data.points.map(p=><li key={p}><span/> {p}</li>)}</ul>}<Link className="button primary" href="/contact">Talk to our team <ArrowRight size={18}/></Link></div>
    <aside className="page-aside"><span>Explore</span>{childLinks.length ? childLinks.map(i=><Link href={i.href} key={i.href}>{i.label}<ArrowRight size={15}/></Link>) : <><Link href="/expertise">Our expertise <ArrowRight size={15}/></Link><Link href="/solutions">Our solutions <ArrowRight size={15}/></Link></>}</aside></section>
    <section className="cta compact"><p className="eyebrow">WORK WITH ELITE ENERGY</p><h2>Bring clarity to your next challenge<span>.</span></h2><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section></main><Footer/></>;
}

function VisionPage() {
  const principles = [
    { number: "01", title: "Solve the problem behind the project", text: "Elite Energy was founded in response to a recurring challenge: ambitious projects can still fall short when experienced leadership and genuine subject-matter expertise are missing. We bring both into the work from the outset." },
    { number: "02", title: "Build capability, not dependency", text: "Lasting progress depends on capable people and strong teams. We combine experienced specialists with structured development, real project exposure and mentorship that helps the next generation grow." },
    { number: "03", title: "Commit to the outcome", text: "Commitment means standing beside our clients, taking ownership and delivering with integrity. We stay close to the work and measure success by the value our clients can sustain after delivery." },
  ];
  return <><Header/><main>
    <section className="page-hero vision-hero"><div className="page-hero-inner"><p className="eyebrow">OUR VISION</p><h1>Progress built on experience, commitment and capability<span>.</span></h1><p>Our vision is to help energy organisations evolve with confidence by combining deep industry knowledge, practical leadership and technology chosen for a clear operational purpose.</p></div><div className="page-motif" aria-hidden="true"><i/><i/><i/><i/></div></section>
    <section className="vision-origin"><div><p className="eyebrow">WHY ELITE ENERGY EXISTS</p><h2>Transformation needs more than good technology.</h2></div><div><p>Elite Energy began with Stephen Finnie-Locke's belief that complex change succeeds when experienced people remain actively involved. Technology matters, but it delivers lasting value only when it is supported by sound judgement, hands-on guidance and a real understanding of the operating environment.</p><p>That belief still shapes how we work: bringing clarity to complexity and helping clients create solutions they can trust, operate and continue to improve.</p></div></section>
    <section className="vision-principles"><div className="vision-heading"><p className="eyebrow">WHAT GUIDES US</p><h2>Three principles behind our decisions.</h2></div><div className="vision-card-grid">{principles.map(item=><article className="vision-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section className="vision-future"><div className="vision-portrait"><img src="/leaders/stephen-finnie-locke.jpg" alt="Stephen J. Finnie-Locke, Founder and Chief Executive Officer"/><span>Stephen J. Finnie-Locke<br/>Founder and CEO</span></div><div><p className="eyebrow">LOOKING FORWARD</p><h2>Technology should serve the operation.</h2><p>The future is not about chasing every new platform. It is about secure, scalable and robust solutions built with the right technology for the right purpose.</p><p>Cloud, AI and low-code tools all have a role when they meet a genuine business need. We see AI as a way to accelerate people rather than replace them, and digital capability as something that should extend across the organisation.</p><p>Above all, progress remains human. Our strongest outcomes come from working with our clients, not simply for them — through collaboration, trust and shared ambition.</p><Link className="text-link vision-link" href="/about/leadership">Meet our leadership team <ArrowRight size={16}/></Link></div></section>
    <section className="cta compact"><p className="eyebrow">MOVE FORWARD WITH CONFIDENCE</p><h2>Build change your organisation can sustain<span>.</span></h2><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section>
  </main><Footer/></>;
}

function PartnershipsPage() {
  const partners = [
    { name: "EnergySys", label: "Platform partnership", href: "https://www.energysys.com/", text: "Elite Energy is an EnergySys partner, accredited trainer and value-added reseller. With more than 30 successful implementations, we combine platform configuration with deep production and allocation expertise." },
    { name: "iNNOVATEQ", label: "Energy technology", href: "https://innovateq.digital/", text: "iNNOVATEQ brings more than 20 years of experience in digital transformation and IT solutions for the energy sector, with roots in petroleum operations and a shared focus on practical, fit-for-purpose delivery." },
    { name: "Zaptic", label: "Connected operations", href: "https://zaptic.com/", text: "Zaptic's Connected Worker Platform digitises frontline workflows, captures field insight and helps improve safety and operational performance. Elite configures and implements the platform around each client's needs." },
    { name: "Nexia Edwards Marshall", label: "CarbonOptics joint venture", href: "https://www.nexiaem.com.au/", text: "Together with Nexia Edwards Marshall, we established CarbonOptics to help organisations manage emissions, navigate evolving requirements and make measurable progress towards their sustainability goals." },
  ];
  return <><Header/><main>
    <section className="page-hero partnerships-hero"><div className="page-hero-inner"><p className="eyebrow">OUR PARTNERSHIPS</p><h1>Collaboration over competition<span>.</span></h1><p>Complex energy challenges rarely fit within one organisation. We build focused partnerships that bring the right technology, specialist knowledge and delivery capability together around the client's needs.</p></div><div className="page-motif" aria-hidden="true"><i/><i/><i/><i/></div></section>
    <section className="partnership-view"><div><p className="eyebrow">OUR VIEW</p><h2>The right capability at the right time.</h2></div><div><p>We do not believe in one-size-fits-all delivery, and we do not pretend to hold every specialism ourselves. Instead, we are open about where partners add value and assemble integrated teams around the problem to be solved.</p><p>We lead where our experience is strongest, partner where it makes sense and remain accountable for a coherent outcome.</p></div></section>
    <section className="partners-section"><div className="partners-heading"><p className="eyebrow">OUR NETWORK</p><h2>Specialist relationships with a practical purpose.</h2></div><div className="partner-grid">{partners.map((partner,index)=><article className="partner-card" key={partner.name}><div className="partner-index">0{index+1}</div><p className="partner-label">{partner.label}</p><h3>{partner.name}</h3><p>{partner.text}</p><a href={partner.href} target="_blank" rel="noopener noreferrer">Visit partner website <ArrowRight size={15}/></a></article>)}</div></section>
    <section className="partnership-method"><div className="method-statement"><span>PARTNER</span><i/><span>INTEGRATE</span><i/><span>DELIVER</span></div><div><p className="eyebrow">HOW WE WORK TOGETHER</p><h2>One team around the client.</h2><p>Our partnership model is designed to feel joined-up from the client's perspective. Roles are clear, expertise is brought in deliberately, and technology choices remain tied to the operational outcome.</p><ul><li><span/>Partner selection based on the challenge, not a fixed hierarchy</li><li><span/>Integrated delivery across domain, engineering and technology teams</li><li><span/>Knowledge transfer that helps clients sustain the solution</li></ul></div></section>
    <section className="marketplace-strip"><div><p className="eyebrow">AWS MARKETPLACE</p><h2>Elite Energy services, available through an established procurement channel.</h2><p>Our AWS Marketplace offering covers production assessment, EnergySys implementation and subscription services, giving clients a straightforward route to specialist technology and professional support.</p></div><Link className="button outline" href="/contact">Ask about AWS Marketplace <ArrowRight size={18}/></Link></section>
    <section className="cta compact"><p className="eyebrow">BUILD THE RIGHT TEAM</p><h2>Bring the right expertise to your next challenge<span>.</span></h2><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section>
  </main><Footer/></>;
}

function CareersPage() {
  const stages = [
    { number: "01", title: "Learn", text: "Build a strong foundation through structured technical learning, guidance and access to experienced energy professionals." },
    { number: "02", title: "Apply", text: "Put that knowledge into practice through real project exposure and meaningful work across energy operations and technology." },
    { number: "03", title: "Grow", text: "Develop confidence, professional judgement and a clear route towards greater responsibility within the industry." },
  ];
  return <><Header/><main>
    <section className="page-hero careers-hero"><div className="page-hero-inner"><p className="eyebrow">CAREERS AT ELITE ENERGY</p><h1>Build your career through work that matters<span>.</span></h1><p>Join a team that values expertise, curiosity and practical delivery. Whether you bring years of experience or are taking your first step into the industry, you will be supported to contribute, learn and keep progressing.</p></div><div className="page-motif" aria-hidden="true"><i/><i/><i/><i/></div></section>
    <section className="careers-intro"><div><p className="eyebrow">WORKING AT ELITE</p><h2>Experience shared. Potential developed.</h2></div><div><p>Our people work on real operational challenges across engineering, digital technology and energy management. We value specialist knowledge, but also the willingness to ask questions, collaborate and find a practical way forward.</p><p>Development is part of the work itself: experienced colleagues share what they know, and emerging talent gets the opportunity to apply new skills in a professional environment.</p></div></section>
    <section className="career-paths"><article><span>EXPERIENCED PROFESSIONALS</span><h2>Bring your expertise to complex energy challenges.</h2><p>Work alongside specialists who understand the industry and value sound judgement, direct communication and high-quality delivery.</p><Link className="text-link" href="/contact">Talk to us about opportunities <ArrowRight size={16}/></Link></article><article className="cadet-path"><span>EARLY CAREERS</span><h2>The Elite Energy Cadet Programme.</h2><p>A supported route into energy and technology, combining structured development, mentorship and real project experience.</p><a className="text-link" href="#cadet-programme">Explore the programme <ArrowRight size={16}/></a></article></section>
    <section className="cadet-section" id="cadet-programme"><div className="cadet-heading"><p className="eyebrow">CADET PROGRAMME</p><h2>A practical start to a career in energy.</h2><p>Talent is not limited to a particular degree or job title. Our Cadet Programme is designed for people at the beginning of their professional journey, including university graduates and vocational learners with the curiosity, drive and potential to grow.</p></div><div className="cadet-stages">{stages.map(stage=><article key={stage.number}><span>{stage.number}</span><h3>{stage.title}</h3><p>{stage.text}</p></article>)}</div></section>
    <section className="cadet-experience"><div className="cadet-panel"><p className="eyebrow">WHAT TO EXPECT</p><strong>Real work.<br/>Experienced mentors.<br/>A supported path forward.</strong></div><div><h2>Development grounded in practice.</h2><p>The programme blends technical training and mentorship with exposure to real energy and technology work. Cadets learn alongside experienced professionals and build an understanding of how strong delivery works in practice.</p><ul><li><span/>Structured learning and technical development</li><li><span/>Mentorship from experienced industry specialists</li><li><span/>Exposure to live projects and client environments</li><li><span/>A broader understanding of energy and digital operations</li></ul></div></section>
    <section className="cta compact"><p className="eyebrow">YOUR NEXT STEP</p><h2>Could your career grow with Elite Energy<span>.</span></h2><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section>
  </main><Footer/></>;
}

function GlobalPresencePage() {
  const locations = [
    { city: "Edinburgh", country: "United Kingdom", region: "Europe", text: "Our UK presence connects Elite Energy with clients, specialists and partners across the United Kingdom and wider European energy market." },
    { city: "Perth", country: "Australia", region: "Asia-Pacific", text: "Our Perth presence places us within one of the world's established energy centres and supports relationships and delivery across Australia and the Asia-Pacific region." },
    { city: "Houston", country: "United States", region: "North America", text: "Our Houston presence connects Elite Energy with North America's energy ecosystem, including its significant upstream, midstream and technology communities." },
  ];
  return <><Header/><main>
    <section className="page-hero presence-hero"><div className="page-hero-inner"><p className="eyebrow">GLOBAL PRESENCE</p><h1>Three locations. One connected team<span>.</span></h1><p>Elite Energy has a physical presence in Edinburgh, Perth and Houston, connecting our expertise with three of the world's most important energy regions.</p></div><div className="page-motif" aria-hidden="true"><i/><i/><i/><i/></div></section>
    <section className="presence-intro"><div><p className="eyebrow">WHERE WE ARE</p><h2>International perspective, grounded in place.</h2></div><p>Each location gives us closer access to regional markets, people and operating environments. Across them, we work as one business — sharing specialist knowledge, delivery experience and a consistent commitment to client outcomes.</p></section>
    <section className="location-grid">{locations.map((location,index)=><article className="location-card" key={location.city}><div className="location-top"><span>0{index+1}</span><Globe2/></div><p className="location-region">{location.region}</p><h2>{location.city}</h2><h3>{location.country}</h3><p>{location.text}</p></article>)}</section>
    <section className="presence-model"><div className="presence-orbit" aria-hidden="true"><div className="orbit-core"><Globe2/><span>ELITE<br/>ENERGY</span></div><i className="orbit-point orbit-one"/><i className="orbit-point orbit-two"/><i className="orbit-point orbit-three"/></div><div><p className="eyebrow">ONE DELIVERY MODEL</p><h2>Connected expertise across regions.</h2><p>Our locations are not separate islands. They form a connected network that allows specialist knowledge and practical experience to move across the business.</p><ul><li><span/>Shared expertise across engineering, operations and technology</li><li><span/>Consistent standards of quality, governance and assurance</li><li><span/>Flexible collaboration shaped around each client's needs</li></ul></div></section>
    <section className="presence-reach"><p className="eyebrow">BEYOND OUR LOCATIONS</p><h2>A physical presence in three regions. Experience that reaches further.</h2><p>Our offices are the foundations of our international presence, not its limit. We support work across markets and operating environments according to the needs of each engagement, bringing relevant experience together wherever the challenge is located.</p></section>
    <section className="cta compact"><p className="eyebrow">CONNECT WITH ELITE ENERGY</p><h2>Start the conversation from wherever you are<span>.</span></h2><Link className="button primary" href="/contact">Contact our team <ArrowRight size={18}/></Link></section>
  </main><Footer/></>;
}

function LeadershipPage() {
  return <><Header/><main>
    <section className="page-hero leadership-hero"><div className="page-hero-inner"><p className="eyebrow">LEADERSHIP</p><h1>Experience that stays close to delivery<span>.</span></h1><p>Our leadership team brings together operational, engineering, technology and commercial experience from across the global energy industry.</p></div><div className="page-motif" aria-hidden="true"><i/><i/><i/><i/></div></section>
    <section className="leadership-section">
      <div className="leadership-intro"><div><p className="eyebrow">MEET THE TEAM</p><h2>Practical leaders, connected by one standard.</h2></div><p>Elite Energy's leaders set the direction and remain involved in the work. Their combined experience helps clients move from complex decisions to practical, sustainable outcomes.</p></div>
      <div className="leadership-grid">{leaders.map((leader, index)=><article className="leader-card" key={leader.name}>
        <div className="leader-photo"><img src={leader.photo} alt={`Portrait of ${leader.name}`}/><span className="leader-number">0{index+1}</span></div>
        <div className="leader-content"><h2>{leader.name}</h2><p className="leader-role">{leader.role}</p><p className="leader-bio">{leader.bio}</p><div className="leader-focus"><span>FOCUS</span><p>{leader.focus}</p></div></div>
      </article>)}</div>
    </section>
    <section className="cta compact"><p className="eyebrow">WORK WITH ELITE ENERGY</p><h2>Bring experienced leadership to your next challenge<span>.</span></h2><Link className="button primary" href="/contact">Start a conversation <ArrowRight size={18}/></Link></section>
  </main><Footer/></>;
}

export function SitePage({ slug }: { slug: string }) {
  if (slug === "home") return <HomePage/>;
  if (slug === "about/leadership") return <LeadershipPage/>;
  if (slug === "about/our-vision") return <VisionPage/>;
  if (slug === "about/global-presence") return <GlobalPresencePage/>;
  if (slug === "partnerships") return <PartnershipsPage/>;
  if (slug === "careers" || slug === "careers/cadet-programme") return <CareersPage/>;
  return <StandardPage slug={slug}/>;
}
