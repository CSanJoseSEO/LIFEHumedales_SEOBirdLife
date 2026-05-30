var wms_layers = [];


        var lyr_Mapatopogrfico_0 = new ol.layer.Tile({
            'title': 'Mapa topográfico',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LIFEHumedalESSEOBirdLife_3 = new ol.format.GeoJSON();
var features_LIFEHumedalESSEOBirdLife_3 = format_LIFEHumedalESSEOBirdLife_3.readFeatures(json_LIFEHumedalESSEOBirdLife_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIFEHumedalESSEOBirdLife_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIFEHumedalESSEOBirdLife_3.addFeatures(features_LIFEHumedalESSEOBirdLife_3);
var lyr_LIFEHumedalESSEOBirdLife_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIFEHumedalESSEOBirdLife_3, 
                style: style_LIFEHumedalESSEOBirdLife_3,
                popuplayertitle: 'LIFEHumedalES SEOBirdLife',
                interactive: true,
                title: '<img src="styles/legend/LIFEHumedalESSEOBirdLife_3.png" /> LIFEHumedalES SEOBirdLife'
            });
var format_RN2000_4 = new ol.format.GeoJSON();
var features_RN2000_4 = format_RN2000_4.readFeatures(json_RN2000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RN2000_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RN2000_4.addFeatures(features_RN2000_4);
var lyr_RN2000_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RN2000_4, 
                style: style_RN2000_4,
                popuplayertitle: 'RN2000',
                interactive: true,
    title: 'RN2000<br />\
    <img src="styles/legend/RN2000_4_0.png" /> ZEPA<br />\
    <img src="styles/legend/RN2000_4_1.png" /> ZEC/LIC<br />\
    <img src="styles/legend/RN2000_4_2.png" /> ZEPA + ZEC/LIC<br />' });
var format_ENP_5 = new ol.format.GeoJSON();
var features_ENP_5 = format_ENP_5.readFeatures(json_ENP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENP_5.addFeatures(features_ENP_5);
var lyr_ENP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENP_5, 
                style: style_ENP_5,
                popuplayertitle: 'ENP',
                interactive: true,
                title: '<img src="styles/legend/ENP_5.png" /> ENP'
            });
var format_SitiosRamsar_6 = new ol.format.GeoJSON();
var features_SitiosRamsar_6 = format_SitiosRamsar_6.readFeatures(json_SitiosRamsar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosRamsar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosRamsar_6.addFeatures(features_SitiosRamsar_6);
var lyr_SitiosRamsar_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosRamsar_6, 
                style: style_SitiosRamsar_6,
                popuplayertitle: 'Sitios Ramsar',
                interactive: true,
                title: '<img src="styles/legend/SitiosRamsar_6.png" /> Sitios Ramsar'
            });
var format_LIFEHumedalESSEOBirdLifePuntos_7 = new ol.format.GeoJSON();
var features_LIFEHumedalESSEOBirdLifePuntos_7 = format_LIFEHumedalESSEOBirdLifePuntos_7.readFeatures(json_LIFEHumedalESSEOBirdLifePuntos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIFEHumedalESSEOBirdLifePuntos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIFEHumedalESSEOBirdLifePuntos_7.addFeatures(features_LIFEHumedalESSEOBirdLifePuntos_7);
var lyr_LIFEHumedalESSEOBirdLifePuntos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIFEHumedalESSEOBirdLifePuntos_7, 
                style: style_LIFEHumedalESSEOBirdLifePuntos_7,
                popuplayertitle: 'LIFEHumedalES SEOBirdLife (Puntos)',
                interactive: false,
                title: '<img src="styles/legend/LIFEHumedalESSEOBirdLifePuntos_7.png" /> LIFEHumedalES SEOBirdLife (Puntos)'
            });

