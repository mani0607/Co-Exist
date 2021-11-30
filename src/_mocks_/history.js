import faker from 'faker';

// ----------------------------------------------------------------------

const payments = ["05-Aug-2021", "03-July-2021", "05-June-2021", "04-May-2021", "01-Apr-2021",
                  "03-Mar-2021"].map((_, index) => ({
  id: faker.datatype.uuid(),
  date: _,
  amount: '5100.00 Rs',
  description: 'Maintenance',
  method: 'UPI'
}));

export default payments;
