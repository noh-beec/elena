import React, { useState }  from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const NLink = (props) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <Link className="header-link"
                  style={{paddingRight: "16px"}}
                  to={props.to}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>
            <img  className={isHover ? 'menu-img animated pulse': 'menu-img'}
                  src={props.img} alt=""/><span> </span>
                  {props.text}</Link>
        </>
    );
};

export default NLink;