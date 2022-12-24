
let valorTotal
let porcentajeInicial
let metrosCuadrados
let tasa1
let meses1
let valorPrestar1
let arriendoActual
let inflacionActual
let diferenciaAños
let arriendoFuturo1
let pagoCuota1
let rentable1

function calculadora() {
    do {
        opcion1 = prompt('Bienvenido a la calculadora de rentabilidad inmobiliaria!\n\nPor favor seleccione la operacion a realizar:\n\n1 - Calcular el precio por metro cuadrado\n2 - Calcular el valor de la cuota inicial y el prestamo a solicitar\n3 - Calcular el valor de la cuota mensual del credito\n4 - Calcular rentabilidades\n5 - Salir')
        opcion1 = parseInt(opcion1)

        const valorInicial = (valorTotal, porcentajeInicial) => { valor = valorTotal * porcentajeInicial; return valor }
        const valorPrestar = (valorTotal, porcentajeInicial) => { valor = valorTotal * (1 - porcentajeInicial); return valor }
        const precioMetroCuadrado = (valorTotal, metrosCuadrados) => { valor = valorTotal / metrosCuadrados; return valor }
        const pagoCuota = (tasa1, meses1, valorPrestar1) => { valor = ((tasa1 * (1 + tasa1) ** meses1) * valorPrestar1) / ((((1 + tasa1) ** meses1) - 1)); return valor }
        const arriendoFuturo = (arriendoActual, inflacionActual, diferenciaAños) => { valor = arriendoActual * (1 + (inflacionActual * diferenciaAños)); return valor }
        const ingresoNetoMensual = (arriendoFuturo1, pagoCuota1) => { valor = arriendoFuturo1 - pagoCuota1; return valor }
        const ingresoNetoAnual = (ingresoNetoMensual1) => { valor = ingresoNetoMensual1 * 12; return valor }
        const rentabilidadCorriente = (ingresoNetoAnual1, valorInicial1) => { valor = ingresoNetoAnual1 / valorInicial1; return valor }
        const rentabilidadReal = (valorInicial1, valorPrestar1, pagoCuota1, meses1, ingresoNetoMensual1) => { valor = (((pagoCuota1 * (valorPrestar1 / (pagoCuota1 * meses1))) + ingresoNetoMensual1) * 12) / valorInicial1; return valor }
        const rentabilidadRealMensual = (valorPrestar1, pagoCuota1, meses1, ingresoNetoMensual1) => { valor = (((pagoCuota1 * (valorPrestar1 / (pagoCuota1 * meses1))) + ingresoNetoMensual1)); return valor }

        switch (opcion1) {
            case 1:
                valorTotal = prompt('Por favor ingrese el valor total del inmueble ')
                valorTotal = parseInt(valorTotal)
                metrosCuadrados = prompt('Por favor ingrese los metros cuadrados del inmueble ')
                metrosCuadrados = parseInt(metrosCuadrados)
                valorM = precioMetroCuadrado(valorTotal, metrosCuadrados)
                alert('El valor del metro cuadrado es : $' + valorM)
                break;
            case 2:
                valorTotal = prompt('Por favor ingrese el valor total del inmueble ')
                valorTotal = parseInt(valorTotal)
                porcentajeInicial = prompt('Por favor ingrese el porcentaje de couta inicial solicitado por el constructor')
                porcentajeInicial = parseFloat(porcentajeInicial) / 100
                valorInicial1 = valorInicial(valorTotal, porcentajeInicial)
                valorPrestar1 = valorPrestar(valorTotal, porcentajeInicial)
                alert('Para aquirir un inmueble de $' + valorTotal + ' se debe pagar una cuota inicial de $' + valorInicial1 + ' y solicitar un prestamo bancario de $' + valorPrestar1)
                break;
            case 3:
                valorTotal = prompt('Por favor ingrese el valor total del inmueble ')
                valorTotal = parseInt(valorTotal)
                porcentajeInicial = prompt('Por favor ingrese el porcentaje de inicial a pagar')
                porcentajeInicial = parseFloat(porcentajeInicial) / 100
                tasa1 = prompt('Por favor ingrese la tasa de interes mensual a pagar')
                tasa1 = parseFloat(tasa1) / 100
                meses1 = prompt('Por favor ingrese la cantidad de meses del prestamo')
                meses1 = parseInt(meses1)

                valorPrestar1 = valorPrestar(valorTotal, porcentajeInicial)
                pago1 = pagoCuota(tasa1, meses1, valorPrestar1)
                alert('Se debe solicitar un prestamos por $' + valorPrestar1 + ', con una cuota mensual de $' + pago1 + ' a ' + meses1 + ' meses')
                break;
            case 4:
                valorTotal = prompt('Por favor ingrese el valor total del inmueble ')
                valorTotal = parseInt(valorTotal)
                porcentajeInicial = prompt('Por favor ingrese el porcentaje de inicial a pagar')
                porcentajeInicial = parseFloat(porcentajeInicial) / 100
                tasa1 = prompt('Por favor ingrese la tasa de interes mensual a pagar')
                tasa1 = parseFloat(tasa1) / 100
                meses1 = prompt('Por favor ingrese la cantidad de meses del prestamo')
                meses1 = parseInt(meses1)
                arriendoActual = prompt('Por favor ingrese el valor promedio de arriendo de inmuebles similares en la misma zona')
                arriendoActual = parseInt(arriendoActual)
                inflacionActual = prompt('Por favor ingrese el porcentaje de inflacion anual del ultimo año ')
                inflacionActual = parseFloat(inflacionActual) / 100
                diferenciaAños = prompt('Por favor digite el numero de años hasta la entrega del inmueble ')
                diferenciaAños = parseInt(diferenciaAños)

                valorInicial1 = valorInicial(valorTotal, porcentajeInicial)
                valorPrestar1 = valorPrestar(valorTotal, porcentajeInicial)
                pagoCuota1 = pagoCuota(tasa1, meses1, valorPrestar1)
                arriendoFuturo1 = arriendoFuturo(arriendoActual, inflacionActual, diferenciaAños)
                ingresoNetoMensual1 = ingresoNetoMensual(arriendoFuturo1, pagoCuota1)
                ingresoNetoAnual1 = ingresoNetoAnual(ingresoNetoMensual1)
                rentabilidadCorriente1 = rentabilidadCorriente(ingresoNetoAnual1, valorInicial1) * 100
                rentabilidadReal1 = rentabilidadReal(valorInicial1, valorPrestar1, pagoCuota1, meses1, ingresoNetoMensual1) * 100
                rentabilidadRealMensual1 = rentabilidadRealMensual(valorPrestar1, pagoCuota1, meses1, ingresoNetoMensual1)

                if (ingresoNetoMensual1 > 100) {
                    rentable1 = 'si'
                }
                else {
                    rentable1 = 'no'
                }

                alert('El inmueble cuenta con las siguientes caracteristicas:\nValor Total: $ ' + valorTotal + '\nCuota inicial: $ ' + valorInicial1 + '\nValor a prestar: $ ' + valorPrestar1 + '\nCuota prestamo: $ ' + pagoCuota1 + '\n\nY se pueden obtener las siguientes rentabilidades:\nIngreso Neto Mensual: $ ' + ingresoNetoMensual1 + '\nIngreso Neto Anual: $ ' + ingresoNetoAnual1 + '\nRentabilidad Corriente: ' + rentabilidadCorriente1 + '%\nRentabilidad Real: ' + rentabilidadReal1 + '%\nRentabilidad Real Mensual : $' + rentabilidadRealMensual1 + '\n\nDe acuerdo a las rentabilidades se puede concluir que ' + rentable1 + ' es rentable')

                break;
            case 5:
                alert('saliendo')
                break;
            default:
                alert('Opcion invalida!')
        }

    } while (opcion1 != 5);

}

calculadora()