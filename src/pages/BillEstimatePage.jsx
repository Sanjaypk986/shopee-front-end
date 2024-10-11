import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const BillEstimatePage = () => {
  return (
    <div className="min-h-screen">
      <p className="text-center text-3xl font-semibold mb-5 py-5">STATIONERY - BILL ESTIMATE</p>
      <div>
        <Container>
          <TableContainer sx={{background : '#D9D9D9'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{backgroundColor : '#180955'}}>
                  <TableCell sx={{color:'white',borderRight : '2px solid white',fontWeight : "bold",textTransform : "uppercase"}} >Product Name</TableCell>
                  <TableCell sx={{color:'white',borderRight : '2px solid white',fontWeight : "bold",textTransform : "uppercase"}} align="right">Price</TableCell>
                  <TableCell sx={{color:'white',borderRight : '2px solid white',fontWeight : "bold",textTransform : "uppercase"}} align="right">Quantity</TableCell>
                  <TableCell sx={{color:'white',fontWeight : "bold", textTransform : "uppercase"}} align="right">₹Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell sx={{borderRight : '2px solid white'}} component="th" scope="row">{row.name}</TableCell>
                    <TableCell sx={{borderRight : '2px solid white'}} align="right">{row.calories}</TableCell>
                    <TableCell sx={{borderRight : '2px solid white'}} align="right">{row.fat}</TableCell>
                    <TableCell  align="right">{row.carbs}</TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{background : "#180955"}}>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell align='right' sx={{color : "white", fontWeight : "bold", textTransform:"uppercase"}}>Sub total :  </TableCell>
                  <TableCell align='right' sx={{color : "white", fontWeight : "bold", textTransform:"uppercase"}}> ₹25698</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className='flex justify-end mt-3'>
            <button className='bg-[#180955] text-white py-2 px-8 border-2 border-transparent hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all'>PAY NOW</button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default BillEstimatePage