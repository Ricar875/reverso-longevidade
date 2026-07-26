* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: #0b0f1a;
    color: #f0f4fa;
    min-height: 100vh;
}

.app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 30px;
}

/* NAVEGAÇÃO */
.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 16px 24px;
    background: rgba(255,255,255,0.03);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    backdrop-filter: blur(12px);
    margin-bottom: 40px;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.nav-btn {
    padding: 8px 20px;
    border: none;
    border-radius: 40px;
    background: transparent;
    color: rgba(255,255,255,0.4);
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Inter', sans-serif;
}

.nav-btn:hover {
    color: #fff;
    background: rgba(255,255,255,0.04);
}

.nav-btn.active {
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    color: #0b0f1a;
    font-weight: 600;
    box-shadow: 0 8px 25px rgba(59,130,246,0.2);
}

/* PÁGINAS */
.page {
    display: none;
    animation: fadeUp 0.5s ease;
}

.page.active {
    display: block;
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

h1, h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    margin-bottom: 12px;
}

h1 { font-size: 48px; line-height: 1.1; }
h2 { font-size: 34px; }

h1 span, h2 span {
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

p {
    color: rgba(255,255,255,0.5);
    font-size: 18px;
    line-height: 1.7;
    max-width: 520px;
    margin-bottom: 24px;
}

/* BOTÕES */
.btn-primary {
    display: inline-block;
    padding: 14px 40px;
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    border: none;
    border-radius: 60px;
    font-weight: 700;
    font-size: 16px;
    color: #0b0f1a;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 30px rgba(59,130,246,0.25);
    font-family: 'Inter', sans-serif;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(59,130,246,0.35);
}

/* STATS HERO */
.stats-hero {
    display: flex;
    gap: 40px;
    margin-top: 30px;
    color: rgba(255,255,255,0.3);
    font-size: 14px;
}

.stats-hero strong {
    display: block;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
}

/* HÁBITOS GRID */
.habitos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 20px;
}

.habito-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.04);
    border-radius: 16px;
    padding: 20px;
    transition: all 0.3s ease;
    cursor: default;
}

.habito-card:hover {
    transform: translateY(-4px);
    border-color: rgba(110,231,183,0.15);
    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}

.habito-card .num {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1;
}

.habito-card h4 {
    font-size: 16px;
    margin: 8px 0 4px;
}

.habito-card p {
    font-size: 13px;
    color: rgba(255,255,255,0.3);
    margin: 0;
}

/* CALCULADORA */
.calc-box {
    max-width: 420px;
    background: rgba(255,255,255,0.02);
    padding: 30px;
    border-radius: 24px;
    border: 1px solid rgba(255,255,255,0.04);
}

.calc-box label {
    display: block;
    font-size: 14px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 6px;
}

.calc-box input {
    width: 100%;
    padding: 14px 18px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
    transition: border 0.3s;
}

.calc-box input:focus {
    outline: none;
    border-color: rgba(110,231,183,0.3);
}

.result-box {
    margin-top: 20px;
    padding: 20px;
    background: rgba(110,231,183,0.04);
    border-radius: 16px;
    border-left: 3px solid #6ee7b7;
}

.result-item {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    font-size: 16px;
}

.result-item.highlight strong {
    font-size: 24px;
    color: #6ee7b7;
}

.result-message {
    margin-top: 12px;
    font-size: 15px;
    color: rgba(255,255,255,0.6);
}

.result-message span {
    color: #6ee7b7;
    font-weight: 700;
}

/* DASHBOARD */
.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    margin: 20px 0;
}

.stat-card {
    background: rgba(255,255,255,0.02);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.04);
}

.stat-card .label {
    display: block;
    font-size: 12px;
    color: rgba(255,255,255,0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-card .value {
    display: block;
    font-size: 28px;
    font-weight: 700;
    margin-top: 6px;
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.habitos-hoje {
    background: rgba(255,255,255,0.02);
    border-radius: 20px;
    padding: 24px;
    margin-top: 16px;
    border: 1px solid rgba(255,255,255,0.04);
}

.habitos-hoje h3 {
    font-size: 18px;
    margin-bottom: 12px;
}

.habitos-hoje h3 span {
    background: rgba(110,231,183,0.1);
    padding: 2px 12px;
    border-radius: 30px;
    font-size: 14px;
    color: #6ee7b7;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 12px 0;
}

.tag {
    padding: 6px 16px;
    border-radius: 40px;
    font-size: 14px;
    font-weight: 500;
}

.tag.done { background: rgba(110,231,183,0.1); color: #6ee7b7; }
.tag.pending { background: rgba(251,191,36,0.1); color: #fbbf24; }
.tag.missed { background: rgba(248,113,113,0.1); color: #f87171; }

.btn-checkin {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #6ee7b7, #3b82f6);
    border: none;
    border-radius: 60px;
    font-weight: 700;
    color: #0b0f1a;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Inter', sans-serif;
    margin-top: 8px;
}

.btn-checkin:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 30px rgba(59,130,246,0.25);
}

/* MEMBROS */
.auth-box {
    max-width: 400px;
    background: rgba(255,255,255,0.02);
    padding: 30px;
    border-radius: 24px;
    border: 1px solid rgba(255,255,255,0.04);
}

.auth-tabs {
    display: flex;
    gap: 6px;
    background: rgba(255,255,255,0.02);
    border-radius: 12px;
    padding: 4px;
    margin-bottom: 24px;
}

.auth-tab {
    flex: 1;
    padding: 10px;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.3);
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Inter', sans-serif;
}

.auth-tab.active {
    background: rgba(110,231,183,0.08);
    color: #6ee7b7;
}

.auth-form {
    display: none;
    flex-direction: column;
    gap: 14px;
}

.auth-form.active {
    display: flex;
}

.auth-form input {
    padding: 14px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    color: #fff;
    font-size: 15px;
    transition: border 0.3s;
}

.auth-form input:focus {
    outline: none;
    border-color: rgba(110,231,183,0.3);
}

.auth-form input::placeholder {
    color: rgba(255,255,255,0.15);
}

/* ADMIN */
.admin-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
    margin: 20px 0;
}

.admin-card {
    background: rgba(255,255,255,0.02);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.04);
}

.admin-card span { display: block; font-size: 12px; color: rgba(255,255,255,0.2); text-transform: uppercase; }
.admin-card strong { display: block; font-size: 28px; margin-top: 6px; }

.admin-last {
    background: rgba(255,255,255,0.02);
    border-radius: 16px;
    padding: 20px;
    border: 1px solid rgba(255,255,255,0.04);
}

.admin-last h4 { font-size: 16px; margin-bottom: 12px; }
.admin-last div { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.02); }
.admin-last div:last-child { border-bottom: none; }

/* RESPONSIVO */
@media (max-width: 720px) {
    .app { padding: 16px; }
    .nav-bar { flex-direction: column; align-items: stretch; gap: 10px; }
    .nav-links { justify-content: center; }
    .nav-btn { padding: 6px 14px; font-size: 13px; }
    h1 { font-size: 32px; }
    h2 { font-size: 26px; }
    .stats-hero { gap: 20px; }
    .habitos-grid { grid-template-columns: 1fr; }
    .dashboard-grid { grid-template-columns: 1fr 1fr; }
}

