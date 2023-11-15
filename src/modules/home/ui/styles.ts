import styled from 'styled-components';
import homeBg from '../../../assets/img/home-bg.jpg';

export const Container = styled.div`
  display: flex;
  background-image: url(${homeBg});
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
