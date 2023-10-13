import { useMutation } from '@tanstack/react-query';
import { sendFlagFn } from '.';
import { SendFlagResponseType } from '..';
import { useSetRecoilState } from 'recoil';
import { scoreHistoryState } from '@/features/games/scores/states/atoms';
import { messageState } from '@/features/games/message';

export const useSendFlagMutation= () => {
  const setScoreHistory= useSetRecoilState( scoreHistoryState );
  const setMessage= useSetRecoilState( messageState );

  return useMutation({
    onSuccess: ( data: SendFlagResponseType ) => {
      if( data?.valid && data?.correct ) {
        setScoreHistory(
          {
            score : data.score,
            status: 'successful',
            message: '攻撃に成功しました。'
          }
        );
      } else if( !data?.valid ) {
        setMessage(
          {
            message: '使用済みのキーです。',
            status : 'error'
          }
        );
      } else {
        setMessage(
          {
            message: '不正解なキーです。',
            status : 'error'
          }
        );
      };
    },
    mutationFn: sendFlagFn
  });
};