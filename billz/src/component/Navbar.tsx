
const Navbar = () => {
    return (
        <div className="Navbar py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <h2 className="logo">LOGO</h2>
                        <div className="d-flex ms-auto">
                            <button className="btn btn-outline-dark">Sign in</button>
                            <button className="btn ms-3 btn-primary">Sign up </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;