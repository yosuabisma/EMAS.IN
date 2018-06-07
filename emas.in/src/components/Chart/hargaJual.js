import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    this.renderChart({
      labels: ['16 Mei','17 Mei','18 Mei','19 Mei','20 Mei','21 Mei','22 Mei'],
      datasets: [
        {
          label: 'Harga (Rp)',
          backgroundColor: '#ffab00',
          data: [200000, 450000, 400000, 350000, 350000, 400000, 450000]
        }
      ]
    }, {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                  beginAtZero: true,
                  max: 600000,
                  min: 0,
                  stepSize: 100000
              }
            }]
          }
       }
    )
  }
}
