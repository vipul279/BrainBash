import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [clickedOption, setClickedOption] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the clicked option
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question index
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [quizOver, setQuizOver] = useState(false);

  const categoryMapping = {
    "General Knowledge": "9",
    "Science & Nature": "17",
    "Technology": "18",
    "Mathematics": "19",
    "Sports": "21",
    "Animals": "27"
  };

  function getCategoryID(categoryName) {
    return categoryMapping[categoryName] || null;
  }

  const categoryID = getCategoryID(category);
  const url = `https://opentdb.com/api.php?amount=10&category=${categoryID}&type=multiple`;

  const fetchingAPI = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const shuffledQuestions = data.results.map(q => {
        const shuffledOptions = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
        return { ...q, options: shuffledOptions };
      });
      setQuestions(shuffledQuestions);
      setTimerStarted(true);
      startFullScreen(); // Enter full-screen mode when the quiz starts
    }
    catch (error) {
      console.log("Error:" + error);
    }
  };

  useEffect(() => {
    if (categoryID) {
      fetchingAPI();
    }
  }, [categoryID]);

  // Decode HTML entities
  function decodeHtmlEntities(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    return doc.documentElement.textContent;
  }

  // Option click handling
  function optionClicked(opt, correctAnswer) {
    if (clickedOption) return;

    setSelectedAnswer(opt);
    if (opt === correctAnswer) {
      setClickedOption('correct');
      setScore(prevScore => prevScore + 1);
    } else {
      setClickedOption('incorrect');
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setSelectedAnswer(null);
        setClickedOption(null);
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setProgress(0);
      } else {
        setQuizOver(true);
        endFullScreen(); // Exit full-screen mode
        console.log(score);
      }
    }, 1000);
  }

  // Timer handling
  useEffect(() => {
    if (timerStarted) {
      const interval = setInterval(() => {
        setProgress(prog => {
          if (prog >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setSelectedAnswer(null);
              setClickedOption(null);
              setProgress(0);
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
                setTimerStarted(true);
              } else {
                setQuizOver(true);
                endFullScreen(); // Exit full-screen mode
              }
            }, 100);
            return 100;
          }
          return prog + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [timerStarted, currentQuestionIndex, questions.length]);

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // The tab is not visible, user switched tabs
        alert("Tab switching is not allowed during the quiz. The quiz will now end.");
        setQuizOver(true);
      }
    };
  
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !quizOver) {
        // Fullscreen mode is exited
        alert("Exiting full-screen mode is not allowed during the quiz. The quiz will now end.");
        setQuizOver(true);
      }
    };
  
    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

  }, []);
  

  // Full-screen mode functions
  const startFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  const endFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="relative h-screen bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-psd/3d-rendering-questions-background_23-2151455612.jpg?semt=ais_hybrid')]">
      <div className="absolute inset-0 bg-black/30 backdrop-blur"></div>

      <div className="container h-screen flex justify-center items-center max-w-screen-sm mx-auto">
        {!quizOver ? (
          <div className="relative quiz-container w-full max-w-md bg-purple-400 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <div
              className="absolute top-0 left-0 h-2 bg-green-500"
              style={{ width: `${progress}%` }}
            ></div>
            {questions.length > 0 ? (
              <>
                <div className="question text-xl font-semibold text-white">
                  <p>{decodeHtmlEntities(questions[currentQuestionIndex].question)}</p>
                </div>

                <div className="all-options m-10">
                  {questions[currentQuestionIndex].options.map((option, idx) => (
                    <div
                      key={idx}
                      className={`option rounded-lg bg-gray-300 border p-6 mb-4 cursor-pointer
                          ${selectedAnswer === option && clickedOption === 'correct' ? "bg-green-500" :
                          selectedAnswer === option && clickedOption === 'incorrect' ? "bg-red-600" : ""}`}
                      onClick={() => optionClicked(option, questions[currentQuestionIndex].correct_answer)}
                    >
                      {decodeHtmlEntities(option)}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-white">Loading questions...</p>
            )}
          </div>
        ) : (
          <div className='relative result '>
            <div className='flex flex-col justify-center items-center w-full max-w-md bg-purple-500 bg-opacity-65 p-6 rounded-lg shadow-lg text-purple-950'>
              <h1 className='text-5xl font-extrabold'>Quiz Result</h1>
              <br />
              <p className='text-2xl font-semibold'>Your Score is {score}</p>
              <br />
              <Link to={'/'}>
                <button className='bg-purple-600 w-40 p-4 rounded-lg text-2xl text-white'>Back</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
