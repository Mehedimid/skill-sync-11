import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../../titles';

function AddServices(props) {
    return (
        <div className='min-h-screen bg-green-600'>
          <Helmet>
            <title>
                {titles.addServices}
            </title>
          </Helmet>
        </div>
    );
}

export default AddServices;