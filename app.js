/* ══════════════════════════════════════════
   FIREBASE CONFIG
   ══════════════════════════════════════════ */
const firebaseConfig = {
  apiKey:            "AIzaSyAy48HyGn0gbvMuGF_XAlkf9orniggM_bc",
  authDomain:        "trueque-2gm1.firebaseapp.com",
  projectId:         "trueque-2gm1",
  storageBucket:     "trueque-2gm1.firebasestorage.app",
  messagingSenderId: "263937188019",
  appId:             "1:263937188019:web:df16ccc87c195596ded0c6"
};

const ADMIN_PASSWORD = "2GM1admin2026";

/* ══════════════════════════════════════════
   ROSTER
   ══════════════════════════════════════════ */
const ROSTER = {
  "2026401475":["Alfaro Castillo María Fernanda","Eq.5"],
  "2026401730":["Arredondo Hernández Ángel Daniel","Eq.5"],
  "2026401416":["Badin Martínez Vivian","Eq.9"],
  "2026401296":["Bravo Castillo Adrian","Eq.9"],
  "2026400394":["Briones Ramírez Mildred Jelitza","Eq.9"],
  "2026401554":["Caballero del Rio Hilary","Eq.2"],
  "2026401132":["Cabeza de Vaca Sánchez Erik Izak","Eq.5"],
  "2026401527":["Calderon Solís Leonardo Ismael","Eq.6"],
  "2026401485":["De La Peña Morales Zoé","Eq.7"],
  "2026401482":["Dominguez Vieyra Cedric Rafael","Eq.4"],
  "2026401968":["Fernández López Jassibe Betsabé","Eq.5"],
  "2026400001":["Figueroa Ocón Hannah Romina","Eq.5"],
  "2026401165":["Flores Macedo Ixchel Karel","Eq.2"],
  "2026401423":["Franco Villalobos Aileen Ayelen","Eq.2"],
  "2026401150":["García Torres Haurrubi Haramara","Eq.4"],
  "2026401509":["Godoy Jiménez Megan Valentina","Eq.2"],
  "2026401638":["González Hernández Luis","Eq.3"],
  "2026400951":["González Herrera Luis Antonio","Eq.8"],
  "2026401810":["González Neri Aline Renata","Eq.2"],
  "2026401507":["González Saavedra Gabriel Alejandro","Eq.7"],
  "2026401430":["Granados Gómez Miguel Ángel","Eq.4"],
  "2026401357":["Guizar Soto Ian Yazid","Eq.8"],
  "2026401493":["Gurrola Sánchez Alejandra","Eq.8"],
  "2026401497":["Guzman Álvarez Mariela Fernanda","Eq.9"],
  "2026401420":["Hernández García Sarai","Eq.3"],
  "2026401917":["Hernández González Carmen Denisse","Eq.3"],
  "2026401241":["Herrera Jiménez Juan Andres","Eq.7"],
  "2026401391":["López Flores Edna Poulette","Eq.4"],
  "2026401364":["López González Jacqueline Abdali","Eq.6"],
  "2026401403":["Málaga Juárez Alejandro Imanol","Eq.8"],
  "2026401409":["Maldonado Mena Jitka Andrea","Eq.8"],
  "2026401757":["Mancilla Hernández Génesis Yamilett","Eq.7"],
  "PP26060461":["Martínez Maya Emanuel","Eq.4"],
  "2026401254":["Martínez Negrete Sebastian","Eq.6"],
  "2026400918":["Melo Mendoza Angel","Eq.3"],
  "2026401169":["Mendez Galaviz Ian Kaled","Eq.7"],
  "2026401349":["Mendoza Gutiérrez Carlos Alberto","Eq.4"],
  "2026400859":["Meza Velazquez Daniela","Eq.9"],
  "PP26065805":["Montaño Rodríguez Diego Mauricio","Eq.2"],
  "2026401133":["Muñoz García María Fernanda","Eq.8"],
  "2026401324":["Najera Velazquez Jhoana Daniela","Eq.3"],
  "2026400031":["Olea Vallejo Erick Roberto","Eq.6"],
  "2026401378":["Quiroz Dominguez Carolina","Eq.9"],
  "2026401168":["Rivera Ornelas Jesús Cecilio","Eq.5"],
  "2026401437":["Rocha González Marcos David","Eq.1"],
  "2026401524":["Rodriguez Colin Kerem Alexandra","Eq.1"],
  "2026401237":["Sanchez Gil Hannah Sofia","Eq.1"],
  "2026401262":["Silva Jaimes Aranza Yvonne","Eq.1"],
  "2026401408":["Velazquez Molina Valeria","Eq.1"],
  "2800578":["Georgette Del Pilar Pavia Gonzalez","Maestra"]
};

const TEAM_TOPICS = {
  "Eq.1":"Bienestar – Alimentación","Eq.2":"Socialización – Otredad",
  "Eq.3":"Gestión del tiempo","Eq.4":"Bienestar – Mental/Emocional",
  "Eq.5":"Bienestar – Higiene y Sueño","Eq.6":"Cuerpo y Ejercicio",
  "Eq.7":"Aprovechamiento – Trueques","Eq.8":"Efemérides y Datos",
  "Eq.9":"Siendo Más Cultos","Maestra":"Docente"
};

/* ══════════════════════════════════════════
   LOGROS / ACHIEVEMENTS
   ══════════════════════════════════════════ */
