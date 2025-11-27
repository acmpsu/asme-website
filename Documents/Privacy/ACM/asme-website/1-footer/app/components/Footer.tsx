import Image from "next/image";

export default function Footer() {
  return (
    <footer 
      className="bg-[#1a1a3e] border-2 border-[#6b46c1] border-opacity-50 text-white"
      style={{ 
        width: "100%",
        // Make height responsive: smallest is ~120px, biggest is 250px
        // Increased to add more vertical spacing
        height: "clamp(250px, 16.5vw, 270px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Inner container: keeps space on left and right sides */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          // Make width = full width minus padding on both sides
          // Padding is responsive: smallest is 16px, biggest is 39px on each side
          // Based on 1512px base: 39px = ~2.58vw
          width: "calc(100% - clamp(32px, 5.16vw, 78px))",
          // Gap between columns: smallest is 16px, biggest is 47.54px
          // Based on 1512px base: 47.54px = ~3.14vw
          gap: "clamp(16px, 3.14vw, 47.54px)",
          minWidth: 0,
        }}
      >
        {/* Left Column - Contact Information */}
        <div className="font-jost font-normal">
          <p 
            className="text-white mb-4" 
            style={{ 
              fontFamily: 'Jost', 
              fontSize: '24px', 
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
              fontSize: '22px', 
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
              fontFamily: 'Jost', 
              fontSize: '24px', 
              fontStyle: 'normal', 
              fontWeight: 400, 
              lineHeight: 'normal',
              color: '#FFF'
            }}
          >
            @emailaddress
          </p>
          <div className="flex gap-1.5">
            {/* Facebook */}
            <a href="https://www.facebook.com/PennStateASME" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <Image src="/facebook.svg" alt="Facebook" width={36} height={36} unoptimized />
            </a>
            {/* X/Twitter */}
            <a href="https://x.com/PSU_ASME?s=20" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <Image src="/X.svg" alt="X" width={36} height={36} unoptimized />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/asmepsu/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <Image src="/instagram.svg" alt="Instagram" width={36} height={36} unoptimized />
            </a>
            {/* LinkedIn - TODO: Add link URL when found */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <Image src="/Linkin.svg" alt="LinkedIn" width={36} height={36} unoptimized />
            </a>
            {/* YouTube - TODO: Add link URL when found */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center">
              <Image src="/youtube.svg" alt="YouTube" width={36} height={36} unoptimized />
            </a>
          </div>
        </div>

        {/* Center Column - Mission Statement */}
        <div className="font-jost font-normal text-center flex items-center justify-center">
          <div
            style={{
              // Width responsive: smallest is 200px, biggest is 549px
              // Based on 1512px base: 549px = ~36.3vw
              width: "clamp(200px, 36.3vw, 549px)",
              // Height responsive: smallest is 50px, biggest is 112.362px
              // Based on 1512px base: 112.362px = ~7.43vw
              height: "clamp(50px, 7.43vw, 112.362px)",
              color: "#FFF",
              fontFamily: "Jost",
              // Font size responsive: smallest is 16px, biggest is 36px
              // Based on 1512px base: 36px = ~2.38vw
              fontSize: "clamp(16px, 2.38vw, 36px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Developing & Supporting the next generation of Mechanical Engineers
          </div>
        </div>

        {/* Right Column - Address */}
        <div className="font-jost font-normal text-right">
          <p 
            className="text-white mb-4" 
            style={{ 
              fontFamily: 'Jost', 
              fontSize: '24px', 
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
              fontSize: '22px', 
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
              fontFamily: 'Jost', 
              fontSize: '24px', 
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

