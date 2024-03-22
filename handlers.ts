import { http, HttpResponse, passthrough } from "msw";
export const handlers = [
  http.post("*/symbolicate", () => passthrough()),
  http.get("https://jsonplaceholder.typicode.com/users/1", () => {
    return HttpResponse.json({
      id: 1,
      name: "MOCKED MSW",
      username: "MOCKED",
      email: "mock@mock.biz",
      address: {
        street: "Mock Ave",
        suite: "Apt. M",
        city: "Mockington",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-555-5555-5555",
      website: "mock.org",
      company: {
        name: "Mock-Corp",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
  }),
];
