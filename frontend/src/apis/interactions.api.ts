import unAuthenticatedApi from '../config/api';

const like = async (articledId: number) => {
  try {
    const api = unAuthenticatedApi;
    const result = await api.post(`articles/${articledId}/like`);

    return result.data.data;
  } catch (error) {
    throw error;
  }
};

const view = async (articleId: number) => {
  try {
    const api = unAuthenticatedApi;

    const result = await api.post(`articles/${articleId}/view`);

    return result.data;
  } catch (error) {
    throw error;
  }
};

export { like, view };
