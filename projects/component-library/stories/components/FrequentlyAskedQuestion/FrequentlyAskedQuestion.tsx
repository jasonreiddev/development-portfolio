import { FrequentlyAskedQuestionStyles as s } from './FrequentlyAskedQuestion.styles';
import { ColorPair } from '../../../../helpers/media';

export interface FrequentlyAskedQuestionProps {
  question: string;
  answer: string;
  colorPair?: ColorPair;
  colorPairContent?: ColorPair;
}

export const FrequentlyAskedQuestion = ({
  question,
  answer,
  colorPair = ColorPair.Secondary,
  colorPairContent = ColorPair.Tertiary,
}: FrequentlyAskedQuestionProps): JSX.Element => {
  return (
    <s.Wrapper>
      <s.Question colorPair={colorPair}>{question}</s.Question>
      <s.Answer colorPair={colorPairContent}>{answer}</s.Answer>
    </s.Wrapper>
  );
};
