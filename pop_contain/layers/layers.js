var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_GCCWards_1 = new ol.format.GeoJSON();
var features_GCCWards_1 = format_GCCWards_1.readFeatures(json_GCCWards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCWards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCWards_1.addFeatures(features_GCCWards_1);
var lyr_GCCWards_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GCCWards_1, 
                style: style_GCCWards_1,
                interactive: true,
                title: '<img src="styles/legend/GCCWards_1.png" /> GCC Wards'
            });
var lyr_PopulationDensity_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Population Density",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PopulationDensity_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8915461.290274, 1442856.116604, 8942321.355147, 1486495.039779]
                            })
                        });
var format_Containmentzones_3 = new ol.format.GeoJSON();
var features_Containmentzones_3 = format_Containmentzones_3.readFeatures(json_Containmentzones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Containmentzones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Containmentzones_3.addFeatures(features_Containmentzones_3);
var lyr_Containmentzones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Containmentzones_3, 
                style: style_Containmentzones_3,
                interactive: true,
                title: '<img src="styles/legend/Containmentzones_3.png" /> Containment zones'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GCCWards_1.setVisible(true);lyr_PopulationDensity_2.setVisible(true);lyr_Containmentzones_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GCCWards_1,lyr_PopulationDensity_2,lyr_Containmentzones_3];
lyr_GCCWards_1.set('fieldAliases', {'ZONE_NO': 'ZONE_NO', 'WARD_NO': 'WARD_NO', 'ZONE_NAME': 'ZONE_NAME', 'WARD_NAME': 'WARD_NAME', });
lyr_Containmentzones_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_GCCWards_1.set('fieldImages', {'ZONE_NO': 'TextEdit', 'WARD_NO': 'Range', 'ZONE_NAME': 'TextEdit', 'WARD_NAME': 'TextEdit', });
lyr_Containmentzones_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_GCCWards_1.set('fieldLabels', {'ZONE_NO': 'no label', 'WARD_NO': 'no label', 'ZONE_NAME': 'no label', 'WARD_NAME': 'no label', });
lyr_Containmentzones_3.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Containmentzones_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});