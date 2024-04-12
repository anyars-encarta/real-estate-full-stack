import React from 'react';
// import { listData } from '../../lib/dummyData';
import Card from '../card/Card';
import './list.scss';

const List = ({ posts }) => {
    return (
        <div className='list'>
            {posts.map((post) => (
                <Card key={post.id} item={post} />
            ))}
        </div>
    )
}

export default List