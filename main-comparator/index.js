import React, { useState } from 'react';
import { render } from 'react-dom';
import JsonCompare from '../lib/index.js';
import compareService from './services/compareService.js';
import './style.css';

function App() {
  const totalGetAPI = 6;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBeta, setIsLoadingBeta] = useState(false);
  const [isLoadingAlpha, setIsLoadingAlpha] = useState(false);
  const [stateLogin, setStateLogin] = useState({ username: "", password: "" });
  const [alphaLogin, setAlphaLogin] = useState(null);
  const [betaLogin, setBetaLogin] = useState(null);
  const [getUserMeAlpha, setGetUserMeAlpha] = useState({});
  const [getUserMeBeta, setGetUserMeBeta] = useState({});
  const [getUserMeMetaAlpha, setGetUserMeMetaAlpha] = useState({});
  const [getUserMeMetaBeta, setGetUserMeMetaBeta] = useState({});
  const [getUserMeCohortAlpha, setGetUserMeCohortAlpha] = useState({});
  const [getUserMeCohortBeta, setGetUserMeCohortBeta] = useState({});
  const [getUserMeDevicesAlpha, setGetUserMeDevicesAlpha] = useState({});
  const [getUserMeDevicesBeta, setGetUserMeDevicesBeta] = useState({});
  const [getUserMeCertificationsAlpha, setGetUserMeCertificationsAlpha] = useState({});
  const [getUserMeCertificationsBeta, setGetUserMeCertificationsBeta] = useState({});
  const [getUserIdentityAlpha, setGetUserIdentityAlpha] = useState({});
  const [getUserIdentityBeta, setGetUserIdentityBeta] = useState({});
  const [getUserMeConnectionsSocialAlpha, setGetUserMeConnectionsSocialAlpha] = useState({});
  const [getUserMeConnectionsSocialBeta, setGetUserMeConnectionsSocialBeta] = useState({});
  const [socialType, setSocialType] = useState("facebook");
  const [get, setGet] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setStateLogin({
      ...stateLogin
    })
    setIsLoading(true);
    setIsLoadingBeta(true)
    setIsLoadingAlpha(true)

    // call login alpha
    compareService.postLoginAlpha(stateLogin.username, stateLogin.password).then((res) => {
      setAlphaLogin(res.data);

      // call get users/me/meta alpha
      compareService.getUserMeMetaAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeMetaAlpha(res.data);
      }).catch((err) => {
        setGetUserMeMetaAlpha(err.response.data);
      })

      // call get users/me alpha
      compareService.getUserMeAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeAlpha(res.data);
      }).catch((err) => {
        setGetUserMeAlpha(err.response.data);
      })

      // call get users/me/cohort alpha
      compareService.getUserMeCohortAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeCohortAlpha(res.data);
      }).catch((err) => {
        setGetUserMeCohortAlpha(err.response.data);
      })

      // call get users/me/devices alpha
      compareService.getUserMeDevicesAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeDevicesAlpha(res.data);
      }).catch((err) => {
        setGetUserMeDevicesAlpha(err.response.data);
      })

      // call get users/me/certifications alpha
      compareService.getUserMeCertificationsAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeCertificationsAlpha(res.data);
      }).catch((err) => {
        setGetUserMeCertificationsAlpha(err.response.data);
      })

      // call get users/me/identity alpha
      compareService.getUserIdentityAlpha(res.data.data.access_token).then((res) => {
        setGetUserIdentityAlpha(res.data);
      }).catch((err) => {
        setGetUserIdentityAlpha(err.response.data);
      })

      // call get v2/users/{{me}/connections/Social alpha
      compareService.getUserMeConnectionsSocialAlpha(res.data.data.access_token, res.data.data.user.userId, socialType).then((res) => {
        setGetUserMeConnectionsSocialAlpha(res.data);
      }).catch((err) => {
        setGetUserMeConnectionsSocialAlpha(err.response.data);
      })

      //

      setIsLoadingAlpha(false)
      setIsLoading(false);

    }).catch((err) => {
      if (err.response) {
        setAlphaLogin(err.response.data);
      }
    });

    // call login beta
    compareService.postLoginBeta(stateLogin.username, stateLogin.password).then((res) => {
      setBetaLogin(res.data);

      // call get users/me beta
      compareService.getUserMeBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeBeta(res.data);
      }).catch((err) => {
        setGetUserMeBeta(err.response.data);
      })

      // call get users/me/meta beta
      compareService.getUserMeMetaBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeMetaBeta(res.data);
      }).catch((err) => {
        setGetUserMeMetaBeta(err.response.data);
      })

      // call get users/me/cohort Beta
      compareService.getUserMeCohortBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeCohortBeta(res.data);
      }).catch((err) => {
        setGetUserMeCohortBeta(err.response.data);
      })

      // call get users/me/Devices Beta
      compareService.getUserMeDevicesBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeDevicesBeta(res.data);
      }).catch((err) => {
        setGetUserMeDevicesBeta(err.response.data);
      })

      // call get users/me/certifications Beta
      compareService.getUserMeCertificationsBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        setGetUserMeCertificationsBeta(res.data);
      }).catch((err) => {
        setGetUserMeCertificationsBeta(err.response.data);
      })

      // call get users/me/identity Beta
      compareService.getUserIdentityBeta(res.data.data.access_token).then((res) => {
        setGetUserIdentityBeta(res.data);
      }).catch((err) => {
        setGetUserIdentityBeta(err.response.data);
      })

      // call get v2/users/{{me}/connections/Social Beta
      compareService.getUserMeConnectionsSocialBeta(res.data.data.access_token, res.data.data.user.userId, socialType).then((res) => {
        setGetUserMeConnectionsSocialBeta(res.data);
      }).catch((err) => {
        setGetUserMeConnectionsSocialBeta(err.response.data);
      })

      setIsLoadingBeta(false)

      //

    }).catch((err) => {
      if (err.response) {
        setBetaLogin(err.response.data)
      }
    });

  }

  const handleReload = () => {
    window.location.reload();
  }

  const clickView = () => {
    window.scrollTo(0, 0);
  }

  const clickDown = () => {
    window.scrollTo(0, 20000);
  }

  const handleSelectSocialType = (e) => {
    setSocialType(e.target.value);
    console.log(socialType);
  }

  const handleGetPlus = () => {
    if(get < totalGetAPI){
    setGet(get + 1);
    }
  }

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-4 ms-4 me-4 mt-4'>
            {!betaLogin || !alphaLogin ?
              (
                <>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <div className="form-group from-outline mb-2 mt-3">
                      <label htmlFor="username" className='text-secondary' style={{ fontSize: ".9rem" }}>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="username"
                        aria-label="Search"
                        value={stateLogin.username}
                        onChange={(e) => setStateLogin({
                          ...stateLogin,
                          username: e.target.value,
                        })}
                      />
                    </div>

                    <div className="form-group from-outline mb-2">
                      <label htmlFor="password" className='text-secondary' style={{ fontSize: ".9rem" }}>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        aria-label="Search"
                        name="password"
                        value={stateLogin.password}
                        onChange={(e) => setStateLogin({
                          ...stateLogin,
                          password: e.target.value,
                        })}
                      />
                    </div>

                    <div className="form-group pt-3 text-center">
                      <button
                        className="btn btn-danger btn-block mb"
                        style={{ padding: "5px 30px" }}
                        disabled={isLoading}
                      >
                        <span>{isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <>Login lezhin account</>}</span>
                      </button>
                    </div>
                  </form>
                </>
              )
              :
              (
                <>
                  <div className='ms-4 mt-5 text-center' style={{ fontSize: ".9rem" }}> <span className="title">- Alpha User:</span> {alphaLogin.data ? alphaLogin.data.user.username : (<>not found</>)} - {alphaLogin.data ? alphaLogin.data.user.userId : (<>not found</>)}
                    <br /> <span className="title">- Beta User:</span> {betaLogin.data ? betaLogin.data.user.username : (<>not found</>)} - {betaLogin.data ? betaLogin.data.user.userId : <>not found</>}
                    <br />
                    <button
                      className="btn btn-primary btn-block mb ms-3 mt-2"
                      style={{ padding: "5px 30px" }}
                      onClick={handleReload}
                    >
                      <span>Try other user</span>
                    </button>
                  </div>
                </>
              )}
          </div>
          <div className='col-7 text-center text-danger h1 pt-5 mt-5' style={{ backgroundImage: `url(https://image.slidesdocs.com/responsive-images/background/white-clean-abstract-portfolio-simple-powerpoint-background_a97a4601d6__960_540.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "auto" }}> <span>Lezhin API Comparator</span> </div>
        </div>

        <hr />

        <div className='ms-4'>
          <div className='mb-2'> Addition GET Condition</div>

          {/* socialType */}

          <select className="form-select-sm" style={{ fontSize: '0.9rem' }} aria-label="Default select example"
            id='socialType' value={socialType} onChange={handleSelectSocialType}
          >
            <option value="facebook" selected>social_type</option>
            <option value="facebook">facebook</option>
            <option value="naver">naver</option>
            <option value="twitter">twitter</option>
            <option value="google">google</option>
            <option value="apple">apple</option>
            <option value="yahoojapan">yahoojapan</option>
            <option value="line">line</option>
            <option value="kakao">kakao</option>
          </select>

          {/* socialType 2 */} &#160;

          <select className="form-select-sm" style={{ fontSize: '0.9rem' }} aria-label="Default select example">
            <option selected>social-type</option>
            <option value="1">facebook</option>
            <option value="2">naver</option>
            <option value="3">twitter</option>
            <option value="5">google</option>
            <option value="6">apple</option>
            <option value="7">yahoojapan</option>
            <option value="8">line</option>
            <option value="9">kakao</option>
          </select>

          {/* socialType */}
        </div>

        <hr></hr>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {/* sticky */}

          <div className='col-lg-2'></div>

          <div className='col-8'>

            {/* API post user signin */}
            <div className='pt-2'> {'>'} <span className='text-warning'> &#160;<strong>POST</strong></span> users/signin </div>

            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(betaLogin, null, 2)) : (<>  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(alphaLogin, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={betaLogin} newData={alphaLogin} />

            {/* API get user me */}
            <hr id='wrapper_get_1'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'} </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeBeta} newData={getUserMeAlpha} />

            {/* API get user me meta */}
            <hr id='wrapper_get_2'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/meta </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeMetaBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeMetaAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeMetaBeta} newData={getUserMeMetaAlpha} />

            {/* API get user me cohort */}

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/cohort </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCohortBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCohortAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCohortBeta} newData={getUserMeCohortAlpha} />

            {/* API get user me devices */}
            <hr id='wrapper_get_3'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/devices </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeDevicesBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeDevicesAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeDevicesBeta} newData={getUserMeDevicesAlpha} />

            {/* API get user me certifications */}
            <hr id='wrapper_get_4'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />

            {/* API get user me identity */}
            <hr id='wrapper_get_5'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/identity </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserIdentityBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserIdentityAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserIdentityBeta} newData={getUserIdentityAlpha} />

            {/* API get user me certifications */}
            <hr id='wrapper_get_5'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />

            {/* API get user me connections social */}
            <hr id='wrapper_get_6'/>

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/connections/{socialType} </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeConnectionsSocialBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeConnectionsSocialAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeConnectionsSocialBeta} newData={getUserMeConnectionsSocialAlpha} />

            {/* ====================================PUT==================================== */}
            {/* API get user me devices */}
            <hr id='wrapper_put' />

            <div> {'>'} <span className='text-primary'> &#160;<strong>PUT</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />

            {/* ====================================POST==================================== */}
            {/* API get user me devices */}
            <hr id='wrapper_post' />

            <div> {'>'} <span className='text-warning'> &#160;<strong>POST</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />

            {/* ====================================DEL==================================== */}
            {/* API get user me devices */}
            <hr id='wrapper_del' />

            <div> {'>'} <span className='text-danger'> &#160;<strong>DEL</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />

            {/* API get user me devices */}
            <hr />

            <div> {'>'} <span className='text-danger'> &#160;<strong>DEL</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(getUserMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(getUserMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />


          </div>



          <div className='col-2 d-none d-lg-block'>
            <div className='sticky'>
              <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                <button type="button" className="btn btn-light btn-md text-info" onClick={clickView} style={{ marginTop: '7rem', fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Up"><i className="fas fa-arrow-up"></i></button>
                <a href={`#wrapper_get_${get}`}><button onClick={handleGetPlus} type="button" className="shake-btn btn btn-light btn-md text-success" style={{ fontSize: '1rem' }} data-bs-toggle="tooltip" title="Popular">&#160;GET+&#160;&#160;</button></a>
                <a href='#wrapper_post'><button type="button" className="shake-btn btn btn-light btn-md text-warning" style={{ fontSize: '1rem' }} data-bs-toggle="tooltip" title="Office">POST</button></a>
                <a href='#wrapper_put'><button type="button" className="shake-btn btn btn-light btn-md text-primary" style={{ fontSize: '1rem' }} data-bs-toggle="tooltip" title="Hot news">&#160;PUT&#160;&#160;</button></a>
                <a href='#wrapper_del'><button type="button" className="shake-btn btn btn-light btn-md text-danger" style={{ fontSize: '1rem' }} data-bs-toggle="tooltip" title="Hot news">&#160;DEL&#160;&#160;</button></a>
                <button type="button" className="btn btn-light btn-md text-info" onClick={clickDown} style={{ fontSize: '1.5rem' }} data-bs-toggle="tooltip" title="Down"><i className="fas fa-arrow-down"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
render(<App />, document.getElementById('root'));