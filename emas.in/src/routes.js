import MainPage from './components/MainPage.vue';
import BeliPage from './components/BeliPage.vue';
import JualPage from './components/JualPage.vue';
import TransaksiPage from './components/TransaksiPage.vue';
import GrafikHarga from './components/GrafikHarga.vue';

export default [
  {path: '/', component: MainPage},
	{path: '/beli-emas', component: BeliPage},
  {path: '/jual-emas', component: JualPage},
  {path: '/transaksi', component: TransaksiPage},
  {path: '/grafik-harga', component: GrafikHarga}
]
