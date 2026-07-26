// NAVEGAÇÃO ENTRE PÁGINAS
document.querySelectorAll('.nav-demo button').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active de todos os botões
        document.querySelectorAll('.nav-demo button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Mostra a página correspondente
        const page = this.dataset.page;
        document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + page).classList.add('active');
    });
});

// CARREGAR HÁBITOS
document.addEventListener('DOMContentLoaded', function() {
    const habitos = [
        'Comer açúcar todo dia',
        'Não tomar sol',
        'Beber pouca água',
        'Viver estressado(a)',
        'Passar o dia sentado(a)',
        'Excesso de produtos na pele',
        'Jantar tarde',
        'Álcool e/ou cigarro',
        'Comer ultraprocessados',
        'Café logo ao acordar',
        'Beliscar o tempo inteiro',
        'Não bater meta de proteína',
        'Consumir embutidos',
        'Não fazer musculação',
        'Mexer no celular antes de dormir',
        'Relacionamentos tóxicos',
        'Não ter propósito',
        'Respiração curta'
    ];

    const container = document.getElementById('listaHabitos');
    if (container) {
        let html = '<div class="card-grid">';
        habitos.forEach((habito, index) => {
            const colors = ['#6ee7b7', '#3b82f6', '#fbbf24', '#ec4899', '#8b5cf6'];
            const color = colors[index % colors.length];
            html += `
                <div class="card">
                    <div style="font-size:24px;font-weight:700;color:${color};">${String(index+1).padStart(2,'0')}</div>
                    <h4 style="margin:8px 0;">${habito}</h4>
                    <p>⬆ Reversão: clique para ver</p>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
    }

    // CALCULADORA
    const calcContainer = document.getElementById('calculadoraForm');
    if (calcContainer) {
        calcContainer.innerHTML = `
            <div style="max-width:400px;">
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);border-radius:12px;padding:16px;margin-bottom:12px;">
                    <label style="font-size:12px;color:rgba(255,255,255,0.2);">Sua idade</label>
                    <input type="number" id="idadeInput" value="52" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#fff;font-size:16px;">
                </div>
                <button onclick="calcularIdade()" class="btn-primary" style="width:100%;">Calcular Idade Biológica</button>
                <div id="resultadoIdade" style="margin-top:20px;padding:20px;background:rgba(110,231,183,0.05);border-radius:12px;border:1px solid rgba(110,231,183,0.1);display:none;">
                    <div style="display:flex;justify-content:space-between;">
                        <span style="color:rgba(255,255,255,0.3);">Idade Cronológica:</span>
                        <span id="cronoIdade" style="font-weight:700;">52</span>
                    </div>
                    <div style="display:flex;justify-content:space-between;margin-top:8px;">
                        <span style="color:rgba(255,255,255,0.3);">Idade Biológica:</span>
                        <span id="bioIdade" style="color:#6ee7b7;font-weight:700;font-size:24px;">48.2</span>
                    </div>
                    <div style="margin-top:12px;padding:12px;background:rgba(110,231,183,0.08);border-radius:8px;text-align:center;color:#6ee7b7;">
                        🧬 -3.8 anos mais jovem que a média!
                    </div>
                </div>
            </div>
        `;
    }

    // DASHBOARD
    const dashContainer = document.getElementById('dashboardContent');
    if (dashContainer) {
        dashContainer.innerHTML = `
            <div class="card-grid">
                <div class="card" style="border-color:rgba(110,231,183,0.1);">
                    <div style="font-size:32px;font-weight:700;color:#6ee7b7;">48.2</div>
                    <p>Idade Biológica</p>
                </div>
                <div class="card">
                    <div style="font-size:32px;font-weight:700;color:#3b82f6;">8/18</div>
                    <p>Hábitos dominados</p>
                </div>
                <div class="card">
                    <div style="font-size:32px;font-weight:700;color:#fbbf24;">12 dias</div>
                    <p>Sequência atual 🔥</p>
                </div>
            </div>
            <div style="background:rgba(255,255,255,0.02);border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.04);">
                <h4 style="font-size:16px;margin-bottom:12px;">📋 Hábitos de hoje <span style="color:#6ee7b7;">5/8</span></h4>
                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                    <span style="padding:6px 16px;background:rgba(110,231,183,0.08);border-radius:50px;font-size:13px;color:#6ee7b7;">✅ Água</span>
                    <span style="padding:6px 16px;background:rgba(110,231,183,0.08);border-radius:50px;font-size:13px;color:#6ee7b7;">✅ Sol</span>
                    <span style="padding:6px 16px;background:rgba(251,191,36,0.08);border-radius:50px;font-size:13px;color:#fbbf24;">⏳ Musculação</span>
                    <span style="padding:6px 16px;background:rgba(110,231,183,0.08);border-radius:50px;font-size:13px;color:#6ee7b7;">✅ Respiração</span>
                    <span style="padding:6px 16px;background:rgba(248,113,113,0.08);border-radius:50px;font-size:13px;color:#f87171;">✗ Sono</span>
                </div>
                <button onclick="checkin()" style="margin-top:16px;padding:12px;background:linear-gradient(135deg,#6ee7b7,#3b82f6);border:none;border-radius:50px;color:#0a0e1a;font-weight:700;cursor:pointer;width:100%;font-size:16px;">
                    ✅ Registrar check-in
                </button>
            </div>
        `;
    }

    // MEMBROS
    const membrosContainer = document.getElementById('membrosForm');
    if (membrosContainer) {
        membrosContainer.innerHTML = `
            <div style="max-width:400px;">
                <div style="display:flex;gap:8px;background:rgba(255,255,255,0.02);border-radius:12px;padding:4px;margin-bottom:20px;max-width:300px;">
                    <span style="flex:1;padding:10px;text-align:center;background:rgba(110,231,183,0.08);border-radius:8px;color:#6ee7b7;font-weight:600;">Entrar</span>
                    <span style="flex:1;padding:10px;text-align:center;color:rgba(255,255,255,0.2);">Cadastrar</span>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);border-radius:12px;padding:16px;margin-bottom:12px;">
                    <label style="font-size:12px;color:rgba(255,255,255,0.2);">E-mail</label>
                    <input type="email" placeholder="seu@email.com" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#fff;margin-top:4px;">
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.04);border-radius:12px;padding:16px;margin-bottom:16px;">
                    <label style="font-size:12px;color:rgba(255,255,255,0.2);">Senha</label>
                    <input type="password" placeholder="••••••••" style="width:100%;padding:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#fff;margin-top:4px;">
                </div>
                <button class="btn-primary" style="width:100%;">Entrar →</button>
            </div>
        `;
    }

    // ADMIN
    const adminContainer = document.getElementById('adminContent');
    if (adminContainer) {
        adminContainer.innerHTML = `
            <div class="card-grid">
                <div class="card"><div style="font-size:28px;font-weight:700;color:#6ee7b7;">1.247</div><p>Usuários totais</p></div>
                <div class="card"><div style="font-size:28px;font-weight:700;color:#3b82f6;">18</div><p>Novos hoje</p></div>
                <div class="card"><div style="font-size:28px;font-weight:700;color:#fbbf24;">843</div><p>Planos ativos</p></div>
                <div class="card"><div style="font-size:28px;font-weight:700;color:#ec4899;">12</div><p>Conteúdos</p></div>
            </div>
            <div style="background:rgba(255,255,255,0.02);border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.04);">
                <h4 style="font-size:16px;margin-bottom:12px;">📝 Últimos cadastros</h4>
                <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.02);">
                    <span>Carlos Silva</span>
                    <span style="color:rgba(255,255,255,0.2);font-size:12px;">Hoje 14:32</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.02);">
                    <span>Ana Paula</span>
                    <span style="color:rgba(255,255,255,0.2);font-size:12px;">Hoje 13:15</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:10px 0;">
                    <span>Roberto Mendes</span>
                    <span style="color:rgba(255,255,255,0.2);font-size:12px;">Hoje 11:40</span>
                </div>
            </div>
        `;
    }
});

// FUNÇÃO CALCULAR IDADE
function calcularIdade() {
    const idade = document.getElementById('idadeInput').value;
    const resultado = document.getElementById('resultadoIdade');
    const bio = (idade * 0.9 + 2).toFixed(1);
    
    document.getElementById('cronoIdade').textContent = idade;
    document.getElementById('bioIdade').textContent = bio;
    resultado.style.display = 'block';
}

// FUNÇÃO CHECK-IN
function checkin() {
    alert('✅ Check-in registrado com sucesso! Continue assim! 🎉');
}
