import { useRecoilState } from 'recoil';

import { IconButton } from '@/components/Elements';
import hintIcon from '@/assets/images/hint.svg';
import { isHintDrawerState } from '@/atoms';

const _HintButton= `
  height: 5rem;
  width : 5rem;
  position: absolute;
  bottom: 10px;
  right : 10px;
  border-radius: 50%;
  background: grey
`;

export const HintButton= () => {
  const [ isDrawHint, setIsDrawHint ]= useRecoilState( isHintDrawerState );

  return (
    <IconButton
      icon   = { hintIcon }
      onClick= { () => setIsDrawHint( !isDrawHint ) }
      styles = { _HintButton }
    />
  );
};