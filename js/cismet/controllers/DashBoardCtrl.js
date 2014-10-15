angular.module(
    'de.cismet.smartAdmin.controllers'
    ).controller('DashBoardCtrl',
    [
        '$scope',
        'leafletData',
        '$timeout',
        function ($scope, leafletData, $timeout) {

            $scope.layerConf = [
                {
                    name: 'Stadtplan',
                    layerGroups: [{
                            groupName: "Stadtplan",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Basisdaten',
                    layerGroups: [
                        {
                            groupName: "Liegenschaftskarte",
                            expanded: true,
                            layers: {
                                "Flurkarte (farbig)": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'alf', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Flurkarte (Graustufen)": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'algw', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Schätzungskarte(farbig)": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'albsf', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Schätzungskarte (Graustufen)": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'albsgw', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Amtlicher Stadplan DGK Graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        },
                        {
                            groupName: "Digitale Grundkarte",
                            expanded: true,
                            layers: {
                                "DGK Blattschnitt": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Stadtgrenze": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'admin:stadtgrenz', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Hausnummern": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtgrundkarte_hausnr', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "DGK Grundriss graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:schwarz', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "DGK Grundriss schwarz": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        },
                        {
                            groupName: "Luftbildkarte",
                            expanded: true,
                            layers: {
                                "DGK Blattschnitt": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Stadtgrenze": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Hausnummern": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "DGK Grundriss graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:grau', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "DGK Grundriss schwarz": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:schwarz', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "DGK Grundriss gelb": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:gelb', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Wuppertaler Orthofoto 2012": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:luftbild2012', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Wuppertaler Orthofoto 2010": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:luftbild2010', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Wuppertaler Orthofoto 2007": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:luftbild2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Wuppertaler Orthofoto 2005": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:luftbild2005', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        },
                        {
                            groupName: "Urban Atlas",
                            expanded: true,
                            layers: {
                                "Urban Atlas 2005-2007": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'urban', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "DGK Grundriss graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:grau', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "NRW Orthofoto": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'NRW:luftbild2005', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Gebietsgliederungen',
                    layerGroups: [
                        {
                            groupName: "Stadtkarte",
                            expanded: true,
                            layers: {
                                "Quartiere": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'admin:quartiere', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Stadtbezirke": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'admin:stadtbezirke', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Hausnummern": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtgrundkarte_hausnr', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Digitale Grundkarte graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:DGK:grau', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Umweltdaten',
                    layerGroups: [
                        {
                            groupName: "Bodenbelastung",
                            expanded: true,
                            layers: {
                                'DGK Grundriss Graustufen': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Arsen': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Benzo-a-pyren': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Blei': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Cadmium': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Chrom': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Kupfer': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Nickel': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Quecksilber': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Geschätzte Stoffgehalte Zink': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Vorsorgekarte Boden': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Planhinweiskarte Boden': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                'Amtlicher Stadtplan Graustufen': L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Radon-Potentialkarte",
                            expanded: true,
                            layers: {
                                "Radon Potenzialkarte": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Amtlicher Stadtplan Graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Gewässer",
                            expanded: true,
                            layers: {
                                "Quellen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Gewässernamen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Gewässernetz": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Stationierung": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Digitale Grundkarte": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Stillgewässer": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Biotope": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Amtlicher Stadtplan Graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                            }
                        }, {
                            groupName: "Gewässer Strukturgüte",
                            expanded: true,
                            layers: {
                                "Einleitungen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Querbauten": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Strukturgüte": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Digitale Grundkarte": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Gewässer Massnahmen",
                            expanded: true,
                            layers: {
                                "Entfernung von Querbauten": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Etwicklungsziele": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Maßnahmen am Gewässer": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Digitale Grundkarte": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Maßnahmen in der Aue": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan2007', format: 'image/png', continuousWorld: true, opacity: 0.5}),
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Umgebungslärm",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Klima",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Luftreinhaltung",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Biotope",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Solarstrom",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }, {
                            groupName: "Solarwärme",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Verkehrsdaten',
                    layerGroups: [
                        {
                            groupName: "Stadtkarte",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Planungsdaten',
                    layerGroups: [
                        {
                            groupName: "Stadtkarte",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Infrastruktur',
                    layerGroups: [
                        {
                            groupName: "Stadtkarte",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Freizeit',
                    layerGroups: [
                        {
                            groupName: "Stadtkarte",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                }, {
                    name: 'Thematische Karten',
                    layerGroups: [
                        {
                            groupName: "Stadtkarte",
                            expanded: true,
                            layers: {
                                "Amtlicher Stadtplan graustufen": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 0.5})
                            }
                        }
                    ]
                },
            ];

            //init styled layer config
            $scope.selectedLayerconf = $scope.layerConf[0];
            $scope.updateSelectedLayerConf = function (index) {
                $scope.selectedLayerconf = $scope.layerConf[index];
            }
            $scope.$watch('selectedLayerconf', function () {
                var layerGroups;
                if ($scope.selectedLayerconf) {

                    layerGroups = $scope.selectedLayerconf.layerGroups;
                    leafletData.getMap().then(function (map) {

                        var options = {
                            container_width: "300px",
                            group_maxHeight: "80px",
                            //container_maxHeight : "350px", 
                            exclusive: false
                        };
                        if ($scope.styledLayerControl) {
                            map.removeControl($scope.styledLayerControl);
                        }
                        $scope.styledLayerControl = L.Control.styledLayerControl([{
                                groupName: "Hintergrundkarte",
                                expanded: true,
                                layers: {
                                    "Hintergrundkarte": L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {layers: 'R102:stadtplan_grau', format: 'image/png', continuousWorld: true, opacity: 1})
                                }
                            }
                        ], layerGroups, options);
                        map.addControl($scope.styledLayerControl);
                        //since we use angular leaflet directive we must bind also the new layer config to this directive...
                        $scope.layers = {
                            baselayers: {
                                layer: {
                                    name: 'Stadtplan',
                                    type: 'wms',
                                    url: 'http://geoportal.wuppertal.de:8083/deegree/wms',
                                    visible: true,
                                    layerOptions: {
                                        layers: 'R102:stadtplan_grau',
                                        format: 'image/png',
                                        //without continous world nothing is displayed No idea why..
                                        continuousWorld: true,
                                    }
                                }
                            },
                            overlayLayers: layerGroups
                        };
                    });

                }
            });

            $scope.homeBoundingBox = {
                lat: 0,
                lng: 0,
                zoom: 1
            };

            //set EPSG:25832 for the map....
            $scope.crs = new L.Proj.CRS('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs', {
                transformation: new L.Transformation(1, 0, -1, 0),
                // no idea what these resolutions mean
                resolutions: [
                    8192, 4096, 2048, 1024, 512, 256, 128,
                    64, 32, 16, 8, 4, 2, 1, 0.5
                ]
            });


            // this prevents the map to be panned out of wupp scope. but with zomming we can still produce non usable maps..
            $scope.maxBounds = {
                southWest: {
                    lng: 6.9,
                    lat: 51.1
                },
                northEast: {
                    lng: 7.4,
                    lat: 51.4
                }
            };

            $scope.showPointInMap = function () {

                leafletData.getMap().then(function (map) {
                    var transformedPoint = proj4('EPSG:25832', 'WGS84', {
                        'x': parseFloat($scope.coordX),
                        'y': parseFloat($scope.coordY)
                    });

                    L.marker([transformedPoint.y, transformedPoint.x]).addTo(map)
                        map.setZoomAround(new L.LatLng(transformedPoint.y, transformedPoint.x), 10);
                });
            }

            //options for the map
            $scope.defaults = {
                scrollWheelZoom: true,
                maxZoom: 14,
                minZoom: 1,
//                crs: L.CRS.EPSG4326
                crs: $scope.crs
            };

            //initial layer config...
            $scope.baseLayer = {
                name: 'Stadtplan',
                type: 'wms',
                url: 'http://geoportal.wuppertal.de:8083/deegree/wms',
                visible: true,
                layerOptions: {
                    layers: 'R102:stadtplan_grau',
                    format: 'image/png',
                    //without continous world nothing is displayed No idea why..
                    continuousWorld: true,
                }
            };
            $scope.layers = {
                baselayers: {
                    'layer': $scope.baseLayer
                }
            };

            // initialize the draw plugin
            leafletData.getMap().then(function (map) {
                var drawnItems = new L.FeatureGroup();
                map.addLayer(drawnItems);
                var drawControl = new L.Control.Draw({
                    draw: {
                        position: 'topleft',
                        polygon: {
                            title: 'Draw a sexy polygon!',
                            allowIntersection: false,
                            drawError: {
                                color: '#b00b00',
                                timeout: 1000
                            },
                            shapeOptions: {
                                color: '#bada55'
                            },
                            showArea: true
                        },
                        polyline: {
                            metric: false
                        },
                        circle: {
                            shapeOptions: {
                                color: '#662d91'
                            }
                        }
                    },
                    edit: {
                        featureGroup: drawnItems,
                        buffer: {
                            replace_polylines: false
                        }
                    }
                });
                var styleEditor = L.control.styleEditor({
                    position: "topleft"
                });
                map.addControl(styleEditor);
                map.addControl(drawControl);
                map.on('draw:created', function (e) {
                    var type = e.layerType,
                        layer = e.layer;
                    if (type === 'marker') {
                        layer.bindPopup('A popup!');
                    }

                    drawnItems.addLayer(layer);
                });
            });
            // init mini map
            leafletData.getMap().then(function (map) {
                var layer = L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {
                    layers: 'R102:stadtplan_grau',
                    format: 'image/png',
                    //without continous world nothing is displayed No idea why..
                    continuousWorld: true,
                    opacity: 0.5
                });
                var miniMap = new L.Control.MiniMap(
                    layer,
                    {
                        toggleDisplay: true,
                        aimingRectOptions: {color: '#0B486B', weight: 1, clickable: false, opacity: 1, fillOpacity: 0.7}
                    }
                ).addTo(map);
            });
            // init magnify
            leafletData.getMap().then(function (map) {
                L.Control.MagnifyingGlass = L.Control.extend({
                    _magnifyingGlass: false,
                    options: {
                        position: 'topleft',
                        title: 'Toggle Magnifying Glass',
                        forceSeparateButton: false
                    },
                    initialize: function (magnifyingGlass, options) {
                        this._magnifyingGlass = magnifyingGlass;
                        // Override default options
                        for (var i in options)
                            if (options.hasOwnProperty(i) && this.options.hasOwnProperty(i))
                                this.options[i] = options[i];
                    },
                    onAdd: function (map) {
                        var className = 'leaflet-control-magnifying-glass', container;
                        if (map.zoomControl && !this.options.forceSeparateButton) {
                            container = map.zoomControl._container;
                        } else {
                            container = L.DomUtil.create('div', 'leaflet-bar');
                        }

                        this._createButton(this.options.title, className, container, this._clicked, map, this._magnifyingGlass);
                        return container;
                    },
                    _createButton: function (title, className, container, method, map, magnifyingGlass) {
                        var link = L.DomUtil.create('a', className, container);
                        link.href = '#';
                        link.title = title;
                        L.DomEvent
                            .addListener(link, 'click', L.DomEvent.stopPropagation)
                            .addListener(link, 'click', L.DomEvent.preventDefault)
                            .addListener(link, 'click', function () {
                                method(map, magnifyingGlass);
                            }, map);
                        return link;
                    },
                    _clicked: function (map, magnifyingGlass) {
                        if (!magnifyingGlass) {
                            return;
                        }

                        if (map.hasLayer(magnifyingGlass)) {
                            map.removeLayer(magnifyingGlass);
                        } else {
                            magnifyingGlass.addTo(map);
                        }
                    }
                });
                L.control.magnifyingglass = function (magnifyingGlass, options) {
                    return new L.Control.MagnifyingGlass(magnifyingGlass, options);
                };
                var magnifyingGlass = L.magnifyingGlass({
                    zoomOffset: 3,
                    layers: [
                        L.tileLayer.wms('http://geoportal.wuppertal.de:8083/deegree/wms', {
                            layers: 'R102:stadtplan2007',
                            format: 'image/png',
                            //without continous world nothing is displayed No idea why..
                            continuousWorld: true,
                        })
                    ]
                });
                L.control.magnifyingglass(magnifyingGlass, {
                    forceSeparateButton: true
                }).addTo(map);
            });
            //init google geo search
            leafletData.getMap().then(function (map) {
                new L.Control.GeoSearch({
                    provider: new L.GeoSearch.Provider.Google({
                        region: 'de'
                    })
                }).addTo(map);
            });
            //init fullscreen button
            leafletData.getMap().then(function (map) {
                L.control.fullscreen({
                    position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
                    title: 'Show me the fullscreen !', // change the title of the button, default Full Screen
                    forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
                    forcePseudoFullscreen: true // force use of pseudo full screen even if full screen API is available, default false
                }).addTo(map);
            });

        }

    ]
    );