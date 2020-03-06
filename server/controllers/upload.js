/**
 * @class UserController
 *
 * @description Specifies which method handles a given request for a specific endpoint
 *
 * @exports UserController
 */

class FileController {
  /**
   * creates new user
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof UserController
   */
  static async upload(req, res) {
    try {
      if (!req.files) {
        res.send({
          status: false,
          message: 'No file uploaded'
        });
      } else {
        // Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
        const { files } = req.files;

        // Use the mv() method to place the file in upload directory (i.e. "uploads")
        files.mv(`./public/uploads/${files.name}`);

        // send response
        res.send({
          status: true,
          message: 'File uploaded successful',
          data: {
            name: files.name,
            mimetype: files.mimetype,
            size: files.size,
            path: `https://resoutcefulestatemanagement.herokuapp.com/ftp/uploads/${files.name}`
          }
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
}
export default FileController;
