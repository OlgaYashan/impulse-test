import React from 'react';
import { useSelector } from 'react-redux';

import LobbyPage from '../LobbyPage/LobbyPage';
import QuizPage from '../QuizPage/QuizPage';
import data from '../../questions.json';
import { GameState, STEP } from '../../store/type';

function Controller() {
  const loadData = { ...data };

  const currentStep: STEP = useSelector(
    (state: GameState) => state.currentStep,
  );

  const moneyStepsData = data.questions.reduce((newArr:string[], question) => {
    newArr.push(question.sum);
    return newArr;
  }, []);

  if (currentStep !== STEP.InProcess) return <LobbyPage currentStep={currentStep} />;
  return <QuizPage questions={loadData.questions} moneyStepsData={moneyStepsData} />;
}

export default Controller;
