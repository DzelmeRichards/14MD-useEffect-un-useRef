import './first.scss';
import {
  FC, useState, useEffect, useRef,
} from 'react';
import { link } from 'fs';

const Fifth = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="col-xs-6">
      <div className="fifth__container">
        <button
          className="button"
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count:
          {' '}
          {count}
        </button>
        <div
          className="fifth__count-display"
        >
          {count * 2}
        </div>
      </div>
    </div>
  );
};

export default Fifth;
