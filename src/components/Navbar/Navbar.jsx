import '../../assets/css/navbar.css'
import git from '../../assets/img/icons8-github-with-cat-logo-an-online-community-for-software-development-24.png'
export const Navbar = () => {
    return(
        <nav className="Navbar-div">
            <div className='Navbar-logo'>
              <p>Danilo William</p>
            </div>
            <div className='Navbar-buttons'>
                <a href="">HOME</a>
                <a href="">PROJECTS</a>
                <a href="">EXPERIENCES</a>
            </div>
            <div className='Navbar-button'>
                <button className='button-github'><img src={git} alt="" /> GitHub</button>
            </div>
        </nav>
    );
} 