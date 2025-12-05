"use client";

import Image from "next/image";
import { Jost } from "next/font/google";
import { responsiveClampCustom } from "../utils/responsive";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jost",
});

export default function Footer() {
  return (
    <footer 
      className={`${jost.variable} font-sans bg-[#1a1a3e] text-white`}
      style={{ 
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        // Make height responsive: smallest is ~120px, biggest is 270px
        // Height should shrink with screen size
        minHeight: responsiveClampCustom(270, 120, 270),
        height: "auto",
        padding: `${responsiveClampCustom(32, 16, 32)} 0`,
        borderTop: `${responsiveClampCustom(2, 1, 2)} solid rgba(107, 70, 193, 0.5)`,
        borderBottom: `${responsiveClampCustom(2, 1, 2)} solid rgba(107, 70, 193, 0.5)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Inner container: keeps space on left and right sides */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // Make width = full width minus padding on both sides
          // Padding is responsive: smallest is 16px, biggest is 39px on each side
          // Based on 1512px base: 39px = ~2.58vw
          width: `calc(100% - ${responsiveClampCustom(78, 32, 78)})`,
          maxWidth: "100%",
          // Gap between columns: smallest is 16px, biggest is 47.54px
          // Based on 1512px base: 47.54px = ~3.14vw
          gap: responsiveClampCustom(47.54, 16, 47.54),
          minWidth: 0,
          flexWrap: "wrap",
          overflowX: "hidden",
        }}
      >
        {/* Left Column - Contact Information */}
        <div className="font-jost font-normal" style={{ flex: "1 1 0", minWidth: "120px", maxWidth: "100%", overflow: "hidden" }}>
          <p 
            className="text-white mb-4" 
            style={{ 
              fontFamily: 'var(--font-jost)', 
              fontSize: responsiveClampCustom(24, 14, 24), 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationSkipInk: 'auto',
              textDecorationThickness: 'auto',
              textUnderlineOffset: 'auto',
              textUnderlinePosition: 'from-font'
            }}
          >
            Contact us
          </p>
          <p 
            className="text-white mb-2" 
            style={{ 
              fontFamily: 'Jost', 
              fontSize: responsiveClampCustom(22, 12, 22), 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF'
            }}
          >
            814-456-1111
          </p>
          <p 
            className="text-white mb-6" 
            style={{ 
              fontFamily: 'var(--font-jost)', 
              fontSize: responsiveClampCustom(24, 14, 24), 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF'
            }}
          >
            @emailaddress
          </p>
          <div className="flex" style={{ gap: responsiveClampCustom(6, 4, 6) }}>
            {/* Facebook */}
            <a href="https://www.facebook.com/PennStateASME" target="_blank" rel="noopener noreferrer" style={{ width: responsiveClampCustom(36, 20, 36), height: responsiveClampCustom(36, 20, 36), display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/facebook.svg" alt="Facebook" width={36} height={36} unoptimized style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </a>
            {/* X/Twitter */}
            <a href="https://x.com/PSU_ASME?s=20" target="_blank" rel="noopener noreferrer" style={{ width: responsiveClampCustom(36, 20, 36), height: responsiveClampCustom(36, 20, 36), display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/X.svg" alt="X" width={36} height={36} unoptimized style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/asmepsu/" target="_blank" rel="noopener noreferrer" style={{ width: responsiveClampCustom(36, 20, 36), height: responsiveClampCustom(36, 20, 36), display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/instagram.svg" alt="Instagram" width={36} height={36} unoptimized style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </a>
            {/* LinkedIn - TODO: Add link URL when found */}
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ width: responsiveClampCustom(36, 20, 36), height: responsiveClampCustom(36, 20, 36), display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/Linkin.svg" alt="LinkedIn" width={36} height={36} unoptimized style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </a>
            {/* YouTube - TODO: Add link URL when found */}
            <a href="#" target="_blank" rel="noopener noreferrer" style={{ width: responsiveClampCustom(36, 20, 36), height: responsiveClampCustom(36, 20, 36), display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/youtube.svg" alt="YouTube" width={36} height={36} unoptimized style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </a>
          </div>
        </div>

        {/* Center Column - Mission Statement */}
        <div className="font-jost font-normal text-center flex items-center justify-center" style={{ flex: "1 1 0", minWidth: "150px", maxWidth: "100%", overflow: "hidden" }}>
          <div
            style={{
              // Width responsive: smallest is 150px, biggest is 549px
              // Based on 1512px base: 549px = ~36.3vw
              width: responsiveClampCustom(549, 150, 549),
              maxWidth: "100%",
              // Height responsive: smallest is 50px, biggest is 112.362px
              // Based on 1512px base: 112.362px = ~7.43vw
              height: responsiveClampCustom(112.362, 50, 112.362),
              color: "#FFF",
              fontFamily: "var(--font-jost)",
              // Font size responsive: smallest is 16px, biggest is 36px
              // Based on 1512px base: 36px = ~2.38vw
              fontSize: responsiveClampCustom(36, 16, 36),
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Developing & Supporting the next generation of Mechanical Engineers
          </div>
        </div>

        {/* Right Column - Address */}
        <div className="font-jost font-normal text-right" style={{ flex: "1 1 0", minWidth: "120px", maxWidth: "100%", overflow: "hidden" }}>
          <p 
            className="text-white mb-4" 
            style={{ 
              fontFamily: 'var(--font-jost)', 
              fontSize: responsiveClampCustom(24, 14, 24), 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF'
            }}
          >
            Some building
          </p>
          <p 
            className="text-white mb-2" 
            style={{ 
              fontFamily: 'Jost', 
              fontSize: responsiveClampCustom(22, 12, 22), 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF'
            }}
          >
            address
          </p>
          <p 
            className="text-white mb-6" 
            style={{ 
              fontFamily: 'var(--font-jost)', 
              fontSize: responsiveClampCustom(24, 14, 24), 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF'
            }}
          >
            address
          </p>
        </div>
      </div>
    </footer>
  );
}

