import Link from 'next/link';
import {Box} from '@chakra-ui/react';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        2022 RealEstate, Inc.  by <Link href="https://siham.tech">Siham.tech</Link>
    </Box>
)
export default Footer;
