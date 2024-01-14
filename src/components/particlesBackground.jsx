import React, { useEffect, useState } from "react";
import TSParticles, { initParticlesEngine } from "@tsparticles/react";
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

  const particlesLoaded = () => {
    // console.log(container);
  };

  return (
    <>
      {init && (
        <TSParticles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesConfig} // Use your particlesConfig here
        />
      )}
    </>
  );
};

export default ParticleBackground;
