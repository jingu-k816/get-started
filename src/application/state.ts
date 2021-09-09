import { RecoilState, atom } from 'recoil';

export type Response = {
  items: Item[]; 
};

export type Item = {
  name: string;
  desc: string;
};

export const dataState: RecoilState<Item[]>= atom({
    key: 'JSONdata',
    default: null
});

export const loadState: RecoilState<number> = atom({
    key: 'LoadItem',
    default: 10
});