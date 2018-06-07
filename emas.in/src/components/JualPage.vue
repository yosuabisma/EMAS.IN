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
        <button class="tab" v-on:click="gotoPage('/beli-emas')"><font class="size16">Pembelian</font></button>
        <span><button class="tab active" v-on:click="gotoPage('/jual-emas')"><font class="size16">Penjualan</font></button></span>
      </center>
      <div class="detail">
        <BoxJual></BoxJual>
      </div>
      <div class="slideButton">
        <div v-show="viewSlide" class="slide-container">
          <div class="circle" v-on:click="showSaldo()">
  					<i class="icon icon-topup"></i>
  				</div>
          <VueDrag
  				:width="262"
  				:height="50"
  				:background="'#f7f7f7'"
  				:progressBarBg="'#fdc24a'"
  				:completedBg="'#fdc24a'"
  				:text="'Geser untuk lanjut'"
  				:successText="'Success'"
  				:handlerBg="'#ffab00'"
  				:textSize="'18px'"
  				v-on:passcallback="successSlide()"
  				/>
        </div>
        <div v-show="!viewSlide" class="slide-container">
  				<div class="circle" v-on:click="showSlide()">
  					<i class="icon icon-bill"></i>
  				</div>
  				<div class="saldo-bar">
  					<p>Saldo Kamu Rp {{ saldoFormat }}</p>
  				</div>
  			</div>
      </div>
    </div>

  </div>

</template>
<script>
  import Investasi from './Investasi.vue';
  import BoxJual from './BoxJual.vue';
  import VueDrag from 'vue-drag-verify';
  export default {
    components: {
      'Investasi':Investasi,
      'BoxJual':BoxJual,
      'VueDrag': VueDrag
    },
    data(){
      return{
        viewSlide: true,
        saldo: 678754
      }
    },
    computed:{
      saldoFormat() {
				return this.saldo.toLocaleString('id-ID');
			}
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      showSlide() {
        this.viewSlide = true;
      },
      showSaldo() {
        this.viewSlide = false;
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
  .slideButton{
    padding: 16px 16px;
    margin-top: -30px;
    margin-left: 16px;
    margin-right: 16px;
  }

  /*circle dan saldo*/
  .slide-container {
		margin: 36px 0px;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}
  .circle {
		width: 50px;
		height: 50px;
		background-color: #4286f5;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		right: 2%;
	}

	.circle .icon {
		color: white;
	}
  .saldo-bar {
		width: 262px;
		height: 50px;
		line-height: 50px;
		background: rgb(247, 247, 247);
		border-radius: 22.5px;
		border: 1px solid #ddd;
	}

	.saldo-bar p {
		color: #ffab00;
		font-size: 18px;
		text-align: center;
	}
</style>
<style>
  /*SLIDER SUCCESS*/
  .slide-container div.drag_verify {
		border: 1px solid #ddd !important;
		width: 262px !important;
	}
	.drag_verify .dv_text {
		color:#ffab00 !important;
	}
	.slide-container .drag_verify div.dv_progress_bar {
		height: 48px !important;
	}
	.dv_handler {
		box-shadow: -1px 2px 1px 0 rgba(0, 0, 0, 0.2) !important;
	}

</style>
