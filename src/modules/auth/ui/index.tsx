import React, { useState } from 'react';
import UDInput from '@src/modules/ud-ui/ud-input';
import * as S from '@src/modules/auth/ui/styles';
import UDText from '@src/modules/ud-ui/ud-text';
import UDButton from '@src/modules/ud-ui/ud-button';
import { FormProvider, useForm } from 'react-hook-form';
import { emailValidator } from '@src/modules/auth/domain/helpers/emailValidator';
import { nameValidator } from '@src/modules/auth/domain/helpers/nameValidator';
import authStore from '@src/modules/auth/store';
import { AuthData } from '@src/modules/auth/domain/interfaces/AuthData';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import UDLoader from '@src/modules/ud-ui/ud-loader';

function AuthPage() {
  const { registration, login, isLoading } = authStore;
  const [isLoginForm, setLoginForm] = useState<boolean>(true);
  const [isPassOpen, setPassOpen] = useState<boolean>(false);

  const navigation = useNavigate();
  const goHome = () => navigation('/');

  const methods = useForm<AuthData>();
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const headerTitle = isLoginForm ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ';
  const buttonTitle = isLoginForm ? 'ВХОД' : 'ЗАРЕГИСТРИРОВАТЬСЯ';
  const linkTitle = isLoginForm ? 'Ещё не зарегистрированы?' : 'Уже есть аккаунт?';
  const iconEye = isPassOpen ? require('@img/icon-slash-eye.png') : require('@img/icon-eye.png');

  const onSubmit = handleSubmit(async (data: AuthData) => {
    const auth = isLoginForm ? login : registration;
    const res = await auth(data);
    if (res.status === 200) {
      reset();
      goHome();
    }
  });

  const onClickEye = () => setPassOpen(!isPassOpen);

  const onClickLink = () => {
    setLoginForm(!isLoginForm);
    reset();
    setPassOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()} noValidate>
        <S.Container>
          {isLoading ? (
            <UDLoader />
          ) : (
            <S.AuthForm>
              <UDText title={headerTitle} weight={700} size={32} />

              <div style={{ marginTop: 38 }}>
                <UDInput
                  name={'email'}
                  type={'email'}
                  placeholder={'Email'}
                  validation={{
                    required: 'Заполните обязательное поле',
                    validate: {
                      matchPattern: v => emailValidator(v) || 'Email введен не корректно',
                    },
                  }}
                  errMessage={errors.email?.message || ''}
                />
              </div>

              <div style={{ marginTop: 10, position: 'relative' }}>
                <S.EyeWrap onClick={onClickEye} isLogin={isLoginForm}>
                  <S.Eye src={iconEye} />
                </S.EyeWrap>
                <UDInput
                  name={'password'}
                  type={'password'}
                  isPassOpen={isPassOpen}
                  placeholder={'Пароль'}
                  validation={{
                    required: 'Заполните обязательное поле',
                    minLength: {
                      value: 8,
                      message: 'Минимум 8 символов',
                    },
                  }}
                  errMessage={errors.password?.message || ''}
                />
              </div>

              {!isLoginForm && (
                <>
                  <div style={{ marginTop: 10 }}>
                    <UDInput
                      name={'firstName'}
                      type={'text'}
                      placeholder={'Имя'}
                      validation={{
                        required: 'Заполните обязательное поле',
                        validate: {
                          matchPattern: v => nameValidator(v) || 'Используйте только символы',
                        },
                      }}
                      errMessage={errors.firstName?.message || ''}
                    />
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <UDInput
                      name={'lastName'}
                      type={'text'}
                      placeholder={'Фамилия'}
                      validation={{
                        required: 'Заполните обязательное поле',
                        validate: {
                          matchPattern: v => nameValidator(v) || 'Используйте только символы',
                        },
                      }}
                      errMessage={errors.lastName?.message || ''}
                    />
                  </div>
                </>
              )}

              <UDButton title={buttonTitle} onClick={onSubmit} style={{ marginTop: 28 }} />
              <UDButton title={'НА ГЛАВНУЮ'} onClick={goHome} style={{ marginTop: 14 }} />

              <S.Link onClick={onClickLink}>
                <UDText
                  title={linkTitle}
                  weight={300}
                  size={16}
                  color={'light'}
                  style={{ textDecorationLine: 'underline' }}
                />
              </S.Link>
            </S.AuthForm>
          )}
        </S.Container>
      </form>
    </FormProvider>
  );
}

export default observer(AuthPage);
