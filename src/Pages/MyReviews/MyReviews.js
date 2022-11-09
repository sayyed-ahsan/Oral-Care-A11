import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews')
    return (
        <div>
            <div className='my-5 flex justify-center'>
                <div>
                    <textarea className="textarea textarea-warning" placeholder="comment"></textarea>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;