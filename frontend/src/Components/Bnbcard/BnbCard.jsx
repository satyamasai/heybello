import { Badge, Box, Button, Image, Skeleton, useToast } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

export default function BnbCard({item ,handleViewSingle}) {
    // console.log("bnbitem",handleViewSingle)
    // console.log(item)
    const {api_featured_image ,brand,category,description,price,rating,image_link,name} = item
    const property = {

      imageUrl:api_featured_image ,
      imageAlt: 'Rear view of modern home with pool',
      brand: brand,
      name,
      title: description,
      formattedPrice: '$'+ price,
      reviewCount: rating,
      rating: rating,
    }


    // ----------##handle add to cart----##------------//
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []
    const toast = useToast()
const handleAddToCart=(cartproduct)=>{

 
    cartItems.push(cartproduct)
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
 
     toast({
         title: 'Product added.',
         description: "We've added your product to the cart.",
         status: 'success',
         duration: 2000,
         isClosable: true,
       })
 
 

}

  
    return (
      <Box  className="bnbcard" boxSizing="border-box" h="420px" m="5" p='2' color={"goldenrod"}  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
{item? <Image onClick={()=>handleViewSingle(item)}  h='46%' w='80%' m="auto" src={property.imageUrl} alt={property.imageAlt} />:<Skeleton/>
}  
        <Box p='5'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.brand} &bull; {property.name} 
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {property.title}
          </Box>
  
          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
            
            </Box>
          </Box>
  
          <Box flexDirection={{base:"column" , md:"row"}}  display={{ base:"flex", md: "flex" }} mt='2' alignItems='center' justifyContent={"space-between"}>
            <Box >
            {Array(5)
                .fill('')
                .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
                ))}
                </Box>
            <Box color="goledrod" as='span' ml='2' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            <Button onClick={()=>handleAddToCart(item)} mt="3" size='sm' colorScheme="blue">Add to cart</Button>
          </Box>
          </Box>
        </Box>
      </Box>
    )
  }