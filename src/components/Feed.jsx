import React from 'react'
import { Container } from 'react-bootstrap'
import Cards from './Cards'
import coding from './coding.jpg';
import cooking from './cooking.jpg';
import gaming from './gaming.jpg';
import cleaning from './cleaning.jpg';


const Feed = ({ postsData }) => {
    return (
        <section className="feed-container">
            <Container className='d-flex gap-4 justify-content-center  flex-wrap'>
                {postsData.slice(0, 10).map((post, index) => (
                    <Cards key={index} title={post.title} text={post.body} imgSrc={post.url} />

                ))}
            </Container>
        </section>
    )
}

export default Feed