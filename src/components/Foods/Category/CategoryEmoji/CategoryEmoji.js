import { React } from 'react';

export const CategoryEmoji = (props) => {
    const { category } = props;
    //use switch statement to determine svg src
    // use require("../pathname") to dynamically import svg
    let emoji = false;

    return (
        <span>
            {
                emoji ? <img className='category-emoji' src='svg here' alt='category-emoji'/> : false
            }
        </span>
    );
}