import { Button } from '@/components/Elements';
import { useNavigate } from 'react-router-dom';

export const EndSlide= () => {
  const navigate= useNavigate();

  return (
    
    <Button onClick={() => navigate('../../') } >モード選択へ戻る</Button>

  );
};