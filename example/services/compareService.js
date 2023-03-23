import axios from "axios";

const API_BASE_URL_ALPHA = "https://alpha-www.lezhinus.com/lz-api";
const API_BASE_URL_BETA = "https://beta-www.lezhinus.com/lz-api";
const token = '98d3bbb4-7068-4455-a810-851949cea473';

class compareService {
  // {{base_url}}/users/signin
  postLoginAlpha(username, password) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
    return axios.get(API_BASE_URL_ALPHA + "/v2/users/" + userId, { headers })
  }

  getUserMeBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + "/v2/users/" + userId, { headers })
  }

  // {{base_url}}/v2/users/{{me}/meta}
  getUserMeMetaAlpha(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_ALPHA + "/v2/users/" + userId + "/meta", { headers })
  }

  getUserMeMetaBeta(access_token, userId) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    return axios.get(API_BASE_URL_BETA + "/v2/users/" + userId + "/meta", { headers })
  }
}

export default new compareService();