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
  var iconos = document.getElementsByClassName("ico-clase")
  var i;
  for (i = 0; i < iconos.length; i++) {
    iconos[i].classList.remove("active");
  }
  document.getElementById("icoClase").classList.add("active")
  var str = "<strong>Frecuencia respiratoria</strong><br /><br />"
  str += "Usando la mitad de la actividad sedentaria y ligera, 16-21 años por defecto. La frequencia respiratoria solo importa para personas susceptibles. Para estudiar la transmisión de los estudiantes al maestro, es necesario aumentar este valor en consecuencia.<br />"
  str += "Para estudiar la transmisión a niños pequeños, la frequencia respiratoria también debe ajustarse de acuerdo con la tabla Readme.<br /><br />"
  str += "<strong>Tasa de emisión Quanta</strong><br /><br />"
  str += "El valor actual es para una profesora hablando mucho.<br />"
  str += "Para los adolescentes, se usan los valores del archivo Readme, según la actividad.<br />"
  str += "Se cree que los niños pequeños son menos contagiosos y también respiran menos aire, por lo que quizás reduzca la Tasa de emisión Quanta en x5."
  document.getElementById("notas").innerHTML = str

  // parametros ambientales
  valorLargo.value = 15.3
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
  valorDeposicionSuperficie.value = 0.3
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

})
icoCoro.addEventListener('click', (event) => {
  var iconos = document.getElementsByClassName("ico-clase")
  var i;
  for (i = 0; i < iconos.length; i++) {
    iconos[i].classList.remove("active");
  }
  document.getElementById("icoCoro").classList.add("active")
  var str = "La probabilidad de muerte se establece más alta debido a la mayor edad de los miembros del coro (el 75% de los enfermos tenían >= 65 años). Sugerir cambiar al 1% para aplicaciones generales.<br /><br />"
  str += "Probabilidad de ser infeccioso calculada a partir de la prevalencia de la enfermedad en el condado en ese momento (7 casos * 2 para dar cuenta de los casos no detectados / 129000 habitantes del condado), ver Miller et al. 2020.<br /><br />"
  document.getElementById("notas").innerHTML = str

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
  valorDeposicionSuperficie.value = 0.3
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
})
icoEstadio.addEventListener('click', (event) => {
  var iconos = document.getElementsByClassName("ico-clase")
  var i;
  for (i = 0; i < iconos.length; i++) {
    iconos[i].classList.remove("active");
  }
  document.getElementById("icoEstadio").classList.add("active")
  var str = "Este es un caso para un estadio de fútbol, como se explica en este tweet: <a href='https://twitter.com/jljcolorado/status/1289254898131820550'>https://twitter.com/jljcolorado/status/1289254898131820550</a><br /><br />"
  str += "E basado en este articulo: <a href='https://www.sciencedirect.com/science/article/pii/S1352231013004494'>https://www.sciencedirect.com/science/article/pii/S1352231013004494</a><br /><br />"
  str += "Tener en cuenta que para el riesgo de infección, la calculadora solo estima el riesgo de infección a través del aire más allá de las proximidades. Dado que la distancia social no se mantendría en tal evento, esto será una gran subestimación."
  document.getElementById("notas").innerHTML = str

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
  valorDeposicionSuperficie.value = 0.3
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
})
icoMetro.addEventListener('click', (event) => {
  var iconos = document.getElementsByClassName("ico-clase")
  var i;
  for (i = 0; i < iconos.length; i++) {
    iconos[i].classList.remove("active");
  }
  document.getElementById("icoMetro").classList.add("active")
  var str = ""
  document.getElementById("notas").innerHTML = str

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
  valorDeposicionSuperficie.value = 0.3
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
})
icoSuper.addEventListener('click', (event) => {
  var iconos = document.getElementsByClassName("ico-clase")
  var i;
  for (i = 0; i < iconos.length; i++) {
    iconos[i].classList.remove("active");
  }
  document.getElementById("icoSuper").classList.add("active")
  var str = "Basado en un supermercado específico en Boulder, Colorado.<br /><br />"
  str +="Dimensiones horizontales estimadas de Google Maps (usando escala), altura usando imágenes de Google Street View (usando personas presentes para escala).<br /><br />"
  str +="Tasa de ventilación estimada a partir del estándar ASHRAE en la página Readme.<br /><br />"
  str +="Promedio diario típico de ocupación, basado en mis visitas al espacio antes de la pandemia (puede ser menor ahora).<br /><br />"
  str +="Otros parámetros estimados en el Readme para esta situación.<br /><br />"
  str +="Esto es para un trabajador de un supermercado. Para un cliente, se cambia el tiempo dedicado a la historia a, por ejemplo, 1 hora, 4 veces a la semana para simular 1 mes."
  document.getElementById("notas").innerHTML = str

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
  valorDeposicionSuperficie.value = 0.3
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
