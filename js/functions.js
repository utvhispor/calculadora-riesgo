const iconos = document.getElementsByClassName('ico-clase')
const icoClase = document.getElementById('icoClase')
const icoCoro = document.getElementById('icoCoro')
const icoEstadio = document.getElementById('icoEstadio')
const icoMetro = document.getElementById('icoMetro')
const icoSuper = document.getElementById('icoSuper')
const listIcoClase = [...document.getElementsByClassName('ico-clase')]

const verParametrosAvanzados = document.getElementById('verParametrosAvanzados')
const parametrosAvanzados = document.getElementById('parametrosAvanzados')
const footerParametrosAvanzados = document.getElementById('footerParametrosAvanzados')
const avanzadosPersonasActividad = document.getElementById('avanzadosPersonasActividad')
/* Valores Parámetros Ambientales */
const valorTasaVentilacion = document.getElementById('valorTasaVentilacion')
const valorLargo = document.getElementById('valorLargo')
const valorAncho = document.getElementById('valorAncho')
const valorAlto = document.getElementById('valorAlto')
const valorDuracionEvento = document.getElementById('valorDuracionEvento')
const valorRepEvento = document.getElementById('valorRepEvento')
const valorRepEvent = document.getElementById('valorRepEento')
const valorCambiosAire = document.getElementById('valorCambiosAire')
const valorPresion = document.getElementById('valorPresion')
const valorTemperatura = document.getElementById('valorTemperatura')
const valorHumedad = document.getElementById('valorHumedad')
const valorHumeda = document.getElementById('valorHumedad')
const valorCO2AireLibre = document.getElementById('valorCO2AireLibre')
const valorTasaDescomposicion = document.getElementById('valorTasaDescomposicion')
const valorDeposicionSuperfic = document.getElementById('valorDeposicionSuperficie')
const valorMedidasAdicionales = document.getElementById('valorMedidasAdicionales')
const valorMedidasAdicionale = document.getElementById('valorMedidasAdicionales')
const infoAmbientales = document.getElementById('infoAmbientales')
/* [FIN] Valores Parámetros Ambientales */

/* Valores Parámetros Personas/Actividad */
const divPersonasInfecciosa = document.getElementById('divPersonasInfecciosa')
const divCO2Persona = document.getElementById('divCO2Persona')
const valorAreaPersona = document.getElementById('valorAreaPersona')
const valorPersonaArea = document.getElementById('valorPersonaArea')
const valorVolumenPersona = document.getElementById('valorVolumenPersona')
const valorNPersonas = document.getElementById('valorNPersonas')
const valorInmune = document.getElementById('valorInmune')
const valorRespiracion = document.getElementById('valorRespiracion')
const valorExhalacion = document.getElementById('valorExhalacion')
const valorMascExhalacion = document.getElementById('valorMascExhalacion')
const valorPersonasMasc = document.getElementById('valorPersonasMasc')
const valorMascInhalacion = document.getElementById('valorMascInhalacion')
const valorPersonasInfecciosas = document.getElementById('valorPersonasInfecciosas')
const valorCO2Persona = document.getElementById('valorCO2Persona')
const infoPersonas = document.getElementById('infoPersonas')
/* [FIN] Valores Parámetros Personas/Actividad */

/* Valores Parámetros COVID-19 */
const divHospitalizacion = document.getElementById('divHospitalizacion')
const divMortalidad = document.getElementById('divMortalidad')
const valorInfeccioso = document.getElementById('valorInfeccioso')
const valorHospitalizacion = document.getElementById('valorHospitalizacion')
const valorMortalidad = document.getElementById('valorMortalidad')
const avanzadosCOVID19 = document.getElementById('avanzadosCOVID19')
const infoCovid = document.getElementById('infoCovid')
/* [FIN] Valores Parámetros COVID-19 */

