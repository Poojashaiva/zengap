
import { Fragment } from 'react'
import Allimages from '../../../common/imagesdata/imagesdata'
import Pageheader from '../../../common/pageheader/pageheader'
function Avatar() {
  return (
    <Fragment>
      <Pageheader titles={"AVATAR"} active={"Avatar"} Subtite={"Elements"} />

      <div className="row">

        <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                Default Avatars
              </div>
            </div>
            <div className="card-body">
              <div className="text-wrap">
                <div className="avatar-group">
                  <div className="avatar avatar-xs">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                  </div>
                  <div className="avatar avatar-sm">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                  </div>
                  <div className="avatar">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                  </div>
                  <div className="avatar avatar-lg">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                  </div>
                  <div className="avatar avatar-xl">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                  </div>
                  <div className="avatar avatar-xxl">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- col-end --> */}

        <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                Avatars With Initials
              </div>
            </div>
            <div className="card-body">
              <div className="text-wrap">
                <div className="avatar-group">
                  <div className="avatar avatar-xs bg-primary rounded-circle">
                    Z
                  </div>
                  <div className="avatar avatar-sm bg-secondary rounded-circle">
                    E
                  </div>
                  <div className="avatar bg-orange rounded-circle">
                    M
                  </div>
                  <div className="avatar avatar-lg bg-danger rounded-circle">
                    B
                  </div>
                  <div className="avatar avatar-xl bg-teal rounded-circle">
                    T
                  </div>
                  <div className="avatar avatar-xxl bg-success rounded-circle d-none d-sm-flex">
                    S
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- col-end --> */}

        <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                Avatar Shapes
              </div>
            </div>
            <div className="card-body">
              <div className="text-wrap">
                <div className="avatar-group">
                  <div className="avatar avatar-lg">
                    <img alt="avatar" className="radius-3" src={Allimages("User5")} />
                  </div>
                  <div className="avatar avatar-xl mx-4">
                    <img alt="avatar" src={Allimages("User6")} />
                  </div>
                  <div className="avatar avatar-xxl">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User4")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- col-end --> */}

        <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                Status Indicator
              </div>
            </div>
            <div className="card-body">
              <div className="text-wrap">
                <div className="avatar-group">
                  <div className="avatar-status avatar-lg me-4">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User8")} />
                  </div>
                  <div className="avatar-status avatar-xxl offline">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User8")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- col-end --> */}

        <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Avatars with numbers</div>
            </div>
            <div className="card-body">
              <div className="text-wrap">
                <div className="avatar-group">
                  <div className="avatar-badge avatar-xs">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                    <span className="badge rounded-circle bg-primary number-badge">2</span>
                  </div>
                  <div className="avatar-badge avatar-sm">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                    <span className="badge rounded-circle badge-secondary number-badge">2</span>
                  </div>
                  <div className="avatar-badge avatar">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                    <span className="badge rounded-circle bg-orange number-badge">11</span>
                  </div>
                  <div className="avatar-badge avatar-lg">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                    <span className="badge rounded-circle bg-success number-badge">3</span>
                  </div>
                  <div className="avatar-badge avatar-xl">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                    <span className="badge rounded-circle bg-teal number-badge">3</span>
                  </div>
                  <div className="avatar-badge avatar-xxl">
                    <img alt="avatar" className="rounded-circle" src={Allimages("User7")} />
                    <span className="badge rounded-circle bg-danger number-badge">3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- col-end --> */}

        <div className="col-xl-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">
                Stacked Avatars in Numbers
              </div>
            </div>
            <div className="card-body">
              <div className="text-wrap">
                <div className="avatar-list-stacked">
                  <div className="avatar rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User2")} /></div>
                  <div className="avatar rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User6")} /></div>
                  <div className="avatar rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User8")} /></div>
                  <div className="avatar rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User10")} /></div>
                  <div className="avatar rounded-circle"><img alt="avatar" className="rounded-circle" src={Allimages("User12")} /></div>
                  <div className="avatar bg-primary rounded-circle">+8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- col-end --> */}

      </div>
    </Fragment>
  )
}

export default Avatar