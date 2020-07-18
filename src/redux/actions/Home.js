export const HOME_DATA_REQUEST = 'HOME_DATA_REQUEST';

  export function getHomeData(data) {
    return {
      type: HOME_DATA_REQUEST,
      data
    };
  }
