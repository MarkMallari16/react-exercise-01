import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from './Cards'

const Feed = ({ postsData, searchQuery }) => {
    const filteredPosts = postsData.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return (
        <section className="feed-container">
         
            <Container className='d-flex gap-4 justify-content-center  flex-wrap'>
                {filteredPosts.length > 0 ? (
                    filteredPosts.slice(0, 10).map((post, index) => (
                        <Cards key={index} title={post.title} text={post.body} imgSrc={post.url} />

                    ))
                ) : (
                    <div>No Feed Found!</div>
                )}
            </Container>
        </section>
    )
}

export default Feed