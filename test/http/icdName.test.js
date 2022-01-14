import {icdName} from "../../src/http.js";

test('should do something', async () => {
  // given
  const code = "99.97901";
  // when
  const name = await icdName(code);
  // then
  expect(name).toBe('Farmakoterapia doszpikowa');
});
