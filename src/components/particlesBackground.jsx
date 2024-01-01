import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesConfig from "./config/particles-config";
const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
    };

    return (
      <>
        {init && (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig} // Use your particlesConfig here
            />
        )}
    </>);
};

export default ParticleBackground;
