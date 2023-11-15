import React from 'react';
import * as S from '@src/modules/ud-ui/ud-button/styles';
import UDText from '@src/modules/ud-ui/ud-text';

interface Props {
  title: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const UDButton = (props: Props) => {
  const { title, onClick, style = {} } = props;

  return (
    <S.Button onClick={onClick} style={style}>
      <UDText title={title} weight={700} color={'light'} />
    </S.Button>
  );
};

export default UDButton;
