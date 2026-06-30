/* ══════════════════════════════
    ACTIVE NAV HIGHLIGHT ON SCROLL
══════════════════════════════ */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function highlightNav() {
    let current = '';
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top <= 110) current = sec.id;
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.dataset.section === current);
    });
}

highlightNav();
window.addEventListener('scroll', highlightNav, { passive: true });


/* ══════════════════════════════
    PROJECT FILTER
══════════════════════════════ */
const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.filter;

        // Show / hide cards
        projectCards.forEach(card => {
        const match = cat === 'semua' || card.dataset.category === cat;
        card.classList.toggle('hidden', !match);
        });
    });
});


/* ══════════════════════════════
    CONTACT FORM VALIDATION
══════════════════════════════ */
document.getElementById('send-btn').addEventListener('click', () => {
    const name    = document.getElementById('inp-name');
    const email   = document.getElementById('inp-email');
    const msg     = document.getElementById('inp-msg');
    const errName = document.getElementById('err-name');
    const errMail = document.getElementById('err-email');
    const errMsg  = document.getElementById('err-msg');
    const success = document.getElementById('success-msg');

    let valid = true;

    // Reset state
    [name, email, msg].forEach(el => el.classList.remove('error'));
    [errName, errMail, errMsg].forEach(el => el.classList.remove('show'));
    success.classList.remove('show');

    // Validasi — tampilkan pesan merah jika kosong
    if (!name.value.trim()) {
        name.classList.add('error');
        errName.classList.add('show');
        valid = false;
    }

    if (!email.value.trim()) {
        email.classList.add('error');
        errMail.classList.add('show');
        valid = false;
    }

    if (!msg.value.trim()) {
        msg.classList.add('error');
        errMsg.classList.add('show');
        valid = false;
    }

  // Jika semua valid, tampilkan pesan sukses & reset form
    if (valid) {
        success.classList.add('show');
        name.value  = '';
        email.value = '';
        msg.value   = '';
    }
});