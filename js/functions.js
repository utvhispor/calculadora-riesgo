let _idioma = ''

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
/* [FIN] Valores Parámetros Personas/Actividad */

/* Valores Parámetros COVID-19 */
const divHospitalizacion = document.getElementById('divHospitalizacion')
const divMortalidad = document.getElementById('divMortalidad')
const valorInfeccioso = document.getElementById('valorInfeccioso')
const valorHospitalizacion = document.getElementById('valorHospitalizacion')
const valorMortalidad = document.getElementById('valorMortalidad')
const avanzadosCOVID19 = document.getElementById('avanzadosCOVID19')
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

const modalInfo = document.getElementById('modalInfo')
const notas = document.getElementById('notas')
const contentModal = document.getElementById('contentModal')
const buttonClose = document.getElementById('buttonClose')

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

buttonClose.onclick = function() {
  modalInfo.style.display = "none";
}

document.querySelectorAll('.informacion').forEach(
  e => e.addEventListener('click', (e) => {
    let idioma = document.getElementById("idioma").value
    let i18n = (idioma === 'en') ? en : (idioma === 'pt') ? pt : es
    let info = `i18n_${e.target.id}`
    fContentModal(i18n[info])
  })
)

function fContentModal (val) {
  contentModal.innerHTML = val
  modalInfo.style.display = 'block'
}

function removeClassActive (val) {
  listIcoClase.map(item => item.classList.remove('active'))
  val.classList.add('active')
  showNota()
}

function showNota () {
  let active = document.querySelector('.ico-clase.active').id
  let nota = active.replace('ico', 'i18n_nota')
  let idioma = document.getElementById("idioma").value
  let i18n = (idioma === 'en') ? en : (idioma === 'pt') ? pt : es
  notas.innerHTML = i18n[nota]
}

icoClase.addEventListener('click', (event) => {
  removeClassActive(icoClase)

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

function cambiarIdioma() {
  let lang = new URLSearchParams(window.location.search)
  let langIsNull = lang.get('lang') !== null
  _idioma = langIsNull ? lang.get('lang') : navigator.language.substr(0,2)

  let callerNull = cambiarIdioma.caller === null
  let idioma = (callerNull) ? _idioma : document.getElementById("idioma").value
  let i18n = (idioma === 'en') ? en : (idioma === 'pt') ? pt : es
  document.getElementById("idioma").value = (idioma === 'en') ? 'en' : (idioma === 'pt') ? 'pt' : 'es'
  document.title = i18n['i18n_titulo']
  let textos = [...document.querySelectorAll(`[id^="i18n_"]`)]
  textos.forEach( (e, i) => {
    let texto = textos[i]
    textos[i].innerHTML = `${i18n[texto.id]}`;
  })
}

document.addEventListener('DOMContentLoaded', calculoTasaVentilacion(), cambiarIdioma(), showNota())
