import React, {Component} from 'react';
import QuizOptions from './QuizOptions';

class Quiz extends Component {

	constructor(props) {
		super(props);

		let riddle = this.playGame();

		this.state = {riddle};

		this.renderOptions = this.renderOptions.bind(this);
	}
	randomNumber(min, max) {
		return Math.floor(Math.random() * (max-min+1)) +min;
	}
	generateRandomOptions(sum) {
		let result = sum;
		let resultsArray = [];
		let randomNumberArray = [];

		while (randomNumberArray.length <= 3) {
			let randomNumber = this.randomNumber(1, 19);
			if(randomNumberArray.indexOf(randomNumber) > -1) continue;
			randomNumberArray.push(randomNumber);
		}
		console.log(randomNumberArray);

		for ( let i = 0; i < 3; i++) {
			let addSubtract = this.randomNumber(0,1);
			let result = sum;
		if(addSubtract === 1) {
			result += randomNumberArray[i];
			resultsArray.push(result);
		} else {
			result -= randomNumberArray[i];
		}
			
		}

		console.log(resultsArray);


		return resultsArray;
	}
	playGame() {

		/*console.log(this.randomNumber(20,50), this.randomNumber(20,50));*/
		let feild1 = this.randomNumber(20,50);
		let feild2 = this.randomNumber(20,50);
		let result = feild1 + feild2;
		let resultsArray = this.generateRandomOptions(result);
		let riddle = {
			resultsArray: [8,9,10,11],
			feild1: feild1,
			feild2: feild2,
			answer: result
		};

		console.log(riddle);

		return riddle;
		
	}
	renderOptions() {
		return(
			<div className="options">
			{this.state.riddle.resultsArray.map((option, i) =>
				<QuizOptions option={option} key={i}/>
			)}
		</div>

		);
	}
	render() {
		return(
			<div className="quiz">
				<div className="quiz-content">
				<p className="question">What is the sum of <span className="text-info">{this.state.riddle.feild1}</span> and <span className="text-info">{this.state.riddle.feild2}</span>?</p>
				{this.renderOptions()}	
				</div>
				<div className="play-again">
				 <a className="button">Play Again</a>
				 </div>
			</div>
			);
	}

}

export default Quiz;

