import style from './Header.module.css'
import reactLogo from '../assets/react-logo.svg'

export function Header() {
   return (
      <header className={style.header}>
         <img src={reactLogo} />
      </header>
   )
}