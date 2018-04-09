import routes from '../routes';

jest.mock('@/views/Home');
jest.mock('@/views/NotFound');
jest.mock('@/views/Examples');

describe('Routes', () => {
  it('configured correctly', () => {
    expect(routes).toEqual(expect.any(Array));
    routes.forEach((route) => {
      expect(route).toEqual(expect.objectContaining({
        path: expect.any(String),
        name: expect.any(String),
        component: expect.any(Function),
      }));
    });
  });
});
