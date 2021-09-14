import { RecoilState, atom } from 'recoil';

export const itemsState: RecoilState<string[]>= atom({
    key: 'itemsState',
    default: []
});