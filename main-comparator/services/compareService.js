import axios from "axios";

const API_BASE_URL_ALPHA = "https://alpha-www.lezhinus.com/lz-api";
const API_BASE_URL_BETA = "https://beta-www.lezhinus.com/lz-api";
const token = '98d3bbb4-7068-4455-a810-851949cea473';

class compareService {
  // {{base_url}}/users/signin
  postLoginAlpha(username, password) {
    const headers = {
      'Content-Type': 'application/json',
    };

    return axios.post(API_BASE_URL_ALPHA + "/users/signin", {
      account: {
        username: username,
        password: password,
      },
    }, { headers });
  }

  postLoginBeta(username, password) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    return axios.post(API_BASE_URL_BETA + "/users/signin", {
      account: {
        username: username,
        password: password,
      },
    }, { headers });
  }

  // {{base_url}}/v2/users/{{me}}
  getUserMeAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}`, { headers })
  }

  getUserMeBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/meta}
  getUserMeMetaAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/meta`, { headers })
  }

  getUserMeMetaBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/meta`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/cohort}
  getUserMeCohortAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/cohort`, { headers })
  }

  getUserMeCohortBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/cohort`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/devices}
  getUserMeDevicesAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/users/${userId}/devices`, { headers })
  }

  getUserMeDevicesBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/users/${userId}/devices`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/devices}
  getUserMeCertificationsAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/certifications`, { headers })
  }

  getUserMeCertificationsBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/certifications`, { headers })
  }

  // {{base_url}}/v2/users/identity/${access_token}}
  getUserIdentityAlpha(access_token) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/identity/${access_token}`, { headers })
  }

  getUserIdentityBeta(access_token) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/identity/${access_token}`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/connections/{social_type}}
  getUserMeConnectionsSocialAlpha(access_token, userId, socialType) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/connections/${socialType}`, { headers })
  }

  getUserMeConnectionsSocialBeta(access_token, userId, socialType) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/connections/${socialType}`, { headers })
  }

}

export default new compareService();