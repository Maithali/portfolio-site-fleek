// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Maithali Gharde" />

            <div className='header__content'>
                <h1>Hi, I'm Maithali Gharde</h1>
                <p>Full Stack Blockchain Developer</p>
                <a href="mailto:ghardem1@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;