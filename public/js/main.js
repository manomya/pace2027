/**
 * PACE-2027 Client-side JavaScript
 * Handles live countdown, mobile menu, active navigation, and form submissions
 */

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initCountdown();
  initContactForm();
  initRegistrationModal();
  highlightActiveNav();
});

// 1. Mobile Menu Toggle
function initBurgerMenu() {
  const burger = document.getElementById('burger');
  const navlist = document.getElementById('navlist');
  if (!burger || !navlist) return;

  burger.addEventListener('click', () => {
    const isOpen = navlist.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navlist.contains(e.target)) {
      navlist.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// 2. Countdown Timer
function initCountdown() {
  const elD = document.getElementById('cd-d');
  const elH = document.getElementById('cd-h');
  const elM = document.getElementById('cd-m');
  const elS = document.getElementById('cd-s');

  if (!elD || !elH || !elM || !elS) return;

  const target = new Date('2027-01-29T09:00:00+05:30').getTime();

  function tick() {
    let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const d = Math.floor(s / 86400);
    s -= d * 86400;
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;

    elD.textContent = d;
    elH.textContent = String(h).padStart(2, '0');
    elM.textContent = String(m).padStart(2, '0');
    elS.textContent = String(s).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

// 3. Highlight Active Navigation Link
function highlightActiveNav() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const links = document.querySelectorAll('.nav-in a[href]');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path !== '/' && href !== '/' && href.startsWith(path))) {
      link.classList.add('on');
      // If inside dropdown, also highlight parent menu item
      const parentSub = link.closest('.has-sub');
      if (parentSub) {
        const parentLink = parentSub.querySelector(':scope > a');
        if (parentLink) parentLink.classList.add('on');
      }
    } else {
      link.classList.remove('on');
    }
  });
}

// 4. Contact Form Handler (if present)
function initContactForm() {
  const form = document.getElementById('contact-form');
  const responseBox = document.getElementById('form-response');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();

      if (responseBox) {
        responseBox.style.display = 'block';
        if (result.success) {
          responseBox.className = 'form-alert success';
          responseBox.innerHTML = `<strong>Thank you!</strong> ${result.message}`;
          form.reset();
        } else {
          responseBox.className = 'form-alert error';
          responseBox.innerHTML = `<strong>Error:</strong> ${result.message || 'Please check your inputs.'}`;
        }
      }
    } catch (err) {
      if (responseBox) {
        responseBox.style.display = 'block';
        responseBox.className = 'form-alert error';
        responseBox.innerHTML = 'An unexpected error occurred. Please try again or email us directly.';
      }
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
}

// 5. Registration Interest Form (if present)
function initRegistrationModal() {
  const regForm = document.getElementById('reg-interest-form');
  const regResponse = document.getElementById('reg-form-response');
  if (!regForm) return;

  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = regForm.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Submitting...';

    const data = Object.fromEntries(new FormData(regForm).entries());

    try {
      const res = await fetch('/api/register-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();

      if (regResponse) {
        regResponse.style.display = 'block';
        if (result.success) {
          regResponse.className = 'form-alert success';
          regResponse.innerHTML = `<strong>Success!</strong> ${result.message}`;
          regForm.reset();
        } else {
          regResponse.className = 'form-alert error';
          regResponse.innerHTML = `<strong>Error:</strong> ${result.message}`;
        }
      }
    } catch (err) {
      if (regResponse) {
        regResponse.style.display = 'block';
        regResponse.className = 'form-alert error';
        regResponse.innerHTML = 'Submission failed. Please email PACE2027@poornima.edu.in.';
      }
    } finally {
      btn.disabled = false;
      btn.textContent = orig;
    }
  });
}
