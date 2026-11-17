// CampusConnect Interactive Prototype Controller

document.addEventListener('DOMContentLoaded', () => {
  const screens = {
    home: document.getElementById('screen-home'),
    details: document.getElementById('screen-details'),
    form: document.getElementById('screen-form'),
    confirm: document.getElementById('screen-confirm')
  };

  const navStepBtns = document.querySelectorAll('.nav-step-btn');

  function navigateTo(screenId) {
    Object.values(screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });

    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }

    // Update sidebar navigation active state
    navStepBtns.forEach(btn => {
      if (btn.dataset.target === screenId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Sidebar step buttons
  navStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      navigateTo(targetId);
    });
  });

  // 1. Home -> Event Details
  const viewDetailsTriggers = document.querySelectorAll('.view-details-trigger');
  viewDetailsTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      navigateTo('screen-details');
    });
  });

  // Also clicking the featured event card directly
  const featuredCard = document.getElementById('card-hacknie');
  if (featuredCard) {
    featuredCard.addEventListener('click', (e) => {
      if (!e.target.closest('button')) {
        navigateTo('screen-details');
      }
    });
  }

  // 2. Details -> Home (Back)
  const backToHome = document.querySelector('.back-to-home');
  if (backToHome) {
    backToHome.addEventListener('click', () => {
      navigateTo('screen-home');
    });
  }

  // 3. Details -> Registration Form
  const goToRegister = document.querySelector('.go-to-register');
  if (goToRegister) {
    goToRegister.addEventListener('click', () => {
      navigateTo('screen-form');
    });
  }

  // 4. Form -> Details (Back)
  const backToDetails = document.querySelector('.back-to-details');
  if (backToDetails) {
    backToDetails.addEventListener('click', () => {
      navigateTo('screen-details');
    });
  }

  // 5. Form -> Confirmation
  const regForm = document.getElementById('regForm');
  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      navigateTo('screen-confirm');
    });
  }

  // 6. Confirmation -> Home
  const backHomeBtn = document.querySelector('.back-to-home-btn');
  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', () => {
      navigateTo('screen-home');
    });
  }

  const viewMyEvents = document.querySelector('.view-my-events');
  if (viewMyEvents) {
    viewMyEvents.addEventListener('click', () => {
      navigateTo('screen-home');
    });
  }

  // Category pills selection
  const pills = document.querySelectorAll('.pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Bottom Navigation item clicks
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
