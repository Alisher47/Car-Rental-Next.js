// app/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
    AnimatePresence,
} from "framer-motion";
import {
    Car,
    MapPin,
    CreditCard,
    ShieldCheck,
    Headphones,
    Star,
    ChevronRight,
    Menu,
    X,
    Zap,
    Globe,
    Users,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    TrendingUp,
    Clock,
    Fuel,
    Gauge,
    CalendarDays,
    Search,
} from "lucide-react";
import map from '@/app/common/images/Maps.png';
import googleMapImage from '@/app/common/images/google map.jpg';
import tesla from '@/app/common/images/tesla.png';
import bmw from '@/app/common/images/bmw x5.png';
import mercedes from '@/app/common/images/mercedes-benz.png';
import banner from '@/app/common/images/morent banner.png';

// ─── Data ───────────────────────────────────────────────
const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
];

const features = [
    {
        icon: MapPin,
        title: "Google Maps Integration",
        description:
            "Real-time location tracking with integrated Google Maps. Find nearby vehicles, set pickup/dropoff points, and get turn-by-turn navigation to your rental car.",
        highlight: true,
    },
    {
        icon: CreditCard,
        title: "Stripe Payments",
        description:
            "Seamless checkout with Stripe. Accept all major credit cards, Apple Pay, Google Pay, and 135+ currencies with automatic invoicing.",
        image: "https://picsum.photos/seed/stripe-pay/600/400.jpg",
        highlight: false,
    },
    {
        icon: ShieldCheck,
        title: "Insurance & Safety",
        description:
            "Comprehensive insurance coverage options. Real-time safety alerts, emergency SOS, and automated damage detection with AI.",
        image: "https://picsum.photos/seed/car-safe/600/400.jpg",
        highlight: false,
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description:
            "Book anytime, anywhere. Our platform never sleeps — instant confirmations, keyless entry, and round-the-clock customer support.",
        image: "https://picsum.photos/seed/247-rent/600/400.jpg",
        highlight: false,
    },
    {
        icon: Zap,
        title: "Instant Confirmation",
        description:
            "No waiting, no back-and-forth. Get instant booking confirmation, digital keys, and detailed pickup instructions in seconds.",
        image: "https://picsum.photos/seed/instant-book/600/400.jpg",
        highlight: false,
    },
    {
        icon: Globe,
        title: "Multi-Language Support",
        description:
            "Serve customers globally with 40+ languages. Auto-detect user language, localized pricing, and region-specific insurance options.",
        image: "https://picsum.photos/seed/multi-lang/600/400.jpg",
        highlight: false,
    },
];

const steps = [
    {
        step: "01",
        title: "Create Your Account",
        description:
            "Sign up in under 30 seconds with email, Google, or Apple. Verify your identity and driver's license digitally.",
        icon: Users,
    },
    {
        step: "02",
        title: "Browse & Select",
        description:
            "Search available vehicles by location, date, type, and budget. Filter by features like EV, luxury, or SUV.",
        icon: Search,
    },
    {
        step: "03",
        title: "Book & Pay",
        description:
            "Confirm your booking with secure Stripe payment. Choose insurance, add-ons, and pickup preferences.",
        icon: CreditCard,
    },
    {
        step: "04",
        title: "Drive & Enjoy",
        description:
            "Unlock your car with the app, track your trip on Google Maps, and return at your convenience. It's that simple.",
        icon: Car,
    },
];

const cars = [
    {
        name: "Tesla Model 3",
        type: "Electric Sedan",
        price: 89,
        image: tesla,
        seats: 5,
        fuel: "Electric",
        transmission: "Auto",
        rating: 4.9,
        reviews: 234,
    },
    {
        name: "BMW X5",
        type: "Luxury SUV",
        price: 129,
        image: bmw,
        seats: 7,
        fuel: "Hybrid",
        transmission: "Auto",
        rating: 4.8,
        reviews: 189,
    },
    {
        name: "Mercedes C-Class",
        type: "Executive Sedan",
        price: 109,
        image: mercedes,
        seats: 5,
        fuel: "Petrol",
        transmission: "Auto",
        rating: 4.7,
        reviews: 156,
    },
];

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Business Traveler",
        content:
            "DriveEase completely transformed how I rent cars for business trips. The Google Maps integration alone saves me 20 minutes per pickup. Absolutely game-changing.",
        avatar: "https://picsum.photos/seed/avatar-sarah/100/100.jpg",
        rating: 5,
    },
    {
        name: "James Rodriguez",
        role: "Fleet Manager",
        content:
            "We migrated our entire fleet of 200+ vehicles to DriveEase. The Stripe integration handles $500K+/month flawlessly. Best SaaS investment we've made.",
        avatar: "https://picsum.photos/seed/avatar-james/100/100.jpg",
        rating: 5,
    },
    {
        name: "Emily Chen",
        role: "Travel Blogger",
        content:
            "I've used rental platforms in 30+ countries. DriveEase is hands-down the smoothest experience. The multi-language support and instant booking are incredible.",
        avatar: "https://picsum.photos/seed/avatar-emily/100/100.jpg",
        rating: 5,
    },
];

