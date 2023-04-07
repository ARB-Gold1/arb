import {useState} from 'react'

const NavLink = ({link, styles}) => {
    const [showLine, setShowLine] = useState(false);

  return (
    <li onMouseOver={() => setShowLine(true)} onMouseOut={() => setShowLine(false)} >
        <a href={link.link} className={`${styles} font-semibold text-[1rem]`} > { link.title } </a>

        { showLine && (
          <div className={`w-[30px] transition-all duration-500 h-[2px] bg-primary`} />
        ) }
    </li>
  )
}

export default NavLink