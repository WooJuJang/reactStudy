import React, { useState, useRef, useCallback } from 'react';
import { Container, Modal, Title } from './styled';
const WordChain = () => {
  const [state, setState] = useState({
    word: '장우주',
    value: '',
    result: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = useCallback((e: React.FormEvent, value: string) => {
    e.preventDefault();
    if (value[0] === state.word[state.word.length - 1]) {
      setState({
        word: value,
        value: '',
        result: '정답',
      });
    } else {
      setState((prev) => ({
        ...prev,
        value: '',
        result: '땡',
      }));
    }

    inputRef.current?.focus();
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      value: e.target.value,
    }));
  }, []);

  return (
    <Container>
      <Modal>
        <Title>끝말잇기 게임</Title>
        <div>제시어 : {state.word}</div>
        <form onSubmit={(e) => onSubmit(e, state.value)}>
          <input ref={inputRef} onChange={onChange} value={state.value}></input>
          <button>입력!</button>
        </form>
        <div>{state.result}</div>
      </Modal>
    </Container>
  );
};

export default WordChain;
