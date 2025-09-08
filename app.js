const services = [
  {
    name: "PM-Kisan",
    icon: "fa-tractor",
    options: [
      { name: "New Registration", url: "https://pmkisan.gov.in/homenew.aspx", icon: "fa-pencil" },
      { name: "e-KYC", url: "https://pmkisan.gov.in/homenew.aspx", icon: "fa-id-card" },
      { name: "Beneficiary Status", url: "https://pmkisan.gov.in/homenew.aspx", icon: "fa-info-circle" }
    ]
  },
  {
    name: "Aadhaar Card",
    icon: "fa-id-card",
    options: [
      { name: "Status Check", url: "https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en", icon: "fa-search" },
      { name: "Download e-Aadhaar", url: "https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en", icon: "fa-download" },
      { name: "Mobile Number Link Status", url: "https://myaadhaar.uidai.gov.in/check-aadhaar-validity/en", icon: "fa-mobile-alt" }
    ]
  },
  {
    name: "Voter ID",
    icon: "fa-vote-yea",
    options: [
      { name: "New Registration", url: "https://www.nvsp.in/", icon: "fa-user-plus" },
      { name: "Check Status", url: "https://www.nvsp.in/", icon: "fa-search" },
      { name: "Download Voter ID", url: "https://www.nvsp.in/", icon: "fa-download" },
      { name: "Mobile Number Link", url: "https://www.nvsp.in/", icon: "fa-mobile-alt" }
    ]
  },
  {
    name: "PAN-Aadhaar",
    icon: "fa-id-badge",
    options: [
      { name: "Check Status", url: "https://www.incometax.gov.in/iec/foportal/", icon: "fa-search" }
    ]
  }
];

const serviceList = document.getElementById("service-list");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "service-card";
  card.innerHTML = `<i class="fa ${service.icon}"></i>
                    <div class="service-name">${service.name}</div>`;

  const subList = document.createElement("div");
  subList.className = "sub-options";

  service.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "sub-option";
    btn.innerHTML = `<i class="fa ${opt.icon}"></i> ${opt.name}`;
    btn.onclick = (e) => {
      e.stopPropagation();
      window.open(opt.url, "_blank");
    };
    subList.appendChild(btn);
  });

  card.appendChild(subList);

  // Smooth slide-down toggle
  card.addEventListener("click", () => {
    if(subList.style.maxHeight){
      subList.style.maxHeight = null;
      subList.style.opacity = 0;
      subList.style.transform = 'translateY(-10px)';
      subList.style.padding = "0px 0";
    } else {
      subList.style.maxHeight = subList.scrollHeight + "px";
      subList.style.opacity = 1;
      subList.style.transform = 'translateY(0)';
      subList.style.padding = "8px 0";
    }
  });

  serviceList.appendChild(card);
});

// Floating Action Button
function openHelp(){
  window.open("https://www.nvsp.in/", "_blank");
}