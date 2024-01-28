document.addEventListener('DOMContentLoaded', function () {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseenter', function () {
      // Change the background color of all squares to Coffee (#6F4E37)
      squares.forEach(otherSquare => {
        if (otherSquare !== square) {
          otherSquare.style.backgroundColor = '#6F4E37'; // Coffee color
        }
      });

      // Use Cypress command to wait for the color change
      cy.wrap(square).should('have.css', 'background-color', 'rgb(111, 78, 55)');
    });

    square.addEventListener('mouseleave', function () {
      // Change the background color of all squares back to Lavender (#E6E6FA)
      squares.forEach(otherSquare => {
        otherSquare.style.backgroundColor = '#E6E6FA'; // Lavender color
      });

      // Use Cypress command to wait for the color change
      cy.wrap(square).should('have.css', 'background-color', 'rgb(230, 230, 250)');
    });
  });
});
