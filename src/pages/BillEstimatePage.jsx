import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BillEstimatePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubtotal] = useState(0);

  const calculateSubTotal = (cartItems) => {
    if (cartItems) {
      setSubtotal(cartItems.reduce((acc, item) => acc + item.totalPrice, 0));
    }
  };

  const fetchAllCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/cart/all-cart-items');
      if (response.data.success) {
        const fetchedCartItems = response.data.cartItems[0].products;
        setCartItems(fetchedCartItems);
        calculateSubTotal(fetchedCartItems); // Pass the fetched items directly
      }
    } catch (error) {
      console.log("Error calculating subtotal: ", error);
    }
  };

  useEffect(() => {
    fetchAllCartItems();
  }, []);

  return (
    <div className="min-h-screen">
      <p className="text-center text-3xl font-semibold mb-5 py-5">STATIONERY - BILL ESTIMATE</p>
      <div>
        <Container>
          <TableContainer sx={{ background: '#D9D9D9' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#180955' }}>
                  <TableCell
                    sx={{ color: 'white', borderRight: '2px solid white', fontWeight: "bold", textTransform: "uppercase" }}>
                    Product Name
                  </TableCell>
                  <TableCell
                    sx={{ color: 'white', borderRight: '2px solid white', fontWeight: "bold", textTransform: "uppercase" }}
                    align="right">
                    Price
                  </TableCell>
                  <TableCell
                    sx={{ color: 'white', borderRight: '2px solid white', fontWeight: "bold", textTransform: "uppercase" }}
                    align="right">
                    Quantity
                  </TableCell>
                  <TableCell
                    sx={{ color: 'white', fontWeight: "bold", textTransform: "uppercase" }}
                    align="right">
                    ₹Total Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((row) => (
                  <TableRow key={row.productId.name}>
                    <TableCell sx={{ borderRight: '2px solid white' }} component="th" scope="row">
                      {row.productId.name}
                    </TableCell>
                    <TableCell sx={{ borderRight: '2px solid white' }} align="right">
                      {row.productId.price}
                    </TableCell>
                    <TableCell sx={{ borderRight: '2px solid white' }} align="right">
                      {row.quantity}
                    </TableCell>
                    <TableCell align="right">{row.totalPrice}</TableCell>
                  </TableRow>
                ))}
                <TableRow sx={{ background: "#180955" }}>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell align='right' sx={{ color: "white", fontWeight: "bold", textTransform: "uppercase" }}>
                    Sub total:
                  </TableCell>
                  <TableCell align='right' sx={{ color: "white", fontWeight: "bold", textTransform: "uppercase" }}>
                    ₹{subTotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div className='flex justify-end mt-3'>
            <button className='bg-[#180955] text-white py-2 px-8 border-2 border-transparent hover:border-2 hover:border-black hover:bg-white hover:text-black transition-all'>
              PAY NOW
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BillEstimatePage;
