"use strict";
/* ---------- DATA ---------- */
// avg = average minutes per person in that section
const DEPTS = {
  HOS: { icon: "🏥", name: "Hospital", avg: 6, branches: ["General Physician", "Cardiologist", "Neurologist", "Orthopedic", "Pediatrician", "Gynecologist", "Dermatologist", "ENT", "Eye (Ophthalmology)", "Dentist", "Psychiatrist", "Pharmacy", "Lab / Blood Test", "X-Ray / Scan"] },
  PAS: { icon: "🛂", name: "Passport Office", avg: 12, branches: ["Fresh Passport", "Passport Renewal", "Police Verification", "Document Verification", "Lost / Damaged Passport"] },
  RTO: { icon: "🚗", name: "RTO / Transport", avg: 10, branches: ["Learner Licence", "Driving Licence", "Vehicle Registration", "Licence Renewal", "Fitness Certificate", "Ownership Transfer"] },
  REV: { icon: "📜", name: "Revenue / Tahsildar", avg: 9, branches: ["Income Certificate", "Caste Certificate", "Residence Certificate", "Land Records", "Birth Certificate", "Death Certificate"] },
  POL: { icon: "👮", name: "Police Station", avg: 15, branches: ["File Complaint (FIR)", "Passport Verification", "Character Certificate", "Lost Property Report", "Cyber Crime Complaint"] },
  ELE: { icon: "💡", name: "Electricity Board", avg: 8, branches: ["New Connection", "Bill Payment", "Name Change", "Load Change", "Complaint / Fault"] },
  MUN: { icon: "🏛️", name: "Municipal Office", avg: 8, branches: ["Property Tax", "Water Connection", "Trade Licence", "Building Permission", "Sanitation Complaint"] },
  AAD: { icon: "🆔", name: "Aadhaar / ID Centre", avg: 10, branches: ["New Aadhaar", "Aadhaar Update", "Voter ID", "PAN Card", "Ration Card"] },
  BNK: { icon: "🏦", name: "Bank / Pension", avg: 9, branches: ["Account Opening", "Pension Services", "Loan Enquiry", "Cash / Cheque", "Passbook Update"] }
};
const STATES = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman & Nicobar","Chandigarh","Dadra & Nagar Haveli and Daman & Diu","Delhi","Jammu & Kashmir","Ladakh","Lakshadweep","Puducherry"];
// Sample districts for suggestions (any district can still be typed)
const DISTRICTS = {
  "Gujarat":["Rajkot","Ahmedabad","Surat","Vadodara","Bhavnagar","Jamnagar","Gandhinagar"],
  "Andhra Pradesh":["Visakhapatnam","Guntur","Krishna","Chittoor","Kurnool","Nellore","Anantapur"],
  "Telangana":["Hyderabad","Warangal","Karimnagar","Nizamabad","Khammam"],
  "Karnataka":["Bengaluru Urban","Mysuru","Belagavi","Dharwad","Mangaluru"],
  "Tamil Nadu":["Chennai","Coimbatore","Madurai","Salem","Tiruchirappalli"],
  "Maharashtra":["Mumbai","Pune","Nagpur","Nashik","Thane"],
  "Delhi":["New Delhi","North Delhi","South Delhi","East Delhi","West Delhi"],
  "Uttar Pradesh":["Lucknow","Kanpur","Varanasi","Agra","Prayagraj"],
  "Rajasthan":["Jaipur","Jodhpur","Udaipur","Kota","Ajmer"],
  "Kerala":["Thiruvananthapuram","Kochi","Kozhikode","Thrissur"],
  "West Bengal":["Kolkata","Howrah","Darjeeling","Asansol"]
};

