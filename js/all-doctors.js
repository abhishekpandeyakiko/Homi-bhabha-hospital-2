(function() {
  const doctorsDb = [
    {
      name: "Dr. Preeti Sharma",
      slug: "preeti-sharma",
      specialty: "Medical Oncologist",
      img: "images/team/01.jpg",
      degrees: "MD, DM (Medical Oncology)",
      experience: "12+ Years",
      dept: "Medical Oncology",
      opdWeekday: "09:00 AM - 04:00 PM",
      opdSaturday: "09:00 AM - 01:00 PM"
    },
    {
      name: "Dr. Sunita Patel",
      slug: "sunita-patel",
      specialty: "Surgical Oncologist",
      img: "images/team/02.jpg",
      degrees: "MS, MCh (Surgical Oncology)",
      experience: "15+ Years",
      dept: "Breast & Gynecological Oncology",
      opdWeekday: "10:00 AM - 05:00 PM",
      opdSaturday: "10:00 AM - 02:00 PM"
    },
    {
      name: "Dr. Vikram Malhotra",
      slug: "vikram-malhotra",
      specialty: "Radiation Oncologist",
      img: "images/team/03.jpg",
      degrees: "MD, DNB (Radiation Oncology)",
      experience: "10+ Years",
      dept: "Radiation Oncology",
      opdWeekday: "09:00 AM - 04:00 PM",
      opdSaturday: "Closed"
    },
    {
      name: "Dr. Sandeep Kapoor",
      slug: "sandeep-kapoor",
      specialty: "Robotic Oncologist",
      img: "images/team/04.jpg",
      degrees: "MS, MCh (Surgical Oncology)",
      experience: "18+ Years",
      dept: "Robotic Surgery",
      opdWeekday: "10:00 AM - 04:00 PM",
      opdSaturday: "10:00 AM - 01:00 PM"
    },
    {
      name: "Dr. Anjali Mehta",
      slug: "anjali-mehta",
      specialty: "Hemato Oncologist",
      img: "images/team/05.jpg",
      degrees: "MD, DM (Clinical Hematology)",
      experience: "8+ Years",
      dept: "Hematology & BMT Unit",
      opdWeekday: "09:00 AM - 03:00 PM",
      opdSaturday: "09:00 AM - 12:00 PM"
    },
    {
      name: "Dr. Rohan Gupta",
      slug: "rohan-gupta",
      specialty: "Surgical Oncologist",
      img: "images/team/06.jpg",
      degrees: "MS, MCh (Surgical Oncology)",
      experience: "11+ Years",
      dept: "Head & Neck Surgery",
      opdWeekday: "09:30 AM - 04:30 PM",
      opdSaturday: "09:30 AM - 01:30 PM"
    }
  ];

  // Helper to adjust relative paths based on folder depth
  function getAdjustedPath(path) {
    const isSubdir = window.location.pathname.toLowerCase().indexOf('/pages/') !== -1 || window.location.pathname.toLowerCase().indexOf('\\pages\\') !== -1;
    return isSubdir ? "../" + path : path;
  }

  // Create Modal element and append to body
  function createDoctorsModal() {
    if (document.getElementById('all-doctors-modal')) return;

    const modalHTML = `
      <div id="all-doctors-modal" class="all-doctors-modal-overlay">
        <div class="all-doctors-modal-wrapper">
          <div class="all-doctors-modal-header">
            <div class="header-title-container">
              <span class="header-badge">Homi Bhabha Hospital</span>
              <h2 class="all-doctors-modal-title">Our Oncology Specialists</h2>
            </div>
            <button id="close-doctors-modal" class="all-doctors-close-btn" aria-label="Close modal">
              <i class="bi bi-x"></i>
            </button>
          </div>
          <div class="all-doctors-modal-body">
            <div class="all-doctors-grid">
              ${doctorsDb.map(doc => `
                <div class="all-doctors-card">
                  <div class="all-doctors-card-img-wrapper">
                    <img class="all-doctors-card-img" src="${getAdjustedPath(doc.img)}" alt="${doc.name}">
                  </div>
                  <div class="all-doctors-card-info">
                    <span class="all-doctors-card-specialty">${doc.specialty}</span>
                    <h4 class="all-doctors-card-name">${doc.name}</h4>
                    <p class="all-doctors-card-degrees">${doc.degrees}</p>
                  </div>
                  <!-- Hover Overlay Details -->
                  <div class="all-doctors-card-hover-overlay">
                    <div class="hover-details-content">
                      <span class="hover-specialty">${doc.specialty}</span>
                      <h4 class="hover-name">${doc.name}</h4>
                      <hr class="hover-divider">
                      <ul class="hover-details-list">
                        <li><i class="bi bi-award-fill"></i> <strong>Exp:</strong> ${doc.experience}</li>
                        <li><i class="bi bi-building-fill"></i> <strong>Dept:</strong> ${doc.dept}</li>
                        <li><i class="bi bi-calendar-check-fill"></i> <strong>OPD Mon-Fri:</strong> ${doc.opdWeekday}</li>
                        <li><i class="bi bi-clock-fill"></i> <strong>OPD Sat:</strong> ${doc.opdSaturday}</li>
                      </ul>
                      <a href="${getAdjustedPath('Pages/team-single.html?doc=' + doc.slug)}" target="_blank" class="hover-view-more-btn">
                        <span>View Full Profile</span> <i class="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = modalHTML;
    document.body.appendChild(tempDiv.firstElementChild);

    // Event listener to close modal
    document.getElementById('close-doctors-modal').addEventListener('click', closeDoctorsModal);
    document.getElementById('all-doctors-modal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeDoctorsModal();
      }
    });
  }

  function showDoctorsModal() {
    createDoctorsModal();
    const modal = document.getElementById('all-doctors-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable background scroll
  }

  function closeDoctorsModal() {
    const modal = document.getElementById('all-doctors-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable background scroll
    }
  }

  // Bind click listener on "View All Doctors" button
  function initModalTrigger() {
    const btn = document.getElementById('view-all-doctors-btn');
    if (btn) {
      // Remove existing listeners by cloning or just overriding click
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        showDoctorsModal();
      });
    }
  }

  // Hook into DOMContentLoaded or custom event depending on dynamic loader
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModalTrigger);
  } else {
    initModalTrigger();
  }

  // Expose internationally to handle dynamic re-binding if components are loaded later
  window.initDoctorsModal = initModalTrigger;

})();
