import styles from "./Header.module.css"
import video from "/Header_video.mp4"
function Header() {
    return (
        <header className={styles.header}>
            <nav className="navbar navbar-expand-lg navbar-light navbar-dark" id={styles.navbar}>
                <a className="navbar-brand" id={styles.brand_name} href="#">Knot Shots</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="  navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" id={styles.navbar_buttons}>
                        <li className="nav-item active">
                            <a className="nav-link" id={styles.nav_link} href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id={styles.nav_link} href="#">PHOTOGRAPHY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id={styles.nav_link} href="#">FILMS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id={styles.nav_link} href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.video}>
                <video src={video} autoPlay loop muted preload="none" />
            </div>
        </header>
    )
}

export default Header
