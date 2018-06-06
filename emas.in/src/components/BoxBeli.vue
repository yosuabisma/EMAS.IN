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
                  <input v-if="normal===true" class="input" type="text" v-model="rupiah">
                  <input v-if="normal===false" class="input" type="text" v-model="gram">
                </td>
                <td class="imgSwitch">
                  <img class="switchButton" src="../assets/Group 7.svg" alt="" v-on:click="switchDisplay()">
                </td>
                <td>
                  <input v-if="normal===true" class="input" type="text" v-model="gram">
                  <input v-if="normal===false" class="input" type="text" v-model="rupiah">
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
      <div class="sliderDiv">
        <center>
          <input type="range">
        </center>
      </div>

    </div>
    <div class="total">
      <font class="size20"><b>Total</b></font><span><font class="size20 colorOrange spanCornerRight"><b>Rp {{harga}}</b></font></span>
      <br/><p class="size12 grayFont spanCornerRight">{{gram}}</p>
      <br/><br/><br/>
      <p class="size12 grayFont">Dengan menggeser tombol dibawah. Anda sudah menyetujui <span class="colorOrange">syarat dan ketentuan</span> yang berlaku</p>
    </div>


  </div>
</template>
<script>
  var rp = "15.611.342";
  var gr = 23;
  export default {
    data() {
      return {
        harga: 678.754,
        tanggal: "22 Mei 2018",
        waktu: "16:08",
        rupiah: "Rp " + rp,
        gram: gr + " gram",
        normal: true
      }
    },
		methods: {
      switchDisplay() {
        if(this.normal === true){
          this.normal = false;
        }else{
          this.normal=true;
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


  /*SLIDER*/
  input[type=range] {
      /*removes default webkit styles*/
      -webkit-appearance: none;

      /*fix for FF unable to apply focus style bug */
      border: 1px solid white;

      /*required for proper track sizing in FF*/
      width: 250px;
  }
  input[type=range]::-webkit-slider-runnable-track {
      width: 250px;
      height: 5px;
      background: #dedede;
      border: none;
      border-radius: 3px;
  }
  input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #ffab00;
      margin-top: -4px;
  }
  input[type=range]:focus {
      outline: none;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
      background: #ccc;
  }

  input[type=range]::-webkit-fill-lower {
      background: #777;
      border-radius: 10px;
  }
  input[type=range]::-webkit-fill-upper {
      background: #ddd;
      border-radius: 10px;
  }
  input[type=range]::-webkit-thumb {
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: goldenrod;
  }
  input[type=range]:focus::-webkit-fill-lower {
      background: #888;
  }
  input[type=range]:focus::-webkit-fill-upper {
      background: #ccc;
  }
</style>
