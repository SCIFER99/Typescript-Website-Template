// Create the Typescript File for the Web App.

// Create the Greeting
const greeting: string = "Hello from Typescript!";
console.log(greeting);

// Create the Heading for the greeting.
document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    if (heading) {
        heading.textContent = greeting;
    }
});