/* ---------- TRANSLATIONS (UI labels) ---------- */
const T = {
  en: { login:"Login", home:"Home", token:"Get Token", track:"Track Token", staff:"Staff", mobile:"Mobile number", sendOtp:"Send OTP", otp:"Enter OTP", verify:"Verify", close:"Close", heroTitle:"Skip the line. Come when it is your turn.", heroSub:"Pick a service, take a token from home, and we tell you when to leave.", chooseDept:"Choose a department", tapDept:"Tap a department to see its sections.", steps:"How it works", s1:"Login with your mobile number.", s2:"Choose department, section and office.", s3:"Take your token and see the waiting time.", s4:"Relax. You get an alert when your turn is near.", dept:"Department", branch:"Section", state:"State / UT", district:"District", office:"Office", name:"Full name", getToken:"Get my token", tokenNo:"Token number", helpline:"Helpline", privacy:"Your mobile number is used only to send token alerts.", ahead:"People ahead", wait:"Wait (min)", serving:"Now serving", leaveAt:"Leave home at", logout:"Logout", pickSec:"Pick a section to get a token" },
  hi: { login:"लॉगिन", home:"होम", token:"टोकन लें", track:"टोकन देखें", staff:"स्टाफ", mobile:"मोबाइल नंबर", sendOtp:"OTP भेजें", otp:"OTP दर्ज करें", verify:"सत्यापित करें", close:"बंद करें", heroTitle:"लाइन छोड़ें। अपनी बारी पर आएं।", heroSub:"सेवा चुनें, घर से टोकन लें, हम बताएंगे कब निकलना है।", chooseDept:"विभाग चुनें", tapDept:"विभाग पर टैप करें और उसके अनुभाग देखें।", steps:"यह कैसे काम करता है", s1:"मोबाइल नंबर से लॉगिन करें।", s2:"विभाग, अनुभाग और कार्यालय चुनें।", s3:"टोकन लें और प्रतीक्षा समय देखें।", s4:"आराम करें। बारी पास आने पर अलर्ट मिलेगा।", dept:"विभाग", branch:"अनुभाग", state:"राज्य / केंद्र शासित", district:"जिला", office:"कार्यालय", name:"पूरा नाम", getToken:"मेरा टोकन लें", tokenNo:"टोकन नंबर", helpline:"हेल्पलाइन", privacy:"आपका मोबाइल नंबर केवल टोकन अलर्ट के लिए उपयोग होता है।", ahead:"आगे लोग", wait:"प्रतीक्षा (मिनट)", serving:"अभी चल रहा", leaveAt:"घर से निकलें", logout:"लॉगआउट", pickSec:"टोकन के लिए अनुभाग चुनें" },
  te: { login:"లాగిన్", home:"హోమ్", token:"టోకెన్ తీసుకోండి", track:"టోకెన్ ట్రాక్", staff:"సిబ్బంది", mobile:"మొబైల్ నంబర్", sendOtp:"OTP పంపండి", otp:"OTP నమోదు చేయండి", verify:"ధృవీకరించండి", close:"మూసివేయండి", heroTitle:"క్యూ వద్దు. మీ వంతు వచ్చినప్పుడే రండి.", heroSub:"సేవను ఎంచుకోండి, ఇంటి నుంచే టోకెన్ తీసుకోండి, ఎప్పుడు బయలుదేరాలో మేము చెబుతాము.", chooseDept:"శాఖను ఎంచుకోండి", tapDept:"శాఖను నొక్కి విభాగాలను చూడండి.", steps:"ఇది ఎలా పనిచేస్తుంది", s1:"మొబైల్ నంబర్‌తో లాగిన్ అవ్వండి.", s2:"శాఖ, విభాగం, కార్యాలయం ఎంచుకోండి.", s3:"టోకెన్ తీసుకుని నిరీక్షణ సమయం చూడండి.", s4:"విశ్రాంతి తీసుకోండి. మీ వంతు దగ్గరపడితే అలర్ట్ వస్తుంది.", dept:"శాఖ", branch:"విభాగం", state:"రాష్ట్రం", district:"జిల్లా", office:"కార్యాలయం", name:"పూర్తి పేరు", getToken:"నా టోకెన్ తీసుకోండి", tokenNo:"టోకెన్ నంబర్", helpline:"హెల్ప్‌లైన్", privacy:"మీ మొబైల్ నంబర్ టోకెన్ అలర్ట్‌ల కోసం మాత్రమే ఉపయోగిస్తారు.", ahead:"ముందున్నవారు", wait:"నిరీక్షణ (నిమి)", serving:"ప్రస్తుతం", leaveAt:"ఇంటి నుంచి బయలుదేరండి", logout:"లాగౌట్", pickSec:"టోకెన్ కోసం విభాగం ఎంచుకోండి" },
  kn: { login:"ಲಾಗಿನ್", home:"ಮುಖಪುಟ", token:"ಟೋಕನ್ ಪಡೆಯಿರಿ", track:"ಟೋಕನ್ ಟ್ರ್ಯಾಕ್", staff:"ಸಿಬ್ಬಂದಿ", mobile:"ಮೊಬೈಲ್ ಸಂಖ್ಯೆ", sendOtp:"OTP ಕಳುಹಿಸಿ", otp:"OTP ನಮೂದಿಸಿ", verify:"ಪರಿಶೀಲಿಸಿ", close:"ಮುಚ್ಚಿ", heroTitle:"ಸಾಲು ಬೇಡ. ನಿಮ್ಮ ಸರದಿಗೆ ಬನ್ನಿ.", heroSub:"ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ, ಮನೆಯಿಂದಲೇ ಟೋಕನ್ ಪಡೆಯಿರಿ.", chooseDept:"ಇಲಾಖೆ ಆಯ್ಕೆಮಾಡಿ", tapDept:"ಇಲಾಖೆಯನ್ನು ಒತ್ತಿ ವಿಭಾಗಗಳನ್ನು ನೋಡಿ.", steps:"ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ", s1:"ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಿಂದ ಲಾಗಿನ್ ಮಾಡಿ.", s2:"ಇಲಾಖೆ, ವಿಭಾಗ, ಕಚೇರಿ ಆಯ್ಕೆಮಾಡಿ.", s3:"ಟೋಕನ್ ಪಡೆದು ಕಾಯುವ ಸಮಯ ನೋಡಿ.", s4:"ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ. ಸರದಿ ಹತ್ತಿರವಾದಾಗ ಎಚ್ಚರಿಕೆ ಬರುತ್ತದೆ.", dept:"ಇಲಾಖೆ", branch:"ವಿಭಾಗ", state:"ರಾಜ್ಯ", district:"ಜಿಲ್ಲೆ", office:"ಕಚೇರಿ", name:"ಪೂರ್ಣ ಹೆಸರು", getToken:"ನನ್ನ ಟೋಕನ್ ಪಡೆಯಿರಿ", tokenNo:"ಟೋಕನ್ ಸಂಖ್ಯೆ", helpline:"ಸಹಾಯವಾಣಿ", privacy:"ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ಟೋಕನ್ ಎಚ್ಚರಿಕೆಗೆ ಮಾತ್ರ ಬಳಸಲಾಗುತ್ತದೆ.", ahead:"ಮುಂದಿರುವವರು", wait:"ಕಾಯುವಿಕೆ (ನಿಮಿ)", serving:"ಈಗ ಕರೆಯುತ್ತಿರುವುದು", leaveAt:"ಮನೆಯಿಂದ ಹೊರಡಿ", logout:"ಲಾಗೌಟ್", pickSec:"ಟೋಕನ್‌ಗಾಗಿ ವಿಭಾಗ ಆಯ್ಕೆಮಾಡಿ" },
  ta: { login:"உள்நுழை", home:"முகப்பு", token:"டோக்கன் பெறு", track:"டோக்கன் நிலை", staff:"ஊழியர்", mobile:"மொபைல் எண்", sendOtp:"OTP அனுப்பு", otp:"OTP உள்ளிடுக", verify:"சரிபார்", close:"மூடு", heroTitle:"வரிசை வேண்டாம். உங்கள் முறைக்கு வாருங்கள்.", heroSub:"சேவையைத் தேர்ந்தெடுத்து, வீட்டிலிருந்தே டோக்கன் பெறுங்கள்.", chooseDept:"துறையைத் தேர்ந்தெடுக்கவும்", tapDept:"துறையைத் தொட்டு பிரிவுகளைப் பாருங்கள்.", steps:"இது எப்படி செயல்படுகிறது", s1:"மொபைல் எண்ணுடன் உள்நுழையவும்.", s2:"துறை, பிரிவு, அலுவலகம் தேர்வு செய்யவும்.", s3:"டோக்கன் பெற்று காத்திருப்பு நேரத்தைப் பாருங்கள்.", s4:"ஓய்வெடுங்கள். உங்கள் முறை நெருங்கும்போது எச்சரிக்கை வரும்.", dept:"துறை", branch:"பிரிவு", state:"மாநிலம்", district:"மாவட்டம்", office:"அலுவலகம்", name:"முழு பெயர்", getToken:"என் டோக்கன் பெறு", tokenNo:"டோக்கன் எண்", helpline:"உதவி எண்", privacy:"உங்கள் மொபைல் எண் டோக்கன் எச்சரிக்கைகளுக்கு மட்டுமே பயன்படும்.", ahead:"முன்னால் உள்ளவர்கள்", wait:"காத்திருப்பு (நிமி)", serving:"இப்போது அழைப்பு", leaveAt:"வீட்டிலிருந்து புறப்படுங்கள்", logout:"வெளியேறு", pickSec:"டோக்கனுக்கு பிரிவை தேர்வு செய்யவும்" }
};
let lang = localStorage.getItem("ql_lang") || "en";
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;

