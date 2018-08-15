import hello from './components/HelloWorld'
import addOrder from './components/addOrder'
import showOrders from './components/showOrders'

export const routes= [
 
    {
        path: '/',
        component: addOrder
    },
    {
        path: '/showorders',
        component: showOrders
    }
];