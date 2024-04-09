import React, { Suspense } from 'react';
import './list.scss';
// import { listData } from '../../lib/dummyData';
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import { Await, useLoaderData } from 'react-router';

const List = () => {
  const data = useLoaderData()

  return (
    <div className='listPage'>
      <div className="listContainer">
        <Filter />
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >

              {(postResponse) => postResponse.data.map(post => (
                <Card key={post.id} item={post} />
              ))}
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading map!</p>}
          >

            {(postResponse) => postResponse.data.map(post => (
              <Map items={postResponse.data} />
            ))}
          </Await>
        </Suspense>

      </div>
    </div >
  )
}

export default List;