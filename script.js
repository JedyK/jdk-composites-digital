document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Récupérer les valeurs de la date et de l'heure
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    // Afficher un message de confirmation
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Rendez-vous confirmé pour le ${date} à ${time}.`;
  
    // Ici, tu pourrais envoyer ces informations à un serveur ou une API
  });

  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Récupérer les valeurs du formulaire d'avis
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
  
    // Créer un nouvel élément de liste pour afficher l'avis
    const reviewList = document.getElementById('reviewList');
    const newReview = document.createElement('li');
    newReview.textContent = `${name} : ${review}`;
  
    // Ajouter l'avis à la liste
    reviewList.appendChild(newReview);
  
    // Réinitialiser le formulaire
    document.getElementById('reviewForm').reset();
  });
  
  // Gestion des rendez-vous
  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
  
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = `Rendez-vous confirmé pour le ${date} à ${time}.`;
  });

  // Gestion de l'inscription
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
  
    // Sauvegarder l'utilisateur dans le localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    document.getElementById('authMessage').textContent = 'Inscription réussie, vous pouvez maintenant vous connecter.';
  });
  
  // Gestion de la connexion
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    // Récupérer les informations depuis le localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
  
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      document.getElementById('authMessage').textContent = 'Connexion réussie, bienvenue ' + storedUsername + '!';
    } else {
      document.getElementById('authMessage').textContent = 'Nom d\'utilisateur ou mot de passe incorrect.';
    }
  });

  document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const clientName = document.getElementById('clientName').value;
    const clientEmail = document.getElementById('clientEmail').value;
    const projectType = document.getElementById('projectType').value;
    const projectDetails = document.getElementById('projectDetails').value;
  
    // Ici, tu pourrais envoyer ces informations à une API ou une base de données
    console.log(`Devis demandé par ${clientName}, email: ${clientEmail}, type: ${projectType}, détails: ${projectDetails}`);
  
    document.getElementById('quoteMessage').textContent = 'Merci pour votre demande de devis. Nous vous contacterons bientôt.';
    
    // Réinitialiser le formulaire
    document.getElementById('quoteForm').reset();
  });

  // Ouvrir la modale
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'block';
    });
  });
  
  // Fermer la modale
  document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
    });
  });
  
  // Fermer la modale en cliquant en dehors du contenu
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });
  