import React, { useState } from 'react';
import { render } from 'react-dom';
import JsonCompare from '../lib/index.js';
import compareService from './services/compareService.js';
import './style.css';

function App() {
  const totalGetAPI = 11;
  const totalPutAPI = 2;
  const totalPostAPI = 2;
  const [get, setGet] = useState(null);
  const [post, setPost] = useState(null);
  const [put, setPut] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBeta, setIsLoadingBeta] = useState(false);
  const [isLoadingAlpha, setIsLoadingAlpha] = useState(false);
  const [stateLogin, setStateLogin] = useState({ username: "", password: "" });
  const [socialType, setSocialType] = useState("facebook");
  const [isAutoPut, setIsAutoPut] = useState(true);
  const [putUserMe, setPutUserMe] = useState({ locale: "ko-KR", isAdultFilterOn: true, birthDate: "19990304", gender: "male", agreements: { marketingEmail: true, collectingBirth: true } });

  const handleLogin = (e) => {
    e.preventDefault();
    setStateLogin({
      ...stateLogin
    })
    setIsLoading(true);
    setIsLoadingBeta(true);
    setIsLoadingAlpha(true);

    // call login alpha
    compareService.postLoginAlpha(stateLogin.username, stateLogin.password).then((res) => {
      localStorage.setItem('userAlpha', JSON.stringify(res.data));

      // call get users/me/meta alpha
      compareService.getUserMeMetaAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeMetaAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeMetaAlpha', JSON.stringify(err.response.data));
      })

      // call get users/me alpha
      compareService.getUserMeAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeAlpha', JSON.stringify(err.response.data));
      })

      // call get users/me/cohort alpha
      compareService.getUserMeCohortAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeCohortAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeCohortApha', JSON.stringify(err.response.data));
      })

      // call get users/me/devices alpha
      compareService.getUserMeDevicesAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeDevicesAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeDevicesBeta', err.response.data);
      })

      // call get users/me/certifications alpha
      compareService.getUserMeCertificationsAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeCertificationsAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeCertificationsAlpha', JSON.stringify(err.response.data));
      })

      // call get users/me/identity alpha
      compareService.getUserIdentityAlpha(res.data.data.access_token).then((res) => {
        localStorage.setItem('userIdentityAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userIdentityAlpha', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/connections/Social alpha
      compareService.getUserMeConnectionsSocialAlpha(res.data.data.access_token, res.data.data.user.userId, socialType).then((res) => {
        localStorage.setItem('userMeConnectionsSocialAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeConnectionsSocialAlpha', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/genres alpha
      compareService.getUserMeGenresAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeGenresAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeGenresAlpha', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/balance alpha
      compareService.getUserMeBalanceAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeBalanceAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeBalanceAlpha', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/ga alpha
      compareService.getUserMeGAAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeGaAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeGaAlpha', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/BadgeCount alpha
      compareService.getUserMeBadgeCountAlpha(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeBadgeCountAlpha', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeBadgeCountAlpha', JSON.stringify(err.response.data));
      })

      // call put users/{me} alpha

      if (isAutoPut) {
        compareService.putUserMeAlpha(res.data.data.access_token, res.data.data.user.userId, putUserMe).then((res) => {
          localStorage.setItem('putUserMeAlpha', JSON.stringify(res.data));
        }).catch((err) => {
          localStorage.setItem('putUserMeAlpha', JSON.stringify(err.response.data));
        })
      }

      //

      setIsLoadingAlpha(false)
      setIsLoading(false);

    }).catch((err) => {
      if (err.response) {
        setAlphaLogin(err.response.data);
        setIsLoadingAlpha(false);
        setIsLoadingBeta(false);
      }
    });

    // call login beta
    compareService.postLoginBeta(stateLogin.username, stateLogin.password).then((res) => {
      localStorage.setItem('userBeta', JSON.stringify(res.data));

      // call get users/me beta
      compareService.getUserMeBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeMetaBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeMetaBeta', JSON.stringify(err.response.data));
      })

      // call get users/me/meta beta
      compareService.getUserMeMetaBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeBeta', JSON.stringify(err.response.data));
      })

      // call get users/me/cohort Beta
      compareService.getUserMeCohortBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeCohortBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeCohortBeta', JSON.stringify(err.response.data));
      })

      // call get users/me/Devices Beta
      compareService.getUserMeDevicesBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeDevicesBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeDevicesBeta', JSON.stringify(err.response.data));
      })

      // call get users/me/certifications Beta
      compareService.getUserMeCertificationsBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeCertificationsBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeCertificationsBeta', JSON.stringify(err.response.data));
      })

      // call get users/me/identity Beta
      compareService.getUserIdentityBeta(res.data.data.access_token).then((res) => {
        localStorage.setItem('userIdentityBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userIdentityBeta', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/connections/Social Beta
      compareService.getUserMeConnectionsSocialBeta(res.data.data.access_token, res.data.data.user.userId, socialType).then((res) => {
        localStorage.setItem('userMeConnectionsSocialBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeConnectionsSocialBeta', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/genres Beta
      compareService.getUserMeGenresBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeGenresBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeGenresBeta', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/balance Beta
      compareService.getUserMeBalanceBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeBalanceBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeBalanceBeta', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/ga Beta
      compareService.getUserMeGABeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeGaBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeGaBeta', JSON.stringify(err.response.data));
      })

      // call get v2/users/{{me}/BadgeCount Beta
      compareService.getUserMeBadgeCountBeta(res.data.data.access_token, res.data.data.user.userId).then((res) => {
        localStorage.setItem('userMeBadgeCountBeta', JSON.stringify(res.data));
      }).catch((err) => {
        localStorage.setItem('userMeBadgeCountBeta', JSON.stringify(err.response.data));
      })

      // call put users/{me} Beta
      if (isAutoPut) {
        compareService.putUserMeBeta(res.data.data.access_token, res.data.data.user.userId, putUserMe).then((res) => {
          localStorage.setItem('putUserMeBeta', JSON.stringify(res.data));
        }).catch((err) => {
          localStorage.setItem('putUserMeBeta', JSON.stringify(err.response.data));
        })
      }

      //

      setIsLoadingBeta(false)


    }).catch((err) => {
      if (err.response) {
        setBetaLogin(err.response.data);
      }
    });
  }

  // get Local Storage Data ===========================================================================================================================
  // get Local Storage Data ===========================================================================================================================

  const userAlpha = JSON.parse(localStorage.getItem('userAlpha'));
  const userMeMetaAlpha = JSON.parse(localStorage.getItem('userMeMetaAlpha'));
  const userMeAlpha = JSON.parse(localStorage.getItem('userMeAlpha'));
  const userMeCohortAlpha = JSON.parse(localStorage.getItem('userMeCohortAlpha'));
  const userMeDevicesAlpha = JSON.parse(localStorage.getItem('userMeDevicesAlpha'));
  const userMeCertificationsAlpha = JSON.parse(localStorage.getItem('userMeCertificationsAlpha'));
  const userIdentityAlpha = JSON.parse(localStorage.getItem('userIdentityAlpha'));
  const userMeConnectionsSocialAlpha = JSON.parse(localStorage.getItem('userMeConnectionsSocialAlpha'));
  const userMeGenresAlpha = JSON.parse(localStorage.getItem('userMeGenresAlpha'));
  const userMeBalanceAlpha = JSON.parse(localStorage.getItem('userMeBalanceAlpha'));
  const userMeGaAlpha = JSON.parse(localStorage.getItem('userMeGaAlpha'));
  const userMeBadgeCountAlpha = JSON.parse(localStorage.getItem('userMeBadgeCountAlpha'));
  const putUserMeAlpha = JSON.parse(localStorage.getItem('putUserMeAlpha'));

  // ----

  const userBeta = JSON.parse(localStorage.getItem('userBeta'));
  const userMeMetaBeta = JSON.parse(localStorage.getItem('userMeMetaBeta'));
  const userMeBeta = JSON.parse(localStorage.getItem('userMeBeta'));
  const userMeCohortBeta = JSON.parse(localStorage.getItem('userMeCohortBeta'));
  const userMeDevicesBeta = JSON.parse(localStorage.getItem('userMeDevicesBeta'));
  const userMeCertificationsBeta = JSON.parse(localStorage.getItem('userMeCertificationsBeta'));
  const userIdentityBeta = JSON.parse(localStorage.getItem('userIdentityBeta'));
  const userMeConnectionsSocialBeta = JSON.parse(localStorage.getItem('userMeConnectionsSocialBeta'));
  const userMeGenresBeta = JSON.parse(localStorage.getItem('userMeGenresBeta'));
  const userMeBalanceBeta = JSON.parse(localStorage.getItem('userMeBalanceBeta'));
  const userMeGaBeta = JSON.parse(localStorage.getItem('userMeGaBeta'));
  const userMeBadgeCountBeta = JSON.parse(localStorage.getItem('userMeBadgeCountBeta'));
  const putUserMeBeta = JSON.parse(localStorage.getItem('putUserMeBeta'));

  // handle request ===================================================================================================================================
  // handle request ===================================================================================================================================

  const handleReload = () => {
    localStorage.clear();
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
  }

  const handleSelectAutoPut = (e) => {
    if (e.target.value == 'false') {
      setIsAutoPut(false);
    } else {
      setIsAutoPut(true);
    }
  }

  const handlePlus = (e) => {
    if (e == 1 && get < totalGetAPI) {
      setGet(get + 1);
    } else if (e == 2 && put < totalPutAPI) {
      setPut(put + 1);
    } else if (e == 3 && post < totalPostAPI) {
      setPost(post + 1);
    }
  }

  const handleMinus = (e) => {
    if (e == 1 && get > 1 && get) {
      setGet(get - 1);
    } else if (e == 2 && put && put > 1) {
      setPut(put - 1);
    } else if (e == 3 && post && post > 1) {
      setPost(post - 1);
    }
  }

  const handleDefault = (e) => {
    if (e == 1) {
      setGet(1);
    } else if (e == 2) {
      setPut(1);
    } else if (e == 3) {
      setPost(1);
    }
  }

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // return ===========================================================================================================================
  // return ===========================================================================================================================

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-4 ms-4 me-4 mt-4'>
            {!userAlpha || !userBeta ?
              (
                <>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <div className="form-group from-outline mb-2 mt-3">
                      <label htmlFor="username" className='text-secondary' style={{ fontSize: ".9rem" }}>Email</label>
                      <input
                        type="email"
                        style={{ fontSize: ".9rem" }}
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
                        style={{ fontSize: ".9rem" }}
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
                        <span>{isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ fontSize: 13 }}></span> : <><span style={{ fontSize: 14.5 }}>Login lezhin account</span></>}</span>
                      </button>
                    </div>
                  </form>
                </>
              )
              :
              (
                <>
                  <div className='ms-4 mt-5' style={{ fontSize: 13 }}>
                    <span className="title">- Alpha User:</span> {userAlpha ? userAlpha.data.user.username : (<>not found</>)} - {userAlpha.data ? userAlpha.data.user.userId : (<>not found</>)}
                    <br /> <span className="title">- Beta User:</span> {userBeta.data ? userBeta.data.user.username : (<>not found</>)} - {userBeta.data ? userBeta.data.user.userId : <>not found</>}
                    <br />
                    <button
                      className="btn btn-primary btn-block mb ms-3 mt-2"
                      style={{ padding: "5px 30px" }}
                      onClick={handleReload}
                    >
                      <span style={{ fontSize: 13 }}>Try other user</span>
                    </button>
                  </div>
                </>
              )}
          </div>
          <div className='col-7 text-center text-danger h1 pt-5 mt-5' style={{ backgroundImage: `url(https://image.slidesdocs.com/responsive-images/background/white-clean-abstract-portfolio-simple-powerpoint-background_a97a4601d6__960_540.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "auto" }}> <span>Lezhin API Comparator</span> </div>
        </div>

        <hr />

      </div>
      <div className='container-fluid'>
        <div className='row'>
          {/* sticky */}

          <div className='col-2 d-none d-lg-block'>
            <div className='sticky-addition ms-4'>
              <div className='mb-2 fw-bold text-success'> GET Condition</div>

              {/* socialType */}
              Social Type &#160;
              <select className="form-select-sm" style={{ fontSize: '0.9rem' }} aria-label="Default select example"
                id='socialType' value={socialType} onChange={handleSelectSocialType}
              >
                <option value="facebook">facebook</option>
                <option value="naver">naver</option>
                <option value="twitter">twitter</option>
                <option value="google">google</option>
                <option value="apple">apple</option>
                <option value="yahoojapan">yahoojapan</option>
                <option value="line">line</option>
                <option value="kakao">kakao</option>
              </select>

              <br></br>

              {/* socialType */}

              <div className='mb-2 mt-2 fw-bold text-primary'> PUT Condition</div>

              {/* socialType */}

              Auto fill PUT&#160;
              <select className="form-select-sm" style={{ fontSize: '0.9rem' }} aria-label="Default select example"
                id='socialType' value={isAutoPut} onChange={handleSelectAutoPut}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>

              <br></br>

              {/* socialType */}


            </div>
          </div>

          <div className='col-8'>

            {/* API post user signin */}
            <div className='pt-2'> {'>'} <span className='text-warning'> &#160;<strong>POST</strong></span> users/signin </div>

            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userBeta, null, 2)) : (<>  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userBeta} newData={userAlpha} />

            {/* API get user me */}
            <hr id='wrapper_get_1' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'} </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeBeta} newData={userMeAlpha} />

            {/* API get user me meta */}
            <hr id='wrapper_get_2' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/meta </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeMetaBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeMetaAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeMetaBeta} newData={userMeMetaAlpha} />

            {/* API get user me cohort */}
            <hr id='wrapper_get_3' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/cohort </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeCohortBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeCohortAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeCohortBeta} newData={userMeCohortAlpha} />

            {/* API get user me devices */}
            <hr id='wrapper_get_4' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/devices </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeDevicesBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeDevicesAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeDevicesBeta} newData={userMeDevicesAlpha} />

            {/* API get user me certifications */}
            <hr id='wrapper_get_5' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeCertificationsBeta} newData={userMeCertificationsAlpha} />

            {/* API get user me identity */}
            <hr id='wrapper_get_6' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/identity </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userIdentityBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userIdentityAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userIdentityBeta} newData={userIdentityAlpha} />

            {/* API get user me connections social */}
            <hr id='wrapper_get_7' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/connections/<span className='text-danger'>{socialType}</span> </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeConnectionsSocialBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeConnectionsSocialAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeConnectionsSocialBeta} newData={userMeConnectionsSocialAlpha} />

            {/* API get user me genres */}
            <hr id='wrapper_get_8' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/genres </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeGenresBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeGenresAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeGenresBeta} newData={userMeGenresAlpha} />

            {/* API get user me balance */}
            <hr id='wrapper_get_9' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/balance </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeBalanceBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeBalanceAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeBalanceBeta} newData={userMeBalanceAlpha} />

            {/* API get user me ga */}
            <hr id='wrapper_get_10' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/ga </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeGaBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeGaAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeGaBeta} newData={userMeGaAlpha} />

            {/* API get user me badge-counts */}
            <hr id='wrapper_get_11' />

            <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/badge-counts </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeBadgeCountBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeBadgeCountAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeBadgeCountBeta} newData={userMeBadgeCountAlpha} />

            {/* ====================================PUT==================================== */}
            {/* API put user me */}
            <hr id='wrapper_put_1' />

            <div>
              {'>'} <span className='text-primary'> &#160;<strong>PUT</strong></span> v2/users/{'{me}'}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+</button>

              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                          <input type="text" className="form-control" id="recipient-name"/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="message-text" className="col-form-label">Message:</label>
                          <textarea className="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Send message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(putUserMeBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(putUserMeAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={putUserMeBeta} newData={putUserMeAlpha} />

            {/* ====================================POST==================================== */}
            {/* API get user me devices */}
            <hr id='wrapper_post' />

            <div> {'>'} <span className='text-warning'> &#160;<strong>POST</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <JsonCompare oldData={userMeCertificationsBeta} newData={userMeCertificationsAlpha} />

            {/* ====================================DEL==================================== */}
            {/* API get user me devices */}
            <hr id='wrapper_del' />

            <div> {'>'} <span className='text-danger'> &#160;<strong>DEL</strong></span> v2/users/{'{me}'}/certifications </div>
            <div className="origin-data pt-2">
              <div className="old-data">
                <p className="title">- Beta data:</p>
                <pre>{!isLoadingBeta ? (JSON.stringify(userMeCertificationsBeta, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
              <div className="new-data">
                <p className="title">- Alpha data:</p>
                <pre>{!isLoadingAlpha ? (JSON.stringify(userMeCertificationsAlpha, null, 2)) : (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  <span className='ps-2'>Calling API</span></>)}</pre>
              </div>
            </div>

            <p className="title">👌The merged different:</p>
            <span className='h5'><JsonCompare oldData={userMeCertificationsBeta} newData={userMeCertificationsAlpha} /></span>

          </div>


          <div className='col-2 d-none d-lg-block'>
            <div className='sticky'>
              <div className='btn-group-vertical wrapper_sidebar bg-muted'>
                <button type="button" className="btn btn-light btn-md text-info" onClick={clickView} style={{ fontSize: '1.2rem' }} data-bs-toggle="tooltip" title="Up"><i className="fas fa-arrow-up"></i></button>
                <a href={`#wrapper_get_${get}`}><button onClick={() => handleDefault(1)} type="button" className="shake-btn btn btn-light btn-md text-success" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Popular">&#160;&#160;GET&#160;&#160;&#160;</button></a>
                <a href={`#wrapper_get_${get}`}><button onClick={() => handlePlus(1)} type="button" className="shake-btn btn btn-light btn-md text-success" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Popular">&#160;&#160;GET+&#160;</button></a>
                <a href={`#wrapper_get_${get}`}><button onClick={() => handleMinus(1)} type="button" className="shake-btn btn btn-light btn-md text-success" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Popular">&#160;&#160;GET-&#160;&#160;</button></a>
                <a href={`#wrapper_post_${post}`}><button onClick={() => handleDefault(3)} type="button" className="shake-btn btn btn-light btn-md text-warning" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Office">&#160;POST&#160;&#160;</button></a>
                <a href={`#wrapper_post_${post}`}><button onClick={() => handlePlus(3)} type="button" className="shake-btn btn btn-light btn-md text-warning" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Office">&#160;POST+</button></a>
                <a href={`#wrapper_post_${post}`}><button onClick={() => handleMinus(3)} type="button" className="shake-btn btn btn-light btn-md text-warning" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Office">&#160;POST-</button></a>
                <a href={`#wrapper_put_${put}`}><button onClick={() => handleDefault(2)} type="button" className="shake-btn btn btn-light btn-md text-primary" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Hot news">&#160;&#160;PUT&#160;&#160;&#160;</button></a>
                <a href={`#wrapper_put_${put}`}><button onClick={() => handlePlus(2)} type="button" className="shake-btn btn btn-light btn-md text-primary" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Hot news">&#160;&#160;PUT+&#160;</button></a>
                <a href={`#wrapper_put_${put}`}><button onClick={() => handleMinus(2)} type="button" className="shake-btn btn btn-light btn-md text-primary" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Hot news">&#160;&#160;PUT-&#160;&#160;</button></a>
                <a href='#wrapper_del'><button type="button" className="shake-btn btn btn-light btn-md text-danger" style={{ fontSize: '.9rem' }} data-bs-toggle="tooltip" title="Hot news">&#160;&#160;&#160;DEL&#160;&#160;&#160;</button></a>
                <button type="button" className="btn btn-light btn-md text-info" onClick={clickDown} style={{ fontSize: '1.2rem' }} data-bs-toggle="tooltip" title="Down"><i className="fas fa-arrow-down"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
render(<App />, document.getElementById('root'));