const pricingPlans = [
    {
        name: "Starter",
        price: 49,
        period: "/month",
        description: "Perfect for small rental businesses just getting started.",
        features: [
            "Up to 25 vehicles",
            "Stripe payments",
            "Basic analytics",
            "Email support",
            "1 location",
            "Basic Google Maps",
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        price: 129,
        period: "/month",
        description: "For growing businesses that need more power and flexibility.",
        features: [
            "Up to 150 vehicles",
            "Stripe + Apple/Google Pay",
            "Advanced analytics & reports",
            "Priority support (24/7)",
            "10 locations",
            "Full Google Maps integration",
            "Multi-language (10 languages)",
            "Custom branding",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: 349,
        period: "/month",
        description: "For large fleets and multi-location operations.",
        features: [
            "Unlimited vehicles",
            "All payment methods",
            "White-label solution",
            "Dedicated account manager",
            "Unlimited locations",
            "Custom API access",
            "All 40+ languages",
            "SLA guarantee (99.9%)",
            "On-premise deployment option",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

const faqs = [
    {
        question: "How long does it take to set up DriveEase?",
        answer:
            "Most businesses are fully operational within 24 hours. Our onboarding wizard guides you through adding vehicles, configuring Stripe, setting up Google Maps API keys, and customizing your branding. Enterprise deployments with custom integrations typically take 3-5 business days.",
    },
    {
        question: "Do I need technical knowledge to use DriveEase?",
        answer:
            "Not at all. DriveEase is designed for non-technical users. Our intuitive dashboard lets you manage everything — vehicles, bookings, pricing, and analytics — through a beautiful, easy-to-use interface. Plus, our support team is always available to help.",
    },
    {
        question: "How does the Stripe integration work?",
        answer:
            "DriveEase integrates natively with Stripe Connect. You simply connect your Stripe account through our settings panel, and you're ready to accept payments in 135+ currencies. We handle payment splits, refunds, and automatic receipt generation — all PCI-compliant.",
    },
    {
        question: "Can I customize the booking flow?",
        answer:
            "Absolutely. DriveEase offers a fully customizable booking widget that you can embed on any website. You can configure required fields, insurance options, add-ons, upsells, and custom terms & conditions. Enterprise plans include full white-label capabilities.",
    },
    {
        question: "What happens if a car gets damaged?",
        answer:
            "DriveEase includes a built-in damage reporting system with photo documentation, AI-assisted damage assessment, and automatic insurance claim initiation. Customers can report issues through the app, and fleet managers get real-time notifications with all evidence attached.",
    },
    {
        question: "Is there a free trial available?",
        answer:
            "Yes! All plans come with a 14-day free trial with full access to features. No credit card required to start. You can upgrade, downgrade, or cancel at any time during or after the trial period.",
    },
];

const stats = [
    { value: "12,000+", label: "Active Vehicles" },
    { value: "$2.4M", label: "Monthly Transactions" },
    { value: "98.7%", label: "Uptime SLA" },
    { value: "45+", label: "Countries" },
];

const logos = [
    "Hertz", "Avis", "Enterprise", "Budget", "Sixt", "Europcar",
];

// ─── Animation Variants ─────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Reusable Animated Section Wrapper ──────────────────
function AnimatedSection({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.section
            ref={ref}
            id={id}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
        >
            {children}
        </motion.section>
    );
}

// ─── Component: Badge ───────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
                background: "rgba(62,92,251,0.1)",
                color: "#3E5CFB",
                border: "1px solid rgba(62,92,251,0.2)",
            }}
        >
            <Sparkles size={14} />
            {children}
        </motion.span>
    );
}

// ─── Component: Section Heading ─────────────────────────
function SectionHeading({ badge, title, description }: { badge?: string; title: string; description: string }) {
    return (
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            {badge && <Badge>{badge}</Badge>}
            <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: "#e2e8f0" }}
            >
                {title}
            </motion.h2>
            <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-4 text-lg leading-relaxed"
                style={{ color: "#94a3b8" }}
            >
                {description}
            </motion.p>
        </div>
    );
}

