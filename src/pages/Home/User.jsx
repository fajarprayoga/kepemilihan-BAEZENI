import { default as React, } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
function User({ users, fetchData, height, handleSelect }) {
    return (
        <InfiniteScroll
            dataLength={users.length
            }
            next={fetchData ?? null}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            height={height}
        >
            <div id='result' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {users.map((user, index) => (
                    <Card index={index} user={user} handleSelect={handleSelect} />
                ))}
            </div>
        </InfiniteScroll>
    )
}

export default User