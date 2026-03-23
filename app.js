/* ══════════════════════════════════════════
   FIREBASE CONFIG
   ══════════════════════════════════════════ */
const supabaseUrl = 'https://tooriqtgsajatwigmice.supabase.co';
const supabaseKey = 'sb_publishable_zhhE5AXV35EaZNbdqPZabw_c2z1dXYz';
const supaClient = window.supabase.createClient(supabaseUrl, supabaseKey);

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

const TYPE_ICONS = {
  "Ropa":"👕","Libros":"📚","Joyería":"💍","Electrónicos":"📱",
  "Juguetes":"🧸","Hogar":"🏠","Deportes":"⚽","Arte":"🎨","Otro":"📦"
};

/* ══════════════════════════════════════════
   LOGROS
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
  { id:'catalogador', icon:'📦', name:'Catalogador',    desc:'Subiste tu primer artículo aprobado',    check:(p,moves,grades,products)=>products>=1 },
  { id:'coleccionista',icon:'🛍️',name:'Coleccionista',  desc:'Tienes 3 o más artículos aprobados',    check:(p,moves,grades,products)=>products>=3 },
];

function getAchievements(name) {
  const mine = history.filter(m=>m.name===name);
  const p = points[name]||0;
  const moves = mine.length;
  const grades = new Set(mine.filter(m=>m.sign==='+').map(m=>m.grade));
  const approvedProducts = allProducts.filter(pr=>pr.ownerName===name&&pr.status==='approved').length;
  return ACHIEVEMENTS.map(a=>({...a, unlocked:a.check(p,moves,grades,approvedProducts)}));
}

function getMedals(name) {
  return getAchievements(name).filter(a=>a.unlocked).map(a=>a.icon).slice(0,3).join('');
}

/* ══════════════════════════════════════════
   STATE
   ══════════════════════════════════════════ */
   function getBoleta(name){
  const entry = Object.entries(ROSTER).find(([b,[n]])=>n===name);
  return entry ? entry[0] : 'unknown';
}
const GRADES = {A:3,B:2,C:1};
const STUDENTS = Object.entries(ROSTER).map(([b,[n,t]])=>[n,t,b]);
let history=[], points={}, allProducts=[];
let currentPath=null, currentBoleta=null;
let selGradeVal=null, selSignVal=null, artCatVal=null;
let chartWeekly=null, chartStuWeekly=null;
let reviewTabState='pending';
let truequeTabState='pending';
let selectedPhotoFiles=[], tablonFilterState='';

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
function initSupabase(){
  setDbStatus('ok','Conectado');
}
function setDbStatus(s,l){
  document.getElementById('db-dot').className='db-dot '+s;
  document.getElementById('db-label').textContent=l;
}

async function subscribeToData(cb){
  const { data } = await supaClient.from('movements').select('*').order('ts', { ascending: false });
  history = data || [];
  recalc(); cb();
  supaClient.channel('public:movements').on('postgres_changes', { event: '*', schema: 'public', table: 'movements' }, async () => {
    const { data } = await supaClient.from('movements').select('*').order('ts', { ascending: false });
    history = data || []; recalc(); cb();
  }).subscribe();
}

async function subscribeToProducts(cb){
  const { data } = await supaClient.from('products').select('*').order('ts', { ascending: false });
  allProducts = data || []; cb();
  supaClient.channel('public:products').on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, async () => {
    const { data } = await supaClient.from('products').select('*').order('ts', { ascending: false });
    allProducts = data || []; cb();
  }).subscribe();
}

async function subscribeToExchanges(cb){
  const { data } = await supaClient.from('exchanges').select('*').order('ts', { ascending: false });
  cb(data || []);
  supaClient.channel('public:exchanges').on('postgres_changes', { event: '*', schema: 'public', table: 'exchanges' }, async () => {
    const { data } = await supaClient.from('exchanges').select('*').order('ts', { ascending: false });
    cb(data || []);
  }).subscribe();
}

function recalc(){
  STUDENTS.forEach(([n])=>{points[n]=0;});
  history.forEach(m=>{points[m.name]=(points[m.name]||0)+m.delta;});
}

/* ══════════════════════════════════════════
   IMAGE COMPRESSION
   ══════════════════════════════════════════ */
function compressImage(file, maxWidth=600){
  return new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        const canvas=document.createElement('canvas');
        let w=img.width, h=img.height;
        if(w>maxWidth){h=Math.round(h*maxWidth/w);w=maxWidth;}
        canvas.width=w;canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        canvas.toBlob(blob=>resolve(new File([blob],file.name.replace(/\.[^/.]+$/, '.webp'),{type:'image/webp'})),'image/webp',0.75);
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ══════════════════════════════════════════
   PHOTO UPLOAD PREVIEW
   ══════════════════════════════════════════ */
function previewPhotos(input){
  if(input.files && input.files.length > 0){
    const newFiles=Array.from(input.files);
    selectedPhotoFiles = [...selectedPhotoFiles, ...newFiles].slice(0,4);
  }
  const wrap=document.getElementById('art-previews');
  wrap.innerHTML='';
  selectedPhotoFiles.forEach((f,i)=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const div=document.createElement('div');
      div.className='photo-preview-wrap';
      div.innerHTML=`<img src="${e.target.result}"><button class="photo-preview-remove" onclick="removePhoto(${i})">×</button>`;
      wrap.appendChild(div);
    };
    reader.readAsDataURL(f);
  });
  if(input.value) input.value = '';
}

function removePhoto(idx){
  selectedPhotoFiles.splice(idx,1);
  previewPhotos({files:[]});
}

/* ══════════════════════════════════════════
   ARTICLE SUBMISSION (Student)
   ══════════════════════════════════════════ */
function selectArtCat(c){
  artCatVal=c;
  ['A','B','C','S'].forEach(x=>{
    document.getElementById('art-gb-'+x).className='gb'+(x===c?' '+x:'');
  });
  const ptsWrap = document.getElementById('special-pts-wrap');
  if(ptsWrap) ptsWrap.style.display = (c==='S') ? 'grid' : 'none';
}

function showArtToast(msg,ok){
  const el=document.getElementById('art-toast');
  el.textContent=msg;
  el.className='toast '+(ok?'ok':'err');
  setTimeout(()=>el.className='toast',3000);
}

