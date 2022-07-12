
import Bonus from '../Components/PersonalAccount/Bonus/Bonus';
import MainInfoAcc from '../Components/PersonalAccount/MainInfoAcc/MainInfoAcc';
import Layout from './../Components/Layout/Layout';
export default function personalaccount() {

    return(

        <Layout title={`Личный Кабинет`}>
            <Bonus/>
            <MainInfoAcc/>
        </Layout>
    )
}