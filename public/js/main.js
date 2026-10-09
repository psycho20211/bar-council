/* ============================================
   ASSOCIATION WEBSITE — SHARED JAVASCRIPT
   ============================================ */

/* --- Shared Layout Data --- */
const ASSOCIATION_NAME = "National Professional Association";
const ASSOCIATION_SHORT = "NPA";
const ASSOCIATION_FULL = "National Professional Association of Engineers & Specialists";

/* --- Render Top Bar --- */
function renderTopBar() {
  return `
    <div class="top-bar d-none d-md-block">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center gap-3">
            <a href="tel:+18001234567"><i class="bi bi-telephone-fill me-1"></i> +1 (800) 123-4567</a>
            <span class="divider">|</span>
            <a href="mailto:info@npa-association.org"><i class="bi bi-envelope-fill me-1"></i> info@npa-association.org</a>
          </div>
          <div class="d-flex align-items-center gap-3">
            <a href="contact.html" class="helpline"><i class="bi bi-shield-exclamation me-1"></i> Emergency Helpline</a>
            <span class="divider">|</span>
            <a href="members.html"><i class="bi bi-person-circle me-1"></i> Member Login</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* --- Render Navbar --- */
function renderNavbar(activePage) {
  const navItems = [
    { label: 'Home', href: 'index.html', key: 'home' },
    {
      label: 'About', key: 'about',
      children: [
        { label: 'About Association', href: 'about.html' },
        { label: "President's Message", href: 'president-message.html' },
        { label: "Secretary's Message", href: 'secretary-message.html' },
        { label: 'Executive Committee', href: 'executive-committee.html' },
        { label: 'Subcommittees', href: 'subcommittees.html' },
      ]
    },
    { label: 'Members', href: 'members.html', key: 'members' },
    {
      label: 'Media & News', key: 'media',
      children: [
        { label: 'Official Notices', href: 'notices.html' },
        { label: 'Recent News', href: 'news.html' },
        { label: 'Upcoming Events', href: 'events.html' },
        { label: 'Gallery', href: 'gallery.html' },
      ]
    },
    { label: 'Articles', href: 'articles.html', key: 'articles' },
    { label: 'Downloads', href: 'forms-downloads.html', key: 'downloads' },
    { label: 'Contact', href: 'contact.html', key: 'contact' },
  ];

  let navHTML = navItems.map(item => {
    if (item.children) {
      const isActive = item.children.some(c => c.href === activePage) || item.key === activePage;
      const dropdownItems = item.children.map(c =>
        `<li><a class="dropdown-item" href="${c.href}">${c.label}</a></li>`
      ).join('');
      return `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle ${isActive ? 'active' : ''}" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${item.label} <i class="bi bi-chevron-down"></i>
          </a>
          <ul class="dropdown-menu">${dropdownItems}</ul>
        </li>
      `;
    }
    return `
      <li class="nav-item">
        <a class="nav-link ${item.href === activePage ? 'active' : ''}" href="${item.href}">${item.label}</a>
      </li>
    `;
  }).join('');

  return `
    <nav class="navbar navbar-expand-lg navbar-main sticky-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
          <div class="d-flex align-items-center justify-content-center" style="width:48px;height:48px;background:var(--accent-blue);border-radius:12px;flex-shrink:0;">
            <i class="bi bi-building-fill" style="font-size:1.4rem;color:#fff;"></i>
          </div>
          <div>
            <div class="navbar-brand-text">${ASSOCIATION_SHORT}</div>
            <div class="navbar-brand-sub">${ASSOCIATION_NAME}</div>
          </div>
        </a>
        <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="bi bi-list text-white" style="font-size:1.6rem;"></i>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto align-items-lg-center">
            ${navHTML}
            <li class="nav-item ms-lg-2">
              <a href="members.html" class="btn btn-accent ms-lg-2">Join Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

/* --- Render Footer --- */
function renderFooter() {
  return `
    <footer class="footer-main">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="d-flex align-items-center gap-2 mb-3">
              <div class="d-flex align-items-center justify-content-center" style="width:44px;height:44px;background:var(--accent-blue);border-radius:12px;">
                <i class="bi bi-building-fill" style="font-size:1.3rem;color:#fff;"></i>
              </div>
              <div>
                <div style="font-family:var(--font-heading);font-weight:700;font-size:1.2rem;color:#fff;">${ASSOCIATION_SHORT}</div>
                <div style="font-size:.7rem;color:var(--slate-light);letter-spacing:.1em;text-transform:uppercase;">${ASSOCIATION_NAME}</div>
              </div>
            </div>
            <p style="font-size:.9rem;line-height:1.7;">
              ${ASSOCIATION_FULL} is dedicated to serving our community through professional excellence, advocacy, and collective growth since 1985.
            </p>
            <div class="footer-social mt-3">
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-6">
            <h5>Quick Links</h5>
            <ul class="footer-link-list">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="members.html">Members</a></li>
              <li><a href="articles.html">Articles</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 col-6">
            <h5>Resources</h5>
            <ul class="footer-link-list">
              <li><a href="notices.html">Notices</a></li>
              <li><a href="news.html">News</a></li>
              <li><a href="events.html">Events</a></li>
              <li><a href="forms-downloads.html">Downloads</a></li>
              <li><a href="gallery.html">Gallery</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h5>Emergency Contacts</h5>
            <div class="mb-2" style="font-size:.9rem;">
              <i class="bi bi-telephone-fill me-2" style="color:var(--accent-red);"></i>
              <a href="tel:911" style="color:#fff;font-weight:600;">911</a> — General Emergency
            </div>
            <div class="mb-2" style="font-size:.9rem;">
              <i class="bi bi-shield-exclamation me-2" style="color:var(--accent-red);"></i>
              <a href="tel:18005550111" style="color:#fff;font-weight:600;">1-800-555-0111</a> — Association Helpline
            </div>
            <div class="mb-3" style="font-size:.9rem;">
              <i class="bi bi-hospital me-2" style="color:var(--accent-red);"></i>
              <a href="tel:18005550222" style="color:#fff;font-weight:600;">1-800-555-0222</a> — Medical Support
            </div>
            <h5 class="mt-4">Newsletter</h5>
            <form class="footer-newsletter d-flex gap-2" onsubmit="event.preventDefault(); this.querySelector('input').value=''; alert('Subscribed successfully!');">
              <input type="email" class="form-control" placeholder="Your email address" required style="flex:1;">
              <button class="btn btn-accent" type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="d-md-flex justify-content-between text-center">
            <div>&copy; ${new Date().getFullYear()} ${ASSOCIATION_FULL}. All rights reserved.</div>
            <div class="mt-2 mt-md-0">
              <a href="about.html" class="me-3">Privacy Policy</a>
              <a href="about.html" class="me-3">Terms of Service</a>
              <a href="contact.html">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* --- Inject Layout --- */
function injectLayout(activePage) {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');
  if (headerEl) headerEl.innerHTML = renderTopBar() + renderNavbar(activePage);
  if (footerEl) footerEl.innerHTML = renderFooter();
}

/* --- Navbar Scroll Effect --- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-main');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

/* --- Fade-Up Animation on Scroll --- */
function initFadeUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* --- Member Search Filter --- */
function initMemberSearch() {
  const searchInput = document.getElementById('member-search');
  const filterSelects = document.querySelectorAll('.member-filter');
  const memberCards = document.querySelectorAll('.member-card');
  const noResults = document.getElementById('no-results');
  if (!searchInput) return;

  function filterMembers() {
    const query = searchInput.value.toLowerCase().trim();
    const filters = {};
    filterSelects.forEach(sel => {
      if (sel.value) filters[sel.dataset.filter] = sel.value.toLowerCase();
    });

    let visibleCount = 0;
    memberCards.forEach(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const designation = (card.dataset.designation || '').toLowerCase();
      const id = (card.dataset.id || '').toLowerCase();
      const blood = (card.dataset.blood || '').toLowerCase();

      const matchesQuery = !query ||
        name.includes(query) || designation.includes(query) || id.includes(query) || blood.includes(query);
      const matchesFilters =
        (!filters.designation || designation.includes(filters.designation)) &&
        (!filters.blood || blood === filters.blood) &&
        (!filters.department || (card.dataset.department || '').toLowerCase().includes(filters.department));

      if (matchesQuery && matchesFilters) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  searchInput.addEventListener('input', filterMembers);
  filterSelects.forEach(sel => sel.addEventListener('change', filterMembers));
}

/* --- Article Search & Filter --- */
function initArticleSearch() {
  const searchInput = document.getElementById('article-search');
  const categoryPills = document.querySelectorAll('.category-pill');
  const articleCards = document.querySelectorAll('.article-grid-card');
  if (!searchInput && !categoryPills.length) return;

  let activeCategory = 'all';

  function filterArticles() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    let visibleCount = 0;
    articleCards.forEach(card => {
      const title = (card.dataset.title || '').toLowerCase();
      const excerpt = (card.dataset.excerpt || '').toLowerCase();
      const category = card.dataset.category || '';
      const matchesQuery = !query || title.includes(query) || excerpt.includes(query);
      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      if (matchesQuery && matchesCategory) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  }

  searchInput?.addEventListener('input', filterArticles);
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category || 'all';
      filterArticles();
    });
  });
}

/* --- Gallery Filter --- */
function initGalleryFilter() {
  const filterPills = document.querySelectorAll('.gallery-filter-pill');
  const galleryItems = document.querySelectorAll('.gallery-grid-item');
  if (!filterPills.length) return;

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const category = pill.dataset.category || 'all';
      galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
      successMsg.style.display = 'block';
      form.reset();
      setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
    }
  });
}

/* --- Homepage Member Quick Search --- */
function initHomeMemberSearch() {
  const form = document.getElementById('home-member-search');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'members.html';
  });
}

/* --- Init All --- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initFadeUp();
  initMemberSearch();
  initArticleSearch();
  initGalleryFilter();
  initContactForm();
  initHomeMemberSearch();
});
