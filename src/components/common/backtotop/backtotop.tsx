import { useState, useEffect, Fragment } from "react";


const TabToTop = () => {
    const [BacktoTop, setBacktopTop] = useState("");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 130) {
                setBacktopTop("d-block");
            } else setBacktopTop("");
        });
    }, []);
    const screenup = () => {
        window.scrollTo({
            top: 10,
            behavior: "auto",
            //   smooth
        });
    };
    return (
        <Fragment>
            <a  href="#"  id="back-to-top"      className={`${BacktoTop}`}></a>
            <a href="#top" id="back-to-top" onScroll={screenup} className={`back-to-top rounded-circle shadow ${BacktoTop}`}><i className="las la-arrow-up"></i></a>
        </Fragment>
    );
};

TabToTop.propTypes = {};

TabToTop.defaultProps = {};

export default TabToTop;
