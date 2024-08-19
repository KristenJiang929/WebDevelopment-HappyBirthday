const bodyE1 = document.querySelector('body');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Define the center area margin (percentage of screen size)
const centerMarginX = screenWidth * 1; // 25% margin on the X-axis
const centerMarginY = screenHeight * 0.25; // 25% margin on the Y-axis

bodyE1.addEventListener("mousemove", (event) => {
    let xPos, yPos;

    do {
        // Randomly position the heart
        xPos = Math.random() * screenWidth;
        yPos = Math.random() * screenHeight;
    } while (
        xPos > centerMarginX && xPos < screenWidth - centerMarginX &&
        yPos > centerMarginY && yPos < screenHeight - centerMarginY
    );

    // Create the SVG element
    const svgE1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const heartE1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    // Set the size of the SVG and its position
    const size = Math.random() * 50 + 30; // Size between 30px and 80px
    svgE1.setAttribute('width', size);
    svgE1.setAttribute('height', size);
    svgE1.style.position = 'absolute';
    svgE1.style.left = `${xPos - size / 2}px`; // Center the SVG on the mouse
    svgE1.style.top = `${yPos - size / 2}px`; // Center the SVG on the mouse

    // Define the heart shape path (using SVG path data)
    const heartPath = `
        M 10,30 
        A 20,20 0 0,1 50,30 
        A 20,20 0 0,1 90,30 
        Q 90,60 50,90 
        Q 10,60 10,30 Z
    `;
    heartE1.setAttribute('d', heartPath);
    heartE1.setAttribute('transform', `scale(${size / 100})`); // Scale the heart

    // Randomize color and opacity
    const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    const randomOpacity = Math.random() * 0.5 + 0.2; // Opacity between 0.2 and 0.7
    heartE1.setAttribute('fill', randomColor);
    heartE1.setAttribute('fill-opacity', randomOpacity);

    // Apply class to animate (assuming you have CSS animations)
    heartE1.classList.add('heart-effect');

    // Append heart to SVG, and SVG to the body
    svgE1.appendChild(heartE1);
    bodyE1.appendChild(svgE1);

    // Remove the SVG element after the animation completes
    setTimeout(() => {
        svgE1.remove();
    }, 6000); // Match this with the animation duration
});
