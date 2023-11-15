import styled from 'styled-components';
import { LineType, SizeType, WeightType } from '@src/modules/ud-ui/ud-text/index';

interface Props {
  weight: WeightType;
  size: SizeType;
  color: string;
  line: LineType;
}

export const Text = styled.div<Props>`
  font-family: 'Ubuntu', sans-serif;
  font-size: ${props => props.size + 'px'};
  font-weight: ${props => props.weight};
  border-width: 0;
  background-color: rgba(255, 255, 255, 0);
  line-height: ${props => props.line + 'px'};
  color: ${props => props.color};
`;
