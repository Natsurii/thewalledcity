import '../App.css'
import '../index.css'
import headerImg from '/assets/header.png'

function Header() {

    return(
        <header>
            <img src={headerImg} alt="A multicolored logo of Intramuros" />
        </header>
    )
}

export default Header;