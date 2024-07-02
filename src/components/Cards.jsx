import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LikeComponent from './LikeComponent';
import CommentComponent from './CommentComponent';

import ShareComponent from './ShareComponent';

const Cards = ({ title, text, imgSrc }) => {
    return (
        <Card style={{ width: '50rem' }}>
            <Card.Body>
                <Card.Img src={imgSrc} className='mb-3' />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <div className="icons d-flex gap-2">
                    <LikeComponent onclick={() => console.log("clicked")} />
                    <CommentComponent />
                    <ShareComponent />
                </div>
            </Card.Body>
        </Card>
    )
}

export default Cards