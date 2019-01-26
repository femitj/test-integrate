import db from '../models/politicaloffice';

class OfficeController {

  static createOffice(req, res) {
    const office = {
      id: db.length + 1,
      type: req.body.type, // String
      name: req.body.name, // // String
      createdOn: new Date().toDateString(),
    };


}

export default OfficeController;