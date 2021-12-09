import axiosClient from './axiosClient';

const exampleAPI = {
  getAll: () => {
    const URL = '/categories';
    return axiosClient.get(URL);
  },
};

export default exampleAPI;