const ACHIEVEMENTS = [
  { id:'primer_paso', icon:'🌱', name:'Primer paso',    desc:'Tienes tu primer movimiento registrado', check:(p,moves)=>moves>=1 },
  { id:'bronce',      icon:'🥉', name:'Medalla Bronce', desc:'Acumulaste 3 puntos o más',              check:(p)=>p>=3  },
  { id:'plata',       icon:'🥈', name:'Medalla Plata',  desc:'Acumulaste 8 puntos o más',              check:(p)=>p>=8  },
  { id:'oro',         icon:'🥇', name:'Medalla Oro',    desc:'Acumulaste 15 puntos o más',             check:(p)=>p>=15 },
  { id:'constante',   icon:'⭐', name:'Constante',      desc:'5 o más movimientos registrados',        check:(p,moves)=>moves>=5 },
  { id:'triple',      icon:'🎯', name:'Triple grado',   desc:'Tienes aportaciones A, B y C',           check:(p,moves,grades)=>grades.has('A')&&grades.has('B')&&grades.has('C') },
  { id:'positivo',    icon:'💚', name:'Siempre positivo',desc:'Saldo positivo con 3+ movimientos',     check:(p,moves)=>p>0&&moves>=3 },
  { id:'lider',       icon:'🏆', name:'Líder',          desc:'Acumulaste 25 puntos o más',             check:(p)=>p>=25 },
];

function getAchievements(name) {
  const mine = history.filter(m=>m.name===name);
  const p = points[name]||0;
  const moves = mine.length;
  const grades = new Set(mine.filter(m=>m.sign==='+').map(m=>m.grade));
  return ACHIEVEMENTS.map(a=>({...a, unlocked:a.check(p,moves,grades)}));
}

function getMedals(name) {
  return getAchievements(name).filter(a=>a.unlocked).map(a=>a.icon).slice(0,3).join('');
}

/* ══════════════════════════════════════════
   STATE
   ══════════════════════════════════════════ */
const GRADES = {A:3,B:2,C:1};
const STUDENTS = Object.entries(ROSTER).map(([b,[n,t]])=>[n,t,b]);
let db, history=[], points={}, currentPath=null, currentBoleta=null;
let selGradeVal=null, selSignVal=null, unsubscribe=null;
let chartWeekly=null, chartStuWeekly=null;

STUDENTS.forEach(([n])=>{points[n]=0;});

/* ══════════════════════════════════════════
   DARK MODE
   ══════════════════════════════════════════ */
function toggleDark(){
  const html=document.documentElement;
  const isDark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',isDark?'light':'dark');
  document.getElementById('dark-btn').textContent=isDark?'🌙':'☀️';
  localStorage.setItem('theme',isDark?'light':'dark');
  if(chartWeekly)chartWeekly.destroy(),chartWeekly=null;
  if(chartStuWeekly)chartStuWeekly.destroy(),chartStuWeekly=null;
  renderCharts();
}
function initTheme(){
  const t=localStorage.getItem('theme')||'light';
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('dark-btn').textContent=t==='dark'?'☀️':'🌙';
}

/* ══════════════════════════════════════════
   FIREBASE
   ══════════════════════════════════════════ */
function initFirebase(){
  try{firebase.initializeApp(firebaseConfig);db=firebase.firestore();setDbStatus('ok','Conectado');}
  catch(e){setDbStatus('err','Sin conexión');console.error(e);}
}
function setDbStatus(s,l){document.getElementById('db-dot').className='db-dot '+s;document.getElementById('db-label').textContent=l;}

function subscribeToData(cb){
  if(unsubscribe)unsubscribe();
  unsubscribe=db.collection('movements').orderBy('ts','desc').onSnapshot(snap=>{
    history=snap.docs.map(d=>({id:d.id,...d.data()}));
    recalc();cb();
  },err=>{setDbStatus('err','Error de conexión');console.error(err);});
}

function recalc(){
  STUDENTS.forEach(([n])=>{points[n]=0;});
  history.forEach(m=>{points[m.name]=(points[m.name]||0)+m.delta;});
}

/* ══════════════════════════════════════════
   WEEKLY CHART DATA
   ══════════════════════════════════════════ */
function getWeeklyData(filterName=null){
  const sorted=[...history].sort((a,b)=>a.ts-b.ts);
  const weeks={};
  sorted.forEach(m=>{
    if(filterName&&m.name!==filterName)return;
    const d=new Date(m.ts);
    const mon=new Date(d);mon.setDate(d.getDate()-((d.getDay()+6)%7));
    const key=`${mon.getFullYear()}-${String(mon.getMonth()+1).padStart(2,'0')}-${String(mon.getDate()).padStart(2,'0')}`;
    weeks[key]=(weeks[key]||0)+m.delta;
  });
  const keys=Object.keys(weeks).sort();
  let cum=0;
  const labels=keys.map(k=>{const[y,mo,d]=k.split('-');return`${d}/${mo}`;});
  const data=keys.map(k=>{cum+=weeks[k];return cum;});
  return{labels,data};
}

function isDark(){return document.documentElement.getAttribute('data-theme')==='dark';}

function renderCharts(){
  const el=document.getElementById('chart-weekly');
  if(!el)return;
  if(chartWeekly){chartWeekly.destroy();chartWeekly=null;}
  const{labels,data}=getWeeklyData();
  if(!labels.length){el.parentElement.innerHTML='<div class="empty">Sin datos aún para graficar</div>';return;}
  const gc=isDark()?'rgba(74,222,128,0.15)':'rgba(45,106,79,0.08)';
  const bc=isDark()?'#4ADE80':'#2D6A4F';
  chartWeekly=new Chart(el,{type:'line',data:{labels,datasets:[{label:'Puntos acumulados',data,borderColor:bc,backgroundColor:gc,fill:true,tension:.4,pointRadius:4,pointBackgroundColor:bc,borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:isDark()?'#8A9E90':'#7A746C',font:{size:11}}},y:{grid:{color:isDark()?'rgba(255,255,255,.06)':'rgba(0,0,0,.06)'},ticks:{color:isDark()?'#8A9E90':'#7A746C',font:{size:11}}}}}});
}

