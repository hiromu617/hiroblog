import api from "../api/$api";
import aspida from "@aspida/fetch";

const fetchConfig = {
  headers: {
    'X-MICROCMS-API-KEY': process.env.MICRO_CMS_API_KEY as string,
  },
  baseURL: 'https://hiroblog.microcms.io/api/v1',
};

export const client = api(aspida(fetch, fetchConfig));
