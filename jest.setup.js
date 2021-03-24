import { disableNetConnect } from 'nock'

// disables all made network requests in tests
beforeAll(() => disableNetConnect)
