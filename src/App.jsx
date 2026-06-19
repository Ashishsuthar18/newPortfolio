import profile from "./assets/profile.jpeg";
import cert1 from "./assets/cert1.pdf";
import cert2 from "./assets/cert2.pdf";

export default function App() {
const sections = [
    {
    id: "about",
    title: "About Me",
    content:
    "I am Ashish Suthar, a Computer Engineering student with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. My goal is to develop intelligent systems and solve real-world challenges using technology.",
    },
    {
    id: "education",
    title: "Education",
    content: `🎓 B.Tech Computer Engineering
    Indus University, Ahmedabad
    Semester: 5 | CGPA: 9.48

    📚 12th CBSE
    Swami Vivekanand Govt Model School, Block Pindwara
    Percentage: 70.2%

    📚 10th RBSE
    PM Shree Govt Sr Sec School, Veerwara
    Percentage: 87.83%`,
    },
    {
      id: "skills",
      title: "Skills",
      content: `Python • Java • C++ • HTML • CSS • Git • GitHub • AI • Machine Learning • Data Science`,
    },
    {
      id: "projects",
      title: "Projects",
      content: "🚀 Projects will be updated soon.",
    },
    {
      id: "certifications",
      title: "Certifications",
      content: "",
    },
    {
      id: "experience",
      title: "Experience",
      content:
        "Currently learning AI, ML, Data Science and building practical projects.",
    },
    {
      id: "achievements",
      title: "Achievements",
      content: "🏆 Achievements will be updated soon.",
    },
    {
      id: "gallery",
      title: "Gallery",
      content: "📷 Photos and memories will be added soon.",
    },
    {
      id: "contact",
      title: "Contact",
      content: `📧 Mail :-sutharashish119@gmail.com\n Contact no. :- 7375XXXXXX

📍 Ahmedabad, Gujarat`,
},
];

const navBtn = {
textDecoration: "none",
color: "white",
background: "linear-gradient(135deg,#7c3aed,#a855f7)",
padding: "10px 18px",
borderRadius: "30px",
fontSize: "14px",
fontWeight: "600",
boxShadow: "0 0 15px rgba(168,85,247,0.4)",
transition: "0.3s",
};

const animations = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #8b5cf6;
  }
  to {
    text-shadow: 0 0 30px #c084fc;
  }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

return (
<div
style={{
background:
"linear-gradient(-45deg,#09090b,#111827,#4c1d95,#09090b)",
backgroundSize: "400% 400%",
animation: "gradient 15s ease infinite",
color: "white",
minHeight: "100vh",
fontFamily: "Arial, sans-serif",
}}
>
{/* NAVBAR */}
<nav
style={{
transition: "all 0.3s ease",
cursor: "pointer",    
position: "relative",
top: 0,
zIndex: 1000,
backdropFilter: "blur(10px)",
background: "rgba(17,24,39,0.95)",
padding: "15px",
display: "flex",
justifyContent: "center",
flexWrap: "wrap",
gap: "10px",
borderBottom: "1px solid #374151",
}}
> <a
  href="#home"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Home
</a> <a
  href="#about"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  About
</a> <a
  href="#education"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Education
</a> <a
  href="#skills"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Skills
</a> <a
  href="#projects"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Projects
</a> <a
  href="#certifications"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Certificates
</a> <a
  href="#experience"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Experience
</a> <a
  href="#achievements"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Achievements
</a> <a
  href="#gallery"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Gallery
</a> <a
  href="#contact"
  style={navBtn}
  onMouseEnter={(e) => {
    e.target.style.transform = "translateY(-4px) scale(1.05)";
    e.target.style.boxShadow = "0 0 25px #a855f7";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 0 15px rgba(168,85,247,0.4)";
  }}
>
  Contact
</a> </nav>

<style>{animations}</style>
  {/* HERO */}
  <section
    id="home"
    style={{
      animation: "fadeUp 1.2s ease",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px 20px",
    }}
  >
    <img
      src={profile}
      alt="Ashish Suthar"
      style={{
        animation: "float 4s ease-in-out infinite",
        width: "min(250px,70vw)",
        height: "min(250px,70vw)",
        borderRadius: "50%",
        objectFit: "cover",
        border: "5px solid #8b5cf6",
        boxShadow: "0 0 40px #8b5cf6",
      }}
    />

    <h1
      style={{
        fontSize: "clamp(2.5rem,7vw,4.5rem)",
        marginTop: "20px",
        marginBottom: "10px",
        animation: "glow 2s ease-in-out infinite alternate",
      }}
    >
      Ashish Suthar
    </h1>

    <p
      style={{
        color: "white",
        fontSize: "clamp(1rem,4vw,1.5rem)",
        maxWidth: "700px",
      }}
    >
      Computer Engineering Student | AI & ML Enthusiast |
      Problem Solver
    </p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "15px",
        marginTop: "25px",
      }}
    >
      <button
        style={{
          background: "#8b5cf6",
          color: "white",
          border: "none",
          padding: "14px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Download Resume
      </button>

      <a
        href="#contact"
        style={{
          border: "2px solid #8b5cf6",
          color: "white",
          textDecoration: "none",
          padding: "12px 24px",
          borderRadius: "10px",
        }}
      >
        Contact Me
      </a>
    </div>
  </section>

  {/* SECTIONS */}
  {sections.map((section) => (
    <section
      key={section.id}
      id={section.id}
      style={{
        width: "90%",
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "clamp(20px,4vw,40px)",
        background: "rgba(17,24,39,0.95)",
        borderRadius: "20px",
        border: "1px solid #374151",
        boxShadow: "0 0 20px rgba(168,85,247,0.15)",
        scrollMarginTop: "120px",
      }}
    >
      <h2
        style={{
          color: "#c084fc",
          fontSize: "clamp(1.6rem,4vw,2.3rem)",
          marginBottom: "20px",
        }}
      >
        {section.title}
      </h2>

      {section.id === "certifications" ? (
  <div
    style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <a
      href={cert1}
      target="_blank"
      rel="noreferrer"
      style={{
        background: "#8b5cf6",
        color: "white",
        padding: "12px 20px",
        borderRadius: "10px",
        textDecoration: "none",
      }}
    >
      📜 Certificate 1
    </a>

    <a
      href={cert2}
      target="_blank"
      rel="noreferrer"
      style={{
        background: "#8b5cf6",
        color: "white",
        padding: "12px 20px",
        borderRadius: "10px",
        textDecoration: "none",
      }}
    >
      📜 Certificate 2
    </a>
  </div>
) : (
  <pre
    style={{
      whiteSpace: "pre-wrap",
      fontFamily: "Arial",
      color: "#d1d5db",
      lineHeight: "1.8",
      fontSize: "clamp(14px,2vw,17px)",
    }}
  >
    {section.content}
  </pre>
)}
    </section>
  ))}

  {/* FOOTER */}
  <footer
    style={{
      textAlign: "center",
      padding: "30px",
      color: "#9ca3af",
      borderTop: "1px solid #374151",
      marginTop: "40px",
    }}
  >
    © 2026 Ashish Suthar | All Rights are Reserved.
  </footer>
</div>

);
}
