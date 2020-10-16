import React, { useState } from "react";
import DropdownOption from './DropdownOption';
import './Dropdown.css';

interface Props {
  value: string,
  options: Array<any>,
  onClick: (any) => any,
  zIndex?: number
}

export default function Dropdown(props: Props) {
  const [value, setDropdownValue] = useState<any>('Please select a facility type');
  const [hidden, setHidden] = useState<boolean>(false);

  const { zIndex } = props;

  return (
    <div className={`group inline-block shadow-sm ${hidden ? 'pointer-events-none' : ''}`}>
      <button
        className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-lg flex items-center min-w-32"
      >
        <span className="pr-1 flex-1">{props.value}</span>
        <span>
          <svg
            className={`fill-current h-4 w-4
            transition duration-150 ease-in-out`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        className="shadow-sm bg-white mt-2 border rounded-lg transform scale-0 group-hover:scale-100 absolute
      transition duration-150 ease-in-out origin-top min-w-32"
      >
        {props.options.map(option =>
          <DropdownOption onClick={value => {
            props.onClick(value);
            setDropdownValue(value);
            setHidden(true);
            setTimeout(() => {
              setHidden(false);
            }, 100);
          }} {...option} />
        )}
      </ul>
    </div>
  );
}