/* ---------- HELPERS ---------- */
const $ = id => document.getElementById(id);
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = n => String(n).padStart(3, "0");
function toast(m) { const e = $("toast"); e.textContent = m; e.classList.add("show"); setTimeout(() => e.classList.remove("show"), 2800); }
function clock(min) { const d = new Date(Date.now() + min * 60000); return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); }
const abbr = s => s.replace(/[^A-Za-z]/g, "").slice(0, 3).toUpperCase();

/* ---------- STATE ---------- */
let user = store.get("ql_user", null);           // { mobile }
let tokens = store.get("ql_tokens", []);         // issued tokens
let queues = store.get("ql_queues", {});         // key -> { serving, issued }

function qKey(dept, branch, office) { return [dept, branch, office].join("|"); }
function queue(dept, branch, office) {
  const k = qKey(dept, branch, office);
  if (!queues[k]) {
    const serving = 3 + Math.floor(Math.random() * 12);
    queues[k] = { serving, issued: serving + 3 + Math.floor(Math.random() * 10) };
    store.set("ql_queues", queues);
  }
  return queues[k];
}

/* ---------- LANGUAGE ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(e => { e.textContent = t(e.dataset.i18n); });
  if (user) $("userBtn").textContent = "📱 " + user.mobile.slice(-4);
  renderGrid(); renderTokenChips();
}

/* ---------- NAV ---------- */
function go(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("on", p.id === id));
  document.querySelectorAll("#tabs button").forEach(b => b.classList.toggle("on", b.dataset.go === id));
  if (id === "staff") renderBoard();
  window.scrollTo({ top: 0 });
}
document.querySelectorAll("#tabs button").forEach(b => b.onclick = () => go(b.dataset.go));

