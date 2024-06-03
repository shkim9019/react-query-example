import { atom } from "recoil";

export type stateType = {
  errorCode: string | null;
  errorMessage: string | null;
};

export const errorState = atom<stateType>({
  key: "errorState",
  default: {
    errorCode: null,
    errorMessage: null,
  },
});
