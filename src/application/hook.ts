import { useRecoilState } from 'recoil';
import { dataState, loadState } from './state';
import { Item } from './state';

const useItemFetch = () => {
  const [data, setData] = useRecoilState<Item[]>(dataState);
  const [showMore, setShowMore] = useRecoilState<number>(loadState);

  const showMoreItems = () => {
    setShowMore((prev) => prev + 10);
  }

  return {
    data,
    setData,
    showMore,
    showMoreItems
  };
}

export default useItemFetch;