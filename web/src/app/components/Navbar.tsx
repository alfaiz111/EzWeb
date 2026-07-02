"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🔥 detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run pertama
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setOpen(false);
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
    <>
      {/* 🔥 DESKTOP NAVBAR */}
      {!isMobile && (
        <nav
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0, 255, 178, 0.7)",
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
                color: "#20004b",
                fontWeight: "600",
                cursor: "pointer",
                textTransform: "capitalize",
                fontSize: "13px",
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      )}

      {/* 🔥 BURGER BUTTON */}
      {isMobile && (
        <div
          onClick={() => setOpen(!open)}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={barStyle}></span>
          <span style={barStyle}></span>
          <span style={barStyle}></span>
        </div>
      )}

      {/* 🔥 MOBILE MENU */}
      {isMobile && open && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "20px",
            background: "rgba(0, 255, 178, 0.9)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "15px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
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
                textTransform: "capitalize",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

const barStyle = {
  width: "25px",
  height: "3px",
  background: "#004B39",
  borderRadius: "2px",
};