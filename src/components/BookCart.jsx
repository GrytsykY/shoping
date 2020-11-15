import React from 'react';
import {Card, Image, Icon, Button} from 'semantic-ui-react'

const BookCard = book => {
  const {title, author, price, genre, image, addedToCart, addedCount} = book;
  return (
    <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{author}</span>
      </Card.Meta>
      <Card.Meta>
        <b>{genre}</b>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='money bill alternate outline' className="green"/>&nbsp;&nbsp;
        <span className="red"><b>Цена:&nbsp; {price} ₴</b></span>
      </a>
    </Card.Content>
    <Button onClick={addedToCart.bind(this, book)}>
      Добавить в корзину {addedCount > 0 && `(${addedCount})`}
    </Button>
  </Card>
  );
}

export default BookCard;
