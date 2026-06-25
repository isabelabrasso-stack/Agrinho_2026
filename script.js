/* ══════════════════════════════════════════════════════════
   AGRINHO 2026 – style.css
   Agro Forte, Futuro Sustentável
   ══════════════════════════════════════════════════════════ */

/* ── RESET & VARIÁVEIS ─────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --verde-profundo: #1B4332;
  --verde-campo: #2D6A4F;
  --verde-broto: #52B788;
  --terra: #C9852A;
  --palha: #F4ECD8;
  --branco: #FAFAF8;
  --texto: #1C2B1E;
  --texto-suave: #4A5E4D;

  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --section-pad: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem);
  --radius: 12px;
  --shadow: 0 4px 24px rgba(27, 67, 50, .12);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--branco);
  color: var(--texto);
  line-height: 1.7;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ── UTILITÁRIOS ───────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
}

.tag {
  display: inline-block;
  font-size: .72rem;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--terra);
  margin-bottom: .75rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  line-height: 1.2;
  color: var(--verde-profundo);
  margin-bottom: 1rem;
}

.section-lead {
  font-size: 1.05rem;
  color: var(--texto-suave);
  max-width: 600px;
  margin-bottom: 2.5rem;
}

/* ── BOTÕES ────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .75rem 1.75rem;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: .95rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s;
  border: none;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.btn-primary {
  background: var(--verde-campo);
  color: #fff;
}

.btn-secondary {
  background: transparent;
  color: var(--palha);
  border: 2px solid var(--verde-broto);
}

/* ── NAVBAR ────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(27, 67, 50, .96);
  backdrop-filter: blur(8px);
  padding: 1rem 0;
  transition: padding .3s;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--palha);
  line-height: 1.2;
}

.nav-logo span {
  color: var(--verde-broto);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  font-size: .88rem;
  font-weight: 500;
  color: rgba(244, 236, 216, .8);
  letter-spacing: .04em;
  transition: color .2s;
}

.nav-links a:hover {
  color: var(--verde-broto);
}

/* Menu hambúrguer */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: .25rem;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--palha);
  transition: transform .3s, opacity .3s;
}

.nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── HERO ──────────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(to bottom, rgba(27,67,50,.72) 0%, rgba(27,67,50,.45) 60%, rgba(27,67,50,.85) 100%),
    url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80') center/cover no-repeat;
  padding: 8rem clamp(1.25rem, 6vw, 5rem) 5rem;
}

.hero-content {
  max-width: 720px;
}

.hero-eyebrow {
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--verde-broto);
  margin-bottom: 1.25rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1.1;
  color: var(--palha);
  margin-bottom: 1.5rem;
}

.hero-title em {
  font-style: normal;
  color: var(--verde-broto);
}

.hero-sub {
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: rgba(244, 236, 216, .85);
  max-width: 540px;
  margin-bottom: 2.5rem;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Indicador de scroll */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .4rem;
  color: rgba(244, 236, 216, .6);
  font-size: .72rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  animation: bounce 2s infinite;
}

.scroll-hint i {
  font-size: 1rem;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}

/* ── STATS BAR ─────────────────────────────────────────── */
.stats-bar {
  background: var(--verde-profundo);
  padding: 2.5rem 0;
}

.stats-bar .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--verde-broto);
  line-height: 1;
}

.stat-label {
  font-size: .82rem;
  color: rgba(244, 236, 216, .7);
  margin-top: .35rem;
  letter-spacing: .05em;
}

/* ── SEÇÃO 1 – PRODUÇÃO ────────────────────────────────── */
.producao {
  padding: var(--section-pad);
  background: var(--branco);
}

.producao .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.producao-img {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.producao-img img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  transition: transform .4s;
}

.producao-img:hover img {
  transform: scale(1.03);
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.tech-card {
  background: var(--palha);
  border-radius: var(--radius);
  padding: 1.25rem;
  display: flex;
  gap: .75rem;
  align-items: flex-start;
  transition: transform .2s, box-shadow .2s;
}

.tech-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.tech-card i {
  font-size: 1.4rem;
  color: var(--verde-campo);
  margin-top: .1rem;
  flex-shrink: 0;
}

.tech-card h4 {
  font-size: .9rem;
  font-weight: 600;
  margin-bottom: .2rem;
}

.tech-card p {
  font-size: .8rem;
  color: var(--texto-suave);
}

/* ── SEÇÃO 2 – SUSTENTABILIDADE ────────────────────────── */
.sustentabilidade {
  padding: var(--section-pad);
  background: var(--palha);
}

.sustentabilidade .container {
  text-align: center;
}

.sust-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
  text-align: left;
}

.sust-card {
  background: var(--branco);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: transform .2s;
}

.sust-card:hover {
  transform: translateY(-4px);
}

.sust-icon {
  width: 52px;
  height: 52px;
  background: var(--verde-profundo);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.sust-icon i {
  color: var(--verde-broto);
  font-size: 1.25rem;
}

.sust-card h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: .5rem;
}

.sust-card p {
  font-size: .88rem;
  color: var(--texto-suave);
}

/* ── SEÇÃO 3 – DESAFIOS ────────────────────────────────── */
.desafios {
  padding: var(--section-pad);
  background: var(--verde-profundo);
  color: var(--palha);
}

