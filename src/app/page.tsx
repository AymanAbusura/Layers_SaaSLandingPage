import { Navbar, Hero, LogoTicker, Introduction, Features, Integrations, Faqs, CallToAction, Footer } from "@/sections/index"

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faqs />
            <CallToAction />
            <Footer />
        </>
    );
}