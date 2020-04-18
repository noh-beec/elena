import React, { useState }  from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const NLink = (props) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <img  className={isHover ? 'menu-img animated pulse': 'menu-img'}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}  src={props.img} alt=""/><span> </span>
                  <Link className="header-link"
                        to={props.to}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>{props.text}</Link>
        </>
    );
};

export default NLink;