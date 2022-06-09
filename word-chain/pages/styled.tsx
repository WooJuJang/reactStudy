import styled from '@emotion/styled';

export const Container = styled.div({
  backgroundColor: 'lightgray',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
});

export const Modal = styled.div({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '20%',
  borderRadius: '10px',
  height: '20vh',
  padding: '30px',
});

export const Title = styled.label({
  fontSize: '30px',
  fontWeight: 'bold',
});
