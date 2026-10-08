const $ = s => document.querySelector(s); const $$ = s => [...document.querySelectorAll(s)];

/* =========================================================
   BACKEND CONFIGURATION
   ========================================================= */
const API_BASE = 'https://queueless-backend-29fm.onrender.com';

/* =========================================================
   LANGUAGES
   ========================================================= */

const L = {
  en: 'English',
  hi: 'हिन्दी',
  te: 'తెలుగు',
  kn: 'ಕನ್ನಡ',
  ta: 'தமிழ்',
  gu: 'ગુજરાતી'
};

const V = {
  en: 'en-IN',
  hi: 'hi-IN',
  te: 'te-IN',
  kn: 'kn-IN',
  ta: 'ta-IN',
  gu: 'gu-IN'
};

const T = {
  en: {
    home: 'Home',
    my: 'My token',
    state: 'State',
    dist: 'District',
    dept: 'Department',
    svc: 'Select service',
    people: 'People waiting',
    wait: 'Estimated wait',
    get: 'Get token',
    login: 'Login with mobile',
    mob: 'Mobile number',
    send: 'Send code',
    tag: "Skip the queue. Arrive when it's your turn.",
    cancel: 'Cancel token',
    listen: 'Listen',
    min: 'min',
    none: 'No token yet. Get one from Home.',
    near: 'Your turn is near. Please reach the office now.'
  },
  hi: {
    home: 'होम',
    my: 'मेरा टोकन',
    state: 'राज्य',
    dist: 'ज़िला',
    dept: 'विभाग',
    svc: 'सेवा चुनें',
    people: 'इंतज़ार में लोग',
    wait: 'अनुमानित समय',
    get: 'टोकन लें',
    login: 'मोबाइल से लॉगिन',
    mob: 'मोबाइल नंबर',
    send: 'कोड भेजें',
    tag: 'लाइन छोड़ें। अपनी बारी पर आएँ।',
    cancel: 'टोकन रद्द करें',
    listen: 'सुनें',
    min: 'मिनट',
    none: 'अभी कोई टोकन नहीं। होम से लें।',
    near: 'आपकी बारी पास है। कृपया अभी दफ़्तर पहुँचें।'
  },
  te: {
    home: 'హోమ్',
    my: 'నా టోకెన్',
    state: 'రాష్ట్రం',
    dist: 'జిల్లా',
    dept: 'శాఖ',
    svc: 'సేవను ఎంచుకోండి',
    people: 'వేచి ఉన్నవారు',
    wait: 'అంచనా సమయం',
    get: 'టోకెన్ తీసుకోండి',
    login: 'మొబైల్‌తో లాగిన్',
    mob: 'మొబైల్ నంబర్',
    send: 'కోడ్ పంపండి',
    tag: 'క్యూ వద్దు. మీ వంతు వచ్చినప్పుడు రండి.',
    cancel: 'టోకెన్ రద్దు',
    listen: 'వినండి',
    min: 'నిమి',
    none: 'ఇంకా టోకెన్ లేదు. హోమ్ నుండి తీసుకోండి.',
    near: 'మీ వంతు దగ్గరలో ఉంది. దయచేసి ఇప్పుడే కార్యాలయానికి రండి.'
  },
  kn: {
    home: 'ಮುಖಪುಟ',
    my: 'ನನ್ನ ಟೋಕನ್',
    state: 'ರಾಜ್ಯ',
    dist: 'ಜಿಲ್ಲೆ',
    dept: 'ಇಲಾಖೆ',
    svc: 'ಸೇವೆ ಆಯ್ಕೆಮಾಡಿ',
    people: 'ಕಾಯುತ್ತಿರುವವರು',
    wait: 'ಅಂದಾಜು ಸಮಯ',
    get: 'ಟೋಕನ್ ಪಡೆಯಿರಿ',
    login: 'ಮೊಬೈಲ್ ಲಾಗಿನ್',
    mob: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    send: 'ಕೋಡ್ ಕಳುಹಿಸಿ',
    tag: 'ಸಾಲು ಬೇಡ. ನಿಮ್ಮ ಸರದಿ ಬಂದಾಗ ಬನ್ನಿ.',
    cancel: 'ಟೋಕನ್ ರದ್ದು',
    listen: 'ಕೇಳಿ',
    min: 'ನಿಮಿಷ',
    none: 'ಇನ್ನೂ ಟೋಕನ್ ಇಲ್ಲ. ಮುಖಪುಟದಿಂದ ಪಡೆಯಿರಿ.',
    near: 'ನಿಮ್ಮ ಸರದಿ ಹತ್ತಿರವಿದೆ. ದಯವಿಟ್ಟು ಈಗ ಕಚೇರಿಗೆ ಬನ್ನಿ.'
  },
  ta: {
    home: 'முகப்பு',
    my: 'என் டோக்கன்',
    state: 'மாநிலம்',
    dist: 'மாவட்டம்',
    dept: 'துறை',
    svc: 'சேவையைத் தேர்வு செய்க',
    people: 'காத்திருப்போர்',
    wait: 'மதிப்பிட்ட நேரம்',
    get: 'டோக்கன் பெறுக',
    login: 'மொபைல் உள்நுழைவு',
    mob: 'மொபைல் எண்',
    send: 'குறியீடு அனுப்பு',
    tag: 'வரிசை வேண்டாம். உங்கள் முறை வரும்போது வாருங்கள்.',
    cancel: 'டோக்கனை ரத்து செய்',
    listen: 'கேளுங்கள்',
    min: 'நிமி',
    none: 'டோக்கன் இல்லை. முகப்பில் பெறுங்கள்.',
    near: 'உங்கள் முறை நெருங்கிவிட்டது. இப்போதே அலுவலகத்துக்கு வாருங்கள்.'
  },
  gu: {
    home: 'હોમ',
    my: 'મારું ટોકન',
    state: 'રાજ્ય',
    dist: 'જિલ્લો',
    dept: 'વિભાગ',
    svc: 'સેવા પસંદ કરો',
    people: 'રાહ જોતા લોકો',
    wait: 'અંદાજિત સમય',
    get: 'ટોકન મેળવો',
    login: 'મોબાઇલ લૉગિન',
    mob: 'મોબાઇલ નંબર',
    send: 'કોડ મોકલો',
    tag: 'લાઇન નહીં. તમારો વારો આવે ત્યારે આવો.',
    cancel: 'ટોકન રદ કરો',
    listen: 'સાંભળો',
    min: 'મિનિટ',
    none: 'હજી ટોકન નથી. હોમમાંથી મેળવો.',
    near: 'તમારો વારો નજીક છે. કૃપા કરીને હવે ઓફિસ પહોંચો.'
  }
};

