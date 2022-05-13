import React from 'react' 

const ListGroup = ( {marks, onItemSelect, selectedBrand, textProperty, valueProperty}) => {
    return ( 
        <ul className='row container-fluid brands justify-content-center list-group list-group-horizontal ms-sm-4'>
            {marks.map(mark => (
                    <li 
                        className={ 
                            mark[textProperty] === selectedBrand[textProperty] ? 'col-2 col-lg-1 list-group-item active' : 'col-2 col-lg-1 list-group-item'}
                            key={mark[valueProperty]} 
                            onClick={() => onItemSelect(mark)}
                    >{mark[textProperty]}
                    </li>
            ))}
        </ul>
     );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
 
export default ListGroup;