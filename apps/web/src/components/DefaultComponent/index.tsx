import { ReactNode } from 'react';
import * as S from './DefaultComponent.styles';

interface DefaultComponentProps {
  children?: ReactNode;
}

const DefaultComponent = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cllaude99_lib</S.Title>
        <S.Description>
          Cllaude99_lib는 모던하고 확장 가능한 React 컴포넌트 라이브러리입니다. Emotion과
          TypeScript를 기반으로 구축되었으며, 반응형 디자인과 접근성을 고려한 컴포넌트들을
          제공합니다.
        </S.Description>
        <S.ButtonContainer>
          <S.Button href="/docs" target="_blank" rel="noopener noreferrer">
            문서 보기
          </S.Button>
          <S.Button
            href="/storybook"
            className="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            스토리북
          </S.Button>
        </S.ButtonContainer>
      </S.Header>
    </S.Container>
  );
};

export const DefaultSection = ({ children }: DefaultComponentProps) => {
  return <S.Section>{children}</S.Section>;
};

export const DefaultTitle = ({ children }: DefaultComponentProps) => {
  return <S.Title>{children}</S.Title>;
};

export const DefaultButtonContainer = ({ children }: DefaultComponentProps) => {
  return <S.ButtonContainer>{children}</S.ButtonContainer>;
};

export default DefaultComponent;
