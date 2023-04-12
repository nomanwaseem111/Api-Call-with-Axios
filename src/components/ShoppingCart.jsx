import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactStars from "react-stars";
import { Stack } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ShoppingCart = ({ data }) => {
  return (
    <>
    
            <Stack direction="row" display="flex" justifyContent="space-around" alignItems="center"  flexWrap="wrap" mt="40px" >
           {
             data.map((item,index) => {
                return(
                    <Card sx={{ width: "350px",height:"auto",boxShadow:"8px 8px 6px grey", mt:'40px' }}>
            <CardContent>
              <img
                src={item.image}
                alt="images"
                style={{ width: "320px", height: "350px" }}
              />
              <Typography
                sx={{ fontSize: 26,textTransform:'capitalize' }}
                color="text.secondary"
                gutterBottom
              >
                {item.category}
              </Typography>
          
              {/* <Typography sx={{ mb: 1.5,textAlign:'justify' }} color="text.secondary">
                {item.description}
              </Typography> */}
              <Typography variant="body2" sx={{fontSize:'20px'}}>Rs: {item.price}</Typography>
              <Typography variant="body2">
                <ReactStars value={item.rating.rate} edit={false} size={30} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{background:"black",fontSize:"12px",color:'#fff',padding:'10px',"&:hover": {
      backgroundColor: 'black',color:'#fff'
    }}} >Add to Cart</Button>
            </CardActions>
          </Card>
                )
             })
           }

        
          </Stack>
  
    </>
  );
};

export default ShoppingCart;
