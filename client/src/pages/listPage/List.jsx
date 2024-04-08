import React from 'react';
import './list.scss';
// import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router';

const List = () => {
  const posts = useLoaderData()

  return (
    <div className='listPage'>
      <div className="listContainer">
        <Filter />
        <div className="wrapper">
          {
            posts.map((dataItem) => (
              <Card key={dataItem.id} item={dataItem} />
            ))
          }
        </div>
      </div>

      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  )
}

export default List;