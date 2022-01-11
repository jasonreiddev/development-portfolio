import { FrequentlyAskedQuestionStyles } from "./FrequentlyAskedQuestion.styles";

export interface FrequentlyAskedQuestionProps {
  question: string;
  answer: string;
}

export const FrequentlyAskedQuestion = ({
  question,
  answer,
}: FrequentlyAskedQuestionProps): JSX.Element => {
  return (
    <FrequentlyAskedQuestionStyles>
      <summary>{question}</summary>
      <div className="answer">{answer}</div>
    </FrequentlyAskedQuestionStyles>
  );
};