/* =========================================================
   INDIAN STATES / DISTRICTS (FULL LIST)
   ========================================================= */

const S = {};

// Every district in India categorized by State/UT
`Andhra Pradesh:Alluri Sitharama Raju,Anakapalli,Ananthapuramu,Annamayya,Bapatla,Chittoor,Dr. B.R. Ambedkar Konaseema,East Godavari,Eluru,Guntur,Kakinada,Krishna,Kurnool,Nandyal,NTR,Palnadu,Parvathipuram Manyam,Prakasam,Sri Potti Sriramulu Nellore,Srikakulam,Tirupati,Visakhapatnam,Vizianagaram,West Godavari,Y.S.R. Kadapa;
Arunachal Pradesh:Anjaw,Changlang,Dibang Valley,East Kameng,East Siang,Itanagar Capital Complex,Kamle,Kra Daadi,Kurung Kumey,Lepa Rada,Lohit,Longding,Lower Dibang Valley,Lower Siang,Lower Subansiri,Namsai,Pakke Kessang,Papum Pare,Shi Yomi,Siang,Tawang,Tirap,Upper Siang,Upper Subansiri,West Kameng,West Siang;
Assam:Bajali,Baksa,Barpeta,Biswanath,Bongaigaon,Cachar,Charaideo,Chirang,Darrang,Dhemaji,Dhubri,Dibrugarh,Dima Hasao,Goalpara,Golaghat,Hailakandi,Hojai,Jorhat,Kamrup,Kamrup Metropolitan,Karbi Anglong,Karimganj,Kokrajhar,Lakhimpur,Majuli,Morigaon,Nagaon,Nalbari,Sivasagar,South Salmara Mankachar,Sonitpur,Tamulpur,Tinsukia,Udalguri,West Karbi Anglong;
Bihar:Araria,Arwal,Aurangabad,Banka,Begusarai,Bhagalpur,Bhojpur,Buxar,Darbhanga,East Champaran,Gaya,Gopalganj,Jamui,Jehanabad,Kaimur,Katihar,Khagaria,Kishanganj,Lakhisarai,Madhepura,Madhubani,Munger,Muzaffarpur,Nalanda,Nawada,Patna,Purnia,Rohtas,Saharsa,Samastipur,Saran,Sheikhpura,Sheohar,Sitamarhi,Siwan,Supaul,Vaishali,West Champaran;
Chhattisgarh:Balod,Baloda Bazar,Balrampur,Bastar,Bemetara,Bijapur,Bilaspur,Dantewada,Dhamtari,Durg,Gariaband,Gaurela Pendra Marwahi,Janjgir Champa,Jashpur,Kabirdham,Kanker,Kondagaon,Korba,Koriya,Mahasamund,Mungeli,Narayanpur,Raigarh,Raipur,Rajnandgaon,Sukma,Surajpur,Surguja;
Goa:North Goa,South Goa;
Gujarat:Ahmedabad,Amreli,Anand,Aravalli,Banaskantha,Bharuch,Bhavnagar,Botad,Chhota Udaipur,Dahod,Dang,Devbhoomi Dwarka,Gandhinagar,Gir Somnath,Jamnagar,Junagadh,Kheda,Kutch,Mahisagar,Mehsana,Morbi,Narmada,Navsari,Panchmahal,Patan,Porbandar,Rajkot,Sabarkantha,Surat,Surendranagar,Tapi,Vadodara,Valsad;
Haryana:Ambala,Bhiwani,Charkhi Dadri,Faridabad,Fatehabad,Gurugram,Hisar,Jhajjar,Jind,Kaithal,Karnal,Kurukshetra,Mahendragarh,Nuh,Palwal,Panchkula,Panipat,Rewari,Rohtak,Sirsa,Sonipat,Yamunanagar;
Himachal Pradesh:Bilaspur,Chamba,Hamirpur,Kangra,Kinnaur,Kullu,Lahaul and Spiti,Mandi,Shimla,Sirmaur,Solan,Una;
Jharkhand:Bokaro,Chatra,Deoghar,Dhanbad,Dumka,East Singhbhum,Garhwa,Giridih,Godda,Gumla,Hazaribagh,Jamtara,Khunti,Koderma,Latehar,Lohardaga,Pakur,Palamu,Ramgarh,Ranchi,Sahibganj,Seraikela Kharsawan,Simdega,West Singhbhum;
Karnataka:Bagalkot,Ballari,Belagavi,Bengaluru Rural,Bengaluru Urban,Bidar,Chamarajanagar,Chikkaballapur,Chikkamagaluru,Chitradurga,Dakshina Kannada,Davanagere,Dharwad,Gadag,Hassan,Haveri,Kalaburagi,Kodagu,Kolar,Koppal,Mandya,Mysuru,Raichur,Ramanagara,Shivamogga,Tumakuru,Udupi,Uttara Kannada,Vijayanagara,Vijayapura,Yadgir;
Kerala:Alappuzha,Ernakulam,Idukki,Kannur,Kasaragod,Kollam,Kottayam,Kozhikode,Malappuram,Palakkad,Pathanamthitta,Thiruvananthapuram,Thrissur,Wayanad;
Madhya Pradesh:Agar Malwa,Alirajpur,Anuppur,Ashoknagar,Balaghat,Barwani,Betul,Bhind,Bhopal,Burhanpur,Chhatarpur,Chhindwara,Damoh,Datia,Dewas,Dhar,Dindori,Guna,Gwalior,Harda,Narmadapuram,Indore,Jabalpur,Jhabua,Katni,Khandwa,Khargone,Mandla,Mandsaur,Morena,Narsinghpur,Neemuch,Niwari,Panna,Raisen,Rajgarh,Ratlam,Rewa,Sagar,Satna,Sehore,Seoni,Shahdol,Shajapur,Sheopur,Shivpuri,Sidhi,Singrauli,Tikamgarh,Ujjain,Umaria,Vidisha;
Maharashtra:Ahmednagar,Akola,Amravati,Chhatrapati Sambhajinagar,Beed,Bhandara,Buldhana,Chandrapur,Dhule,Gadchiroli,Gondia,Hingoli,Jalgaon,Jalna,Kolhapur,Latur,Mumbai City,Mumbai Suburban,Nagpur,Nanded,Nandurbar,Nashik,Dharashiv,Palghar,Parbhani,Pune,Raigad,Ratnagiri,Sangli,Satara,Sindhudurg,Solapur,Thane,Wardha,Washim,Yavatmal;
Manipur:Bishnupur,Chandel,Churachandpur,Imphal East,Imphal West,Jiribam,Kakching,Kamjong,Kangpokpi,Noney,Pherzawl,Senapati,Tamenglong,Tengnoupal,Thoubal,Ukhrul;
Meghalaya:East Garo Hills,East Jaintia Hills,East Khasi Hills,North Garo Hills,Ri Bhoi,South Garo Hills,South West Garo Hills,South West Khasi Hills,West Garo Hills,West Jaintia Hills,West Khasi Hills;
Mizoram:Aizawl,Champhai,Hnahthial,Khawzawl,Kolasib,Lawngtlai,Lunglei,Mamit,Saiha,Saitual,Serchhip;
Nagaland:Chumoukedima,Dimapur,Kiphire,Kohima,Longleng,Mokokchung,Mon,Niuland,Noklak,Peren,Phek,Shamator,Tseminyu,Tuensang,Wokha,Zunheboto;
Odisha:Angul,Balangir,Balasore,Bargarh,Bhadrak,Boudh,Cuttack,Deogarh,Dhenkanal,Gajapati,Ganjam,Jagatsinghpur,Jajpur,Jharsuguda,Kalahandi,Kandhamal,Kendrapara,Kendujhar,Khordha,Koraput,Malkangiri,Mayurbhanj,Nabarangpur,Nayagarh,Nuapada,Puri,Rayagada,Sambalpur,Subarnapur,Sundargarh;
Punjab:Amritsar,Barnala,Bathinda,Faridkot,Fatehgarh Sahib,Fazilka,Ferozepur,Gurdaspur,Hoshiarpur,Jalandhar,Kapurthala,Ludhiana,Mansa,Moga,Pathankot,Patiala,Rupnagar,Sahibzada Ajit Singh Nagar,Sangrur,Shahid Bhagat Singh Nagar,Sri Muktsar Sahib,Tarn Taran;
Rajasthan:Ajmer,Alwar,Banswara,Baran,Barmer,Bharatpur,Bhilwara,Bikaner,Bundi,Chittorgarh,Churu,Dausa,Dholpur,Dungarpur,Hanumangarh,Jaipur,Jaisalmer,Jalore,Jhalawar,Jhunjhunu,Jodhpur,Karauli,Kota,Nagaur,Pali,Pratapgarh,Rajsamand,Sawai Madhopur,Sikar,Sirohi,Sri Ganganagar,Tonk,Udaipur;
Sikkim:Gangtok,Gyalshing,Mangan,Namchi,Pakyong,Soreng;
Tamil Nadu:Ariyalur,Chengalpattu,Chennai,Coimbatore,Cuddalore,Dharmapuri,Dindigul,Erode,Kallakurichi,Kanchipuram,Kanyakumari,Karur,Krishnagiri,Madurai,Mayiladuthurai,Nagapattinam,Namakkal,Nilgiris,Perambalur,Pudukkottai,Ramanathapuram,Ranipet,Salem,Sivaganga,Tenkasi,Thanjavur,Theni,Thoothukudi,Tiruchirappalli,Tirunelveli,Tirupathur,Tiruppur,Tiruvallur,Tiruvannamalai,Tiruvarur,Vellore,Viluppuram,Virudhunagar;
Telangana:Adilabad,Bhadradri Kothagudem,Hyderabad,Jagtial,Jangaon,Jayashankar Bhupalpally,Jogulamba Gadwal,Kamareddy,Karimnagar,Khammam,Komaram Bheem Asifabad,Mahabubabad,Mahabubnagar,Mancherial,Medak,Medchal Malkajgiri,Mulugu,Nagarkurnool,Nalgonda,Narayanpet,Nirmal,Nizamabad,Peddapalli,Rajanna Sircilla,Ranga Reddy,Sangareddy,Siddipet,Suryapet,Vikarabad,Wanaparthy,Warangal,Hanamkonda,Yadadri Bhuvanagiri;
Tripura:Dhalai,Gomati,Khowai,North Tripura,Sepahijala,South Tripura,Unakoti,West Tripura;
Uttar Pradesh:Agra,Aligarh,Ambedkar Nagar,Amethi,Amroha,Auraiya,Ayodhya,Azamgarh,Baghpat,Bahraich,Ballia,Balrampur,Banda,Barabanki,Bareilly,Basti,Bhadohi,Bijnor,Budaun,Bulandshahr,Chandauli,Chitrakoot,Deoria,Etah,Etawah,Farrukhabad,Fatehpur,Firozabad,Gautam Buddha Nagar,Ghaziabad,Ghazipur,Gonda,Gorakhpur,Hamirpur,Hapur,Hardoi,Hathras,Jalaun,Jaunpur,Jhansi,Kannauj,Kanpur Dehat,Kanpur Nagar,Kasganj,Kaushambi,Kheri,Kushinagar,Lalitpur,Lucknow,Maharajganj,Mahoba,Mainpuri,Mathura,Mau,Meerut,Mirzapur,Moradabad,Muzaffarnagar,Pilibhit,Pratapgarh,Prayagraj,Raebareli,Rampur,Saharanpur,Sambhal,Sant Kabir Nagar,Shahjahanpur,Shamli,Shravasti,Siddharthnagar,Sitapur,Sonbhadra,Sultanpur,Unnao,Varanasi;
Uttarakhand:Almora,Bageshwar,Chamoli,Champawat,Dehradun,Haridwar,Nainital,Pauri Garhwal,Pithoragarh,Rudraprayag,Tehri Garhwal,Udham Singh Nagar,Uttarkashi;
West Bengal:Alipurduar,Bankura,Birbhum,Cooch Behar,Dakshin Dinajpur,Darjeeling,Hooghly,Howrah,Jalpaiguri,Jhargram,Kalimpong,Kolkata,Malda,Murshidabad,Nadia,North 24 Parganas,Paschim Bardhaman,Paschim Medinipur,Purba Bardhaman,Purba Medinipur,Purulia,South 24 Parganas,Uttar Dinajpur;
Andaman and Nicobar Islands:Nicobar,North and Middle Andaman,South Andaman;
Chandigarh:Chandigarh;
Dadra and Nagar Haveli and Daman and Diu:Dadra and Nagar Haveli,Daman,Diu;
Delhi:Central Delhi,East Delhi,New Delhi,North Delhi,North East Delhi,North West Delhi,Shahdara,South Delhi,South East Delhi,South West Delhi,West Delhi;
Jammu and Kashmir:Anantnag,Bandipora,Baramulla,Budgam,Doda,Ganderbal,Jammu,Kathua,Kishtwar,Kulgam,Kupwara,Poonch,Pulwama,Rajouri,Ramban,Reasi,Samba,Shopian,Srinagar,Udhampur;
Ladakh:Kargil,Leh;
Lakshadweep:Lakshadweep;
Puducherry:Karaikal,Mahe,Puducherry,Yanam`
.split(';')
.forEach(x => {
  const parts = x.trim().split(':');
  if (parts.length === 2) {
    const stateName = parts[0].trim();
    const districts = parts[1].split(',').map(d => d.trim());
    S[stateName] = districts;
  }
});

