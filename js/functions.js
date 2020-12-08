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

  console.log(valorTasaVentilacion.style.fontSize)
}
