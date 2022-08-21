import useAspidaSWR from '@aspida/swr';
import aspida from '@aspida/fetch';
import { client } from '../../../libs/client';

export const useLikeCount = (id: string) => {
  const { data, error } = useAspidaSWR(client.blogs._id(id), { query: { fields: 'like_count' } });

  // aspidaでクエリが変わるとレスポンスが変わる時の定義方法がわからず...
  return data as unknown as { like_count: number } | undefined ;
};
