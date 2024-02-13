
import { Fragment } from 'react'
import Loaderimg from '../../../assets/img/loader.svg'
function Loader() {
    return (
        <Fragment>

            <div id="global-loader">
                <img src={Loaderimg} className="loader-img" alt="Loader" />
            </div>
        </Fragment>
    )
}

export default Loader