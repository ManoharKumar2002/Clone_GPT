const textData = `
Frontend development is the practice of building and maintaining the part of a website or web application that users directly interact with.  Think of it as the "look and feel" and the interactive elements.  While backend development handles the server-side logic and data, frontend development focuses on what the user sees and how they experience the application.

Here's a breakdown of key aspects:

**What Frontend Developers Do:**

* **Design and implement user interfaces (UI):** This involves creating visually appealing and user-friendly layouts, incorporating images, typography, and color schemes. They often work closely with designers to translate design mockups into functional code.
* **Develop interactive elements:** This includes creating buttons, forms, menus, animations, and other interactive components that enhance the user experience.  They make the website dynamic and responsive to user input.
* **Write clean, efficient, and maintainable code:**  Frontend developers use various programming languages and frameworks to create the website's front-end.  They strive for code that's easy to understand, debug, and modify.
* **Optimize for performance:**  They ensure the website loads quickly and runs smoothly on different devices and browsers.  This involves techniques like code optimization, image compression, and efficient use of resources.
* **Ensure cross-browser compatibility:** Websites need to work correctly across different browsers (Chrome, Firefox, Safari, Edge, etc.) and devices (desktops, tablets, smartphones).  Frontend developers test and fix any compatibility issues.
* **Implement responsive design:** This ensures the website adapts to different screen sizes and orientations automatically, providing an optimal viewing experience on any device.
* **Integrate with backend APIs:**  Frontend developers connect the user interface to the backend systems, enabling data exchange and functionality.  This often involves using techniques like AJAX and fetching data from APIs.
* **Testing and debugging:**  They thoroughly test their code to identify and fix bugs before the website is launched.  They also use debugging tools to identify and resolve issues in the code.

**Key Technologies Used:**

* **HTML (HyperText Markup Language):**  The foundation of every webpage, defining the structure and content.
* **CSS (Cascading Style Sheets):**  Styles the HTML elements, controlling the visual presentation (layout, colors, fonts, etc.).
* **JavaScript:**  Adds interactivity and dynamic behavior to the website.  This is the core programming language for frontend development.
* **JavaScript Frameworks/Libraries:**  These provide pre-built components and tools to speed up development and improve code organization (e.g., React, Angular, Vue.js).
* **Version Control Systems (e.g., Git):**  Used for managing code changes and collaboration.
* **Build Tools (e.g., Webpack, Parcel):**  Automate tasks like bundling code, compiling CSS preprocessors (like Sass or Less), and optimizing assets.

In summary, frontend development is a crucial part of web development that bridges the gap between design and functionality, ensuring a positive and engaging user experience.  It's a constantly evolving field with new technologies and frameworks emerging regularly.
`;

// Function to parse and structure the text
const parseTextData = (data) => {
  const sections = data.split("\n\n").filter((section) => section.trim().length > 0);
  
  return sections.map((section) => {
    const titleMatch = section.match(/^\*\*(.*?)\*\*:/); // Match titles like **Title:**
    const bullets = section.match(/\* \*\*(.*?)\*\*:/g); // Match bullet points
    
    return {
      title: titleMatch ? titleMatch[1] : null,
      content: section.replace(/^\*\*(.*?)\*\*:/, "").trim(),
      bullets: bullets
        ? bullets.map((bullet) => bullet.replace(/\* \*\*(.*?)\*\*:/, "$1"))
        : null,
    };
  });
};

const structuredData = parseTextData(textData);
console.log(structuredData);
