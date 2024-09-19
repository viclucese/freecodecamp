function getAverage(scores) {
    let suma = 0;
    for(const score of scores) {
      suma = suma + score;
    }
    return suma / scores.length;
  }

 /* function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }*/
  
  console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
  console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

  function getGrade(score) {
    if (score <= 59){
      return "F";
    } else if (score > 59 && score <= 69) {
      return "D";
    } else if (score > 69 && score <= 79) {
      return "C";
    } else if (score > 79 && score <= 89) {
      return "B";
    } else if (score > 89 && score <= 99) {
      return "A";
    } else {
      return "A++";
    }
  }

  /*function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }*/
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

  function hasPassingGrade(score) {
    if (getGrade(score) != "F"){
      return true;
    } else return false;
  }

  /*function hasPassingGrade(score) {
    return getGrade(score) !== "F";
  }*/
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));


  function studentMsg(totalScores, studentScore) {

    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    let message = "Class average: " + average + ". Your grade: " + grade;
  
    if (grade === "F"){
      message = message + ". You failed the course.";
    } else {
      message = message + ". You passed the course.";
    }
  
    return message;
  
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));