import React from 'react';
import './listPage.scss';
import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';
import Map from '../../components/Map/map';

import { listData } from '../../library/dummyData';

const listPage = () => {

  const data = listData ;
  return (
   <>
   <div className="listPage">
    <div className="listcontainer">
      <div className="wrapper">
        <Filter/>
        {
          data.map((item)=>{
             return <Card key={item.id} item={item} />
          })
        }
      </div>
    </div>
    <div className="mapcontainer">
      <Map items={data}/>
    </div>
   </div>
   </>
  )
}

export default listPage
