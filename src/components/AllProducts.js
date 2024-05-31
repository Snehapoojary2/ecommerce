import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";

function AllProducts() {
  // const category=useParams()
  // console.log(category.categoryName)
  const [products,setProducts]=useState([])
  const [search,setSearch]=useState("");
  useEffect(()=>
  {
    axios.get("https://dummyjson.com/products/")
    .then((res)=>{
      console.log(res.data.products,1111)
     setProducts(res.data.products)
    })
    .catch((err)=>{
      console.log(err,2222)
    }
    )

  },[])
  const handleChange=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  console.log(search.toLowerCase(),99999)
  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField onChange={handleChange} label={"Search products here"} />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {products
        .filter((value)=>value.title.toLowerCase().includes(search))
        .map((item)=>{
          console.log(item)
          // if(item==null||item=""){
          //   return(
          //     <h1>Hello</h1>
          //   )
          // }
          // else{
            
          // }
return(
<Card sx={{ width: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            width="200"
            image={item.images[0]}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="h5">{item.price}</Typography>

            <Typography
              variant="h5"
              style={{ textAlign: "end", width: "100%" }}
            >
              {item.brand}
            </Typography>
          </CardActions>
        </Card>
)
},[])}
        
      </Grid>
    </div>
  );
}

export default AllProducts;
