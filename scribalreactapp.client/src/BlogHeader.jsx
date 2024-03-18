import { Link } from 'react-router-dom';

const BlogHeader = () => {
    return (
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="link-secondary" href="#">Subscribe</a>
                </div>

                <div className="col-4 text-center">
                    <Link to="/" className="blog-header-logo text-dark">Large</Link>
                </div>

                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="link-secondary" href="#" aria-label="Search">
                    <i className="bi bi-search"></i></a>
                    <Link to="/register" className="btn btn-sm btn-outline-secondary">Sign up</Link>
                </div>
            </div>
        </header>
    );
};

export default BlogHeader;