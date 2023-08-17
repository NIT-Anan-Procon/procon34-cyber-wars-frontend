export const MODES= {
  TRAIN_MODE: 'train',
  MATCH_MODE: 'match'
};
export const ROOM_MODES= {
  CREATE_ROOM: 'create_room', 
  JOIN_ROOM  : 'join_room'
};

export const TRAIN_MODE_PATH= '/train';
export const MATCH_MODE_PATH= '/match';

export const CARD_DESCRIPTION= {
  TRAIN_DESCRIPTION: 
    `訓練モードでは、ゲームの進め方、操作方法、ゲームルールを解説します。簡単な攻撃方法と脆弱性の修正方法を学び、対戦に向けて訓練できます。`
  ,
  MATCH_DESCRIPTION: 
    `対戦モードでは、「アタックフェーズ」、「ディフェンスフェーズ」、「バトルフェーズ」の３つのフェーズを通して対戦し、合計のポイントを競います。`
}