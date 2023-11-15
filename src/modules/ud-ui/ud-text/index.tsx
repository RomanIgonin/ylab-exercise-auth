import React from 'react';
import * as S from '@src/modules/ud-ui/ud-text/styles';

export type ColorType = 'dark' | 'light' | 'red';
export type WeightType = 300 | 400 | 700;
export type SizeType = 32 | 24 | 20 | 16 | 14 | 12;
export type LineType = 24 | 14;

interface Props {
  title: string;
  weight?: WeightType;
  size?: SizeType;
  line?: LineType;
  color?: ColorType;
  style?: React.CSSProperties;
}

const UDText = (props: Props) => {
  const { title, weight = 400, size = 20, line = 24, color = 'dark', style = {} } = props;

  const colorCode = color === 'dark' ? `#303030` : color === 'light' ? `#FFFFFF` : `#aa0b0b`;

  return (
    <S.Text weight={weight} size={size} line={line} color={colorCode} style={style}>
      {title}
    </S.Text>
  );
};

export default UDText;
