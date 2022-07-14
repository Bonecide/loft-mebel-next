import { useRouter } from 'next/router'
import Layout from '../../../Components/Layout/Layout';
import items from '../../../fake-data/catalog.json'
import Hits from '../../../Components/Hits/Hits';
import ItemCard from '../../../Module/ItemCard/ItemCard';
export default function itemId() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const timly = [];
    const searchField = "name";
    const searchVal = router.query.name;
    for (let i=0 ; i < items.length ; i++)
    {
        if (items[i][searchField] == searchVal) {
            timly.push(items[i]);
        }
    }
    const result = timly[0]
    console.log(result)
    return(
        <Layout title={result && result.name}>
        
           <div className='container'>
            
            
            {result && <ItemCard info={result}/>}
            <Hits/>
            </div>  
            
        </Layout>
    )
}