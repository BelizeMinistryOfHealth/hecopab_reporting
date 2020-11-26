class HttpApi {
  accessToken: string;
  baseUrl: string;
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
    return fetch(`${this.baseUrl}/api${path}`, {
      ...this.configObj,
      method: 'GET',
    }).then((r) => r.json());
  }

  async post(path: string, body: string) {
    return fetch(`${this.baseUrl}/api${path}`, {
      ...this.configObj,
      method: 'POST',
      body,
    });
  }

  async put(path: string, body: string) {
    return fetch(`${this.baseUrl}/api${path}`, {
      ...this.configObj,
      method: 'PUT',
      body,
    });
  }

  isValid() {
    return (
      this.accessToken.trim().length > 0 && this.accessToken.trim().length > 0
    );
  }
}

export default HttpApi;