/* ---------- HOME: departments + sub-branches ---------- */
let openDept = null;
function renderGrid() {
  $("deptGrid").innerHTML = Object.entries(DEPTS).map(([k, d]) =>
    `<button class="dept ${openDept === k ? "on" : ""}" data-d="${k}"><span aria-hidden="true">${d.icon}</span>${esc(d.name)}</button>`).join("");
  document.querySelectorAll(".dept").forEach(b => b.onclick = () => { openDept = openDept === b.dataset.d ? null : b.dataset.d; renderGrid(); renderBranches(); });
  renderBranches();
}
function renderBranches() {
  const p = $("branchPanel");
  if (!openDept) { p.hidden = true; return; }
  const d = DEPTS[openDept];
  p.hidden = false;
  $("branchTitle").textContent = d.icon + " " + d.name + " — " + t("pickSec");
  $("branchList").innerHTML = d.branches.map((b, i) => `<button data-i="${i}">${esc(b)}</button>`).join("");
  $("branchList").querySelectorAll("button").forEach(b => b.onclick = () => {
    $("fDept").value = openDept; fillBranches(); $("fBranch").value = b.dataset.i; updatePreview(); go("token");
  });
}

/* ---------- LOGIN ---------- */
const box = $("loginBox");
$("userBtn").onclick = () => {
  if (user) { if (confirm(t("logout") + "?")) { user = null; store.set("ql_user", null); $("userBtn").textContent = t("login"); } return; }
  box.showModal();
};
$("closeLogin").onclick = () => box.close();
$("sendOtp").onclick = () => {
  const m = $("lMobile").value.trim();
  if (!/^[6-9]\d{9}$/.test(m)) { $("loginMsg").textContent = "Enter a valid 10-digit mobile number."; return; }
  $("loginMsg").textContent = ""; $("otpRow").hidden = false; $("lOtp").focus();
  toast("Demo OTP: 1234");
};
$("verifyOtp").onclick = () => {
  if ($("lOtp").value.trim() !== "1234") { $("loginMsg").textContent = "Wrong OTP. Please try again."; return; }
  user = { mobile: $("lMobile").value.trim() }; store.set("ql_user", user);
  box.close(); $("userBtn").textContent = "📱 " + user.mobile.slice(-4);
  $("fMobile").value = user.mobile; toast("Login successful");
};

