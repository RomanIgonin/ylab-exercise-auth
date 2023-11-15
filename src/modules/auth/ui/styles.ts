import styled from 'styled-components';
import authBg from '../../../assets/img/auth-bg.jpg';

export const Container = styled.div`
  display: flex;
  background-image: url(${authBg});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EyeWrap = styled.div<{ isLogin: boolean }>`
  position: absolute;
  display: flex;
  height: 44px;
  width: 54px;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Eye = styled.img`
  width: 24px;
  height: 24px;
`;

export const Link = styled.button`
  margin-top: 12px;
  background-color: rgba(255, 255, 255, 0);
  border-width: 0;
`;
