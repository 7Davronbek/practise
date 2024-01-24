import {Link} from "react-router-dom";
import useLocalStorage from "use-local-storage";

const Navbar = () => {
    const [isLight, setIsLight] = useLocalStorage<boolean>("isLight", true);

    return (
        <div className="Navbar py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <h2 className="logo">LOGO</h2>
                        <Link className="mx-2" to="/multiple-select">Selects</Link>
                        <Link className="mx-2" to="/i18next">I18next</Link>
                        <div className="d-flex ms-auto">
                            <button onClick={() => setIsLight(!isLight)}
                                    className="btn btn-outline-dark">{isLight ? "Light" : "Dark"}</button>
                            <Link to="/login" className="btn btn-outline-dark">Sign in</Link>
                            <button className="btn ms-3 btn-primary">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;