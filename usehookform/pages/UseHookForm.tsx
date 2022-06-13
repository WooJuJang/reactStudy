import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { QuizContainer, SubmitBtn, InnerContainer } from './styled';
const UseHookForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const [text, setText] = useState<string>('');
  const [num, setNum] = useState<number>(0);
  const [timesTablesState, setTimesTablesState] = useState({
    first: 0,
    seconde: 0,
    value: '',
    result: '',
  });

  const [wordChainState, setWordChainState] = useState({
    word: 'jangwoojoo',
    value: '',
    result: '',
  });

  const onSubmit = handleSubmit((data) => {
    if (timesTablesState.first * timesTablesState.seconde === parseInt(data.timesTables)) {
      setTimesTablesState((prev) => ({
        first: Math.ceil(Math.random() * 9),
        seconde: Math.ceil(Math.random() * 9),
        value: '',
        result: '정답: ' + data.timesTables,
      }));

      reset({
        timesTables: '',
      });
    } else {
      setTimesTablesState((prev) => ({
        ...prev,
        value: '',
        result: '땡: ' + data.timesTables,
      }));
    }

    if (data.wordChain[0] === wordChainState.word[wordChainState.word.length - 1]) {
      setWordChainState({
        word: data.wordChain,
        value: '',
        result: '정답',
      });
      reset({
        wordChain: '',
      });
    } else {
      setWordChainState((prev) => ({
        ...prev,
        value: '',
        result: '땡',
      }));
    }

    // inputRef.current?.focus();
  });

  useEffect(() => {
    setTimesTablesState((prev) => ({ ...prev, first: Math.ceil(Math.random() * 9), seconde: Math.ceil(Math.random() * 9) }));
  }, []);

  const onChangeNumHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.patternMismatch) {
      setNum(parseInt(e.target.value));
    }
  };
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^[A-Za-z]+$/;
    if (e.target.value === '' || re.test(e.target.value)) setText(e.target.value);
  };
  return (
    <QuizContainer>
      <form onSubmit={onSubmit}>
        <InnerContainer>
          <div>
            <h3>구구단</h3>
            <label>
              {timesTablesState.first} * {timesTablesState.seconde} ={' '}
            </label>
            <input
              value={num || ''}
              {...register('timesTables', {
                valueAsNumber: true,
                pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
                onChange: onChangeNumHandle,
              })}
            />
            <div>{timesTablesState.result}</div>
          </div>
          <div>
            <h3>끝말잇기</h3>
            <label>제시어 : {wordChainState.word}</label>
            <input
              value={text}
              {...register('wordChain', {
                pattern: /^[A-Za-z]+$/,
                onChange: onChangeHandle,
              })}
            />
            <div>{wordChainState.result}</div>
          </div>

          <SubmitBtn type="submit">확인</SubmitBtn>
        </InnerContainer>
      </form>
    </QuizContainer>
  );
};

export default UseHookForm;
