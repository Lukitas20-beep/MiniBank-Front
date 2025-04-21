import {
    Box,
    Flex,
  } from '@chakra-ui/react'
  
  import Sidebar from '../components/Sidebar'
  import Header from '../components/Header'
  import StatusCards from '../components/StatusCards'
  import CardSelection from '../components/CardSelection'
  import PaymentOption from '../components/PaymentOption'
  import PaymentDate from '../components/PaymentDate'
  
  const Dashboard = () => {
    return (
      <Box minH="100vh" bg="gray.100">
        <Box position="fixed" top="0" left="0" right="0" zIndex="1000">
          <Header />
        </Box>
  
        <Flex pt="64px">
          <Sidebar />
  
          <Box ml={{ base: 0, md: '80px' }} flex="1" p={6}>
            <StatusCards />
            <Flex gap={4} mt={6} flexWrap="wrap">
              <CardSelection />
              <PaymentOption />
              <PaymentDate />
            </Flex>
          </Box>
        </Flex>
      </Box>
    )
  }
  
  export default Dashboard