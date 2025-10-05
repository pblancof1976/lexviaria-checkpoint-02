// src/components/Header.jsx
export default function Header() {
  const wrap = {maxWidth:960, margin:"0 auto", padding:"12px 16px"};
  const top = {background:"#111", color:"#fff"};
  const row = {display:"flex", alignItems:"center", justifyContent:"space-between"};
  const icon = {width:28, height:28, display:"inline-block", marginLeft:12};
  const badge = {width:32, height:32, borderRadius:9999, background:"#facc15", marginRight:10};
  const navA = {marginLeft:16, textDecoration:"none", color:"#6b7280"};
  return (
    <>
      {/* Topbar */}
      <div style={top}>
        <div style={{...wrap, ...row, justifyContent:"flex-end"}}>
          <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" style={{marginLeft:0}}>
            <svg style={icon} viewBox="0 0 24 24"><path fill="#FF0000" d="M23 12s0-3.5-.45-5.2c-.25-.9-.98-1.6-1.88-1.86C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.67.44c-.9.25-1.63.96-1.88 1.86C.99 8.5 1 12 1 12s0 3.5.45 5.2c.25.9.98 1.6 1.88 1.86C5.1 19.5 12 19.5 12 19.5s6.9 0 8.67-.44c.9-.25 1.63-.96 1.88-1.86C23 15.5 23 12 23 12Z"/><path fill="#fff" d="M10 8.75v6.5l6-3.25-6-3.25z"/></svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg style={icon} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2"/><circle cx="7" cy="8" r="1.7" fill="#fff"/><rect x="5.5" y="10" width="3" height="7.5" fill="#fff"/><path fill="#fff" d="M12 10h2.9v1.3h.1c.5-.9 1.6-1.6 3-1.6 3 0 3.9 2 3.9 4.7V18h-3v-2.9c0-1.4 0-3.1-1.9-3.1s-2.2 1.2-2.2 3V18H12V10z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg style={icon} viewBox="0 0 24 24"><defs><linearGradient id="ig" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F58529"/><stop offset="50%" stopColor="#DD2A7B"/><stop offset="100%" stopColor="#8134AF"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="16.8" cy="7.2" r="1.2" fill="#fff"/></svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <svg style={icon} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#1877F2"/><path fill="#fff" d="M13.5 9.5V8.1c0-.7.5-1.1 1.3-1.1h1.2V4.9h-2c-2.1 0-3.5 1.2-3.5 3.3v1.3H9v2.3h1.5V19h2.5v-5.2h2l.3-2.3h-2.3Z"/></svg>
          </a>
        </div>
      </div>

      {/* Header / Nav */}
      <div style={{borderBottom:"1px solid #e5e7eb", background:"#fff"}}>
        <div style={{...wrap, ...row}}>
          <div style={{display:"flex", alignItems:"center"}}>
            <div style={badge}></div>
            <div>
              <div style={{fontWeight:800, fontSize:20}}>LexViaria</div>
              <div style={{marginTop:-2, fontSize:10, color:"#6b7280"}}>Estudio jurídico-técnico del siniestro vial</div>
            </div>
          </div>
          <nav style={{fontSize:14}}>
            <a href="/index.html#inicio" style={{...navA, marginLeft:0, color:"#a16207", fontWeight:600}}>Inicio</a>
            <a href="/index.html#despacho" style={navA}>Jurídico</a>
            <a href="/index.html#despacho" style={navA}>Tecnológico</a>
            <a href="/index.html#blog" style={navA}>Blog</a>
            <a href="/contacto.html" style={navA}>Contacto</a>
          </nav>
        </div>
      </div>
    </>
  );
}
