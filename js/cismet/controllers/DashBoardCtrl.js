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
                    name: "OSM",
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            type: 'xyz'
                        }
                    }
                }, {
                    name: 'Stadtplan',
                    baselayers: {
                        stadtplan: {
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
                        },
                    }
                }, {
                    name: 'Stadtplan mit Luftbild',
                    baselayers: {
                        stadtplan: {
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
                    overlays: {
                        Luftbild: {
                            name: 'Luftbild',
                            type: 'wms',
                            url: 'http://geoportal.wuppertal.de:8083/deegree/wms',
                            visible: true,
                            layerOptions: {
                                layers: 'R102:luftbild2014',
                                format: 'image/png',
                                //without continous world nothing is displayed No idea why..
                                continuousWorld: true,
                                opacity: 0.8
                            }
                        }
                    }
                }, {
                    name: 'Stadtplan mit Gebietsgliederungen',
                    baselayers: {
                        stadtplan: {
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
                    overlays: {
                        bezirke: {
                            name: 'Bezirke',
                            type: 'wms',
                            url: 'http://geoportal.wuppertal.de:8083/deegree/wms',
                            visible: true,
                            layerOptions: {
                                layers: 'admin:stadtbezirke',
                                format: 'image/png',
                                //without continous world nothing is displayed No idea why..
                                continuousWorld: true,
                                opacity: 0.5
                            }
                        },
                        quartiere: {
                            name: 'Quartiere',
                            type: 'wms',
                            url: 'http://geoportal.wuppertal.de:8083/deegree/wms',
                            visible: true,
                            layerOptions: {
                                layers: 'admin:quartiere',
                                format: 'image/png',
                                //without continous world nothing is displayed No idea why..
                                continuousWorld: true,
                                opacity: 0.5
                            }
                        }
                    }
                },
            ];
            //init styled layer config
            //start with osm as defaul layer
            $scope.layers = {
                    name: "OSM",
                    baselayers: {
                        osm: {
                            name: 'OpenStreetMap',
                            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                            type: 'xyz'
                        },
                    }
                };
            $scope.updateSelectedLayerConf = function (index) {
                $scope.selectedLayers = $scope.layerConf[index];
                //delete the base layers

                for(var layer in $scope.layers.baselayers){
                    delete $scope.layers.baselayers[layer];
                }
                for(var layer in $scope.layers.overlays){
                    delete $scope.layers.overlays[layer];
                }
                
                for(var layer in $scope.selectedLayers.baselayers){
                    $scope.layers.baselayers[layer] = Object.create($scope.selectedLayers.baselayers[layer]);
                }
                if(!$scope.layers.overlays){
                    $scope.layers.overlays={};
                }
                for(var layer in $scope.selectedLayers.overlays){
                    $scope.layers.overlays[layer] = Object.create($scope.selectedLayers.overlays[layer]);
                }
                
                leafletData.getMap().then(function (map) {
                    var center = map.getCenter();
                    if ( $scope.selectedLayers.name === 'OSM') {
                        map.options.crs = L.CRS.EPSG3857;
                        map.options.maxZoom = 19;
                        $scope.center = {
                            lat: center.lat,
                            lng: center.lng,
                            zoom: 18
                        };
                    } else {
                        map.options.maxZoom = 14;
                        map.options.crs = $scope.EPSG25832;
                        $scope.center = {
                            lat: center.lat,
                            lng: center.lng,
                            zoom: 12
                        };
                    }

                });
            };
            
            //set EPSG:25832 for the map....
            $scope.EPSG25832 = new L.Proj.CRS('EPSG:25832', '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs', {
                transformation: new L.Transformation(1, 0, -1, 0),
                // no idea what these resolutions mean
                resolutions: [
                    8192, 4096, 2048, 1024, 512, 256, 128,
                    64, 32, 16, 8, 4, 2, 1, 0.5
                ]
            });


            //coordinates of the rathous in wupp
            $scope.center = {
                lat: 51.259681,
                lng: 7.146370,
                zoom: 12
            };

            $scope.goToHome = function () {
                $scope.center = {
                    lat: 51.259681,
                    lng: 7.146370,
                    zoom: 12
                };
            };

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

            //go to point feature
            $scope.popOverItem = {
            };
            $scope.gotToPoint = function (event) {

                leafletData.getMap().then(function (map) {
                    var transformedPoint = proj4('EPSG:25832', 'WGS84', {
                        'x': parseFloat($scope.popOverItem.x),
                        'y': parseFloat($scope.popOverItem.x)
                    });

                    L.marker([transformedPoint.y, transformedPoint.x]).addTo(map)
                    map.setZoomAround(new L.LatLng(transformedPoint.y, transformedPoint.x), 10);
                });
            };

            //options for the map
            $scope.defaults = {
                scrollWheelZoom: true,
                maxZoom: 14,
                minZoom: 0,
//                crs: L.CRS.EPSG4326
//                crs: $scope.EPSG25832,
//                detectRetina: true
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
                map.options.crs = $scope.EPSG25832;
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
            $timeout(function () {
                $scope.updateSelectedLayerConf(0);
            }, 500)
        }

    ]
    );