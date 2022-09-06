import getOlderUser from './index';

test('function', () => {
  const user1 = {
    name: 'sem',
    age: 3,
  };

  const user2 = {
    name: 'inna',
    age: 5,
  };

  const user3 = {
    name: 'mika',
    age: 5,
  };

  expect(getOlderUser(user1, user2)).toEqual(user1);
  expect(getOlderUser(user2, user1)).toEqual(user2);

  expect(getOlderUser(user2, user3)).toBeNull();
});
