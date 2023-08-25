"use client";
import { useCallback, useEffect, useRef } from "react";
import { grid } from "../../../public/grid";
import useWindowSize from "@/hooks/window";

declare namespace ENCOM {
  class Globe {
    constructor(width: number, height: number, options: any);
    init(): void;
    tick(): void;
    addMarker(lat: number, long: number, ip: any, dist?: any): void;
    camera: {
      aspect: number;
      updateProjectionMatrix(): void;
    };
    renderer: {
      setSize(width: number, height: number): void;
    };
    addConstellation(constellation: any, opts: any): void;
    updateProjectionMatrix(): void;
    domElement: any;
  }
}

export default function Globe() {
  const windowSize = useWindowSize(
    0,
    typeof window !== "undefined" ? window.innerWidth : 0,
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const globeRef = useRef<ENCOM.Globe | null>(null);
  const isInitialized = useRef(false);

  const animate = useCallback(() => {
    if (globeRef.current) {
      globeRef.current.tick();
    }
    requestAnimationFrame(animate);
  }, []);
  /*
  const initializeGlobe = useCallback(() => {
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
      if (container && globeRef.current) {
        container.appendChild(globeRef.current.domElement);
        globeRef.current.init();
        animate();
        
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
        });
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
    }
  }, [windowSize, animate]);
  */
  const initializeGlobe = useCallback(() => {
    if (isInitialized.current) {
      return;
    }

    if (typeof ENCOM !== "undefined" && ENCOM.Globe) {
      const container = document.getElementById("globe-container");
      if (container && !globeRef.current) {
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
        container.appendChild(globeRef.current.domElement);
        globeRef.current.init();
        animate();
        fetch("https://ip-api.io/json")
          .then((r) => r.text())
          .then((r) => {
            if (globeRef.current) {
              let loc = JSON.parse(r);
              globeRef.current.addMarker(loc.latitude, loc.longitude, loc.ip);
              fetch("https://ip-api.io/json/193.137.66.137")
                .then((r) => r.text())
                .then((r) => {
                  let loc2 = JSON.parse(r);
                  if (globeRef.current) {
                    globeRef.current.addMarker(
                      loc2.latitude,
                      loc2.longitude,
                      loc2.ip,
                      Math.abs(loc.lon - loc2.lon) > 25
                    );
                  }
                });
            }
          });
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
        isInitialized.current = true;
      }
    }
  }, [windowSize, animate]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/encom-globe.min.js"; // Replace with the actual path
    script.async = true;
    script.onload = initializeGlobe;

    // Load the script only if ENCOM is not already defined
    if (typeof ENCOM === "undefined") {
      document.body.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [initializeGlobe]);

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

  return <div id="globe-container" />;
}
