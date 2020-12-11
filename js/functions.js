const icoClase = document.getElementById('icoClase')
const icoCoro = document.getElementById('icoCoro')
const icoEstadio = document.getElementById('icoEstadio')
const icoMetro = document.getElementById('icoMetro')
const icoSuper= document.getElementById('icoSuper')

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
const valorRepEvent = document.getElementById('valorRepEento')
const valorCambiosAire = document.getElementById('valorCambiosAire')
const valorPresion = document.getElementById('valorPresion')
const valorTemperatura = document.getElementById('valorTemperatura')
const valorHumeda = document.getElementById('valorHumedad')
const valorCO2AireLibre = document.getElementById('valorCO2AireLibre')
const valorTasaDescomposicion = document.getElementById('valorTasaDescomposicion')
const valorDeposicionSuperfic = document.getElementById('valorDeposicionSuperficie')
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

icoClase.addEventListener('click', (event) => {
  valorLargo.value = 9.2
})
icoCoro.addEventListener('click', (event) => {
  valorLargo.value = 9.2
})
icoEstadio.addEventListener('click', (event) => {
  valorLargo.value = 9.2
})
icoMetro.addEventListener('click', (event) => {
  valorLargo.value = 9.2
})
icoSuper.addEventListener('click', (event) => {
  valorLargo.value = 9.2
})

document.addEventListener('DOMContentLoaded', calculoTasaVentilacion())

function calculoTasaVentilacion() {
  let m2 = parseFloat(valorLargo.value) * parseFloat(valorAncho.value)
  let volumen = m2 * parseFloat(valorAlto.value)
  let calc1 = volumen * (parseFloat(valorCambiosAire.value) + parseFloat(valorMedidasAdicionale.value))
  let tasa =  calc1 * 1000 / 3600 / valorNPersonas.value
  valorTasaVentilacion.innerHTML = parseFloat(tasa).toFixed(2)
  let areaPersona = m2 / (0.305 * 0.305) / valorNPersonas.value
  let personaArea = valorNPersonas.value / m2
  let volumenPpersona = volumen / valorNPersonas.value
  valorAreaPersona.innerHTML = parseFloat(areaPersona).toFixed(0)
  valorPersonaArea.innerHTML = parseFloat(personaArea).toFixed(2)
  valorVolumenPersona.innerHTML = parseFloat(volumenPpersona).toFixed(2)
  // Calculamos el tamaño de la fuete para mostrar la tasa (ventilación * persona)
  let font = (tasa < 10) ? 34 : (tasa >= 10 && tasa < 100) ? 30 : (tasa >= 100 && tasa < 1000) ? 26 : 22
  valorTasaVentilacion.style.fontSize = `${font}px`
  // Calculamos Resultado condicional/evento
    //UNA PERSONA Y UN EVENTO
  let tasaEmision = parseFloat(valorExhalacion.value) * (1 - (parseFloat(valorMascExhalacion.value) / 100) * (parseFloat(valorPersonasMasc.value) / 100) ) * parseFloat(valorPersonasInfecciosas.value)
  let tasaPerdidaTotal = parseFloat(valorCambiosAire.value) + parseFloat(valorTasaDescomposicion.value) + parseFloat(valorDeposicionSuperfic.value) + parseFloat(valorMedidasAdicionale.value)
  let duracionEvento = parseFloat(valorDuracionEvento.value) / 60
  let concentracionMedia = tasaEmision / tasaPerdidaTotal / volumen * ( 1 - ( 1 / tasaPerdidaTotal / duracionEvento) * ( 1 - Math.exp(-tasaPerdidaTotal * duracionEvento)) )
  let inhalacionesPersona = concentracionMedia * parseFloat(valorRespiracion.value) * duracionEvento * ( 1 - (parseFloat(valorMascInhalacion.value) / 100) * (parseFloat(valorPersonasMasc.value) / 100) )
  let probInfeccion = parseFloat(inhalacionesPersona * 100)
  valorProbInfeccion.innerHTML = `${probInfeccion.toFixed(2)}%`
  let probHospitalizacion = (probInfeccion * parseFloat(valorHospitalizacion.value)) / 100
  valorProbHospitalizacion.innerHTML = `${probHospitalizacion.toFixed(2)}%`
  let probMuerte = (probInfeccion * parseFloat(valorMortalidad.value)) / 100
  valorProbMuerte.innerHTML = `${probMuerte.toFixed(3)}%`
  let relMuerteAuto = probMuerte / 0.00006
  valorRelMuerteAuto.innerHTML = parseInt(relMuerteAuto)
    //TODOS LOS ASISTENTES / UN EVENTO
  let personaSusceptible = ((valorNPersonas.value - valorPersonasInfecciosas.value) * (1 - valorInmune.value)) / 100
  let covidSurgidos = (personaSusceptible * probInfeccion)
  valorCOVIDSurgidos.innerHTML = `${covidSurgidos.toFixed(2)}%`
  let hospitalizacionesSurgidas = (covidSurgidos * parseFloat(valorHospitalizacion.value)) / 100
  valorHospitalizacionesSurgidas.innerHTML = `${(hospitalizacionesSurgidas).toFixed(2)}%`
  let muertesSugeridas = (covidSurgidos * parseFloat(valorMortalidad.value)) / 100
  valorMuertesSurgidas.innerHTML = `${(muertesSugeridas).toFixed(4)}%`
}
