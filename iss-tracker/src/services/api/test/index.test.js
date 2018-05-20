import { http } from '../index'
import config from '../config'
import nock from 'nock'

describe('http', () => {
  const fixture = 'test'

  beforeEach(() => {
    nock(config.gmaps.url)
      .get('/fixture')
      .query({key: config.gmaps.key})
      .reply(200, fixture);
  });

  test('it should handle http request with gmaps', async () => {
    const result = await http('gmaps', 'get', '/fixture')
    expect(result.data).toBe(fixture)
  })
})
