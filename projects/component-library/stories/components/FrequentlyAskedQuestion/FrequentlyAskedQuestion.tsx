import { FrequentlyAskedQuestionStyles as s } from './FrequentlyAskedQuestion.styles';

export interface FrequentlyAskedQuestionProps {
  question: string;
  answer: string;
}

export const FrequentlyAskedQuestion = ({
  question,
  answer,
}: FrequentlyAskedQuestionProps): JSX.Element => {
  return (
    <s.Wrapper>
      <summary>{question}</summary>
      <div className="answer">{answer}</div>
    </s.Wrapper>
  );
};
