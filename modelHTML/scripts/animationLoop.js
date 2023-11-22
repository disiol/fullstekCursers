const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

let eyeX = 150; // Initial X coordinate of the eye
let eyeSpeed = 5; // Speed of the eye

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the eye (circle)
    context.beginPath();
    context.arc(eyeX, 150, 30, 0, Math.PI * 2);
    context.fillStyle = "black";
    context.fill();

    // Clip the eye with a rectangle (right eye)
    context.save();
    context.beginPath();
    context.rect(eyeX + 10, 120, 40, 60);
    context.clip();

    // Draw the clipped eye (circle)
    context.beginPath();
    context.arc(eyeX, 150, 30, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    context.restore(); // Restore the context to remove clipping

    // Move the eye
    eyeX += eyeSpeed;

    // Check if the eye has reached the right edge
    if (eyeX + 30 > canvas.width) {
        eyeX = canvas.width - 30; // Adjust to keep the eye within the canvas
        eyeSpeed = -eyeSpeed; // Change direction
    }

    // Check if the eye has reached the left edge
    if (eyeX - 30 < 0) {
        eyeX = 30; // Adjust to keep the eye within the canvas
        eyeSpeed = -eyeSpeed; // Change direction
    }

    // Request the next animation frame
    requestAnimationFrame(draw);
}

// Start the animation loop
draw();
