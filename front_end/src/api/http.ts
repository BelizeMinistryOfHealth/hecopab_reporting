class HttpApi {
  accessToken;
  baseUrl;
  configObj: RequestInit;
  constructor(accessToken: string, baseUrl: string) {
    this.accessToken = accessToken;
    this.baseUrl = baseUrl;
    this.configObj = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
    };
  }

  async get(path: string) {
    return fetch(`${this.baseUrl}/${path}`, {
      ...this.configObj,
      method: 'GET',
    });
  }

  async post(path: string, body: string) {
    return fetch(`${this.baseUrl}/${path}`, {
      ...this.configObj,
      method: 'POST',
      body,
    });
  }
}

export default HttpApi;
