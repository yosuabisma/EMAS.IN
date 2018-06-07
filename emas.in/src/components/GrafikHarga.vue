<template>
  <div class="grafik-harga">
    <div class="header-grafik-harga">
      <router-link to="/" >
				<img class="arrow-back" src="../assets/icon/arrow_back.svg" alt="">
			</router-link>
      <h1>Grafik Harga</h1>
    </div>
    <div class="grafik">
      <div class="update-harga">
        <h3 id="sub-header">Update Harga Beli Saat Ini</h3>
        <h3 id="tanggal">Perubahan terakhir 22 Mei '18, 16.08</h3>
      </div>
      <div class="btn-group">
        <button>7 hari</button>
        <button>1 bulan</button>
        <button>3 bulan</button>
      </div>
      <chart-beli class="chart"></chart-beli>
    </div>
    <div class="grafik">
      <div class="update-harga">
        <h3 id="sub-header">Update Harga Jual Saat Ini</h3>
        <h3 id="tanggal">Perubahan terakhir 22 Mei '18, 16.08</h3>
      </div>
      <div class="btn-group">
        <button>7 hari</button>
        <button>1 bulan</button>
        <button>3 bulan</button>
      </div>
      <chart-jual class="chart"></chart-jual>
    </div>
  </div>
</template>

<script>
import hargaBeli from './Chart/hargaBeli';
import hargaJual from './Chart/hargaJual';

export default {
  components: {
    'chart-beli': hargaBeli,
    'chart-jual': hargaJual
  }
}
</script>

<style scoped>
.grafik-harga {
  width: 100%;
  padding: 20px;
}

.header-grafik-harga .arrow-back {
  margin-left: 1px;
  margin-bottom: 16px;
}

.header-grafik-harga h1 {
  font-size: 30px;
  font-weight: 1000;
}

.update-harga {
  margin-top: 16px;
  margin-bottom: 24px;
}

.update-harga #sub-header {
  font-size: 16px;
  color: #222222;
}

.update-harga #tanggal {
  font-size: 14px;
  color: #888888;
}

.btn-group button {
    background-color: #ffffff; /* White background */
    font-size: 13px;
    border: 1px solid #dddddd; /* Green border */
    color: black; /* Black text */
    cursor: pointer; /* Pointer/hand icon */
    float: left; /* Float the buttons side by side */
    width: 50px;
    height: 32px;
    font-family: "Proxima Nova";
}

/* Clear floats (clearfix hack) */
.btn-group:after {
    content: "";
    clear: both;
    display: table;
}

.btn-group button:not(:last-child) {
    border-right: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
    background-color: #f7f7f7;
    color: #ffab00;
}

.btn-group button:active {
    background-color: #f7f7f7;
    color: #ffab00;
}

.chart {
  height: 200px !important;
  width: 250px !important;
}

.grafik {
  margin-bottom: 50px;
  float: none;
}
</style>
