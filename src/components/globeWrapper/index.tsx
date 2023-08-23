"use client";
import { useEffect, useRef } from "react";
import { grid } from "../../../public/grid";
import useWindowSize from "@/hooks/window";

export default function Globe() {
  const windowSize = useWindowSize(0, window.innerWidth, window.innerHeight);
  const globeRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/encom-globe.min.js"; // Replace with the actual path
    script.async = true;
    script.onload = initializeGlobe;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (typeof ENCOM !== "undefined" && ENCOM.Globe) {
      if (globeRef.current) {
        globeRef.current.camera.aspect =
          windowSize.width / (windowSize.height * 0.8);
        globeRef.current.camera.updateProjectionMatrix();
        globeRef.current.renderer.setSize(
          windowSize.width,
          windowSize.height * 0.8
        );
      }
    }
  }, [windowSize]);

  const animate = () => {
    if (globeRef.current) {
      globeRef.current.tick();
    }
    requestAnimationFrame(animate);
  };

  const initializeGlobe = () => {
    if (typeof ENCOM !== "undefined" && ENCOM.Globe) {
      // Initialize the ENCOM.Globe here
      const container = document.getElementById("globe-container");

      globeRef.current = new ENCOM.Globe(
        windowSize.width,
        windowSize.height * 0.8,
        {
          // Use windowSize.width and windowSize.height
          font: "Inconsolata",
          data: [],
          tiles: grid.tiles,
          baseColor: "#000000",
          markerColor: "#8e44ad",
          pinColor: "#aacfd1",
          satelliteColor: "#aacfd1",
          scale: 1,
          dayLength: 14000,
          introLinesDuration: 2000,
          maxPins: 500,
          maxMarkers: 4,
          viewAngle: 0.1,
        }
      );

      // Add the globe to the DOM
      container.appendChild(globeRef.current.domElement);
      globeRef.current.init();
      animate();
      /*
      fetch("https://ip-api.io/json")
        .then((r) => r.text())
        .then((r) => {
          let loc = JSON.parse(r);
          globeRef.current.addMarker(loc.latitude, loc.longitude, loc.ip);
          fetch("https://ip-api.io/json/193.137.66.137")
            .then((r) => r.text())
            .then((r) => {
              let loc2 = JSON.parse(r);
              globeRef.current.addMarker(
                loc2.latitude,
                loc2.longitude,
                loc2.ip,
                Math.abs(loc.lon - loc2.lon) > 25
              );
            });
        });*/
      var constellation = [];
      var opts = {
        coreColor: "#ff0000",
        numWaves: 8,
      };
      var alt = 1;

      for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 3; j++) {
          constellation.push({
            lat: 50 * i - 30 + 15 * Math.random(),
            lon: 120 * j - 120 + 30 * i,
            altitude: alt,
          });
        }
      }

      globeRef.current.addConstellation(constellation, opts);
    }
  };

  return <div id="globe-container" />;
}
