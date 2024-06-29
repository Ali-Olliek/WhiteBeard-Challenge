import unAuthenticatedApi from '../config/api';

export default interface IBaseSearch {
  linkedItemId: string;
  criteria: string;
  skip: number;
  take: number;
}

const index = async <T>(
  uri: string,
  params?: any,
  useAuthenticatedApi: boolean = true
): Promise<T> => {
  try {
    const api = unAuthenticatedApi; // Add authenticated api here

    const result = await api.get(uri, { data: params });

    return result.data;
  } catch (error) {
    throw error;
  }
};

const create = async <T>(
  uri: string,
  data: T,
  useAuthenticatedApi: boolean = true
): Promise<T> => {
  try {
    const api = unAuthenticatedApi;

    const result = await api.post(uri, data);

    return result.data;
  } catch (error) {
    throw error;
  }
};

const update = async <T>(
  uri: string,
  data: Partial<T>,
  useAuthenticatedApi: boolean = true
) => {
  try {
    const api = unAuthenticatedApi;

    const result = await api.put(uri, data);

    return result.data;
  } catch (error) {
    throw error;
  }
};

const get = async <T>(
  uri: string,
  id: string,
  useAuthenticatedApi: boolean = true
) => {
  try {
    const api = unAuthenticatedApi;

    const result = await api.get(`${uri}/${id}`);

    return result.data;
  } catch (error) {
    throw error;
  }
};

const remove = async <T>(
  uri: string,
  id: string,
  useAuthenticatedApi: boolean = true
) => {
  try {
    const api = unAuthenticatedApi;

    const result = await api.delete(`${uri}/${id}`);

    return result.data;
  } catch (error) {
    throw error;
  }
};

export { index, get, create, update, remove };