/* ---------- GET TOKEN ---------- */
function fillSelect(el, items) { el.innerHTML = items.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join(""); }
function fillBranches() { fillSelect($("fBranch"), DEPTS[$("fDept").value].branches.map((b, i) => [i, b])); }
function fillOffices() {
  const d = DEPTS[$("fDept").value], dist = $("fDistrict").value.trim() || $("fState").value;
  fillSelect($("fOffice"), [[dist + " " + d.name + " — Main Office", dist + " " + d.name + " — Main Office"], [dist + " " + d.name + " — Sub Office", dist + " " + d.name + " — Sub Office"]]);
}
function updatePreview() {
  const dk = $("fDept").value, bi = $("fBranch").value, o = $("fOffice").value, p = $("preview");
  if (!dk || bi === "" || !o) { p.hidden = true; return; }
  const q = queue(dk, bi, o), d = DEPTS[dk], ahead = q.issued - q.serving, w = ahead * d.avg;
  p.hidden = false;
  p.innerHTML = `<b>${esc(d.branches[bi])}</b><div class="stats"><div><b>${q.serving}</b>${t("serving")}</div><div><b>${ahead}</b>${t("ahead")}</div><div><b>${w}</b>${t("wait")}</div></div>`;
}
fillSelect($("fDept"), Object.entries(DEPTS).map(([k, d]) => [k, d.icon + " " + d.name]));
fillSelect($("fState"), STATES.map(s => [s, s]));
$("fState").value = "Gujarat";
function refreshDistricts() { $("distList").innerHTML = (DISTRICTS[$("fState").value] || []).map(d => `<option value="${esc(d)}">`).join(""); }
fillBranches(); refreshDistricts(); fillOffices();
$("fDept").onchange = () => { fillBranches(); fillOffices(); updatePreview(); };
$("fBranch").onchange = updatePreview;
$("fState").onchange = () => { $("fDistrict").value = ""; refreshDistricts(); fillOffices(); updatePreview(); };
$("fDistrict").oninput = () => { fillOffices(); updatePreview(); };
$("fOffice").onchange = updatePreview;
updatePreview();

