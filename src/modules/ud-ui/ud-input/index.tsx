import React from 'react';
import * as S from '@src/modules/ud-ui/ud-input/styles';
import UDText, { ColorType } from '@src/modules/ud-ui/ud-text';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputType = 'email' | 'password' | 'text';

interface Props {
  name: string;
  type: InputType;
  placeholder: string;
  validation: RegisterOptions;
  errMessage: any;
  isPassOpen?: boolean;
  multiline?: boolean;
  color?: ColorType;
  style?: React.CSSProperties;
}

const UDInput = (props: Props) => {
  const {
    name,
    type,
    placeholder,
    validation,
    errMessage,
    isPassOpen = false,
    multiline = false,
    color = 'dark',
    style = {},
  } = props;

  const { register } = useFormContext();

  return (
    <S.InputWrap>
      {errMessage && (
        <S.Error>
          <UDText title={errMessage} size={16} color={'red'} />
        </S.Error>
      )}
      {multiline ? (
        <S.TextArea
          id={name}
          placeholder={placeholder}
          color={color}
          style={style}
          {...register(name, validation)}
        />
      ) : (
        <S.Input
          id={name}
          type={isPassOpen ? 'text' : type}
          placeholder={placeholder}
          color={color}
          style={style}
          {...register(name, validation)}
        />
      )}
      <style>
        {`
          ::placeholder { 
            color: #747474;
            font-weight: 300;
          }
        `}
      </style>
    </S.InputWrap>
  );
};

export default UDInput;
