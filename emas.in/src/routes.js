import MainPage from './components/MainPage.vue';
import BeliPage from './components/BeliPage.vue';
import TransaksiPage from './components/TransaksiPage.vue';
import GrafikHarga from './components/GrafikHarga.vue';

export default [
  {path: '/', component: MainPage},
	{path: '/beli-emas', component: BeliPage},
  {path: '/transaksi', component: TransaksiPage},
    {path: '/grafik-harga', component: GrafikHarga}
]
