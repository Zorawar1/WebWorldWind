/*
 * Copyright 2003-2006, 2009, 2017, 2020 United States Government, as represented
 * by the Administrator of the National Aeronautics and Space Administration.
 * All rights reserved.
 *
 * The NASAWorldWind/WebWorldWind platform is licensed under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License
 * at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 * NASAWorldWind/WebWorldWind also contains the following 3rd party Open Source
 * software:
 *
 *    ES6-Promise – under MIT License
 *    libtess.js – SGI Free Software License B
 *    Proj4 – under MIT License
 *    JSZip – under MIT License
 *
 * A complete listing of 3rd Party software notices and licenses included in
 * WebWorldWind can be found in the WebWorldWind 3rd-party notices and licenses
 * PDF found in code  directory.
 */
/**
 * Illustrates how to display and pick Placemarks.
 */
requirejs(['./WorldWindShim',
        './LayerManager'],
    function (WorldWind,
              LayerManager) {
        "use strict";

        // Tell WorldWind to log only warnings and errors.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // Create the WorldWindow.
        var wwd = new WorldWind.WorldWindow("canvasOne");

        // Create and add layers to the WorldWindow.
        var layers = [
            // Imagery layers.
            {layer: new WorldWind.BMNGLayer(), enabled: true},
            {layer: new WorldWind.BMNGLandsatLayer(), enabled: false},
            {layer: new WorldWind.BingAerialWithLabelsLayer(null), enabled: true},
            // Add atmosphere layer on top of all base layers.
            {layer: new WorldWind.AtmosphereLayer(), enabled: true},
            // WorldWindow UI layers.
            {layer: new WorldWind.CompassLayer(), enabled: true},
            {layer: new WorldWind.CoordinatesDisplayLayer(wwd), enabled: true},
            {layer: new WorldWind.ViewControlsLayer(wwd), enabled: true}
        ];

        for (var l = 0; l < layers.length; l++) {
            layers[l].layer.enabled = layers[l].enabled;
            wwd.addLayer(layers[l].layer);
        }

        // Define the images we'll use efor the placemarks.
        var images = [
            "baguettes.png",
            "Sausage.png"
        ];

        var pinLibrary = WorldWind.configuration.baseUrl + "images/pushpins/", // location of the image files
            placemark,
            placemarkAttributes = new WorldWind.PlacemarkAttributes(null),
            highlightAttributes,
            placemarkLayer = new WorldWind.RenderableLayer("Placemarks"),
            latitude = 48.864716,
            longitude = 2.349014;

        // Set up the common placemark attributes.
        placemarkAttributes.imageScale = .125;
        placemarkAttributes.imageOffset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.3,
            WorldWind.OFFSET_FRACTION, 0.0);
        placemarkAttributes.imageColor = WorldWind.Color.WHITE;
        placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);
        placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
        placemarkAttributes.drawLeaderLine = true;                   placemark = new WorldWind.Placemark(new WorldWind.Position(52.5200, 13.4050, 1e2), true, null);
        placemarkAttributes.leaderLineAttributes.outlineColor = WorldWind.Color.RED;











        // For each placemark image, create a placemark with a label.
        for (var i = 0, len = images.length; i < len; i++) {
            // Create the placemark and its label.
            placemark = new WorldWind.Placemark(new WorldWind.Position(latitude, longitude, 1e2), true, null);

            // placemark1 = new WorldWind.Placemark(new WorldWind.Position(52.5200, 13.4050, 1e2), true, null);

            placemark.label = "Placemark " + i.toString() + "\n"
                + "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n"
                + "Lon " + placemark.position.longitude.toPrecision(5).toString();
            placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

            // Create the placemark attributes for this placemark. Note that the attributes differ only by their
            // image URL.
            placemarkAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
            placemarkAttributes.imageSource = pinLibrary + images[i];
            placemark.attributes = placemarkAttributes;

            // Create the highlight attributes for this placemark. Note that the normal attributes are specified as
            // the default highlight attributes so that all properties are identical except the image scale. You could
            // instead vary the color, image, or other property to control the highlight representation.
            highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
            highlightAttributes.imageScale = 1.2;
            placemark.highlightAttributes = highlightAttributes;

            // Add the placemark to the layer.
            placemarkLayer.addRenderable(placemark);
        }




        // START Modal Elements for French Bag
        var modalF = document.getElementById("myModalF");