/* Valores Resultado condicional/evento */
//UNA PERSONA Y UN EVENTO
const valorProbInfeccion = document.getElementById('valorProbInfeccion')
const valorProbHospitalizacion = document.getElementById('valorProbHospitalizacion')
const valorProbMuerte = document.getElementById('valorProbMuerte')
const valorRelMuerteAuto = document.getElementById('valorRelMuerteAuto')
//TODOS LOS ASISTENTES / UN EVENTO
const valorCOVIDSurgidos = document.getElementById('valorCOVIDSurgidos')
const valorHospitalizacionesSurgidas = document.getElementById('valorHospitalizacionesSurgidas')
const valorMuertesSurgidas = document.getElementById('valorMuertesSurgidas')
const infoResultadoCondicional = document.getElementById('infoResultadoCondicional')
/* [FIN] Resultado condicional/evento */

/* Valores Absolutos condicional/evento */
//UNA PERSONA Y UN EVENTO
const valorAbsProbInfeccion = document.getElementById('valorAbsProbInfeccion')
const valorAbsProbHospitalizacion = document.getElementById('valorAbsProbHospitalizacion')
const valorAbsProbMuerte = document.getElementById('valorAbsProbMuerte')
const valorAbsRelMuerteAuto = document.getElementById('valorAbsRelMuerteAuto')
//TODOS LOS ASISTENTES / UN EVENTO
const valorAbsCOVIDSurgidos = document.getElementById('valorAbsCOVIDSurgidos')
const valorAbsHospitalizacionesSurgidas = document.getElementById('valorAbsHospitalizacionesSurgidas')
const valorAbsMuertesSurgidas = document.getElementById('valorAbsMuertesSurgidas')
/* [FIN] Resultado condicional/evento */

const infoResultadoAbsolutoEvento = document.getElementById('infoResultadoAbsolutoEvento')
const infoResultadoAbsolutoEventoMultiples = document.getElementById('infoResultadoAbsolutoEventoMultiples')
const modalInfo = document.getElementById('modalInfo')
const notas = document.getElementById('notas')
const contentModal = document.getElementById('contentModal')

footerParametrosAvanzados.addEventListener('click', (event) => {
  parametrosAvanzados.classList.toggle('mostrar__valores-adicionales')
  footerParametrosAvanzados.classList.toggle('ocultar')
  footerParametrosAvanzados.classList.toggle('mostrar')
  tieneMaxHeight = parametrosAvanzados.style.maxHeight
  parametrosAvanzados.style.maxHeight = (tieneMaxHeight) ? null : `${parametrosAvanzados.scrollHeight}px`
})

avanzadosPersonasActividad.addEventListener('click', (event) => {
  avanzadosPersonasActividad.classList.toggle('ocultar')
  avanzadosPersonasActividad.classList.toggle('mostrar')
  divPersonasInfecciosa.classList.toggle('hidden')
  divCO2Persona.classList.toggle('hidden')
})

avanzadosCOVID19.addEventListener('click', (event) => {
  avanzadosCOVID19.classList.toggle('ocultar')
  avanzadosCOVID19.classList.toggle('mostrar')
  divHospitalizacion.classList.toggle('hidden')
  divMortalidad.classList.toggle('hidden')
})

window.onclick = function(event) {
  if (event.target == modalInfo) {
    modalInfo.style.display = 'none'
  }
}

document.querySelectorAll('.informacion').forEach(
  e => e.addEventListener('click', (e) => {
    let str = {
      infoAmbientales: '<p>Puede ingresar como "ft" o como "m" (una vez ingresado como "m", cambiar en "ft" no funciona)</p>',
      infoPersonas: '<p>Valor para su situación de interés</p>',
      infoCovid: '<p>Parámetro muy importante, específico para cada región y período de tiempo. Para resultados ABSOLUTOS (probablemente dada la prevalencia de la enfermedad en la población). Ver README</p>',
      infoResultadoCondicional: '<p>Más apropiado para simular brotes conocidos (por ejemplo, coro, restaurante, etc.) y en el peor de los casos para eventos regulares (si uno tiene la mala suerte de tener personas infecciosas presentes en un evento determinado).</p>',
      infoResultadoAbsolutoEvento: '<p>Más apropiado para la estimación del riesgo general, por ejemplo en un aula universitaria, reuniones en interiores, etc., donde a menudo las personas infecciosas no estarán presentes</p>',
      infoResultadoAbsolutoEventoMultiples: '<p>Consulte las preguntas frecuentes para obtener una estimación aproximada de las muertes por viaje en coche en un día determinado</p>'
    }
    let info = e.target.id
    fContentModal(str[info])
  })
)

