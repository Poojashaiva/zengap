import { Fragment } from "react"
interface FullName {
    titles: string;
    active: string;
    Subtite: string;
}

function Pageheader(props: FullName) {
    return (
        <Fragment>
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">{props.titles}</span>
                </div>
                <div className="justify-content-center mt-2">
                    <ol className="breadcrumb breadcrumb-style3">
                        <li className="breadcrumb-item tx-15"><a >{props.Subtite}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{props.active}</li>
                    </ol>
                </div>
            </div>
        </Fragment>
    )
}

export default Pageheader