var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MooseCollision_1 = new ol.format.GeoJSON();
var features_MooseCollision_1 = format_MooseCollision_1.readFeatures(json_MooseCollision_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_1.addFeatures(features_MooseCollision_1);
var lyr_MooseCollision_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_1, 
                style: style_MooseCollision_1,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_1_0.png" /> 2019<br />'
        });
var format_MooseCollision_2 = new ol.format.GeoJSON();
var features_MooseCollision_2 = format_MooseCollision_2.readFeatures(json_MooseCollision_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_2.addFeatures(features_MooseCollision_2);
var lyr_MooseCollision_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_2, 
                style: style_MooseCollision_2,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_2_0.png" /> 2018<br />'
        });
var format_MooseCollision_3 = new ol.format.GeoJSON();
var features_MooseCollision_3 = format_MooseCollision_3.readFeatures(json_MooseCollision_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_3.addFeatures(features_MooseCollision_3);
var lyr_MooseCollision_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_3, 
                style: style_MooseCollision_3,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_3_0.png" /> 2017<br />'
        });
var format_MooseCollision_4 = new ol.format.GeoJSON();
var features_MooseCollision_4 = format_MooseCollision_4.readFeatures(json_MooseCollision_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_4.addFeatures(features_MooseCollision_4);
var lyr_MooseCollision_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_4, 
                style: style_MooseCollision_4,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_4_0.png" /> 2016<br />'
        });
var format_MooseCollision_5 = new ol.format.GeoJSON();
var features_MooseCollision_5 = format_MooseCollision_5.readFeatures(json_MooseCollision_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_5.addFeatures(features_MooseCollision_5);
var lyr_MooseCollision_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_5, 
                style: style_MooseCollision_5,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_5_0.png" /> 2015<br />'
        });
var format_MooseCollision_6 = new ol.format.GeoJSON();
var features_MooseCollision_6 = format_MooseCollision_6.readFeatures(json_MooseCollision_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_6.addFeatures(features_MooseCollision_6);
var lyr_MooseCollision_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_6, 
                style: style_MooseCollision_6,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_6_0.png" /> 2014<br />'
        });
var format_MooseCollision_7 = new ol.format.GeoJSON();
var features_MooseCollision_7 = format_MooseCollision_7.readFeatures(json_MooseCollision_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_7.addFeatures(features_MooseCollision_7);
var lyr_MooseCollision_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_7, 
                style: style_MooseCollision_7,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_7_0.png" /> 2013<br />'
        });
var format_MooseCollision_8 = new ol.format.GeoJSON();
var features_MooseCollision_8 = format_MooseCollision_8.readFeatures(json_MooseCollision_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_8.addFeatures(features_MooseCollision_8);
var lyr_MooseCollision_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_8, 
                style: style_MooseCollision_8,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_8_0.png" /> 2012<br />'
        });
var format_MooseCollision_9 = new ol.format.GeoJSON();
var features_MooseCollision_9 = format_MooseCollision_9.readFeatures(json_MooseCollision_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_9.addFeatures(features_MooseCollision_9);
var lyr_MooseCollision_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_9, 
                style: style_MooseCollision_9,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_9_0.png" /> 2011<br />'
        });
var format_MooseCollision_10 = new ol.format.GeoJSON();
var features_MooseCollision_10 = format_MooseCollision_10.readFeatures(json_MooseCollision_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_10.addFeatures(features_MooseCollision_10);
var lyr_MooseCollision_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_10, 
                style: style_MooseCollision_10,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_10_0.png" /> 2010<br />'
        });
var format_MooseCollision_11 = new ol.format.GeoJSON();
var features_MooseCollision_11 = format_MooseCollision_11.readFeatures(json_MooseCollision_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_11.addFeatures(features_MooseCollision_11);
var lyr_MooseCollision_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_11, 
                style: style_MooseCollision_11,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_11_0.png" /> 2009<br />'
        });
var format_MooseCollision_12 = new ol.format.GeoJSON();
var features_MooseCollision_12 = format_MooseCollision_12.readFeatures(json_MooseCollision_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_12.addFeatures(features_MooseCollision_12);
var lyr_MooseCollision_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_12, 
                style: style_MooseCollision_12,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_12_0.png" /> 2008<br />'
        });
var format_MooseCollision_13 = new ol.format.GeoJSON();
var features_MooseCollision_13 = format_MooseCollision_13.readFeatures(json_MooseCollision_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_13.addFeatures(features_MooseCollision_13);
var lyr_MooseCollision_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_13, 
                style: style_MooseCollision_13,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_13_0.png" /> 2007<br />'
        });
