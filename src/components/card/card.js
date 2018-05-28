import { arrayOf, element, oneOfType, string } from 'prop-types';
import React from 'react';

import { Title } from '../../identity/typography/title';
import styles from './card.scss';

export const Card = ({ title, image = null, children }) => (
  <div className={styles['Card']}>
    {image ? <img src={image} alt={title} className={styles.Card__image} /> : null}
    <div className={styles.Card__content}>
      <Title>{title}</Title>
      {children}
    </div>
  </div>
);

Card.propTypes = {
  title: string.isRequired,
  image: string,
  children: oneOfType([element, arrayOf(element)]).isRequired,
};
