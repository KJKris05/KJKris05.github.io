// Log all clicks and views
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("largeTextInput").value = "";

    const logInteraction = (type, element) => {
      const timestamp = new Date().toLocaleString();
      const objectType = element.tagName.toLowerCase();
      console.log(`[${timestamp}] ${type.toUpperCase()} on ${objectType} (id: ${element.id || 'none'})`);
    };
  
    // Log every click
    document.body.addEventListener("click", (e) => {
      logInteraction("click", e.target);
    });
  
    // Log initial view of each section
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      logInteraction("view", section);
    });
  });
  
  // Text analysis logic
  function analyzeText() {
    const text = document.getElementById("largeTextInput").value;
    const letters = (text.match(/[a-zA-Z]/g) || []).length;
    const words = (text.match(/\b\w+\b/g) || []).length;
    const spaces = (text.match(/ /g) || []).length;
  
    const pronouns = (text.match(/\b(I|you|he|she|it|we|they|me|him|her|us|them|my|your|his|their|our)\b/gi) || []).length;
    const prepositions = (text.match(/\b(on|in|at|by|for|with|about|against|between|into|through|during|before|after|above|below)\b/gi) || []).length;
    const articles = (text.match(/\b(a|an)\b/gi) || []).length;
  
    const output = `
Letters: ${letters}
Words: ${words}
Spaces: ${spaces}
Pronouns: ${pronouns}
Prepositions: ${prepositions}
Indefinite Articles: ${articles}
`;

document.getElementById("output").innerHTML = output;

  }
  