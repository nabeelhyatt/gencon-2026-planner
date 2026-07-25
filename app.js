const KEYS = { picked:"gc26_picked", notes:"gc26_notes", tab:"gc26_tab" };
function _store(){ try { return window.localStorage; } catch(e){ return null; } }
const _s = _store();
const picked = JSON.parse((_s && _s.getItem(KEYS.picked)) || "{}");
const notes = JSON.parse((_s && _s.getItem(KEYS.notes)) || "{}");

const TABS = [
  {id:"wed", label:"Wed · Trade Day"},
  {id:"thu", label:"Thu"},
  {id:"fri", label:"Fri"},
  {id:"sat", label:"Sat"},
  {id:"sun", label:"Sun"},
  {id:"booths", label:"Booths"},
  {id:"games", label:"Games"},
  {id:"rtk", label:"Race to Kepler"},
  {id:"ttl", label:"TTL"}
];

const STATUS = {
  open:{icon:"✅",cls:"open",label:"Open for 3"},
  low:{icon:"⚠️",cls:"low",label:"Low / waitlist"},
  verify:{icon:"🔎",cls:"verify",label:"Verify at reg"},
  walkup:{icon:"🚶",cls:"verify",label:"Walk-up booth"}
};

function evId(day, blockIdx, evIdx){ return `${day}-${blockIdx}-${evIdx}`; }

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html!=null) e.innerHTML = html;
  return e;
}

