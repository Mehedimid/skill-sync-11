import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../../titles';

function MyServices(props) {
    return (
        <div className='min-h-screen bg-red-600'>
        <Helmet>
            <title>
                {titles.myServices}
            </title>
        </Helmet>
          
        </div>
    );
}

export default MyServices;