const es = {
    i18n_titulo: 'Calc. Riesgos Aerosoles',
    i18n_descripcion: 'Selecciona el lugar/estancia sobre la que quiere calcular la transmisión de riesgos por aerosoles de la <b>COVID-19</b>',
    i18n_subdivision: 'Lugar / Estancia',
    i18n_class: 'Clase',
    i18n_coro: 'Coro',
    i18n_estadio: 'Estadio',
    i18n_metro: 'Metro',
    i18n_super: 'Super',
    i18n_tasa_ventilacion_persona: 'Tasa de ventilación por persona',
    i18n_l_s_persona: 'L/s/persona',
        i18n_parametros: 'Parámetros',
        i18n_ambientales: 'Ambientales',
        i18n_personas_actividad: 'Personas/Actividad',
        i18n_covid19: 'COVID-19',
    i18n_parametros_ambientales: 'Parametros ambientales',
    i18n_largo: 'Largo',
    i18n_ancho: 'Ancho',
    i18n_alto: 'Alto',
    i18n_duracion_evento: 'Duracion evento',
    i18n_n_rep_evento: 'Nº rep. evento',
    i18n_cambios_aire: 'Cambios de aire',
    i18n_mostrar: 'Mostrar',
    i18n_ocultar: 'Ocultar',
    i18n_parametros_avanzados: 'Parametros avanzados',
    i18n_presion: 'Presión',
    i18n_temperatura: 'Temperatura',
    i18n_humedad: 'Humedad',
    i18n_co2_aire_libre: 'CO2 al aire libre',
    i18n_tasa_descomposicon: 'Tasa descomposicón',
    i18n_deposicon_superficies: 'Deposicón superficies',
    i18n_medidas_control_adicionales: 'Medidas control adicionales',
    i18n_densidad_area_persona: 'Densidad <br /> (área/persona)',
    i18n_ft_persona: 'sq ft/persona',
    i18n_persona_m2: 'persona/m2',
    i18n_m3_persona: 'm3/persona',
    i18n_parametros_personas_actividad: 'Parametros Personas & Actividad',
    i18n_n_personas: 'Nº Personas',
    i18n_poblacion_inmune: 'Población inmune',
    i18n_frec_respiratoria: 'Frec. respiratoria',
    i18n_exhalacion_cuantica: 'Exhalación cuántica',
    i18n_ef_mascarilla_exhalacion: 'Ef. mascarilla exhalación',
    i18n_personas_con_mascarillas: 'Personas con mascarillas',
    i18n_ef_mascarilla_inhalacion: 'Ef. mascarilla inhalación',
    i18n_personas_infecciosas: 'Pers. infecciosas',
    i18n_tasa_co2_por_persona: 'Tasa CO2 por persona',
    i18n_parametros_covid19: 'Parametros COVID-19',
    i18n_probabilidad_ser_infeccioso: 'Probabilidad de ser infeccioso',
    i18n_tasa_hospitalizacion: 'Tasa de hospitalización',
    i18n_indice_mortalidad: 'Índice de mortalidad',
        i18n_resultados: 'Resultados',
        i18n_condicional_evento: 'Condicional <br /> Evento',
        i18n_absoluto_evento: 'Absoluto <br /> Evento',
        i18n_absoluto_multievento: 'Absoluto <br /> Multiples veces',
    i18n_resultado_condicional_evento: 'Resultado condicional/evento',
    i18n_una_persona_un_evento: 'UNA PERSONA / UN EVENTO',
    i18n_prob_infeccion: 'Prob. infección',
    i18n_prob_hospitalizacion: 'Prob. hospitalización',
    i18n_prob_muerte: 'Prob. muerte',
    i18n_relacion_riesgo_muerte_automovil: 'Relación con el riesgo de muerte por viaje en automóvil',
    i18n_todos_asistentes_evento: 'TODOS LOS ASISTENTES / UN EVENTO',
    i18n_casos_covid_surgidos: 'Casos COVID surgidos',
    i18n_hospitalizaciones_surgidas: 'Hospitalizaciones surgidas',
    i18n_muertes_surgidas: 'Muertes surgidas',
    i18n_resultado_absoluto_evento: 'Resultado absoluto/evento',
    i18n_co2_inhalar: 'CO2 para inhalar 1 hora para infectar al 1% (ppm)',
    i18n_resultado_absoluto_multiples_veces: 'Resultado absoluto/multiples veces',
    i18n_una_persona_multi_evento: 'UNA PERSONA / MULTI EVENTO',
    i18n_prob_infeccion_multi: 'Prob. infección',
    i18n_prob_hospitalizacion_multi: 'Prob. hospitalización',
    i18n_prob_muerte_multi: 'Prob. muerte',
    i18n_relacion_riesgo_muerte_automovil_multi: 'Relación con el riesgo de muerte por viaje en automóvil',
    i18n_todos_asistentes_multi_evento: 'TODOS LOS ASISTENTES / MULTI EVENTO',
    i18n_casos_covid_surgidos_multi: 'Casos COVID surgidos',
    i18n_hospitalizaciones_surgidas_multi: 'Hospitalizaciones surgidas',
    i18n_muertes_surgidas_multi: 'Muertes surgidas',
    i18n_resultado_absoluto_multi_evento: 'Resultado absoluto/evento',
    i18n_notas_particulares: 'Notas particulares',
    i18n_mas_info: 'Más Información',
    i18n_notaClase: `
        <strong>Frecuencia respiratoria</strong><br /><br />
        Usando la mitad de la actividad sedentaria y ligera, 16-21 años por defecto. La frequencia respiratoria solo importa para personas susceptibles. Para estudiar la transmisión de los estudiantes al maestro, es necesario aumentar este valor en consecuencia.<br />
        Para estudiar la transmisión a niños pequeños, la frequencia respiratoria también debe ajustarse de acuerdo con la tabla Readme.<br /><br />
        <strong>Tasa de emisión Quanta</strong><br /><br />
        El valor actual es para una profesora hablando mucho.<br />
        Para los adolescentes, se usan los valores del archivo Readme, según la actividad.<br />
        Se cree que los niños pequeños son menos contagiosos y también respiran menos aire, por lo que quizás reduzca la Tasa de emisión Quanta en x5.
      `,
    i18n_notaCoro: `
        La probabilidad de muerte se establece más alta debido a la mayor edad de los miembros del coro (el 75% de los enfermos tenían >= 65 años). Sugerir cambiar al 1% para aplicaciones generales.<br /><br />
        Probabilidad de ser infeccioso calculada a partir de la prevalencia de la enfermedad en el condado en ese momento (7 casos * 2 para dar cuenta de los casos no detectados / 129000 habitantes del condado), ver Miller et al. 2020.<br /><br />
      `,
    i18n_notaEstadio: `
        Este es un caso para un estadio de fútbol, como se explica en este tweet: <a href="https://twitter.com/jljcolorado/status/1289254898131820550">https://twitter.com/jljcolorado/status/1289254898131820550</a><br /><br />
        Está basado en este articulo: <a href="https://www.sciencedirect.com/science/article/pii/S1352231013004494">https://www.sciencedirect.com/science/article/pii/S1352231013004494</a><br /><br />
        Tener en cuenta que para el riesgo de infección, la calculadora solo estima el riesgo de infección a través del aire más allá de las proximidades. Dado que la distancia social no se mantendría en tal evento, esto será una gran subestimación.
      `,
    i18n_notaMetro: `<br /><br /><br />`,
    i18n_notaSuper: `
        Basado en un supermercado específico en Boulder, Colorado.<br /><br />
        Dimensiones horizontales estimadas de Google Maps (usando escala), altura usando imágenes de Google Street View (usando personas presentes para escala).<br /><br />
        Tasa de ventilación estimada a partir del estándar ASHRAE en la página Readme.<br /><br />
        Promedio diario típico de ocupación, basado en mis visitas al espacio antes de la pandemia (puede ser menor ahora).<br /><br />
        Otros parámetros estimados en el Readme para esta situación.<br /><br />
        Esto es para un trabajador de un supermercado. Para un cliente, se cambia el tiempo dedicado a la historia a, por ejemplo, 1 hora, 4 veces a la semana para simular 1 mes.
      `,
    i18n_infoAmbientales: `
        <strong>Largo</strong> - Puede ingresar como "pies" o como "m" (una vez ingresado como "m", cambiar en "pies" no funciona).<br /><br />
        <strong>Ancho</strong> - Puede ingresar como "pies" o como "m" (una vez ingresado como "m", cambiar en "pies" no funciona).<br /><br />
        <strong>Alto</strong> - Puede ingresar como "pies" o como "m" (una vez ingresado como "m", cambiar en "pies" no funciona).<br /><br />
        <strong>Duracion evento</strong> - Valor para su situación de interés.<br /><br />
        <strong>Nº rep. evento</strong> - Por ejemplo múltiples reuniones de clase, múltiples desplazamientos en transporte público, etc.<br /><br />
        <strong>Cambios de aire</strong> - Valor en h-1: Readme: Igual que "cambios de aire por hora". Valor en L/s/per para comparar con las pautas (por ejemplo, ASHRAE 62.1).<br /><br />
        <strong>Presión</strong> - Utilizado solo para el cálculo de CO2.<br /><br />
        <strong>Temperatura</strong> - Use el <a href="https://www.google.com/search?q=fahrenheit+to+c+converter" target="blank">convertidor web</a> si es necesario para convertir Fahrenheit -> Celsius. Se usa para el cálculo de CO2, eventualmente para la tasa de supervivencia del virus.<br /><br />
        <strong>Humedad</strong> - Aún no se usa, pero eventualmente se puede usar para la tasa de supervivencia del virus.<br /><br />
        <strong>CO2 al aire libre</strong> - Ver Readme<br /><br />
        <strong>Tasa descomposicón</strong> - Ver Readme: puede estimar para una determinada T, RH, UV a partir del estimador DHS.<br /><br />
        <strong>Deposicón superficies</strong> - Buonnano y col. (2020), Miller et al. (2020). Puede variar de 0,24 a 1,5 h-1, según el rango de tamaño de partícula.<br /><br />
        <strong>Medidas control adicionales</strong> - Por ejemplo filtrado de recirculacion de aire, filtro de aire HEPA, desinfección UV, etc. Consulte las preguntas frecuentes, el archivo Readme de calculo para filtro HEPA portátil.<br /><br />
        <strong>Tasa de pérdida total de primer orden</strong> - Suma de todas las tarifas de primer orden.<br /><br />
        <strong>Tasa de ventilación por persona</strong> - Este es el valor de la ventilación que realmente importa para la transmisión de enfermedades. Incluye medidas de control adicionales.<br /><br />
    `,
    i18n_infoPersonas: `
        <strong>Nº Personas</strong> - Valor para su situación de interés.<br /><br />
        <strong>Población inmune</strong> - De los informes de seroprevalencia, dependerá de cada ubicación y hora, consulte el archivo Readme.<br /><br />
        <strong>Personas susceptibles</strong> - Valor para su situación de interés.<br /><br />
        <strong>Frec. respiratoria</strong> - Ver Readme. Varía mucho según el nivel de actividad.<br /><br />
        <strong>Exhalación cuántica</strong> - Ver Reame. Depende mucho de la actividad, también como persona. Este es el parámetro más incierto, pruebar con diferentes valores.<br /><br />
        <strong>Ef. mascarilla exhalación</strong> - 0 si la persona infectada no lleva máscara. Ver Readme.<br /><br />
        <strong>Personas con mascarillas</strong> - Valor para su situación. Se aplica a todo el mundo tanto para la emisión como para la inhalación. Modificar fórmulas manualmente si es necesario.<br /><br />
        <strong>Ef. mascarilla inhalación</strong> - Ver Readme.<br /><br />
        <strong>Pers. infecciosas</strong> - Mantenga esto en uno a menos que realmente desee para estudiar casos diferentes; vea los resultados condicionales y absolutos.<br /><br />
        <strong>Tasa CO2 por persona</strong> - Ver Readme. Esto no afecta el cálculo de la infección, solo el uso de CO2 como indicador, se podría ignorar.<br /><br />
        <strong>Tasa CO2 para todas las personas</strong> - El anterior multiplicado por el número de personas y aplicando la ley de los gases ideales para convertir a P&T ambiental.<br /><br />
    `,
    i18n_infoCovid: `
        <strong>Probabilidad de ser infeccioso</strong> - Parámetro muy importante, específico para cada región y período de tiempo. Para resultados ABSOLUTOS (probablemente dada la prevalencia de la enfermedad en la población). Ver Readme.<br /><br />
        <strong>Tasa de hospitalización</strong> - De informes de noticias. Varía mucho con la edad y los factores de riesgo.<br /><br />
        <strong>Índice de mortalidad</strong> - De informes de noticias. Varía mucho con la edad y los factores de riesgo (1% típico - más alto para personas mayores / en riesgo).<br /><br />
    `,
    i18n_infoResultadoCondicional: `
        <strong>Tasa de emisión neta</strong> - Incluye el número de personas infectadas presentes.<br /><br />
        <strong>Concentración media Quanta</strong> - Solución analítica del modelo de caja. La ecuación (4) de Miller et al.(2020)<br /><br />
        <strong>Prob. infección</strong> - Aplicando el modelo de infección de Wells-Riley a la cantidad de dosis infecciosas inhaladas. La ecuación (1) de Miller et al.(2020)<br /><br />
        <strong>Relación con el riesgo de muerte por viaje en automóvil</strong> - Consulte las FAQ para obtener una estimación aproximada de las muertes por viaje en automóvil en un día determinado.<br /><br />
        <strong>Casos COVID surgidos</strong> - Número de personas. Multiplica la probabilidad de una persona por el número de personas susceptibles presentes.<br /><br />
        <strong>Hospitalizaciones surgidas</strong> - Número de personas.<br /><br />
        <strong>Muertes surgidas</strong> - Número de personas.<br /><br />
        <strong>Proporción media de mezcla de CO2</strong> - Solución analítica del modelo de caja. La ecuación (4) de Miller et al.(2020). Consulte las FAQ para conocer las diferencias con la calculadora Quanta.<br /><br />
    `,
    i18n_infoResultadoAbsolutoEvento: `
        <strong>Número de personas infecciosas presentes</strong> - Debe interpretarse estadísticamente. Este sería el promedio por ejemplo. 100 repeticiones del evento en un lugar determinado.<br /><br />
        <strong>Relación con el riesgo de muerte por viaje en automóvil</strong> - Consulte las FAQ para obtener una estimación aproximada de las muertes por viaje en automóvil en un día determinado.<br /><br />
        <strong>Casos COVID surgidos</strong> - Número de personas.<br /><br />
        <strong>Hospitalizaciones surgidas</strong> - Número de personas.<br /><br />
        <strong>Muertes surgidas</strong> - Número de personas.<br /><br />
        <strong>Proporción media de mezcla de CO2</strong> - Solución analítica del modelo de caja. La ecuación (4) de Miller et al.(2020). Consulte las FAQ para conocer las diferencias con la calculadora Quanta.<br /><br />
    `,
    i18n_infoResultadoAbsolutoEventoMultiples: `
        <strong>Relación con el riesgo de muerte por viaje en automóvil</strong> - Consulte las FAQ para obtener una estimación aproximada de las muertes por viaje en automóvil en un día determinado.<br /><br />
        <strong>Casos COVID surgidos</strong> - Número de personas.<br /><br />
        <strong>Hospitalizaciones surgidas</strong> - Número de personas.<br /><br />
        <strong>Muertes surgidas</strong> - Número de personas.<br /><br />
    `
}