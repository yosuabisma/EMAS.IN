<template>
  <div>
    <div class="beli-detail">
      <center>
        <p class="size14"><b>Update Harga Terbaru : Rp {{harga}}/gr</b></p>
        <br/>
        <p class="size13 grayFont">Perubahan terakhir {{tanggal}}, {{waktu}}</p>
      </center>
      <div class="inputSwitch">
        <center>
          <table>
            <thead>
              <th>
                <label v-if="normal===true" class="size13 grayFont left">Rupiah</label>
                <label v-if="normal===false" class="size13 grayFont left">Gram</label>
              </th>
              <th> </th>
              <th>
                <label v-if="normal===true" class="size13 grayFont left">Gram</label>
                <label v-if="normal===false" class="size13 grayFont left">Rupiah</label>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input v-if="normal===true" class="input" type="text" v-model="rp">
                  <!--p style="display:none">{{rp}}</p-->
                  <input v-if="normal===false" class="input" type="text" v-model="gr">
                  <!--p style="display:none">{{gr}}</p-->
                </td>
                <td class="imgSwitch">
                  <img class="switchButton" src="../assets/Group 7.svg" alt="" v-on:click="switchDisplay()">
                </td>
                <td>
                  <p v-if="normal===true" class="input">{{convert1}}</p>
                  <!--p v-if="normal===true" class="input">{{rp/hpg}}</p-->
                  <!--input v-if="normal===true" class="input" type="text" v-model="gr"-->
                  <p style="display:none">{{gr}}</p>
                  <p v-if="normal===false" class="input">{{convert2}}</p>
                  <!--p v-if="normal===false" class="input">{{hpg*gr}}</p-->
                  <!--input v-if="normal===false" class="input" type="text" v-model="rp"-->
                  <p style="display:none">{{rp}}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      <div class="sliderDiv">

          <!--VUE SLIDE BAR-->
          <div v-if="normal===true">
            <VueSlideBar
              v-model="rp"
              :min="0"
              :max="67875400"
              :processStyle="slider.processStyle"
              :lineHeight="slider.lineHeight"
              :tooltipStyles="{ backgroundColor: '#fff', borderColor: '#fff', color : '#888888' }">
            </VueSlideBar>
            <br/>
            <font class="size14 grayFont">Rp 0</font><span class="spanCornerRight"><font class="size14 grayFont">Rp 67.875.400</font></span>
          </div>
          <div v-if="normal===false">
            <VueSlideBar
              v-model="gr"
              :min="0"
              :max="100"
              :processStyle="slider.processStyle"
              :lineHeight="slider.lineHeight"
              :tooltipStyles="{ backgroundColor: '#fff', borderColor: '#fff', color : '#888888' }">
            </VueSlideBar>
            <br/>
            <font class="size14 grayFont">0 gram</font><span class="spanCornerRight"><font class="size14 grayFont">100 gram</font></span>
          </div>
          <!--h2>Value: {{value2}}</h2-->

      </div>

    </div>
    <div class="total">
      <font class="size20"><b>Total</b></font>
      <span v-if="normal===true"><font class="size20 colorOrange spanCornerRight"><b>Rp {{rp}}</b></font></span>
      <span v-if="normal===false"><font class="size20 colorOrange spanCornerRight"><b>Rp {{convert2}}</b></font></span>
      <br/>
      <p class="size12 grayFont spanCornerRight" v-if="normal===true">{{convert1}} gram</p>
      <p class="size12 grayFont spanCornerRight" v-if="normal===false">{{gr}} gram</p>
      <br/><br/>
      <p class="size12 grayFont">Dengan menggeser tombol dibawah. Anda sudah menyetujui <span class="colorOrange">syarat dan ketentuan</span> yang berlaku</p>
    </div>
  </div>
</template>
<script>
  var gr = 23;
  var hargaPerGram = 678754;
  var rp = gr*hargaPerGram;
  import VueSlideBar from 'vue-slide-bar'
  export default {
    data() {
      return {
        harga: hargaPerGram.toLocaleString('id-ID'),
        total: rp,
        tanggal: "22 Mei 2018",
        waktu: "16:08",
        //rupiah: "Rp " + rp.toLocaleString('id-ID'),
        //gram: gr + " gram",
        normal: false,
        rp:rp,
        gr:gr,
        hpg:hargaPerGram,
        /*Slider Range*/
        value2: rp,
        slider: {
          lineHeight: 10,
          processStyle: {
            backgroundColor: '#ffab00'
          }
        },
        /*Slider Range*/
        value3: gr,
        slider: {
          lineHeight: 10,
          processStyle: {
            backgroundColor: '#ffab00'
          }
        }
      }
    },
    components:{
      VueSlideBar
    },
    computed:{
      saldoFormat(rupiah) {
				return rupiah.toLocaleString('id-ID');
			},
      convert1(){
        return (this.rp/this.hpg).toFixed(1);
      },
      convert2(){
        return (this.hpg*this.gr).toFixed(0);
      }
    },
		methods: {
      switchDisplay() {
        if(this.normal === true){
          this.normal = false;
          this.gr=gr;
        }else{
          this.normal=true;
          this.rp=rp;
        }
      }
		}
  }


</script>
<style>
  /*font size and etc*/
  .size20{
    font-size: 20px;
  }
  .size14{
    font-size: 14px;
  }
  .size13{
    font-size: 13px;
  }
  .size12{
    font-size: 12px;
  }
  .grayFont{
    color: #888888;
  }
  .left{
    text-align:left;
  }
  .spanCornerRight{
    float:right;
  }
  .colorOrange{
    color: #ffab00;
  }

  /*table*/
  table{
    text-align: left;
    margin-top: 4px;
  }
  th,td{
    padding: 8px 8px;
  }
  .imgSwitch{
    text-align: center;
  }

  .beli-detail{
    border-bottom:1px solid #dddddd;
    border-left:1px solid #dddddd;
    border-right:1px solid #dddddd;
    height: 307px;
    padding: 32px 32px;
  }
  .inputSwitch{
    padding: 8px 8px;
  }
  .input{
    border:none;
    font-size: 16px;
    padding:2px 2px;
    font-weight: bold;
    width: 100px;
  }
  .input:hover{
    border-bottom: 1px solid #ffab00;
  }
  .switchButton{
    margin-top: 16px;
  }
  .total{
    margin-top: 28px;
    margin-left: 16px;
    margin-right: 16px;
  }
</style>