async function submitArticulo(){
  const picker = document.getElementById('shared-upload-student-picker');
  const isAdmin = picker ? picker.style.display !== 'none' : false;
  let ownerName = '', ownerTeam = '', ownerBoleta = '';

  if (isAdmin) {
    const selValue = document.getElementById('upload-sel-stu').value;
    if(!selValue) { showArtToast('Selecciona el dueño o Anónimo', false); return; }
    
    if (selValue === 'ANON') {
      ownerName = 'Anónimo';
      ownerTeam = 'N/A';
      ownerBoleta = 'ANON';
    } else {
      ownerBoleta = getBoleta(selValue);
      const r = ROSTER[ownerBoleta] || [selValue, 'Extra'];
      ownerName = r[0];
      ownerTeam = r[1];
    }
  } else {
    ownerBoleta = currentBoleta;
    const r = ROSTER[ownerBoleta];
    ownerName = r[0];
    ownerTeam = r[1];
  }

  const title=document.getElementById('art-title').value.trim();
  const type=document.getElementById('art-type').value;
  const desc=document.getElementById('art-desc').value.trim();

  if(!title){showArtToast('Escribe el nombre del artículo',false);return;}
  if(!type){showArtToast('Selecciona el tipo de artículo',false);return;}
  if(!artCatVal){showArtToast('Selecciona una categoría',false);return;}
  let reqPts = 0;
  if(artCatVal === 'S'){
    reqPts = parseInt(document.getElementById('art-special-pts').value);
    if(isNaN(reqPts) || reqPts < 1){showArtToast('Ingresa los puntos solicitados para Especial',false);return;}
  }
  if(!desc){showArtToast('Agrega una descripción',false);return;}
  if(selectedPhotoFiles.length===0){showArtToast('Sube al menos una fotografía',false);return;}

  const btn=document.getElementById('art-submit-btn');
  btn.disabled=true; btn.textContent='Subiendo fotos...';

  const progressWrap=document.getElementById('upload-progress');
  const progressBar=document.getElementById('upload-progress-bar');
  progressWrap.style.display='block'; progressBar.style.width='0%';

  try{
    const photoURLs=[];
    for(let i=0;i<selectedPhotoFiles.length;i++){
      const compressed=await compressImage(selectedPhotoFiles[i]);
      const filePath = `${ownerBoleta}/${Date.now()}_${i}.webp`;
      const { error } = await supaClient.storage.from('products').upload(filePath, compressed, { upsert: true });
      if(error) throw error;
      const { data: publicURLData } = supaClient.storage.from('products').getPublicUrl(filePath);
      photoURLs.push(publicURLData.publicUrl);
      progressBar.style.width=`${Math.round((i+1)/selectedPhotoFiles.length*100)}%`;
    }

    const { error: dbErr } = await supaClient.from('products').insert([{
      ownerName, ownerTeam, ownerBoleta,
      title, type, category:artCatVal, description:desc,
      photos:photoURLs,
      status:'pending',
      adminComment:'',
      pointsAwarded:0,
      requestedPoints:reqPts,
      ts:Date.now(), reviewedTs:null
    }]);
    if(dbErr) throw dbErr;

    btn.disabled=false; btn.textContent='Enviar para revisión';
    progressWrap.style.display='none';
    showArtToast('¡Artículo enviado! El equipo lo revisará pronto.',true);
    document.getElementById('art-title').value='';
    document.getElementById('art-type').value='';
    document.getElementById('art-desc').value='';
    document.getElementById('art-previews').innerHTML='';
    document.getElementById('art-photos').value='';
    if(document.getElementById('art-special-pts')) document.getElementById('art-special-pts').value='';
    selectedPhotoFiles=[];
    artCatVal=null;
    ['A','B','C','S'].forEach(x=>document.getElementById('art-gb-'+x).className='gb');
    if(document.getElementById('special-pts-wrap')) document.getElementById('special-pts-wrap').style.display='none';

  }catch(e){
    btn.disabled=false; btn.textContent='Enviar para revisión';
    progressWrap.style.display='none';
    showArtToast('Error al subir. Revisa tu conexión.',false);
    console.error(e);
  }
}

/* ══════════════════════════════════════════
   RENDER STUDENT ARTICLES
   ══════════════════════════════════════════ */
