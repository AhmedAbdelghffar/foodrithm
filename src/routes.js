import hello from './components/HelloWorld'
import addOrder from './components/addOrder'
import showOrders from './components/showOrders'
import addFood from './components/addFood'

export const routes= [
 
    {
        path: '/',
        component: addOrder
    },
    {
        path: '/showorders',
        component: showOrders
    },
    {
        path: '/addfood',
        component: addFood
    }

];