let app = Vue.createApp({
    data(){
      return{
        empleado: "",
        sueldoBruto: "",
        sindicato: "",
        montoJubilacion: "",
        jubilacion: 0,
        salarioNeto: 0,
      }
    },
    methods: {
        Calcular(){
            const jubilacion = this.sueldoBruto * 0.11
            const ley = this.sueldoBruto * 0.03
            const obraSocial = this.sueldoBruto * 0.03
            let afiliado = 0
            let ganancias = 0
            if(sindicato.checked) {
                afiliado = this.sueldoBruto * 0.015

                if(this.sueldoBruto <= 200000) {
                    this.salarioNeto = this.sueldoBruto - jubilacion - ley - obraSocial - afiliado
                    ganancias = 0
                    return this.insertarElementos(this.salarioNeto)
                }
                else if(this.sueldoBruto > 200000) {
                    ganancias = (this.sueldoBruto - 200000) * 0.35
                    this.salarioNeto = this.sueldoBruto - jubilacion - ley - obraSocial - afiliado - ganancias
                    return this.insertarElementos(this.salarioNeto)
                }
            }
            else if(!sindicato.checked) {

                if(this.sueldoBruto <= 200000) {
                    this.salarioNeto = this.sueldoBruto - jubilacion - ley - obraSocial
                    return this.insertarElementos(this.salarioNeto)
                }
                else if(this.sueldoBruto > 200000) {
                    ganancias = (this.sueldoBruto - 200000) * 0.35
                    this.salarioNeto = this.sueldoBruto - jubilacion - ley - obraSocial - ganancias
                    return this.insertarElementos(this.salarioNeto)
                }
            }
        },
        insertarElementos(salarioNeto) {
            document.getElementById("montoBruto").innerHTML="$ " + sueldoBruto.value;
            document.getElementById("montoJubilacion").innerHTML="$ " + (sueldoBruto.value * 0.11);
            document.getElementById("montoLey").innerHTML="$ " + (sueldoBruto.value * 0.03);
            document.getElementById("montoObraSocial").innerHTML="$ " + (sueldoBruto.value * 0.03);
            document.getElementById("montoSindicato").innerHTML="$ " + (sueldoBruto.value * 0.015);
            document.getElementById("montoImpGanancias").innerHTML="$ " + (sueldoBruto.value * 0.35);
            document.getElementById("montoSueldoNeto").innerHTML="$ " + salarioNeto;
        }
    }
  });app.mount('#app');