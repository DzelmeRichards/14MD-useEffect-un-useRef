import './first.scss';
import {
  FC, useState, useEffect, useRef,
} from 'react';
import { link } from 'fs';

const Third = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [inputArr, setInputArr] = useState<String[]>([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="col-xs-6">
      <div className="third__container">
        <div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              setInputArr([...inputArr, inputValue]);
              setInputValue('');
              inputRef.current?.focus();
            }}
            action=""
          >
            <input
              className="input"
              ref={inputRef}
              value={inputValue}
              type="text"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className="button"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <ul>
            {inputArr.map((li) => (

              <li key={Math.random()}>{li}</li>

            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Third;
