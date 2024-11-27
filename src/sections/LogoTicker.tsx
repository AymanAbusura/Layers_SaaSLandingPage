import Image from "next/image";
import {
    quantumLogo,
    acmeLogo,
    echoValleyLogo,
    pulseLogo,
    outsideLogo,
    apexLogo,
    celestialLogo,
    twiceLogo
} from "../assets/index";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">Already chosen by these market leaders</h3>

                <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-24 pr-24">
                        {logos.map(logo => (
                            <Image 
                                src={logo.image} 
                                alt={logo.name} 
                                key={logo.name}
                                width="200"
                                height="100"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
