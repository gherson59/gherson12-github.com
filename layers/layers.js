var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_NASCA_OFICIAL_OTASSVIAS_1 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSVIAS_1 = format_NASCA_OFICIAL_OTASSVIAS_1.readFeatures(json_NASCA_OFICIAL_OTASSVIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSVIAS_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSVIAS_1.addFeatures(features_NASCA_OFICIAL_OTASSVIAS_1);var lyr_NASCA_OFICIAL_OTASSVIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSVIAS_1, 
                style: style_NASCA_OFICIAL_OTASSVIAS_1,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSVIAS_1.png" /> NASCA_OFICIAL_OTASS VIAS'
            });var format_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2 = format_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.readFeatures(json_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.addFeatures(features_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2);var lyr_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2, 
                style: style_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.png" /> NASCA_OFICIAL_OTASS PUNTOS_DE_INTERES'
            });var format_NASCA_OFICIAL_OTASSLOTES_3 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSLOTES_3 = format_NASCA_OFICIAL_OTASSLOTES_3.readFeatures(json_NASCA_OFICIAL_OTASSLOTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSLOTES_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSLOTES_3.addFeatures(features_NASCA_OFICIAL_OTASSLOTES_3);var lyr_NASCA_OFICIAL_OTASSLOTES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSLOTES_3, 
                style: style_NASCA_OFICIAL_OTASSLOTES_3,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSLOTES_3.png" /> NASCA_OFICIAL_OTASS LOTES'
            });var format_NASCA_OFICIAL_OTASSMANZANAS_4 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSMANZANAS_4 = format_NASCA_OFICIAL_OTASSMANZANAS_4.readFeatures(json_NASCA_OFICIAL_OTASSMANZANAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSMANZANAS_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSMANZANAS_4.addFeatures(features_NASCA_OFICIAL_OTASSMANZANAS_4);var lyr_NASCA_OFICIAL_OTASSMANZANAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSMANZANAS_4, 
                style: style_NASCA_OFICIAL_OTASSMANZANAS_4,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSMANZANAS_4.png" /> NASCA_OFICIAL_OTASS MANZANAS'
            });var format_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5 = format_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.readFeatures(json_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.addFeatures(features_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5);var lyr_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5, 
                style: style_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.png" /> NASCA_OFICIAL_OTASS LIMITES_ADMINISTRATIVOS'
            });var format_NASCA_OFICIAL_OTASSHIDROGRAFIA_6 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSHIDROGRAFIA_6 = format_NASCA_OFICIAL_OTASSHIDROGRAFIA_6.readFeatures(json_NASCA_OFICIAL_OTASSHIDROGRAFIA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSHIDROGRAFIA_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSHIDROGRAFIA_6.addFeatures(features_NASCA_OFICIAL_OTASSHIDROGRAFIA_6);var lyr_NASCA_OFICIAL_OTASSHIDROGRAFIA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSHIDROGRAFIA_6, 
                style: style_NASCA_OFICIAL_OTASSHIDROGRAFIA_6,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSHIDROGRAFIA_6.png" /> NASCA_OFICIAL_OTASS HIDROGRAFIA'
            });var format_NASCA_OFICIAL_OTASSHAB_URBANAS_7 = new ol.format.GeoJSON();
