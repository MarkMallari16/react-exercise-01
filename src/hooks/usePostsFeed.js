import React, { useEffect, useState } from 'react'

function usePostsFeed() {
    const [postsData, setPostsData] = useState([]);
    useEffect(() => {
        function fetchData(endpoint) {
            fetch(endpoint)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok", response.statusText)
                    }
                    return response.json()
                })
                .then(data => setPostsData(data));
        }
        fetchData('https://jsonplaceholder.typicode.com/photos');
    }, [])

    return postsData;
}

export default usePostsFeed