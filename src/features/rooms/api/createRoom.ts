import { axios } from '@/lib/axios';
import { ROOM_URL } from '@/config/apiUrls';
import { useSetRecoilState } from 'recoil';
import { inviteIdState } from '@/atoms';
import { INVITE_ID_KEY } from '@/config/responseKeys';

export const useCreateRoom= () => {
  const setInviteId= useSetRecoilState( inviteIdState );

  async function createRoom( isDifficult: boolean ) {
    return await axios.post( ROOM_URL, isDifficult ).
      then((res) => {
        setInviteId(res[INVITE_ID_KEY]);
      })
  };

  return { createRoom };
};
