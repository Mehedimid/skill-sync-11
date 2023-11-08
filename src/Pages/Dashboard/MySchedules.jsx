import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../../titles';

function MySchedules(props) {
    return (
        <div className='min-h-screen bg-yellow-600'>
            <Helmet>
                <title>
                    {titles.mySchedules}
                </title>
            </Helmet>
          
        </div>
    );
}

export default MySchedules;