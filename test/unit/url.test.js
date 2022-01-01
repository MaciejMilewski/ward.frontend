import {url} from '../../src/url.js'

test('should return empty URL', () => {
  // when
  const output = url("");
  // then
  expect(output).toBe('');
});

test('should return URL /', () => {
  // when
  const output = url("/");
  // then
  expect(output).toBe('/');
});

test('should return /user', () => {
  // when
  const output = url("/user");
  // then
  expect(output).toBe('/user');
});

test('should return /user/:id', () => {
  // when
  const output = url("/user/:id", {id: 2});
  // then
  expect(output).toBe('/user/2');
});

test('should return /user/:id', () => {
  // when
  const output = url("/user/:id", {id: 5});
  // then
  expect(output).toBe('/user/5');
});

test('should return /user/:id, "Welcome home"', () => {
  // when
  const output = url("/user/:id", {id: "Welcome home"});
  // then
  expect(output).toBe('/user/Welcome%20home');
});

test('should return /user/:id, "Welcome=home"', () => {
  // when
  const output = url("/user/:id", {id: "Welcome=home"});
  // then
  expect(output).toBe('/user/Welcome%3Dhome');
});

test('should return /user/:id, "Welcome/home"', () => {
  // when
  const output = url("/user/:id", {id: "Welcome/home"});
  // then
  expect(output).toBe('/user/Welcome%2Fhome');
});

test('should return /user, {}', () => {
  // when
  const output = url("/user", {});
  // then
  expect(output).toBe('/user');
});

test('should return /user, {id}', () => {
  // when
  const output = url("/user", {id: 3});
  // then
  expect(output).toBe('/user');
});

test('should return /user/:age, {id,age}', () => {
  // when
  const output = url("/user/:age", {id: 3, age: 18});
  // then
  expect(output).toBe('/user/18');
});

test('should return /user/:age, {age,id}', () => {
  // when
  const output = url("/user/:age", {age: 18, id: 3});
  // then
  expect(output).toBe('/user/18');
});

test('should return /user/:age/:id, {age,id}', () => {
  // when
  const output = url("/user/:age/:id", {age: 18, id: 3});
  // then
  expect(output).toBe('/user/18/3');
});

test('should return /user/:age, {age}', () => {
  // when
  const output = url("/user/:age", {age: 18});
  // then
  expect(output).toBe('/user/18');
});

test('should return /user/:age/:age, {age}', () => {
  // when
  const output = url("/user/:age/:age", {age: 18});
  // then
  expect(output).toBe('/user/18/18');
});

test('should return /user/:id/:id, {id}', () => {
  // when
  const output = url("/user/:id/:id", {id: 1});
  // then
  expect(output).toBe('/user/1/1');
});

test('should return /user/:name, {name}', () => {
  // when
  const output = url("/user/:name", {name: "John Doe"});
  // then
  expect(output).toBe('/user/John%20Doe');
});

test('should return /user/:age, {id}', () => {
  // when
  const t = () => {
    url("/user/:age", {id: 1})
  };
  // then
  expect(t).toThrow("Missing parameter :age");
});

test('should return /user/:id, {age}', () => {
  // when
  const t = () => {
    url("/user/:id", {age: 1})
  };
  // then
  expect(t).toThrow("Missing parameter :id");
});

test('should return /user/:firstName, {firstName}', () => {
  // wheN
  const output = url("/user/:firstName", {firstName: "John Doe"});
  // then
  expect(output).toBe('/user/John%20Doe');
});

test('should return /user/:firstName][][, {firstName}', () => {
  // wheN
  const output = url("/user/:firstName][][", {firstName: "John Doe"});
  // then
  expect(output).toBe('/user/John%20Doe][][');
});

