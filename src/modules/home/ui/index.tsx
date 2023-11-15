import React from 'react';
import * as S from '@src/modules/home/ui/styles';
import UDButton from '@src/modules/ud-ui/ud-button';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import authStore from '@src/modules/auth/store';
import UDText from '@src/modules/ud-ui/ud-text';
import UDLoader from '@src/modules/ud-ui/ud-loader';

const HomePage = () => {
  const { session, isLoading, logout } = authStore;
  const navigation = useNavigate();

  const buttonTitle = session ? 'ВЫХОД' : 'ВХОД';

  const ActiveUserData = () => {
    if (session) {
      return (
        <>
          <UDText title={session.user.firstName} weight={700} color={'light'} />
          <UDText
            title={session.user.email}
            weight={700}
            color={'light'}
            style={{ marginTop: 6 }}
          />
        </>
      );
    } else return <></>;
  };

  const onClickButton = async () => {
    if (session) {
      await logout();
    } else {
      navigation('/auth');
    }
  };

  return (
    <S.Container>
      {isLoading ? (
        <UDLoader />
      ) : (
        <>
          <ActiveUserData />
          <UDButton title={buttonTitle} onClick={onClickButton} style={{ marginTop: 12 }} />
        </>
      )}
    </S.Container>
  );
};

export default observer(HomePage);
