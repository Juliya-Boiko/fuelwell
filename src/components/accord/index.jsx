import { useState } from "react";
import { ReactComponent as Arrow } from '../../assets/svg/arrow-faq.svg';

export const Accord = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <li className="accord">
      <div onClick={() => setShowAnswer(prev => !prev)} className="accord__quest">
        {item.quest} <Arrow className={`accord__icon ${showAnswer ? 'accord__icon--reversed' : ''}`} />
      </div>
      {showAnswer ? <div className="accord__answer">{item.answer}</div> : null}
    </li>
  );
};