function renderStuChart(name){
  const el=document.getElementById('chart-stu-weekly');
  if(!el)return;
  if(chartStuWeekly){chartStuWeekly.destroy();chartStuWeekly=null;}
  const{labels,data}=getWeeklyData(name);
  if(!labels.length){el.parentElement.innerHTML='<div class="empty">Sin datos aún para graficar</div>';return;}
  const gc=isDark()?'rgba(74,222,128,0.15)':'rgba(45,106,79,0.08)';
  const bc=isDark()?'#4ADE80':'#2D6A4F';
  chartStuWeekly=new Chart(el,{type:'line',data:{labels,datasets:[{label:'Mis puntos',data,borderColor:bc,backgroundColor:gc,fill:true,tension:.4,pointRadius:4,pointBackgroundColor:bc,borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{color:isDark()?'#8A9E90':'#7A746C',font:{size:11}}},y:{grid:{color:isDark()?'rgba(255,255,255,.06)':'rgba(0,0,0,.06)'},ticks:{color:isDark()?'#8A9E90':'#7A746C',font:{size:11}}}}}});
}

/* ══════════════════════════════════════════
   LOGIN
   ══════════════════════════════════════════ */
function goToLogin(){showView('v-login');}
function choosePath(path){
  currentPath=path;
  document.getElementById('card-stu').classList.toggle('active',path==='stu');
  document.getElementById('card-adm').classList.toggle('active',path==='adm');
  const lbl=document.getElementById('login-label'),inp=document.getElementById('login-input');
  if(path==='stu'){lbl.textContent='Número de boleta';inp.type='text';inp.placeholder='Ej: 2026401475';}
  else{lbl.textContent='Contraseña de administrador';inp.type='password';inp.placeholder='••••••••••';}
  document.getElementById('login-form').style.display='block';
  document.getElementById('login-err').textContent='';inp.focus();
}
function backToCards(){
  document.getElementById('login-form').style.display='none';
  document.getElementById('card-stu').classList.remove('active');
  document.getElementById('card-adm').classList.remove('active');
  document.getElementById('login-err').textContent='';currentPath=null;
}
document.getElementById('login-input').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
function doLogin(){
  const val=document.getElementById('login-input').value.trim();
  const errEl=document.getElementById('login-err');errEl.textContent='';
  if(!val){errEl.textContent='Ingresa el dato requerido.';return;}
  if(currentPath==='stu'){
    if(!ROSTER[val]){errEl.textContent='Boleta no encontrada. Verifica el número.';return;}
    currentBoleta=val;enterStudentView();
  }else{
    if(val!==ADMIN_PASSWORD){errEl.textContent='Contraseña incorrecta.';return;}
    enterAdminView();
  }
}

/* ══════════════════════════════════════════
   PUBLIC LANDING
   ══════════════════════════════════════════ */
