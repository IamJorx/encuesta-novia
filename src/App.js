// src/App.js
import { useState } from 'react';
import './App.css';

const questions = [
	{
		text: '¿Qué tan guapo estaba el asesor? 😍',
	},
	{
		text: '¿Qué tantas ganas le tienes al asesor? 😈',
	},
	{
		text: '¿Crees que el asesor tiene buena labia? 💋',
	},
	{
		text: '¿Lo recomendarías como pareja por un día? 😅',
	},
	{
		text: '¿Qué tan probable es que le mandes un DM coqueto? 💌',
	},
];

function App() {
	const [answers, setAnswers] = useState(Array(5).fill(5));
	const [showResult, setShowResult] = useState(false);
	const [darkMode, setDarkMode] = useState(true);

	const handleChange = (index, value) => {
		const newAnswers = [...answers];
		newAnswers[index] = parseInt(value);
		setAnswers(newAnswers);
	};

	const getResultMessage = () => {
		const total = answers.reduce((a, b) => a + b, 0);
		if (total <= 20) return 'Hmm… no lo ves con buenos ojos 🧐';
		if (total <= 35) return 'Hay química, pero te estás controlando 😏';
		return '¡Tienes un crush fuerte! 😳💘';
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={`app ${darkMode ? 'dark-mode' : ''}`}>
			<div className='mode-toggle'>
				<button onClick={toggleDarkMode} className='mode-button'>
					{darkMode ? '☀️' : '🌙'}
				</button>
			</div>
			<h1>💖 Encuesta de Satisfacción 💖</h1>
			{!showResult ? (
				<>
					{questions.map((q, i) => (
						<div key={i} className='question'>
							<p>{q.text}</p>
							<input
								type='range'
								min='1'
								max='10'
								value={answers[i]}
								onChange={e => handleChange(i, e.target.value)}
							/>
							<span>{answers[i]}</span>
						</div>
					))}
					<button onClick={() => setShowResult(true)}>Ver resultado 🔥</button>
				</>
			) : (
				<div className='result'>
					<h2>{getResultMessage()}</h2>
					<button onClick={() => setShowResult(false)}>Regresar</button>
				</div>
			)}
		</div>
	);
}

export default App;
