import React, { useState } from 'react';

import styles from './Card.module.scss';

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }
  
  React.useEffect( () => {
  }, [isAdded]);

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick = {props.onFavorite}>
          <img src='/img/unliked.svg' alt='unlike'/>
      </div>
      
      <img width={133} height={112 } src={props.imgUrl} alt="sneaker"></img>
      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
          <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
          </div>

          <img className={styles.plus} onClick = {onClickPlus} src = {isAdded ? "/img/added.svg" : "/img/add.svg"} alt="add"></img>

      </div>
    </div>
  );
}

export default Card;

