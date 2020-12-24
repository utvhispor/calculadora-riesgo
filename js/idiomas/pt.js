const pt = {
    i18n_titulo: 'Calc. Riscos Aerossóis',
    i18n_descripcion: 'Selecciona o lugar/estância sobre a qual se quer calcular a transmissão de riscos por aerossóis da <b>COVID-19</b>',
    i18n_subdivision: 'Lugar / Estância',
    i18n_class: 'Classe',
    i18n_coro: 'Coro',
    i18n_estadio: 'Estádio',
    i18n_metro: 'Metro',
    i18n_super: 'Super',
    i18n_tasa_ventilacion_persona: 'Taxa de ventilação por pessoa',
    i18n_l_s_persona: 'L/s/pessoa',
        i18n_parametros: 'Parâmetros',
        i18n_ambientales: 'Ambientais',
        i18n_personas_actividad: 'Pessoas/Actividade',
        i18n_covid19: 'COVID-19',
    i18n_parametros_ambientales: 'Parâmetros ambientais',
    i18n_largo: 'Comprimento',
    i18n_ancho: 'Largura',
    i18n_alto: 'Altura',
    i18n_duracion_evento: 'Duração evento',
    i18n_n_rep_evento: 'Nº rep. evento',
    i18n_cambios_aire: 'Mudanças de ar',
    i18n_mostrar: 'Mostrar',
    i18n_ocultar: 'Ocultar',
    i18n_parametros_avanzados: 'Parâmetros avançados',
    i18n_presion: 'Pressão',
    i18n_temperatura: 'Temperatura',
    i18n_humedad: 'Humidade',
    i18n_co2_aire_libre: 'CO2 ao ar livre',
    i18n_tasa_descomposicon: 'Taxa descomposição',
    i18n_deposicon_superficies: 'Deposição superficies',
    i18n_medidas_control_adicionales: 'Medidas controlo adicionais',
    i18n_densidad_area_persona: 'Densidade <br /> (área/pessoa)',
    i18n_ft_persona: 'sq ft/pessoa',
    i18n_persona_m2: 'pessoa/m2',
    i18n_m3_persona: 'm3/pessoa',
    i18n_parametros_personas_actividad: 'Parâmetros Pessoas & Actividade',
    i18n_n_personas: 'Nº Pessoas',
    i18n_poblacion_inmune: 'População imune',
    i18n_frec_respiratoria: 'Frec. respiratória',
    i18n_exhalacion_cuantica: 'Exalação quántica',
    i18n_ef_mascarilla_exhalacion: 'Ef. máscara exalação',
    i18n_personas_con_mascarillas: 'Pessoas com máscaras',
    i18n_ef_mascarilla_inhalacion: 'Ef. máscara inalação',
    i18n_personas_infecciosas: 'Pessoas infecciosas',
    i18n_tasa_co2_por_persona: 'Taxa CO2 por pessoa',
    i18n_parametros_covid19: 'Parâmetros COVID-19',
    i18n_probabilidad_ser_infeccioso: 'Probabilidade de ser infeccioso',
    i18n_tasa_hospitalizacion: 'Taxa de hospitalização',
    i18n_indice_mortalidad: 'Índice de mortalidade',
        i18n_resultados: 'Resultados',
        i18n_condicional_evento: 'Condicional <br /> Evento',
        i18n_absoluto_evento: 'Absoluto <br /> Evento',
        i18n_absoluto_multievento: 'Absoluto <br /> Multiplas vezes',
    i18n_resultado_condicional_evento: 'Resultado condicional/evento',
    i18n_una_persona_un_evento: 'UMA PESSOA / UM EVENTO',
    i18n_prob_infeccion: 'Prob. infecção',
    i18n_prob_hospitalizacion: 'Prob. hospitalização',
    i18n_prob_muerte: 'Prob. morte',
    i18n_relacion_riesgo_muerte_automovil: 'Relação com o risco de morte por viagem em automóvel',
    i18n_todos_asistentes_evento: 'TODOS OS ASSISTENTES / UM EVENTO',
    i18n_casos_covid_surgidos: 'Casos COVID novos',
    i18n_hospitalizaciones_surgidas: 'Hospitalizações novas',
    i18n_muertes_surgidas: 'Novas mortes',
    i18n_resultado_absoluto_evento: 'Resultado absoluto/evento',
    i18n_co2_inhalar: 'CO2 para inalar 1 hora para infectar a 1% (ppm)',
    i18n_resultado_absoluto_multiples_veces: 'Resultado absoluto/multiplas vezes',
    i18n_una_persona_multi_evento: 'UMA PESSOA / MULTIPLAS VEZES',
    i18n_prob_infeccion_multi: 'Prob. infecção',
    i18n_prob_hospitalizacion_multi: 'Prob. hospitalização',
    i18n_prob_muerte_multi: 'Prob. morte',
    i18n_relacion_riesgo_muerte_automovil_multi: 'Relação com o risco de morte por viagem em automóvel',
    i18n_todos_asistentes_multi_evento: 'TODOS OS ASSISTENTES / MULTIPLAS VEZES',
    i18n_casos_covid_surgidos_multi: 'Casos COVID novos',
    i18n_hospitalizaciones_surgidas_multi: 'Hospitalizações novas',
    i18n_muertes_surgidas_multi: 'Novas mortes',
    i18n_resultado_absoluto_multi_evento: 'Resultado absoluto/multiplas vezes',
    i18n_notas_particulares: 'Notas particulares',
    i18n_mas_info: 'Mais Informação',
    i18n_notaClase: `
        <strong>Frequência respiratória</strong><br /><br />
        Usando a metade da actividade sedentária e ligeira, 16-21 anos por defeito. A frequência respiratória só importa para pessoas suscetíveis. Para estudar a transmissão dos estudantes ao mestre, é necessário aumentar o valor em consequência.<br />
        Para estudar a transmissão a crianças pequenas, a frequência respiratória também deve ajustar-se de acordo com a tabela do Readme.<br /><br />
        <strong>Taxa de emissão Quântica</strong><br /><br />
        O valor actual é para uma professora que fala muito.<br />
        Para os adolescentes, usam-se os valores do Readme, segundo a actividade.<br />
        Acredita-se que as crianças pequenas são menos contagiosas e também respiram menos ar. Assim, talvez se reduza a Taxa de emissão quântica x5.
      `,
    i18n_notaCoro: `
        A probabilidade de morte é mais alta devido à idade mais avançada dos membros do coro (75% dos doentes teríam >= 65 años). Sugerir mudar 1% para aplicações gerais.<br /><br />
        Probabilidade de ser infeccioso calculada a partir da prevalência da doença en no condado neste momento (7 casos * 2 para dar conta dos casos não detectados / 129000 habitantes do condado), ver Miller et al. 2020.<br /><br />
      `,
    i18n_notaEstadio: `
        Este é um caso para um estádio de futebol, como se explica neste tweet: <a href="https://twitter.com/jljcolorado/status/1289254898131820550">https://twitter.com/jljcolorado/status/1289254898131820550</a><br /><br />
        Esta baseado neste artigo: <a href="https://www.sciencedirect.com/science/article/pii/S1352231013004494">https://www.sciencedirect.com/science/article/pii/S1352231013004494</a><br /><br />
        Ter em conta que para o risco de infecção, a calculadora só estima o risco de infecção através do ar mais além das proximidades. Dado que a distância social não se mantería nesse evento, isto será uma grande subestimação.
      `,
    i18n_notaMetro: `<br /><br /><br />`,
    i18n_notaSuper: `
        Baseado num supermercado específico em Boulder, Colorado.<br /><br />
        Dimensões horizontais estimadas no Google Maps (usando escala), altura usando imagens do Google Street View (usando pessoas presentes para escala).<br /><br />
        Taxa de ventilação estimada a partir do standard ASHRAE no Readme.<br /><br />
        Média diária típica de ocupação, baseada nas visitas ao espaço antes da pandemia (pode ser menor agora).<br /><br />
        Outros parâmetros estimados no Readme para esta situação.<br /><br />
        Isto é para um trabalhador de um supermercado. Para um cliente, muda-se o tempo dedicado à historia a, por exemplo, 1 hora, 4 vezes à semana para simular 1 mês.
      `,
    i18n_infoAmbientales: `
        <strong>Comprimento</strong> - Pode introduzir "pés" ou "m" (se introduzir "m", mudar para"pés" não funciona).<br /><br />
        <strong>Largura</strong> - Pode introduzir "pés" ou "m" (se introduzir "m", mudar para"pés" não funciona).<br /><br />
        <strong>Altura</strong> - Pode introduzir "pés" ou "m" (se introduzir "m", mudar para"pés" não funciona).<br /><br />
        <strong>Duração evento</strong> - Valor para a sua situação de interesse.<br /><br />
        <strong>Nº rep. evento</strong> - Por exemplo, múltiplas reuniões de classe, múltiplos deslocamentos de transportes públicos, etc.<br /><br />
        <strong>Mudanças de ar</strong> - Valor em h-1: Readme: Igual ao ponto "mudanças de ar por hora". Valor em L/s/per para comparar com as pautas (por exemplo, ASHRAE 62.1).<br /><br />
        <strong>Pressão</strong> - Utilizado só para o cálculo de CO2.<br /><br />
        <strong>Temperatura</strong> - Use o <a href="https://www.google.com/search?q=fahrenheit+to+c+converter" target="blank">conversor web</a> se for necessário para converter Fahrenheit -> Celsius. Usa-se para o cálculo de CO2, eventualmente para a taxa de sobrevivência do vírus.<br /><br />
        <strong>Humidade</strong> - Ainda não se usa, mas eventualmente pode-se usar para a taxa de sobrevivência do vírus.<br /><br />
        <strong>CO2 ao ar livre</strong> - Ver Readme<br /><br />
        <strong>Taxa descomposição</strong> - Ver Readme: pode-se estimar para uma determinada T, RH, UV a partir do estimador DHS.<br /><br />
        <strong>Deposição superficies</strong> - Buonnano e col. (2020), Miller et al. (2020). Pode variar de 0,24 a 1,5 h-1, Segundo o intervalo de tamanho de partícula.<br /><br />
        <strong>Medidas controlo adicionais</strong> - Por exemplo filtro de recirculação de ar, filtro de ar HEPA, desinfecção UV, etc. Consulte as FAQ, o Readme de cálculo para filtro HEPA portátil.<br /><br />
        <strong>Taxa de perda total de primeira ordem</strong> - Soma de todas as taxas de primeira ordem.<br /><br />
        <strong>Taxa de ventilação por pessoa</strong> - Este é o valor da ventilação que realmente importa para a transmissão de doenças. Inclui medidas de controlo adicionais.<br /><br />
    `,
    i18n_infoPersonas: `
        <strong>Nº Pessoas</strong> - Valor para a sua situação de interesse.<br /><br />
        <strong>População imune</strong> - Dos relatórios de soroprevalência, dependerá de cada localização e hora, consulte o Readme.<br /><br />
        <strong>Pessoas susceptiveis</strong> - Valor para a sua situação de interesse.<br /><br />
        <strong>Freq. respiratória</strong> - Ver Readme. Varia muito segundo o nível de actividade.<br /><br />
        <strong>Exalação quántica</strong> - Ver Reame. Depende muito da actividade e também da pessoa. Este é o parâmetro mais incerto, provar com diferentes valores.<br /><br />
        <strong>Ef. máscara exalação</strong> - 0 se a pessoa infectada não leva máscara. Ver Readme.<br /><br />
        <strong>Pessoas con máscaras</strong> - Valor para a sua situação. Aplica-se a todo o mundo tanto para a emissão como para la inalação. Modificar fórmulas manualmente se for necessario.<br /><br />
        <strong>Ef. máscara inalação</strong> - Ver Readme.<br /><br />
        <strong>Pessoas infeciosas</strong> - Mantenha isto em um a menos do que realmente deseja para estudar casos diferentes; veja os resultados condicionais e absolutos.<br /><br />
        <strong>Taxa CO2 por pessoa</strong> - Ver Readme. Isto não afecta o cálculo da infecção, só o uso de CO2 como indicador, poderia ignorar-se.<br /><br />
        <strong>Taxa CO2 para todas as pessoas</strong> - O anterior multiplicado pelo número de pessoas e aplicando a lei dos gases ideais para converter a P&T ambiental.<br /><br />
    `,
    i18n_infoCovid: `
        <strong>Probabilidade de ser infeccioso</strong> - Parâmetro muito importante, específico para cada região e período de tempo. Para resultados ABSOLUTOS (provavelmente dada a prevalência a doença na população). Ver Readme.<br /><br />
        <strong>Taxa de hospitalização</strong> - De relatórios de noticias. Varia muito com a idade e os factores de risco.<br /><br />
        <strong>Índice de mortalidade</strong> - De relatórios de noticias. Varia muito com a idade e os factores de risco (1% típico - mais alto para pessoas idosas / em risco).<br /><br />
    `,
    i18n_infoResultadoCondicional: `
        <strong>Taxa de emissão líquida</strong> - Inclui o número de pessoas infectadas presentes.<br /><br />
        <strong>Concentração média quântica</strong> - Solução analítica do modelo de caixa. A equação (4) de Miller et al.(2020)<br /><br />
        <strong>Prob. infecção</strong> - Aplicando o modelo de infecção de Wells-Riley à quantidade de doses infecciosas inaladas. A equação (1) de Miller et al.(2020)<br /><br />
        <strong>Relação com o risco de morte em viagem de automóvel</strong> - Consulte as FAQ para obter uma estimação aproximada das mortes em viagem de automóvel num dia determinado.<br /><br />
        <strong>Novos casos COVID</strong> - Número de pessoas. Multiplica-se a probabilidade de uma pessoa pelo número de pessoas susceptiveis presentes.<br /><br />
        <strong>Novas hospitalizaciones</strong> - Número de pessoas.<br /><br />
        <strong>Novas mortes</strong> - Número de pessoas.<br /><br />
        <strong>Proporção média de mistura de CO2</strong> - Solução analítica do modelo de caixa. A equação (4) de Miller et al.(2020). Consulte as FAQ para conhecer as diferenças com a calculadora quântica.<br /><br />
    `,
    i18n_infoResultadoAbsolutoEvento: `
        <strong>Novos casos COVID</strong> - Deve interpretar-se estatisticamente. Este seria a média por exemplo. 100 repetições do evento num lugar determinado.<br /><br />
        <strong>Relação com o risco de morte em viagem de automóvel</strong> - Consulte as FAQ para obter uma estimação aproximada das mortes em viagem de automóvel num dia determinado.<br /><br />
        <strong>Novos casos COVID</strong> - Número de pessoas.<br /><br />
        <strong>Novas hospitalizaciones</strong> - Número de pessoas.<br /><br />
        <strong>Novas mortes</strong> - Número de pessoas.<br /><br />
        <strong>Proporção média de mistura de CO2</strong> - Solução analítica do modelo de caixa. A equação (4) de Miller et al.(2020). Consulte as FAQ para conhecer as diferenças com a calculadora quântica.<br /><br />
    `,
    i18n_infoResultadoAbsolutoEventoMultiples: `
        <strong>Relação com o risco de morte em viagem de automóvel</strong> - Consulte as FAQ para obter uma estimação aproximada das mortes em viagem de automóvel num dia determinado.<br /><br />
        <strong>Novos casos COVID</strong> - Número de pessoas.<br /><br />
        <strong>Novas hospitalizaciones</strong> - Número de pessoas.<br /><br />
        <strong>Novas mortes</strong> - Número de pessoas.<br /><br />
    `
}