$("tokenForm").onsubmit = e => {
  e.preventDefault();
  const m = $("formMsg"); m.className = "msg"; m.textContent = "";
  const name = $("fName").value.trim(), mobile = $("fMobile").value.trim();
  if (!user) { m.textContent = "Please login first."; box.showModal(); return; }
  if (!$("fDistrict").value.trim()) { m.textContent = "Please enter your district."; return; }
  if (name.length < 2) { m.textContent = "Please enter your full name."; return; }
  if (!/^[6-9]\d{9}$/.test(mobile)) { m.textContent = "Enter a valid 10-digit mobile number."; return; }
  const dk = $("fDept").value, bi = +$("fBranch").value, o = $("fOffice").value, d = DEPTS[dk];
  if (tokens.some(x => x.dept === dk && x.branch === bi && x.office === o && x.mobile === mobile && x.num > queue(dk, bi, o).serving)) {
    m.textContent = "You already have an active token for this section."; return;
  }
  const q = queue(dk, bi, o); q.issued++;
  const tk = { id: dk + "-" + abbr(d.branches[bi]) + "-" + pad(q.issued), dept: dk, branch: bi, office: o, num: q.issued, name, mobile, at: Date.now() };
  tokens.push(tk); store.set("ql_tokens", tokens); store.set("ql_queues", queues);
  showTicket($("ticket"), tk); $("ticket").hidden = false; renderTokenChips(); updatePreview();
  m.className = "msg ok"; m.textContent = "Token created. Save this number: " + tk.id;
};

/* ---------- TICKET + TRACK ---------- */
function ticketHTML(tk) {
  const d = DEPTS[tk.dept], q = queue(tk.dept, tk.branch, tk.office), ahead = Math.max(0, tk.num - q.serving - 1), wait = ahead * d.avg;
  const done = tk.num <= q.serving, now = tk.num === q.serving + 1;
  const pct = done ? 100 : Math.min(100, Math.round(100 * (1 - ahead / Math.max(ahead + 1, 12))));
  let alert = "";
  if (done) alert = `<div class="alert">✅ Your turn has passed or is being served. Please go to the counter.</div>`;
  else if (now) alert = `<div class="alert">🔔 You are next! Please go to the counter now.</div>`;
  else if (ahead <= 3) alert = `<div class="alert">🔔 Your turn is near. Please reach the office now.</div>`;
  return `<div class="no">${esc(tk.id)}</div>
    <div><b>${esc(d.icon + " " + d.name)}</b> — ${esc(d.branches[tk.branch])}</div>
    <div>${esc(tk.office)}</div><div>${esc(tk.name)}</div>
    <div class="stats"><div><b>${q.serving}</b>${t("serving")}</div><div><b>${done ? 0 : ahead}</b>${t("ahead")}</div><div><b>${done ? 0 : wait}</b>${t("wait")}</div></div>
    <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
    <p>${done ? "" : t("leaveAt") + ": <b>" + clock(Math.max(0, wait - 15)) + "</b> (office turn about " + clock(wait) + ")"}</p>${alert}`;
}
function showTicket(el, tk) { el.innerHTML = ticketHTML(tk); }
function renderTokenChips() {
  const mine = tokens.filter(x => !user || x.mobile === user.mobile).slice(-5).reverse();
  $("myTokens").innerHTML = mine.map(x => `<button data-id="${esc(x.id)}">${esc(x.id)}</button>`).join("");
  $("myTokens").querySelectorAll("button").forEach(b => b.onclick = () => { $("tIn").value = b.dataset.id; trackNow(); });
}
function trackNow() {
  const id = $("tIn").value.trim().toUpperCase(), m = $("tMsg");
  const tk = tokens.find(x => x.id === id);
  if (!tk) { m.textContent = "Token not found. Check the number and try again."; $("tView").hidden = true; return; }
  m.textContent = ""; showTicket($("tView"), tk); $("tView").hidden = false;
}
$("tBtn").onclick = trackNow;
$("tIn").onkeydown = e => { if (e.key === "Enter") trackNow(); };