/* =========================================================
   DEPARTMENTS
   ========================================================= */

const D = {
  hospital: {
    i: '🏥',
    n: 'Hospital',
    c: 'H',
    m: 8,
    docs: 'Aadhaar card, old prescriptions and reports',
    s: ['Neurologist', 'Cardiologist', 'Orthopaedic', 'General Physician', 'Paediatrician', 'Gynaecologist', 'Eye (Ophthalmologist)', 'Skin (Dermatologist)']
  },
  rto: {
    i: '🚗',
    n: 'RTO',
    c: 'R',
    m: 8,
    docs: 'Aadhaar, address proof, passport photo',
    s: ['Driving Licence', 'Learner Licence', 'Vehicle Registration', 'Fitness Certificate']
  },
  tax: {
    i: '🏛️',
    n: 'Municipal and Tax',
    c: 'M',
    m: 7,
    docs: 'Property papers, old receipt, Aadhaar',
    s: ['Property Tax', 'Birth Certificate', 'Death Certificate', 'Trade Licence']
  },
  id: {
    i: '🪪',
    n: 'Aadhaar and ID',
    c: 'A',
    m: 5,
    docs: 'Proof of identity and address',
    s: ['New Aadhaar', 'Update Aadhaar', 'PAN Card', 'Voter ID']
  },
  power: {
    i: '💡',
    n: 'Electricity',
    c: 'E',
    m: 6,
    docs: 'Latest bill, Aadhaar, ownership proof',
    s: ['New Connection', 'Bill Payment', 'Complaint', 'Name Change']
  },
  police: {
    i: '🛡️',
    n: 'Police',
    c: 'P',
    m: 9,
    docs: 'Aadhaar, application form, photos',
    s: ['Passport Verification', 'Character Certificate', 'Complaint Help Desk', 'Lost Item Report']
  }
};