// Get the image and insert it inside the modal - use its "alt" text as a caption
        var imgF = document.getElementById("myImgF");
        var modalImgF = document.getElementById("img01F");
        var captionTextF = document.getElementById("captionF");


// Get the <span> element that closes the modal
        var spanF = document.getElementsByClassName("closeF")[0];

// When the user clicks on <span> (x), close the modal
        spanF.onclick = function() {
            modalF.style.display = "none";
        }
        // START Modal Elements for French Bag
        var modalG = document.getElementById("myModalF");
// Get the image and insert it inside the modal - use its "alt" text as a caption
        var imgG = document.getElementById("myImgF");
        var modalImgG = document.getElementById("img01F");
        var captionTextG = document.getElementById("captionF");


// Get the <span> element that closes the modal
        var spanG = document.getElementsByClassName("closeF")[0];

// When the user clicks on <span> (x), close the modal
        spanG.onclick = function() {
            modalG.style.display = "none";
        }
        // END Modal Elements for French Bag



//
//         // START Modal Elements for French Bag\
//         var modalF = document.getElementById("myModalF");
//         // Get the image and insert it inside the modal - use its "alt" text as a caption
//         // var imgF =    document.getElementById("myImgF");
//         var modalImgF = document.getElementById("img01F");
//         var captionTextF = document.getElementById("captionF");
//
//
// // Get the <span> element that closes the modal
//         var spanF = document.getElementsByClassName("closeF")[0];
//
// // When the user clicks on <span> (x), close the modal
//         spanF.onclick = function() {
//             modalF.style.display = "none";
//         }




        // END Modal Elements for French Bag









        // Add the placemarks layer to the WorldWindow's layer list.
        wwd.addLayer(placemarkLayer);

        // Now set up to handle picking.

        var highlightedItemsF = [];

        // The common pick-handling function.
        var handlePickF = function (o) {
            // The input argument is either an Event or a TapRecognizer. Both have the same properties for determining
            // the mouse or tap location.
            var xF = o.clientX,
                yF = o.clientY;

            var redrawRequiredF = highlightedItemsF.length > 0; // must redraw if we de-highlight previously picked items

            // De-highlight any previously highlighted placemarks.
            for (var hF = 0; hF < highlightedItemsF.length; hF++) {
                highlightedItemsF[hF].highlighted = false;
            }
            highlightedItemsF = [];

            // Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
            // relative to the upper left corner of the canvas rather than the upper left corner of the page.
            var pickListF = wwd.pick(wwd.canvasCoordinates(xF, yF));
            if (pickListF.objects.length > 0) {
                redrawRequiredF = true;
            }

            // Highlight the items picked by simply setting their highlight flag to true.
            if (pickListF.objects.length > 0) {
                for (var pF = 0; pF < pickListF.objects.length; pF++) {
                    pickListF.objects[pF].userObject.highlighted = true;
                    // Keep track of highlighted items in order to de-highlight them later.
                    highlightedItemsF.push(pickListF.objects[pF].userObject);

                    // Detect whether the placemark's label was![](../images/pushpins/baguettes.png) picked. If so, the "labelPicked" property is true.
                    // If instead the user picked the placemark's image, the "labelPicked" property is false.
                    // Applications might use this information to determine whether the user wants to edit the label
                    // or is merely picking the placemark as a whole.

                    if (pickListF.objects[pF].labelPicked > 0) {
                        console.log("Label picked");
                    }

                    console.log("3")
                    if(pF == 1) {
                        modalF.style.display = "block";
                        modalImgF.src = "/images/pushpins/baguettes.png";
                        // console.log(this.src, this)
                        captionTextF.innerHTML = "Le Français est la Baguette"
                        console.log("YES");

                    }
                    console.log(pickListF.objects[pF].userObject)

                }
                console.log ("1")

            }


            // Update the window if we changed anything.
            if (redrawRequiredF) {
                wwd.redraw(); // redraw to make the highlighting changes take effect on the screen
            }
        };

        // Listen for mouse moves and highlight the placemarks that the cursor rolls over.
        // wwd.addEventListener("mousemove", handlePick);

        // // Listen for mouse moves and highlight the placemarks that the cursor rolls over.
        wwd.addEventListener("click", handlePickF);

        // Listen for taps on mobile devices and highlight the placemarks that the user taps.
        var tapRecognizerF = new WorldWind.TapRecognizer(wwd, handlePickF);
        // Create a layer manager for controlling layer visibility.
        var LayerManagerF = new LayerManager(wwd);










        // Now set up to handle picking.

        var highlightedItemsG = [];

        // The common pick-handling function.
        var handlePickG = function (o) {
            // The input argument is either an Event or a TapRecognizer. Both have the same properties for determining
            // the mouse or tap location.
            var xG = o.clientX,
                yG = o.clientY;

            var redrawRequiredG = highlightedItemsG.length > 0; // must redraw if we de-highlight previously picked items

            // De-highlight any previously highlighted placemarks.
            for (var hG = 0; hG < highlightedItemsG.length; hG++) {
                highlightedItemsG[hG].highlighted = false;
            }
            highlightedItemsG = [];

            // Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
            // relative to the upper left corner of the canvas rather than the upper left corner of the page.
            var pickListG = wwd.pick(wwd.canvasCoordinates(xG, yG));
            if (pickListG.objects.length > 0) {
                redrawRequiredG = true;
            // }
            // placemark = new WorldWind.Placemark(new WorldWind.Position(52.5200, 13.4050, 1e2), true, null);
            // placemarkG = new WorldWind.Placemark(new WorldWind.Position(52.5200, 13.4050, 1e2), true, null);

            // Highlight the items picked by simply setting their highlight flag to true.
            if (pickListG.objects.length > 0) {
                for (var pG = 0; pG < pickListG.objects.length; pG++) {
                    pickListG.objects[pG].userObject.highlighted = true;


                    placemarkAttributes.imageSource = pinLibrary + images[1];


                    // Keep track of highlighted items in order to de-highlight them later.
                    highlightedItemsG.push(pickListG.objects[pG].userObject);

                    // Detect whether the placemark's label was![](../images/pushpins/baguettes.png) picked. If so, the "labelPicked" property is true.
                    // If instead the user picked the placemark's image, the "labelPicked" property is false.
                    // Applications might use this information to determine whether the user wants to edit the label
                    // or is merely picking the placemark as a whole.

                    if (pickListG.objects[pG].labelPicked > 0) {
                        console.log("Label picked");
                    }

                    console.log("3")
                    if(pG == 1) {
                        modalG.style.display = "block";
                        modalImgG.src = "/images/pushpins/baguettes.png";
                        // console.log(this.src, this)
                        captionTextG.innerHTML = "Le Français est la Baguette"
                        console.log("YES");

                    }
                    console.log(pickListG.objects[pG].userObject)

                }
                console.log ("1")

            }
            console.log(placemark)


            // Update the window if we changed anything.
            if (redrawRequiredG) {
                wwd.redraw(); // redraw to make the highlighting changes take effect on the screen
            }
        };
        // Listen for mouse moves and highlight the placemarks that the cursor rolls over.
        // wwd.addEventListener("mousemove", handlePick);

        // // Listen for mouse moves and highlight the placemarks that the cursor rolls over.
        wwd.addEventListener("mousemove", handlePickG);

        // Listen for taps on mobile devices and highlight the placemarks that the user taps.
        var tapRecognizerG = new WorldWind.TapRecognizer(wwd, handlePickG);
        // Create a layer manager for controlling layer visibility.
        var layerManagerG = new LayerManager(wwd);

    });