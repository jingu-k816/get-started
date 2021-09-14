import { RecoilState, atom, RecoilRootProps } from 'recoil';

export const itemsState: RecoilState<string[]>= atom({
    key: 'itemsState',
    default: []
});

export const loadStatusState: RecoilState<boolean> = atom({
  key: 'loadStatusState',
  default: true
});