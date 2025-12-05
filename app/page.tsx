import { responsiveClamp, responsiveClampCustom } from "./utils/responsive";
import Calendar from "./components/Calendar";

export default function Home() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <div
        style={{
          height: "54.03vw",
          minHeight: "54.03vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "5vw",
          paddingLeft: "clamp(16px, 4.23vw, 64px)",
          paddingRight: "clamp(16px, 4.23vw, 64px)",
          paddingBottom: "clamp(32px, 4vw, 64px)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "clamp(300px, 100vw, 1512px)",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            aspectRatio: "1512 / 568",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: responsiveClamp(64, 32, 96),
              fontWeight: "bold",
              marginBottom: responsiveClamp(24, 12, 36),
              color: "#ffffff",
            }}
          >
            WE ARE
          </h1>
          <h2
            style={{
              fontSize: responsiveClamp(48, 24, 72),
              fontWeight: "bold",
              marginBottom: responsiveClamp(24, 12, 36),
              color: "#ffffff",
            }}
          >
            THE AMERICAN SOCIETY OF MECHANICAL ENGINEERS
          </h2>
          <p
            style={{
              fontSize: responsiveClamp(36, 18, 54),
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            @ PENN STATE
          </p>
        </div>
      </div>

      {/* Image Section between Hero and What we do */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: `${responsiveClampCustom(40, 20, 60)} 0`,
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            width: responsiveClampCustom(800, 400, 800),
            height: responsiveClampCustom(600, 450, 600),
            maxWidth: "100%",
            borderRadius: responsiveClampCustom(20, 10, 20),
            border: `${responsiveClampCustom(6.67, 3.33, 6.67)} solid #48597F`,
            backgroundColor: "#ffffff",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Calendar />
        </div>
      </section>

      {/* What we do Section - White Background */}
      <section
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: `${responsiveClampCustom(80, 40, 120)} 0`,
        }}
      >
        {/* Container: 1194 * 428 (1512px 기준, 중앙 정렬) */}
        <div
          style={{
            width: responsiveClampCustom(1194, 300, 1194),
            maxWidth: "100%",
            minHeight: responsiveClampCustom(428, 214, 428),
            height: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            position: "relative",
            gap: responsiveClampCustom(72, 36, 72),
            padding: `0 ${responsiveClampCustom(16, 8, 32)}`,
          }}
        >
          {/* 왼쪽: 3개의 블럭 세로 배치 (각 336 * 86, 간격 50px) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: responsiveClampCustom(50, 25, 50),
              flexShrink: 0,
              width: responsiveClampCustom(336, 168, 336),
              minWidth: responsiveClampCustom(336, 200, 336),
            }}
          >
            {/* 블럭 1 */}
            <div
              style={{
                width: responsiveClampCustom(336, 168, 336),
                height: responsiveClampCustom(86, 43, 86),
                backgroundColor: "#E5E5E5",
                borderRadius: responsiveClampCustom(8, 4, 12),
                border: `${responsiveClampCustom(2, 1, 2)} solid #1E2B48`,
                display: "flex",
                alignItems: "center",
                paddingLeft: responsiveClampCustom(20, 10, 30),
                gap: responsiveClampCustom(16, 8, 24),
              }}
            >
              <div
                style={{
                  width: responsiveClampCustom(40, 20, 60),
                  height: responsiveClampCustom(40, 20, 60),
                  borderRadius: "50%",
                  backgroundColor: "#1E2B48",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: responsiveClampCustom(24, 16, 32),
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                1
              </div>
              <span
                style={{
                  fontSize: responsiveClampCustom(24, 16, 32),
                  fontWeight: "bold",
                  color: "#1E2B48",
                }}
              >
                PROJECTS
              </span>
            </div>

            {/* 블럭 2 */}
            <div
              style={{
                width: responsiveClampCustom(336, 168, 336),
                height: responsiveClampCustom(86, 43, 86),
                backgroundColor: "#E5E5E5",
                borderRadius: responsiveClampCustom(8, 4, 12),
                border: `${responsiveClampCustom(2, 1, 2)} solid #1E2B48`,
                display: "flex",
                alignItems: "center",
                paddingLeft: responsiveClampCustom(20, 10, 30),
                gap: responsiveClampCustom(16, 8, 24),
              }}
            >
              <div
                style={{
                  width: responsiveClampCustom(40, 20, 60),
                  height: responsiveClampCustom(40, 20, 60),
                  borderRadius: "50%",
                  backgroundColor: "#1E2B48",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: responsiveClampCustom(24, 16, 32),
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                2
              </div>
              <span
                style={{
                  fontSize: responsiveClampCustom(24, 16, 32),
                  fontWeight: "bold",
                  color: "#1E2B48",
                }}
              >
                WORKSHOPS
              </span>
            </div>

            {/* 블럭 3 */}
            <div
              style={{
                width: responsiveClampCustom(336, 168, 336),
                height: responsiveClampCustom(86, 43, 86),
                backgroundColor: "#E5E5E5",
                borderRadius: responsiveClampCustom(8, 4, 12),
                border: `${responsiveClampCustom(2, 1, 2)} solid #1E2B48`,
                display: "flex",
                alignItems: "center",
                paddingLeft: responsiveClampCustom(20, 10, 30),
                gap: responsiveClampCustom(16, 8, 24),
              }}
            >
              <div
                style={{
                  width: responsiveClampCustom(40, 20, 60),
                  height: responsiveClampCustom(40, 20, 60),
                  borderRadius: "50%",
                  backgroundColor: "#1E2B48",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: responsiveClampCustom(24, 16, 32),
                  fontWeight: "bold",
                  flexShrink: 0,
                }}
              >
                3
              </div>
              <span
                style={{
                  fontSize: responsiveClampCustom(24, 16, 32),
                  fontWeight: "bold",
                  color: "#1E2B48",
                }}
              >
                SOCIALS
              </span>
            </div>
          </div>

          {/* 블럭으로부터 72px 떨어진 곳에 텍스트 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flex: "1 1 0",
              minWidth: responsiveClampCustom(300, 250, 500),
              maxWidth: responsiveClampCustom(786, 393, 786),
            }}
          >
            <h2
              style={{
                fontSize: responsiveClampCustom(48, 24, 72),
                fontWeight: "bold",
                color: "#1E2B48",
                marginBottom: responsiveClampCustom(20, 10, 30),
                textAlign: "left",
              }}
            >
              What we do
            </h2>
            <p
              style={{
                fontSize: responsiveClampCustom(18, 14, 24),
                lineHeight: "1.6",
                color: "#333333",
                marginBottom: responsiveClampCustom(20, 10, 30),
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button
              className="join-button"
              style={{
                backgroundColor: "#1E2B48",
                color: "#ffffff",
                padding: `${responsiveClampCustom(16, 12, 20)} ${responsiveClampCustom(32, 24, 48)}`,
                fontSize: responsiveClampCustom(18, 14, 22),
                fontWeight: "bold",
                border: "none",
                borderRadius: responsiveClampCustom(8, 4, 12),
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Join our GroupMe
            </button>
          </div>
        </div>

        {/* New Section: 68px below What we do frame */}
        <div
          style={{
            marginTop: responsiveClampCustom(68, 34, 68),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "var(--Garnet, #840032)",
              display: "flex",
              width: responsiveClampCustom(1194, 300, 1194),
              maxWidth: "100%",
              height: responsiveClampCustom(211, 106, 211),
              padding: responsiveClampCustom(10, 5, 10),
              justifyContent: "center",
              alignItems: "center",
              gap: responsiveClampCustom(10, 5, 10),
              flexShrink: 0,
            }}
          >
            <h2
              style={{
                color: "#ffffff",
                fontSize: responsiveClampCustom(48, 24, 72),
                fontWeight: "bold",
                textAlign: "center",
                margin: 0,
              }}
            >
              EMBEDDED LINKTREE
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
