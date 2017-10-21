import { createGetExample } from '../../src/actions/example';

describe('actions', () => {
  describe('example', () => {
    describe('createGetExample', () => {
      it('dispatches another action.', async () => {
        expect.assertions(1);
        const dispatch = jest.fn();

        await createGetExample()(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
    });
  });
});
