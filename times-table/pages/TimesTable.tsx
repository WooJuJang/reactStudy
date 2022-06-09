import React, { useState, useEffect, useCallback, useRef } from 'react';

const TimesTable: React.FC = () => {
  const [state, setState] = useState({
    first: 0,
    seconde: 0,
    value: '',
    result: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = useCallback((e: React.FormEvent, first: number, seconde: number, value: string) => {
    e.preventDefault();

    if (first * seconde === parseInt(value)) {
      setState((prev) => ({
        first: Math.ceil(Math.random() * 9),
        seconde: Math.ceil(Math.random() * 9),
        value: '',
        result: '정답: ' + prev.value,
      }));
      inputRef.current?.focus();
    } else {
      setState((prev) => ({
        ...prev,
        value: '',
        result: '땡: ' + prev.value,
      }));
      inputRef.current?.focus();
    }
  }, []);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, value: e.target.value }));
  }, []);

  useEffect(() => {
    setState((prev) => ({ ...prev, first: Math.ceil(Math.random() * 9), seconde: Math.ceil(Math.random() * 9) }));
  }, []);
  return (
    <>
      {' '}
      {console.log('rendering')}
      <div>
        {state.first}곱하기{state.seconde}는?
        <form onSubmit={(e) => onSubmit(e, state.first, state.seconde, state.value)}>
          <input type="number" ref={inputRef} value={state.value} onChange={onChange} />
          <button>입력!</button>
        </form>
        <div>{state.result}</div>
      </div>
    </>
  );
};

export default TimesTable;
