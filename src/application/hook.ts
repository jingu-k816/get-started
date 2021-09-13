import { useRecoilState } from 'recoil';
import { itemsState } from './state';
import { Item } from './state';
import { useState } from 'react';

const useItemFetch = () => {
  const [data, setData] = useRecoilState<Item[]>(itemsState);
  const [showMore, setShowMore] = useState(10);

  const showMoreItems = () => {
    setShowMore((prev) => prev + 10);
  }

  return {
    data,
    setData,
    showMore,
    showMoreItems,
  };
}

export default useItemFetch;