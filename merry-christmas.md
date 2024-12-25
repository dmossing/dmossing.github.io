---
layout: game
---

<style>
html, body {
   height: 100%;
   margin: 0;
   padding: 0;
}

.fullscreen {
   /* Fill the entire viewport height/width */
   height: 100vh;
   width: 100vw;
   display: flex;
   /* Stack items vertically */
   flex-direction: column;
   /* Distribute space to push them apart (top and bottom) */
   justify-content: space-between;
   align-items: center;
}

.fullscreen a {
   /* Optional: give each link some spacing from the edges */
   margin: 2rem;
}

.fullscreen img {
   /* Ensure images scale without overflowing */
   max-height: 100%;
   max-width: 100%;
   object-fit: contain;
}
</style>

<div class="fullscreen">
  <!-- Top image/link -->
  <a href="/etymology-game">
    <img src="/xmas.webp" alt="Christmas Image">
  </a>

  <!-- Bottom image/link -->
  <a href="/phylogeny-game">
    <img src="/xmas2.webp" alt="Christmas Image 2">
  </a>
</div>
