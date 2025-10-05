// src/contacto.jsx
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";

function Contacto() {
  const wrap = { maxWidth: 960, margin: "0 auto", padding: "24px 16px" };
  const input = { width: "100%", padding: "12px 14px", border: "1px solid #e5e7eb", borderRadius: 12 };
  const label = { fontSize: 14, color: "#374151", marginTop: 12, marginBottom: 6, display: "block" };
  const btn = { marginTop: 16, padding: "12px 18px", borderRadius: 9999, background: "#facc15", color: "#111827", fontWeight: 700, border: "none", cursor: "pointer" };
  const card = { background:"#fafafa", border:"1px solid #e5e7eb", borderRadius:16, padding:16 };

  return (
    <>
      <Header />
      <main style={wrap}>
        <h1 style={{ fontSize: 32, fontWeight: 800 }}>Contacto</h1>
        <p style={{ color: "#4b5563", marginTop: 8 }}>Te respondemos en menos de 12 horas.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginTop: 24 }}>
          <form style={{ display: "grid" }} onSubmit={(e)=>{e.preventDefault(); alert("Mensaje enviado (demo)");}}>
            <label style={label}>Nombre</label>
            <input style={input} placeholder="Tu nombre" />

            <label style={label}>Teléfono</label>
            <input style={input} placeholder="+34 ..." />

            <label style={label}>Email</label>
            <input style={input} type="email" placeholder="tucorreo@ejemplo.com" />

            <label style={label}>Mensaje</label>
            <textarea style={{...input, height:120, resize:"vertical"}} placeholder="Cuéntanos tu caso" />

            <label style={{ ...label, display: "flex", alignItems:"center", gap:8 }}>
              <input type="checkbox" /> He leído y acepto la política de privacidad
            </label>

            <button style={btn}>Enviar</button>
          </form>

          <div style={card}>
            <h3 style={{ fontWeight: 700, fontSize: 18 }}>Contacto directo</h3>
            <ul style={{ marginTop: 10, color: "#374151", lineHeight: 1.8 }}>
              <li><strong>Email:</strong> info@lexviaria.com</li>
              <li><strong>Horario:</strong> L–D 8:00–22:00</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
createRoot(document.getElementById("root")).render(<Contacto />);
