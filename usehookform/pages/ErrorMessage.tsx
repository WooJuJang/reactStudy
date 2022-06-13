import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { QuizContainer, SubmitBtn, InnerContainer } from './styled';
const ErrorMessage = () => {
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

  const emptyStringToNull = (value: string, originalValue: string | number) => {
    if (typeof originalValue === 'string' && originalValue === '') {
      return null;
    }
    return value;
  };

  const validationSchema = Yup.object().shape({
    timesTables: Yup.number()
      .integer('정수로 입력하시오.')
      .typeError('숫자로 입력하시오.')
      .nullable()
      .transform(emptyStringToNull)
      .required('구구단 정답을 입력하시오.'),
    wordChain: Yup.string()
      .matches(/^[A-Za-z]+$/, '영어로 입력하시오.')
      .required('끝말잇기 정답을 입력하시오.'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(validationSchema) });
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
  return (
    <QuizContainer>
      <form onSubmit={onSubmit}>
        <InnerContainer>
          <h2>에러 메시지 발생합니다.</h2>
          <div>
            <h3>구구단</h3>
            <label>
              {timesTablesState.first} * {timesTablesState.seconde} ={' '}
            </label>
            <input {...register('timesTables')} />
            <div>{timesTablesState.result}</div>
            <div> {errors.timesTables?.message}</div>
          </div>
          <div>
            <h3>끝말잇기</h3>
            <label>제시어 : {wordChainState.word}</label>
            <input type="text" {...register('wordChain')} />
            <div>{wordChainState.result}</div>
            <div> {errors.wordChain?.message}</div>
          </div>
          <SubmitBtn type="submit">확인</SubmitBtn>
        </InnerContainer>
      </form>
    </QuizContainer>
  );
};

export default ErrorMessage;
