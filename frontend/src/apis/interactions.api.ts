import unAuthenticatedApi from '../config/api';

const API = unAuthenticatedApi;

const like = async (articledId: number) => {
  try {
    const result = await API.post(`articles/${articledId}/like`);

    return result.data.data;
  } catch (error) {
    throw error;
  }
};

const view = async (articleId: number) => {
  try {
    const result = await API.post(`articles/${articleId}/view`);

    return result.data;
  } catch (error) {
    throw error;
  }
};

export { like, view };
