$content = @'
import React from "react";
import { Award, Globe, Users, CheckCircle, Mail, Phone, Shield, TrendingUp } from "lucide-react";

var expertise = [
  "Visit and Tourist Visa Processing",
  "Skilled Worker Immigration",
  "Business and Investor Visas",
  "Study Abroad Consulting",
  "Express Entry and PR Pathways",
  "Corporate Travel Management",
  "UK and European Immigration",
  "Canada and Australia PR"
];

var achievements = [
  { label: "15+",   sub: "Years Experience" },
  { label: "5000+", sub: "Cases Handled"    },
  { label: "50+",   sub: "Countries"        },
  { label: "98%",   sub: "Success Rate"     }
];

function About() {
  return React.createElement("section", {
    id: "about",
    style: { background: "linear-gradient(135deg, #f8fafc 0%, #f0f4ff 50%, #fef9ec 100%)", padding: "6rem 1rem", position: "relative", overflow: "hidden" }
  },
    React.createElement("div", { style: { maxWidth: "1280px", margin: "0 auto" } },
      React.createElement("div", { style: { textAlign: "center", marginBottom: "4rem" } },
        React.createElement("span", { style: { color: "#c9a55a", fontWeight: "700", fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase" } }, "Meet the Expert"),
        React.createElement("h2", { style: { color: "#0a1628", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: "800", marginTop: "0.75rem", marginBottom: "1rem" } }, "Leadership and Expertise"),
        React.createElement("p", { style: { color: "#6b7280", fontSize: "1.125rem", maxWidth: "42rem", margin: "0 auto" } }, "Decades of experience guiding thousands of clients to their global destinations")
      ),
      React.createElement("div", { style: { borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.15)", border: "1px solid rgba(201,165,90,0.2)" } },
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)" } },
          React.createElement("div", { style: { background: "linear-gradient(135deg, #010610 0%, #0a1628 50%, #1a1060 100%)", padding: "2.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", color: "white" } },
            React.createElement("div", { style: { width: "200px", height: "200px", borderRadius: "50%", overflow: "hidden", border: "4px solid #c9a55a", boxShadow: "0 0 40px rgba(201,165,90,0.5)", marginBottom: "1.5rem" } },
              React.createElement("img", { src: "/photo.png", alt: "Muhammad Imran Malik", style: { width: "200px", height: "200px", objectFit: "cover", objectPosition: "center top", display: "block" } })
            ),
            React.createElement("h3", { style: { fontSize: "1.75rem", fontWeight: "900", color: "white", marginBottom: "0.5rem" } }, "Muhammad Imran Malik"),
            React.createElement("div", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 20px", borderRadius: "9999px", background: "linear-gradient(135deg, #c9a55a, #f0c040)", color: "#0a1628", fontWeight: "700", fontSize: "14px", marginBottom: "1rem" } },
              React.createElement(Shield, { size: 14 }),
              "Managing Director"
            ),
            React.createElement("p", { style: { fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem" } }, "Accurate Consultancy, Lahore, Pakistan"),
            React.createElement("p", { style: { color: "#c9a55a", fontWeight: "600", fontSize: "14px", marginBottom: "1.5rem" } }, "4.9/5 Client Rating"),
            React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" } },
              React.createElement("a", { href: "mailto:info@accurate-consultancy.com", style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", textDecoration: "none", fontSize: "13px", fontWeight: "600" } },
                React.createElement(Mail, { size: 13 }), "Email"
              ),
              React.createElement("a", { href: "tel:+923160285386", style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "9999px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", textDecoration: "none", fontSize: "13px", fontWeight: "600" } },
                React.createElement(Phone, { size: 13 }), "Call"
              ),
              React.createElement("a", { href: "https://wa.me/923160285386", target: "_blank", rel: "noopener noreferrer", style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 16px", borderRadius: "9999px", background: "#25D366", color: "white", textDecoration: "none", fontSize: "13px", fontWeight: "600" } },
                "WhatsApp"
              )
            )
          ),
          React.createElement("div", { style: { background: "white", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" } },
            React.createElement("h4", { style: { color: "#0a1628", fontSize: "1.25rem", fontWeight: "700", marginBottom: "1rem" } }, "About Muhammad Imran Malik"),
            React.createElement("p", { style: { color: "#4b5563", lineHeight: "1.8", marginBottom: "1rem", fontSize: "15px" } }, "With over 15 years of dedicated experience in visa and immigration consulting, Muhammad Imran Malik has established himself as one of Pakistan's most trusted immigration professionals."),
            React.createElement("p", { style: { color: "#4b5563", lineHeight: "1.8", marginBottom: "1rem", fontSize: "15px" } }, "As the Managing Director of Accurate Consultancy, he has personally guided over 5,000 clients across 50+ countries, from visit visas to complex investor immigration programs in the USA, UK, Canada, and Australia."),
            React.createElement("p", { style: { color: "#4b5563", lineHeight: "1.8", marginBottom: "2rem", fontSize: "15px" } }, "His deep regulatory knowledge, ethical approach, and commitment to client success has earned Accurate Consultancy a 98% approval rate, one of the highest in the industry."),
            React.createElement("h4", { style: { color: "#0a1628", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" } }, "Areas of Expertise"),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "2rem" } },
              expertise.map(function(item, i) {
                return React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "12px", background: "#f8fafc", border: "1px solid #f0f0f0" } },
                  React.createElement(CheckCircle, { size: 13, style: { color: "#c9a55a", flexShrink: 0 } }),
                  React.createElement("span", { style: { fontSize: "12px", fontWeight: "600", color: "#374151" } }, item)
                );
              })
            ),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", padding: "20px", borderRadius: "16px", background: "linear-gradient(135deg, #0a1628, #1a1060)", border: "1px solid rgba(201,165,90,0.2)" } },
              achievements.map(function(a, i) {
                return React.createElement("div", { key: i, style: { textAlign: "center" } },
                  React.createElement("div", { style: { color: "white", fontWeight: "900", fontSize: "1.1rem" } }, a.label),
                  React.createElement("div", { style: { color: "rgba(255,255,255,0.5)", fontSize: "11px", marginTop: "4px", lineHeight: "1.3" } }, a.sub)
                );
              })
            )
          )
        )
      )
    )
  );
}

export default About;
'@
Set-Content -Path "src\components\About.jsx" -Value $content -Encoding UTF8
Write-Host "File created successfully!"