/* ---------- STAFF ---------- */
$("pinBtn").onclick = () => {
  if ($("pin").value !== "4321") { $("pinMsg").textContent = "Wrong PIN."; return; }
  $("staffLogin").hidden = true; $("staffView").hidden = false;
  fillSelect($("sDept"), Object.entries(DEPTS).map(([k, d]) => [k, d.icon + " " + d.name]));
  sBranches(); renderBoard();
};
function sBranches() { fillSelect($("sBranch"), DEPTS[$("sDept").value].branches.map((b, i) => [i, b])); }
$("sDept").onchange = () => { sBranches(); renderBoard(); };
$("sBranch").onchange = renderBoard;
function renderBoard() {
  if ($("staffView").hidden) return;
  const dk = $("sDept").value, bi = $("sBranch").value;
  const keys = Object.keys(queues).filter(k => k.startsWith(dk + "|" + bi + "|"));
  const list = tokens.filter(x => x.dept === dk && String(x.branch) === bi);
  let h = keys.length ? "" : "<p>No queue yet for this section. A queue starts when a citizen opens it.</p>";
  keys.forEach(k => {
    const q = queues[k], off = k.split("|")[2];
    h += `<div class="srow"><span>${esc(off)}<br>Serving <b>${q.serving}</b> / Issued <b>${q.issued}</b></span><button data-k="${esc(k)}" class="primary">Call next</button></div>`;
  });
  h += `<h3>Tokens (${list.length})</h3>` + (list.map(x => `<div class="srow"><span>${esc(x.id)} — ${esc(x.name)}</span><span>${x.num <= (queues[qKey(x.dept, x.branch, x.office)] || { serving: 0 }).serving ? "Done" : "Waiting"}</span></div>`).join("") || "<p>None.</p>");
  $("sBoard").innerHTML = h;
  $("sBoard").querySelectorAll("button[data-k]").forEach(b => b.onclick = () => {
    const q = queues[b.dataset.k]; if (q.serving < q.issued) q.serving++; store.set("ql_queues", queues); renderBoard(); toast("Next token called");
  });
}

/* ---------- LIVE QUEUE SIMULATION (demo) ---------- */
setInterval(() => {
  Object.values(queues).forEach(q => { if (q.serving < q.issued && Math.random() < 0.5) q.serving++; });
  store.set("ql_queues", queues);
  if ($("tView") && !$("tView").hidden) trackNow();
  if ($("ticket") && !$("ticket").hidden) { const id = ($("ticket").querySelector(".no") || {}).textContent, tk = tokens.find(x => x.id === id); if (tk) showTicket($("ticket"), tk); }
  updatePreview(); renderBoard();
}, 10000);

/* ---------- HELP CHAT ---------- */
const FAQ = {
  "How do I get a token?": "Login, open Get Token, choose department, section and office, then press Get my token.",
  "When should I leave home?": "Open Track Token. It shows the time to leave and alerts you when your turn is near.",
  "Which documents do I need?": "Carry your Aadhaar or any photo ID and documents for the service. Call 1800-123-4567 for details.",
  "I missed my turn": "Go to the counter and show your token. Staff can call you again."
};
$("chatBtn").onclick = () => { const c = $("chatBox"); c.hidden = !c.hidden; };
$("chatQs").innerHTML = Object.keys(FAQ).map(q => `<button>${esc(q)}</button>`).join("");
$("chatQs").querySelectorAll("button").forEach(b => b.onclick = () => {
  $("chatLog").innerHTML += `<p><b>${esc(b.textContent)}</b></p><p>${esc(FAQ[b.textContent])}</p>`;
  $("chatLog").scrollTop = 9999;
});

/* ---------- TEXT SIZE + LANGUAGE INIT ---------- */
let big = store.get("ql_big", false);
function applySize() { document.documentElement.style.setProperty("--fs", big ? "20px" : "17px"); }
$("fontBtn").onclick = () => { big = !big; store.set("ql_big", big); applySize(); };
$("lang").value = lang;
$("lang").onchange = e => { lang = e.target.value; localStorage.setItem("ql_lang", lang); applyLang(); };
if (user) $("fMobile").value = user.mobile;
applySize(); applyLang();
