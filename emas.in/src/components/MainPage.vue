<template>
    <div class="main-page">
      <div class="headerEmas">
        <div class="container">
          <br/><br/><br/><br/><br/>
          <img src="./../assets/Logo Isi.in.svg" height="38px"/>
          <p class="whiteFont emasin"><b>Emas.in</b> <span class="icon icon-information spanCornerRight whiteFont"></span></p>
        </div>
      </div>
      <div class="buttonTrans" v-on:click="gotoPage('/transaksi')">
        <span class="icon icon-transaksi spanCornerLeft iconTrans"></span><font class="size16">Transaksi</font>
        <span class="spanCornerRight"><img src="./../assets/icon/arrow/upward.svg"/></span>
      </div>
      <br/>
      <Investasi></Investasi>
      <div class="partition">
        <Box name="Beli Emas" icon="Slice.svg" v-on:click.native="gotoPage('/beli-emas')" />
        <Box name="Jual Emas" icon="Group 4.2.svg" v-on:click.native="gotoPage('/jual-emas')" />
        <Box name="Grafik Harga" icon="IconGrafikHarga.svg" v-on:click.native="gotoPage('/grafik-harga')" />
      </div>
      <div class="buttonBottom">
        <div class="buttonTrans" v-on:click="gotoPage('/cetak-emas')">
            <p class="grayFont size13">Untuk melakukan Cetak Emas Kamu akan diarahkan<br/> ke MicroApps <b>CetakEmas</b><span class="spanCornerRight"><img src="./../assets/icon/arrow/upward.svg"/></span></p>
        </div>
        <div class="buttonTrans" v-on:click="gotoPage('/cetak-emas')">
            <p class="grayFont size13">Untuk melakukan Kirim Emas Kamu akan diarahkan<br/> ke MicroApps <b>KirimEmas</b><span class="spanCornerRight"><img src="./../assets/icon/arrow/upward.svg"/></span></p>
        </div>
      </div>
    </div>
</template>

<script>
  import Box from './Box.vue';
  import Investasi from './Investasi.vue';
	export default {
    components: {
			'Box': Box,
      'Investasi':Investasi
		},
		methods: {
			gotoPage(route) {
				this.$router.push(route);
			},
		}
	}
</script>
<style>
  /*font-size*/
  .emasin{
    font-size: 20px;
  }
  .size13{
    font-size: 13px;
  }
  .size14{
    font-size: 14px;
  }
  .size16{
    font-size: 16px;
  }
  .size25{
    font-size: 25px;
  }
  .msg{
    margin-top: 8px;
  }

  .container{
    padding : 16px 16px;
  }
  .headerEmas{
    background-image: url("./../assets/Rectangle 4 + PO Box + Combined Shape Mask.svg");
    /* Full height */
    background-repeat: no-repeat;
    background-size: cover;
  }
  .whiteFont{
    color:#fff;
  }
  .buttonTrans{
    background-color: #f7f7f7;
    padding: 16px 30px;
    border: 1px solid #dddddd;
  }
  .buttonTrans:hover{
    background-color: #eaeaea;
  }
  .spanCornerRight{
    float: right;
  }
  .spanCornerRight2{
    float: right;
    margin-right: 56px;
  }
  .spanCornerLeft{
    float: left;
  }
  .iconTrans{
    color:#ffab00;
    margin-right: 13.4px;
    margin-top: -3.4px
  }
  .partition {
    margin-top:22px;
		display: grid;
		grid-gap: 17px;
		grid-template-columns: repeat(3, 98px);
		justify-content: center;
		/*padding: 16px 16px;*/
	}
  .grayFont{
    color:gray;
    font-size: 12px;
  }
  .buttonBottom{
    margin-top: 22px;
  }
</style>
