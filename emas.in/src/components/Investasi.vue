<template>
  <div class="background_investasi">
    <p class="whiteFont size14">Investasi Emas Saya
      <span class="spanCornerRight2">
        <div class="can-toggle demo-rebrand-2">
          <input id="e" type="checkbox">
          <label for="e">
            <div v-on:click="switchDisplay()" class="can-toggle__switch" data-checked="gr" data-unchecked="Rp"></div>
          </label>
        </div>
      </span>
    </p>
    <br/>
    <p class="whiteFont size25"><b>{{nominal}}</b></p>
    <p class="whiteFont size14 msg">{{message}}</p>
  </div>
</template>
<script>
	export default {
		data() {
			return {
        nominal: "Rp 678.754",
        message: "Jumlah Emas (1.2 gram)"
			}
		},
		methods: {
      switchDisplay() {
        if(this.nominal === "Rp 678.754" && this.message === "Jumlah Emas (1.2 gram)"){
          this.nominal = "1.2 gram"
          this.message = "Jumlah Saldo (Rp 678.754)"
        }else{
          this.nominal = "Rp 678.754"
          this.message = "Jumlah Emas (1.2 gram)"
        }
      }
		}
	}
</script>
<style>
  .background_investasi{
    background-image: url("./../assets/BackgroundInvestasi.svg");
    /* Full height */
    background-repeat: no-repeat;
    width: 328px;
    height: 134px;
    padding: 16px 16px;
    margin: auto;
  }

  /*SWITCH BUTTON*/
  /*Source = https://www.cssscript.com/creating-accessible-switch-controls-with-pure-css-scss/*/
  .can-toggle {
    position: relative;
  }
  .can-toggle *, .can-toggle *:before, .can-toggle *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
         box-sizing: border-box;
  }
  .can-toggle input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .can-toggle input[type="checkbox"][disabled] ~ label {
    pointer-events: none;
  }
  .can-toggle input[type="checkbox"][disabled] ~ label .can-toggle__switch {
    opacity: 0.4;
  }
  .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:before {
    content: attr(data-unchecked);
    left: 0;
  }
  .can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
    content: attr(data-checked);
  }
  .can-toggle label {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .can-toggle label .can-toggle__label-text {
    -moz-flex: 1;
    -webkit-flex: 1;
        -ms-flex: 1;
            flex: 1;
    padding-left: 5px;
  }
  .can-toggle label .can-toggle__switch {
    position: relative;
  }
  .can-toggle label .can-toggle__switch:before {
    content: attr(data-checked);
    position: absolute;
    top: 0;
    text-align: center;
  }
  .can-toggle label .can-toggle__switch:after {
    content: attr(data-unchecked);
    position: absolute;
    z-index: 5;
    text-align: center;
    background: white;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"][disabled] ~ label {
    color: #dddddd;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-2 input[type="checkbox"]:hover ~ label .can-toggle__switch {
    background-color: #dddddd;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
    color: #ffab00;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:hover ~ label {
    color: #ffab00;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked ~ label:hover {
    color: #ffab00;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked ~ label .can-toggle__switch {
    background-color:#dddddd;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
    color: #ffab00;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch {
    background-color: #dddddd;
  }
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
    color: #ffab00;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__label-text {
    -webkit-flex: 1;
    -moz-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch {
    -webkit-transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
            transition: background-color 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    background: #dddddd;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:before {
    color: #fff;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:after {
    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
    color: #ffab00;
  }
  /*.can-toggle.demo-rebrand-2 input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }*/
  .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
    -webkit-transform: translate3d(27px, 0, 0);
    transform: translate3d(27px, 0, 0);
  }
  /*.can-toggle.demo-rebrand-2 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-2 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }*/
  /*.can-toggle.demo-rebrand-2 label {
    font-size: 10px;
  }*/
  .can-toggle.demo-rebrand-2 label .can-toggle__switch {
    height: 30px;
    -webkit-flex: 0 0 60px;
        -ms-flex: 0 0 60px;
            flex: 0 0 60px;
    border-radius: 30px;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:before {
    left: 28px;
    font-size: 10px;
    line-height: 28px;
    width: 30px;
    padding: 0 12px;
  }
  .can-toggle.demo-rebrand-2 label .can-toggle__switch:after {
    top: 2px;
    left: 2px;
    border-radius: 20px;
    width: 30px;
    line-height: 28px;
    font-size: 10px;
  }
</style>
