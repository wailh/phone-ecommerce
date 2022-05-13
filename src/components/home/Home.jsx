import React, {useEffect} from 'react'
import Companies from './companies';
import FavoriteProd from './FavoriteProd';
import ShopifySection from './shopifySection';
import DescSection from './DescSection';
import FavoritePicks from './FavoritePicks/favoritePicks';
import { ProductConsumer } from '../context';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Empty from './empty';

const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    })
    return ( 
        <ProductConsumer>
           {(products) => 
              <>
                <ShopifySection  />
                <DescSection />
                <FavoritePicks  products={products}/>
                <Empty />
                <Companies  />
                <FavoriteProd />
              </>
            }
        </ProductConsumer>
     );
}
 
export default Home;