function fContentModal (val) {
  contentModal.innerHTML = val
  modalInfo.style.display = 'block'
}

function removeClassActive (val) {
  listIcoClase.map(item => item.classList.remove('active'))
  val.classList.add('active')
}

icoClase.addEventListener('click', (event) => {
  removeClassActive(icoClase)
  let str = '<strong>Frecuencia respiratoria</strong><br /><br />'
  str += 'Usando la mitad de la actividad sedentaria y ligera, 16-21 años por defecto. La frequencia respiratoria solo importa para personas susceptibles. Para estudiar la transmisión de los estudiantes al maestro, es necesario aumentar este valor en consecuencia.<br />'
  str += 'Para estudiar la transmisión a niños pequeños, la frequencia respiratoria también debe ajustarse de acuerdo con la tabla Readme.<br /><br />'
  str += '<strong>Tasa de emisión Quanta</strong><br /><br />'
  str += 'El valor actual es para una profesora hablando mucho.<br />'
  str += 'Para los adolescentes, se usan los valores del archivo Readme, según la actividad.<br />'
  str += 'Se cree que los niños pequeños son menos contagiosos y también respiran menos aire, por lo que quizás reduzca la Tasa de emisión Quanta en x5.'
  notas.innerHTML = str

  // parametros ambientales
  valorLargo.value = 7.6
  valorAncho.value = 6.1
  valorAlto.value = 3.1
  valorDuracionEvento.value = 50
  valorRepEvento.value = 180
  valorCambiosAire.value = 3
  valorPresion.value = 0.95
  valorTemperatura.value = 20
  valorHumedad.value = 50
  valorCO2AireLibre.value = 415
  valorTasaDescomposicion.value = 0.62
  valorDeposicionSuperfic.value = 0.3
  valorMedidasAdicionales.value = 0
  // parametros ambientales

  // parametros personas & actividad
  valorNPersonas.value = 10
  valorInmune.value = 0
  valorRespiracion.value = 0.52
  valorExhalacion.value = 25
  valorMascExhalacion.value = 50
  valorPersonasMasc.value = 100
  valorMascInhalacion.value = 30
  valorPersonasInfecciosas.value = 1
  valorCO2Persona.value = 0.005
  // parametros personas & actividad

  // parametros covid-19
  valorInfeccioso.value = 0.2
  valorHospitalizacion.value = 20
  valorMortalidad.value = 1
  // parametros covid-19
  calculoTasaVentilacion()
})
icoCoro.addEventListener('click', (event) => {
  removeClassActive(icoCoro)
  let str = 'La probabilidad de muerte se establece más alta debido a la mayor edad de los miembros del coro (el 75% de los enfermos tenían >= 65 años). Sugerir cambiar al 1% para aplicaciones generales.<br /><br />'
  str += 'Probabilidad de ser infeccioso calculada a partir de la prevalencia de la enfermedad en el condado en ese momento (7 casos * 2 para dar cuenta de los casos no detectados / 129000 habitantes del condado), ver Miller et al. 2020.<br /><br />'
  notas.innerHTML = str

  // parametros ambientales
  valorLargo.value = 9.2
  valorAncho.value = 18.3
  valorAlto.value = 4.8
  valorDuracionEvento.value = 150
  valorRepEvento.value = 1
  valorCambiosAire.value = 0.7
  valorPresion.value = 0.95
  valorTemperatura.value = 20
  valorHumedad.value = 50
  valorCO2AireLibre.value = 415
  valorTasaDescomposicion.value = 0.62
  valorDeposicionSuperfic.value = 0.3
  valorMedidasAdicionales.value = 0
  // parametros ambientales

  // parametros personas & actividad
  valorNPersonas.value = 61
  valorInmune.value = 0
  valorRespiracion.value = 1.56
  valorExhalacion.value = 970
  valorMascExhalacion.value = 0
  valorPersonasMasc.value = 0
  valorMascInhalacion.value = 0
  valorPersonasInfecciosas.value = 1
  valorCO2Persona.value = 0.0091
  // parametros personas & actividad

  // parametros covid-19
  valorInfeccioso.value = 0.011
  valorHospitalizacion.value = 20
  valorMortalidad.value = 4
  // parametros covid-19
  calculoTasaVentilacion()
})
icoEstadio.addEventListener('click', (event) => {
  removeClassActive(icoEstadio)
  let str = 'Este es un caso para un estadio de fútbol, como se explica en este tweet: <a href="https://twitter.com/jljcolorado/status/1289254898131820550">https://twitter.com/jljcolorado/status/1289254898131820550</a><br /><br />'
  str += 'E basado en este articulo: <a href="https://www.sciencedirect.com/science/article/pii/S1352231013004494">https://www.sciencedirect.com/science/article/pii/S1352231013004494</a><br /><br />'
  str += 'Tener en cuenta que para el riesgo de infección, la calculadora solo estima el riesgo de infección a través del aire más allá de las proximidades. Dado que la distancia social no se mantendría en tal evento, esto será una gran subestimación.'
  notas.innerHTML = str

  // parametros ambientales
  valorLargo.value = 183
  valorAncho.value = 91.5
  valorAlto.value = 15.3
  valorDuracionEvento.value = 90
  valorRepEvento.value = 1
  valorCambiosAire.value = 40
  valorPresion.value = 0.95
  valorTemperatura.value = 20
  valorHumedad.value = 50
  valorCO2AireLibre.value = 415
  valorTasaDescomposicion.value = 0.62
  valorDeposicionSuperfic.value = 0.3
  valorMedidasAdicionales.value = 0
  // parametros ambientales

  // parametros personas & actividad
  valorNPersonas.value = 31000
  valorInmune.value = 0
  valorRespiracion.value = 0.72
  valorExhalacion.value = 50
  valorMascExhalacion.value = 0
  valorPersonasMasc.value = 0
  valorMascInhalacion.value = 0
  valorPersonasInfecciosas.value = 1
  valorCO2Persona.value = 0.0061
  // parametros personas & actividad

  // parametros covid-19
  valorInfeccioso.value = 0.1
  valorHospitalizacion.value = 20
  valorMortalidad.value = 1
  // parametros covid-19
  calculoTasaVentilacion()
})
icoMetro.addEventListener('click', (event) => {
  removeClassActive(icoMetro)
  let str = ''
  notas.innerHTML = str

  // parametros ambientales
  valorLargo.value = 13.4
  valorAncho.value = 3.1
  valorAlto.value = 3.7
  valorDuracionEvento.value = 20
  valorRepEvento.value = 60
  valorCambiosAire.value = 5.7
  valorPresion.value = 0.95
  valorTemperatura.value = 20
  valorHumedad.value = 50
  valorCO2AireLibre.value = 415
  valorTasaDescomposicion.value = 0.62
  valorDeposicionSuperfic.value = 0.3
  valorMedidasAdicionales.value = 3.6
  // parametros ambientales

  // parametros personas & actividad
  valorNPersonas.value = 35
  valorInmune.value = 15
  valorRespiracion.value = 0.42
  valorExhalacion.value = 25
  valorMascExhalacion.value = 50
  valorPersonasMasc.value = 100
  valorMascInhalacion.value = 30
  valorPersonasInfecciosas.value = 1
  valorCO2Persona.value = 0.007
  // parametros personas & actividad

  // parametros covid-19
  valorInfeccioso.value = 0.10
  valorHospitalizacion.value = 20
  valorMortalidad.value = 1
  // parametros covid-19
  calculoTasaVentilacion()
})
icoSuper.addEventListener('click', (event) => {
  removeClassActive(icoSuper)
  let str = 'Basado en un supermercado específico en Boulder, Colorado.<br /><br />'
  str +='Dimensiones horizontales estimadas de Google Maps (usando escala), altura usando imágenes de Google Street View (usando personas presentes para escala).<br /><br />'
  str +='Tasa de ventilación estimada a partir del estándar ASHRAE en la página Readme.<br /><br />'
  str +='Promedio diario típico de ocupación, basado en mis visitas al espacio antes de la pandemia (puede ser menor ahora).<br /><br />'
  str +='Otros parámetros estimados en el Readme para esta situación.<br /><br />'
  str +='Esto es para un trabajador de un supermercado. Para un cliente, se cambia el tiempo dedicado a la historia a, por ejemplo, 1 hora, 4 veces a la semana para simular 1 mes.'
  notas.innerHTML = str

  // parametros ambientales
  valorLargo.value = 24.4
  valorAncho.value = 15.3
  valorAlto.value = 5.5
  valorDuracionEvento.value = 480
  valorRepEvento.value = 21
  valorCambiosAire.value = 3
  valorPresion.value = 0.95
  valorTemperatura.value = 20
  valorHumedad.value = 50
  valorCO2AireLibre.value = 415
  valorTasaDescomposicion.value = 0.62
  valorDeposicionSuperfic.value = 0.3
  valorMedidasAdicionales.value = 0
  // parametros ambientales

  // parametros personas & actividad
  valorNPersonas.value = 75
  valorInmune.value = 6
  valorRespiracion.value = 0.72
  valorExhalacion.value = 10
  valorMascExhalacion.value = 50
  valorPersonasMasc.value = 100
  valorMascInhalacion.value = 30
  valorPersonasInfecciosas.value = 1
  valorCO2Persona.value = 0.00675
  // parametros personas & actividad

  // parametros covid-19
  valorInfeccioso.value = 0.10
  valorHospitalizacion.value = 20
  valorMortalidad.value = 1
  // parametros covid-19
  calculoTasaVentilacion()
})

