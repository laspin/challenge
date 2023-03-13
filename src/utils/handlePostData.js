import axios from 'axios';

/**
 * @fn handlePostData
 * @param data <Object>
 * @param url <String>
 * @returns {Promise<Response>}
 */

export const handlePostData = async (data = {}, url = '') => {
  const payload = {
    method: 'POST',
    url,
    data,
  };

  return axios(payload);
};
