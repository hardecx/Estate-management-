import pool from './database';

/**
  * @function query
  * @description queries the db with the specified string
  * @param {string} queryString - the query string
  * @returns {*} nothing
  */

const query = async (queryString) => {
  pool.on('connect', () => { console.log('connected to the db'); });
  pool.query(queryString)
    .then((res) => {
      console.log(res);

      pool.end();
    })

    .catch((err) => {
      console.log(err);

      pool.end();
    });


  pool.on('remove', () => {
    console.log('client removed');

    process.exit(0);
  });
};
export default query;
