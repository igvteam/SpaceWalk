# SpaceWalk

![spacewalk](readme_img/spacewalk-screenshot.png)

SpaceWalk is an application for displaying and interacting with super-resolution chromatin tracing data in 3D. 
SpaceWalk includes [igv.js](https://github.com/igvteam/igv.js) and [juicebox.js](https://github.com/igvteam/juicebox.js) 
instances for rapid and intuitive visual comparison and interaction between 3D data and 1D genomic data.

## Requirements
- Node >= v10.13.0
- NPM >= v6.9.0

## Supported Browsers

SpaceWalk require a modern web browser with support for Javascript ECMAScript 2015.

## Installation
* Clone this repository.
````
git clone git@github.com:igvteam/igv-webapp.git
````
* Install
````
npm install
````
## Build the app
````
npm run build
````
## Run the app
````
npm run start
````
* Open a browser and enter the follow url to run the app
````
localhost:8080/index.html
````

## Getting Started
After launching the app. You will see a blank 3D space. Use one of the dropdown menus in the navbar to load either a point cloud or a segment list dataset.

![file load](readme_img/spacewalk-file-load.png)

SpaceWalk supports loading files of various types:
- Point Cloud - Each file contains a list of point clusters. Each cluster corresponds to a genomic range.
- Segment List - Each file contains a list of traces. Each trace contains a list of segments. Each segment is a genomic range.
- IGV Tracks - Track files consumed by the IGV panel. Refer to the track section of the [igv.js wiki](https://github.com/igvteam/igv.js/wiki/Tracks-2.0)
- Juicebox Contact Maps - Refer to the [Aiden Lab](http://www.aidenlab.org/index.html) website for details.

Click the gear icon at upper left to show/hide a panel. Panels can be repositioned by dragging. 

![spacewalk panels](readme_img/spacewalk-gear-icon-and-panel.png)
 
 These task-specific interaction panels support analysis of the 3D data. 
 
![spacewalk panels](readme_img/spacewalk-panels-screenshot.png)

The panels include:
- Genomic Navigator. The genomic range for a given trace is represented by a color ramp.
Mouse over this color ramp to highlight the corresponding genomic location in the 3D trace structure.
- Trace Select. A widget to navigate between the set of traces that comprise an ensemble.
- IGV. A fully functional IGV.js application that has be extended to interact with the 3D model.
- Juicebox. A fully functional Juicebox.js that has be extended to interact with the 3D model.
- Distance Map. An ensemble level and trace level distance map created on the fly when an ensemble file is loaded.
- Contact Frequency Map. An ensemble level and trace level contact frequency map created on the fly when an ensemble file is loaded.


Three rendering styles are supported. All rely on the use of color to map genomic location to 3D.

#### Noodle

A tube is rendered that interpolates between a list of chromatin centroids. Color along the length of the tube corresponds to genomic location. 
The genomic navigator - described above - is used to identify and highlight genomic regions.

![noodle render style](readme_img/render-style-noodle.png)

#### Ball & Stick

A list of chromatin centroids are rendered as balls. Each ball is colored according to it's genomic location. Sticks (cylinders) connect balls in the order they appear in the genomic range.
The genomic navigator - described above - is used to identify each ball and highlight genomic regions. 
Alternatively, mouse over a ball to see it's genomic location in the genomic navigator's color ramp.

![ball & stick render style](readme_img/render-style-ball-stick.png)

#### Point Cloud
Centroid point clouds are rendered as 3D points. Points associated with a particular genomic range are colored based on the genomic navigator color ramp.
Mouse over the genomic navigator to isolate clusters of points for that genomic range. 

![point cloud render style](readme_img/render-style-point-cloud.png)

