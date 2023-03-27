import axios from "axios";

const API_BASE_URL_ALPHA = process.env.API_BASE_URL_ALPHA;
const API_BASE_URL_BETA = process.env.API_BASE_URL_BETA;
const token = process.env.TOKEN;

class compareService {
  // add API service
  addNewAPI(header, endpoint, data, type) {
    const headers = header;

    if (type == 'get') {
      return axios.get(API_BASE_URL_ALPHA + endpoint, { data }, { headers });
    } else if (type == 'post') {
      return axios.post(API_BASE_URL_ALPHA + endpoint, { data }, { headers });
    } else if (type == 'put') {
      return axios.post(API_BASE_URL_ALPHA + endpoint, { data }, { headers });
    } else if (type == 'del') {
      return axios.post(API_BASE_URL_ALPHA + endpoint, { data }, { headers });
    }
  }

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

  // {{base_url}}/v2/users/{{me}/genres}
  getUserMeGenresAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/genres`, { headers })
  }

  getUserMeGenresBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/genres`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/balance}
  getUserMeBalanceAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/balance`, { headers })
  }

  getUserMeBalanceBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/balance`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/ga}
  getUserMeGAAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/ga`, { headers })
  }

  getUserMeGABeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/ga`, { headers })
  }

  // {{base_url}}/v2/users/{{me}/badge_counts}
  getUserMeBadgeCountAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + `/v2/users/${userId}/badge_counts`, { headers })
  }

  getUserMeBadgeCountBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + `/v2/users/${userId}/badge_counts`, { headers })
  }

  // ====================================================== PUT =======================================================================================
  // ====================================================== PUT =======================================================================================

  putUserMeAlpha(access_token, userId, putData) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    console.log(putData);
    return axios.put(API_BASE_URL_ALPHA + `/users/${userId}`, putData, { headers })
  }

  putUserMeBeta(access_token, userId, putData) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.put(API_BASE_URL_BETA + `/users/${userId}`, putData, { headers })
  }

}

export default new compareService();