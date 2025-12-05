export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px, 4vw, 64px) clamp(16px, 4.23vw, 64px)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: "bold",
            marginBottom: "clamp(24px, 3vw, 48px)",
            color: "#ffffff",
          }}
        >
          Welcome to ASME @ Penn State
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 24px)",
            lineHeight: "1.6",
            color: "#ffffff",
            marginBottom: "clamp(32px, 4vw, 64px)",
          }}
        >
          American Society of Mechanical Engineers at Penn State University
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(16px, 2vw, 24px)",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(14px, 1.5vw, 20px)",
              color: "#899ABD",
            }}
          >
            This is the first page of the ASME website.
          </p>
        </div>
      </div>
    </div>
  );
}
