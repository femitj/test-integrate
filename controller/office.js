import db from '../models/politicaloffice';

class OfficeController {
 


    db.push(office);
    // political office created
    return res.status(201).json({
      status: 201,
      message: 'Political office created',
      data: [{
        id: office.id,
        type: office.type,
        name: office.name,
      }],
    });
  }
}

export default OfficeController;