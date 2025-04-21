import { Button, Container, Flex, HStack, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

import CreateProductModal from "./CreateProductModal";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container maxW={"1220px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}
			>
				<Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Shopping Cartie 🛒</Link>
				</Text>

				<HStack spacing={2} alignItems={"center"}>
					<Button onClick={onOpen}>
						<PlusSquareIcon fontSize={20} />
					</Button>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>
					<Button
						as="a"
						href="https://github.com/Jen-Hua-Chang/ShoppingCartie"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub Repository"
					>
						<FaGithub size={20} />
					</Button>
				</HStack>
			</Flex>

			<CreateProductModal isOpen={isOpen} onClose={onClose} />
		</Container>
	);
};
export default Navbar;
