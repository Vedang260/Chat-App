import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Box, Button, Heading, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';

// Enhanced theme with semantic color names
const theme = extendTheme({
  colors: {
    brand: {
      primary: '#4B66A2',       // Main brand blue
      secondary: '#20749B',     // Teal accent
      accent: '#B074CA',        // Purple accent
      darkAccent: '#63397D',    // Dark purple
      deepBlue: '#1B70A9',      // Dark blue
      textDark: '#502C32',      // Text color
      glassBg: 'rgba(255, 255, 255, 0.15)', // Glass effect
      overlay: 'rgba(255, 255, 255, 0.1)'   // Background overlay
    },
  },
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
        fontSmoothing: 'antialiased', // Smoother text
      },
    },
  },
  shadows: {
    glass: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    button: '0 4px 15px rgba(0, 0, 0, 0.2)',
    buttonHover: '0 6px 20px rgba(0, 0, 0, 0.3)'
  }
});

// Motion components with type safety
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
        bgImage="url('/assets/images/background_image.png')"
        bgPosition="center"
        bgSize="cover"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bg: 'brand.overlay',
          backdropFilter: 'brightness(1.2) saturate(1.3)',
          zIndex: 1
        }}
      >
        <MotionBox
          zIndex={2}
          textAlign="center"
          color="white"
          p={{ base: 8, md: 10 }}
          borderRadius="xl"
          bg="brand.glassBg"
          backdropFilter="blur(25px)"
          boxShadow="glass"
          maxW={{ base: '90%', md: '80%' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
        >
          <MotionHeading
            fontSize={{ base: '2.8rem', md: '4rem' }}
            fontWeight="bold"
            mb={4}
            textTransform="uppercase"
            letterSpacing="2px"
            bgGradient="linear(to-r, brand.primary, brand.secondary)"
            bgClip="text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Samvaad
          </MotionHeading>

          <Text
            fontSize={{ base: '1.2rem', md: '1.5rem' }}
            fontWeight="light"
            mb={8}
            maxW={{ base: '90%', md: '600px' }}
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
            bgGradient="linear(to-r, brand.secondary, brand.accent)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, brand.darkAccent, brand.deepBlue)',
              transform: 'translateY(-5px)',
              boxShadow: 'buttonHover'
            }}
            boxShadow="button"
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </MotionButton>
        </MotionBox>
      </Box>
    </ChakraProvider>
  );
};

export default Home;