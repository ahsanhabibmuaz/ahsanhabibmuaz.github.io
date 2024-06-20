// JavaScript for portfolio
document.addEventListener("DOMContentLoaded", function() {
  // Select all links with the class 'repository-head'
  const repoLinks = document.querySelectorAll('.repository-head a');

  // Add hover effect to each link
  repoLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#007BFF'; // Change color on hover
    });

    link.addEventListener('mouseleave', () => {
      link.style.color = ''; // Reset color when not hovering
    });
  });
});