// ─── Component: Navbar ──────────────────────────────────
function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    background: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-2.5 group">
                            <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                    boxShadow: "0 0 15px rgba(62,92,251,0.4)",
                                }}
                            >
                                <Car size={20} color="white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight" style={{ color: "#f1f5f9" }}>
                                Drive<span style={{ color: "#3E5CFB" }}>Ease</span>
                            </span>
                        </a>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-medium transition-colors duration-200 hover:text-[#3E5CFB]"
                                    style={{ color: "#94a3b8" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-3">
                            <a
                                href="/public-layouts/login"
                                className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 hover:text-white"
                                style={{ color: "#94a3b8" }}
                            >
                                Log In
                            </a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-5 py-2.5 text-sm font-bold rounded-lg text-white"
                                style={{
                                    background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                    boxShadow: "0 0 20px rgba(62,92,251,0.3)",
                                }}
                            >
                                Create Account
                            </motion.a>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-lg"
                            style={{ color: "#e2e8f0" }}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-40 pt-20 lg:hidden"
                        style={{ background: "rgba(15,23,42,0.98)", backdropFilter: "blur(20px)" }}
                    >
                        <div className="flex flex-col items-center gap-6 py-12">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium"
                                    style={{ color: "#e2e8f0" }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="flex flex-col gap-3 mt-4">
                                <a href="#" className="px-6 py-2.5 text-sm font-medium rounded-lg" style={{ color: "#94a3b8" }}>
                                    Log In
                                </a>
                                <a
                                    href="#"
                                    className="px-6 py-3 text-sm font-bold rounded-lg text-white text-center"
                                    style={{
                                        background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                        boxShadow: "0 0 20px rgba(62,92,251,0.3)",
                                    }}
                                >
                                    Create Account
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// ─── Component: Hero ────────────────────────────────────
function Hero() {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 600], [0, 150]);
    const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Effects */}
            <motion.div className="absolute inset-0" style={{ y: bgY }}>
                {/* Gradient Orbs */}
                <div
                    className="absolute top-20 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #5C75FF, transparent 70%)" }}
                />
                <div
                    className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #3E5CFB, transparent 70%)" }}
                />
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </motion.div>

            <motion.div style={{ opacity: contentOpacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
                            <Badge>🚗 #1 Car Rental SaaS Platform</Badge>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
                            style={{ color: "#f1f5f9" }}
                        >
                            Launch Your{" "}
                            <span
                                className="relative inline-block"
                                style={{
                                    background: "linear-gradient(135deg, #3E5CFB, #5C75FF, #3E5CFB)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Car Rental
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                    <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="#3E5CFB" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
                                </svg>
                            </span>{" "}
                            Business Today
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 text-lg lg:text-xl leading-relaxed max-w-xl"
                            style={{ color: "#94a3b8" }}
                        >
                            The all-in-one SaaS platform to manage your fleet, accept payments via{" "}
                            <span className="font-semibold" style={{ color: "#3E5CFB" }}>Stripe</span>, track vehicles with{" "}
                            <span className="font-semibold" style={{ color: "#3E5CFB" }}>Google Maps</span>, and scale to 45+ countries.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            initial="hidden"
                            animate="visible"
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(62,92,251,0.5)" }}
                                whileTap={{ scale: 0.97 }}
                                className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl text-white"
                                style={{
                                    background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                    boxShadow: "0 0 20px rgba(62,92,251,0.3)",
                                }}
                            >
                                Create Account Free
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#how-it-works"
                                whileHover={{ scale: 1.04, borderColor: "rgba(62,92,251,0.5)" }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl transition-all duration-200"
                                style={{
                                    color: "#e2e8f0",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    background: "rgba(255,255,255,0.03)",
                                }}
                            >
                                Watch Demo
                                <ChevronRight size={16} />
                            </motion.a>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            variants={fadeUp}
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            className="mt-10 flex items-center gap-6"
                        >

                            <div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="#3E5CFB" color="#3E5CFB" />
                                    ))}
                                </div>
                                <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
                                    Trusted by <span className="font-semibold" style={{ color: "#94a3b8" }}>2,400+</span> rental businesses
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Animated Car Visual */}
                    <motion.div
                        variants={scaleIn}
                        initial="hidden"
                        animate="visible"
                        className="relative hidden lg:block"
                    >
                        {/* Glow behind car */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-30 blur-[60px]"
                            style={{ background: "radial-gradient(circle at 50% 80%, #5C75FF, transparent 70%)" }}
                        />
                        {/* Main car image container */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative rounded-3xl overflow-hidden"
                            style={{
                                border: "1px solid rgba(255,255,255,0.08)",
                                background: "rgba(255,255,255,0.02)",
                            }}
                        >
                            <img
                                src={banner.src}
                                alt="Premium car rental"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay gradient */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: "linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 50%)",
                                }}
                            />
                            {/* Floating Card - Price */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute bottom-6 right-6 p-4 rounded-2xl"
                                style={{
                                    background: "rgba(15,23,42,0.9)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                                        style={{ background: "rgba(62,92,251,0.15)" }}
                                    >
                                        <CreditCard size={18} color="#3E5CFB" />
                                    </div>
                                    <div>
                                        <p className="text-xs" style={{ color: "#64748b" }}>Daily Rate</p>
                                        <p className="text-lg font-bold" style={{ color: "#f1f5f9" }}>$89<span className="text-xs font-normal" style={{ color: "#64748b" }}>/day</span></p>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Floating Card - Location */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute top-6 left-6 p-3 rounded-xl"
                                style={{
                                    background: "rgba(15,23,42,0.9)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} color="#3E5CFB" />
                                    <span className="text-sm font-medium" style={{ color: "#e2e8f0" }}>San Francisco, CA</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center"
                            style={{
                                background: "rgba(62,92,251,0.1)",
                                border: "1px solid rgba(62,92,251,0.2)",
                            }}
                        >
                            <span className="text-2xl">⚡</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl flex items-center justify-center"
                            style={{
                                background: "rgba(62,92,251,0.1)",
                                border: "1px solid rgba(62,92,251,0.2)",
                            }}
                        >
                            <ShieldCheck size={24} color="#3E5CFB" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div
                    variants={fadeUp}
                    custom={5}
                    initial="hidden"
                    animate="visible"
                    className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 p-8 rounded-2xl"
                    style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.06)",
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div key={i} variants={fadeUp} custom={i} className="text-center">
                            <p
                                className="text-3xl lg:text-4xl font-bold"
                                style={{
                                    background: "linear-gradient(135deg, #3E5CFB, #5C75FF)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {stat.value}
                            </p>
                            <p className="mt-1 text-sm" style={{ color: "#64748b" }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: "linear-gradient(to top, #020617, transparent)" }}
            />
        </section>
    );
}

// ─── Component: Logos ───────────────────────────────────
function LogoBar() {
    // Duplicate logos to create a seamless infinite marquee effect
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <AnimatedSection
            className="py-12 border-t border-b overflow-hidden relative"
            style={{
                borderColor: "rgba(255,255,255,0.04)",
                background: "rgba(255,255,255,0.02)"
            }}
        >
            {/* Gradient overlays to fade out the edges seamlessly */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #020617, transparent)" }} />
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #020617, transparent)" }} />

            <p className="text-center text-sm font-medium uppercase tracking-widest mb-8 relative z-20" style={{ color: "#475569" }}>
                Trusted by industry leaders worldwide
            </p>

            <motion.div
                className="flex items-center gap-x-16 w-max"
                animate={{
                    x: ["0%", "-33.333%"]
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25
                }}
            >
                {duplicatedLogos.map((logo, i) => (
                    <span
                        key={i}
                        className="text-xl font-bold tracking-tight transition-colors duration-300 hover:text-[#3E5CFB] whitespace-nowrap"
                        style={{ color: "#334155" }}
                    >
                        {logo}
                    </span>
                ))}
            </motion.div>
        </AnimatedSection>
    );
}

// ─── Component: Features ────────────────────────────────
function Features() {
    return (
        <AnimatedSection id="features" className="py-24 lg:py-32">
            <SectionHeading
                badge="Features"
                title="Everything You Need to Run a Car Rental Business"
                description="From fleet management to payment processing, we've built every tool you need — so you can focus on growing your business."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        variants={fadeUp}
                        custom={i}
                        whileHover={{ y: -6, borderColor: "rgba(62,92,251,0.3)" }}
                        className="group relative p-7 rounded-2xl transition-all duration-300 cursor-default"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        {/* Icon */}
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                            style={{
                                background: "rgba(62,92,251,0.1)",
                                border: "1px solid rgba(62,92,251,0.15)",
                            }}
                        >
                            <feature.icon size={22} color="#3E5CFB" />
                        </div>

                        <h3 className="text-lg font-bold mb-2" style={{ color: "#e2e8f0" }}>
                            {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                            {feature.description}
                        </p>


                        {/* Hover glow */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: "radial-gradient(circle at 50% 0%, rgba(62,92,251,0.06), transparent 60%)",
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}

// ─── Component: Google Maps Showcase ────────────────────
function MapsShowcase() {
    return (
        <AnimatedSection className="py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left - Image */}
                <motion.div
                    variants={scaleIn}
                    className="relative"
                >
                    <div
                        className="rounded-3xl overflow-hidden"
                        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                        <img
                            src={googleMapImage.src}
                            alt="Google Maps Integration"
                            className="w-full h-auto object-cover"
                        />
                        {/* Map overlay simulation */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(135deg, rgba(62,92,251,0.1) 0%, rgba(15,23,42,0.6) 100%)",
                            }}
                        />
                        {/* Map pins simulation */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute top-1/3 left-1/3"
                        >
                            <MapPin size={28} color="#3E5CFB" fill="#3E5CFB" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="absolute top-1/2 right-1/3"
                        >
                            <MapPin size={24} color="#3E5CFB" fill="rgba(62,92,251,0.5)" />
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-1/3 left-1/2"
                        >
                            <MapPin size={22} color="#3E5CFB" fill="rgba(62,92,251,0.3)" />
                        </motion.div>
                    </div>

                    {/* Floating stats card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-6 -right-4 lg:-right-6 p-4 rounded-2xl"
                        style={{
                            background: "rgba(15,23,42,0.95)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(62,92,251,0.15)" }}>
                                <MapPin size={18} color="#3E5CFB" />
                            </div>
                            <div>
                                <p className="text-xs" style={{ color: "#64748b" }}>Active Locations</p>
                                <p className="text-xl font-bold" style={{ color: "#f1f5f9" }}>2,847</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right - Content */}
                <div>
                    <Badge>Google Maps Integration</Badge>
                    <motion.h2
                        variants={fadeUp}
                        custom={1}
                        className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight"
                        style={{ color: "#e2e8f0" }}
                    >
                        Track Every Vehicle in{" "}
                        <span style={{ color: "#3E5CFB" }}>Real-Time</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="mt-4 text-lg leading-relaxed"
                        style={{ color: "#94a3b8" }}
                    >
                        Deep Google Maps integration lets you and your customers see vehicle locations, set pickup/dropoff points, geofence rental zones, and get real-time navigation — all without leaving the platform.
                    </motion.p>

                    <motion.div variants={fadeUp} custom={3} className="mt-8 space-y-4">
                        {[
                            "Live GPS tracking for every rented vehicle",
                            "Geofenced pickup & dropoff zones with alerts",
                            "Turn-by-turn navigation built into customer app",
                            "Heat maps for demand forecasting & pricing",
                            "Route history and mileage logging",
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={20} color="#3E5CFB" className="mt-0.5 flex-shrink-0" />
                                <span className="text-sm" style={{ color: "#cbd5e1" }}>{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} custom={4} className="mt-8">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-white"
                            style={{
                                background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                boxShadow: "0 0 20px rgba(62,92,251,0.3)",
                            }}
                        >
                            Explore Maps Feature
                            <ArrowRight size={16} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

// ─── Component: Stripe Showcase ─────────────────────────
function StripeShowcase() {
    return (
        <AnimatedSection className="py-24 lg:py-32">
            <div
                className="rounded-3xl p-8 lg:p-16 relative overflow-hidden"
                style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                {/* Background glow */}
                <div
                    className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #3E5CFB, transparent 70%)" }}
                />

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge>Stripe Powered</Badge>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight"
                            style={{ color: "#e2e8f0" }}
                        >
                            Accept Payments{" "}
                            <span style={{ color: "#3E5CFB" }}>Globally</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mt-4 text-lg leading-relaxed"
                            style={{ color: "#94a3b8" }}
                        >
                            Built on Stripe Connect for the most reliable, secure payment processing. Accept 135+ currencies, handle refunds automatically, and manage subscriptions — all PCI DSS compliant.
                        </motion.p>

                        <motion.div variants={fadeUp} custom={3} className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                { icon: CreditCard, label: "135+ Currencies" },
                                { icon: ShieldCheck, label: "PCI DSS Compliant" },
                                { icon: Zap, label: "Instant Payouts" },
                                { icon: TrendingUp, label: "Smart Routing" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 rounded-xl"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <item.icon size={18} color="#3E5CFB" />
                                    <span className="text-sm font-medium" style={{ color: "#cbd5e1" }}>{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Payment simulation card */}
                    <motion.div variants={scaleIn} className="flex justify-center">
                        <div
                            className="w-full max-w-sm p-6 rounded-2xl"
                            style={{
                                background: "rgba(15,23,42,0.8)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                            }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm font-medium" style={{ color: "#94a3b8" }}>Payment Summary</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-xs" style={{ color: "#64748b" }}>Secure</span>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span style={{ color: "#94a3b8" }}>Tesla Model 3 × 3 days</span>
                                    <span style={{ color: "#e2e8f0" }}>$267.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span style={{ color: "#94a3b8" }}>Insurance (Basic)</span>
                                    <span style={{ color: "#e2e8f0" }}>$45.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span style={{ color: "#94a3b8" }}>Service Fee</span>
                                    <span style={{ color: "#e2e8f0" }}>$12.00</span>
                                </div>
                                <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                                <div className="flex justify-between font-bold">
                                    <span style={{ color: "#e2e8f0" }}>Total</span>
                                    <span style={{ color: "#3E5CFB" }}>$324.00</span>
                                </div>
                            </div>

                            {/* Fake card input */}
                            <div className="space-y-3">
                                <div
                                    className="p-3 rounded-lg text-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "#64748b",
                                    }}
                                >
                                    •••• •••• •••• 4242
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div
                                        className="p-3 rounded-lg text-sm"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "#64748b",
                                        }}
                                    >
                                        12/28
                                    </div>
                                    <div
                                        className="p-3 rounded-lg text-sm"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "#64748b",
                                        }}
                                    >
                                        •••
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3.5 rounded-lg text-sm font-bold text-white flex items-center justify-center gap-2"
                                    style={{
                                        background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                        boxShadow: "0 0 20px rgba(62,92,251,0.3)",
                                    }}
                                >
                                    <ShieldCheck size={16} />
                                    Pay $324.00 with Stripe
                                </motion.button>
                            </div>

                            <p className="text-center text-xs mt-3" style={{ color: "#475569" }}>
                                Powered by <span className="font-semibold" style={{ color: "#64748b" }}>Stripe</span> • 256-bit SSL Encrypted
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
}

// ─── Component: How It Works ────────────────────────────
function HowItWorks() {
    return (
        <AnimatedSection id="how-it-works" className="py-24 lg:py-32">
            <SectionHeading
                badge="How It Works"
                title="Up and Running in 4 Simple Steps"
                description="From sign-up to your first booking — get your car rental business online in minutes, not months."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.step}
                        variants={fadeUp}
                        custom={i}
                        whileHover={{ y: -6 }}
                        className="relative p-7 rounded-2xl group"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        {/* Step number */}
                        <span
                            className="text-5xl font-black absolute -top-3 -right-2 opacity-10"
                            style={{ color: "#3E5CFB" }}
                        >
                            {step.step}
                        </span>

                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                            style={{
                                background: "rgba(62,92,251,0.1)",
                                border: "1px solid rgba(62,92,251,0.15)",
                            }}
                        >
                            <step.icon size={22} color="#3E5CFB" />
                        </div>

                        <h3 className="text-lg font-bold mb-2" style={{ color: "#e2e8f0" }}>
                            {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                            {step.description}
                        </p>

                        {/* Connector line (not on last) */}
                        {i < steps.length - 1 && (
                            <div
                                className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px"
                                style={{ background: "rgba(62,92,251,0.3)" }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}

// ─── Component: Car Showcase ────────────────────────────
function CarShowcase() {
    return (
        <AnimatedSection className="py-24 lg:py-32">
            <SectionHeading
                badge="Fleet Preview"
                title="Beautiful Fleet Display"
                description="Showcase your vehicles with stunning cards that convert browsers into bookers."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cars.map((car, i) => (
                    <motion.div
                        key={car.name}
                        variants={fadeUp}
                        custom={i}
                        whileHover={{ y: -8, borderColor: "rgba(62,92,251,0.3)" }}
                        className="group rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <div className="relative h-56 overflow-hidden p-4 flex items-center justify-center">
                            <img
                                src={typeof car.image === 'string' ? car.image : (car.image as any).src}
                                alt={car.name}
                                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                            <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, transparent 60%)" }}
                            />
                            <div className="absolute bottom-4 left-4">
                                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "#3E5CFB" }}>{car.type}</p>
                                <p className="text-lg font-bold" style={{ color: "#f1f5f9" }}>{car.name}</p>
                            </div>
                            <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full" style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <Star size={12} fill="#3E5CFB" color="#3E5CFB" />
                                <span className="text-xs font-medium" style={{ color: "#e2e8f0" }}>{car.rating}</span>
                                <span className="text-xs" style={{ color: "#64748b" }}>({car.reviews})</span>
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="grid grid-cols-3 gap-3 mb-5">
                                {[
                                    { icon: Users, value: `${car.seats} Seats` },
                                    { icon: Fuel, value: car.fuel },
                                    { icon: Gauge, value: car.transmission },
                                ].map((spec, j) => (
                                    <div key={j} className="flex flex-col items-center gap-1 p-2 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                                        <spec.icon size={16} color="#64748b" />
                                        <span className="text-xs" style={{ color: "#94a3b8" }}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-2xl font-bold" style={{ color: "#f1f5f9" }}>${car.price}</span>
                                    <span className="text-sm" style={{ color: "#64748b" }}>/day</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                                    style={{
                                        background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                        boxShadow: "0 0 15px rgba(62,92,251,0.25)",
                                    }}
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}

// ─── Component: Pricing ─────────────────────────────────
function Pricing() {
    return (
        <AnimatedSection id="pricing" className="py-24 lg:py-32">
            <SectionHeading
                badge="Pricing"
                title="Simple, Transparent Pricing"
                description="No hidden fees. No surprise charges. Start free and scale as you grow."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pricingPlans.map((plan, i) => (
                    <motion.div
                        key={plan.name}
                        variants={fadeUp}
                        custom={i}
                        whileHover={{ y: -6 }}
                        className="relative p-7 lg:p-8 rounded-2xl"
                        style={{
                            background: plan.popular ? "rgba(62,92,251,0.05)" : "rgba(255,255,255,0.02)",
                            border: plan.popular ? "1px solid rgba(62,92,251,0.3)" : "1px solid rgba(255,255,255,0.06)",
                            boxShadow: plan.popular ? "0 0 40px rgba(62,92,251,0.1)" : "none",
                        }}
                    >
                        {plan.popular && (
                            <div
                                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                                style={{
                                    background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                    boxShadow: "0 0 15px rgba(62,92,251,0.4)",
                                }}
                            >
                                Most Popular
                            </div>
                        )}

                        <h3 className="text-lg font-bold" style={{ color: "#e2e8f0" }}>{plan.name}</h3>
                        <p className="mt-1 text-sm" style={{ color: "#64748b" }}>{plan.description}</p>

                        <div className="mt-6 flex items-end gap-1">
                            <span className="text-4xl font-bold" style={{ color: "#f1f5f9" }}>${plan.price}</span>
                            <span className="text-sm mb-1" style={{ color: "#64748b" }}>{plan.period}</span>
                        </div>

                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-6 w-full py-3 rounded-xl text-sm font-bold text-center block transition-all duration-200"
                            style={
                                plan.popular
                                    ? {
                                        color: "white",
                                        background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                        boxShadow: "0 0 20px rgba(62,92,251,0.3)",
                                    }
                                    : {
                                        color: "#e2e8f0",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        background: "rgba(255,255,255,0.03)",
                                    }
                            }
                        >
                            {plan.cta}
                        </motion.a>

                        <div className="mt-6 space-y-3">
                            {plan.features.map((feature, j) => (
                                <div key={j} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={16} color="#3E5CFB" className="mt-0.5 flex-shrink-0" />
                                    <span className="text-sm" style={{ color: "#94a3b8" }}>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}

// ─── Component: Testimonials ────────────────────────────
function Testimonials() {
    return (
        <AnimatedSection id="testimonials" className="py-24 lg:py-32">
            <SectionHeading
                badge="Testimonials"
                title="Loved by Rental Businesses Worldwide"
                description="Don't just take our word for it — hear from the businesses that scaled with DriveEase."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={t.name}
                        variants={fadeUp}
                        custom={i}
                        whileHover={{ y: -4 }}
                        className="p-7 rounded-2xl"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <div className="flex items-center gap-1 mb-4">
                            {[...Array(t.rating)].map((_, j) => (
                                <Star key={j} size={14} fill="#3E5CFB" color="#3E5CFB" />
                            ))}
                        </div>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: "#cbd5e1" }}>
                            &ldquo;{t.content}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-10 h-10 rounded-full"
                                style={{ border: "2px solid rgba(62,92,251,0.3)" }}
                            />
                            <div>
                                <p className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>{t.name}</p>
                                <p className="text-xs" style={{ color: "#64748b" }}>{t.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}

// ─── Component: FAQ ─────────────────────────────────────
function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <AnimatedSection id="faq" className="py-24 lg:py-32">
            <SectionHeading
                badge="FAQ"
                title="Frequently Asked Questions"
                description="Everything you need to know about DriveEase. Can't find an answer? Reach out to our support team."
            />

            <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        custom={i}
                        className="rounded-xl overflow-hidden"
                        style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between p-5 text-left"
                        >
                            <span className="text-sm font-semibold pr-4" style={{ color: "#e2e8f0" }}>
                                {faq.question}
                            </span>
                            <motion.span
                                animate={{ rotate: openIndex === i ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0"
                            >
                                <PlusIcon size={18} color="#3E5CFB" />
                            </motion.span>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
}

function PlusIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}

// ─── Component: CTA Section ─────────────────────────────
function CTASection() {
    return (
        <AnimatedSection className="py-24 lg:py-32">
            <motion.div
                variants={scaleIn}
                className="relative rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
                style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                {/* Background effects */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #5C75FF, transparent 70%)" }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                    }}
                />

                <div className="relative z-10">
                    <Badge>Get Started Today</Badge>
                    <motion.h2
                        variants={fadeUp}
                        custom={1}
                        className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                        style={{ color: "#f1f5f9" }}
                    >
                        Ready to Launch Your{" "}
                        <span style={{ color: "#3E5CFB" }}>Car Rental</span>{" "}
                        Empire?
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        custom={2}
                        className="mt-4 text-lg max-w-2xl mx-auto"
                        style={{ color: "#94a3b8" }}
                    >
                        Join 2,400+ rental businesses already using DriveEase. Start your 14-day free trial — no credit card required.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                        custom={3}
                        className="mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(62,92,251,0.5)" }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl text-white"
                            style={{
                                background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                boxShadow: "0 0 25px rgba(62,92,251,0.35)",
                            }}
                        >
                            Create Account Free
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-xl"
                            style={{
                                color: "#e2e8f0",
                                border: "1px solid rgba(255,255,255,0.1)",
                                background: "rgba(255,255,255,0.03)",
                            }}
                        >
                            <Headphones size={18} />
                            Talk to Sales
                        </motion.a>
                    </motion.div>
                    <motion.p variants={fadeUp} custom={4} className="mt-4 text-xs" style={{ color: "#475569" }}>
                        ✓ 14-day free trial &nbsp;&nbsp; ✓ No credit card &nbsp;&nbsp; ✓ Cancel anytime
                    </motion.p>
                </div>
            </motion.div>
        </AnimatedSection>
    );
}

// ─── Component: Footer ──────────────────────────────────
function Footer() {
    const footerLinks = {
        Product: ["Features", "Pricing", "Integrations", "API Docs", "Changelog"],
        Company: ["About", "Blog", "Careers", "Press Kit", "Contact"],
        Resources: ["Help Center", "Community", "Templates", "Webinars", "Status"],
        Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "SLA"],
    };

    return (
        <footer
            className="pt-20 pb-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <a href="#" className="flex items-center gap-2.5 mb-4">
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{
                                    background: "linear-gradient(135deg, #5C75FF, #3E5CFB)",
                                    boxShadow: "0 0 12px rgba(62,92,251,0.3)",
                                }}
                            >
                                <Car size={18} color="white" />
                            </div>
                            <span className="text-lg font-bold" style={{ color: "#f1f5f9" }}>
                                Drive<span style={{ color: "#3E5CFB" }}>Ease</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#64748b" }}>
                            The all-in-one SaaS platform for modern car rental businesses.
                        </p>
                        <div className="flex items-center gap-3">
                            {["twitter", "github", "linkedin"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-[#3E5CFB]/10"
                                    style={{
                                        color: "#64748b",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold mb-4" style={{ color: "#e2e8f0" }}>
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm transition-colors duration-200 hover:text-[#3E5CFB]"
                                            style={{ color: "#64748b" }}
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                >
                    <p className="text-xs" style={{ color: "#475569" }}>
                        © {new Date().getFullYear()} DriveEase. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs" style={{ color: "#64748b" }}>All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ─── Main Page Component ────────────────────────────────
export default function LandingPage() {
    return (
        <main className="min-h-screen" style={{ background: "#020617", color: "#e2e8f0" }}>
            <Navbar />
            <Hero />
            <LogoBar />
            <Features />
            <MapsShowcase />
            <StripeShowcase />
            <HowItWorks />
            <CarShowcase />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTASection />
            <Footer />
        </main>
    );
}