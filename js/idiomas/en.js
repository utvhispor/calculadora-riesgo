const en = {
    i18n_titulo: 'Aerosol Risks Calculator',
    i18n_descripcion: 'Select the place/room on which you want to calculate the risk transmission by aerosols of <b> COVID-19 </b>',
    i18n_subdivision: 'Place / Resort',
    i18n_class: 'Class',
    i18n_coro: 'Master-Choir',
    i18n_estadio: 'Stadium',
    i18n_metro: 'Subway',
    i18n_super: 'Supermarket',
    i18n_tasa_ventilacion_persona: 'Ventilation rate per person',
    i18n_l_s_persona: 'L/s/person',
        i18n_parametros: 'Parameters',
        i18n_ambientales: 'Environmental',
        i18n_personas_actividad: 'People/Activity',
        i18n_covid19: 'COVID-19',
    i18n_parametros_ambientales: 'Environmental Parameters',
    i18n_largo: 'Lenght',
    i18n_ancho: 'Width',
    i18n_alto: 'Height',
    i18n_duracion_evento: 'Duration of event',
    i18n_n_rep_evento: 'Number rep. event',
    i18n_cambios_aire: 'Ventilation w/ outside air',
    i18n_mostrar: 'Show',
    i18n_ocultar: 'Hide',
    i18n_parametros_avanzados: 'Advanced Parameters',
    i18n_presion: 'Presure',
    i18n_temperatura: 'Temperature',
    i18n_humedad: 'Humidity',
    i18n_co2_aire_libre: 'Background CO2 Outdoors',
    i18n_tasa_descomposicon: 'Decay rate of the virus',
    i18n_deposicon_superficies: 'Deposition to surfaces',
    i18n_medidas_control_adicionales: 'Additional control measures',
    i18n_densidad_area_persona: 'Density <br /> (area/person)',
    i18n_ft_persona: 'sq ft/person',
    i18n_persona_m2: 'person/m2',
    i18n_m3_persona: 'm3/person',
    i18n_parametros_personas_actividad: 'Parameters related to people and activity in the room',
    i18n_n_personas: 'Number people',
    i18n_poblacion_inmune: 'Inmune population',
    i18n_frec_respiratoria: 'Breathing rate',
    i18n_exhalacion_cuantica: 'Quanta exhalation rate',
    i18n_ef_mascarilla_exhalacion: 'Exhalation mask efficiency',
    i18n_personas_con_mascarillas: 'Fraction of people w/ masks',
    i18n_ef_mascarilla_inhalacion: 'Inhalation mask efficiency',
    i18n_personas_infecciosas: 'Infective people',
    i18n_tasa_co2_por_persona: 'CO2 emission rate (1 person)',
    i18n_parametros_covid19: 'COVID-19 Parameters',
    i18n_probabilidad_ser_infeccioso: 'Probability of being infective',
    i18n_tasa_hospitalizacion: 'Hospitalization rate',
    i18n_indice_mortalidad: 'Death rate',
        i18n_resultados: 'Results',
        i18n_condicional_evento: 'Conditional <br /> Event',
        i18n_absoluto_evento: 'Absolute <br /> Event',
        i18n_absoluto_multievento: 'Absolute <br /> Multiple times',
    i18n_resultado_condicional_evento: 'Conditional result for one event',
    i18n_una_persona_un_evento: 'ONE PERSON / ONE EVENT',
    i18n_prob_infeccion: 'Probability of infection',
    i18n_prob_hospitalizacion: 'Probability of hospitalization',
    i18n_prob_muerte: 'Probability of death',
    i18n_relacion_riesgo_muerte_automovil: 'Relationship with the risk of death due to car travel',
    i18n_todos_asistentes_evento: 'ALL ASSISTANTS / ONE EVENT',
    i18n_casos_covid_surgidos: 'COVID cases arising',
    i18n_hospitalizaciones_surgidas: 'Hospitalizations arising',
    i18n_muertes_surgidas: 'Deaths arising',
    i18n_resultado_absoluto_evento: 'Result absolute/event',
    i18n_co2_inhalar: 'CO2 to inhale 1 hour to infect 1% (ppm)',
    i18n_resultado_absoluto_multiples_veces: 'Result absolute/multiple times',
    i18n_una_persona_multi_evento: 'ONE PERSON / MULTIPLE TIMES',
    i18n_prob_infeccion_multi: 'Probability of infection',
    i18n_prob_hospitalizacion_multi: 'Probability of hospitalization',
    i18n_prob_muerte_multi: 'Probability of death',
    i18n_relacion_riesgo_muerte_automovil_multi: 'Relationship with the risk of death due to car travel',
    i18n_todos_asistentes_multi_evento: 'ALL ASSISTANTS / MULTIPLE TIMES',
    i18n_casos_covid_surgidos_multi: 'COVID cases arising',
    i18n_hospitalizaciones_surgidas_multi: 'Hospitalizations arising',
    i18n_muertes_surgidas_multi: 'Deaths arising',
    i18n_resultado_absoluto_multi_evento: 'Result absolute/multiple times ',
    i18n_notas_particulares: 'Particular notes',
    i18n_mas_info: 'More Information',
    i18n_notaClase: `
        <strong>Breathing rate</strong><br /><br />
        Using 1/2 of sedentary and light activity, 16-21 yrs old as default. BR only matters for susceptible. To study transmission from students to teacher, need to increase this value accordingly.<br />
        To study transmission to young children, BR also needs to be adjusted according to Readme table.<br /><br />
        <strong>Quanta emission rate</strong><br /><br />
        Current value is for a teacher talking a lot.<br />
        For teenagers, use values from readme, according to activity.<br />
        Small children are thought to be less contagious, and also breathe less air, so perhaps reduce the quanta emission rate by x5.
      `,
    i18n_notaCoro: `
        Probability of death is set higher because of the higher age of choir members (75% of those ill were >= 65 yr old). Suggest changing to 1% for general applications.<br /><br />
        Probability of being infective calculated from prevalence of the disease in the county at the time (7 cases * 2 to account for undetected cases / 129000 population of county), see Miller et al. 2020.<br /><br />
      `,
    i18n_notaEstadio: `
        This is a case for a soccer stadium, as discussed in this tweet: <a href="https://twitter.com/jljcolorado/status/1289254898131820550">https://twitter.com/jljcolorado/status/1289254898131820550</a><br /><br />
        And based on this paper: <a href="https://www.sciencedirect.com/science/article/pii/S1352231013004494">https://www.sciencedirect.com/science/article/pii/S1352231013004494</a><br /><br />
        Note that for the infection risk, the calculator only estimates the infection risk through the air beyond close proximity. Since social distance would not be maintained in such an event, this will be a large underestimate.
      `,
    i18n_notaMetro: `<br /><br /><br />`,
    i18n_notaSuper: `
        Based on a specific supermarket in Boulder, Colorado.<br /><br />
        Horizontal dimensions estimated from Google Maps (using scale), height using pictures from Google Street View (using people present for scale).<br /><br />
        Ventilation rate estimated from ASHRAE standard in Readme page.<br /><br />
        Occupancy typical daily average, based on my visits to the space pre-pandemic (may be lower now).<br /><br />
        Other parameters estimated per Readme for this situation.<br /><br />
        This is for a supermarket worker. For a customer, change the time spent in the story to e.g. 1 hr, 4 times a week to simulate 1 month.
      `,
    i18n_infoAmbientales: `
        <strong>Length</strong> - Can enter as ft or as m (once entered as m, changing in ft does not work).<br /><br />
        <strong>Width</strong> - Can enter as ft or as m (once entered as m, changing in ft does not work).<br /><br />
        <strong>Height</strong> - Can enter as ft or as m (once entered as m, changing in ft does not work).<br /><br />
        <strong>Duration of event</strong> - Value for your situation of interest.<br /><br />
        <strong>Number of repetitions of event</strong> - For e.g. multiple class meetings, multiple commutes in public transportation etc.<br /><br />
        <strong>Ventilation w/ outside air</strong> - Value in h-1: Readme: Same as "air changes per hour". Value in L/s/per to compare to guidelines (e.g. ASHRAE 62.1).<br /><br />
        <strong>Pressure</strong> - Used only for CO2 calculation.<br /><br />
        <strong>Temperature</strong> - Use <a href="https://www.google.com/search?q=fahrenheit+to+c+converter" target="blank">convertidor web</a> if needed for F --> C. Used for CO2 calculation, eventually for survival rate of virus.<br /><br />
        <strong>Relative Humidity</strong> - Not yet used, but may eventually be used for survival rate of virus.<br /><br />
        <strong>Background CO2 Outdoors</strong> - See Readme<br /><br />
        <strong>Decay rate of the virus</strong> - See Readme: can estimate for a given T, RH, UV from DHS estimator.<br /><br />
        <strong>Deposition to surfaces</strong> - Buonnano et al. (2020), Miller et al. (2020). Could vary 0.24-1.5 h-1, depending on particle size range.<br /><br />
        <strong>Additional control measures</strong> - E.g. filtering of recirc. air, HEPA air cleaner, UV disinfection, etc. See FAQs, Readme for calc for portable HEPA filter.<br /><br />
        <strong>Total first order loss rate</strong> - Sum of all the first-order rates.<br /><br />
        <strong>Ventilation rate per person</strong> - This is the value of ventilation that really matters for disease transmission. Includes additional control measures.<br /><br />
    `,
    i18n_infoPersonas: `
        <strong>Total N people present</strong> - Value for your situation of interest.<br /><br />
        <strong>Fraction of population inmune</strong> - From seroprevalence reports, will depend on each location and time, see Readme.<br /><br />
        <strong>Susceptible people</strong> - Value for your situation of interest.<br /><br />
        <strong>Breathing rate (susceptibles)</strong> - See Readme - varies a lot with activity level.<br /><br />
        <strong>Quanta exhalation rate (infected)</strong> - See Readme. Depends strongly on activity, also like person.This is the most uncertain parameter, try different values.<br /><br />
        <strong>Exhalation mask efficiency</strong> - 0 if infective person is not wearing a mask. See Readme.<br /><br />
        <strong>Fraction of people w/ masks</strong> - Value for your situation. It is applied to everybody for both emission & inhalation. Modify formulas manually if needed.<br /><br />
        <strong>Inhalation mask efficiency</strong> - See Readme.<br /><br />
        <strong>Infective people</strong> - Keep this at one unless you really want to study a different cases - see conditional and absolute results.<br /><br />
        <strong>CO2 emission rate (1 person)</strong> - See Readme. This does not affect infection calculation, only use of CO2 as indicator, could ignore.<br /><br />
        <strong>CO2 emission rate (all persons)</strong> - Previous, multiplied by number of people, and applying ideal gas law to convert to ambient P & T.<br /><br />
    `,
    i18n_infoCovid: `
        <strong>Probability of being infective</strong> - Very important parameter, specific for each region and time period. For ABSOLUTE results (prob. given prevalence of disease in the population). See Readme.<br /><br />
        <strong>Hospitalization rate</strong> - From news reports. Varies strongly with age and risk factors.<br /><br />
        <strong>Death rate</strong> - From news reports. Varies strongly with age and risk factors (1% typical - Higher for older / at risk people).<br /><br />
    `,
    i18n_infoResultadoCondicional: `
        <strong>Net emission rate</strong> - Includes the number of infective people present.<br /><br />
        <strong>Avg Quanta Concentration</strong> - Analytical solution of the box model. Equation (4) in Miller et al. (2020)<br /><br />
        <strong>Probability of infection (1 person)</strong> - Applying Wells-Riley infection model to the amount of infectious doses inhaled. Equation (1) in Miller et al. (2020)<br /><br />
        <strong>Ratio to risk of car travel death</strong> - See FAQs for rough estimate of death traveling by car on a given day.<br /><br />
        <strong>Number of COVID cases arising</strong> - Number of people. Multiplies probability of one person, times the number of susceptible people present.<br /><br />
        <strong>N of hospitalizations arising</strong> - Number of people.<br /><br />
        <strong>N of deaths arising</strong> - Number of people.<br /><br />
        <strong>Avg CO2 mixing ratio</strong> - Analytical solution of the box model. Equation (4) in Miller et al. (2020). See FAQ page for differences w/ quanta calc.<br /><br />
    `,
    i18n_infoResultadoAbsolutoEvento: `
        <strong>N of infective people present</strong> - It has to be interpreted statistically. This would be the average over e.g. 100 repetitions of the event in a given location.<br /><br />
        <strong>Ratio to risk of car travel death</strong> - See FAQs for rough estimate of death traveling by car on a given day.<br /><br />
        <strong>Number of COVID cases arising</strong> - Number of people.<br /><br />
        <strong>N of hospitalizations arising</strong> - Number of people.<br /><br />
        <strong>N of deaths arising</strong> - Number of people.<br /><br />
        <strong>Avg CO2 mixing ratio</strong> - Analytical solution of the box model. Equation (4) in Miller et al. (2020). See FAQ page for differences w/ quanta calc.<br /><br />
    `,
    i18n_infoResultadoAbsolutoEventoMultiples: `
        <strong>Ratio to risk of car travel death</strong> - See FAQs for rough estimate of death traveling by car on a given day.<br /><br />
        <strong>Number of COVID cases arising</strong> - Number of people.<br /><br />
        <strong>N of hospitalizations arising</strong> - Number of people.<br /><br />
        <strong>N of deaths arising</strong> - Number of people.<br /><br />
    `
}