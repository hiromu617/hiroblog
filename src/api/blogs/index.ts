import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { Blog } from '../types';

export type Methods = {
  get: {
    query?: MicroCMSQueries,
    resBody: MicroCMSListResponse<Blog>
  }
}
