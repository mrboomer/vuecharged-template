import routes from '../routes';

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