function renderStuArticulos(ownerName){
  const mine=allProducts.filter(p=>p.ownerName===ownerName);
  const el=document.getElementById('stu-mis-articulos');
  if(!mine.length){el.innerHTML='<div class="empty">Aún no has enviado ningún artículo</div>';return;}
  el.innerHTML=mine.map(p=>{
const statusHtml=p.status==='pending'?
  '<span class="status-pending">Pendiente de revisión</span>':
  p.status==='approved'?
  `<span class="status-approved">Aprobado · +${p.pointsAwarded} pts</span>`:
  p.status==='traded'?
  `<span class="status-approved">Canjeado por ${p.tradedBy}</span>`:
  `<span class="status-rejected">Rechazado</span>`;
    const comment=p.adminComment?`<div style="font-size:12px;color:var(--muted);margin-top:4px;padding:6px 8px;background:var(--bg);border-radius:var(--r)">Comentario: ${p.adminComment}</div>`:'';
    const photoHtml=p.photos&&p.photos.length?
      `<img src="${p.photos[0]}" style="width:64px;height:64px;object-fit:cover;border-radius:var(--r);border:1px solid var(--border);flex-shrink:0">`:
      `<div style="width:64px;height:64px;border-radius:var(--r);background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:24px;border:1px solid var(--border)">${TYPE_ICONS[p.type]||'📦'}</div>`;
    return`<div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);align-items:flex-start">
      ${photoHtml}
      <div style="flex:1;min-width:0">
        <div style="font-size:13.5px;font-weight:500">${p.title}</div>
        <div style="font-size:11px;color:var(--muted);margin:2px 0">${TYPE_ICONS[p.type]||''} ${p.type} · Cat. ${p.category} · ${fmtDate(new Date(p.ts).toISOString().slice(0,10))}</div>
        ${statusHtml}
        ${comment}
      </div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   ADMIN CATALOG
   ══════════════════════════════════════════ */
let pendingRejectId=null;

function switchReviewTab(tab,el){
  reviewTabState=tab;
  document.querySelectorAll('.review-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderCatalogo();
}

function renderCatalogo(){
  const filtered=allProducts.filter(p=>p.status===reviewTabState);
  const pending=allProducts.filter(p=>p.status==='pending').length;

  document.getElementById('tab-count-pending').textContent=pending;
  document.getElementById('tab-count-pending').style.display=pending?'inline':'none';
  const badgeCat=document.getElementById('adm-badge-cat');
  const badgeCat2=document.getElementById('adm-badge-cat2');
  if(pending>0){
    badgeCat.textContent=pending;badgeCat.style.display='inline';
    badgeCat2.textContent=pending;badgeCat2.style.display='inline';
  }else{
    badgeCat.style.display='none';badgeCat2.style.display='none';
  }

  const el=document.getElementById('catalogo-list');
  if(!filtered.length){
    el.innerHTML=`<div class="empty">${reviewTabState==='pending'?'Sin artículos pendientes de revisión':reviewTabState==='approved'?'Sin artículos aprobados aún':'Sin artículos rechazados'}</div>`;
    return;
  }

  el.innerHTML=filtered.map(p=>{
    const photosHtml=p.photos&&p.photos.length?
      p.photos.map(url=>`<img src="${url}" style="width:80px;height:80px;object-fit:cover;border-radius:var(--r);border:1px solid var(--border)">`).join(''):
      `<div style="width:80px;height:80px;border-radius:var(--r);background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:28px;border:1px solid var(--border)">${TYPE_ICONS[p.type]||'📦'}</div>`;

    const catColors={A:'var(--green-l)',B:'var(--blue-l)',C:'var(--amber-l)',S:'var(--purple-l)'};
    const catText={A:'var(--green-d)',B:'var(--blue)',C:'var(--amber)',S:'var(--purple)'};

const actionsHtml=p.status==='pending'?`
      <div style="margin-top:12px; padding-top:12px; border-top:1px dashed var(--border)">
        <label style="font-size:11px;color:var(--muted);margin-bottom:6px;display:block">Modificar categoría (Alumno sugirió: ${p.category})</label>
        <select id="approve-cat-${p.id}" style="width:100%; margin-bottom:10px; padding:8px; font-size:13px; border:1px solid var(--border); border-radius:var(--r); background:var(--bg); color:var(--text);" onchange="document.getElementById('pts-wrap-${p.id}').style.display=this.value==='S'?'block':'none'">
          <option value="A" ${p.category==='A'?'selected':''}>Grado A (Impecable · 3 pts)</option>
          <option value="B" ${p.category==='B'?'selected':''}>Grado B (Buen uso · 2 pts)</option>
          <option value="C" ${p.category==='C'?'selected':''}>Grado C (Con uso · 1 pt)</option>
          <option value="S" ${p.category==='S'?'selected':''}>Especial (Pts dinámicos)</option>
        </select>
        <div id="pts-wrap-${p.id}" style="display:${p.category==='S'?'block':'none'}; margin-bottom:10px;">
          <label style="font-size:11px;color:var(--muted);margin-bottom:4px;display:block">Puntos a otorgar (Solicitados: ${p.requestedPoints||0})</label>
          <input type="number" id="approve-pts-${p.id}" value="${p.requestedPoints||0}" style="width:100px; padding:8px; border:1px solid var(--border); border-radius:var(--r); background:var(--bg); color:var(--text);">
        </div>
        <div class="product-card-actions">
          <button class="btn-approve" onclick="confirmApprove('${p.id}','${p.ownerName}','${p.category}',${p.requestedPoints||0})">Aprobar artículo</button>
          <button class="btn-reject" onclick="showRejectForm('${p.id}')">Rechazar</button>
        </div>
      </div>
      <div id="reject-form-${p.id}" style="display:none;margin-top:8px">
        <input type="text" id="reject-comment-${p.id}" placeholder="Motivo del rechazo (obligatorio)" style="margin-bottom:6px">
        <div style="display:flex;gap:6px">
          <button class="btn-approve" style="background:var(--red)" onclick="confirmReject('${p.id}')">Confirmar rechazo</button>
          <button class="btn-reject" onclick="hideRejectForm('${p.id}')">Cancelar</button>
        </div>
      </div>`:
      p.status==='approved'?`<div style="margin-top:6px"><span class="status-approved">Aprobado · +${p.pointsAwarded} pts asignados</span></div>`:
      `<div style="margin-top:6px"><span class="status-rejected">Rechazado</span>${p.adminComment?`<div style="font-size:12px;color:var(--muted);margin-top:4px">Motivo: ${p.adminComment}</div>`:''}`;

    return`<div class="product-card">
      <div style="display:flex;gap:6px;padding:.75rem .75rem 0;overflow-x:auto">${photosHtml}</div>
      <div style="padding:.75rem">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap">
          <span style="font-size:14px;font-weight:500">${p.title}</span>
          <span style="font-size:11px;padding:2px 8px;border-radius:99px;background:${catColors[p.category]};color:${catText[p.category]};font-weight:500">Cat. ${p.category}</span>
          <span style="font-size:11px;color:var(--muted)">${TYPE_ICONS[p.type]||''} ${p.type}</span>
        </div>
        <div style="font-size:12px;color:var(--muted);margin-bottom:4px">
          ${p.ownerName} · ${p.ownerTeam} · ${fmtDate(new Date(p.ts).toISOString().slice(0,10))}
        </div>
        <div style="font-size:12px;color:var(--text);line-height:1.5">${p.description}</div>
        ${actionsHtml}
      </div>
    </div>`;
  }).join('');
}

function showRejectForm(id){
  document.getElementById(`reject-form-${id}`).style.display='block';
}
function hideRejectForm(id){
  document.getElementById(`reject-form-${id}`).style.display='none';
}

async function confirmApprove(productId, ownerName, originalCategory, requestedPoints){
  const catSelect=document.getElementById(`approve-cat-${productId}`).value;
  let pts=GRADES[catSelect];
  let autoComment='';
  if(catSelect==='S'){
    pts = parseInt(document.getElementById(`approve-pts-${productId}`).value);
    if(isNaN(pts) || pts < 1){ alert('Ingresa puntos válidos para la categoría Especial.'); return; }
    if(pts < requestedPoints){
      const motiv = prompt(`El alumno solicitó ${requestedPoints} pts pero le otorgarás ${pts}. Escribe el motivo de esta reducción (Obligatorio):`);
      if(!motiv || motiv.trim()===''){ alert('Debes ingresar un motivo para reducir los puntos.'); return; }
      autoComment = `Otorgado por ${pts} pts en lugar de los ${requestedPoints} solicitados. Motivo: ${motiv}`;
    } else if(originalCategory !== 'S') {
      autoComment = `La administración ajustó a categoría Especial otorgando ${pts} pts.`;
    }
  } else if(catSelect!==originalCategory){
    autoComment=`La administración ajustó la categoría de ${originalCategory} a ${catSelect} tras la revisión del artículo.`;
  }
  const ownerBoleta=getBoleta(ownerName);
  try{
    await supaClient.from('products').update({
      status:'approved', category:catSelect, pointsAwarded:pts, reviewedTs:Date.now(), adminComment:autoComment
    }).eq('id', productId);
    await supaClient.from('movements').insert([{
      name:ownerName, boleta:ownerBoleta, grade:catSelect, sign:'+', delta:pts,
      date:new Date().toISOString().slice(0,10), desc:`Artículo aprobado (Cat. ${catSelect})`,
      ts:Date.now(), auto:true
    }]);
  }catch(e){alert('Error al aprobar: '+e.message);}
}

async function confirmReject(productId){
  const comment=document.getElementById(`reject-comment-${productId}`).value.trim();
  if(!comment){alert('Escribe el motivo del rechazo');return;}
  // Buscar en qué boleta está el producto
  const prod=allProducts.find(p=>p.id===productId);
  const boleta=prod?prod.ownerBoleta:'unknown';
  try{
    await supaClient.from('products').update({
      status:'rejected', adminComment:comment, reviewedTs:Date.now(), pointsAwarded:0
    }).eq('id', productId);
  }catch(e){alert('Error al rechazar: '+e.message);}
}

/* ══════════════════════════════════════════
   TABLÓN PÚBLICO
   ══════════════════════════════════════════ */
function filterTablon(val, el){
  tablonFilterState=val;
  document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderTablon();
}

function renderTablon(){
  const available = allProducts.filter(p => p.status === 'approved' || p.status === 'traded');
  const filtered = tablonFilterState === '' ? available :
    available.filter(p => p.category === tablonFilterState || p.type === tablonFilterState);

  document.getElementById('pub-products').textContent = allProducts.filter(p => p.status === 'approved').length;

  const el = document.getElementById('pub-tablon');
  if(!filtered.length){
    el.innerHTML = '<div class="empty" style="grid-column:1/-1">No hay artículos disponibles en esta categoría</div>';
    return;
  }

  const catColors={A:'var(--green-l)',B:'var(--blue-l)',C:'var(--amber-l)',S:'var(--purple-l)'};
  const catText={A:'var(--green-d)',B:'var(--blue)',C:'var(--amber)',S:'var(--purple)'};

  el.innerHTML = filtered.map(p => {
    const imgHtml = p.photos && p.photos.length ?
      `<img src="${p.photos[0]}" class="tablon-img" loading="lazy">` :
      `<div class="tablon-img-placeholder">${TYPE_ICONS[p.type]||'📦'}</div>`;

    const tradedBadge = p.status === 'traded'
      ? `<div style="position:absolute;top:8px;left:8px;background:rgba(155,35,53,0.9);
          color:#fff;font-size:10px;font-weight:500;padding:2px 8px;border-radius:99px">
          No disponible
        </div>`
      : '';

    return `<div class="tablon-card" style="position:relative">
      ${tradedBadge}
      ${imgHtml}
      <div class="tablon-body">
        <div class="tablon-title">${p.title}</div>
        <div class="tablon-meta">
          <span style="padding:1px 7px;border-radius:99px;font-size:10px;font-weight:500;background:${catColors[p.category]};color:${catText[p.category]}">Cat. ${p.category}</span>
          <span>${TYPE_ICONS[p.type]||''} ${p.type}</span>
        </div>
        <div style="font-size:11px;color:var(--hint);margin-top:4px">${p.ownerName.split(' ').slice(0,2).join(' ')} · ${p.ownerTeam}</div>
      </div>
    </div>`;
  }).join('');
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
  const passWrap=document.getElementById('login-pass-wrap');
  if(path==='stu'){
    lbl.textContent='Número de boleta';
    inp.type='text';inp.placeholder='Ej: 2026401475';
    passWrap.style.display='none';
  }else{
    lbl.textContent='Correo electrónico';
    inp.type='email';inp.placeholder='admin@circulocero.com';
    passWrap.style.display='block';
  }
  document.getElementById('login-form').style.display='block';
  document.getElementById('login-err').textContent='';
  inp.focus();
}

function backToCards(){
  document.getElementById('login-form').style.display='none';
  document.getElementById('card-stu').classList.remove('active');
  document.getElementById('card-adm').classList.remove('active');
  document.getElementById('login-err').textContent='';
  currentPath=null;
}

document.getElementById('login-input').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});

function doLogin(){
  const errEl=document.getElementById('login-err');errEl.textContent='';
  const btn=document.getElementById('login-btn');
  if(currentPath==='stu'){
    const val=document.getElementById('login-input').value.trim();
    if(!val){errEl.textContent='Ingresa tu número de boleta.';return;}
    if(!ROSTER[val]){errEl.textContent='Boleta no encontrada. Verifica el número.';return;}
    currentBoleta=val;enterStudentView();
  }else{
    const email=document.getElementById('login-input').value.trim();
    const pass=document.getElementById('login-pass').value;
    if(!email||!pass){errEl.textContent='Ingresa correo y contraseña.';return;}
    btn.textContent='Entrando...';btn.disabled=true;
    supaClient.auth.signInWithPassword({ email, password: pass })
      .then(({data, error})=>{
        if(error) {
          btn.textContent='Entrar';btn.disabled=false;
          errEl.textContent='Correo o contraseña incorrectos.';
        } else {
          btn.textContent='Entrar';btn.disabled=false;enterAdminView();
        }
      });
  }
}

/* ══════════════════════════════════════════
   PUBLIC LANDING
   ══════════════════════════════════════════ */
function renderPublic(){
  const total=STUDENTS.reduce((s,[n])=>s+points[n],0);
  const moves=history.length;
  document.getElementById('pub-total-pts').textContent=total>0?'+'+total:total;
  document.getElementById('pub-moves').textContent=moves;

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

  renderTablon();
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
  subscribeToProducts(()=>{
    renderStuTablon();
    renderStuArticulos(name);
    renderStuAchievements(name);
  });
  subscribeToData(()=>{renderStuAll(name,team);});
}

function renderStuAll(name,team){
  renderStuHero(name);renderStuHist(name);renderStuTeam(team,name);
  renderStuRanking(name);renderStuAchievements(name);
  renderStuTeamCard(team);renderStuChart(name);
  renderStuArticulos(name);
  renderStuTablon();
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
  const maxAll=Math.max(...['Eq.1','Eq.2','Eq.3','Eq.4','Eq.5','Eq.6','Eq.7','Eq.8','Eq.9'].map(t=>STUDENTS.filter(([,tt])=>tt===t).reduce((s,[n])=>s+points[n],0)),1);
  const pct=Math.round(Math.abs(tp)/maxAll*100);
  document.getElementById('stu-team-card').innerHTML=`
    <div class="card-title">${team} — ${TEAM_TOPICS[team]||''}</div>
    <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:.5rem">
      <span style="font-family:'DM Serif Display',serif;font-size:28px;color:var(--green)">${tp>0?'+':''}${tp}</span>
      <span style="font-size:12px;color:var(--muted)">puntos del equipo</span>
    </div>
    <div style="font-size:12px;color:var(--muted);margin-bottom:.75rem">${members.length} integrantes${neg?` · <span style="color:var(--red)">${neg} en negativo</span>`:''}</div>
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
  document.querySelectorAll('#stu-mis,#stu-articulos,#stu-tablon,#stu-logros,#stu-equipo,#stu-ranking,#stu-opciones').forEach(p=>p.classList.remove('on'));
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
  subscribeToProducts(()=>{renderCatalogo();renderPublic();});
  subscribeToExchanges(exchanges=>{renderAdmTrueques(exchanges);});
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

function populateStu(q=''){
  const sel=document.getElementById('sel-stu');sel.innerHTML='';
  STUDENTS.filter(([n])=>n.toLowerCase().includes(q.toLowerCase())).forEach(([n,t])=>{
    const o=document.createElement('option');o.value=n;o.textContent=`${n} (${t})`;sel.appendChild(o);
  });
}
function filterStu(){populateStu(document.getElementById('search-stu').value);}

function populateStuUp(q=''){
  const sel=document.getElementById('upload-sel-stu');
  if(!sel)return;
  sel.innerHTML='';
  if(!q || "anonimo".includes(q.toLowerCase()) || "anónimo".includes(q.toLowerCase())){
    const anon = document.createElement('option');
    anon.value = "ANON";
    anon.textContent = "Anónimo (Sin dueño)";
    sel.appendChild(anon);
  }
  STUDENTS.filter(([n])=>n.toLowerCase().includes(q.toLowerCase())).forEach(([n,t])=>{
    const o=document.createElement('option');o.value=n;o.textContent=`${n} (${t})`;sel.appendChild(o);
  });
}
function filterUploadStu(){populateStuUp(document.getElementById('upload-search-stu').value);}
function selGrade(g){
  selGradeVal=g;
  ['A','B','C','P'].forEach(x=>{
    const el=document.getElementById('gb-'+x);
    if(el) el.className='gb'+(x===g?' '+x:'');
  });
  const ci=document.getElementById('mov-custom');
  if(ci) ci.style.display=(g==='P'?'block':'none');
}
function selSign(s){selSignVal=s;document.getElementById('sb-p').className='sb'+(s==='+'?' plus':'');document.getElementById('sb-m').className='sb'+(s==='-'?' minus':'');}
function initDate(){const d=new Date(),p=n=>String(n).padStart(2,'0');document.getElementById('mov-date').value=`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`;}

async function doRegister(){
  const sel=document.getElementById('sel-stu'),name=sel.value;
  const toast=document.getElementById('reg-toast');
  const showT=(msg,ok)=>{toast.textContent=msg;toast.className='toast '+(ok?'ok':'err');setTimeout(()=>toast.className='toast',2800);};
  if(!name){showT('Selecciona un alumno',false);return;}
  if(!selGradeVal){showT('Elige el grado o P',false);return;}
  if(!selSignVal){showT('Elige si suma o resta',false);return;}
  
  let delta=0;
  if(selGradeVal==='P'){
    const val=parseInt(document.getElementById('mov-custom').value,10);
    if(!val || val<=0){showT('Ingresa una cantidad válida mayor a 0',false);return;}
    delta=val*(selSignVal==='+'?1:-1);
  } else {
    delta=GRADES[selGradeVal]*(selSignVal==='+'?1:-1);
  }
  
  const date=document.getElementById('mov-date').value;
  const desc=document.getElementById('mov-desc').value.trim()||(selGradeVal==='P'?'Val. Personalizado':`Grado ${selGradeVal}`);
  const boleta=getBoleta(name);
  try{
    await supaClient.from('movements').insert([{
      name, boleta, grade:selGradeVal, sign:selSignVal, delta, date, desc, ts:Date.now(), auto:false
    }]);
    showT(`✓ ${delta>0?'+':''}${delta} pts para ${name.split(' ')[0]}`,true);
    document.getElementById('mov-desc').value='';
    document.getElementById('mov-custom').value='';
  }catch(e){showT('Error al guardar.',false);console.error(e);}
}

function admTab(t,el){
  document.querySelectorAll('#v-adm .page').forEach(p=>p.classList.remove('on'));
  document.getElementById('adm-'+t).classList.add('on');
  document.querySelectorAll('#adm-nav a,#adm-mnav button').forEach(a=>a.classList.remove('active'));
  if(el)el.classList.add('active');
  if(t==='catalogo')renderCatalogo();
}

/* ══════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════ */
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('on'));
  document.getElementById(id).classList.add('on');
  
  if (id === 'v-adm') {
    const card = document.getElementById('shared-upload-card');
    const container = document.getElementById('adm-upload-container');
    if(card && container) {
      container.appendChild(card);
      document.getElementById('shared-upload-student-picker').style.display = 'block';
      populateStuUp();
    }
  } else if (id === 'v-student') {
    const card = document.getElementById('shared-upload-card');
    const container = document.getElementById('stu-upload-container');
    if(card && container) {
      container.appendChild(card);
      document.getElementById('shared-upload-student-picker').style.display = 'none';
    }
  }
}
function logout(){
  supaClient.removeAllChannels();
  currentBoleta=null;currentPath=null;
  if(supaClient.auth)supaClient.auth.signOut();
  backToCards();showView('v-login');
  document.getElementById('login-input').value='';
  if(document.getElementById('login-pass'))document.getElementById('login-pass').value='';
}
function initials(n){return n.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();}
function fmtDate(d){
  if(!d) return '—';
  if(typeof d === 'string' && d.includes('-')){
    const parts=d.split('-');
    if(parts.length===3) return`${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return String(d);
}
function checkPageBreak(doc, currentY, needed = 20){
  if(currentY + needed > 280){
    doc.addPage();
    return 20;
  }
  return currentY;
}

function safeName(s){return s.normalize('NFD').replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9_-]/g,"_");}

function pillCls(p){return p>0?'p-pos':p<0?'p-neg':'p-zero';}
function avCls(p){return p>0?'av-pos':p<0?'av-neg':'av-zero';}

function histItemHtml(m,showName=false){
  const col=m.sign==='+'?'var(--green)':'var(--red)';
  const gbg=m.grade==='A'?'var(--green-l)':m.grade==='B'?'var(--blue-l)':'var(--amber-l)';
  const gtx=m.grade==='A'?'var(--green-d)':m.grade==='B'?'var(--blue)':'var(--amber)';
  const nameRow=showName?`${m.name.split(' ').slice(0,2).join(' ')} · `:'';
  const autoTag=m.auto?`<span style="font-size:10px;padding:1px 6px;border-radius:99px;background:var(--blue-l);color:var(--blue);margin-left:4px">Auto</span>`:'';
  return`<div class="hist-item">
    <div class="hist-dot" style="background:${col}"></div>
    <div style="flex:1;min-width:0">
      <div style="font-size:13.5px">${nameRow}<span style="font-size:10px;padding:1px 6px;border-radius:99px;background:${gbg};color:${gtx}">Grado ${m.grade}</span>${autoTag}</div>
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
  doc.text('Círculo Cero — Grupo 2GM1',14,11);
  doc.setFontSize(9);doc.setFont('helvetica','normal');
  doc.text(title,14,18);doc.text(`Generado: ${fecha}`,196,18,{align:'right'});
  doc.setTextColor(0,0,0);return 35;
}
function pdfFooter(doc){
  const n=doc.internal.getNumberOfPages();
  for(let i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(150,150,150);doc.text(`Página ${i} de ${n} — Círculo Cero 2GM1`,105,290,{align:'center'});}
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
function pdfTrueques(){
  const{jsPDF}=window.jspdf;const doc=new jsPDF();
  let y=pdfHeader(doc,'Reporte de trueques completados');

  const exchanges=window._allExchanges||[];
  const completed=exchanges.filter(e=>e.status==='completed');
  const pending=exchanges.filter(e=>e.status!=='completed');

  // Resumen
  doc.setFontSize(9);doc.setTextColor(100,100,100);
  doc.text(`Trueques completados: ${completed.length}   |   Pendientes de entrega: ${pending.length}   |   Total: ${exchanges.length}`,14,y);y+=10;

  // Tabla de completados
  if(completed.length){
    doc.setFontSize(11);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
    doc.text('Trueques confirmados',14,y);y+=6;
    doc.autoTable({startY:y,
      head:[['Folio','Artículo','Cedente','Receptor','Equipo','Fecha','Confirmó']],
      body:completed.map(e=>{
        const fecha=new Date(e.ts).toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'});
        return[
          e.folio||'—',
          e.productTitle,
          e.ownerName.split(' ').slice(0,2).join(' '),
          e.buyerName.split(' ').slice(0,2).join(' '),
          e.ownerTeam,
          fecha,
          e.confirmedBy ? e.confirmedBy.split(' ').slice(0,2).join(' ') : '—'
        ];
      }),
      styles:{fontSize:7.5,cellPadding:2.5},
      headStyles:{fillColor:[45,106,79],textColor:255,fontStyle:'bold'},
      alternateRowStyles:{fillColor:[245,242,236]},
      columnStyles:{
        0:{cellWidth:26},
        4:{cellWidth:12,halign:'center'},
        5:{cellWidth:16,halign:'center'},
        6:{cellWidth:26}
      }
    });
    y=doc.lastAutoTable.finalY+12;
  }

  // Tabla de pendientes
  if(pending.length){
    if(y>220){doc.addPage();y=20;}
    doc.setFontSize(11);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
    doc.text('Trueques pendientes de entrega física',14,y);y+=6;
    doc.autoTable({startY:y,
      head:[['Folio','Artículo','Cat.','Cedente','Receptor','Pts','Fecha digital']],
      body:pending.map(e=>{
        const fecha=new Date(e.ts).toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'});
        return[
          e.folio||'—',
          e.productTitle,
          'Cat. '+e.productCategory,
          e.ownerName.split(' ').slice(0,2).join(' '),
          e.buyerName.split(' ').slice(0,2).join(' '),
          '-'+e.pointsCost,
          fecha
        ];
      }),
      styles:{fontSize:7.5,cellPadding:2.5},
      headStyles:{fillColor:[146,64,14],textColor:255,fontStyle:'bold'},
      alternateRowStyles:{fillColor:[254,243,199]},
      columnStyles:{
        0:{cellWidth:28},
        2:{cellWidth:14,halign:'center'},
        5:{cellWidth:12,halign:'center'},
        6:{cellWidth:22,halign:'center'}
      },
      didParseCell:data=>{
        if(data.column.index===5&&data.section==='body')
          data.cell.styles.textColor=[155,35,53];
      }
    });
  }

  pdfFooter(doc);doc.save('2GM1_trueques.pdf');
}
/* ══════════════════════════════════════════
   STUDENT TABLON
   ══════════════════════════════════════════ */
let stuTablonFilterState='';

function filterStuTablon(val, el){
  stuTablonFilterState=val;
  document.querySelectorAll('#stu-tablon-filters .filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderStuTablon();
}

function renderStuTablon(){
  const el = document.getElementById('stu-tablon-grid');
  if(!el) return;

  const available = allProducts.filter(p => p.status === 'approved' || p.status === 'traded');
  const filtered = stuTablonFilterState === '' ? available :
    available.filter(p => p.category === stuTablonFilterState || p.type === stuTablonFilterState);

  if(!filtered.length){
    el.innerHTML = '<div class="empty" style="grid-column:1/-1">No hay artículos disponibles con este filtro</div>';
    return;
  }

  const catColors={A:'var(--green-l)',B:'var(--blue-l)',C:'var(--amber-l)',S:'var(--purple-l)'};
  const catText={A:'var(--green-d)',B:'var(--blue)',C:'var(--amber)',S:'var(--purple)'};

  el.innerHTML = filtered.map(p => {
    const imgHtml = p.photos && p.photos.length ?
      `<img src="${p.photos[0]}" class="tablon-img" loading="lazy">` :
      `<div class="tablon-img-placeholder">${TYPE_ICONS[p.type]||'📦'}</div>`;

    const tradedBadge = p.status === 'traded'
      ? `<div style="position:absolute;top:8px;left:8px;background:rgba(155,35,53,0.9);
          color:#fff;font-size:10px;font-weight:500;padding:2px 8px;border-radius:99px">
          No disponible
        </div>`
      : '';

    return `<div class="tablon-card" onclick="openArtModal('${p.id}')" style="position:relative">
      ${tradedBadge}
      ${imgHtml}
      <div class="tablon-body">
        <div class="tablon-title">${p.title}</div>
        <div class="tablon-meta">
          <span style="padding:1px 7px;border-radius:99px;font-size:10px;font-weight:500;background:${catColors[p.category]};color:${catText[p.category]}">Cat. ${p.category}</span>
          <span>${TYPE_ICONS[p.type]||''} ${p.type}</span>
        </div>
        <div style="font-size:11px;color:var(--hint);margin-top:4px">${p.ownerName.split(' ').slice(0,2).join(' ')} · ${p.ownerTeam}</div>
      </div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   MODAL DE ARTÍCULO
   ══════════════════════════════════════════ */
function openArtModal(id){
  const p = allProducts.find(pr => pr.id === id);
  if(!p) return;

  const catColors = {A:'var(--green-l)', B:'var(--blue-l)', C:'var(--amber-l)', S:'var(--purple-l)'};
  const catText   = {A:'var(--green-d)', B:'var(--blue)',   C:'var(--amber)', S:'var(--purple)'};

  const photosHtml = p.photos && p.photos.length
  ? p.photos.map((url, i) => `<img id="modal-img-${i}" src="${url}" loading="lazy" crossorigin="anonymous">`).join('')
  : `<div style="width:100%;height:280px;display:flex;align-items:center;justify-content:center;font-size:48px;background:var(--bg)">${TYPE_ICONS[p.type]||'📦'}</div>`;

  const ownerInitials = p.ownerName.split(' ').slice(0,2).map(w=>w[0]).join('').toUpperCase();

  const [myName] = ROSTER[currentBoleta] || ['',''];
  const myPts = points[myName] || 0;
  const cost = GRADES[p.category];
  const isOwner = p.ownerBoleta === currentBoleta;
  const isTraded = p.status === 'traded';
  const canAfford = myPts >= cost;

  let tradeBtn = '';
  if(currentBoleta){
    if(isOwner){
      tradeBtn = `<div style="margin-top:1rem;padding:10px 14px;background:var(--bg);border-radius:10px;
        border:1px solid var(--border);font-size:13px;color:var(--muted);text-align:center">
        Este es tu artículo
      </div>`;
    } else if(isTraded){
      tradeBtn = `<div style="margin-top:1rem;padding:10px 14px;background:var(--red-l);border-radius:10px;
        border:1px solid var(--red-l);font-size:13px;color:var(--red-d);text-align:center;font-weight:500">
        No disponible — ya fue canjeado
      </div>`;
    } else if(!canAfford){
      tradeBtn = `<div style="margin-top:1rem;padding:10px 14px;background:var(--amber-l);border-radius:10px;
        border:1px solid var(--amber-l);font-size:13px;color:var(--amber);text-align:center">
        Necesitas ${cost} pts — tienes ${myPts}
      </div>`;
    } else {
      tradeBtn = `<button onclick="canjearArticulo('${p.id}')"
        style="width:100%;margin-top:1rem;padding:12px;background:#2D6A4F;color:#fff;border:none;
        border-radius:10px;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif">
        Canjear por ${cost} punto${cost>1?'s':''} 🔄
      </button>`;
    }
  }

  document.getElementById('modal-body').innerHTML = `
    <div class="modal-photos">${photosHtml}</div>
    <div class="modal-info">
      <div class="modal-title">${p.title}</div>
      <div class="modal-tags">
        <span style="padding:3px 10px;border-radius:99px;font-size:12px;font-weight:500;background:${catColors[p.category]};color:${catText[p.category]}">Categoría ${p.category}</span>
        <span style="padding:3px 10px;border-radius:99px;font-size:12px;background:var(--bg);color:var(--muted);border:1px solid var(--border)">${TYPE_ICONS[p.type]||''} ${p.type}</span>
      </div>
      <div class="modal-desc">${p.description}</div>
      <div class="modal-owner">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--green-l);color:var(--green-d);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:500;flex-shrink:0">${ownerInitials}</div>
        <div>
          <div style="font-size:13px;font-weight:500">${p.ownerName}</div>
          <div style="font-size:11px;color:var(--muted)">${p.ownerTeam} · ${TEAM_TOPICS[p.ownerTeam]||''}</div>
        </div>
      </div>
      ${tradeBtn}
    </div>
  `;

  document.getElementById('art-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeArtModal(event){
  if(event && event.target !== document.getElementById('art-modal')) return;
  document.getElementById('art-modal').style.display = 'none';
  document.body.style.overflow = '';
}
/* ══════════════════════════════════════════
   SISTEMA DE TRUEQUES
   ══════════════════════════════════════════ */
async function canjearArticulo(productId){
  const p = allProducts.find(pr => pr.id === productId);
  if(!p) return;

  const [myName] = ROSTER[currentBoleta];
  const myPoints = points[myName] || 0;
  const cost = p.pointsAwarded || GRADES[p.category];

  // Validaciones
  if(p.ownerBoleta === currentBoleta){
    alert('No puedes canjear tu propio artículo.');
    return;
  }
  if(p.status === 'traded'){
    alert('Este artículo ya fue canjeado.');
    return;
  }
  if(myPoints < cost){
    alert(`No tienes suficientes puntos. Necesitas ${cost} pts y tienes ${myPoints}.`);
    return;
  }

  const confirmar = confirm(`¿Confirmas el canje de "${p.title}" por ${cost} punto(s)?`);
  if(!confirmar) return;

  try{
    // 1. Marcar artículo como canjeado
    await supaClient.from('products').update({
      status: 'traded', tradedBy: myName, tradedByBoleta: currentBoleta, tradedTs: Date.now()
    }).eq('id', productId);

    // 2. Descontar puntos al alumno que canjea
    await supaClient.from('movements').insert([{
      name: myName, boleta: currentBoleta, grade: p.category, sign: '-', delta: -cost,
      date: new Date().toISOString().slice(0,10), desc: `Trueque: ${p.title} (${p.ownerName.split(' ')[0]})`,
      ts: Date.now(), auto: true, trueque: true, productId
    }]);

    // 3. Registrar el intercambio
    await supaClient.from('exchanges').insert([{
      productId, productTitle: p.title, productType: p.type, productCategory: p.category,
      productPhoto: p.photos?.[0] || '', productPhotos: p.photos || [],
      ownerName: p.ownerName, ownerBoleta: p.ownerBoleta, ownerTeam: p.ownerTeam,
      buyerName: myName, buyerBoleta: currentBoleta, buyerTeam: ROSTER[currentBoleta][1],
      pointsCost: cost, ts: Date.now(), folio: `CC-${Date.now()}`
    }]);

    // Capturar imágenes ya cargadas del modal
    const photoBase64s = [];
    for(let i = 0; i < (p.photos||[]).length; i++){
      const imgEl = document.getElementById(`modal-img-${i}`);
      if(imgEl && imgEl.complete){
        try{
          const canvas = document.createElement('canvas');
          canvas.width = imgEl.naturalWidth;
          canvas.height = imgEl.naturalHeight;
          canvas.getContext('2d').drawImage(imgEl, 0, 0);
          photoBase64s.push(canvas.toDataURL('image/jpeg', 0.85));
        }catch(e){ console.warn('No se pudo convertir imagen', i, e); }
      }
    }

    // Cerrar modal y mostrar comprobante
    closeArtModal();
    const exchData = {
      productTitle: p.title,
      productType: p.type,
      productCategory: p.category,
      productPhoto: p.photos?.[0] || '',
      productPhotos: p.photos || [],
      productPhotosB64: photoBase64s,
      ownerName: p.ownerName,
      ownerTeam: p.ownerTeam,
      buyerName: myName,
      buyerBoleta: currentBoleta,
      buyerTeam: ROSTER[currentBoleta][1],
      pointsCost: cost,
      folio: `CC-${Date.now()}`,
      ts: Date.now()
    };
    showComprobante(exchData);

  }catch(e){
    alert('Error al procesar el canje: ' + e.message);
    console.error(e);
  }
}

function showComprobante(exch){
  const fecha = new Date(exch.ts).toLocaleDateString('es-MX',{day:'2-digit',month:'long',year:'numeric'});
  const hora  = new Date(exch.ts).toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'});
  const catColors = {A:'#D8F3DC',B:'#DBEAFE',C:'#FEF3C7',S:'#EDE9FE'};
  const catText   = {A:'#1B4332',B:'#1E3A5F',C:'#92400E',S:'#4C1D95'};

  // Crear overlay de comprobante
  const overlay = document.createElement('div');
  overlay.id = 'comprobante-overlay';
  overlay.style.cssText = `
    position:fixed;top:0;left:0;width:100%;height:100%;
    background:rgba(0,0,0,0.5);z-index:2000;
    display:flex;align-items:center;justify-content:center;
    padding:1rem;backdrop-filter:blur(4px);
  `;

  overlay.innerHTML = `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:16px;
      width:100%;max-width:420px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,.2)">

      <!-- Header verde -->
      <div style="background:#2D6A4F;padding:1.5rem;text-align:center;color:#fff">
        <div style="font-size:32px;margin-bottom:.5rem">✅</div>
        <div style="font-family:'DM Serif Display',serif;font-size:22px;margin-bottom:4px">¡Trueque exitoso!</div>
        <div style="font-size:12px;opacity:.8">Folio: ${exch.folio}</div>
      </div>

      <!-- Cuerpo -->
      <div style="padding:1.25rem 1.5rem">

        <!-- Artículo -->
        <div style="display:flex;gap:12px;align-items:center;padding:1rem;background:var(--bg);
          border-radius:10px;margin-bottom:1rem;border:1px solid var(--border)">
          ${exch.productPhoto
            ? `<img src="${exch.productPhoto}" style="width:64px;height:64px;object-fit:cover;border-radius:8px;flex-shrink:0">`
            : `<div style="width:64px;height:64px;border-radius:8px;background:var(--surface);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0">${TYPE_ICONS[exch.productType]||'📦'}</div>`
          }
          <div>
            <div style="font-size:14px;font-weight:500">${exch.productTitle}</div>
            <div style="font-size:11px;color:var(--muted);margin-top:2px">${TYPE_ICONS[exch.productType]||''} ${exch.productType}</div>
            <span style="font-size:10px;padding:1px 8px;border-radius:99px;font-weight:500;
              background:${catColors[exch.productCategory]};color:${catText[exch.productCategory]}">
              Categoría ${exch.productCategory}
            </span>
          </div>
        </div>

        <!-- Datos del intercambio -->
        <div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:1rem;font-size:13px">
          <div style="display:flex;justify-content:space-between;padding:8px 12px;border-bottom:1px solid var(--border)">
            <span style="color:var(--muted)">De</span>
            <span style="font-weight:500">${exch.ownerName.split(' ').slice(0,2).join(' ')} · ${exch.ownerTeam}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px;border-bottom:1px solid var(--border)">
            <span style="color:var(--muted)">Para</span>
            <span style="font-weight:500">${exch.buyerName.split(' ').slice(0,2).join(' ')} · ${exch.buyerTeam}</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px;border-bottom:1px solid var(--border)">
            <span style="color:var(--muted)">Puntos descontados</span>
            <span style="font-weight:500;color:#9B2335">−${exch.pointsCost} pts</span>
          </div>
          <div style="display:flex;justify-content:space-between;padding:8px 12px">
            <span style="color:var(--muted)">Fecha y hora</span>
            <span style="font-weight:500">${fecha} ${hora}</span>
          </div>
        </div>

        <!-- Botones -->
        <div style="display:flex;gap:8px">
          <button onclick="pdfComprobante(${JSON.stringify(exch).replace(/"/g,'&quot;')})"
            style="flex:1;padding:10px;background:#2D6A4F;color:#fff;border:none;border-radius:10px;
            font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif">
            Descargar PDF
          </button>
          <button onclick="document.getElementById('comprobante-overlay').remove()"
            style="flex:1;padding:10px;background:var(--bg);color:var(--text);
            border:1px solid var(--border);border-radius:10px;font-size:13px;cursor:pointer;
            font-family:'DM Sans',sans-serif">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

async function pdfComprobante(exch){
  const{jsPDF}=window.jspdf;
  const doc=new jsPDF();
  const fecha=new Date(exch.ts).toLocaleDateString('es-MX',{day:'2-digit',month:'long',year:'numeric'});
  const hora=new Date(exch.ts).toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'});

  // Header
  doc.setFillColor(45,106,79);doc.rect(0,0,210,40,'F');
  doc.setTextColor(255,255,255);
  doc.setFontSize(18);doc.setFont('helvetica','bold');
  doc.text('Comprobante de Trueque',105,16,{align:'center'});
  doc.setFontSize(10);doc.setFont('helvetica','normal');
  doc.text('Círculo Cero — Sustentabilidad 2GM1 · Ciclo 2025–2026',105,25,{align:'center'});
  doc.text(`Folio: ${exch.folio}`,105,33,{align:'center'});

  let y=52;
  doc.setTextColor(0,0,0);

  // Imágenes del artículo
const photos = exch.productPhotosB64 && exch.productPhotosB64.length
  ? exch.productPhotosB64
  : [];

if(photos.length){
  doc.setFontSize(13);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
  doc.text('Fotografías del artículo',14,y);y+=8;
  const imgSize=55, gap=8;
  let x=14;
  let maxH=0;
  for(const b64 of photos.slice(0,4)){
    if(b64){
      const tmpImg=new Image();
      tmpImg.src=b64;
      const ratio=tmpImg.naturalHeight>0&&tmpImg.naturalWidth>0
        ? tmpImg.naturalHeight/tmpImg.naturalWidth : 1;
      const imgW=imgSize;
      const imgH=imgSize*ratio;
      doc.addImage(b64,'JPEG',x,y,imgW,imgH);
      x+=imgW+gap;
      if(imgH>maxH)maxH=imgH;
    }
  }
  y+=maxH+12;
}

  // Artículo
  doc.setFontSize(13);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
  doc.text('Artículo intercambiado',14,y);y+=8;
doc.autoTable({startY:y,
  body:[
    ['Cedente (entrega)',exch.ownerName,exch.ownerTeam],
    ['Receptor (recibe)',exch.buyerName,exch.buyerTeam],
  ],
  styles:{fontSize:10,cellPadding:4},
  columnStyles:{
    0:{cellWidth:45,fontStyle:'bold',fillColor:[245,242,236]},
    1:{cellWidth:95},
    2:{cellWidth:36}
  },
  theme:'grid'
});

  y=doc.lastAutoTable.finalY+12;
  doc.setFontSize(13);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
  doc.text('Participantes',14,y);y+=8;
  doc.autoTable({startY:y,
    body:[
      ['Cedente (entrega)',exch.ownerName,exch.ownerTeam],
      ['Receptor (recibe)',exch.buyerName,exch.buyerTeam],
    ],
    styles:{fontSize:10,cellPadding:4},
    columnStyles:{0:{cellWidth:50,fontStyle:'bold',fillColor:[245,242,236]},1:{cellWidth:90},2:{cellWidth:40}},
    theme:'grid'
  });

  y=doc.lastAutoTable.finalY+12;
  doc.setFontSize(13);doc.setFont('helvetica','bold');doc.setTextColor(0,0,0);
  doc.text('Detalle de la transacción',14,y);y+=8;
  doc.autoTable({startY:y,
    body:[
      ['Puntos descontados','-'+exch.pointsCost+' pts'],
      ['Fecha',fecha],
      ['Hora',hora],
      ['Folio',exch.folio],
    ],
    styles:{fontSize:10,cellPadding:4},
    columnStyles:{0:{cellWidth:80,fontStyle:'bold',fillColor:[245,242,236]},1:{cellWidth:100}},
    theme:'grid',
    didParseCell:data=>{if(data.column.index===1&&data.row.index===0)data.cell.styles.textColor=[155,35,53];}
  });

  // Firmas
  y=doc.lastAutoTable.finalY+20;
  doc.setDrawColor(200,200,200);
  doc.line(14,y,96,y);doc.line(114,y,196,y);
  doc.setFontSize(9);doc.setTextColor(150,150,150);
  doc.text('Firma del cedente',55,y+6,{align:'center'});
  doc.text('Firma del receptor',155,y+6,{align:'center'});

  // Footer
  const n=doc.internal.getNumberOfPages();
  for(let i=1;i<=n;i++){
    doc.setPage(i);doc.setFontSize(8);doc.setTextColor(150,150,150);
    doc.text(`Círculo Cero 2GM1 — Comprobante válido con folio ${exch.folio}`,105,290,{align:'center'});
  }

  doc.save(`trueque_${exch.folio}.pdf`);
}
/* ══════════════════════════════════════════
   ADMIN TRUEQUES
   ══════════════════════════════════════════ */
function switchTruequeTab(tab, el){
  truequeTabState = tab;
  document.querySelectorAll('#adm-trueques .review-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderAdmTrueques(window._allExchanges||[]);
}

function renderAdmTrueques(exchanges){
  window._allExchanges = exchanges;

  const pending = exchanges.filter(e => e.status !== 'completed');
  const completed = exchanges.filter(e => e.status === 'completed');
  const filtered = truequeTabState === 'pending' ? pending : completed;

  // Actualizar badges
  const count = pending.length;
  ['adm-badge-trueques','adm-badge-trueques-mob'].forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.textContent = count;
    el.style.display = count > 0 ? 'inline' : 'none';
  });
  document.getElementById('tab-count-trueques').textContent = pending.length;
  document.getElementById('tab-count-trueques').style.display = pending.length ? 'inline' : 'none';

  const el = document.getElementById('trueques-list');
  if(!filtered.length){
    el.innerHTML = `<div class="empty">${truequeTabState==='pending'?'No hay trueques pendientes de entrega física':'No hay trueques completados aún'}</div>`;
    return;
  }

  const catColors={A:'var(--green-l)',B:'var(--blue-l)',C:'var(--amber-l)',S:'var(--purple-l)'};
  const catText={A:'var(--green-d)',B:'var(--blue)',C:'var(--amber)',S:'var(--purple)'};

  el.innerHTML = filtered.map(e => {
    const fecha = new Date(e.ts).toLocaleDateString('es-MX',{day:'2-digit',month:'long',year:'numeric'});
    const hora  = new Date(e.ts).toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'});
    const photoHtml = e.productPhoto
      ? `<img src="${e.productPhoto}" style="width:64px;height:64px;object-fit:cover;border-radius:var(--r);border:1px solid var(--border);flex-shrink:0">`
      : `<div style="width:64px;height:64px;border-radius:var(--r);background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:24px;border:1px solid var(--border);flex-shrink:0">${TYPE_ICONS[e.productType]||'📦'}</div>`;

    const actionsHtml = e.status !== 'completed' ? `
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="btn-approve" onclick="confirmTrueque('${e.id}')" style="flex:1">
          ✅ Confirmar entrega física
        </button>
        <button onclick="deleteTrueque('${e.id}')" style="background:transparent;border:1px solid var(--red);color:var(--red);padding:6px 12px;border-radius:var(--r);cursor:pointer" title="Eliminar registro">🗑️</button>
      </div>` :
      `<div style="margin-top:8px;display:flex;flex-direction:column;gap:4px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="status-approved">✅ Entrega confirmada · ${e.completedTs ? new Date(e.completedTs).toLocaleDateString('es-MX',{day:'2-digit',month:'short',year:'numeric'}) : ''}</span>
          <button onclick="deleteTrueque('${e.id}')" style="background:transparent;border:none;color:var(--red);cursor:pointer;font-size:14px" title="Eliminar registro">🗑️</button>
        </div>
        <span style="font-size:11px;color:var(--hint)">Confirmó: <strong style="color:var(--text)">${e.confirmedBy||'Admin'}</strong></span>
      </div>`;

    return `<div class="product-card">
      <div style="display:flex;gap:12px;padding:.75rem;align-items:flex-start">
        ${photoHtml}
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:500;margin-bottom:4px">${e.productTitle}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px">
            <span style="font-size:10px;padding:1px 8px;border-radius:99px;font-weight:500;background:${catColors[e.productCategory]};color:${catText[e.productCategory]}">Cat. ${e.productCategory}</span>
            <span style="font-size:11px;color:var(--muted)">${TYPE_ICONS[e.productType]||''} ${e.productType}</span>
            <span style="font-size:11px;color:var(--hint)">Folio: ${e.folio}</span>
          </div>
          <div style="font-size:12px;border:1px solid var(--border);border-radius:var(--r);overflow:hidden">
            <div style="display:flex;justify-content:space-between;padding:5px 10px;border-bottom:1px solid var(--border);background:var(--bg)">
              <span style="color:var(--muted);font-size:11px">Cedente</span>
              <span style="font-size:12px;font-weight:500">${e.ownerName.split(' ').slice(0,2).join(' ')} · ${e.ownerTeam}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:5px 10px;border-bottom:1px solid var(--border)">
              <span style="color:var(--muted);font-size:11px">Receptor</span>
              <span style="font-size:12px;font-weight:500">${e.buyerName.split(' ').slice(0,2).join(' ')} · ${e.buyerTeam}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:5px 10px">
              <span style="color:var(--muted);font-size:11px">Fecha digital</span>
              <span style="font-size:12px">${fecha} ${hora}</span>
            </div>
          </div>
          ${actionsHtml}
        </div>
      </div>
    </div>`;
  }).join('');
}

async function deleteTrueque(exchangeId){
  const confirmar = confirm('¿⚠️ ESTÁS SEGURO?\n\nEste registro se borrará de forma permanente.\n\nSi es un trueque pendiente, se reembolsarán los puntos al alumno y el artículo regresará al tablón público. Esta acción es irreversible.');
  if(!confirmar) return;

  const exch = (window._allExchanges||[]).find(e => e.id === exchangeId);

  try{
    // Lógica de reembolso si no estaba completado
    if (exch && exch.status !== 'completed') {
      const refundDelta = exch.pointsCost || 0;
      if (refundDelta > 0 && exch.buyerBoleta) {
        await supaClient.from('movements').insert([{
          name: exch.buyerName, boleta: exch.buyerBoleta, grade: exch.productCategory || 'S', 
          sign: '+', delta: refundDelta, date: new Date().toISOString().slice(0,10), 
          desc: `Reembolso por cancelación de trueque: ${exch.productTitle}`, ts: Date.now(), auto: true
        }]);
      }
      if (exch.productId) {
        await supaClient.from('products').update({
          status: 'approved', tradedBy: null, tradedByBoleta: null, tradedTs: null
        }).eq('id', exch.productId);
      }
    }

    await supaClient.from('exchanges').delete().eq('id', exchangeId);
    alert('Trueque eliminado y procesado existosamente.');
  }catch(e){
    alert('Hubo un error borrando el registro de red.');
    console.error(e);
  }
}

async function confirmTrueque(exchangeId){
  const confirmar = confirm('¿Confirmas que los alumnos ya realizaron el intercambio físico?\n\nEsto eliminará el artículo del tablón y sus fotos.');
  if(!confirmar) return;

  const exch = (window._allExchanges||[]).find(e => e.id === exchangeId);

  try{
    const { data: { user } } = await supaClient.auth.getUser();
    const adminEmail = user && user.email ? user.email : 'Admin desconocido';

    // 1. Marcar exchange como completado
    await supaClient.from('exchanges').update({ status: 'completed', completedTs: Date.now(), confirmedBy: adminEmail }).eq('id', exchangeId);

    // 2. Eliminar el producto
    if(exch && exch.productId){
      await supaClient.from('products').delete().eq('id', exch.productId);
    }

    // 3. Eliminar fotos
    if(exch && exch.productId){
      const prod = allProducts.find(p => p.id === exch.productId);
      if(prod && prod.photos && prod.photos.length){
        for(const url of prod.photos){
          try{
            const pathUrl = new URL(url);
            const parts = pathUrl.pathname.split('/products/');
            if(parts.length > 1){
              await supaClient.storage.from('products').remove([parts[1]]);
            }
          }catch(e){ console.warn('No se pudo eliminar foto:', e.message); }
        }
      }
    }

    alert('✅ Entrega confirmada. El artículo fue eliminado del tablón.');

  }catch(e){
    alert('Error al confirmar: ' + e.message);
    console.error(e);
  }
}
/*══ INIT ══ */
initTheme();
initSupabase();
subscribeToProducts(()=>{renderPublic();});
subscribeToData(()=>{renderPublic();});