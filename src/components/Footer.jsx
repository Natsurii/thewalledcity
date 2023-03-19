import Github from '/assets/GitHub.png'

function Footer() {
    return(
        <footer className='sidepad'>
            <a href="https://github.com/Natsurii/thewalledcity"><img src={Github} alt="GithubLogo" style={{'width':'24px'}}/></a>
            <p>Made with 💖 by Natsurii</p>
            <p>All Rights Reserved. &copy; {new Date().getFullYear()}.</p>
        </footer>
    )
}

export default Footer