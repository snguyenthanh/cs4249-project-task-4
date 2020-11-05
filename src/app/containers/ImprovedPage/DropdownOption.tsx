import React from 'react';

interface Props {
  value: string;
  onClick: (any) => void;
  subOptions?: Array<string>;
  ignoreSubOptions: boolean;
  listLength: string;
  large: boolean;
}

export default function DropdownOption(props: Props) {
  const { value, subOptions, onClick, large, listLength } = props;
  if (!subOptions || props.ignoreSubOptions)
    return (
      <li
        className={`px-3 py-1 hover:bg-gray-100 ${large ? 'h-12 text-xl' : ''}`}
        onClick={evt => {
          evt.stopPropagation();
          onClick(value);
        }}
      >
        {value}
      </li>
    );

  let maxSize;
  if (listLength === 'short') maxSize = 3;
  else if (listLength === 'long') maxSize = 12;
  else maxSize = 6;
  const options = subOptions.slice(0, maxSize);

  return (
    <li className="rounded-lg relative px-3 py-1 hover:bg-gray-100">
      <button className="w-full text-left flex items-center outline-none focus:outline-none">
        <span className="pr-1 flex-1">{value}</span>
        <span className="mr-auto">
          <svg
            className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul className="shadow-sm bg-white border rounded-lg absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
        {options.map(option => (
          <li
            className="px-3 py-1 hover:bg-gray-100"
            onClick={evt => {
              evt.stopPropagation();
              onClick(option);
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </li>
  );
}