/* =========================================================
   APP STATE
   ========================================================= */

let lang = 'en';
let sel = { st: '', di: '', d: '', s: '' };
let tok = null;
let userPhone = null; // Track the logged-in user

const hash = s => {
  let h = 0;
  for (const c of String(s)) {
    h = (h * 31 + c.charCodeAt(0)) | 0;
  }
  return Math.abs(h);
};

/* =========================================================
   BACKEND SYNC FUNCTIONS
   ========================================================= */

// Push token to server so other devices can see it
const syncTokenToServer = async (tokenData) => {
  if (!userPhone) return;
  const endpoint = tokenData ? '/save-token' : '/cancel-token';
  const body = tokenData ? { phone: userPhone, tokenData } : { phone: userPhone };
  
  try {
    await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  } catch (e) {
    console.error('Failed to sync with backend server', e);
  }
};

// Fetch token from server when logging in on a new device
const loadTokenFromServer = async () => {
  if (!userPhone) return;
  try {
    const response = await fetch(`${API_BASE}/get-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: userPhone })
    });
    const data = await response.json();
    if (data.success && data.tokenData) {
      tok = data.tokenData;
      renderTok(); // Update UI
    }
  } catch (e) {
    console.error('Failed to load token from server', e);
  }
};

/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function apply() {
  document.documentElement.lang = lang;
  $$('[data-i]').forEach(e => {
    e.textContent = t(e.dataset.i);
  });
  if ($('#mob')) $('#mob').placeholder = t('mob');
  if ($('#lang')) $('#lang').value = lang;
  if (sel.s) showQ();
  renderTok();
}

/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function show(id) {
  $$('.screen').forEach(s => {     s.hidden = s.id !== id;   });$$
('nav button').forEach(b => {
    b.classList.toggle('on', b.dataset.go === id);
  });
}

/* =========================================================
   TEXT TO SPEECH
   ========================================================= */

function say(x) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(x);
  u.lang = V[lang];
  speechSynthesis.speak(u);
}

/* =========================================================
   HEADER
   ========================================================= */

if ($('#lang')) {
  $('#lang').innerHTML = Object.keys(L).map(k => `<option value="${k}">${L[k]}</option>`).join('');
  $('#lang').onchange = e => {
    lang = e.target.value;
    try {
      localStorage.setItem('qlLang', lang);
    } catch (x) {}
    apply();
  };
}

if ($('#big')) {
  $('#big').onclick = () => {
    document.body.classList.toggle('big');
  };
}

if ($('#listen')) {
  $('#listen').onclick = () => {
    const screen = $('.screen:not([hidden])');
    if (screen) {
      say(screen.innerText.slice(0, 500));
    }
  };
}

/* =========================================================
   REAL BACKEND LOGIN - SEND OTP
   ========================================================= */

if ($('#send')) {
  $('#send').onclick = async () => {
    const input = $('#mob');
    if (!input) return;
    
    let phone = input.value.trim();
    
    if (!/^[6-9]\d{9}$/.test(phone)) {$('#lerr').textContent = 'Enter a valid 10-digit mobile number.';
      return;
    }
    
    phone = '+91' + phone;
    
    $('#lerr').textContent = 'Connecting to Server... (Please wait)';
    $('#send').disabled = true;
    
    try {
      const response = await fetch(`${API_BASE}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone })
      });
      
      let data = {};
      try { data = await response.json(); } catch(e) {}
      
      if (!response.ok) throw new Error(data.error);
      
      // Tell user to enter 1234 for the demo
      $('#lerr').textContent = 'Connected! Type "1234" to enter.';
      $('#lerr').style.color = 'green';
      
      if ($('#ver')) $('#ver').dataset.phone = phone;
      if ($('#codeBox')) $('#codeBox').hidden = false;
      $('#send').hidden = true;
      if ($('#code')) $('#code').focus();
      
    } catch (error) {
      $('#lerr').textContent = 'Failed to connect. Server might be asleep.';
      $('#send').disabled = false;
    }
  };
}

