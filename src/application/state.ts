import { RecoilState, atom } from 'recoil';

export type Response = {
  items: Item[]; 
};

export type Item = {
  name: string;
  desc: string;
};

export const itemsState: RecoilState<Item[]>= atom({
    key: 'itemsState',
    default: []
});