import { RadioButton } from "@/components/Elements/RadioButton";
import { useAtomValueChange } from '@/hooks/useAtomValueChange';
import { SelectedModeValueState } from "@/atoms";
import { MODES } from "..";

export const ModeSelect= () => {
  const [ modeSelected, updateModeSelected ]= useAtomValueChange(SelectedModeValueState);

  return (
    <>
      <RadioButton 
        id='train'
        label='訓練モード' 
        value={MODES.TRAIN_MODE}
        selected={modeSelected}
        onChange={updateModeSelected}
      />
      <RadioButton
        id='match'
        label='対戦モード'
        value={MODES.MATCH_MODE}
        selected={modeSelected}
        onChange={updateModeSelected}
      />
    </>
  );
}