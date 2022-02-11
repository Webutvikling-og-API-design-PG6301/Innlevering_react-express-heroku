import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Question = ({ setIsRightAnswer, setIsAnsweredQuestion }) => {
	const [question, setQuestion] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		loadData();
	}, []);

	const loadData = async () => {
		const response = await fetch('/api/question');
		const data = await response.json();
		console.log(data);
		setQuestion(await data);
	};

	const handleRightAnswer = (answer) => {
		if (isCorrectAnswer(question, answer)) {
			console.log('right answer');
			setIsRightAnswer((prev) => prev + 1);
			setIsAnsweredQuestion((prev) => prev + 1);
			navigate('/answer/correct');
		} else {
			console.log('Wrong answer');
			setIsAnsweredQuestion((prev) => prev + 1);
			navigate('/answer/wrong');
		}
	};

	if (!question) {
		return <h1>Loading...</h1>;
	}

	console.log(question);
	return (
		<div>
			<h1>{question.question}</h1>
			{Object.keys(question.answers)
				.filter((answer) => question.answers[answer])
				.map((value) => {
					return (
						<div key={value}>
							<button>{question.answers[value]}</button>
						</div>
					);
				})}
		</div>
	);
};

export default Question;
