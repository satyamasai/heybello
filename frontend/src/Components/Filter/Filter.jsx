import React from 'react'
import "./Filter.css"
import { Box, Select } from '@chakra-ui/react'
const Filter = ({handleFilter}) => {
  return (
    <Box bg='pink' className='filter' w={'100%'} h={'60px'} border={'1px solid goldenrod'}>
    
    <Box mt={'10px'} border={'0px solid goldenrod'} w={'140px'} alignItems={'center'}>
     <Select onChange={(e)=>handleFilter(e.target.value)}>
     <option >Sort by price</option>
     <option value='asc'>Low to high</option>
     <option value='desc'>High to low</option>
     </Select>
    </Box>
    
    
    </Box>
  )
}

export default Filter