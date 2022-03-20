import { MicroCMSObjectContent, MicroCMSQueries  } from 'microcms-js-sdk';
import { Blog } from '../../types';

export type Methods = {
  get: {
    query?: Pick<MicroCMSQueries, 'draftKey' | 'fields' | 'depth'>,
    resBody: Blog & MicroCMSObjectContent
  }
}
