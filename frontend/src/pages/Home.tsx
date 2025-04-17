import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Heading, Text, ChakraProvider} from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
 
// Custom theme
const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#4B66A2',
      600: '#20749B',
      700: '#B074CA',
      800: '#63397D',
      900: '#1B70A9',
      textDark: '#502C32',
    },
  },
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
      },
    },
  },
});
 
// Motion components
const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);
 
const Home = () => {
  const navigate = useNavigate();
 
  return (
    <ChakraProvider theme={theme}>
      <Box
        minH="100vh"
        w="100vw"
        backgroundImage="url('/assets/images/background_image.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          h: '100%',
          bg: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'brightness(1.2) saturate(1.3)',
          zIndex: 1,
        }}
      >
        <MotionBox
          zIndex={2}
          textAlign="center"
          color="white"
          p={[8, 10]}
          borderRadius="xl"
          bg="rgba(255, 255, 255, 0.15)"
          backdropFilter="blur(25px)"
          boxShadow="0px 8px 20px rgba(0, 0, 0, 0.2)"
          maxW={['90%', '80%']}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
        >
          <MotionHeading
            fontSize={['2.8rem', '4rem']}
            fontWeight="bold"
            mb={4}
            textTransform="uppercase"
            letterSpacing="2px"
            bgGradient="linear(to-r, brand.500, brand.600)"
            bgClip="text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Samvaad
          </MotionHeading>
 
          <Text
            fontSize={['1.2rem', '1.5rem']}
            fontWeight="light"
            mb={8}
            maxW={['90%', '600px']}
            mx="auto"
            lineHeight="1.6"
            color="brand.textDark"
          >
            Connect with 🙌🏻 kindred souls, cherish unforgettable moments ✨, and weave your story in a world where
            conversations feel like home. 🏡💖
          </Text>
 
          <MotionButton
            size="lg"
            px={10}
            py={6}
            fontSize="1.2rem"
            fontWeight="semibold"
            textTransform="uppercase"
            borderRadius="full"
            bgGradient="linear(to-r, brand.600, brand.700)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, brand.800, brand.900)',
              transform: 'translateY(-5px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
            }}
            boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </MotionButton>
        </MotionBox>
      </Box>
    </ChakraProvider>
  );
};
 
export default Home;