var format_MooseColliosn_14 = new ol.format.GeoJSON();
var features_MooseColliosn_14 = format_MooseColliosn_14.readFeatures(json_MooseColliosn_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseColliosn_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseColliosn_14.addFeatures(features_MooseColliosn_14);
var lyr_MooseColliosn_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseColliosn_14, 
                style: style_MooseColliosn_14,
                interactive: true,
    title: 'Moose Colliosn<br />\
    <img src="styles/legend/MooseColliosn_14_0.png" /> 2006<br />'
        });
var format_MooseCollision_15 = new ol.format.GeoJSON();
var features_MooseCollision_15 = format_MooseCollision_15.readFeatures(json_MooseCollision_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_15.addFeatures(features_MooseCollision_15);
var lyr_MooseCollision_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_15, 
                style: style_MooseCollision_15,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_15_0.png" /> 2005<br />'
        });
var format_MooseCollision_16 = new ol.format.GeoJSON();
var features_MooseCollision_16 = format_MooseCollision_16.readFeatures(json_MooseCollision_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollision_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollision_16.addFeatures(features_MooseCollision_16);
var lyr_MooseCollision_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollision_16, 
                style: style_MooseCollision_16,
                interactive: true,
    title: 'Moose Collision<br />\
    <img src="styles/legend/MooseCollision_16_0.png" /> 2004<br />'
        });
var format_MooseCollison_17 = new ol.format.GeoJSON();
var features_MooseCollison_17 = format_MooseCollison_17.readFeatures(json_MooseCollison_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MooseCollison_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MooseCollison_17.addFeatures(features_MooseCollison_17);
var lyr_MooseCollison_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MooseCollison_17, 
                style: style_MooseCollison_17,
                interactive: true,
    title: 'Moose Collison<br />\
    <img src="styles/legend/MooseCollison_17_0.png" /> 2003<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MooseCollision_1.setVisible(true);lyr_MooseCollision_2.setVisible(true);lyr_MooseCollision_3.setVisible(true);lyr_MooseCollision_4.setVisible(true);lyr_MooseCollision_5.setVisible(true);lyr_MooseCollision_6.setVisible(true);lyr_MooseCollision_7.setVisible(true);lyr_MooseCollision_8.setVisible(true);lyr_MooseCollision_9.setVisible(true);lyr_MooseCollision_10.setVisible(true);lyr_MooseCollision_11.setVisible(true);lyr_MooseCollision_12.setVisible(true);lyr_MooseCollision_13.setVisible(true);lyr_MooseColliosn_14.setVisible(true);lyr_MooseCollision_15.setVisible(true);lyr_MooseCollision_16.setVisible(true);lyr_MooseCollison_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MooseCollision_1,lyr_MooseCollision_2,lyr_MooseCollision_3,lyr_MooseCollision_4,lyr_MooseCollision_5,lyr_MooseCollision_6,lyr_MooseCollision_7,lyr_MooseCollision_8,lyr_MooseCollision_9,lyr_MooseCollision_10,lyr_MooseCollision_11,lyr_MooseCollision_12,lyr_MooseCollision_13,lyr_MooseColliosn_14,lyr_MooseCollision_15,lyr_MooseCollision_16,lyr_MooseCollison_17];
lyr_MooseCollision_1.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_2.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_3.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_4.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_5.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_6.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_7.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_8.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_9.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_10.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_11.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_12.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_13.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseColliosn_14.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_15.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_16.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollison_17.set('fieldAliases', {'ID': 'ID', 'Year': 'Year', 'Type_of_Cr': 'Type_of_Cr', 'Crash_Date': 'Crash_Date', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Crash_Coun': 'Crash_Coun', });
lyr_MooseCollision_1.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_2.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_3.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_4.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_5.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_6.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_7.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_8.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_9.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_10.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_11.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_12.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_13.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseColliosn_14.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_15.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_16.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollison_17.set('fieldImages', {'ID': 'TextEdit', 'Year': 'TextEdit', 'Type_of_Cr': 'TextEdit', 'Crash_Date': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Crash_Coun': 'TextEdit', });
lyr_MooseCollision_1.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_2.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_3.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_4.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_5.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_6.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_7.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_8.set('fieldLabels', {'ID': 'no label', 'Year': 'inline label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_9.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_10.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_11.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_12.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_13.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseColliosn_14.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_15.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollision_16.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollison_17.set('fieldLabels', {'ID': 'no label', 'Year': 'no label', 'Type_of_Cr': 'no label', 'Crash_Date': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Crash_Coun': 'no label', });
lyr_MooseCollison_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});