import React from 'react';

interface Props {
  value: string;
  onClick: (any) => void;
  subOptions?: Array<string>;
}

export default function DropdownOption(props: Props) {
  const { value, subOptions, onClick } = props;
  if (!subOptions)
    return (
      <li
        className="px-3 py-1 hover:bg-gray-100"
        onClick={() => onClick(value)}
      >
        {value}
      </li>
    );

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
        {subOptions.map(option => (
          <li
            className="px-3 py-1 hover:bg-gray-100"
            onClick={() => onClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </li>
  );
}
