import { storiesOf } from '@storybook/react';
import React from 'react';

import { Display } from '../identity/typography/display';
import styles from './_story.scss';

const Container = ({ children }) => <div className={styles.container}>{children}</div>;
const Box = () => <div className={styles.box} />;

storiesOf('05 — Layout/Grid', module)
  .add('4 Blocks — 3 Columns', () => (
    <div>
      <Display>4 Blocks — 3 Columns</Display>
      <div className={styles.wrap}>
        <Container>
          <div className={styles['col-3']}>
            <Box />
          </div>
          <div className={styles['col-3']}>
            <Box />
          </div>
          <div className={styles['col-3']}>
            <Box />
          </div>
          <div className={styles['col-3']}>
            <Box />
          </div>
        </Container>

        <div className={styles.overlay}>
          <div className={styles['grid-lines']}>
            {Array.from(Array(12).keys()).map((el, index) => <div key={`el-${index}`} className={styles.column} />)}
          </div>
        </div>
      </div>
    </div>
  ))
  .add('3 Blocks — 4 Columns', () => (
    <div>
      <Display>4 Blocks — 3 Columns</Display>
      <div className={styles.wrap}>
        <Container>
          <div className={styles['col-4']}>
            <Box />
          </div>
          <div className={styles['col-4']}>
            <Box />
          </div>
          <div className={styles['col-4']}>
            <Box />
          </div>
        </Container>

        <div className={styles.overlay}>
          <div className={styles['grid-lines']}>
            {Array.from(Array(12).keys()).map((el, index) => <div key={`el-${index}`} className={styles.column} />)}
          </div>
        </div>
      </div>
    </div>
  ))
  .add('2 Blocks — 6 Columns', () => (
    <div>
      <Display>2 Blocks — 6 Columns</Display>
      <div className={styles.wrap}>
        <Container>
          <div className={styles['col-6']}>
            <Box />
          </div>
          <div className={styles['col-6']}>
            <Box />
          </div>
        </Container>

        <div className={styles.overlay}>
          <div className={styles['grid-lines']}>
            {Array.from(Array(12).keys()).map((el, index) => <div key={`el-${index}`} className={styles.column} />)}
          </div>
        </div>
      </div>
    </div>
  ))
  .add('1 Block — 12 Columns', () => (
    <div>
      <Display>1 Block — 12 Column</Display>
      <div className={styles.wrap}>
        <Container>
          <div className={styles['col-12']}>
            <Box />
          </div>
        </Container>

        <div className={styles.overlay}>
          <div className={styles['grid-lines']}>
            {Array.from(Array(12).keys()).map((el, index) => <div key={`el-${index}`} className={styles.column} />)}
          </div>
        </div>
      </div>
    </div>
  ))
  .add('1 Block — 10 Columns', () => (
    <div>
      <Display>1 Block — 10 Columns</Display>
      <div className={styles.wrap}>
        <Container>
          <div className={styles['col-10']}>
            <Box />
          </div>
        </Container>

        <div className={styles.overlay}>
          <div className={styles['grid-lines']}>
            {Array.from(Array(12).keys()).map((el, index) => <div key={`el-${index}`} className={styles.column} />)}
          </div>
        </div>
      </div>
    </div>
  ))
  .add('1 Block — 8 Columns', () => (
    <div>
      <Display>1 Block — 8 Columns</Display>
      <div className={styles.wrap}>
        <Container>
          <div className={styles['col-8']}>
            <Box />
          </div>
        </Container>

        <div className={styles.overlay}>
          <div className={styles['grid-lines']}>
            {Array.from(Array(12).keys()).map((el, index) => <div key={`el-${index}`} className={styles.column} />)}
          </div>
        </div>
      </div>
    </div>
  ));
