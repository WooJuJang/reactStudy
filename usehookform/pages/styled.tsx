import styled from '@emotion/styled';
export const Container = styled.div({
  width: '100%',
  height: '100vh',
  backgroundColor: 'lightgray',
  display: 'flex',
  alignItems: 'center',
});

export const QuizContainer = styled.div({
  backgroundColor: 'white',
  width: '40%',
  height: '30vh',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

export const SubmitBtn = styled.button({
  width: '20%',
  height: '3vh',
  background: 'gray',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
});

export const InnerContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
});
