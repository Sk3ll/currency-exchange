export class HttpClient {
  #httStatusCodes = {
    BAD_REQUEST: 400,
  };

  get(url, body = null) {
    return this.#sendRequest('GET', url, body);
  }

  #sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => {
        if (xhr.status >= this.#httStatusCodes.BAD_REQUEST) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
      xhr.onerror = () => {
        reject(xhr.response);
      };
      xhr.send(JSON.stringify(body));
    });
  }
}
