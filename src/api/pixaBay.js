import axios from 'axios';
const BASE_URL = 'http://pixabay.com/api';
const KEY = '29531831-dbf8f491323bf6a8b4e4c4edd';
const PER_PAGE = 12;
export async function fetchImages({ query, page }) {
  try {
    const response = await axios.get('', {
      baseURL: BASE_URL,
      params: {
        q: query,
        key: KEY,
        page: page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: PER_PAGE,
      },
    });
    const canLoadMore = page * PER_PAGE < response.data.totalHits;
    return {
      canLoadMore,
      images: response.data.hits,
    };
  } catch ({ message }) {
    throw Error(message);
  }
}
