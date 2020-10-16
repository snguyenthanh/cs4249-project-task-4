/**
 *
 * ImprovedPage
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectImprovedPage } from './selectors';

import Dropdown from './Dropdown';
import DateTimeCalendar from './DateTimeCalendar';
import { facilities } from './locations';

interface Props {}

// Old UI: https://utownfbs.nus.edu.sg/utown/apptop.aspx

export const ImprovedPage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const improvedPage = useSelector(selectImprovedPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const [facility, setFacility] = useState<any>('Please select a facility type');
  const [location, setLocation] = useState<any>('');
  const [dates, setDates] = useState<any>([]);
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const chosenFacility: any = facility !== null ? facilities.find(item => item.value === facility) : {};

  return (
    <div className="bg-gray-100 p-6 h-screen font-sans">
      <Helmet>
        <title>ImprovedPage</title>
        <meta name="description" content="Description of ImprovedPage" />
      </Helmet>

      <div className="max-w-6xl h-56 min-h-full p-6 rounded overflow-hidden shadow-md">
        <h1 className="flex-1 text-3xl font-medium">New Booking</h1>
        <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">Faculty / Resource Type*</h2>
        <Dropdown zIndex={40} value={facility} options={facilities} onClick={value => {
          setFacility(value);
          setLocation('');
        }} />
        <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">Location*</h2>
        <Dropdown value={location} options={chosenFacility ? chosenFacility.locations : []} onClick={value => setLocation(value)} />
        <br />
        <div>
          <h2 className="flex-1 mt-4 mb-2 text-lg font-medium">Date</h2>
          <div>
            <input
              className="inline-block form-input block w-56 sm:text-sm sm:leading-5 rounded-md shadow-sm"
              onClick={() => setOpenCalendar(true)}
              value={dates.length > 0 ? dates[0].format('DD-MMM-YYYY') : ''}
            />
            <span className="inline-block mx-4">to</span>
            <input
              className="inline-block form-input block w-56 sm:text-sm sm:leading-5 rounded-md shadow-sm"
              onClick={() => setOpenCalendar(true)}
              value={dates.length > 1 ? dates[1].format('DD-MMM-YYYY') : ''}
            />
          </div>
        </div>
        {openCalendar ? (
          <DateTimeCalendar
            onChange={date => {
              setDates(date);
              if (date.length > 1) setOpenCalendar(false);
            }}
            closeCalendar={() => setOpenCalendar(false)}
          />
        ) : <div />}

        <span className="inline-flex rounded-md shadow-sm mt-32">
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 text-base leading-6 font-medium rounded-md text-white
            bg-gradient-to-r from-green-400 to-green-700 hover:from-green-300 hover:to-green-600 focus:outline-none focus:shadow-outline-green
            transition ease-in-out duration-150"
          >
            Search Availability
          </button>
        </span>
      </div>
    </div>
  );
});

const Div = styled.div``;
