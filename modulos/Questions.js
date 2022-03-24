export class Questions {
    constructor(question, ansCorrect, answers, category) {
      this.question = question;
      this.ansCorrect = ansCorrect;
      this.answers = answers;
      this.category = category;
    }
  
    getAnsCorrect() {
      return this.ansCorrect;
    }
    
  }