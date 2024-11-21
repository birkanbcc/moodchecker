const questions = [
    "How energetic do you feel today?",
    "How happy do you feel right now?",
    "How calm do you feel today?",
    "How well did you sleep last night?",
    "How stressed do you feel today?"
  ];
  
  function displayQuestions() {
    const questionsDiv = document.getElementById("questions");
  
    for (let i = 0; i < questions.length; i++) {

      const label = document.createElement("label");
      label.textContent = questions[i];
      label.className = "form-label";
  
      const input = document.createElement("input");
      input.type = "number";
      input.min = "1";
      input.max = "10";
      input.className = "form-control";
      input.id = `question-${i + 1}`;
  
   
      questionsDiv.appendChild(label);
      questionsDiv.appendChild(input);
    }
  }
  
  function displayMotivationalMessage(mood) {
    const motivationalMessage = document.createElement('p');
    if (mood === 'Tired' || mood === 'Stressed') {
        motivationalMessage.textContent = "Life is worth living! Don't worry, keep going!";
    } else {
        motivationalMessage.textContent = "You're doing great! Keep up the positive energy!";
    }

    const resultContainer = document.getElementById('result');
    resultContainer.appendChild(motivationalMessage);
}




  function calculateMood() {
    let totalScore = 0;
    const totalQuestions = 5;
  
    for (let i = 1; i <= totalQuestions; i++) {
      const input = document.getElementById(`question-${i}`);
      const value = parseInt(input.value);
  
      if (isNaN(value) || value < 1 || value > 10) {
        alert("Please enter a number between 1 and 10 for all questions.");
        return;
      }
  
      totalScore += value; 
    }
  

    const averageScore = totalScore / totalQuestions;
    let mood = "";
    let emoji = "";
  
    if (averageScore <= 2) {
      mood = "Tired";
      emoji = "😴";
    } else if (averageScore <= 4) {
      mood = "Stressed";
      emoji = "😟";
    } else if (averageScore <= 6) {
      mood = "Neutral";
      emoji = "😐";
    } else if (averageScore <= 8) {
      mood = "Happy";
      emoji = "😊";
    } else {
      mood = "Excited";
      emoji = "🤩";
    }
  
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h3>Your mood is: ${mood} ${emoji}</h3>`;
    displayMotivationalMessage(mood);
  }
  
  
  displayQuestions();
  