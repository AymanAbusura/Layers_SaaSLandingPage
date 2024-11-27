import { Navbar, Hero, LogoTicker, Introduction, Features, Integrations } from "@/sections/index"

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
        </>
    );
}