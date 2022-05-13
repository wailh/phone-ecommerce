import React, {useState} from 'react' 
import styled from 'styled-components';
import Pagination from './pagination';
import Products from './Products';
import { paginate } from '../../utils/paginate';

const FavoritePicks = ({products}) => {
    const [pageSize, setPageSize] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const totalCount = products.products.length

    const items = paginate(products.products,  currentPage, pageSize)

    const handlePageChange = (page) => {
         setCurrentPage(page)
    }
    return ( 
        <div className='home' style={{color: 'var(--mainBlue)'}}>
            <ProdItems className='container-fluid'>
                <Title data-aos='fade-up'>Must Haves</Title>
                <h5 className='text-center mb-5' data-aos='fade-up'>Some of our favorites picks this week</h5>
                <Products items={items}/> 
                <Pagination 
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    />
            </ProdItems>

        </div>
     );
}
 
export default FavoritePicks;

const Title = styled.h1`
    color: var(--mainWhite);
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1.2rem;
    font-family: chloeregular;
    font-weight: bold;
`
const ProdItems = styled.div`
    padding: 7rem 2rem ;
    height: 50rem;
    overflow: hidden;
    
`