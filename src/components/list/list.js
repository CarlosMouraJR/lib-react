import React from 'react';

import Item from '../item';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: undefined,
      questionNumber: 1,
      points: 0
    }
  }

  getQuestions() {
    let amount = 1;
    let difficulty = "medium";

    fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
      .then(response => response.json())
      .then(json => {

        this.setState({ question: json.results[0] })
      })
  }

  reply(answer, correctAnswer) {
    if (answer === correctAnswer) {
      this.setState({ points: this.state.points + 1 })
    }

    this.getQuestions();
  }

  question() {
    if (!this.state.question)
    return null

    let question = this.state.question

    let answers = []
    answers.push(question.correct_answer)
    answers = answers.concat(question.incorrect_answers)

    return <div>
      <p>
        { this.state.questionNumber } - { question.question }
      </p>
        {
          answers.map((answer, key) => {
          return <span key={ key } className="ml-2 mr-2" onClick={ () => this.reply(answer, question.correct_answer) }>{ answer }</span>
          })
        }
    </div>
  }

  render() {
    return (
    <div>
      <span className="mr-2">Pontos: {this.state.points}</span>
      <button className="btn btn-primary" onClick={ () => this.getQuestions() } >Começar!</button>
      { this.question() }
    </div>
    )
  }
}

export default List;