lyr_Mapatopogrfico_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_LIFEHumedalESSEOBirdLife_3.setVisible(true);lyr_RN2000_4.setVisible(false);lyr_ENP_5.setVisible(false);lyr_SitiosRamsar_6.setVisible(true);lyr_LIFEHumedalESSEOBirdLifePuntos_7.setVisible(true);
var layersList = [lyr_Mapatopogrfico_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,lyr_LIFEHumedalESSEOBirdLife_3,lyr_RN2000_4,lyr_ENP_5,lyr_SitiosRamsar_6,lyr_LIFEHumedalESSEOBirdLifePuntos_7];
lyr_LIFEHumedalESSEOBirdLife_3.set('fieldAliases', {'Provincia': 'Provincia', 'Enclave': 'Enclave', 'Masa': 'Masa', 'COD': 'COD', 'COD_WP4': 'COD_WP4', 'OrgnLimite': 'OrgnLimite', 'Shape_Area': 'Shape_Area', 'Area': 'Area', });
lyr_RN2000_4.set('fieldAliases', {'site_code': 'site_code', 'SITE_NAME': 'SITE_NAME', 'AC': 'AC', 'TIPO': 'TIPO', 'HECTAREAS': 'HECTAREAS', });
lyr_ENP_5.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', 'FIGURA_LP': 'FIGURA_LP', });
lyr_SitiosRamsar_6.set('fieldAliases', {'RAM_NAME': 'RAM_NAME', });
lyr_LIFEHumedalESSEOBirdLifePuntos_7.set('fieldAliases', {'Provincia': 'Provincia', 'Enclave': 'Enclave', 'Masa': 'Masa', 'COD': 'COD', 'COD_WP4': 'COD_WP4', 'OrgnLimite': 'OrgnLimite', 'Area': 'Area', });
lyr_LIFEHumedalESSEOBirdLife_3.set('fieldImages', {'Provincia': 'TextEdit', 'Enclave': 'TextEdit', 'Masa': 'TextEdit', 'COD': 'TextEdit', 'COD_WP4': 'TextEdit', 'OrgnLimite': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area': 'TextEdit', });
lyr_RN2000_4.set('fieldImages', {'site_code': 'TextEdit', 'SITE_NAME': 'TextEdit', 'AC': 'TextEdit', 'TIPO': 'TextEdit', 'HECTAREAS': 'TextEdit', });
lyr_ENP_5.set('fieldImages', {'SITECODE': '', 'SITENAME': '', 'FIGURA_LP': '', });
lyr_SitiosRamsar_6.set('fieldImages', {'RAM_NAME': 'TextEdit', });
lyr_LIFEHumedalESSEOBirdLifePuntos_7.set('fieldImages', {'Provincia': 'TextEdit', 'Enclave': 'TextEdit', 'Masa': 'TextEdit', 'COD': 'TextEdit', 'COD_WP4': 'TextEdit', 'OrgnLimite': 'TextEdit', 'Area': 'TextEdit', });
lyr_LIFEHumedalESSEOBirdLife_3.set('fieldLabels', {'Provincia': 'inline label - visible with data', 'Enclave': 'inline label - always visible', 'Masa': 'header label - always visible', 'COD': 'hidden field', 'COD_WP4': 'inline label - always visible', 'OrgnLimite': 'header label - visible with data', 'Shape_Area': 'inline label - always visible', 'Area': 'hidden field', });
lyr_RN2000_4.set('fieldLabels', {'site_code': 'no label', 'SITE_NAME': 'no label', 'AC': 'hidden field', 'TIPO': 'hidden field', 'HECTAREAS': 'hidden field', });
lyr_ENP_5.set('fieldLabels', {'SITECODE': 'no label', 'SITENAME': 'no label', 'FIGURA_LP': 'no label', });
lyr_SitiosRamsar_6.set('fieldLabels', {'RAM_NAME': 'no label', });
lyr_LIFEHumedalESSEOBirdLifePuntos_7.set('fieldLabels', {'Provincia': 'no label', 'Enclave': 'header label - always visible', 'Masa': 'inline label - always visible', 'COD': 'no label', 'COD_WP4': 'no label', 'OrgnLimite': 'no label', 'Area': 'no label', });
lyr_LIFEHumedalESSEOBirdLifePuntos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});