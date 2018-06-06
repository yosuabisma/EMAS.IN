<template>
  <div class="transaksi">
    <div class="transaksi-header-page">
			<router-link to="/" >
				<img class="arrow-back" src="../assets/icon/arrow_back.svg" alt="">
			</router-link>
			<p class="size30 headerMargin"><b>Transaksi</b></p>
		</div>
    <div class="tabMenu">
      <center>
        <button class="tab" v-bind:class="{active: isActive}" v-on:click="activeClick()"><font class="size16">Pembelian</font></button>
        <span><button class="tab"  v-bind:class="{active: isActive2}" v-on:click="activeClick()"><font class="size16">Penjualan</font></button></span>
      </center>
      <hr/>
    </div>
    <div class="list">
      <div class="list-obj" v-if="beli===true" v-for="tr in trans">
          <table>
            <tr>
                <td class="tdStyle">
                  <p class="size14 blackFont"><b>Total Berat: {{tr.berat}} gram</b></p>
                  <p class="size14 harga blackFont">Rp {{tr.harga}}</b></p>
                  <p class="size12 time grayFont">Rp {{tr.tanggal}}, {{tr.waktu}}</b></p>
                </td>
                <td class="spanCornerRight">
                  <button class="gunakanBTN">Gunakan</button>
                </td>
            </tr>
          </table>
      </div>
      <div class="list-obj" v-if="jual===true" v-for="tr2 in trans2">
          <table>
            <tr>
                <td class="tdStyle">
                  <p class="size14 blackFont"><b>Total Berat: {{tr2.berat}} gram</b></p>
                  <p class="size14 harga blackFont">Rp {{tr2.harga}}</b></p>
                  <p class="size12 time grayFont">Rp {{tr2.tanggal}}, {{tr2.waktu}}</b></p>
                </td>
                <td class="spanCornerRight">
                  <button class="gunakanBTN">Gunakan</button>
                </td>
            </tr>
          </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isActive:true,
        isActive2:false,
        beli:true,
        trans:[
          {berat:1.6472, harga:"1.000.000", tanggal:"30 Mei 2018", waktu:"13:24" },
          {berat:1.6472, harga:"1.000.000", tanggal:"30 Mei 2018", waktu:"13:24" },
          {berat:1.6472, harga:"1.000.000", tanggal:"30 Mei 2018", waktu:"13:24" },
          {berat:1.6472, harga:"1.000.000", tanggal:"30 Mei 2018", waktu:"13:24" },
          {berat:1.6472, harga:"1.000.000", tanggal:"30 Mei 2018", waktu:"13:24" },
          {berat:1.6472, harga:"1.000.000", tanggal:"30 Mei 2018", waktu:"13:24" }
        ],
        trans2:[
          {berat:1, harga:"678.754", tanggal:"30 Mei 2018", waktu:"21:44" },
          {berat:1, harga:"678.754", tanggal:"30 Mei 2018", waktu:"21:44" },
          {berat:1, harga:"678.754", tanggal:"30 Mei 2018", waktu:"21:44" },
          {berat:1, harga:"678.754", tanggal:"30 Mei 2018", waktu:"21:44" },
          {berat:1, harga:"678.754", tanggal:"30 Mei 2018", waktu:"21:44" },
          {berat:1, harga:"678.754", tanggal:"30 Mei 2018", waktu:"21:44" }
        ]
      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      activeClick(){
        if(this.isActive === true){
          this.isActive = false;
          this.isActive2 = true;
          this.jual=true;
          this.beli=false;
        }else{
          this.isActive = true;
          this.isActive2 = false;
          this.jual=false;
          this.beli=true;
        }
      }
    }
  }
</script>
<style>
  /*font size and margin*/
  .size12{
    font-size:12px;
  }
  .size14{
    font-size:14px;
  }
  .size16{
    font-size:16px;
  }
  .size30{
    font-size:30px;
  }
  .spanCornerRight{
    float:right;
  }


  .blackFont{
    color:#222222;
  }
  .grayFont{
    color:#888888;
  }

  .headerMargin{
    margin-top: 20px;
  }
  .transaksi-header-page{
    padding: 16px 16px;
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
  hr{
    color:#ddd;
  }
  .list{
    margin-top:8px;
    padding: 16px 16px;
  }
  .list-obj{
    margin-top: 8px;
    border: 1px solid #ddd;
    padding:8px 16px;
  }
  .harga{
    margin-top:4px;
  }
  .time{
    margin-top:8px;
  }
  .spanCornerRight{
    margin-left: 65px;
  }
  .tdStyle{
    width: 180px;
  }
  .gunakanBTN{
    padding: 12.5px 11.5px;
    border:1px solid #ffab00;
    background: none;
    border-radius:5px;
    color: #ffab00;
  }
  .gunakanBTN:hover{
    border:1px solid #ffab00;
    background: #ffab00;
    color: #fff;
  }
</style>
