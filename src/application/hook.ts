import { useRecoilState } from 'recoil';
import { itemsState } from './state';
import { useEffect } from 'react';
import listItems from '../infrastructure/api/fetch_Items';

const useItems = () => {
  const [data, setData] = useRecoilState<any>(itemsState);
  let tempItemHolder;

  const showMoreItems = async() => {
    await listItems().then(res => tempItemHolder = res);
    
    setData(prev => prev.concat(tempItemHolder));
  }

  useEffect(() => {
    //Resolves promise to set the data from JSON into the custom hook.
    listItems()
    .then(res => setData(res))
    .catch(err => {throw err});
  },[setData])

  return {
    data,
    setData,
    showMoreItems,
  };
}

export default useItems;