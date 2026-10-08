```javascript
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* =========================================================
   BACKEND CONFIGURATION
   ========================================================= */

// CHANGE THIS to your actual Render backend URL.
// Example:
// const API_BASE = 'https://queueless-backend.onrender.com';

const API_BASE = 'https://YOUR-RENDER-BACKEND.onrender.com';


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
    min: 'ನಿಮಿ',
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
   INDIAN STATES / DISTRICTS
   ========================================================= */

const S = {};

`Andhra Pradesh:Visakhapatnam,Vijayawada,Guntur;
Arunachal Pradesh:Itanagar,Tawang,Pasighat;
Assam:Guwahati,Dibrugarh,Silchar;
Bihar:Patna,Gaya,Muzaffarpur;
Chhattisgarh:Raipur,Bilaspur,Durg;
Goa:North Goa,South Goa;
Gujarat:Rajkot,Ahmedabad,Surat,Vadodara;
Haryana:Gurugram,Faridabad,Karnal;
Himachal Pradesh:Shimla,Kangra,Mandi;
Jharkhand:Ranchi,Dhanbad,East Singhbhum;
Karnataka:Bengaluru Urban,Mysuru,Dharwad;
Kerala:Thiruvananthapuram,Ernakulam,Kozhikode;
Madhya Pradesh:Bhopal,Indore,Jabalpur;
Maharashtra:Mumbai,Pune,Nagpur;
Manipur:Imphal West,Imphal East,Thoubal;
Meghalaya:East Khasi Hills,West Garo Hills,Ri-Bhoi;
Mizoram:Aizawl,Lunglei,Champhai;
Nagaland:Kohima,Dimapur,Mokokchung;
Odisha:Khordha,Cuttack,Puri;
Punjab:Ludhiana,Amritsar,Jalandhar;
Rajasthan:Jaipur,Jodhpur,Udaipur;
Sikkim:Gangtok,Namchi,Gyalshing;
Tamil Nadu:Chennai,Coimbatore,Madurai;
Telangana:Hyderabad,Warangal,Nizamabad;
Tripura:West Tripura,North Tripura,Dhalai;
Uttar Pradesh:Lucknow,Kanpur,Varanasi;
Uttarakhand:Dehradun,Haridwar,Nainital;
West Bengal:Kolkata,Howrah,Darjeeling;
Andaman and Nicobar Islands:South Andaman,North and Middle Andaman,Nicobar;
Chandigarh:Chandigarh;
Dadra and Nagar Haveli and Daman and Diu:Daman,Diu,Dadra and Nagar Haveli;
Delhi:New Delhi,South Delhi,North Delhi;
Jammu and Kashmir:Srinagar,Jammu,Anantnag;
Ladakh:Leh,Kargil;
Lakshadweep:Lakshadweep;
Puducherry:Puducherry,Karaikal,Mahe`
.split(';')
.forEach(x => {
  const [a, b] = x.split(':');
  S[a] = b.split(',');
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
    s: [
      'Neurologist',
      'Cardiologist',
      'Orthopaedic',
      'General Physician',
      'Paediatrician',
      'Gynaecologist',
      'Eye (Ophthalmologist)',
      'Skin (Dermatologist)'
    ]
  },

  rto: {
    i: '🚗',
    n: 'RTO',
    c: 'R',
    m: 8,
    docs: 'Aadhaar, address proof, passport photo',
    s: [
      'Driving Licence',
      'Learner Licence',
      'Vehicle Registration',
      'Fitness Certificate'
    ]
  },

  tax: {
    i: '🏛️',
    n: 'Municipal and Tax',
    c: 'M',
    m: 7,
    docs: 'Property papers, old receipt, Aadhaar',
    s: [
      'Property Tax',
      'Birth Certificate',
      'Death Certificate',
      'Trade Licence'
    ]
  },

  id: {
    i: '🪪',
    n: 'Aadhaar and ID',
    c: 'A',
    m: 5,
    docs: 'Proof of identity and address',
    s: [
      'New Aadhaar',
      'Update Aadhaar',
      'PAN Card',
      'Voter ID'
    ]
  },

  power: {
    i: '💡',
    n: 'Electricity',
    c: 'E',
    m: 6,
    docs: 'Latest bill, Aadhaar, ownership proof',
    s: [
      'New Connection',
      'Bill Payment',
      'Complaint',
      'Name Change'
    ]
  },

  police: {
    i: '🛡️',
    n: 'Police',
    c: 'P',
    m: 9,
    docs: 'Aadhaar, application form, photos',
    s: [
      'Passport Verification',
      'Character Certificate',
      'Complaint Help Desk',
      'Lost Item Report'
    ]
  }
};


/* =========================================================
   APP STATE
   ========================================================= */

let lang = 'en';

let sel = {
  st: '',
  di: '',
  d: '',
  s: ''
};

let tok = null;

try {

  tok = JSON.parse(
    localStorage.getItem('qlTok')
  );

  lang =
    localStorage.getItem('qlLang') ||
    'en';

} catch (e) {}

if (!T[lang]) {
  lang = 'en';
}

const t = k =>
  T[lang][k] ||
  T.en[k];

const save = () => {

  try {

    localStorage.setItem(
      'qlTok',
      JSON.stringify(tok)
    );

  } catch (e) {}
};

const hash = s => {

  let h = 0;

  for (const c of String(s)) {
    h =
      (h * 31 +
        c.charCodeAt(0)) |
      0;
  }

  return Math.abs(h);
};


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function apply() {

  document.documentElement.lang =
    lang;

  $$('[data-i]').forEach(e => {
    e.textContent =
      t(e.dataset.i);
  });

  if ($('#mob')) {
    $('#mob').placeholder =
      t('mob');
  }

  if ($('#lang')) {
    $('#lang').value =
      lang;
  }

  if (sel.s) {
    showQ();
  }

  renderTok();
}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function show(id) {

  $$('.screen').forEach(s => {

    s.hidden =
      s.id !== id;

  });

  $$('nav button').forEach(b => {

    b.classList.toggle(
      'on',
      b.dataset.go === id
    );

  });
}


/* =========================================================
   TEXT TO SPEECH
   ========================================================= */

function say(x) {

  if (
    !('speechSynthesis' in window)
  ) {
    return;
  }

  speechSynthesis.cancel();

  const u =
    new SpeechSynthesisUtterance(x);

  u.lang =
    V[lang];

  speechSynthesis.speak(u);
}


/* =========================================================
   HEADER
   ========================================================= */

if ($('#lang')) {

  $('#lang').innerHTML =
    Object.keys(L)
      .map(k =>
        `<option value="${k}">
          ${L[k]}
        </option>`
      )
      .join('');

  $('#lang').onchange =
    e => {

      lang =
        e.target.value;

      try {

        localStorage.setItem(
          'qlLang',
          lang
        );

      } catch (x) {}

      apply();
    };
}


if ($('#big')) {

  $('#big').onclick =
    () => {

      document.body
        .classList
        .toggle('big');

    };
}


if ($('#listen')) {

  $('#listen').onclick =
    () => {

      const screen =
        $('.screen:not([hidden])');

      if (screen) {
        say(
          screen.innerText
            .slice(0, 500)
        );
      }

    };
}


/* =========================================================
   REAL OTP - SEND OTP
   ========================================================= */

if ($('#send')) {

  $('#send').onclick =
    async () => {

      const input =
        $('#mob');

      if (!input) {
        return;
      }

      let phone =
        input.value.trim();

      /*
         Accept:
         6363119928

         Convert to:
         +916363119928
      */

      if (
        !/^[6-9]\d{9}$/
          .test(phone)
      ) {

        $('#lerr').textContent =
          'Enter a valid 10-digit mobile number.';

        return;
      }

      phone =
        '+91' + phone;

      $('#lerr').textContent =
        'Sending OTP...';

      $('#send').disabled =
        true;

      try {

        const response =
          await fetch(
            `${API_BASE}/send-otp`,
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json'
              },

              body: JSON.stringify({
                phone: phone
              })
            }
          );

        let data = {};

        try {
          data =
            await response.json();
        } catch (e) {}

        console.log(
          'SEND OTP RESPONSE:',
          data
        );

        if (!response.ok) {

          throw new Error(
            data.message ||
            data.error ||
            `Server error (${response.status})`
          );

        }

        /*
           Save phone for verify step.
        */

        if ($('#ver')) {

          $('#ver')
            .dataset
            .phone = phone;

        }

        $('#lerr').textContent =
          data.message ||
          'OTP sent successfully.';

        if ($('#codeBox')) {
          $('#codeBox').hidden =
            false;
        }

        $('#send').hidden =
          true;

        /*
           Focus OTP box.
        */

        if ($('#code')) {
          $('#code').focus();
        }

      } catch (error) {

        console.error(
          'SEND OTP ERROR:',
          error
        );

        $('#lerr').textContent =
          error.message ||
          'Failed to send OTP. Please try again.';

        $('#send').disabled =
          false;
      }

    };
}


/* =========================================================
   REAL OTP - VERIFY OTP
   ========================================================= */

if ($('#ver')) {

  $('#ver').onclick =
    async () => {

      const code =
        $('#code')
          ? $('#code')
              .value
              .trim()
          : '';

      const phone =
        $('#ver')
          .dataset
          .phone;

      if (!phone) {

        $('#lerr').textContent =
          'Please request an OTP first.';

        return;
      }

      if (
        !/^\d{4,8}$/
          .test(code)
      ) {

        $('#lerr').textContent =
          'Enter the OTP sent to your mobile.';

        return;
      }

      $('#lerr').textContent =
        'Verifying OTP...';

      $('#ver').disabled =
        true;

      try {

        const response =
          await fetch(
            `${API_BASE}/verify-otp`,
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json'
              },

              body: JSON.stringify({
                phone: phone,
                code: code
              })
            }
          );

        let data = {};

        try {
          data =
            await response.json();
        } catch (e) {}

        console.log(
          'VERIFY OTP RESPONSE:',
          data
        );

        if (!response.ok) {

          throw new Error(
            data.message ||
            data.error ||
            `Verification failed (${response.status})`
          );

        }

        /*
           Accept several common backend
           success response formats.
        */

        const approved =
          data.status === 'approved' ||
          data.valid === true ||
          data.verified === true ||
          data.success === true;

        if (!approved) {

          throw new Error(
            data.message ||
            'Invalid or expired OTP.'
          );

        }

        /*
           Login successful.
        */

        try {

          localStorage.setItem(
            'qlLogin',
            JSON.stringify({
              phone: phone,
              loggedIn: true
            })
          );

        } catch (e) {}

        $('#lerr').textContent =
          'Login successful.';

        /*
           Hide login screen if needed.
        */

        if ($('#codeBox')) {
          $('#codeBox').hidden =
            true;
        }

        /*
           Show navigation.
        */

        if ($('nav')) {
          $('nav').hidden =
            false;
        }

        /*
           Go to Home.
        */

        show('home');

      } catch (error) {

        console.error(
          'VERIFY OTP ERROR:',
          error
        );

        $('#lerr').textContent =
          error.message ||
          'Wrong or expired OTP.';

      } finally {

        $('#ver').disabled =
          false;

      }

    };
}


/* =========================================================
   NAVIGATION BUTTONS
   ========================================================= */

$$('nav button').forEach(b => {

  b.onclick =
    () => {

      show(
        b.dataset.go
      );

    };

});


/* =========================================================
   STATE / DISTRICT
   ========================================================= */

const opts =
  (a, ph) =>
    `<option value="">
      ${ph}
    </option>` +
    a
      .map(
        x =>
          `<option>${x}</option>`
      )
      .join('');


if ($('#st')) {

  $('#st').innerHTML =
    opts(
      Object.keys(S),
      'Select'
    );

  $('#st').onchange =
    e => {

      sel = {
        st: e.target.value,
        di: '',
        d: '',
        s: ''
      };

      $('#di').innerHTML =
        opts(
          S[sel.st] || [],
          'Select'
        );

      $('#di').disabled =
        !sel.st;

      $('#pick').hidden =
        true;

      $('#svcs').hidden =
        true;

      $('#queue').hidden =
        true;
    };
}


if ($('#di')) {

  $('#di').onchange =
    e => {

      sel.di =
        e.target.value;

      sel.d = '';
      sel.s = '';

      $('#svcs').hidden =
        true;

      $('#queue').hidden =
        true;

      $('#pick').hidden =
        !sel.di;
    };
}


/* =========================================================
   DEPARTMENTS
   ========================================================= */

if ($('#depts')) {

  $('#depts').innerHTML =
    Object.keys(D)
      .map(
        k =>
          `<button
             class="card"
             data-d="${k}">
             <span class="ic">
               ${D[k].i}
             </span>
             ${D[k].n}
           </button>`
      )
      .join('');

  $$('#depts .card')
    .forEach(b => {

      b.onclick =
        () => {

          sel.d =
            b.dataset.d;

          sel.s = '';

          $$('#depts .card')
            .forEach(x => {

              x.classList.toggle(
                'on',
                x === b
              );

            });

          $('#svcList').innerHTML =
            D[sel.d].s
              .map(
                n =>
                  `<button class="card">
                     ${n}
                   </button>`
              )
              .join('');

          $$('#svcList .card')
            .forEach(c => {

              c.onclick =
                () => {

                  sel.s =
                    c.textContent.trim();

                  $$('#svcList .card')
                    .forEach(x => {

                      x.classList.toggle(
                        'on',
                        x === c
                      );

                    });

                  showQ();

                  $('#queue')
                    .scrollIntoView({
                      behavior:
                        'smooth'
                    });

                };

            });

          $('#svcs').hidden =
            false;

          $('#queue').hidden =
            true;
        };

    });
}


/* =========================================================
   QUEUE PREDICTION
   ========================================================= */

function pred() {

  if (!sel.d ||
      !D[sel.d]) {

    return {
      p: 0,
      w: 0,
      c: 0
    };
  }

  const h =
    hash(
      sel.st +
      sel.di +
      sel.d +
      sel.s +
      new Date()
        .getHours()
    );

  const p =
    5 + h % 36;

  const w =
    Math.round(
      p *
      D[sel.d].m /
      2
    );

  return {
    p: p,
    w: w,
    c: 80 + h % 15
  };
}


function showQ() {

  if (!sel.d ||
      !sel.s) {

    return;
  }

  const q =
    pred();

  $('#qn').textContent =
    sel.s;

  $('#qsub').textContent =
    `${D[sel.d].n}, ${sel.di}, ${sel.st}`;

  $('#pp').textContent =
    q.p;

  $('#ww').textContent =
    q.w +
    ' ' +
    t('min');

  $('#cf').textContent =
    q.c +
    '%';

  $('#sts').textContent =
    q.w < 20
      ? 'Quiet'
      : q.w < 45
        ? 'Moving normally'
        : 'Busy';

  $('#docs').textContent =
    D[sel.d].docs;

  $('#map').href =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      D[sel.d].n +
      ' ' +
      sel.di +
      ' ' +
      sel.st
    );

  $('#queue').hidden =
    false;
}


/* =========================================================
   GET TOKEN
   ========================================================= */

if ($('#get')) {

  $('#get').onclick =
    () => {

      if (
        !sel.st ||
        !sel.di ||
        !sel.d ||
        !sel.s
      ) {

        alert(
          'Please select state, district, department and service.'
        );

        return;
      }

      const q =
        pred();

      const a =
        D[sel.d];

      tok = {

        ...sel,

        n:
          a.c +
          '-' +
          (
            200 +
            hash(
              sel.s +
              Date.now()
            ) % 99
          ),

        pos:
          Math.max(
            3,
            Math.ceil(q.p / 2)
          ),

        per:
          a.m / 2,

        sms:
          $('#sms')
            ? $('#sms').checked
            : false,

        notified: 0
      };

      save();

      if (
        'Notification' in window &&
        Notification.permission ===
          'default'
      ) {

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

  const e =
    $('#tokbox');

  if (!e) {
    return;
  }

  if (!tok) {

    e.innerHTML =
      `<p>
        ${t('none')}
       </p>`;

    return;
  }

  const w =
    Math.round(
      tok.pos *
      tok.per
    );

  e.innerHTML = `

    <div class="ticket">

      <div class="no">
        ${tok.n}
      </div>

      <div class="tx">

        <b>${tok.s}</b><br>

        ${D[tok.d].n},
        ${tok.di}<br>

        Position #${tok.pos},
        about ${w}
        ${t('min')}

      </div>

    </div>

    ${
      w <= 10
        ? `
          <div
            class="banner"
            role="alert">
            ${t('near')}
          </div>
        `
        : ''
    }

    <p>
      Arrive within 10 minutes
      of being called,
      or your token may be skipped.
    </p>

    <p class="demo">
      Demo: the position moves
      every 6 seconds.
      ${
        tok.sms
          ? ' SMS alerts need a server to work.'
          : ''
      }
    </p>

    <button
      class="card"
      id="cx">
      ${t('cancel')}
    </button>
  `;

  const cancel =
    $('#cx');

  if (cancel) {

    cancel.onclick =
      () => {

        tok = null;

        save();

        renderTok();

      };
  }
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function alertMe() {

  say(
    t('near')
  );

  if (
    'Notification' in window &&
    Notification.permission ===
      'granted'
  ) {

    new Notification(
      'QueueLess',
      {
        body:
          t('near')
      }
    );

  }
}


/* =========================================================
   DEMO QUEUE MOVEMENT
   ========================================================= */

setInterval(
  () => {

    if (!tok) {
      return;
    }

    if (tok.pos > 0) {
      tok.pos--;
    }

    if (
      tok.pos *
        tok.per <=
        10 &&
      !tok.notified
    ) {

      tok.notified =
        1;

      alertMe();
    }

    save();

    renderTok();

  },
  6000
);


/* =========================================================
   STAFF DASHBOARD
   ========================================================= */

let q = [
  233,
  234,
  235,
  236,
  237,
  238
];

let served = 124;


function rs() {

  if ($('#now')) {

    $('#now').textContent =
      'A-' + q[0];

  }

  if ($('#nxt')) {

    $('#nxt').textContent =
      q
        .slice(1, 4)
        .map(
          n => 'A-' + n
        )
        .join(', ');

  }

  if ($('#sv')) {

    $('#sv').textContent =
      served;

  }
}


if ($('#sgo')) {

  $('#sgo').onclick =
    () => {

      if (
        $('#scode').value ===
        '9999'
      ) {

        $('#slogin').hidden =
          true;

        $('#sdash').hidden =
          false;

        rs();

      } else {

        $('#serr').textContent =
          'Wrong staff code. The demo code is 9999.';

      }

    };
}


if ($('#call')) {

  $('#call').onclick =
    () => {

      q.shift();

      q.push(
        q[q.length - 1] + 1
      );

      served++;

      rs();
    };
}


if ($('#skip')) {

  $('#skip').onclick =
    () => {

      q.shift();

      q.push(
        q[q.length - 1] + 1
      );

      rs();
    };
}


/* =========================================================
   HELPER CHAT
   ========================================================= */

if ($('.fab')) {

  $('.fab').onclick =
    () => {

      $('#panel').hidden =
        !$('#panel').hidden;

    };
}


$$('#panel [data-q]')
  .forEach(b => {

    b.onclick =
      () => {

        const o =
          $('#ans');

        const k =
          b.dataset.q;

        if (!sel.s) {

          o.textContent =
            'Choose state, district, department and service on Home first.';

          return;
        }

        if (k === 'w') {

          const r =
            pred();

          o.textContent =
            `${sel.s}, ${sel.di}: about ${r.w} min, ${r.p} people waiting.`;

        }

        if (k === 'o') {

          o.innerHTML =
            `<a
              href="${$('#map').href}"
              target="_blank"
              rel="noopener">
              Open ${D[sel.d].n},
              ${sel.di} on map
             </a>`;

        }

        if (k === 'd') {

          o.textContent =
            'Carry: ' +
            D[sel.d].docs;

        }

      };

  });


/* =========================================================
   LOGIN STATE
   ========================================================= */

try {

  const login =
    JSON.parse(
      localStorage.getItem(
        'qlLogin'
      )
    );

  if (
    login &&
    login.loggedIn &&
    $('nav')
  ) {

    $('nav').hidden =
      false;

  }

} catch (e) {}


/* =========================================================
   START APP
   ========================================================= */

apply();
```
```javascript
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* =========================================================
   BACKEND CONFIGURATION
   ========================================================= */

// CHANGE THIS to your actual Render backend URL.
// Example:
// const API_BASE = 'https://queueless-backend.onrender.com';

const API_BASE = 'https://YOUR-RENDER-BACKEND.onrender.com';


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
    min: 'ನಿಮಿ',
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
   INDIAN STATES / DISTRICTS
   ========================================================= */

const S = {};

`Andhra Pradesh:Visakhapatnam,Vijayawada,Guntur;
Arunachal Pradesh:Itanagar,Tawang,Pasighat;
Assam:Guwahati,Dibrugarh,Silchar;
Bihar:Patna,Gaya,Muzaffarpur;
Chhattisgarh:Raipur,Bilaspur,Durg;
Goa:North Goa,South Goa;
Gujarat:Rajkot,Ahmedabad,Surat,Vadodara;
Haryana:Gurugram,Faridabad,Karnal;
Himachal Pradesh:Shimla,Kangra,Mandi;
Jharkhand:Ranchi,Dhanbad,East Singhbhum;
Karnataka:Bengaluru Urban,Mysuru,Dharwad;
Kerala:Thiruvananthapuram,Ernakulam,Kozhikode;
Madhya Pradesh:Bhopal,Indore,Jabalpur;
Maharashtra:Mumbai,Pune,Nagpur;
Manipur:Imphal West,Imphal East,Thoubal;
Meghalaya:East Khasi Hills,West Garo Hills,Ri-Bhoi;
Mizoram:Aizawl,Lunglei,Champhai;
Nagaland:Kohima,Dimapur,Mokokchung;
Odisha:Khordha,Cuttack,Puri;
Punjab:Ludhiana,Amritsar,Jalandhar;
Rajasthan:Jaipur,Jodhpur,Udaipur;
Sikkim:Gangtok,Namchi,Gyalshing;
Tamil Nadu:Chennai,Coimbatore,Madurai;
Telangana:Hyderabad,Warangal,Nizamabad;
Tripura:West Tripura,North Tripura,Dhalai;
Uttar Pradesh:Lucknow,Kanpur,Varanasi;
Uttarakhand:Dehradun,Haridwar,Nainital;
West Bengal:Kolkata,Howrah,Darjeeling;
Andaman and Nicobar Islands:South Andaman,North and Middle Andaman,Nicobar;
Chandigarh:Chandigarh;
Dadra and Nagar Haveli and Daman and Diu:Daman,Diu,Dadra and Nagar Haveli;
Delhi:New Delhi,South Delhi,North Delhi;
Jammu and Kashmir:Srinagar,Jammu,Anantnag;
Ladakh:Leh,Kargil;
Lakshadweep:Lakshadweep;
Puducherry:Puducherry,Karaikal,Mahe`
.split(';')
.forEach(x => {
  const [a, b] = x.split(':');
  S[a] = b.split(',');
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
    s: [
      'Neurologist',
      'Cardiologist',
      'Orthopaedic',
      'General Physician',
      'Paediatrician',
      'Gynaecologist',
      'Eye (Ophthalmologist)',
      'Skin (Dermatologist)'
    ]
  },

  rto: {
    i: '🚗',
    n: 'RTO',
    c: 'R',
    m: 8,
    docs: 'Aadhaar, address proof, passport photo',
    s: [
      'Driving Licence',
      'Learner Licence',
      'Vehicle Registration',
      'Fitness Certificate'
    ]
  },

  tax: {
    i: '🏛️',
    n: 'Municipal and Tax',
    c: 'M',
    m: 7,
    docs: 'Property papers, old receipt, Aadhaar',
    s: [
      'Property Tax',
      'Birth Certificate',
      'Death Certificate',
      'Trade Licence'
    ]
  },

  id: {
    i: '🪪',
    n: 'Aadhaar and ID',
    c: 'A',
    m: 5,
    docs: 'Proof of identity and address',
    s: [
      'New Aadhaar',
      'Update Aadhaar',
      'PAN Card',
      'Voter ID'
    ]
  },

  power: {
    i: '💡',
    n: 'Electricity',
    c: 'E',
    m: 6,
    docs: 'Latest bill, Aadhaar, ownership proof',
    s: [
      'New Connection',
      'Bill Payment',
      'Complaint',
      'Name Change'
    ]
  },

  police: {
    i: '🛡️',
    n: 'Police',
    c: 'P',
    m: 9,
    docs: 'Aadhaar, application form, photos',
    s: [
      'Passport Verification',
      'Character Certificate',
      'Complaint Help Desk',
      'Lost Item Report'
    ]
  }
};


/* =========================================================
   APP STATE
   ========================================================= */

let lang = 'en';

let sel = {
  st: '',
  di: '',
  d: '',
  s: ''
};

let tok = null;

try {

  tok = JSON.parse(
    localStorage.getItem('qlTok')
  );

  lang =
    localStorage.getItem('qlLang') ||
    'en';

} catch (e) {}

if (!T[lang]) {
  lang = 'en';
}

const t = k =>
  T[lang][k] ||
  T.en[k];

const save = () => {

  try {

    localStorage.setItem(
      'qlTok',
      JSON.stringify(tok)
    );

  } catch (e) {}
};

const hash = s => {

  let h = 0;

  for (const c of String(s)) {
    h =
      (h * 31 +
        c.charCodeAt(0)) |
      0;
  }

  return Math.abs(h);
};


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function apply() {

  document.documentElement.lang =
    lang;

  $$('[data-i]').forEach(e => {
    e.textContent =
      t(e.dataset.i);
  });

  if ($('#mob')) {
    $('#mob').placeholder =
      t('mob');
  }

  if ($('#lang')) {
    $('#lang').value =
      lang;
  }

  if (sel.s) {
    showQ();
  }

  renderTok();
}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function show(id) {

  $$('.screen').forEach(s => {

    s.hidden =
      s.id !== id;

  });

  $$('nav button').forEach(b => {

    b.classList.toggle(
      'on',
      b.dataset.go === id
    );

  });
}


/* =========================================================
   TEXT TO SPEECH
   ========================================================= */

function say(x) {

  if (
    !('speechSynthesis' in window)
  ) {
    return;
  }

  speechSynthesis.cancel();

  const u =
    new SpeechSynthesisUtterance(x);

  u.lang =
    V[lang];

  speechSynthesis.speak(u);
}


/* =========================================================
   HEADER
   ========================================================= */

if ($('#lang')) {

  $('#lang').innerHTML =
    Object.keys(L)
      .map(k =>
        `<option value="${k}">
          ${L[k]}
        </option>`
      )
      .join('');

  $('#lang').onchange =
    e => {

      lang =
        e.target.value;

      try {

        localStorage.setItem(
          'qlLang',
          lang
        );

      } catch (x) {}

      apply();
    };
}


if ($('#big')) {

  $('#big').onclick =
    () => {

      document.body
        .classList
        .toggle('big');

    };
}


if ($('#listen')) {

  $('#listen').onclick =
    () => {

      const screen =
        $('.screen:not([hidden])');

      if (screen) {
        say(
          screen.innerText
            .slice(0, 500)
        );
      }

    };
}


/* =========================================================
   REAL OTP - SEND OTP
   ========================================================= */

if ($('#send')) {

  $('#send').onclick =
    async () => {

      const input =
        $('#mob');

      if (!input) {
        return;
      }

      let phone =
        input.value.trim();

      /*
         Accept:
         6363119928

         Convert to:
         +916363119928
      */

      if (
        !/^[6-9]\d{9}$/
          .test(phone)
      ) {

        $('#lerr').textContent =
          'Enter a valid 10-digit mobile number.';

        return;
      }

      phone =
        '+91' + phone;

      $('#lerr').textContent =
        'Sending OTP...';

      $('#send').disabled =
        true;

      try {

        const response =
          await fetch(
            `${API_BASE}/send-otp`,
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json'
              },

              body: JSON.stringify({
                phone: phone
              })
            }
          );

        let data = {};

        try {
          data =
            await response.json();
        } catch (e) {}

        console.log(
          'SEND OTP RESPONSE:',
          data
        );

        if (!response.ok) {

          throw new Error(
            data.message ||
            data.error ||
            `Server error (${response.status})`
          );

        }

        /*
           Save phone for verify step.
        */

        if ($('#ver')) {

          $('#ver')
            .dataset
            .phone = phone;

        }

        $('#lerr').textContent =
          data.message ||
          'OTP sent successfully.';

        if ($('#codeBox')) {
          $('#codeBox').hidden =
            false;
        }

        $('#send').hidden =
          true;

        /*
           Focus OTP box.
        */

        if ($('#code')) {
          $('#code').focus();
        }

      } catch (error) {

        console.error(
          'SEND OTP ERROR:',
          error
        );

        $('#lerr').textContent =
          error.message ||
          'Failed to send OTP. Please try again.';

        $('#send').disabled =
          false;
      }

    };
}


/* =========================================================
   REAL OTP - VERIFY OTP
   ========================================================= */

if ($('#ver')) {

  $('#ver').onclick =
    async () => {

      const code =
        $('#code')
          ? $('#code')
              .value
              .trim()
          : '';

      const phone =
        $('#ver')
          .dataset
          .phone;

      if (!phone) {

        $('#lerr').textContent =
          'Please request an OTP first.';

        return;
      }

      if (
        !/^\d{4,8}$/
          .test(code)
      ) {

        $('#lerr').textContent =
          'Enter the OTP sent to your mobile.';

        return;
      }

      $('#lerr').textContent =
        'Verifying OTP...';

      $('#ver').disabled =
        true;

      try {

        const response =
          await fetch(
            `${API_BASE}/verify-otp`,
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json'
              },

              body: JSON.stringify({
                phone: phone,
                code: code
              })
            }
          );

        let data = {};

        try {
          data =
            await response.json();
        } catch (e) {}

        console.log(
          'VERIFY OTP RESPONSE:',
          data
        );

        if (!response.ok) {

          throw new Error(
            data.message ||
            data.error ||
            `Verification failed (${response.status})`
          );

        }

        /*
           Accept several common backend
           success response formats.
        */

        const approved =
          data.status === 'approved' ||
          data.valid === true ||
          data.verified === true ||
          data.success === true;

        if (!approved) {

          throw new Error(
            data.message ||
            'Invalid or expired OTP.'
          );

        }

        /*
           Login successful.
        */

        try {

          localStorage.setItem(
            'qlLogin',
            JSON.stringify({
              phone: phone,
              loggedIn: true
            })
          );

        } catch (e) {}

        $('#lerr').textContent =
          'Login successful.';

        /*
           Hide login screen if needed.
        */

        if ($('#codeBox')) {
          $('#codeBox').hidden =
            true;
        }

        /*
           Show navigation.
        */

        if ($('nav')) {
          $('nav').hidden =
            false;
        }

        /*
           Go to Home.
        */

        show('home');

      } catch (error) {

        console.error(
          'VERIFY OTP ERROR:',
          error
        );

        $('#lerr').textContent =
          error.message ||
          'Wrong or expired OTP.';

      } finally {

        $('#ver').disabled =
          false;

      }

    };
}


/* =========================================================
   NAVIGATION BUTTONS
   ========================================================= */

$$('nav button').forEach(b => {

  b.onclick =
    () => {

      show(
        b.dataset.go
      );

    };

});


/* =========================================================
   STATE / DISTRICT
   ========================================================= */

const opts =
  (a, ph) =>
    `<option value="">
      ${ph}
    </option>` +
    a
      .map(
        x =>
          `<option>${x}</option>`
      )
      .join('');


if ($('#st')) {

  $('#st').innerHTML =
    opts(
      Object.keys(S),
      'Select'
    );

  $('#st').onchange =
    e => {

      sel = {
        st: e.target.value,
        di: '',
        d: '',
        s: ''
      };

      $('#di').innerHTML =
        opts(
          S[sel.st] || [],
          'Select'
        );

      $('#di').disabled =
        !sel.st;

      $('#pick').hidden =
        true;

      $('#svcs').hidden =
        true;

      $('#queue').hidden =
        true;
    };
}


if ($('#di')) {

  $('#di').onchange =
    e => {

      sel.di =
        e.target.value;

      sel.d = '';
      sel.s = '';

      $('#svcs').hidden =
        true;

      $('#queue').hidden =
        true;

      $('#pick').hidden =
        !sel.di;
    };
}


/* =========================================================
   DEPARTMENTS
   ========================================================= */

if ($('#depts')) {

  $('#depts').innerHTML =
    Object.keys(D)
      .map(
        k =>
          `<button
             class="card"
             data-d="${k}">
             <span class="ic">
               ${D[k].i}
             </span>
             ${D[k].n}
           </button>`
      )
      .join('');

  $$('#depts .card')
    .forEach(b => {

      b.onclick =
        () => {

          sel.d =
            b.dataset.d;

          sel.s = '';

          $$('#depts .card')
            .forEach(x => {

              x.classList.toggle(
                'on',
                x === b
              );

            });

          $('#svcList').innerHTML =
            D[sel.d].s
              .map(
                n =>
                  `<button class="card">
                     ${n}
                   </button>`
              )
              .join('');

          $$('#svcList .card')
            .forEach(c => {

              c.onclick =
                () => {

                  sel.s =
                    c.textContent.trim();

                  $$('#svcList .card')
                    .forEach(x => {

                      x.classList.toggle(
                        'on',
                        x === c
                      );

                    });

                  showQ();

                  $('#queue')
                    .scrollIntoView({
                      behavior:
                        'smooth'
                    });

                };

            });

          $('#svcs').hidden =
            false;

          $('#queue').hidden =
            true;
        };

    });
}


/* =========================================================
   QUEUE PREDICTION
   ========================================================= */

function pred() {

  if (!sel.d ||
      !D[sel.d]) {

    return {
      p: 0,
      w: 0,
      c: 0
    };
  }

  const h =
    hash(
      sel.st +
      sel.di +
      sel.d +
      sel.s +
      new Date()
        .getHours()
    );

  const p =
    5 + h % 36;

  const w =
    Math.round(
      p *
      D[sel.d].m /
      2
    );

  return {
    p: p,
    w: w,
    c: 80 + h % 15
  };
}


function showQ() {

  if (!sel.d ||
      !sel.s) {

    return;
  }

  const q =
    pred();

  $('#qn').textContent =
    sel.s;

  $('#qsub').textContent =
    `${D[sel.d].n}, ${sel.di}, ${sel.st}`;

  $('#pp').textContent =
    q.p;

  $('#ww').textContent =
    q.w +
    ' ' +
    t('min');

  $('#cf').textContent =
    q.c +
    '%';

  $('#sts').textContent =
    q.w < 20
      ? 'Quiet'
      : q.w < 45
        ? 'Moving normally'
        : 'Busy';

  $('#docs').textContent =
    D[sel.d].docs;

  $('#map').href =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      D[sel.d].n +
      ' ' +
      sel.di +
      ' ' +
      sel.st
    );

  $('#queue').hidden =
    false;
}


/* =========================================================
   GET TOKEN
   ========================================================= */

if ($('#get')) {

  $('#get').onclick =
    () => {

      if (
        !sel.st ||
        !sel.di ||
        !sel.d ||
        !sel.s
      ) {

        alert(
          'Please select state, district, department and service.'
        );

        return;
      }

      const q =
        pred();

      const a =
        D[sel.d];

      tok = {

        ...sel,

        n:
          a.c +
          '-' +
          (
            200 +
            hash(
              sel.s +
              Date.now()
            ) % 99
          ),

        pos:
          Math.max(
            3,
            Math.ceil(q.p / 2)
          ),

        per:
          a.m / 2,

        sms:
          $('#sms')
            ? $('#sms').checked
            : false,

        notified: 0
      };

      save();

      if (
        'Notification' in window &&
        Notification.permission ===
          'default'
      ) {

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

  const e =
    $('#tokbox');

  if (!e) {
    return;
  }

  if (!tok) {

    e.innerHTML =
      `<p>
        ${t('none')}
       </p>`;

    return;
  }

  const w =
    Math.round(
      tok.pos *
      tok.per
    );

  e.innerHTML = `

    <div class="ticket">

      <div class="no">
        ${tok.n}
      </div>

      <div class="tx">

        <b>${tok.s}</b><br>

        ${D[tok.d].n},
        ${tok.di}<br>

        Position #${tok.pos},
        about ${w}
        ${t('min')}

      </div>

    </div>

    ${
      w <= 10
        ? `
          <div
            class="banner"
            role="alert">
            ${t('near')}
          </div>
        `
        : ''
    }

    <p>
      Arrive within 10 minutes
      of being called,
      or your token may be skipped.
    </p>

    <p class="demo">
      Demo: the position moves
      every 6 seconds.
      ${
        tok.sms
          ? ' SMS alerts need a server to work.'
          : ''
      }
    </p>

    <button
      class="card"
      id="cx">
      ${t('cancel')}
    </button>
  `;

  const cancel =
    $('#cx');

  if (cancel) {

    cancel.onclick =
      () => {

        tok = null;

        save();

        renderTok();

      };
  }
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function alertMe() {

  say(
    t('near')
  );

  if (
    'Notification' in window &&
    Notification.permission ===
      'granted'
  ) {

    new Notification(
      'QueueLess',
      {
        body:
          t('near')
      }
    );

  }
}


/* =========================================================
   DEMO QUEUE MOVEMENT
   ========================================================= */

setInterval(
  () => {

    if (!tok) {
      return;
    }

    if (tok.pos > 0) {
      tok.pos--;
    }

    if (
      tok.pos *
        tok.per <=
        10 &&
      !tok.notified
    ) {

      tok.notified =
        1;

      alertMe();
    }

    save();

    renderTok();

  },
  6000
);


/* =========================================================
   STAFF DASHBOARD
   ========================================================= */

let q = [
  233,
  234,
  235,
  236,
  237,
  238
];

let served = 124;


function rs() {

  if ($('#now')) {

    $('#now').textContent =
      'A-' + q[0];

  }

  if ($('#nxt')) {

    $('#nxt').textContent =
      q
        .slice(1, 4)
        .map(
          n => 'A-' + n
        )
        .join(', ');

  }

  if ($('#sv')) {

    $('#sv').textContent =
      served;

  }
}


if ($('#sgo')) {

  $('#sgo').onclick =
    () => {

      if (
        $('#scode').value ===
        '9999'
      ) {

        $('#slogin').hidden =
          true;

        $('#sdash').hidden =
          false;

        rs();

      } else {

        $('#serr').textContent =
          'Wrong staff code. The demo code is 9999.';

      }

    };
}


if ($('#call')) {

  $('#call').onclick =
    () => {

      q.shift();

      q.push(
        q[q.length - 1] + 1
      );

      served++;

      rs();
    };
}


if ($('#skip')) {

  $('#skip').onclick =
    () => {

      q.shift();

      q.push(
        q[q.length - 1] + 1
      );

      rs();
    };
}


/* =========================================================
   HELPER CHAT
   ========================================================= */

if ($('.fab')) {

  $('.fab').onclick =
    () => {

      $('#panel').hidden =
        !$('#panel').hidden;

    };
}


$$('#panel [data-q]')
  .forEach(b => {

    b.onclick =
      () => {

        const o =
          $('#ans');

        const k =
          b.dataset.q;

        if (!sel.s) {

          o.textContent =
            'Choose state, district, department and service on Home first.';

          return;
        }

        if (k === 'w') {

          const r =
            pred();

          o.textContent =
            `${sel.s}, ${sel.di}: about ${r.w} min, ${r.p} people waiting.`;

        }

        if (k === 'o') {

          o.innerHTML =
            `<a
              href="${$('#map').href}"
              target="_blank"
              rel="noopener">
              Open ${D[sel.d].n},
              ${sel.di} on map
             </a>`;

        }

        if (k === 'd') {

          o.textContent =
            'Carry: ' +
            D[sel.d].docs;

        }

      };

  });


/* =========================================================
   LOGIN STATE
   ========================================================= */

try {

  const login =
    JSON.parse(
      localStorage.getItem(
        'qlLogin'
      )
    );

  if (
    login &&
    login.loggedIn &&
    $('nav')
  ) {

    $('nav').hidden =
      false;

  }

} catch (e) {}


/* =========================================================
   START APP
   ========================================================= */

apply();
```