.desafios .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.desafios .section-title {
  color: var(--palha);
}

.desafios .section-lead {
  color: rgba(244, 236, 216, .75);
}

.desafios .tag {
  color: var(--terra);
}

.desafio-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.desafio-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: rgba(255, 255, 255, .07);
  border-left: 3px solid var(--terra);
  border-radius: 0 var(--radius) var(--radius) 0;
}

.desafio-list li i {
  color: var(--terra);
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: .1rem;
}

.desafio-list li strong {
  display: block;
  margin-bottom: .25rem;
  color: #fff;
}

.desafio-list li span {
  font-size: .88rem;
  color: rgba(244, 236, 216, .7);
}

.desafio-visual {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .3);
}

.desafio-visual img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}

/* ── SEÇÃO 4 – SOLUÇÕES ────────────────────────────────── */
.solucoes {
  padding: var(--section-pad);
  background: var(--branco);
}

.solucoes .container {
  text-align: center;
}

.solucoes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
  text-align: left;
}

.sol-card {
  border: 1px solid #d8e8d0;
  border-radius: var(--radius);
  overflow: hidden;
  transition: box-shadow .2s, transform .2s;
}

.sol-card:hover {
  box-shadow: var(--shadow);
  transform: translateY(-3px);
}

.sol-card-header {
  background: var(--verde-campo);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.sol-card-header i {
  font-size: 1.5rem;
  color: var(--palha);
}

.sol-card-header h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}

.sol-card-body {
  padding: 1.5rem;
}

.sol-card-body p {
  font-size: .88rem;
  color: var(--texto-suave);
}

/* ── QUIZ ──────────────────────────────────────────────── */
.quiz-section {
  padding: var(--section-pad);
  background: linear-gradient(135deg, var(--palha) 0%, #e8f5e0 100%);
}

.quiz-section .container {
  text-align: center;
}

.quiz-box {
  background: var(--branco);
  border-radius: var(--radius);
  padding: 2.5rem;
  max-width: 680px;
  margin: 2rem auto 0;
  box-shadow: var(--shadow);
  text-align: left;
}

.quiz-question {
  font-weight: 600;
  font-size: 1.05rem;
  margin-bottom: 1.25rem;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: .75rem;
}

.quiz-option {
  padding: .85rem 1.25rem;
  border: 2px solid #d0e4d0;
  border-radius: 8px;
  cursor: pointer;
  font-size: .92rem;
  transition: border-color .2s, background .2s;
  background: var(--branco);
  text-align: left;
}

.quiz-option:hover {
  border-color: var(--verde-broto);
  background: #f0faf0;
}

.quiz-option.correct {
  border-color: var(--verde-broto);
  background: #e0f5e8;
  color: var(--verde-profundo);
}

.quiz-option.wrong {
  border-color: #e57373;
  background: #fde8e8;
}

.quiz-feedback {
  margin-top: 1rem;
  font-size: .9rem;
  font-weight: 500;
  min-height: 1.4rem;
}

.quiz-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.quiz-progress {
  font-size: .82rem;
  color: var(--texto-suave);
}

/* ── SEÇÃO 5 – CONTATO ─────────────────────────────────── */
.contato {
  padding: var(--section-pad);
  background: var(--verde-profundo);
  color: var(--palha);
}

.contato .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contato .section-title {
  color: var(--palha);
}

.contato .section-lead {
  color: rgba(244, 236, 216, .75);
}

.contato .tag {
  color: var(--verde-broto);
}

.contato-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group label {
  display: block;
  font-size: .82rem;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(244, 236, 216, .7);
  margin-bottom: .4rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: .85rem 1rem;
  background: rgba(255, 255, 255, .1);
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 8px;
  color: var(--palha);
  font-family: var(--font-body);
  font-size: .95rem;
  transition: border-color .2s;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(244, 236, 216, .45);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--verde-broto);
}

.form-group select option {
  background: var(--verde-profundo);
}

.form-submit {
  margin-top: .5rem;
}

#formFeedback {
  font-size: .88rem;
  margin-top: .5rem;
  min-height: 1.2rem;
}

.contato-msg {
  background: rgba(255, 255, 255, .07);
  border-radius: var(--radius);
  padding: 2rem;
  border-left: 4px solid var(--verde-broto);
}

.contato-msg blockquote {
  font-family: var(--font-display);
  font-size: 1.4rem;
  line-height: 1.4;
  color: var(--palha);
  margin-bottom: 1rem;
}

.contato-msg cite {
  font-size: .82rem;
  color: rgba(244, 236, 216, .6);
  font-style: normal;
}

/* ── FOOTER ────────────────────────────────────────────── */
footer {
  background: #0f2a1d;
  color: rgba(244, 236, 216, .6);
  padding: 2rem 0;
  text-align: center;
  font-size: .82rem;
}

footer strong {
  color: var(--verde-broto);
}

/* ── RESPONSIVO (MOBILE) ───────────────────────────────── */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: var(--verde-profundo);
    padding: 1.5rem 2rem;
    gap: 1.25rem;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-toggle {
    display: flex;
  }

  .producao .container,
  .desafios .container,
  .contato .container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .producao-img img,
  .desafio-visual img {
    height: 260px;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
