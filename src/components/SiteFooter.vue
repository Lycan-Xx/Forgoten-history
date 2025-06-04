<script setup lang="ts">
const handleSubscribe = (e: Event) => {
  e.preventDefault();
  // Handle subscription logic here
  console.log('Subscription form submitted');
};
</script>

<template>
  <footer id="site-footer">
    <div class="footer-col references">
      <h4>References & Sources</h4>
      <ul>
        <li><strong>Railways Story:</strong></li>
        <li>– Trevithick's Penydarren locomotive, 1804: <a href="https://en.wikipedia.org/wiki/Richard_Trevithick">Wikipedia</a></li>
        <li>– Stephenson's Stockton & Darlington Railway, 1825: <a href="https://en.wikipedia.org/wiki/Stockton_and_Darlington_Railway">Wikipedia</a></li>
        <li><strong>Horsepower Story:</strong></li>
        <li>– Watt's separate condenser, 1776: <a href="https://en.wikipedia.org/wiki/James_Watt">Wikipedia</a></li>
        <li>– "Horsepower" marketing: <a href="https://en.wikipedia.org/wiki/Horsepower">Wikipedia</a></li>
        <li><strong>Thomas Cook Story:</strong></li>
        <li>– Cook's first excursion, July 1841: <a href="https://en.wikipedia.org/wiki/Thomas_Cook">Wikipedia</a></li>
        <li>– Early "Thomas Cook & Son" operations, 1840s–1850s: <a href="https://www.britannica.com/biography/Thomas-Cook">Britannica</a></li>
      </ul>
    </div>
    
    <div class="footer-col contact">
      <h4>Get in Touch</h4>
      <p><em>Jane Doe, Content Curator & Historian</em></p>
      <div class="social-icons">
        <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener" aria-label="Twitter">
          <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg" alt="Twitter Icon" width="24" height="24">
        </a>
        <a href="https://linkedin.com/in/YourProfile" target="_blank" rel="noopener" aria-label="LinkedIn">
          <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg" alt="LinkedIn Icon" width="24" height="24">
        </a>
        <a href="mailto:youremail@example.com" aria-label="Email">
          <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mail-dot-ru.svg" alt="Email Icon" width="24" height="24">
        </a>
      </div>
      <p class="bio"><em>Passionate about unearthing the stories behind everyday innovations.</em></p>
    </div>
    
    <div class="footer-col subscribe">
      <h4>Subscribe for More Forgotten Infographics</h4>
      <form id="subscribe-form" @submit="handleSubscribe">
        <input type="email" id="subscriber-email" placeholder="Enter your email address" required>
        <button type="submit">Subscribe</button>
        <p class="privacy-note">We respect your privacy. No spam—promise.</p>
      </form>
    </div>
    
    <div class="footer-bottom">
      <p>© 2025 Forgotten Infographics. All rights reserved. Designed by Jane Doe.</p>
    </div>
  </footer>
</template>

<style scoped>
#site-footer {
  background-color: var(--color-bg-footer);
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  font-family: var(--font-body);
}

.footer-col h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.references ul,
.references li {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact .social-icons {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.contact .social-icons img {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.contact .social-icons img:hover {
  opacity: 1;
}

.bio {
  font-size: 0.85rem;
  color: #555;
  margin-top: 1rem;
}

#site-footer a {
  color: var(--color-primary);
  text-decoration: none;
}

#site-footer a:hover {
  text-decoration: underline;
}

.subscribe input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #CCC;
  margin-bottom: 0.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
}

.subscribe button {
  background: var(--color-primary);
  color: #FFF;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.subscribe button:hover {
  background: #1F3154;
}

.privacy-note {
  font-size: 0.75rem;
  color: #777;
  margin-top: 0.5rem;
}

.footer-bottom {
  width: 100%;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #DDD;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  #site-footer {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-col {
    width: 100%;
  }
  
  .footer-bottom {
    margin-top: 1.5rem;
  }
}
</style>