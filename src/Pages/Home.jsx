import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { getPostData } from '../Services';


const Home = () => {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPostData(setLoading,setPostData);
    }, []);
    
    return (
        <div className='h-full bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex flex-col items-center
                        justify-center p-[2vmax] box-border'
        >
            {loading ?
                <div
                    className='text-3xl text-white font-roboto font-bold h-screen flex justify-center 
                            items-center'
                >
                    Loading..
                </div>
                :
                postData && postData.length > 0 ?
                    (
                        postData.map((post) =>
                        (
                            <Post
                                key={post?.id}
                                title={post?.title}
                                body={post?.body}
                                userId={post?.userId}
                                postId={post?.id}
                            />
                        ))
                    )
                    :
                    <div
                        className='text-3xl text-white font-roboto font-bold h-screen flex justify-center 
                                    items-center'
                    >
                        Post data not found
                    </div>
            }
        </div>
    )
}

export default Home
