<template>
  <div class="beliEmas">
    <div class="beli-header-page">
			<router-link to="/" >
				<img class="arrow-back" src="../assets/icon/arrow_back.svg" alt="">
			</router-link>
			<p class="size30 headerMargin"><b>Jual Beli Emas</b></p>
		</div>
    <div class="invest">
      <Investasi></Investasi>
    </div>
    <div class="tabMenu">
      <center>
        <button class="tab active"><font class="size16">Pembelian</font></button>
        <span><button class="tab"><font class="size16">Penjualan</font></button></span>
      </center>
      <div class="detail">
        <BoxBeli></BoxBeli>
      </div>
    </div>

  </div>

</template>
<script>
  import Investasi from './Investasi.vue';
  import BoxBeli from './BoxBeli.vue';
  export default {
    components: {
      'Investasi':Investasi,
      'BoxBeli':BoxBeli
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      }
    }
  }
</script>
<style>
  /*font size and margin*/
  .size16{
    font-size:16px;
  }
  .size30{
    font-size:30px;
  }
  .headerMargin{
    margin-top: 20px;
  }
  .beli-header-page{
    padding: 16px 16px;
  }
  .invest{
    margin-top:8px;
  }
  .tabMenu{
    margin-top:24px;
  }
  .tab{
    padding: 16px 16px;
    background-color: #fff;
    color: #888888;
    width: 165px;
    text-align: center;
    border: none;
  }
  .tab.active{
    background-color: #ffab00;
    color: #fff;
  }
  .detail{
    padding: 16px 16px;
  }


</style>