function renderPublic(){
  const total=STUDENTS.reduce((s,[n])=>s+points[n],0);
  const moves=history.length;
  const active=STUDENTS.filter(([n])=>history.some(m=>m.name===n)).length;
  document.getElementById('pub-total-pts').textContent=total>0?'+'+total:total;
  document.getElementById('pub-moves').textContent=moves;
  document.getElementById('pub-active').textContent=active;

  const sorted=[...STUDENTS].sort((a,b)=>points[b[0]]-points[a[0]]);
  const top3=sorted.slice(0,3);
  const order=[1,0,2];
  const medals=['🥈','🥇','🥉'];
  const cards=document.getElementById('pub-podium').children;
  order.forEach((rankIdx,cardIdx)=>{
    const[n,t]=top3[rankIdx]||['—','—'];
    const p=points[n]||0;
    cards[cardIdx].querySelector('.podium-medal').textContent=medals[cardIdx];
    cards[cardIdx].querySelector('.podium-name').textContent=n.split(' ').slice(0,2).join(' ');
    cards[cardIdx].querySelector('.podium-team').textContent=t;
    cards[cardIdx].querySelector('.podium-pts').textContent=(p>0?'+':'')+p+' pts';
  });

  const teams={};
  STUDENTS.filter(([,t])=>t!=='Maestra').forEach(([n,t])=>{if(!teams[t])teams[t]=[];teams[t].push(n);});
  const maxTeamPts=Math.max(...Object.values(teams).map(ms=>ms.reduce((s,n)=>s+points[n],0)),1);
  document.getElementById('pub-teams').innerHTML=Object.entries(teams).sort().map(([t,ms])=>{
    const tp=ms.reduce((s,n)=>s+points[n],0);
    const pct=Math.round(Math.abs(tp)/maxTeamPts*100);
    return`<div class="team-card-pub">
      <div class="tc-num">${t}</div>
      <div class="tc-topic">${TEAM_TOPICS[t]||''}</div>
      <div style="font-size:11px;color:var(--muted)">${ms.length} integrantes</div>
      <div class="tc-pts">${tp>0?'+':''}${tp} pts</div>
      <div class="tc-bar"><div class="tc-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   STUDENT VIEW
   ══════════════════════════════════════════ */
function enterStudentView(){
  const[name,team]=ROSTER[currentBoleta];
  document.getElementById('stu-name-side').textContent=name.split(' ').slice(0,2).join(' ');
  document.getElementById('stu-team-side').textContent=team+' · '+(TEAM_TOPICS[team]||'');
  document.getElementById('stu-title').textContent='Hola, '+name.split(' ')[0];
  document.getElementById('stu-team-title').textContent=team+' — '+(TEAM_TOPICS[team]||'');
  showView('v-stu');
  subscribeToData(()=>{renderStuAll(name,team);});
}

function renderStuAll(name,team){
  renderStuHero(name);renderStuHist(name);renderStuTeam(team,name);
  renderStuRanking(name);renderStuAchievements(name);
  renderStuTeamCard(team);renderStuChart(name);
}

function renderStuHero(name){
  const p=points[name];
  const cls=p>0?'p-pos':p<0?'p-neg':'p-zero';
  const col=p>0?'var(--green)':p<0?'var(--red)':'var(--hint)';
  const medals=getMedals(name);
  document.getElementById('stu-hero').innerHTML=`
    <div class="big" style="color:${col}">${p>0?'+':''}${p}</div>
    <div class="lbl">puntos acumulados</div>
    <span class="pill me-badge ${cls}" style="margin-top:.75rem">${p>0?'¡Vas muy bien!':p<0?'Tienes puntos pendientes':'Sin movimientos aún'}</span>
    ${medals?`<div class="medals-strip"><span style="font-size:20px">${medals}</span></div>`:''}
  `;
}

function renderStuAchievements(name){
  const achs=getAchievements(name);
  document.getElementById('stu-achievements').innerHTML=achs.map(a=>`
    <div class="achievement-card ${a.unlocked?'':'ach-locked'}">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-info">
        <div class="ach-name">${a.name}</div>
        <div class="ach-desc">${a.desc}</div>
      </div>
      ${a.unlocked?'<span class="pill p-pos" style="font-size:11px">Obtenido</span>':'<span class="pill p-zero" style="font-size:11px">Bloqueado</span>'}
    </div>`).join('');
}

function renderStuTeamCard(team){
  const members=STUDENTS.filter(([,t])=>t===team);
  const tp=members.reduce((s,[n])=>s+points[n],0);
  const neg=members.filter(([n])=>points[n]<0).length;
  const maxAll=Math.max(...Object.entries(
    Object.fromEntries(['Eq.1','Eq.2','Eq.3','Eq.4','Eq.5','Eq.6','Eq.7','Eq.8','Eq.9'].map(t=>[t,STUDENTS.filter(([,tt])=>tt===t).reduce((s,[n])=>s+points[n],0)]))
  ).map(([,v])=>v),1);
  const pct=Math.round(Math.abs(tp)/maxAll*100);
  document.getElementById('stu-team-card').innerHTML=`
    <div class="card-title">${team} — ${TEAM_TOPICS[team]||''}</div>
    <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:.5rem">
      <span style="font-family:'DM Serif Display',serif;font-size:28px;color:var(--green)">${tp>0?'+':''}${tp}</span>
      <span style="font-size:12px;color:var(--muted)">puntos del equipo</span>
    </div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:.75rem">${members.length} integrantes${neg?' · <span style="color:var(--red)">'+(neg)+' en negativo</span>':''}</div>
    <div class="bar-bg" style="width:100%"><div class="bar-fill" style="width:${pct}%;background:var(--green)"></div></div>
  `;
}

function renderStuHist(name){
  const mine=history.filter(m=>m.name===name);
  document.getElementById('stu-hist').innerHTML=mine.map(m=>histItemHtml(m)).join('')||'<div class="empty">No tienes movimientos registrados aún</div>';
}

function renderStuTeam(team,myName){
  const members=STUDENTS.filter(([,t])=>t===team).sort((a,b)=>points[b[0]]-points[a[0]]);
  const max=Math.max(...members.map(([n])=>Math.abs(points[n])),1);
  document.getElementById('stu-team-list').innerHTML=members.map(([n,t],i)=>{
    const p=points[n],isMe=n===myName,pct=Math.round(Math.abs(p)/max*100);
    return`<div class="row-item">
      <span class="rank-n">${i+1}</span>
      <span class="avatar ${isMe?'av-me':avCls(p)}">${initials(n)}</span>
      <span class="name-col"><span class="nm">${n}${isMe?' (tú)':''}</span><span style="font-size:11px;color:var(--hint)">${getMedals(n)}</span></span>
      <span class="bar-wrap"><div class="bar-bg"><div class="bar-fill" style="width:${pct}%;background:${p>=0?'var(--green)':'var(--red)'}"></div></div></span>
      <span class="pill ${isMe?'p-me':pillCls(p)}">${p>0?'+':''}${p}</span>
    </div>`;
  }).join('');
}

function renderStuRanking(myName){
  const sorted=[...STUDENTS].sort((a,b)=>points[b[0]]-points[a[0]]);
  const max=Math.max(...sorted.map(([n])=>Math.abs(points[n])),1);
  document.getElementById('stu-rank-list').innerHTML=sorted.map(([n,t],i)=>{
    const p=points[n],isMe=n===myName,pct=Math.round(Math.abs(p)/max*100);
    return`<div class="row-item" style="${isMe?'background:var(--green-l);margin:0 -1.5rem;padding:8px 1.5rem;border-radius:var(--r);':''}">
      <span class="rank-n">${i+1}</span>
      <span class="avatar ${isMe?'av-me':avCls(p)}">${initials(n)}</span>
      <span class="name-col"><span class="nm">${n}${isMe?' ← tú':''}</span><span class="team-tag">${t}</span></span>
      <span class="bar-wrap"><div class="bar-bg"><div class="bar-fill" style="width:${pct}%;background:${p>=0?'var(--green)':'var(--red)'}"></div></div></span>
      <span class="pill ${isMe?'p-me':pillCls(p)}">${p>0?'+':''}${p}</span>
    </div>`;
  }).join('');
}

function stuTab(t,el){
  document.querySelectorAll('#stu-mis,#stu-logros,#stu-equipo,#stu-ranking').forEach(p=>p.classList.remove('on'));
  document.getElementById('stu-'+t).classList.add('on');
  document.querySelectorAll('#v-stu nav a,#stu-mnav button').forEach(a=>a.classList.remove('active'));
  if(el)el.classList.add('active');
}

/* ══════════════════════════════════════════
   ADMIN VIEW
   ══════════════════════════════════════════ */
function enterAdminView(){
  showView('v-adm');populateStu();initDate();
  subscribeToData(()=>{renderAdmAll();renderPublic();});
}

function renderAdmAll(){
  renderAdmDash();renderAdmRank();renderAdmHist();renderAdmAlerts();renderAdmTeams();renderCharts();
}

function renderAdmDash(){
  const total=STUDENTS.reduce((s,[n])=>s+points[n],0);
  const debt=STUDENTS.filter(([n])=>points[n]<0).length;
  document.getElementById('d-pts').textContent=total;
  document.getElementById('d-debt').textContent=debt;
  document.getElementById('d-moves').textContent=history.length;
  const badge=document.getElementById('adm-badge');
  debt>0?(badge.textContent=debt,badge.style.display='inline'):(badge.style.display='none');

  const top=[...STUDENTS].sort((a,b)=>points[b[0]]-points[a[0]]).slice(0,5);
  const max=Math.max(...top.map(([n])=>Math.abs(points[n])),1);
  document.getElementById('adm-top5').innerHTML=top.map(([n,t],i)=>{
    const p=points[n],pct=Math.round(Math.abs(p)/max*100);
    return`<div class="row-item">
      <span class="rank-n">${i+1}</span>
      <span class="avatar ${avCls(p)}">${initials(n)}</span>
      <span class="name-col"><span class="nm">${n.split(' ').slice(0,2).join(' ')}</span><span class="team-tag">${t} ${getMedals(n)}</span></span>
      <span class="bar-wrap"><div class="bar-bg"><div class="bar-fill" style="width:${pct}%;background:${p>=0?'var(--green)':'var(--red)'}"></div></div></span>
      <span class="pill ${pillCls(p)}">${p>0?'+':''}${p}</span>
    </div>`;
  }).join('');

  document.getElementById('adm-recent').innerHTML=history.slice(0,6).map(m=>histItemHtml(m,true)).join('')||'<div class="empty">Sin movimientos aún</div>';
}

function renderAdmTeams(){
  const teams={};
  STUDENTS.filter(([,t])=>t!=='Maestra').forEach(([n,t])=>{if(!teams[t])teams[t]=[];teams[t].push(n);});
  const maxPts=Math.max(...Object.values(teams).map(ms=>ms.reduce((s,n)=>s+points[n],0)),1);
  document.getElementById('adm-teams-grid').innerHTML=Object.entries(teams).sort().map(([t,ms])=>{
    const tp=ms.reduce((s,n)=>s+points[n],0);
    const neg=ms.filter(n=>points[n]<0).length;
    const pct=Math.round(Math.abs(tp)/maxPts*100);
    const membersHtml=ms.sort((a,b)=>points[b]-points[a]).map(n=>{
      const p=points[n];
      return`<div style="display:flex;align-items:center;gap:6px;padding:4px 0;border-bottom:1px solid var(--border)">
        <span class="avatar ${avCls(p)}" style="width:24px;height:24px;font-size:9px">${initials(n)}</span>
        <span style="flex:1;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.split(' ').slice(0,2).join(' ')}</span>
        <span style="font-size:11px;font-weight:500;color:${p>0?'var(--green)':p<0?'var(--red)':'var(--hint)'}">${p>0?'+':''}${p}</span>
      </div>`;
    }).join('');
    return`<div class="team-detail-card">
      <div class="tdc-header"><span class="tdc-num">${t}</span><span class="tdc-pts">${tp>0?'+':''}${tp}</span></div>
      <div class="tdc-topic">${TEAM_TOPICS[t]||''}</div>
      <div class="tdc-members">${ms.length} integrantes</div>
      <div class="tdc-bar"><div class="tdc-bar-fill" style="width:${pct}%"></div></div>
      ${neg?`<div class="tdc-neg">${neg} alumno(s) en negativo</div>`:''}
      <div style="margin-top:.75rem">${membersHtml}</div>
    </div>`;
  }).join('');
}

function renderAdmRank(q='',team=''){
  if(q===undefined)q='';
  const sorted=[...STUDENTS].filter(([n,t])=>n.toLowerCase().includes((q||'').toLowerCase())&&(!team||t===team)).sort((a,b)=>points[b[0]]-points[a[0]]);
  const max=Math.max(...sorted.map(([n])=>Math.abs(points[n])),1);
  document.getElementById('adm-rank-list').innerHTML=sorted.map(([n,t],i)=>{
    const p=points[n],pct=Math.round(Math.abs(p)/max*100);
    return`<div class="row-item">
      <span class="rank-n">${i+1}</span>
      <span class="avatar ${avCls(p)}">${initials(n)}</span>
      <span class="name-col"><span class="nm">${n}</span><span class="team-tag">${t} ${getMedals(n)}</span></span>
      <span class="bar-wrap"><div class="bar-bg"><div class="bar-fill" style="width:${pct}%;background:${p>=0?'var(--green)':'var(--red)'}"></div></div></span>
      <span class="pill ${pillCls(p)}">${p>0?'+':''}${p} pts</span>
    </div>`;
  }).join('')||'<div class="empty">Sin resultados</div>';
}

function renderAdmHist(){
  const q=document.getElementById('hist-q').value.toLowerCase();
  const sign=document.getElementById('hist-sign').value;
  const grade=document.getElementById('hist-grade').value;
  const items=history.filter(m=>{
    if(q&&!m.name.toLowerCase().includes(q))return false;
    if(sign&&m.sign!==sign)return false;
    if(grade&&m.grade!==grade)return false;
    return true;
  });
  document.getElementById('adm-hist-list').innerHTML=items.map(m=>histItemHtml(m,true)).join('')||'<div class="empty">Sin movimientos</div>';
}

function renderAdmAlerts(){
  const neg=STUDENTS.filter(([n])=>points[n]<0).sort((a,b)=>points[a[0]]-points[b[0]]);
  document.getElementById('adm-alert-neg').innerHTML=neg.map(([n,t])=>`
    <div class="row-item">
      <span class="avatar av-neg">${initials(n)}</span>
      <span class="name-col"><span class="nm">${n}</span><span class="team-tag">${t}</span></span>
      <span class="pill p-neg">${points[n]} pts</span>
    </div>`).join('')||'<div class="empty" style="color:var(--green)">Nadie en números rojos</div>';
  const zero=STUDENTS.filter(([n])=>points[n]===0&&!history.find(m=>m.name===n));
  document.getElementById('adm-alert-zero').innerHTML=zero.map(([n,t])=>`
    <div class="row-item">
      <span class="avatar av-zero">${initials(n)}</span>
      <span class="name-col"><span class="nm">${n}</span><span class="team-tag">${t}</span></span>
      <span class="pill p-zero">sin registro</span>
    </div>`).join('')||'<div class="empty">Todos tienen al menos un registro</div>';
}

/* ── Register ── */
function populateStu(q=''){
  const sel=document.getElementById('sel-stu');sel.innerHTML='';
  STUDENTS.filter(([n])=>n.toLowerCase().includes(q.toLowerCase())).forEach(([n,t])=>{
    const o=document.createElement('option');o.value=n;o.textContent=`${n} (${t})`;sel.appendChild(o);
  });
}
function filterStu(){populateStu(document.getElementById('search-stu').value);}
function selGrade(g){selGradeVal=g;['A','B','C'].forEach(x=>{document.getElementById('gb-'+x).className='gb'+(x===g?' '+x:'');});}
function selSign(s){selSignVal=s;document.getElementById('sb-p').className='sb'+(s==='+'?' plus':'');document.getElementById('sb-m').className='sb'+(s==='-'?' minus':'');}
function initDate(){const d=new Date(),p=n=>String(n).padStart(2,'0');document.getElementById('mov-date').value=`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`;}

async function doRegister(){
  const sel=document.getElementById('sel-stu'),name=sel.value;
  const toast=document.getElementById('reg-toast');
  const showT=(msg,ok)=>{toast.textContent=msg;toast.className='toast '+(ok?'ok':'err');setTimeout(()=>toast.className='toast',2800);};
  if(!name){showT('Selecciona un alumno',false);return;}
  if(!selGradeVal){showT('Elige el grado A, B o C',false);return;}
  if(!selSignVal){showT('Elige si suma o resta',false);return;}
  const date=document.getElementById('mov-date').value;
  const desc=document.getElementById('mov-desc').value.trim()||`Grado ${selGradeVal}`;
  const delta=GRADES[selGradeVal]*(selSignVal==='+'?1:-1);
  try{
    await db.collection('movements').add({name,grade:selGradeVal,sign:selSignVal,delta,date,desc,ts:Date.now()});
    showT(`✓ ${delta>0?'+':''}${delta} pts para ${name.split(' ')[0]}`,true);
    document.getElementById('mov-desc').value='';
  }catch(e){showT('Error al guardar. Verifica la conexión.',false);console.error(e);}
}

function admTab(t,el){
  document.querySelectorAll('#v-adm .page').forEach(p=>p.classList.remove('on'));
  document.getElementById('adm-'+t).classList.add('on');
  document.querySelectorAll('#adm-nav a,#adm-mnav button').forEach(a=>a.classList.remove('active'));
  if(el)el.classList.add('active');
}

/* ══════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════ */
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('on'));document.getElementById(id).classList.add('on');}
function logout(){if(unsubscribe)unsubscribe();currentBoleta=null;currentPath=null;backToCards();showView('v-login');document.getElementById('login-input').value='';}
function initials(n){return n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();}
function fmtDate(d){const[y,m,day]=d.split('-');return`${day}/${m}/${y}`;}
function pillCls(p){return p>0?'p-pos':p<0?'p-neg':'p-zero';}
function avCls(p){return p>0?'av-pos':p<0?'av-neg':'av-zero';}

function histItemHtml(m,showName=false){
  const col=m.sign==='+'?'var(--green)':'var(--red)';
  const gbg=m.grade==='A'?'var(--green-l)':m.grade==='B'?'var(--blue-l)':'var(--amber-l)';
  const gtx=m.grade==='A'?'var(--green-d)':m.grade==='B'?'var(--blue)':'var(--amber)';
  const nameRow=showName?`${m.name.split(' ').slice(0,2).join(' ')} · `:'';
  return`<div class="hist-item">
    <div class="hist-dot" style="background:${col}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:13.5px">${nameRow}<span style="font-size:10px;padding:1px 6px;border-radius:99px;background:${gbg};color:${gtx}">Grado ${m.grade}</span></div>
      <div class="hist-meta">${m.desc} · ${fmtDate(m.date)}</div>
    </div>
    <span class="pill ${pillCls(m.delta)}">${m.delta>0?'+':''}${m.delta}</span>
  </div>`;
}

/* ══════════════════════════════════════════
   PDF
   ══════════════════════════════════════════ */
function pdfHeader(doc,title){
  const fecha=new Date().toLocaleDateString('es-MX',{day:'2-digit',month:'long',year:'numeric'});
  doc.setFillColor(45,106,79);doc.rect(0,0,210,28,'F');
  doc.setTextColor(255,255,255);doc.setFontSize(14);doc.setFont('helvetica','bold');
  doc.text('Proyecto Trueque — Grupo 2GM1',14,11);
  doc.setFontSize(9);doc.setFont('helvetica','normal');
  doc.text(title,14,18);doc.text(`Generado: ${fecha}`,196,18,{align:'right'});
  doc.setTextColor(0,0,0);return 35;
}
function pdfFooter(doc){
  const n=doc.internal.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(150,150,150);doc.text(`Página ${i} de ${n} — Proyecto Trueque 2GM1`,105,290,{align:'center'});}
}
function sortedStudents(){return[...STUDENTS].sort((a,b)=>points[b[0]]-points[a[0]]);}

function pdfAlumno(){
  if(!currentBoleta)return;
  const[name,team]=ROSTER[currentBoleta];
  const{jsPDF}=window.jspdf;const doc=new jsPDF();
  const fecha=new Date().toLocaleDateString('es-MX',{day:'2-digit',month:'long',year:'numeric'});

  doc.setFillColor(45,106,79);doc.rect(0,0,210,40,'F');
  doc.setTextColor(255,255,255);doc.setFontSize(16);doc.setFont('helvetica','bold');
  doc.text('Constancia de Participación',105,16,{align:'center'});
  doc.setFontSize(10);doc.setFont('helvetica','normal');
  doc.text('Proyecto Trueque — Sustentabilidad 2GM1 · Ciclo 2025–2026',105,26,{align:'center'});
  doc.text(`Generado: ${fecha}`,105,33,{align:'center'});

  let y=52;
  doc.setTextColor(0,0,0);doc.setFontSize(13);doc.setFont('helvetica','bold');
  doc.text('Datos del alumno',14,y);y+=8;
  doc.setFontSize(10);doc.setFont('helvetica','normal');
  doc.text(`Nombre: ${name}`,14,y);y+=6;
  doc.text(`Boleta: ${currentBoleta}`,14,y);y+=6;
  doc.text(`Equipo: ${team} — ${TEAM_TOPICS[team]||''}`,14,y);y+=6;

  const p=points[name];
  const mine=history.filter(m=>m.name===name);
  const pos=mine.filter(m=>m.sign==='+').reduce((s,m)=>s+m.delta,0);
  const neg=mine.filter(m=>m.sign==='-').reduce((s,m)=>s+m.delta,0);

  y+=6;
  doc.setFontSize(13);doc.setFont('helvetica','bold');doc.text('Resumen de puntos',14,y);y+=8;
  doc.autoTable({startY:y,head:[['Concepto','Valor']],
    body:[['Puntos ganados',(pos>0?'+':'')+pos],['Puntos descontados',neg],['Saldo neto',(p>0?'+':'')+p],['Total de movimientos',mine.length]],
    styles:{fontSize:10,cellPadding:4},headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},
    columnStyles:{0:{cellWidth:120},1:{cellWidth:50,halign:'center'}},
    didParseCell:data=>{if(data.column.index===1&&data.section==='body'&&data.row.index===2){const v=parseFloat(data.cell.raw);data.cell.styles.textColor=v>=0?[27,67,50]:[155,35,53];data.cell.styles.fontStyle='bold';}}
  });

  y=doc.lastAutoTable.finalY+12;
  const achs=getAchievements(name).filter(a=>a.unlocked);
  if(achs.length){
    doc.setFontSize(13);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);doc.text('Logros obtenidos',14,y);y+=8;
    doc.autoTable({startY:y,head:[['Logro','Descripción']],
      body:achs.map(a=>[a.name, a.desc]),
      styles:{fontSize:9,cellPadding:3},headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},
      alternateRowStyles:{fillColor:[245,242,236]},
    });
    y=doc.lastAutoTable.finalY+12;
  }

  if(mine.length){
    doc.setFontSize(13);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);doc.text('Historial de movimientos',14,y);y+=8;
    doc.autoTable({startY:y,head:[['Fecha','Grado','Acción','Pts','Descripción']],
      body:mine.map(m=>[fmtDate(m.date),'Grado '+m.grade,m.sign==='+'?'Suma':'Resta',(m.delta>0?'+':'')+m.delta,m.desc]),
      styles:{fontSize:8.5,cellPadding:2.5},headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},
      alternateRowStyles:{fillColor:[245,242,236]},
      columnStyles:{2:{cellWidth:16,halign:'center'},3:{cellWidth:14,halign:'center'}},
      didParseCell:data=>{if(data.column.index===3&&data.section==='body'){const v=parseFloat(data.cell.raw);if(v>0)data.cell.styles.textColor=[27,67,50];else if(v<0)data.cell.styles.textColor=[155,35,53];}}
    });
  }

  const totalPages=doc.internal.getNumberOfPages();
  for(let i=1;i<=totalPages;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(150,150,150);doc.text(`Página ${i} de ${totalPages} — Constancia de ${name}`,105,290,{align:'center'});}
  doc.save(`constancia_${name.split(' ')[0]}_${name.split(' ')[1]||''}.pdf`);
}

function pdfRanking(){
  const{jsPDF}=window.jspdf;const doc=new jsPDF();
  let y=pdfHeader(doc,'Ranking completo');
  const sorted=sortedStudents();
  const total=STUDENTS.reduce((s,[n])=>s+points[n],0);
  const debt=STUDENTS.filter(([n])=>points[n]<0).length;
  doc.setFontSize(9);doc.setTextColor(100,100,100);doc.text(`Total de puntos: ${total}   |   En negativo: ${debt}   |   Total: ${STUDENTS.length}`,14,y);y+=8;
  doc.autoTable({startY:y,head:[['#','Nombre','Equipo','Puntos','Logros','Estado']],
    body:sorted.map(([n,t],i)=>{const p=points[n];const achs=getAchievements(n).filter(a=>a.unlocked).map(a=>a.name).join(', ');return[i+1,n,t,(p>0?'+':'')+p,achs||'—',p>0?'Positivo':p<0?'En deuda':'Sin registro'];}),
    styles:{fontSize:8,cellPadding:2.5},headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},
    alternateRowStyles:{fillColor:[245,242,236]},
    columnStyles:{0:{cellWidth:9,halign:'center'},2:{cellWidth:16,halign:'center'},3:{cellWidth:16,halign:'center'},4:{cellWidth:20,halign:'center'},5:{cellWidth:22,halign:'center'}},
    didParseCell:data=>{if(data.column.index===5&&data.section==='body'){const v=data.cell.raw;if(v==='Positivo')data.cell.styles.textColor=[27,67,50];else if(v==='En deuda')data.cell.styles.textColor=[155,35,53];else data.cell.styles.textColor=[120,120,120];}if(data.column.index===3&&data.section==='body'){const v=parseFloat(data.cell.raw);if(v>0)data.cell.styles.textColor=[27,67,50];else if(v<0)data.cell.styles.textColor=[155,35,53];}}
  });
  pdfFooter(doc);doc.save('2GM1_ranking.pdf');
}

function pdfHistorial(){
  const{jsPDF}=window.jspdf;const doc=new jsPDF();
  let y=pdfHeader(doc,'Historial completo de movimientos');
  if(!history.length){doc.setFontSize(11);doc.text('Sin movimientos registrados.',14,y+10);doc.save('2GM1_historial.pdf');return;}
  doc.setFontSize(9);doc.setTextColor(100,100,100);doc.text(`Total de movimientos: ${history.length}`,14,y);y+=8;
  doc.autoTable({startY:y,head:[['Fecha','Alumno','Equipo','Grado','Acción','Pts','Descripción']],
    body:history.map(m=>{const t=STUDENTS.find(([n])=>n===m.name)?.[1]||'';return[fmtDate(m.date),m.name,t,'Grado '+m.grade,m.sign==='+'?'Suma':'Resta',(m.delta>0?'+':'')+m.delta,m.desc];}),
    styles:{fontSize:7.5,cellPadding:2.5,overflow:'linebreak'},headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},
    alternateRowStyles:{fillColor:[245,242,236]},
    columnStyles:{0:{cellWidth:18},2:{cellWidth:12,halign:'center'},3:{cellWidth:16,halign:'center'},4:{cellWidth:14,halign:'center'},5:{cellWidth:12,halign:'center'}},
    didParseCell:data=>{if(data.column.index===5&&data.section==='body'){const v=parseFloat(data.cell.raw);if(v>0)data.cell.styles.textColor=[27,67,50];else if(v<0)data.cell.styles.textColor=[155,35,53];}}
  });
  pdfFooter(doc);doc.save('2GM1_historial.pdf');
}

function pdfEquipos(){
  const{jsPDF}=window.jspdf;const doc=new jsPDF();
  let y=pdfHeader(doc,'Reporte por equipos');
  const teams={};STUDENTS.filter(([,t])=>t!=='Maestra').forEach(([n,t])=>{if(!teams[t])teams[t]=[];teams[t].push(n);});
  doc.autoTable({startY:y,head:[['Equipo','Tema','Integrantes','Pts. totales','Promedio','En negativo']],
    body:Object.entries(teams).sort().map(([t,members])=>{const total=members.reduce((s,n)=>s+points[n],0);return[t,TEAM_TOPICS[t]||'',members.length,(total>0?'+':'')+total,(total/members.length).toFixed(1),members.filter(n=>points[n]<0).length||'Ninguno'];}),
    styles:{fontSize:8.5,cellPadding:3},headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},alternateRowStyles:{fillColor:[245,242,236]},
  });
  let y2=doc.lastAutoTable.finalY+12;
  Object.entries(teams).sort().forEach(([t,members])=>{
    if(y2>250){doc.addPage();y2=20;}
    doc.setFontSize(9);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
    doc.text(`${t} — ${TEAM_TOPICS[t]||''}`,14,y2);y2+=2;
    doc.autoTable({startY:y2,head:[['Nombre','Puntos','Logros']],
      body:members.sort((a,b)=>points[b]-points[a]).map(n=>{const achs=getAchievements(n).filter(a=>a.unlocked).map(a=>a.name).join(', ');return[n,(points[n]>0?'+':'')+points[n],achs||'—'];}),
      styles:{fontSize:8,cellPadding:2.5},headStyles:{fillColor:[200,225,210],textColor:[27,67,50],fontStyle:'bold'},margin:{left:14},
      columnStyles:{1:{cellWidth:20,halign:'center'},2:{cellWidth:24,halign:'center'}},
      didParseCell:data=>{if(data.column.index===1&&data.section==='body'){const v=parseFloat(data.cell.raw);if(v>0)data.cell.styles.textColor=[27,67,50];else if(v<0)data.cell.styles.textColor=[155,35,53];}}
    });
    y2=doc.lastAutoTable.finalY+8;
  });
  pdfFooter(doc);doc.save('2GM1_equipos.pdf');
}

function pdfAlertas(){
  const{jsPDF}=window.jspdf;const doc=new jsPDF();
  let y=pdfHeader(doc,'Reporte de alertas y deudas');
  const neg=STUDENTS.filter(([n])=>points[n]<0).sort((a,b)=>points[a[0]]-points[b[0]]);
  const zero=STUDENTS.filter(([n])=>points[n]===0&&!history.find(m=>m.name===n));
  doc.setFontSize(10);doc.setFont('helvetica','bold');doc.setTextColor(155,35,53);
  doc.text(`Alumnos con saldo negativo (${neg.length})`,14,y);y+=4;
  if(neg.length){
    doc.autoTable({startY:y,head:[['Nombre','Equipo','Puntos']],body:neg.map(([n,t])=>[n,t,points[n]]),
      styles:{fontSize:8.5,cellPadding:3},headStyles:{fillColor:[155,35,53],textColor:255,fontStyle:'bold'},alternateRowStyles:{fillColor:[253,236,234]},columnStyles:{2:{cellWidth:18,halign:'center'}},
    });y=doc.lastAutoTable.finalY+12;
  }else{doc.setFontSize(9);doc.setTextColor(100,100,100);doc.text('Ningún alumno en saldo negativo.',14,y+6);y+=16;}
  doc.setFontSize(10);doc.setFont('helvetica','bold');doc.setTextColor(100,100,100);
  doc.text(`Sin ningún registro aún (${zero.length})`,14,y);y+=4;
  if(zero.length){doc.autoTable({startY:y,head:[['Nombre','Equipo']],body:zero.map(([n,t])=>[n,t]),styles:{fontSize:8.5,cellPadding:3},headStyles:{fillColor:[120,120,120],textColor:255,fontStyle:'bold'},alternateRowStyles:{fillColor:[245,242,236]}});}
  pdfFooter(doc);doc.save('2GM1_alertas.pdf');
}

/* ══ INIT ══ */
initTheme();
initFirebase();
subscribeToData(()=>{renderPublic();});