var features_NASCA_OFICIAL_OTASSHAB_URBANAS_7 = format_NASCA_OFICIAL_OTASSHAB_URBANAS_7.readFeatures(json_NASCA_OFICIAL_OTASSHAB_URBANAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASCA_OFICIAL_OTASSHAB_URBANAS_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NASCA_OFICIAL_OTASSHAB_URBANAS_7.addFeatures(features_NASCA_OFICIAL_OTASSHAB_URBANAS_7);var lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NASCA_OFICIAL_OTASSHAB_URBANAS_7, 
                style: style_NASCA_OFICIAL_OTASSHAB_URBANAS_7,
                title: '<img src="styles/legend/NASCA_OFICIAL_OTASSHAB_URBANAS_7.png" /> NASCA_OFICIAL_OTASS HAB_URBANAS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NASCA_OFICIAL_OTASSVIAS_1.setVisible(true);lyr_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.setVisible(true);lyr_NASCA_OFICIAL_OTASSLOTES_3.setVisible(true);lyr_NASCA_OFICIAL_OTASSMANZANAS_4.setVisible(true);lyr_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.setVisible(true);lyr_NASCA_OFICIAL_OTASSHIDROGRAFIA_6.setVisible(true);lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NASCA_OFICIAL_OTASSVIAS_1,lyr_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2,lyr_NASCA_OFICIAL_OTASSLOTES_3,lyr_NASCA_OFICIAL_OTASSMANZANAS_4,lyr_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5,lyr_NASCA_OFICIAL_OTASSHIDROGRAFIA_6,lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7];
lyr_NASCA_OFICIAL_OTASSVIAS_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_12': 'objectid_12', 'objectid': 'objectid', 'nomb_depar': 'nomb_depar', 'nomb_prov': 'nomb_prov', 'cod_via': 'cod_via', 'tipo_via': 'tipo_via', 'nomb_via': 'nomb_via', 'nomb_via_2': 'nomb_via_2', 'obsv': 'obsv', 'shape_leng': 'shape_leng', 'objectid_1': 'objectid_1', 'shape_length': 'shape_length', });
lyr_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'cod_lugar': 'cod_lugar', 'nomb_lugar': 'nomb_lugar', 'tipo': 'tipo', 'fuente': 'fuente', 'obs': 'obs', });
lyr_NASCA_OFICIAL_OTASSLOTES_3.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'nomb_depar': 'nomb_depar', 'nomb_prov': 'nomb_prov', 'nomb_dist': 'nomb_dist', 'ubigeo_ren': 'ubigeo_ren', 'cod_hab_ur': 'cod_hab_ur', 'tip_hab_ur': 'tip_hab_ur', 'nomb_hab_u': 'nomb_hab_u', 'nomb_hab_1': 'nomb_hab_1', 'nomb_etapa': 'nomb_etapa', 'nomb_secto': 'nomb_secto', 'nomb_zona': 'nomb_zona', 'cod_mz': 'cod_mz', 'nomb_mz': 'nomb_mz', 'nomb_mz_2': 'nomb_mz_2', 'cod_lote': 'cod_lote', 'num_lote': 'num_lote', 'rang_lote': 'rang_lote', 'cod_via': 'cod_via', 'tipo_via': 'tipo_via', 'nomb_via': 'nomb_via', 'num_via': 'num_via', 'rang_num': 'rang_num', 'num_cuadra': 'num_cuadra', 'nomb_via_f': 'nomb_via_f', 'num_via_fr': 'num_via_fr', 'num_cuad_f': 'num_cuad_f', 'obsv': 'obsv', 'shape_leng': 'shape_leng', 'encargado': 'encargado', 'fuente': 'fuente', 'shape_length': 'shape_length', 'shape_area': 'shape_area', });
lyr_NASCA_OFICIAL_OTASSMANZANAS_4.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nomb_depart': 'nomb_depart', 'nomb_prov': 'nomb_prov', 'nomb_dist': 'nomb_dist', 'ubigeo_reniec': 'ubigeo_reniec', 'cod_hab_urb': 'cod_hab_urb', 'tip_hab_urb': 'tip_hab_urb', 'nomb_hab_urb': 'nomb_hab_urb', 'nomb_hab_urb_2': 'nomb_hab_urb_2', 'de_etapa': 'de_etapa', 'de_sector': 'de_sector', 'de_zona': 'de_zona', 'cod_mz': 'cod_mz', 'nomb_mz': 'nomb_mz', 'nomb_mz_2': 'nomb_mz_2', 'fuente_mz': 'fuente_mz', 'obsv': 'obsv', 'shape_length': 'shape_length', 'shape_area': 'shape_area', });
lyr_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nomb_depart': 'nomb_depart', 'nomb_prov': 'nomb_prov', 'nomb_dist': 'nomb_dist', 'ubigeo_reniec': 'ubigeo_reniec', 'fuente': 'fuente', 'fecha': 'fecha', 'obsv': 'obsv', 'shape_length': 'shape_length', 'shape_area': 'shape_area', });
lyr_NASCA_OFICIAL_OTASSHIDROGRAFIA_6.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'cod_hidro': 'cod_hidro', 'tip_hidro': 'tip_hidro', 'nomb_hidro': 'nomb_hidro', 'fuente_hid': 'fuente_hid', 'obsv': 'obsv', 'shape_length': 'shape_length', });
lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nomb_depart': 'nomb_depart', 'nomb_prov': 'nomb_prov', 'nomb_dist': 'nomb_dist', 'ubigeo_reniec': 'ubigeo_reniec', 'cod_hab_urb': 'cod_hab_urb', 'tip_hab_urb': 'tip_hab_urb', 'nomb_hab_urb': 'nomb_hab_urb', 'nomb_hab_urb_2': 'nomb_hab_urb_2', 'de_etapa': 'de_etapa', 'de_sector': 'de_sector', 'de_zona': 'de_zona', 'fuente_ha_urb': 'fuente_ha_urb', 'obsv': 'obsv', 'shape_length': 'shape_length', 'shape_area': 'shape_area', });
lyr_NASCA_OFICIAL_OTASSVIAS_1.set('fieldImages', {'qc_id': '', 'objectid_12': '', 'objectid': '', 'nomb_depar': '', 'nomb_prov': '', 'cod_via': '', 'tipo_via': '', 'nomb_via': '', 'nomb_via_2': '', 'obsv': '', 'shape_leng': '', 'objectid_1': '', 'shape_length': '', });
lyr_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.set('fieldImages', {'qc_id': '', 'objectid': '', 'cod_lugar': '', 'nomb_lugar': '', 'tipo': '', 'fuente': '', 'obs': '', });
lyr_NASCA_OFICIAL_OTASSLOTES_3.set('fieldImages', {'qc_id': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'Range', 'nomb_depar': 'TextEdit', 'nomb_prov': 'TextEdit', 'nomb_dist': 'TextEdit', 'ubigeo_ren': 'TextEdit', 'cod_hab_ur': 'TextEdit', 'tip_hab_ur': 'TextEdit', 'nomb_hab_u': 'TextEdit', 'nomb_hab_1': 'TextEdit', 'nomb_etapa': 'Range', 'nomb_secto': 'TextEdit', 'nomb_zona': 'TextEdit', 'cod_mz': 'TextEdit', 'nomb_mz': 'TextEdit', 'nomb_mz_2': 'TextEdit', 'cod_lote': 'TextEdit', 'num_lote': 'TextEdit', 'rang_lote': 'TextEdit', 'cod_via': 'TextEdit', 'tipo_via': 'TextEdit', 'nomb_via': 'TextEdit', 'num_via': 'Range', 'rang_num': 'TextEdit', 'num_cuadra': 'Range', 'nomb_via_f': 'TextEdit', 'num_via_fr': 'Range', 'num_cuad_f': 'Range', 'obsv': 'TextEdit', 'shape_leng': 'TextEdit', 'encargado': 'TextEdit', 'fuente': 'TextEdit', 'shape_length': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_NASCA_OFICIAL_OTASSMANZANAS_4.set('fieldImages', {'qc_id': '', 'objectid': '', 'nomb_depart': '', 'nomb_prov': '', 'nomb_dist': '', 'ubigeo_reniec': '', 'cod_hab_urb': '', 'tip_hab_urb': '', 'nomb_hab_urb': '', 'nomb_hab_urb_2': '', 'de_etapa': '', 'de_sector': '', 'de_zona': '', 'cod_mz': '', 'nomb_mz': '', 'nomb_mz_2': '', 'fuente_mz': '', 'obsv': '', 'shape_length': '', 'shape_area': '', });
lyr_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.set('fieldImages', {'qc_id': '', 'objectid': '', 'nomb_depart': '', 'nomb_prov': '', 'nomb_dist': '', 'ubigeo_reniec': '', 'fuente': '', 'fecha': '', 'obsv': '', 'shape_length': '', 'shape_area': '', });
lyr_NASCA_OFICIAL_OTASSHIDROGRAFIA_6.set('fieldImages', {'qc_id': '', 'objectid': '', 'cod_hidro': '', 'tip_hidro': '', 'nomb_hidro': '', 'fuente_hid': '', 'obsv': '', 'shape_length': '', });
lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7.set('fieldImages', {'qc_id': '', 'objectid': '', 'nomb_depart': '', 'nomb_prov': '', 'nomb_dist': '', 'ubigeo_reniec': '', 'cod_hab_urb': '', 'tip_hab_urb': '', 'nomb_hab_urb': '', 'nomb_hab_urb_2': '', 'de_etapa': '', 'de_sector': '', 'de_zona': '', 'fuente_ha_urb': '', 'obsv': '', 'shape_length': '', 'shape_area': '', });
lyr_NASCA_OFICIAL_OTASSVIAS_1.set('fieldLabels', {'qc_id': 'no label', 'objectid_12': 'no label', 'objectid': 'no label', 'nomb_depar': 'no label', 'nomb_prov': 'no label', 'cod_via': 'no label', 'tipo_via': 'no label', 'nomb_via': 'no label', 'nomb_via_2': 'no label', 'obsv': 'no label', 'shape_leng': 'no label', 'objectid_1': 'no label', 'shape_length': 'no label', });
lyr_NASCA_OFICIAL_OTASSPUNTOS_DE_INTERES_2.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'cod_lugar': 'no label', 'nomb_lugar': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'obs': 'no label', });
lyr_NASCA_OFICIAL_OTASSLOTES_3.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'nomb_depar': 'no label', 'nomb_prov': 'no label', 'nomb_dist': 'no label', 'ubigeo_ren': 'no label', 'cod_hab_ur': 'no label', 'tip_hab_ur': 'no label', 'nomb_hab_u': 'no label', 'nomb_hab_1': 'no label', 'nomb_etapa': 'no label', 'nomb_secto': 'no label', 'nomb_zona': 'no label', 'cod_mz': 'no label', 'nomb_mz': 'no label', 'nomb_mz_2': 'no label', 'cod_lote': 'no label', 'num_lote': 'no label', 'rang_lote': 'no label', 'cod_via': 'no label', 'tipo_via': 'no label', 'nomb_via': 'no label', 'num_via': 'no label', 'rang_num': 'no label', 'num_cuadra': 'no label', 'nomb_via_f': 'no label', 'num_via_fr': 'no label', 'num_cuad_f': 'no label', 'obsv': 'no label', 'shape_leng': 'no label', 'encargado': 'no label', 'fuente': 'no label', 'shape_length': 'no label', 'shape_area': 'no label', });
lyr_NASCA_OFICIAL_OTASSMANZANAS_4.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nomb_depart': 'no label', 'nomb_prov': 'no label', 'nomb_dist': 'no label', 'ubigeo_reniec': 'no label', 'cod_hab_urb': 'no label', 'tip_hab_urb': 'no label', 'nomb_hab_urb': 'no label', 'nomb_hab_urb_2': 'no label', 'de_etapa': 'no label', 'de_sector': 'no label', 'de_zona': 'no label', 'cod_mz': 'no label', 'nomb_mz': 'no label', 'nomb_mz_2': 'no label', 'fuente_mz': 'no label', 'obsv': 'no label', 'shape_length': 'no label', 'shape_area': 'no label', });
lyr_NASCA_OFICIAL_OTASSLIMITES_ADMINISTRATIVOS_5.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nomb_depart': 'no label', 'nomb_prov': 'no label', 'nomb_dist': 'no label', 'ubigeo_reniec': 'no label', 'fuente': 'no label', 'fecha': 'no label', 'obsv': 'no label', 'shape_length': 'no label', 'shape_area': 'no label', });
lyr_NASCA_OFICIAL_OTASSHIDROGRAFIA_6.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'cod_hidro': 'no label', 'tip_hidro': 'no label', 'nomb_hidro': 'no label', 'fuente_hid': 'no label', 'obsv': 'no label', 'shape_length': 'no label', });
lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nomb_depart': 'no label', 'nomb_prov': 'no label', 'nomb_dist': 'no label', 'ubigeo_reniec': 'no label', 'cod_hab_urb': 'no label', 'tip_hab_urb': 'no label', 'nomb_hab_urb': 'no label', 'nomb_hab_urb_2': 'no label', 'de_etapa': 'no label', 'de_sector': 'no label', 'de_zona': 'no label', 'fuente_ha_urb': 'no label', 'obsv': 'no label', 'shape_length': 'no label', 'shape_area': 'no label', });
lyr_NASCA_OFICIAL_OTASSHAB_URBANAS_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});