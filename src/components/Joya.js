import React, { useState }  from 'react';
const Joya = (props) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <img src={props.img}
                 onMouseEnter={() => setIsHover(true)}
                 onMouseLeave={() => setIsHover(false)}
                 className={isHover ? 'img-fluid animated swing': "img-fluid"}
                 alt="img"/>
        </>
    );
};

export default Joya;