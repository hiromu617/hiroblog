import { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk';
import { Tag } from '../types';

export type Methods = {
  get: {
    query?: MicroCMSQueries,
    resBody: MicroCMSListResponse<Tag>
  }
}
