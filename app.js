// Aadhaar-style UI with working service buttons

const services = [
  { id: 'pmk', name: 'PM-Kisan', icon: 'fa-tractor', tag: 'farmer', desc: 'Farmer subsidy & beneficiary services', options: [
    {name:'New Registration', url:'https://pmkisan.gov.in/homenew.aspx'},
    {name:'e-KYC', url:'https://pmkisan.gov.in/homenew.aspx'},
    {name:'Beneficiary Status', url:'https://pmkisan.gov.in/homenew.aspx'}
    ]},
      { id: 'rat', name: 'Ration Card', icon: 'fa-id-card', tag: 'farmer', desc: 'Farmer subsidy & beneficiary services', options: [
    {name:'New Registration or Add Family Member', url:'https://wbpds.wb.gov.in/rcmsnew/AadhaarAuthenticationLogin/Index'},
    {name:'Ration Card Status Check', url:'https://wbpds.wb.gov.in/rcmsnew/Citizen/CheckApplicationStatus'},
    {name:'Download E-Ration Card', url:'https://wbpds.wb.gov.in/(S(n41dvcrnk3bapsm43iu1co2w))/E_Card_Download.aspx'},
    {name:'E-kyc or Aaadhar Link or Active Ration', url:'https://wbpds.wb.gov.in/(S(e11x30mc2pmtaux0fdftm0ii))/EKYC_otp.aspx'}
  ]},
     { id: 'sch', name: 'Aikyashree Scholarship', icon: 'fa-solid fa-book', tag: 'farmer', desc: 'status check,renewal,new Registration', options: [
    {name:'New Registration', url:'https://wbmdfcscholarship.in/aikya_app/district1.php'},
    {name:'Status Check', url:'https://wbpds.wb.gov.in/rcmsnew/Citizen/CheckApplicationStatus'},
    {name:'RENEWAL APPLICATION', url:'https://wbmdfcscholarship.in/aikya_app/district4.php'},
    {name:'STUDENT LOGIN', url:'https://wbmdfcscholarship.in/aikya_app/district2.php'}
  ]},
  { id:'aad', name:'Aadhaar Card', icon:'fa-id-card', tag:'identity', desc:'UIDAI: download, check status & link mobile', options:[
    {name:'Status Check', url:'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en'},
    {name:'Download e-Aadhaar', url:'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en'},
    {name:'Mobile Number Link Status', url:'https://myaadhaar.uidai.gov.in/check-aadhaar-validity/en'}
  ]},
  { id:'voter', name:'Voter ID', icon:'fa-vote-yea', tag:'voting', desc:'Register & download voter ID', options:[
    {name:'New Registration', url:'https://voters.eci.gov.in/'},
    {name:'Check Status', url:'https://voters.eci.gov.in/'},
    {name:'Download Voter ID', url:'https://voters.eci.gov.in/'}
  ]},
  { id:'pan', name:'PAN / Income Tax', icon:'fa-id-badge', tag:'tax', desc:'PAN & income tax portal', options:[
    {name:'Check Status', url:'https://www.incometax.gov.in/iec/foportal/'}
    ]},
  { id:'kri', name:'Krishak Bandhu', icon:'fa-solid fa-user-group', tag:'tax', desc:'Krishak Bandhu', options:[
    {name:'Check Status', url:'https://krishakbandhu.wb.gov.in/farmer_search'}
  ]}
];

const serviceGrid = document.getElementById('serviceGrid');

// Create service card
function createCard(s){
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="icon"><i class="fa ${s.icon}"></i></div>
    <div class="name">${s.name}</div>
  `;
  card.onclick = ()=> openSheet(s);
  return card;
}

// Render service cards
function renderGrid(list){
  serviceGrid.innerHTML = '';
  list.forEach(s=> serviceGrid.appendChild(createCard(s)));
}

// Bottom sheet popup
function openSheet(service){
  let sheet = document.getElementById('sheet');
  if(!sheet){
    sheet = document.createElement('div');
    sheet.id = 'sheet';
    sheet.className = 'sheet';
    sheet.innerHTML = `
      <div class="sheet-content">
        <button id="closeSheet" class="close-btn"><i class="fa fa-times"></i></button>
        <h3 id="sheetTitle"></h3>
        <p id="sheetDesc"></p>
        <div id="sheetLinks" class="sheet-links"></div>
      </div>
    `;
    document.body.appendChild(sheet);
    document.getElementById('closeSheet').onclick = ()=> sheet.classList.remove('open');
  }

  document.getElementById('sheetTitle').textContent = service.name;
  document.getElementById('sheetDesc').textContent = service.desc;
  const links = document.getElementById('sheetLinks');
  links.innerHTML = service.options.map(o=>
    `<a href="${o.url}" target="_blank" class="link-btn">${o.name} <i class="fa fa-external-link"></i></a>`
  ).join('');

  sheet.classList.add('open');
}

renderGrid(services);
// Tab navigation
const tabs = document.querySelectorAll('.tab-btn');
const serviceGridSection = document.querySelector('.main'); // services area
const aboutPage = document.getElementById('aboutPage');
const policyPage = document.getElementById('policyPage');
const helpPage = document.getElementById('helpPage');

function showPage(tab){
  // Hide all
  serviceGridSection.style.display = 'none';
  aboutPage.classList.add('hidden');
  policyPage.classList.add('hidden');
  helpPage.classList.add('hidden');

  if(tab === 'services') serviceGridSection.style.display = 'block';
  if(tab === 'about') aboutPage.classList.remove('hidden');
  if(tab === 'policy') policyPage.classList.remove('hidden');
  if(tab === 'help') helpPage.classList.remove('hidden');
}

tabs.forEach(btn=>{
  btn.addEventListener('click', ()=> showPage(btn.dataset.tab));
});

// Default page
showPage('services');
