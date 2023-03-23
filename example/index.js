import React, { useState } from 'react';
import { render } from 'react-dom';
import JsonCompare from '../lib/index.js';
import compareService from './services/compareService.js';
import './style.css';

function App() {
  const [stateLogin, setStateLogin] = useState({ username: "", password: "" });
  const [alphaLogin, setAlphaLogin] = useState({});
  const [betaLogin, setBetaLogin] = useState({});
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

  const handleLogin = (e) => {
    e.preventDefault();
    setStateLogin({
      ...stateLogin
    })
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

      //

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

      //

    }).catch((err) => {
      if (err.response) {
        setBetaLogin(err.response.data)
      }
    });

  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3 ms-4 mt-2'>
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="form-group from-outline mb-2 mt-3">
                <label htmlFor="username">Username :</label>
                <input
                  type="email"
                  className="form-control"
                  name="username"
                  value={stateLogin.username}
                  onChange={(e) => setStateLogin({
                    ...stateLogin,
                    username: e.target.value,
                  })}
                />
              </div>

              <div className="form-group from-outline mb-2">
                <label htmlFor="password">Password :</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={stateLogin.password}
                  onChange={(e) => setStateLogin({
                    ...stateLogin,
                    password: e.target.value,
                  })}
                />
              </div>

              <div className="form-group pt-3 ">
                <button
                  className="btn btn-primary btn-block mb"
                  style={{ padding: "5px 30px" }}
                >
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
          <div className='col-8 text-center text-danger h1 pt-5 mt-5'> Lezhin API Comparator </div>
        </div>

        <hr></hr>

        {/* API post user signin */}
        <div className='pt-2'> {'>'} <span className='text-warning'> &#160;<strong>POST</strong></span> users/signin </div>

        <div className="origin-data pt-2">
          <div className="old-data">
            <p className="title">- Beta data:</p>
            <pre>{JSON.stringify(betaLogin, null, 2)}</pre>
          </div>
          <div className="new-data">
            <p className="title">- Alpha data:</p>
            <pre>{JSON.stringify(alphaLogin, null, 2)}</pre>
          </div>
        </div>

        <p className="title">👌The merged different:</p>
        <JsonCompare oldData={betaLogin} newData={alphaLogin} />

        {/* API get user me */}

        <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'} </div>
        <div className="origin-data pt-2">
          <div className="old-data">
            <p className="title">- Beta data:</p>
            <pre>{JSON.stringify(getUserMeBeta, null, 2)}</pre>
          </div>
          <div className="new-data">
            <p className="title">- Alpha data:</p>
            <pre>{JSON.stringify(getUserMeAlpha, null, 2)}</pre>
          </div>
        </div>

        <p className="title">👌The merged different:</p>
        <JsonCompare oldData={getUserMeBeta} newData={getUserMeAlpha} />

        {/* API get user me meta */}

        <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/meta </div>
        <div className="origin-data pt-2">
          <div className="old-data">
            <p className="title">- Beta data:</p>
            <pre>{JSON.stringify(getUserMeMetaBeta, null, 2)}</pre>
          </div>
          <div className="new-data">
            <p className="title">- Alpha data:</p>
            <pre>{JSON.stringify(getUserMeMetaAlpha, null, 2)}</pre>
          </div>
        </div>

        <p className="title">👌The merged different:</p>
        <JsonCompare oldData={getUserMeMetaBeta} newData={getUserMeMetaAlpha} />

        {/* API get user me cohort */}

        <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/cohort </div>
        <div className="origin-data pt-2">
          <div className="old-data">
            <p className="title">- Beta data:</p>
            <pre>{JSON.stringify(getUserMeCohortBeta, null, 2)}</pre>
          </div>
          <div className="new-data">
            <p className="title">- Alpha data:</p>
            <pre>{JSON.stringify(getUserMeCohortAlpha, null, 2)}</pre>
          </div>
        </div>

        <p className="title">👌The merged different:</p>
        <JsonCompare oldData={getUserMeCohortBeta} newData={getUserMeCohortAlpha} />

        {/* API get user me devices */}

        <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/devices </div>
        <div className="origin-data pt-2">
          <div className="old-data">
            <p className="title">- Beta data:</p>
            <pre>{JSON.stringify(getUserMeDevicesBeta, null, 2)}</pre>
          </div>
          <div className="new-data">
            <p className="title">- Alpha data:</p>
            <pre>{JSON.stringify(getUserMeDevicesAlpha, null, 2)}</pre>
          </div>
        </div>

        <p className="title">👌The merged different:</p>
        <JsonCompare oldData={getUserMeDevicesBeta} newData={getUserMeDevicesAlpha} />

        {/* API get user me devices */}

        <div> {'>'} <span className='text-success'> &#160;<strong>GET</strong></span> v2/users/{'{me}'}/certifications </div>
        <div className="origin-data pt-2">
          <div className="old-data">
            <p className="title">- Beta data:</p>
            <pre>{JSON.stringify(getUserMeCertificationsBeta, null, 2)}</pre>
          </div>
          <div className="new-data">
            <p className="title">- Alpha data:</p>
            <pre>{JSON.stringify(getUserMeCertificationsAlpha, null, 2)}</pre>
          </div>
        </div>

        <p className="title">👌The merged different:</p>
        <JsonCompare oldData={getUserMeCertificationsBeta} newData={getUserMeCertificationsAlpha} />


      </div>
    </div>
  );
}
render(<App />, document.getElementById('root'));