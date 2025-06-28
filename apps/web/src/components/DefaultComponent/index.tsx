import * as S from './DefaultComponent.styles';

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

export default DefaultComponent;