document.addEventListener('DOMContentLoaded', calculoTasaVentilacion())

function calculoTasaVentilacion() {
  let E13 = parseFloat(valorLargo.value)
  let E14 = parseFloat(valorAncho.value)
  let E15 = E14 * E13
  let E16 = parseFloat(valorAlto.value)
  let E17 = E13 * E14 * E16
  let B19 = parseFloat(valorPresion.value)
  let B20 = parseFloat(valorTemperatura.value)
  let B22 = parseFloat(valorCO2AireLibre.value)
  let B24 = parseFloat(valorDuracionEvento.value)
  let E24 = B24 / 60
  let B28 = parseFloat(valorCambiosAire.value)
  let B29 = parseFloat(valorTasaDescomposicion.value)
  let B30 = parseFloat(valorDeposicionSuperficie.value)
  let B31 = parseFloat(valorMedidasAdicionales.value)
  let B32 = B28 + B29 + B30 + B31
  let B38 = parseFloat(valorNPersonas.value)
  let E34 = E17 * (B28 + B31) * 1000 / 3600 / (B38)
  valorTasaVentilacion.innerHTML = E34.toFixed(2)
  // Calculamos el tamaño de la fuete para mostrar la tasa (ventilación * persona)
  let font = (E34 < 10) ? 34 : (E34 >= 10 && E34 < 100) ? 30 : (E34 >= 100 && E34 < 1000) ? 26 : 22
  valorTasaVentilacion.style.fontSize = `${font}px`
  let B39 = parseFloat(valorPersonasInfecciosas.value)
  let B40 = parseFloat(valorInmune.value)
  let B41 = (B38 - B39) * (1 - B40)
  let B43 = E15 / Math.pow(0.305, 2) / B38
  valorAreaPersona.innerHTML = B43.toFixed(2)
  let B44 = B38 / E15
  valorPersonaArea.innerHTML = B44.toFixed(2)
  let B45 = E17 / B38
  valorVolumenPersona.innerHTML = B45.toFixed(2)
  let B47 = parseFloat(valorRespiracion.value)
  let B48 = parseFloat(valorCO2Persona.value)
  let B49 = B48 * B38 * (1 / B19) * (273.15 + B20) / 273.15
  let B51 = parseFloat(valorExhalacion.value)
  let B52 = parseFloat(valorMascExhalacion.value)
  let B53 = parseFloat(valorPersonasMasc.value)
  let B54 = parseFloat(valorMascInhalacion.value)
  let B58 = parseFloat(valorInfeccioso.value)
  let B60 = parseFloat(valorHospitalizacion.value)
  let B61 = parseFloat(valorMortalidad.value)
  let B66 = B51 * (1 - (B52 / 100) * (B53 / 100)) * B39
  let B67 = B66 / B32 / E17 * (1 - (1 / B32 / E24) * (1 - Math.exp(-B32 * E24)))
  let B68 = B67 * B47 * E24 * (1 - (B54/100) * (B53/100))
  let B71 = (1 - Math.exp(-B68)) * 100
  valorProbInfeccion.innerHTML = `${B71.toFixed(3)}%`
  let B72 = (B71 * B60) / 100
  valorProbHospitalizacion.innerHTML = `${B72.toFixed(3)}%`
  let B73 = (B71 * B61) / 100
  valorProbMuerte.innerHTML = `${B73.toFixed(3)}%`
  let B74 = (B73 / 0.0000006) / 100
  valorRelMuerteAuto.innerHTML = `${B74.toFixed(3)}`
  let B77 = (B41 * B71) / 100
  valorCOVIDSurgidos.innerHTML = `${B77.toFixed(3)}`
  let B78 = (B77 * B60) / 100
  valorHospitalizacionesSurgidas.innerHTML = `${B78.toFixed(3)}`
  let B79 = (B77 *B61) / 100
  valorMuertesSurgidas.innerHTML = `${B79.toFixed(4)}`
  let B82 = ( B49 * 3.6 / B28 / E17 * (1 - (1 / B28 / E24) * (1 - Math.exp(-B28 * E24)))) * 1000000 + B22
  let B93 = (B39 + B41) * B58
  let B96 = 1 - Math.pow((1 - (B71 / 100) * B58), B41)
  valorAbsProbInfeccion.innerHTML = B96.toFixed(3)
  let B97 = B96 * (B60 / 100)
  valorAbsProbHospitalizacion.innerHTML = B97.toFixed(3)
  let B98 = B96 * (B61 / 100)
  valorAbsProbMuerte.innerHTML = B98.toFixed(4)
  let B99 = (B98 / 100) / 0.0000006
  valorAbsRelMuerteAuto.innerHTML = B99.toFixed(3)
  let B102 = ((B41 - (B93/100)) * B96) / 100
  valorAbsCOVIDSurgidos.innerHTML = B102.toFixed(4)
  let B103 = B102 * B60 / 100
  valorAbsHospitalizacionesSurgidas.innerHTML = B103.toFixed(4)
  let B104 = B102 * B61 / 100
  valorAbsMuertesSurgidas.innerHTML = B104.toFixed(5)
  let B106 = ((B82-B22) * E24 / 1 * 0.01 / (B96 / 100)) + B22
  valorCO2InhalarInfectar.innerHTML = parseInt(B106)
}
