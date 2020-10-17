const app = require('./app');
const request = require("supertest");

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

describe("Test the root path", () => {
  for(i = 0; i < 10; i++) {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .expect(200);
    });
  }
});