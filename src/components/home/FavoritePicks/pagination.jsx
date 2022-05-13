import React from 'react'
import _ from 'lodash'
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Pagination = (props) => {
    const {itemsCount, pageSize, currentPage, onPageChange} = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1) // return an array
    return ( 
        <NavWrapper aria-label="Page navigation" data-aos='flip-up'>
            <ul className="pagination justify-content-center">
                {pages.map(page => (
                    <li className={(page === currentPage) ? 'page-item active' : 'page-item'} 
                        key={page} 
                        onClick={() => onPageChange(page)}
                        style={{cursor: 'pointer'}}>
                        <a className="page-link">{page}</a>
                    </li> 
                ))}
            </ul>
        </NavWrapper>
     );
}
 
export default Pagination;

Pagination.propsTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

const NavWrapper = styled.nav`
    margin-top: 20px;
    .pagination .page-item {
        margin-right: 10px;
    }
`