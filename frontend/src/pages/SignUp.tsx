import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Box, 
  Button, 
  Heading, 
  Text, 
  Input, 
  InputGroup, 
  InputLeftElement,
  FormControl,
  FormErrorMessage,
  Stack,
  useToast,
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash 
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
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
        primary: '#4B66A2',       // Main brand blue
      secondary: '#20749B',     // Teal accent
      accent: '#B074CA',        // Purple accent
      darkAccent: '#63397D',    // Dark purple
      deepBlue: '#1B70A9',      // Dark blue
      glassBg: 'rgba(255, 255, 255, 0.15)', // Glass effect
      overlay: 'rgba(255, 255, 255, 0.1)'   // Background overlay
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
const SignUp = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: any) => {
    const { name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', email: '', password: '' };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful signup
      toast({
        title: 'Account created.',
        description: "We've created your account successfully!",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => navigate('/'), 1500);
    }
  };

  return (
     <ChakraProvider theme={theme}>
        <Box
      minH="100vh"
      w="100vw"
      backgroundImage="url('/assets/images/background_image.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        bg: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'brightness(1.2) saturate(1.3)',
        zIndex: 1
      }}
    >
      <MotionBox
        as="form"
        onSubmit={handleSubmit}
        zIndex={2}
        w="100%"
        maxW={{ base: '90%', md: '450px' }}
        p={{ base: 6, md: 8 }}
        borderRadius="xl"
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(25px)"
        boxShadow="0px 8px 20px rgba(0, 0, 0, 0.2)"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading
          fontSize={{ base: '2rem', md: '2.5rem' }}
          fontWeight="bold"
          mb={6}
          textAlign="center"
          bgGradient="linear(to-r, brand.500, brand.600)"
          bgClip="text"
        >
          Create Account
        </Heading>

        <Stack spacing={5}>
          <FormControl isInvalid={!!errors.username}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" h="full">
                <FaUser color="purple" />
              </InputLeftElement>
              <Input
                name="username"
                type="text"
                placeholder="Username"
                size="lg"
                value={formData.username}
                onChange={handleChange}
                borderColor="brand.deepBlue"
                focusBorderColor="brand.500"
                bg="rgba(255, 255, 255, 0.2)"
                _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                _placeholder={{ color: 'purple.400' }}
              />
            </InputGroup>
            <FormErrorMessage>{errors.username}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" h="full">
                <FaEnvelope color="purple" />
              </InputLeftElement>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                size="lg"
                value={formData.email}
                onChange={handleChange}
                borderColor="brand.deepBlue"
                focusBorderColor="brand.500"
                bg="rgba(255, 255, 255, 0.2)"
                _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                _placeholder={{ color: 'purple.400' }}
              />
            </InputGroup>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" h="full">
                <FaLock color="purple" />
              </InputLeftElement>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                size="lg"
                value={formData.password}
                onChange={handleChange}
                borderColor="brand.deepBlue"
                focusBorderColor="brand.500"
                bg="rgba(255, 255, 255, 0.2)"
                _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                _placeholder={{ color: 'purple.400' }}
              />
              <InputLeftElement 
                pointerEvents="auto" 
                right="2" 
                h="full"
                cursor="pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash color="pink" />
                ) : (
                  <FaEye color="pink" />
                )}
              </InputLeftElement>
            </InputGroup>
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <MotionButton
            type="submit"
            size="lg"
            py={6}
            fontSize="1.1rem"
            fontWeight="semibold"
            borderRadius="full"
            bgGradient="linear(to-r, brand.600, brand.700)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, brand.800, brand.900)',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
            }}
            boxShadow="0 4px 15px rgba(0, 0, 0, 0.2)"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </MotionButton>

          <Text textAlign="center" color="textDark.800">
            Already have an account?{' '}
            <Button
              variant="link"
              color="brand.500"
              fontWeight="bold"
              onClick={() => navigate('/login')}
              _hover={{ textDecoration: 'none', border: 'none' }}
            >
              Log In
            </Button>
          </Text>
        </Stack>
      </MotionBox>
    </Box>
     </ChakraProvider>
  );
};

export default SignUp;