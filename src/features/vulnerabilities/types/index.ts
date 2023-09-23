import { CHOICES_KEY, CODE_PATH_KEY, HINT_KEY, HINT_SCORE_KEY, VULNERABILITIES_KEY } from "@/constants/responseKeys";

export type ChallengeDataType= {
  [ CODE_PATH_KEY ]      : string | number;
  [ VULNERABILITIES_KEY ]: VulnerabilitiesType;
};

export type VulnerabilitiesType= [{
  [ CHOICES_KEY ]   : Array<string>;
  [ HINT_KEY ]      : string;
  [ HINT_SCORE_KEY ]: number;
}];