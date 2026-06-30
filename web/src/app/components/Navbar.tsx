"use client";

export default function Navbar() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menus = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "portofolio",
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0, 255, 178, 0.7)", // 🔥 opacity 70%
        backdropFilter: "blur(12px)",
        padding: "10px 28px",
        borderRadius: "999px",
        display: "flex",
        gap: "20px",
        zIndex: 999,
      }}
    >
      {menus.map((item) => (
        <button
          key={item}
          onClick={() => handleScroll(item)}
          style={{
            background: "transparent",
            border: "none",
            color: "#004B39",
            fontWeight: "600",
            cursor: "pointer",
            textTransform: "capitalize",
            fontSize: "13px",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}