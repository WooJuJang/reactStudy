import React, { useState, useRef, useCallback } from 'react';
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
    <>
      <div>{state.word}</div>
      <form onSubmit={(e) => onSubmit(e, state.value)}>
        <input ref={inputRef} onChange={onChange} value={state.value}></input>
        <button>입력!</button>
      </form>
      <div>{state.result}</div>
    </>
  );
};

export default WordChain;
