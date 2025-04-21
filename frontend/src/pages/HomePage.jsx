import { Container, SimpleGrid, Text, VStack, useDisclosure,  } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import CreateProductModal from "../components/CreateProductModal";


const HomePage = () => {
	const { fetchProducts, products } = useProductStore();
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	// console.log("products", products);

	return (
		<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={"30"}
					fontWeight={"bold"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
					textAlign={"center"}
				>
					Shopping List
				</Text>

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						Echo… echo… echo… nothing's here😢{" "}
						<br />
						<Link onClick={onOpen}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
							Yep, let’s fill this space with a great product!
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
			<CreateProductModal isOpen={isOpen} onClose={onClose} />
		</Container>

	);
};
export default HomePage;