function mdLinks(s){ return s.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'); }

function card(ev, id, day){
  const isChecked = Object.prototype.hasOwnProperty.call(picked,id) ? !!picked[id] : !!ev.booked;
  const art = el("article","event "+ev.type + (isChecked?" picked":""));
  const top = el("div","ev-top");
  top.appendChild(el("span","ev-time", ev.time + (ev.dur?` · ${ev.dur}`:"")));
  const badges = el("div","badges");
  let st = STATUS[ev.status] || STATUS.verify;
  if(ev.type==="crawl") st = STATUS.walkup;
  if(ev.type==="retail" && ev.src && ev.src.includes("exhibithallmap")) st = STATUS.walkup;
  badges.appendChild(el("span","status "+st.cls, st.icon+" "+st.label));
  if(ev.prio) badges.appendChild(el("span","prio "+ev.prio, ev.prio));
  top.appendChild(badges);
  art.appendChild(top);

  const titleHtml = ev.src
    ? `<a href="${ev.src}" target="_blank" rel="noopener">${ev.title}</a>`
    : ev.title;
  art.appendChild(el("h3","ev-title", titleHtml));

  const locParts = [];
  locParts.push(ev.loc + (ev.booth?` <span class="booth">Booth ${ev.booth}</span>`:""));
  if(ev.seats) locParts.push(`<span style="color:${ev.booked?"var(--emerald)":"var(--gold)"}">${ev.seats}</span>`);
  art.appendChild(el("p","ev-loc", locParts.join(" · ")));

  if(ev.desc) art.appendChild(el("p","ev-desc", mdLinks(ev.desc)));

  const foot = el("div","ev-foot");
  foot.appendChild(el("span","cost "+(ev.cost==="Free"?"free":""), ev.cost || ""));
  const pick = el("label","pick"+(ev.booked?" booked":""));
  const cb = document.createElement("input");
  cb.type="checkbox"; cb.checked=isChecked;
  cb.addEventListener("change",()=>{ picked[id]=cb.checked; art.classList.toggle("picked",cb.checked); save(); });
  pick.appendChild(cb);
  pick.appendChild(document.createTextNode(ev.booked?"Booked":"Primary pick"));
  foot.appendChild(pick);
  art.appendChild(foot);

  const ta = document.createElement("textarea");
  ta.className="note"; ta.placeholder="Notes…";
  ta.value = notes[id] || "";
  ta.addEventListener("input",()=>{ notes[id]=ta.value; save(); });
  art.appendChild(ta);
  return art;
}

function renderDay(dayKey){
  const d = SCHEDULE[dayKey];
  const sec = el("section","day "+(dayKey));
  const head = el("div","day-head");
  head.appendChild(el("h2","",d.label));
  head.appendChild(el("p","lede",d.lede));
  sec.appendChild(head);
  d.blocks.forEach((b,bi)=>{
    const blk = el("div","time-block");
    blk.appendChild(el("div","time-label", b.time));
    const slot = el("div","slot");
    b.events.forEach((ev,ei)=>{
      const id = evId(dayKey,bi,ei);
      slot.appendChild(card(ev,id,dayKey));
    });
    blk.appendChild(slot);
    sec.appendChild(blk);
  });
  return sec;
}

function table(headers, rows, renderRow){
  const t = el("table","dt");
  const thead = el("thead"); const tr=el("tr");
  headers.forEach(h=>tr.appendChild(el("th","",h)));
  thead.appendChild(tr); t.appendChild(thead);
  const tb = el("tbody");
  rows.forEach(r=>tb.appendChild(renderRow(r)));
  t.appendChild(tb);
  return t;
}

function boothNum(s){
  const m = String(s).match(/(\d+)/);
  return m ? parseInt(m[1],10) : Infinity;
}

function walkZone(n){
  if(n===Infinity) return {key:9, label:"Unconfirmed booth # — verify at map"};
  if(n<500)  return {key:1, label:"Walk Zone 1 · 100s–400s"};
  if(n<1000) return {key:2, label:"Walk Zone 2 · 500s–900s"};
  if(n<1400) return {key:3, label:"Walk Zone 3 · 1000s–1300s"};
  if(n<1800) return {key:4, label:"Walk Zone 4 · 1400s–1700s"};
  if(n<2200) return {key:5, label:"Walk Zone 5 · 1800s–2100s"};
  if(n<2600) return {key:6, label:"Walk Zone 6 · 2200s–2500s"};
  if(n<3000) return {key:7, label:"Walk Zone 7 · 2600s–2900s"};
  return {key:8, label:"Walk Zone 8 · 3000s+"};
}

function renderBooths(){
  const sec = el("section","day active");
  sec.appendChild(el("h2","", "Booths & Exhibitor Targets"));
  sec.appendChild(el("p","lead","All numbers verified from the official 2026 Exhibit Hall map. n/a = publisher not in the 2026 hall (may share space or skip the year). Never reuse 2024/2025 numbers."));
  sec.appendChild(el("div","callout","<strong>Walk-ordered, not priority-ordered.</strong> Rows are grouped into zones by booth-number range and sorted ascending within each zone, so working a zone top-to-bottom minimizes backtracking across the hall — Gen Con numbers booths roughly sequentially along the aisles. A <strong>Hall</strong> letter is shown only where we could confirm it directly from event data; everywhere else, check the hall directory board at the entrance before you start walking. Still visit HIGH/HIGHEST priority rows first within a zone."));

  const sorted = BOOTHS.slice().sort((a,b)=> boothNum(a[1]) - boothNum(b[1]));
  const zones = new Map();
  sorted.forEach(r=>{
    const z = walkZone(boothNum(r[1]));
    if(!zones.has(z.key)) zones.set(z.key, {label:z.label, rows:[]});
    zones.get(z.key).rows.push(r);
  });

  Array.from(zones.keys()).sort((a,b)=>a-b).forEach(key=>{
    const zone = zones.get(key);
    const wrap = el("div","panel");
    wrap.appendChild(el("h3","", zone.label));
    wrap.appendChild(table(
      ["Booth #","Hall","Publisher","Known For","Priority","Day"],
      zone.rows,
      r=>{
        const tr=el("tr");
        const booth = r[1]==="n/a" ? `<span class="tag na">n/a</span>` : `<span class="booth">${r[1]}</span>`;
        const hall = r[2] ? `<span class="booth">${r[2]}</span>` : `<span class="tag na">—</span>`;
        tr.innerHTML = `<td>${booth}</td><td>${hall}</td><td><a href="https://files.gencon.com/2026.exhibithallmap.pdf" target="_blank" rel="noopener">${r[0]}</a></td><td>${r[3]}</td><td><span class="prio ${r[4]}">${r[4]}</span></td><td>${r[5]}</td>`;
        return tr;
      }
    ));
    sec.appendChild(wrap);
  });
  return sec;
}

function renderGames(){
  const sec = el("section","day active");
  sec.appendChild(el("h2","","Most Anticipated Games"));
  sec.appendChild(el("p","lead","Medium/heavy weight + famous designers prioritized. Weight is a best-effort assessment from previews. Source = official 2026 map unless a preview is cited."));
  const wrap = el("div","panel");
  wrap.appendChild(table(
    ["Game","Publisher","Designer(s)","Weight","Booth #","Priority"],
    GAMES,
    r=>{
      const tr=el("tr");
      const w = r[3].toLowerCase();
      const booth = r[4]==="n/a" ? `<span class="tag na">n/a</span>` : `<span class="booth">${r[4]}</span>`;
      tr.innerHTML = `<td><a href="${r[6]}" target="_blank" rel="noopener">${r[0]}</a></td><td>${r[1]}</td><td>${r[2]}</td><td><span class="tag ${w}">${r[3]}</span></td><td>${booth}</td><td><span class="prio ${r[5]}">${r[5]}</span></td>`;
      return tr;
    }
  ));
  sec.appendChild(wrap);
  return sec;
}

function renderMissions(title, lead, missions, accent){
  const sec = el("section","day active");
  sec.appendChild(el("h2","",title));
  sec.appendChild(el("p","lead",lead));
  const grid = el("div","missions");
  missions.forEach(m=>{
    const c = el("div","mission");
    c.appendChild(el("h4","", m.title));
    const ul = el("ul");
    m.items.forEach(it=>{ const li=el("li","",mdLinks(it)); ul.appendChild(li); });
    c.appendChild(ul);
    grid.appendChild(c);
  });
  sec.appendChild(grid);
  return sec;
}

function save(){ if(!_s) return; try { _s.setItem(KEYS.picked, JSON.stringify(picked)); _s.setItem(KEYS.notes, JSON.stringify(notes)); } catch(e){} }

function switchTab(id){
  document.querySelectorAll(".tab-button").forEach(b=>b.classList.toggle("active", b.dataset.tab===id));
  const content = document.getElementById("content");
  content.innerHTML="";
  let node;
  if(SCHEDULE[id]) node = renderDay(id);
  else if(id==="booths") node = renderBooths();
  else if(id==="games") node = renderGames();
  else if(id==="rtk") node = renderMissions("Race to Kepler — Path to Print","Kepler is funded, designed, and playtested — the open question now is distributor vs. publisher vs. self-publish. Work top to bottom: get manufacturing-ready, decide your path, hit the curated pitch targets, and show up prepped.",RTK_MISSIONS,"violet");
  else if(id==="ttl") node = renderMissions("Tabletop Library — Retail Intelligence Missions","Trade Day, GAMA retailer track, library programming, store-business deep dives, wholesale targets, and FLGS merchandising recon.",TTL_MISSIONS,"emerald");
  if(node){ node.classList.add("active"); content.appendChild(node); }
  try { if(_s) _s.setItem(KEYS.tab, id); } catch(e){}
  window.scrollTo({top:0,behavior:"smooth"});
}

function init(){
  const nav = document.getElementById("tabs");
  TABS.forEach(t=>{
    const b = el("button","tab-button", `${t.label}<span class="tk"></span>`);
    b.dataset.tab=t.id;
    b.addEventListener("click",()=>switchTab(t.id));
    nav.appendChild(b);
  });
  let last = null; try { last = _s && _s.getItem(KEYS.tab); } catch(e){}
  switchTab(TABS.some(t=>t.id===last)?last:"thu");
}

document.addEventListener("DOMContentLoaded", init);