/* =========================================================
   REAL BACKEND LOGIN - VERIFY OTP
   ========================================================= */

if ($('#ver')) {
  $('#ver').onclick = async () => {
    const code = $('#code') ? $('#code').value.trim() : '';
    const phone = $('#ver').dataset.phone;
    
    if (!phone) return;
    
    $('#lerr').textContent = 'Logging in...';
    $('#lerr').style.color = 'inherit';
    $('#ver').disabled = true;
    
    try {
      const response = await fetch(`${API_BASE}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone, code: code })
      });
      
      let data = {};
      try { data = await response.json(); } catch(e) {}
      
      if (!response.ok) throw new Error(data.error);
      
      $('#lerr').textContent = 'Login successful.';
      userPhone = phone; // Save phone to variable
      
      // Save session locally
      try {
        localStorage.setItem('qlLogin', JSON.stringify({ phone: phone, loggedIn: true }));
      } catch (e) {}
      
      // Ask the server if this phone number already has a token!
      await loadTokenFromServer();
      
      if ($('#codeBox')) $('#codeBox').hidden = true;
      if ($('nav'))$('nav').hidden = false;
      show('home');
      
    } catch (error) {
      $('#lerr').textContent = 'Wrong Code. Try 1234.';
      $('#lerr').style.color = 'red';
      $('#ver').disabled = false;     }   }; }  /* =========================================================    NAVIGATION BUTTONS    ========================================================= */  $$('nav button').forEach(b => {
  b.onclick = () => {
    show(b.dataset.go);
  };
});

/* =========================================================
   STATE / DISTRICT
   ========================================================= */

const opts = (a, ph) => `<option value="">${ph}</option>` + a.map(x => `<option>${x}</option>`).join('');

if ($('#st')) {
  $('#st').innerHTML = opts(Object.keys(S).sort(), 'Select State');
  $('#st').onchange = e => {
    sel = { st: e.target.value, di: '', d: '', s: '' };
    $('#di').innerHTML = opts((S[sel.st] || []).sort(), 'Select District');
    $('#di').disabled = !sel.st;
    $('#pick').hidden = true;
    $('#svcs').hidden = true;
    $('#queue').hidden = true;
  };
}

if ($('#di')) {
  $('#di').onchange = e => {
    sel.di = e.target.value;
    sel.d = '';
    sel.s = '';
    $('#svcs').hidden = true;
    $('#queue').hidden = true;
    $('#pick').hidden = !sel.di;
  };
}

/* =========================================================
   DEPARTMENTS
   ========================================================= */

if ($('#depts')) {
  $('#depts').innerHTML = Object.keys(D).map(k => `<button class="card" data-d="${k}"><span class="ic">${D[k].i}</span>${D[k].n}</button>`).join('');
  
  $$('#depts .card').forEach(b => {     b.onclick = () => {       sel.d = b.dataset.d;       sel.s = '';       $$
('#depts .card').forEach(x => {
        x.classList.toggle('on', x === b);
      });
      $('#svcList').innerHTML = D[sel.d].s.map(n => `<button class="card">${n}</button>`).join('');
      
      $$('#svcList .card').forEach(c => {         c.onclick = () => {           sel.s = c.textContent.trim();           $$
('#svcList .card').forEach(x => {
            x.classList.toggle('on', x === c);
          });
          showQ();
          $('#queue').scrollIntoView({ behavior: 'smooth' });
        };
      });
      
      $('#svcs').hidden = false;
      $('#queue').hidden = true;
    };
  });
}

/* =========================================================
   QUEUE PREDICTION
   ========================================================= */

function pred() {
  if (!sel.d || !D[sel.d]) {
    return { p: 0, w: 0, c: 0 };
  }
  const h = hash(sel.st + sel.di + sel.d + sel.s + new Date().getHours());
  const p = 5 + h % 36;
  const w = Math.round(p * D[sel.d].m / 2);
  return { p: p, w: w, c: 80 + h % 15 };
}

function showQ() {
  if (!sel.d || !sel.s) return;
  const q = pred();
  $('#qn').textContent = sel.s;
  $('#qsub').textContent = `${D[sel.d].n}, ${sel.di}, ${sel.st}`;
  $('#pp').textContent = q.p;
  $('#ww').textContent = q.w + ' ' + t('min');
  $('#cf').textContent = q.c + '%';
  $('#sts').textContent = q.w < 20 ? 'Quiet' : q.w < 45 ? 'Moving normally' : 'Busy';
  $('#docs').textContent = D[sel.d].docs;
  $('#map').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(D[sel.d].n + ' ' + sel.di + ' ' + sel.st);
  $('#queue').hidden = false;
}

/* =========================================================
   GET TOKEN
   ========================================================= */

if ($('#get')) {
  $('#get').onclick = () => {
    if (!sel.st || !sel.di || !sel.d || !sel.s) {
      alert('Please select state, district, department and service.');
      return;
    }
    const q = pred();
    const a = D[sel.d];
    tok = {
      ...sel,
      n: a.c + '-' + (200 + hash(sel.s + Date.now()) % 99),
      pos: Math.max(3, Math.ceil(q.p / 2)),
      per: a.m / 2,
      sms: $('#sms') ? $('#sms').checked : false,
      notified: 0
    };
    
    // Save token to Backend Database!
    syncTokenToServer(tok);
    
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
    renderTok();
    show('tok');
  };
}

/* =========================================================
   RENDER TOKEN
   ========================================================= */

function renderTok() {
  const e = $('#tokbox');
  if (!e) return;
  if (!tok) {
    e.innerHTML = `<p>${t('none')}</p>`;
    return;
  }
  const w = Math.round(tok.pos * tok.per);
  e.innerHTML = `
    <div class="ticket">
      <div class="no">${tok.n}</div>
      <div class="tx">
        <b>${tok.s}</b><br>
        ${D[tok.d].n}, ${tok.di}<br>
        Position #${tok.pos}, about ${w} ${t('min')}
      </div>
    </div>
    ${w <= 10 ? `<div class="banner" role="alert">${t('near')}</div>` : ''}
    <p>Arrive within 10 minutes of being called, or your token may be skipped.</p>
    <p class="demo">Demo: the position moves every 6 seconds.</p>
    <button class="card" id="cx">${t('cancel')}</button>
  `;
  const cancel = $('#cx');
  if (cancel) {
    cancel.onclick = () => {
      tok = null;
      syncTokenToServer(null); // Delete token from backend Database!
      renderTok();
    };
  }
}

/* =========================================================
   NOTIFICATION
   ========================================================= */

function alertMe() {
  say(t('near'));
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('QueueLess', { body: t('near') });
  }
}

/* =========================================================
   DEMO QUEUE MOVEMENT
   ========================================================= */

setInterval(() => {
  if (!tok) return;
  if (tok.pos > 0) tok.pos--;
  if (tok.pos * tok.per <= 10 && !tok.notified) {
    tok.notified = 1;
    alertMe();
  }
  renderTok();
}, 6000);

/* =========================================================
   STAFF DASHBOARD
   ========================================================= */

let qWait = [233, 234, 235, 236, 237, 238];
let served = 124;

function rs() {
  if ($('#now')) $('#now').textContent = 'A-' + qWait[0];
  if ($('#nxt')) $('#nxt').textContent = qWait.slice(1, 4).map(n => 'A-' + n).join(', ');
  if ($('#sv')) $('#sv').textContent = served;
}

if ($('#sgo')) {
  $('#sgo').onclick = () => {
    if ($('#scode').value === '9999') {
      $('#slogin').hidden = true;
      $('#sdash').hidden = false;
      rs();
    } else {
      $('#serr').textContent = 'Wrong staff code. The demo code is 9999.';
    }
  };
}

if ($('#call')) {
  $('#call').onclick = () => {
    qWait.shift();
    qWait.push(qWait[qWait.length - 1] + 1);
    served++;
    rs();
  };
}

if ($('#skip')) {
  $('#skip').onclick = () => {
    qWait.shift();
    qWait.push(qWait[qWait.length - 1] + 1);
    rs();
  };
}

/* =========================================================
   HELPER CHAT
   ========================================================= */

if ($('.fab')) {
  $('.fab').onclick = () => {$('#panel').hidden = !$('#panel').hidden;   }; }  $$('#panel [data-q]').forEach(b => {
  b.onclick = () => {
    const o = $('#ans');
    const k = b.dataset.q;
    if (!sel.s) {
      o.textContent = 'Choose state, district, department and service on Home first.';
      return;
    }
    if (k === 'w') {
      const r = pred();
      o.textContent = `${sel.s}, ${sel.di}: about ${r.w} min, ${r.p} people waiting.`;
    }
    if (k === 'o') {
      o.innerHTML = `<a href="${$('#map').href}" target="_blank" rel="noopener">Open ${D[sel.d].n}, ${sel.di} on map</a>`;
    }
    if (k === 'd') {
      o.textContent = 'Carry: ' + D[sel.d].docs;
    }
  };
});

/* =========================================================
   INITIALIZE APP & CHECK IF LOGGED IN
   ========================================================= */

async function init() {
  try {
    lang = localStorage.getItem('qlLang') || 'en';
    const login = JSON.parse(localStorage.getItem('qlLogin'));
    
    if (login && login.loggedIn) {
      userPhone = login.phone;
      if ($('nav'))$('nav').hidden = false;
      
      // Load ticket from the Backend Server!
      await loadTokenFromServer();
    }
  } catch (e) {}

  apply();
}

init();
