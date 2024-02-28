import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { searchHandler } from '../Services';


const SearchBar = () => {
    const [data, setData] = useState([]);
    const [serchText, setSearchText] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if(serchText)
            searchHandler(setLoading,serchText,setData);
    }, [serchText])
    
    return (
        <div
            className='h-full min-h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex flex-col items-center
                        p-[2vmax] box-border'>
            <form
                onSubmit={e => e.preventDefault()}
                className='flex flex-col max-sm:w-full md:w-2/3 rounded-lg justify-center md:gap-3 items-center max-sm:mb-10 mb-5'
            >
                <h3
                    className='text-2xl text-neutral-700 font-semibold font-roboto'
                >
                    Search User Post
                </h3>
                <input
                    type="search"
                    placeholder='Enter user id ex.- 1,2,3..'
                    minLength={1}
                    maxLength={2}
                    onChange={e => setSearchText(e.target.value)}
                    className='px-[2vmax] max-sm:px-[8vw] py-[1vmax] max-sm:py-[4vw] w-[90%] rounded-[40px] border border-[#ccc] 
                                    font-roboto text-[1.2rem] max-sm:w-full shadow-md border-none outline-none placeholder:font-normal
                                    text-lg font-semibold'
                />
            </form>
            {
                data && data.length > 0 ?
                    (
                        loading ? <div className='text-2xl font-semibold text-neutral-600 mt-10'>Loading...</div> :
                        data.map((post) => (
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
                    (
                        <div className="text-2xl font-semibold text-neutral-600 mt-10">Whatever ID you gave, no post of that was found</div>
                    )
            }
        </div>
    )
}

export default SearchBar
