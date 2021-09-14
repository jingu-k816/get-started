import { useRecoilState } from 'recoil';
import { itemsState, loadStatusState } from './state';
import { useEffect } from 'react';
import listItems from '../infrastructure/api/fetch_Items';

const useItems = () => {
  const [data, setData] = useRecoilState<any>(itemsState);
  const [showStatus, setShowStatus] = useRecoilState<boolean>(loadStatusState);

  const tempItemHolder = [...data];

  const showMoreItems = async() => {
    //shows loading status onClick then goes away when the items are fetched
    setShowStatus(true);
    await listItems()
            .then(res => {
              setShowStatus(false);
              return tempItemHolder + res
            })
            .catch(err => {throw err});
    
    setData(prev => prev.concat(tempItemHolder));
  }

  useEffect(() => {
    //Resolves promise to set the data from JSON into the custom hook.
    listItems()
      .then(res => {
        setShowStatus(false);
        return setData(res)})
      .catch(err => {throw err});
  },[setData, setShowStatus])

  return {
    data,
    showMoreItems,
    showStatus
  };
}

export default useItems;